import tryConnection from "./functions.js"

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login form")

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        await tryConnection(email, password, loginForm)
    })
})