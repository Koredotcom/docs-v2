import { useEffect, useMemo, useRef, useState } from "react";

// Matches custom release anchors such as v-1-9-3 and v-1-0.
const ANCHOR_PATTERN = /^v-\d+(?:-\d+)+$/;

// Convert an anchor ID to a display version: v-1-9-3 becomes v1.9.3.
const toVersion = (id) => "v" + id.slice(2).replace(/-/g, ".");

// Normalize user input so "V1.9.3", " 1.9.3 " and "v1.9.3" are equal.
const normalize = (text) => text.toLowerCase().replace(/^v/, "").trim();

// A horizontal line (---) renders as <hr>, possibly inside a wrapper element.
const isRule = (node) =>
  node.tagName === "HR" ||
  (node.children.length === 1 && node.firstElementChild.tagName === "HR");

// Reads the release anchors from the page and maps each release to its content.
// A release starts at its anchor and ends at the next horizontal line.
const readReleases = (root) => {
  const anchors = Array.from(root.querySelectorAll("a[id]")).filter(
    (anchor) => ANCHOR_PATTERN.test(anchor.id) && !anchor.closest("pre, code")
  );

  if (!anchors.length) return null;

  // Find the element that directly contains all release blocks.
  let container = anchors[0].parentElement;
  while (container && !anchors.every((anchor) => container.contains(anchor))) {
    container = container.parentElement;
  }
  if (!container) return null;

  const children = Array.from(container.children);

  const blockOf = (element) => {
    let node = element;
    while (node && node.parentElement !== container) node = node.parentElement;
    return node;
  };

  const releases = anchors.map((anchor) => {
    const start = children.indexOf(blockOf(anchor));
    let end = children.length - 1;

    for (let i = start + 1; i < children.length; i++) {
      if (isRule(children[i])) {
        end = i;
        break;
      }
    }

    return {
      id: anchor.id,
      version: toVersion(anchor.id),
      anchor,
      start,
      end,
      nodes: children.slice(start, end + 1),
    };
  });

  // Month headings are H2 elements that sit outside every release.
  const inRelease = (index) =>
    releases.some((r) => index >= r.start && index <= r.end);

  const monthHeadings = children
    .map((node, index) => ({ node, index }))
    .filter(
      ({ node, index }) =>
        !inRelease(index) &&
        (node.tagName === "H2" || node.querySelector("h2"))
    );

  return { children, releases, monthHeadings };
};

// Provides the Version finder and filters the release notes by version.
export const VersionFinder = () => {
  const [versions, setVersions] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const data = useRef(null);
  const wrapper = useRef(null);

  // Read the anchors once the MDX content is on the page.
  useEffect(() => {
    let attempts = 0;
    let timer;

    const load = () => {
      const root = wrapper.current?.closest("main") || document.body;
      const result = readReleases(root);

      if (result) {
        data.current = result;
        setVersions(result.releases.map((r) => r.version));

        // Support direct links such as #v-1-9-3.
        const hash = decodeURIComponent(window.location.hash.slice(1));
        const linked = result.releases.find((r) => r.id === hash);
        if (linked) {
          setQuery(linked.version);
          setSelected(linked.version);
        }
      } else if (attempts++ < 30) {
        timer = setTimeout(load, 100);
      }
    };

    load();

    // Show every release again when the component unmounts.
    return () => {
      clearTimeout(timer);
      showAll();
    };
  }, []);

  // Apply the filter when the user follows a link to a release anchor.
  useEffect(() => {
    const onHashChange = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const linked = data.current?.releases.find((r) => r.id === hash);
      if (linked) {
        setQuery(linked.version);
        setSelected(linked.version);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const showAll = () => {
    data.current?.children.forEach((node) => {
      node.style.display = "";
    });
  };

  // Hide every release except the selected one.
  useEffect(() => {
    if (!data.current) return;

    showAll();
    if (!selected) return;

    const { releases, monthHeadings } = data.current;
    const current = releases.find((r) => r.version === selected);
    if (!current) return;

    releases.forEach((release) => {
      if (release !== current) {
        release.nodes.forEach((node) => {
          node.style.display = "none";
        });
      }
    });

    // Keep only the month heading that sits above the selected release.
    const month = monthHeadings.filter((m) => m.index < current.start).pop();
    monthHeadings.forEach((m) => {
      if (m !== month) m.node.style.display = "none";
    });

    current.anchor.style.scrollMarginTop = "200px";
    current.anchor.scrollIntoView({ block: "start" });
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search + "#" + current.id
    );
  }, [selected, versions]);

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
        Filter RNs by a version
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
          placeholder="v1.9.3"
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
          Show all
        </button>
      )}

      <div
        id="version-finder-status"
        className="vf-status"
        aria-live="polite"
      >
        {selected
          ? `Showing release ${selected}`
          : query && suggestions.length === 0
          ? "No matching version."
          : ""}
      </div>
    </div>
  );
};
