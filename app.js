// SELECTORS
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const notDoneList = document.getElementById("todoNotDone");
const doneList = document.getElementById("todoDone");

// Event LISTENERS
submitBtn.addEventListener("click", addTodo)

// FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("div")
    item.innerHTML += `<li class="list-group-item d-flex justify-content-between"><button type="button" class="btn btn-circle "><i class="fa fa-check"></i></button><p class="my-auto">${input.value}</p><button type="button" class="btn btn-danger btn ">x</button></li>`;
    notDoneList.appendChild(item)

    // SELECTORS FOR EACH TASK ITEM
    const itemButtons = item.querySelectorAll("button");
    const circleBtn = itemButtons[0];
    const exitBtn = itemButtons[1];

    // Delete Task
    exitBtn.addEventListener("click", function () {
        item.remove();
    });
    // Toggle Sections
    circleBtn.addEventListener("click", function(){
       
        console.log(item.parentNode.id)
        let sectionID = (item.parentNode.id);
        if(sectionID === "todoNotDone"){
             doneList.append(item);
        }else{
            notDoneList.append(item);
        }
   })
    input.value = "";
}