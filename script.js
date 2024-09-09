function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Thank you for contacting us! We'll get back to you soon.");
    return true;
}
