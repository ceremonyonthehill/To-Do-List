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

  //basically adding div
  const topRow = document.createElement("div");
  topRow.classList.add("top-row");

  topRow.appendChild(checkbox);
  topRow.appendChild(dateText);
  topRow.appendChild(closeBtn);

  
  li.appendChild(topRow);
  li.appendChild(taskText);

  makeList.appendChild(li);

  document.getElementById("inptA").value = "";

  
}

