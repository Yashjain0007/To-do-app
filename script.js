const item = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (text) => {
  const list = document.createElement("li");
  list.innerHTML = `
   <p> ${text}</p>
    <i class="fa-solid fa-xmark"></i>
    `;
  list.addEventListener("click", function () {
    list.classList.toggle("finished");
  });
  list.querySelector(".fa-xmark").addEventListener("click", function () {
    list.remove();
    save();
  });

  // list.querySelector(".fa-floppy-disk").addEventListener("click", function () {
  //   save();
  // });
  toDoBox.appendChild(list);
  save();
};

function save() {
  const para = document.querySelectorAll("p");
  // console.log(data);
  const data = [];
  para.forEach((num) => {
    data.push(num.innerText);
  });
  console.log(data);
  localStorage.setItem("data", JSON.stringify(data));
}

(function () {
  const task = JSON.parse(localStorage.getItem("data"));
  task.forEach((num) => {
    addTodo(num);
  });
})();
