function navigateTo(pageId) {
  // Push the new state to browser history
  window.history.pushState({ pageId }, "", `#${pageId}`);
  showPage(pageId);
}

// Add new function to handle page display
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
    targetPage.scrollTop = 0;
  }
}

// Add event listener for browser back/forward buttons
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.pageId) {
    showPage(event.state.pageId);
  } else {
    showPage("welcome-page");
  }
});

// Handle initial page load based on hash
window.addEventListener("load", () => {
  const pageId = window.location.hash.slice(1) || "welcome-page";
  showPage(pageId);
});

function openResume() {
  window.open("/Resume_2025.pdf", "_blank");
}
