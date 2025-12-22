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
    const breakpoint = 1068; // Breakpoint for mobile view of navigation

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

    // adds event listener to the navigation bar links (close dropdown when any button is clicked)
    for (anchor of mobileLinks) {
        anchor.addEventListener('click', closeDropdown);
    }

    // selects contact form elements
    const form = document.getElementById('contact_form');
    const form_status = document.getElementById('form_status');
    const form_button = document.getElementById('submit_button');

    // send form data after submission
    form.addEventListener('submit', function(event) {
        // Honeypot check
        if (form.company.value) {
            return;
        }

        event.preventDefault();
        form_button.textContent = "Sending...";
        form_button.classList.add("disabled_button");
        form_button.disabled = true;

        const service_id = "Vu.2GhMT3iKBzKD7";
        const template_id = "*x!z344nzA4gJjov";
        let message_submitted = false;

        emailjs.sendForm(
            service_id,
            template_id,
            this
        ).then(
            function() {
                message_submitted = true;
            },
            function(error) {
                console.error(error);
            }
        );

        setTimeout(() => {
            form_button.textContent = "Send";
            form_button.classList.remove("disabled_button");
            form_button.disabled = false;

            if (message_submitted) {
                form_status.textContent = "Thanks! Your message has been sent.";
                form_status.classList.remove("status_error");
                form_status.classList.add("status_success");
                form.reset();
                setTimeout(() => {
                    form_status.classList.remove("status_success");
                }, 5000);
            }
            else {
                form_status.textContent = "Message not sent. Please try again or email Steven directly.";
                form_status.classList.add("status_error");
            }
        }, 1600);
    });

    // footer copyright text
    document.getElementById("copyright").innerHTML = "Copyright &copy; 2018-" + new Date().getFullYear() + " Steven Aziz. All rights reserved.";

    document.body.style.opacity = "1";
}