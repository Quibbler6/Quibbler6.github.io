function writeLastUpdate() {
  const nodes = document.querySelectorAll("[data-last-updated]");
  nodes.forEach((node) => {
    node.textContent = node.getAttribute("data-last-updated") || "Last update: May 2026.";
  });
}

window.addEventListener("DOMContentLoaded", writeLastUpdate);

