// Toggles the mobile nav dropdown
function ToggleDropdown() {
    document.body.classList.toggle("fullscreen-nav");
}

// Checks whether the mobile nav dropdown is open and closes it
function CloseDropdown() {
    if (document.body.classList.contains("fullscreen-nav")) {
        ToggleDropdown();
    }
}

// Applies mobile class to body if viewport is too small
function CheckViewport() {
    if (window.innerWidth < 769 && !document.body.classList.contains("mobile")) {
        document.body.classList.add("mobile");
    }
    else if (window.innerWidth >= 769 && document.body.classList.contains("mobile")) {
        CloseDropdown();
        document.body.classList.remove("mobile");
    }
}

// Function is run when the page initially loads
function Main() {
    CheckViewport();
    
    const mobileLinks = document.querySelectorAll("nav>div>a");
    for (anchor of mobileLinks) {
        anchor.addEventListener('click', CloseDropdown);
    }

    document.body.classList.remove("fade-out");
}