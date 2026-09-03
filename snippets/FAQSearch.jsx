import { useEffect, useState } from "react";

export const FAQSearch = () => {
  const [query, setQuery] = useState("");
  const [resultCount, setResultCount] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const searchInput = document.getElementById("faq-search");
      const main = searchInput?.closest("main");

      if (!main) return;

      const headings = Array.from(main.querySelectorAll("h2, h3")).filter(
        (heading) => !heading.closest("pre, code")
      );

      const categories = [];
      let currentCategory = null;
      let currentFaq = null;

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

      const normalize = (text) =>
        text.toLowerCase().replace(/\s+/g, " ").trim();

      const applyFilter = (value) => {
        const normalizedQuery = normalize(value);

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

        const terms = normalizedQuery.split(/\s+/);
        let matches = 0;

        categories.forEach((category) => {
          let categoryHasMatch = false;

          category.faqs.forEach((faq) => {
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

              faq.heading.style.display = "";

              faq.elements.forEach((element) => {
                element.style.display = "";
              });
            } else {
              faq.heading.style.display = "none";

              faq.elements.forEach((element) => {
                element.style.display = "none";
              });
            }
          });

          category.heading.style.display = categoryHasMatch ? "" : "none";
        });

        setResultCount(matches);
      };

      main.__faqSearchApplyFilter = applyFilter;

      applyFilter("");
    }, 0);

    return () => {
      clearTimeout(timer);

      const searchInput = document.getElementById("faq-search");
      const main = searchInput?.closest("main");

      if (main) {
        delete main.__faqSearchApplyFilter;
      }
    };
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;

    setQuery(value);

    const searchInput = event.currentTarget;
    const main = searchInput.closest("main");

    if (main?.__faqSearchApplyFilter) {
      main.__faqSearchApplyFilter(value);
    }
  };

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
      <label
        htmlFor="faq-search"
        style={{
          display: "block",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        Search this FAQ article
      </label>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Search questions and answers..."
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