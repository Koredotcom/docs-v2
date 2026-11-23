(function () {
  "use strict";

  const RELEASE_NOTES_PATH =
    "/agent-platform/release-notes/rn5";

  function initializeVersionFinder() {

    if (window.location.pathname.replace(/\/$/, "") !==
        RELEASE_NOTES_PATH.replace(/\/$/, "")) return;

    if (document.getElementById("version-finder")) return;

    const article = document.querySelector("main");
    if (!article) return;

    // Find all custom release anchors.
    const markers = Array.from(
      article.querySelectorAll('a[id^="v-"]')
    ).filter(a => /^v-\d+(?:-\d+)+$/.test(a.id));

    if (!markers.length) return;

    // Find the lowest common ancestor of all release anchors.
    function getCommonAncestor(elements) {
      let ancestor = elements[0].parentElement;

      while (ancestor &&
        !elements.every(el => ancestor.contains(el))) {
        ancestor = ancestor.parentElement;
      }

      return ancestor;
    }

    const container = getCommonAncestor(markers);
    if (!container) return;

    const children = Array.from(container.children);

    // Get the direct child containing a given element.
    function getDirectChild(element) {
      let node = element;

      while (node && node.parentElement !== container) {
        node = node.parentElement;
      }

      return node && node.parentElement === container
        ? node : null;
    }

    function getIndex(element) {
      return children.indexOf(getDirectChild(element));
    }

    // Extract version information.
    const releases = markers.map(marker => {
      const version = "v" +
        marker.id.substring(2).replace(/-/g, ".");

      return {
        marker,
        version,
        index: getIndex(marker)
      };
    });

    // Find the month heading associated with each release.
    releases.forEach(release => {
      release.monthIndex = -1;

      for (let i = release.index - 1; i >= 0; i--) {
        const node = children[i];

        if (node.matches("h2") ||
            node.querySelector("h2")) {
          release.monthIndex = i;
          break;
        }
      }
    });

    // Define the content range for each release.
    releases.forEach((release, i) => {
      const next = releases[i + 1];

      let endIndex = next
        ? next.index - 1
        : children.length - 1;

      // Exclude the next month's heading from this release.
      if (next &&
          next.monthIndex > release.index) {
        endIndex = next.monthIndex - 1;
      }

      release.nodes = children.slice(
        release.index,
        endIndex + 1
      );
    });

    // Create the version finder.
    const finder = document.createElement("div");
    finder.id = "version-finder";

    const label = document.createElement("label");
    label.htmlFor = "version-finder-input";
    label.textContent = "Version finder";

    const controls = document.createElement("div");
    controls.className = "vf-controls";

    const input = document.createElement("input");
    input.type = "search";
    input.id = "version-finder-input";
    input.placeholder = "Search or select a version...";
    input.setAttribute("list", "version-finder-options");
    input.autocomplete = "off";

    const datalist = document.createElement("datalist");
    datalist.id = "version-finder-options";

    releases.forEach(release => {
      const option = document.createElement("option");
      option.value = release.version;
      datalist.appendChild(option);
    });

    const clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.textContent = "Clear";

    const status = document.createElement("div");
    status.id = "version-finder-status";
    status.setAttribute("aria-live", "polite");

    controls.append(input, datalist, clearButton);
    finder.append(label, controls, status);

    // Add styling.
    const style = document.createElement("style");

    style.textContent = `
      #version-finder {
        margin: 16px 0 28px;
        padding: 16px;
        border: 1px solid var(--border);
        border-radius: 8px;
      }

      #version-finder label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 600;
      }

      #version-finder .vf-controls {
        display: flex;
        gap: 8px;
      }

      #version-finder-input {
        flex: 1;
        min-width: 0;
        padding: 9px 12px;
        border: 1px solid var(--border);
        border-radius: 6px;
        background: var(--background);
        color: var(--foreground);
        font: inherit;
      }

      #version-finder-clear {
        padding: 8px 14px;
        border: 1px solid var(--border);
        border-radius: 6px;
        background: var(--background);
        color: var(--foreground);
        cursor: pointer;
      }

      #version-finder-status {
        margin-top: 8px;
        font-size: 12px;
        color: var(--muted);
      }
      
      /* Adjust release anchor scroll position */
      a[id^="v-"]
        {
          scroll-margin-top: 100px;
        }
    `;

    document.head.appendChild(style);

    // Insert finder before the first month heading.
    const firstMonth = releases[0].monthIndex >= 0
      ? children[releases[0].monthIndex]
      : getDirectChild(markers[0]);

    firstMonth.parentNode.insertBefore(finder, firstMonth);

    // Save original visibility states.
    const originalVisibility = new Map();

    children.forEach(node => {
      originalVisibility.set(node, node.hidden);
    });

    // Filter the page.
    function filterVersion(value) {
      const selected = releases.find(release =>
        release.version.toLowerCase() ===
        value.toLowerCase()
      );

      if (!selected) {
        status.textContent =
          "Select an available version from the suggestions.";
        return;
      }

      // Hide all release content except the selected version.
      releases.forEach(release => {
        release.nodes.forEach(node => {
          node.hidden = release === selected
            ? originalVisibility.get(node)
            : true;
        });
      });

      // Show only the selected release's month heading.
      const monthIndexes = new Set(
        releases.map(r => r.monthIndex).filter(i => i >= 0)
      );

      monthIndexes.forEach(index => {
        const node = children[index];

        node.hidden = index === selected.monthIndex
          ? originalVisibility.get(node)
          : true;
      });

      status.textContent =
        "Showing release: " + selected.version;

      // Update URL for direct linking.
      history.replaceState(
        null,
        "",
        window.location.pathname +
        window.location.search +
        "#" + selected.marker.id
      );

      selected.marker.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // Apply filter on selection.
    input.addEventListener("change", () => {
      if (input.value.trim()) {
        filterVersion(input.value.trim());
      }
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        filterVersion(input.value.trim());
      }
    });

    // Restore all releases.
    function clearFilter() {
      originalVisibility.forEach((hidden, node) => {
        node.hidden = hidden;
      });

      input.value = "";
      status.textContent = "Showing all releases.";

      history.replaceState(
        null,
        "",
        window.location.pathname +
        window.location.search
      );
    }

    clearButton.addEventListener("click", clearFilter);

    // Support direct links to a release anchor.
    const initialVersion = window.location.hash.substring(1);

    if (/^v-\d+(?:-\d+)+$/.test(initialVersion)) {
      const release = releases.find(
        r => r.marker.id === initialVersion
      );

      if (release) {
        input.value = release.version;
        filterVersion(release.version);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeVersionFinder
    );
  } else {
    initializeVersionFinder();
  }

})();