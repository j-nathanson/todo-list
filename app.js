// SELECTORS and Global Constant variables
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const notDoneList = document.getElementById("todoNotDone");
const doneList = document.getElementById("todoDone");
const numTasksDone = document.getElementById("numFinished");
const numTasksNotDone = document.getElementById("numUnfinished");
let counterDone = 0;
let counterNotDone = 0;
// Event LISTENERS
submitBtn.addEventListener("click", addTodo)

// CREATE ITEM NODE & ADD EVENT LISTENERS
function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("div")
    item.innerHTML +=
        `<li class="list-group-item d-flex justify-content-between">
            <button type="button" class="btn btn-circle fill-on">
                <i class="fa fa-check"></i></button>
                <p class="my-auto">${input.value}</p>
            <button type="button" class="btn btn-danger btn ">x</button>
        </li>`;
    notDoneList.appendChild(item)

    // SELECTORS FOR EACH TASK ITEM
    const itemButtons = item.querySelectorAll("button");
    const circleBtn = itemButtons[0];
    const exitBtn = itemButtons[1];

    // Delete Task
    exitBtn.addEventListener("click", function () {
        item.remove();


    });
    // Toggle Sections and Fill color
    circleBtn.addEventListener("click", function () {

        let sectionID = (item.parentNode.id);
        // switch to Done section
        if (sectionID === "todoNotDone") {
            circleBtn.classList.toggle("bg-success");
            circleBtn.classList.toggle("fill-on");
            doneList.append(item);

            //   return to Not Done section
        } else {
            circleBtn.classList.toggle("bg-success");
            circleBtn.classList.toggle("fill-on");
            notDoneList.append(item);

            // counterDone--;
            // if (counterDone === 0) {
            //     counterDone = "";
            // }
            // numTasksDone.innerText = counterDone;

        }
    })
    input.value = "";
}

function decreaseCounter() {

}