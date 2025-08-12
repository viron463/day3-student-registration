// Change background color
function changeBackground() {
    const colors = ["#f4f4f4", "#c1e1c1", "#fddde6", "#d1c4e9", "#ffe0b2"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Contact form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            document.getElementById("thankYouMessage").style.display = "block";
            form.reset();
        });
    }
});
