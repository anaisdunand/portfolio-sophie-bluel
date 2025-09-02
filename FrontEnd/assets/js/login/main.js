import { loginForm } from "../dom-elements.js"
import loginUser from "./functions.js"

document.addEventListener("DOMContentLoaded", () => {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        await loginUser(email, password, loginForm)
    })
})