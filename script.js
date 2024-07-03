document.addEventListener("DOMContentLoaded", function() {
    const loginModal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("login");
    const logoutBtn = document.getElementById("logout");
    const span = document.getElementsByClassName("close")[0];
    const loginForm = document.getElementById("loginForm");

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    span.onclick = function() {
        loginModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }

    loginForm.onsubmit = function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Implement login functionality here
        alert("Logged in with " + email);

        loginModal.style.display = "none";
        loginBtn.style.display = "none";
        logoutBtn.style.display = "block";
    }

    logoutBtn.onclick = function() {
        // Implement logout functionality here
        alert("Logged out");

        loginBtn.style.display = "block";
        logoutBtn.style.display = "none";
    }
});
