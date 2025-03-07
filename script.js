// Sidebar Toggle
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const mainContent = document.getElementById("mainContent");

// Open Sidebar
menuToggle.addEventListener("click", () => {
    sidebar.classList.add("open");
});

// Close Sidebar
closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

// Click outside to close
document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("open");
    }
});
