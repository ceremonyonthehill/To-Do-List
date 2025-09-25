const del = document.getElementById("btn4");
const body = document.getElementById("profile");
const makeList = document.getElementById("makeList");
const level = document.getElementById("level");
function clickButton() {
  if (body.innerHTML.trim() === "") {
    const p4 = document.createElement("p");
    p4.textContent = "/-/-/-/-/-/-/-/-/-/-/-/-/-/-/";
    const p3 = document.createElement("p");
    p3.textContent = "Welcome to To-Do-list";
    const p1 = document.createElement("p");
    p1.textContent = "Name: Radit";
    const p2 = document.createElement("p");
    p2.textContent = "Position: Employee";
    const p5 = document.createElement("p");
    p5.textContent = "/-/-/-/-/-/-/-/-/-/-/-/-/-/-/";

    body.append(p4);
    body.append(p3);
    body.append(p1);
    body.append(p2);
    body.append(p5);
    body.classList.remove("list");
  } else {
    body.innerHTML = "";
    body.classList.add("list");
  }
}
function deleteAll() {
  const confirmed = confirm("do you sure your wanted to delete all?");
  if (confirmed) {
    makeList.innerHTML = "";
  }
}

function doneList() {
  const done = document.getElementById("doneList");
  const tasks = makeList.querySelectorAll("li");
  tasks.forEach((li) => {
    const checkbox = li.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      done.appendChild(li);
      checkbox.disabled = true;
    }
  });
}

function makeToDo() {
  const input = document.getElementById("inptA").value;
  const inputValue = input.trim();

  if (inputValue === "") {
    alert("you must write something");
    return;
  } else if (level.value === "") {
    alert("you must choose priority level");
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "gray";
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.color = "rgb(114, 116, 118)";
    }
  });

  const taskText = document.createElement("span");
  taskText.textContent = inputValue;

  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const today = `${day}/${month}/${year}`;

  const dateText = document.createElement("small");
  dateText.textContent = ` (${today})`;
  dateText.style.color = "gray";
  dateText.style.marginLeft = "8px";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.classList.add("close-btn");

  closeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(dateText);
  li.appendChild(closeBtn);

  makeList.appendChild(li);
  document.getElementById("inptA").value = "";
}
