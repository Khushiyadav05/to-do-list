// Body styling with gradient background
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
document.body.style.margin = "0";

// Container
const container = document.createElement("div");
container.style.textAlign = "center";
container.style.backgroundColor = "#ffffffdd";
container.style.padding = "30px";
container.style.borderRadius = "15px";
container.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
container.style.width = "360px";
container.style.transition = "0.3s all ease";
document.body.appendChild(container);

// Title
const title = document.createElement("h2");
title.innerText = "To-Do List";
title.style.color = "#333";
title.style.marginBottom = "20px";
container.appendChild(title);

// Input
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a task";
input.style.width = "70%";
input.style.padding = "12px";
input.style.borderRadius = "8px";
input.style.border = "1px solid #ccc";
input.style.marginRight = "10px";
input.style.outline = "none";
input.style.fontSize = "14px";
container.appendChild(input);

// Add Button
const addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.style.padding = "12px 18px";
addBtn.style.border = "none";
addBtn.style.borderRadius = "8px";
addBtn.style.backgroundColor = "#28a745";
addBtn.style.color = "#fff";
addBtn.style.cursor = "pointer";
addBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
addBtn.style.transition = "0.2s";
addBtn.onmouseenter = () => addBtn.style.backgroundColor = "#218838";
addBtn.onmouseleave = () => addBtn.style.backgroundColor = "#28a745";
container.appendChild(addBtn);

// Task List
const list = document.createElement("ul");
list.style.listStyle = "none";
list.style.padding = "0";
list.style.marginTop = "20px";
container.appendChild(list);

// Add Task function with fade-in
function addTask() {
    if(input.value.trim() === "") return;

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginBottom = "12px";
    li.style.padding = "10px 12px";
    li.style.backgroundColor = "#f9f9f9";
    li.style.borderRadius = "8px";
    li.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
    li.style.opacity = "0";
    li.style.transform = "translateY(-10px)";
    li.style.transition = "0.3s";

    setTimeout(() => {
        li.style.opacity = "1";
        li.style.transform = "translateY(0)";
    }, 10);

    li.onmouseenter = () => li.style.backgroundColor = "#e6f7ff";
    li.onmouseleave = () => li.style.backgroundColor = "#f9f9f9";

    const span = document.createElement("span");
    span.innerText = input.value;
    li.appendChild(span);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.style.marginRight = "5px";
    editBtn.style.border = "none";
    editBtn.style.padding = "5px 10px";
    editBtn.style.borderRadius = "5px";
    editBtn.style.backgroundColor = "#ffc107";
    editBtn.style.color = "#fff";
    editBtn.style.cursor = "pointer";
    editBtn.style.transition = "0.2s";
    editBtn.onmouseenter = () => editBtn.style.backgroundColor = "#e0a800";
    editBtn.onmouseleave = () => editBtn.style.backgroundColor = "#ffc107";
    editBtn.onclick = () => {
        const newVal = prompt("Edit task:", span.innerText);
        if(newVal) span.innerText = newVal;
    };
    li.appendChild(editBtn);

    // Delete button with fade-out
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.border = "none";
    delBtn.style.padding = "5px 10px";
    delBtn.style.borderRadius = "5px";
    delBtn.style.backgroundColor = "#dc3545";
    delBtn.style.color = "#fff";
    delBtn.style.cursor = "pointer";
    delBtn.style.transition = "0.2s";
    delBtn.onmouseenter = () => delBtn.style.backgroundColor = "#c82333";
    delBtn.onmouseleave = () => delBtn.style.backgroundColor = "#dc3545";
    delBtn.onclick = () => {
        li.style.opacity = "0";
        li.style.transform = "translateX(50px)";
        setTimeout(() => list.removeChild(li), 300);
    };
    li.appendChild(delBtn);

    list.appendChild(li);
    input.value = "";
}

// Events
addBtn.onclick = addTask;
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") addTask();
});
