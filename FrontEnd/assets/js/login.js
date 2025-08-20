const loginForm = document.querySelector("#login form")

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    // Envoi de la requête POST
    const loginResponse = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email, password})
    })

    const errorMessage = document.createElement("p")

    // Analyse de la réponse
    if (loginResponse.ok) {
        // Si les identifiants sont bons, l'utilisateur est connecté et redirigé vers la page d'accueil
        errorMessage.innerText = ""

        // Stockage du token
        const data = await loginResponse.json()
        localStorage.setItem("token", data.token)

        window.location.href = "../index.html"
    } else {
        // S'ils ne le sont pas, un message d'erreur s'affiche
        errorMessage.innerText = "Erreur dans l'identifiant ou le mot de passe"

        loginForm.appendChild(errorMessage)
    }
})