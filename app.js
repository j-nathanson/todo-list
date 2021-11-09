// SELECTORS
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const notDoneList = document.getElementById("todoNotDone");
const doneList = document.getElementById("todoDone");

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
    });
    // Toggle Sections and Fill color
    circleBtn.addEventListener("click", function () {


        let sectionID = (item.parentNode.id);
        // switch to Done section
        if (sectionID === "todoNotDone") {
            // circleBtn.style.backgroundColor = "lightgreen";
            //  circleBtn.style.color = "green";
            circleBtn.classList.toggle("bg-success");
            circleBtn.classList.toggle("fill-off");
            doneList.append(item);
         

        //   return to Not Done section
        } else {
            // circleBtn.style.backgroundColor = "";
            // circleBtn.style.color = "";
            circleBtn.classList.toggle("bg-success");
            circleBtn.classList.toggle("fill-off");
            notDoneList.append(item);
        }
    })
    input.value = "";
}