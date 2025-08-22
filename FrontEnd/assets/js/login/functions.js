function createErrorMessage(loginForm) {
    // Suppression du message s'il existe déjà
    const existingError = loginForm.querySelector("form p")
    if (existingError) {
        existingError.remove()
    }

    // Création du message d'erreur
    const errorMessage = document.createElement("p")
    errorMessage.innerText = "Erreur dans l'identifiant ou le mot de passe"
    loginForm.appendChild(errorMessage)
}

async function loginUser(email, password, loginForm) {
    // Envoi de la requête POST
    const loginResponse = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email, password})
    })

    if (loginResponse.ok) {
        // Stockage du token
        const data = await loginResponse.json()
        localStorage.setItem("token", data.token)

        return true
    } else {
        createErrorMessage(loginForm)

        return false
    }
}

export default async function tryConnection(email, password, loginForm) {
    const loginSuccess = await loginUser(email, password, loginForm)

    // Si la connexion a réussie, l'utilisateur est redirigé vers la page d'accueil
    if (loginSuccess) {
        window.location.href = "../index.html"
    }
}