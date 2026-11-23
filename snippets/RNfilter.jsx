import { useEffect, useMemo, useRef, useState } from "react";

// Matches custom release anchors such as v-1-9-3 and v-1-0.
const ANCHOR_PATTERN = /^v-\d+(?:-\d+)+$/;

// Convert an anchor ID to a display version: v-1-9-3 becomes v1.9.3.
const toVersion = (id) => "v" + id.slice(2).replace(/-/g, ".");

// Normalize user input so "V1.9.3", " 1.9.3 " and "v1.9.3" are equal.
const normalize = (text) => text.toLowerCase().replace(/^v/, "").trim();

// Reads the release anchors from the page.
const readReleases = (root) => {
  const anchors = Array.from(root.querySelectorAll("a[id]")).filter(
    (anchor) => ANCHOR_PATTERN.test(anchor.id) && !anchor.closest("pre, code")
  );

  if (!anchors.length) return null;

  return anchors.map((anchor) => ({
    id: anchor.id,
    version: toVersion(anchor.id),
    anchor,
  }));
};

// Provides the Version finder and jumps to the selected release.
export const VersionFinder = () => {
  const [versions, setVersions] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const data = useRef(null);
  const wrapper = useRef(null);

  // Scroll to a release anchor and update the URL for direct linking.
  const jumpTo = (version) => {
    const release = data.current?.find((r) => r.version === version);
    if (!release) return;

    release.anchor.style.scrollMarginTop = "200px";
    release.anchor.scrollIntoView({ block: "start" });
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search + "#" + release.id
    );
  };

  // Read the anchors once the MDX content is on the page.
  useEffect(() => {
    let attempts = 0;
    let timer;

    const load = () => {
      const root = wrapper.current?.closest("main") || document.body;
      const result = readReleases(root);

      if (result) {
        data.current = result;
        setVersions(result.map((r) => r.version));

        // Support direct links such as #v-1-9-3.
        const hash = decodeURIComponent(window.location.hash.slice(1));
        const linked = result.find((r) => r.id === hash);
        if (linked) {
          setQuery(linked.version);
          setSelected(linked.version);
          jumpTo(linked.version);
        }
      } else if (attempts++ < 30) {
        timer = setTimeout(load, 100);
      }
    };

    load();

    return () => clearTimeout(timer);
  }, []);

  // Show the matching version when the user follows a link to a release anchor.
  useEffect(() => {
    const onHashChange = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const linked = data.current?.find((r) => r.id === hash);
      if (linked) {
        setQuery(linked.version);
        setSelected(linked.version);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const suggestions = useMemo(() => {
    const q = normalize(query);
    if (!q) return versions;

    const starts = versions.filter((v) => normalize(v).startsWith(q));
    const contains = versions.filter(
      (v) => !normalize(v).startsWith(q) && normalize(v).includes(q)
    );
    return [...starts, ...contains];
  }, [query, versions]);

  const choose = (version) => {
    setQuery(version);
    setSelected(version);
    setOpen(false);
    setActiveIndex(-1);
    jumpTo(version);
  };

  const handleClear = () => {
    setQuery("");
    setSelected(null);
    setOpen(false);
    setActiveIndex(-1);
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    setOpen(true);
    setActiveIndex(-1);
    if (!event.target.value.trim()) handleClear();
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const exact = versions.find((v) => normalize(v) === normalize(query));
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        choose(suggestions[activeIndex]);
      } else if (exact) {
        choose(exact);
      } else if (suggestions.length === 1) {
        choose(suggestions[0]);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapper} className="vf-root">
      {/* Styles use classes so the dropdown can follow the page's light and dark mode. */}
      <style>{`
        .vf-root { display: flex; align-items: center; gap: 0.75rem; margin: 1rem 0 0.5rem; flex-wrap: wrap; }
        .vf-label { font-weight: 600; }
        .vf-field { position: relative; width: 200px; }
        .vf-input { width: 100%; box-sizing: border-box; padding: 0.4rem 0.6rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.9rem; background: transparent; color: inherit; }
        .vf-list { position: absolute; z-index: 20; top: 100%; left: 0; min-width: 100%; max-height: 16rem; overflow-y: auto; margin-top: 0.25rem; padding: 0.25rem; border: 1px solid #d1d5db; border-radius: 0.5rem; background: #ffffff; color: #111827; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12); }
        .vf-option { padding: 0.35rem 0.6rem; border-radius: 0.35rem; cursor: pointer; white-space: nowrap; }
        .vf-option[aria-selected="true"] { background: rgba(0, 0, 0, 0.07); }
        .vf-button { padding: 0.4rem 0.8rem; border: 1px solid #d1d5db; border-radius: 0.5rem; background: transparent; color: inherit; cursor: pointer; font-size: 0.9rem; }
        .vf-status { font-size: 0.875rem; opacity: 0.7; }
        html.dark .vf-input, html.dark .vf-button { border-color: rgba(255, 255, 255, 0.2); }
        html.dark .vf-list { background: #111717; color: #f3f4f6; border-color: rgba(255, 255, 255, 0.2); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); }
        html.dark .vf-option[aria-selected="true"] { background: rgba(255, 255, 255, 0.12); }
      `}</style>

      <label htmlFor="version-finder" className="vf-label">
        Go to a version
      </label>

      <div className="vf-field">
        <input
          id="version-finder"
          className="vf-input"
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls="version-finder-list"
          aria-autocomplete="list"
          aria-describedby="version-finder-status"
          autoComplete="off"
          value={query}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={handleKeyDown}
          placeholder="v1.10.0"
        />

        {/* Use div elements, not a list, so the page's list styles never apply. */}
        {open && suggestions.length > 0 && (
          <div id="version-finder-list" role="listbox" className="vf-list">
            {suggestions.map((version, index) => (
              <div
                key={version}
                role="option"
                className="vf-option"
                aria-selected={index === activeIndex}
                // Use mouse down so the choice registers before the input loses focus.
                onMouseDown={(event) => {
                  event.preventDefault();
                  choose(version);
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {version}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Show the button only when a version is selected. */}
      {selected && (
        <button type="button" className="vf-button" onClick={handleClear}>
          Clear
        </button>
      )}

      <div
        id="version-finder-status"
        className="vf-status"
        aria-live="polite"
      >
        {selected
          ? `Jumped to release ${selected}`
          : query && suggestions.length === 0
          ? "No matching version."
          : ""}
      </div>
    </div>
  );
};
