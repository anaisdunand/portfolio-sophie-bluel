import { loginPostRequest } from "../api.js"

export default async function loginUser(email, password, parent) {
    const loginResponse = await loginPostRequest(email, password)

    if (loginResponse.ok) {
        // Stockage du token
        const data = await loginResponse.json()
        sessionStorage.setItem("token", data.token)

        // Redirection vers la page d'accueil
        window.location.href = "../index.html"
        
    } else createErrorMessage(parent)
}

function createErrorMessage(parent) {
    // Vérification de l'existence du message
    const existingError = document.querySelector("form p")
    if (!existingError) {
        // Création du message d'erreur
        const errorMessage = document.createElement("p")
        errorMessage.innerText = "Erreur dans l'identifiant ou le mot de passe"
        parent.appendChild(errorMessage)
    }
}