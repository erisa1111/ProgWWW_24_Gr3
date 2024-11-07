// Function to load the navbar from the navbar folder and inject it into the page
async function loadNav() {
    const navPlaceholder = document.getElementById("nav-placeholder");
    const response = await fetch("navbar/nav.html");
    const navHtml = await response.text();
    navPlaceholder.innerHTML = navHtml;

    // Once the navbar is injected, set the active link
    setActiveLink();
    setActiveLink2();
}

// Function to highlight the active page in the navbar
function setActiveLink() {
    // Get all the navigation links
    const navItems = document.querySelectorAll('.nav-item');
    // Get the current path of the URL (only the file name)
    const currentPath = window.location.pathname.split('/').pop();

    // Iterate over all the nav items
    navItems.forEach(link => {
        // Compare the link's href with the current page URL (current file)
        if (currentPath === link.getAttribute('href')) {
            link.classList.add('active');
        }
    });
}

function setActiveLink2() {
    // Get all the navigation links
    const navItems = document.querySelectorAll('.nav-item2');
    // Get the current path of the URL (only the file name)
    const currentPath = window.location.pathname.split('/').pop();

    // Iterate over all the nav items
    navItems.forEach(link => {
        // Compare the link's href with the current page URL (current file)
        if (currentPath === link.getAttribute('href')) {
            link.classList.add('active');
        }
    });
}
// Load the navbar when the page is ready
document.addEventListener('DOMContentLoaded', loadNav);


