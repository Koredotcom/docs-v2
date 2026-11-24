import { useRef, useState } from "react";

// Provides the search field and filters the error and warning codes on the page.
// Each code is a heading 2 followed by its content (severity, meaning, and fix).
export const ErrorCodeSearch = () => {
  const [query, setQuery] = useState("");
  const [resultCount, setResultCount] = useState(null);
  const wrapperRef = useRef(null);

  // Build a list that associates each heading 2 with the content that follows it.
  // The list is rebuilt on every search so it always matches the rendered page.
  const getSections = () => {
    const main = wrapperRef.current?.closest("main");

    if (!main) return [];

    // Find heading 2 elements, excluding headings in code blocks.
    const headings = Array.from(main.querySelectorAll("h2")).filter(
      (heading) => !heading.closest("pre, code")
    );

    return headings.map((heading) => {
      const elements = [];

      // Collect everything between this heading and the next heading 2.
      let element = heading.nextElementSibling;

      while (element && element.tagName !== "H2") {
        elements.push(element);
        element = element.nextElementSibling;
      }

      return { heading, elements };
    });
  };

  // Normalize text so searches ignore case, underscores, hyphens, and extra whitespace.
  const normalize = (text) =>
    text.toLowerCase().replace(/[_-]/g, " ").replace(/\s+/g, " ").trim();

  const setVisible = (section, visible) => {
    const display = visible ? "" : "none";

    section.heading.style.display = display;

    section.elements.forEach((element) => {
      element.style.display = display;
    });
  };

  // Show only the error codes whose heading or content contains every search term.
  const applyFilter = (value) => {
    const sections = getSections();
    const normalizedQuery = normalize(value);

    // Restore the complete page when the search field is empty.
    if (!normalizedQuery) {
      sections.forEach((section) => setVisible(section, true));
      setResultCount(null);
      return;
    }

    // Split multi-word searches so every word must be present in the section.
    const terms = normalizedQuery.split(" ");
    let matches = 0;

    sections.forEach((section) => {
      // Search the error code and all of its content.
      const headingText = section.heading.textContent || "";

      const bodyText = section.elements
        .map((element) => element.textContent || "")
        .join(" ");

      const sectionText = normalize(`${headingText} ${bodyText}`);

      const matchesQuery = terms.every((term) => sectionText.includes(term));

      if (matchesQuery) {
        matches += 1;
      }

      setVisible(section, matchesQuery);
    });

    setResultCount(matches);
  };

  // Apply the filter whenever the user changes the search text.
  const handleChange = (event) => {
    const value = event.target.value;

    setQuery(value);
    applyFilter(value);
  };

  // Clear the search and restore all error codes.
  const handleClear = () => {
    setQuery("");
    applyFilter("");
  };

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      {/* Search field label */}
      <label
        htmlFor="error-code-search"
        style={{
          display: "block",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        Filter the error codes using keywords
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
          id="error-code-search"
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Type an error code or a keyword..."
          aria-describedby="error-code-search-results"
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

      {/* Display the number of matching error codes. */}
      <div
        id="error-code-search-results"
        aria-live="polite"
        style={{
          marginTop: "0.5rem",
          fontSize: "0.875rem",
          opacity: 0.7,
        }}
      >
        {resultCount !== null &&
          `${resultCount} matching error ${resultCount === 1 ? "code" : "codes"}`}
      </div>
    </div>
  );
};
