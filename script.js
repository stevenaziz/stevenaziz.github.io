// Toggles the mobile navigation bar dropdown
function toggleDropdown() {
    document.body.classList.toggle("fullscreen-nav");
}

// Closes the mobile navigation bar dropdown
function closeDropdown() {
    if (document.body.classList.contains("fullscreen-nav")) {
        toggleDropdown();
    }
}

// Applies mobile class to body if viewport is too small
function checkViewport() {
    let breakpoint = 996; // Breakpoint for mobile view of navigation

    if (window.innerWidth < breakpoint && !document.body.classList.contains("mobile")) {
        document.body.classList.add("mobile");
    }
    else if (window.innerWidth >= breakpoint && document.body.classList.contains("mobile")) {
        closeDropdown();
        document.body.classList.remove("mobile");
    }
}

// Function is run when the page initially loads
function main() {
    checkViewport();
    
    // selects all navigation bar links
    const mobileLinks = document.querySelectorAll("nav>div>a");

    // adds event listener to the navigation bar links -> close dropdown when clicked
    for (anchor of mobileLinks) {
        anchor.addEventListener('click', closeDropdown);
    }

    // footer copyright text
    document.getElementById("copyright").innerHTML = "Copyright &copy; 2018-" + new Date().getFullYear() + " Steven Aziz. All rights reserved.";

    document.body.style.opacity = "1";
}