// Récupération des projets ou des catégories
export async function getRequest(type) {
    const response = await fetch(`http://localhost:5678/api/${type}`)
    return response.json()
}

// Connexion de l'utilisateur
export async function loginPostRequest(email, password) {
    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({email, password})
    })

    return response
}

// Récupération du token
export function getToken() {
    return sessionStorage.getItem("token")
}

// Suppression d'une image
export async function deleteRequest(id) {
    const response = await fetch(`http://localhost:5678/api/works/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getToken()}` }
    })

    return response
}

// Upload d'une nouvelle image
export async function postRequest(formData) {
    const response = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: { Authorization: `Bearer ${getToken()}` },
        body: formData
    })

    return response
}