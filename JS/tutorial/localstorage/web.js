
window.onload = () =>{
    init()
}
  
let lastId = 0;
const taskWrapper = document.getElementById("task_wrapper");
const saveButton = document.getElementById("save_task");
let removeIcon;
let updateIcon;
let taskList;


init = ()=>{
    if((window.localStorage.getItem('taskList'))){
        taskList = JSON.parse(window.localStorage.getItem('taskList'));
    }else{
        taskList = [];
    }
    saveButton.addEventListener('click', saveTask);
    showList();
}

saveTask = (event)=> {
    const task = {
      taskId: lastId,
      taskDes: document.getElementById("task_des").value,
      taskState: document.getElementById("task_state").value
    };
    taskList.push(task);
    syncTask();
    addTaskToList(task);
    syncEvents();
    lastId++;
  }

addTaskToList =(task) => {
    const removeIcon = document.createElement('span');
    const element = document.createElement('li');
    const updateIcon = document.createElement('span');

    removeIcon.innerHTML = "X";
    removeIcon.className = "remove_item clickeable";
    removeIcon.setAttribute("title", "Remove");

    updateIcon.innerHTML = "U";
    updateIcon.className = "update_icon clickeable";
    updateIcon.setAttribute("title", "Update");

    element.appendChild(removeIcon);
    element.appendChild(updateIcon);
    element.setAttribute("id", task.taskId);
    element.innerHTML += task.taskDes;
    taskWrapper.appendChild(element);
  }


//showList();

showList = () => {
    if (!!taskList.length) {
      getLastTaskId();
      for (let item in taskList) {
        let task = taskList[item];
        addTaskToList(task);
      }
      syncEvents();
    }
  }

getLastTaskId = () =>{
    let lastTask = taskList[taskList.length - 1];
    lastId = lastTask.taskId + 1;
}

syncTask = () => {
    window.localStorage.setItem('taskList', JSON.stringify(taskList));
    taskList = JSON.parse(window.localStorage.getItem('taskList'));
}

syncEvents = () => {
    updateIcon = document.getElementsByClassName("update_icon");
    removeIcon = document.getElementsByClassName("remove_item");

    if(!!removeIcon.length){
        for(let i = 0; i < removeIcon.length; i++){
            removeIcon[i].addEventListener('click', removeTask);
        }
    }
    if(!!updateIcon.length){
        for(let j = 0; j < updateIcon.length; j++){
            updateIcon[j].addEventListener('click', updateTask);
        }
    }
}



 removeTask = (event) => {

    const taskToRemove = event.currentTarget.parentNode;
    const taskId = taskToRemove.id;
    taskWrapper.removeChild(taskToRemove);
    taskList.forEach((value, i) => {
      if (value.taskId == taskId) {
        taskList.splice(i, 1);
      }
    })

    syncTask();
  }


//updateTask
updateTask = (event) => {
    const taskTag = event.currentTarget.parentNode;
    const taskId = taskTag.id;
    const taskToUpdate = findTask(taskId).task;
    const pos = findTask(taskId).pos; //이부분 잘 모르겠음...
    if(!!taskToUpdate){
        const des = prompt("Task Description", taskToUpdate.taskDes);
        const state = prompt("Task State", taskToUpdate.taskState);
        taskToUpdate.taskDes = des;
        taskToUpdate.taskState = state;
        taskList[pos] = taskToUpdate;
        taskTag.lastChild.textContent = taskToUpdate.taskDes;
        syncTask()
    }

}

// findTask = (id) => { 
//     let response = {
//         task : '',
//         pos : 0
//     };
//     taskList.forEach((value, i)=>{
//         if(value.taskId === id){
//             response.task = value;
//             response.pos = i;
//         }
//     })
//     return response;
// }


function findTask(id) {

    var response = {
      task: '',
      pos: 0
    };
    taskList.forEach(function(value, i) {
      if (value.taskId == id) {
        response.task = value;
        response.pos = i;
      }
    });

    return response;
  }


