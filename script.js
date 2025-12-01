const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

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

  li.setAttribute("onclick", "toggleTask(this)");

  li.innerHTML = `
                <div class="circle-check"></div>
                <span class="task-text">${text}</span>
                <button class="delete-btn" onclick="deleteTask(event, this)">×</button>
            `;

  list.insertBefore(li, list.firstChild);

  input.value = "";
}

function toggleTask(element) {
  element.classList.toggle("completed");
}

function deleteTask(event, btn) {
  event.stopPropagation();
  const li = btn.parentElement;

  li.style.opacity = "0";
  li.style.transform = "translateY(10px)";

  setTimeout(() => {
    li.remove();
  }, 300);
}

const wallpaperBtn = document.getElementById("wallpaperBtn");
let currentTheme = 0;

const themes = [
  {
    bg: "#f4f1ea",
    image:
      "radial-gradient(#b0aba0 0.5px, transparent 0.5px), radial-gradient(#b0aba0 0.5px, #f4f1ea 0.5px)",
    size: "20px 20px",
  },

  {
    bg: "#fdfbf7",
    image:
      "linear-gradient(#e0ddd5 1px, transparent 1px), linear-gradient(90deg, #e0ddd5 1px, transparent 1px)",
    size: "20px 20px",
  },

  // {
  //   bg: "#ffffff",

  //   image: "url('assets/1.jpg')",

  //   size: "cover",
  // },
  // {
  //   bg: "#ffffff",

  //   image: "url('assets/2.jpg')",

  //   size: "cover",
  // },
  // {
  //   bg: "#ffffff",

  //   image: "url('assets/3.jpg')",

  //   size: "cover",
  // },
  // {
  //   bg: "#ffffff",

  //   image: "url('assets/4.jpg')",

  //   size: "cover",
  // },
];

wallpaperBtn.addEventListener("click", () => {
  currentTheme = (currentTheme + 1) % themes.length;
  const theme = themes[currentTheme];

  document.body.style.backgroundColor = theme.bg;
  document.body.style.backgroundImage = theme.image;
  document.body.style.backgroundSize = theme.size;
});
