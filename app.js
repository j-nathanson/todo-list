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
    notDoneList.appendChild(item);
    counterNotDone++;
    numTasksNotDone.innerText = `(${counterNotDone})`
    

    // SELECTORS FOR EACH TASK ITEM
    const itemButtons = item.querySelectorAll("button");
    const circleBtn = itemButtons[0];
    const exitBtn = itemButtons[1];

    // Delete Task and decrease correct counter
    exitBtn.addEventListener("click", function () {
        let sectionID = item.parentNode.id;
        if (sectionID === "todoNotDone") {
            decreaseNotDoneCounter();
        } else {
            decreaseDoneCounter();
        }
        item.remove();
    });
    // Toggle between sections,toggle circle color, adjust BOTH counters
    circleBtn.addEventListener("click", function () {

        let sectionID = item.parentNode.id;

        // switch to Done section
        if (sectionID === "todoNotDone") {
            circleBtn.classList.toggle("bg-success");
            circleBtn.classList.toggle("fill-on");
            doneList.append(item);
            counterDone++;
            numTasksDone.innerText = `(${counterDone})`;
            decreaseNotDoneCounter();

            //   return to Not Done section
        } else {
            circleBtn.classList.toggle("bg-success");
            circleBtn.classList.toggle("fill-on");
            notDoneList.append(item);
            counterNotDone++;
            numTasksNotDone.innerText = `(${counterNotDone})`
            counterNotDone;
            decreaseDoneCounter()


        }
    })
    input.value = "";
}

function decreaseNotDoneCounter() {
    counterNotDone--;
    if (counterNotDone === 0) {
        numTasksNotDone.innerText = "";
    } else {
        numTasksNotDone.innerText = counterNotDone;
    }
}

function decreaseDoneCounter() {
    counterDone--;
    if (counterDone === 0) {
        numTasksDone.innerText = "";
    } else {
        numTasksDone.innerText = counterDone;
    }

}