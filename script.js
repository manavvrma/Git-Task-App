const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Listen for Enter key
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.className = "task-item new";
  // Add click listener for toggling
  li.setAttribute("onclick", "toggleTask(this)");

  li.innerHTML = `
                <div class="circle-check"></div>
                <span class="task-text">${text}</span>
                <button class="delete-btn" onclick="deleteTask(event, this)">×</button>
            `;

  // Insert at the top of the list
  list.insertBefore(li, list.firstChild);

  // Clear input
  input.value = "";
}

function toggleTask(element) {
  element.classList.toggle("completed");
}

function deleteTask(event, btn) {
  // Prevent the li click event from triggering
  event.stopPropagation();
  const li = btn.parentElement;

  // Fade out effect
  li.style.opacity = "0";
  li.style.transform = "translateY(10px)";

  setTimeout(() => {
    li.remove();
  }, 300);
}
