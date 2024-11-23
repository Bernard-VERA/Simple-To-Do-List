document.addEventListener('DOMContentLoaded', loadTasks);

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
                todoList.removeChild(li);
                saveTasks();
            };

            //Association de la span et du bouton "Supprimer" avec la liste à supprimer 
            li.appendChild(textSpan);
            li.appendChild(deleteButton);
            li.addEventListener('click', () => { 
                li.classList.toggle('completed'); 
                saveTasks();
            });

        //Affichage de la liste créée
        todoList.appendChild(li);

        // Sauvegarde des tâches dans le localStorage 
        saveTasks();

    // Une fois la tâche créée, on réinitialise le champ de texte
    input.value = "";
}

function saveTasks() { 
    const todoList = document.getElementById("todo-list"); 
    const todos = []; 

    todoList.querySelectorAll("li").forEach(todoItem => { 
        todos.push({ 
            text: todoItem.querySelector("span").textContent, 
            completed: todoItem.classList.contains("completed") 
        }); 
    });
    // Sauvegarde des tâches dans le local storage sous forme de JSON
    localStorage.setItem("todos", JSON.stringify(todos)); 
    console.log(todos);
} 

function loadTasks() {
    // Récupération des tâches dans le local storage (JSON)
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
     
    todos.forEach(todo => {
        const todoList = document.getElementById("todo-list"); 
        const li = document.createElement("li"); 
        const textSpan = document.createElement("span"); 
        textSpan.textContent = todo.text; 
        textSpan.classList.add("todo-item"); 
         
        if (todo.completed) { 
            li.classList.add("completed"); 
        } 
        
        const deleteButton = document.createElement("button"); 
        deleteButton.textContent = "Supprimer"; 
        deleteButton.classList.add("delete-button"); 
        deleteButton.onclick = function() { 
            todoList.removeChild(li); 
            saveTasks(); 
        }; 
        
        li.appendChild(textSpan); 
        li.appendChild(deleteButton); 
        li.addEventListener('click', () => { 
            li.classList.toggle('completed'); 
            saveTasks();
        }); 
        
        todoList.appendChild(li); 
    }); 
}