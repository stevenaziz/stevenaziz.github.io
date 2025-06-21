// Toggles the mobile nav dropdown
function toggleDropdown() {
    document.body.classList.toggle("fullscreen-nav");
}

// Checks whether the mobile nav dropdown is open and closes it
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
    
    const mobileLinks = document.querySelectorAll("nav>div>a");

    for (anchor of mobileLinks) {
        anchor.addEventListener('click', closeDropdown);
    }

    document.getElementById("copyright").innerHTML = "Copyright &copy; " + new Date().getFullYear() + " Steven Aziz. All rights reserved.";

    document.body.classList.remove("fade-out");
}