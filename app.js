// SELECTORS
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const notDoneList = document.getElementById("todoNotDone");

// Event LISTENERS
submitBtn.addEventListener("click", addTodo)

// FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("div")
    item.innerHTML += `<li class="list-group-item d-flex justify-content-between"><button type="button" class="btn btn-circle "></button><p class="my-auto">${input.value}</p><button type="button" class="btn btn-danger btn ">x</button></li>`;
    notDoneList.appendChild(item)
    const itemButtons = item.querySelectorAll("button");

    const circleBtn = itemButtons[0];
    const exitBtn = itemButtons[1];

    exitBtn.addEventListener("click", function () {
        item.remove();
    });
    input.value = "";
}