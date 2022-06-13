// (() => {
//   console.log("hello");
// })();
// // 즉시실행함수 왜쓰지 ? 중첩 예방

// 그리기

const todoUl = document.querySelector(".todo-list");
const todoForm = document.querySelector("form");
const todoInput = document.querySelector("input");
let todos = [];

const saveStorage = () => {
  localStorage.setItem("TODOS", JSON.stringify(todos));
};

const loadStorage = () => {
  todos = JSON.parse(localStorage.getItem("TODOS")) || [];
};

const findMaxIndex = () => {
  let max = 0;
  todos.forEach((todo) => {
    max = max <= todo.index ? todo.index + 1 : max;
  });
  return max;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const index = findMaxIndex();
  const content = todoInput.value;
  const newTodo = {
    index,
    content,
    checked: false,
    createAt: new Date(),
  };

  todos.push(newTodo);
  makeLi(newTodo);
  saveStorage();
  todoInput.value = "";
};

const handleDelete = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;
  const index = li.dataset.index;

  //   1. todos 삭제
  const newTodos = todos.filter((todo) => todo.index !== parseInt(index));
  todos = newTodos;
  //   2. DOM 삭제
  saveStorage();
  todoUl.removeChild(li);
};

const handleCheck = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;
  //1. todo인 index를 찾는다
  //   console.log(event.target.dataset.index);
  //   console.log(typeof event.target.dataset.index); string이니 나중에 parseInt 잘 해줘야겠다!
  const index = li.dataset.index;
  //   const todo = todos.find((todo) => todo.index === parseInt(index));
  //   console.log(todo);
  //2. check상태를 변경
  //3. new Array만들어서 todos에 덮어씌운다.
  const newTodos = todos.map((todo) => {
    if (todo.index === parseInt(index)) {
      if (!todo.checked) li.classList.add("checked");
      else li.classList.remove("checked");
      return { ...todo, checked: !todo.checked };
    }
    return todo;
  });
  todos = newTodos;
  saveStorage();
};

const makeLi = (todo) => {
  //   console.log(todo);
  const li = document.createElement("li");
  li.dataset.index = todo.index;
  li.classList.add("todo");
  //  li 에는 text, 체크버튼, 삭제버튼
  if (todo.checked) li.classList.add("checked");

  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✔";
  checkBtn.addEventListener("click", handleCheck);
  const content = document.createElement("h2");
  content.innerText = todo.content;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "␡";
  deleteBtn.addEventListener("click", handleDelete);

  li.appendChild(checkBtn);
  li.appendChild(content);
  li.appendChild(deleteBtn);

  todoUl.appendChild(li);
};

const draw = () => {
  todos.forEach((todo) => makeLi(todo));
};

const init = () => {
  // 로컬스토리지 호출
  // 호출된 투두 draw()
  loadStorage();
  draw();
  todoForm.addEventListener("submit", handleSubmit);
};

init();
