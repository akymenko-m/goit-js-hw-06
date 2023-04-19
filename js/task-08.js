const loginForm = document.querySelector(".login-form");
const notyf = new Notyf();

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return notyf.error("All fields must be filled");
    }

    const userData = {};
    userData.email = email.value;
    userData.password = password.value;
    console.log(userData);

    notyf.success("The data was sent");
    event.currentTarget.reset();
});
