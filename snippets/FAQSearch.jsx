import { useEffect, useState } from "react";

// Provides the search field and filters the FAQ content on the page.
export const FAQSearch = () => {
  const [query, setQuery] = useState("");
  const [resultCount, setResultCount] = useState(null);

  useEffect(() => {
    // Wait for Mintlify to finish rendering the MDX content.
    const timer = setTimeout(() => {
      const searchInput = document.getElementById("faq-search");
      const main = searchInput?.closest("main");

      if (!main) return;

      // Find FAQ category and question headings, excluding headings in code blocks.
      const headings = Array.from(main.querySelectorAll("h2, h3")).filter(
        (heading) => !heading.closest("pre, code")
      );

      const categories = [];
      let currentCategory = null;
      let currentFaq = null;

      // Build a structure that associates each FAQ question with its answer content.
      headings.forEach((heading) => {
        if (heading.tagName === "H2") {
          currentCategory = {
            heading,
            faqs: [],
          };

          categories.push(currentCategory);
          currentFaq = null;
        } else if (heading.tagName === "H3" && currentCategory) {
          currentFaq = {
            heading,
            elements: [],
          };

          currentCategory.faqs.push(currentFaq);

          // Collect everything between this question and the next FAQ/category heading.
          let element = heading.nextElementSibling;

          while (
            element &&
            element.tagName !== "H2" &&
            element.tagName !== "H3"
          ) {
            currentFaq.elements.push(element);
            element = element.nextElementSibling;
          }
        }
      });

      // Normalize text so searches are case-insensitive and whitespace-independent.
      const normalize = (text) =>
        text.toLowerCase().replace(/\s+/g, " ").trim();

      // Show only FAQs whose question or answer contains every search term.
      const applyFilter = (value) => {
        const normalizedQuery = normalize(value);

        // Restore the complete FAQ page when the search field is empty.
        if (!normalizedQuery) {
          categories.forEach((category) => {
            category.heading.style.display = "";

            category.faqs.forEach((faq) => {
              faq.heading.style.display = "";

              faq.elements.forEach((element) => {
                element.style.display = "";
              });
            });
          });

          setResultCount(null);
          return;
        }

        // Split multi-word searches so every word must be present in the FAQ.
        const terms = normalizedQuery.split(/\s+/);
        let matches = 0;

        categories.forEach((category) => {
          let categoryHasMatch = false;

          category.faqs.forEach((faq) => {
            // Search both the FAQ question and all of its answer content.
            const questionText = faq.heading.textContent || "";

            const answerText = faq.elements
              .map((element) => element.textContent || "")
              .join(" ");

            const faqText = normalize(`${questionText} ${answerText}`);

            const matchesQuery = terms.every((term) =>
              faqText.includes(term)
            );

            if (matchesQuery) {
              categoryHasMatch = true;
              matches += 1;

              // Keep matching FAQ questions and answers visible.
              faq.heading.style.display = "";

              faq.elements.forEach((element) => {
                element.style.display = "";
              });
            } else {
              // Hide nonmatching FAQ questions and their answers.
              faq.heading.style.display = "none";

              faq.elements.forEach((element) => {
                element.style.display = "none";
              });
            }
          });

          // Hide a category when none of its FAQs match the search.
          category.heading.style.display = categoryHasMatch ? "" : "none";
        });

        setResultCount(matches);
      };

      // Make the filter function available to the search input.
      main.__faqSearchApplyFilter = applyFilter;

      // Start with all FAQs visible.
      applyFilter("");
    }, 0);

    // Remove the timer and filter reference when the component is unmounted.
    return () => {
      clearTimeout(timer);

      const searchInput = document.getElementById("faq-search");
      const main = searchInput?.closest("main");

      if (main) {
        delete main.__faqSearchApplyFilter;
      }
    };
  }, []);

  // Apply the filter whenever the user changes the search text.
  const handleChange = (event) => {
    const value = event.target.value;

    setQuery(value);

    const searchInput = event.currentTarget;
    const main = searchInput.closest("main");

    if (main?.__faqSearchApplyFilter) {
      main.__faqSearchApplyFilter(value);
    }
  };

  // Clear the search and restore all FAQs.
  const handleClear = () => {
    setQuery("");

    const searchInput = document.getElementById("faq-search");
    const main = searchInput?.closest("main");

    if (main?.__faqSearchApplyFilter) {
      main.__faqSearchApplyFilter("");
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      {/* Search field label */}
      <label
        htmlFor="faq-search"
        style={{
          display: "block",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        Filter the FAQs using keywords
      </label>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        {/* Search input */}
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Type a keyword or a phrase..."
          aria-describedby="faq-search-results"
          style={{
            flex: 1,
            minWidth: 0,
            padding: "0.7rem 0.8rem",
            border: "1px solid var(--border-color, #d1d5db)",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            background: "var(--background, transparent)",
            color: "inherit",
          }}
        />

        {/* Show the clear button only when a search is active. */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              padding: "0.7rem 0.9rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--border-color, #d1d5db)",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Display the number of matching FAQs. */}
      <div
        id="faq-search-results"
        aria-live="polite"
        style={{
          marginTop: "0.5rem",
          fontSize: "0.875rem",
          opacity: 0.7,
        }}
      >
        {resultCount !== null &&
          `${resultCount} matching ${resultCount === 1 ? "FAQ" : "FAQs"}`}
      </div>
    </div>
  );
};
