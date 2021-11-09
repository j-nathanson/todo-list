// SELECTORS and Global Constant variables
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const notDoneList = document.getElementById("todoNotDone");
const doneList = document.getElementById("todoDone");
const numTasksDone = document.getElementById("numFinished");
let counterDone = 0;
const numTasksNotDone = document.getElementById("numUnfinished");
let counterNotDone = 0;
// Event LISTENERS
submitBtn.addEventListener("click", addTodo)

// CREATE ITEM NODE & ADD EVENT LISTENERS
function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("div")
    item.innerHTML += `<li class="list-group-item d-flex justify-content-between"><button type="button" class="btn btn-circle fill-off"><i class="fa fa-check"></i></button><p class="my-auto">${input.value}</p><button type="button" class="btn btn-danger btn ">x</button></li>`;
    notDoneList.appendChild(item)

    // SELECTORS FOR EACH TASK ITEM
    const itemButtons = item.querySelectorAll("button");
    const circleBtn = itemButtons[0];
    const exitBtn = itemButtons[1];

    // Delete Task
    exitBtn.addEventListener("click", function () {
        item.remove();


        // counterNotDone--;
        // counterDone--;
        // if (counterNotDone < 1) {
        //     counterNotDone = '';
        //     numTasksNotDone.innerText = counterNotDone;
        // } else if (counterDone < 1) {
        //     counterNotDone = '';
        //     numTasksDone.innerText = counterDone;
        // } else{
        //     numTasksNotDone.innerText = `(${counterNotDone})`;
        //     numTasksDone.innerText = `(${counterDone})`;
        // }

    });
    // Toggle Sections and Fill color
    circleBtn.addEventListener("click", function () {


        let sectionID = (item.parentNode.id);
        // switch to Done section
        if (sectionID === "todoNotDone") {
            circleBtn.classList.toggle("bg-success");
            circleBtn.classList.toggle("fill-off");
            doneList.append(item);

            // counterDone++;
            // counterNotDone++
            // numTasksDone.innerHTML = `<h4>(${counterDone})</h4>`;
            // numTasksNotDone.innerText = `(${counterNotDone})`;


            //   return to Not Done section
        } else {
            circleBtn.classList.toggle("bg-success");
            circleBtn.classList.toggle("fill-off");
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