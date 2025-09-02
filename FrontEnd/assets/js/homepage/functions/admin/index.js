import { editBar, editButton, logButton } from "../../../dom-elements.js"
import { openModal } from "./logic.js"
import initModal from "./modal.js"

export default function initAdminPage(works, categories) {
    // Affichage de la barre et du bouton du mode édition
    editBar.classList.remove("nodisplay")

    editButton.classList.remove("hidden")
    editButton.addEventListener("click", () => openModal())

    changeLogButton()
    initModal(works, categories)
}

function changeLogButton() {
    // Modification du bouton de connexion
    logButton.innerText = "logout"
    logButton.href = "#"

    // Déconnexion
    logButton.addEventListener("click", () => {
        sessionStorage.removeItem("token")
        window.location.href = "./index.html"
    })
}