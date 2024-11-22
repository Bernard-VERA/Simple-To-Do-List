function addTask() {
    // Récupération du texte de l'input. Trim supprime les espaces vides
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();
    // Si aucun texte on arrète la fonction
    if (todoText === "") return;

        // Création d'une liste qui reprend le texte récupéré précédemment
        const todoList = document.getElementById("todo-list");
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        // Création d'une span pour pouvoir limiter la longueur du texte
        textSpan.textContent = todoText;
        textSpan.classList.add("todo-item");

            // Création d'un bouton " Supprimer". Au clic, on supprime la tâche.
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
            deleteButton.classList.add("delete-button");
            deleteButton.onclick = function() {
                todoList.removeChild(li)
            };

            //Association de la span et du bouton "Supprimer" avec la liste à supprimer 
            li.appendChild(textSpan);
            li.appendChild(deleteButton);
        //Affichage de la liste créée
        todoList.appendChild(li);

    // Une fois la tâche créée, on réinitialise le champ de texte
    input.value = "";
}