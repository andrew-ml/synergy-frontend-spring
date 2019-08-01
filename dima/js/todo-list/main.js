let listElement = document.querySelector(".todo-list");
let inputElement = document.querySelector(".todo-add-input");
const API_URL = "http://159.69.85.4:7777/api/dima";

inputElement.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Enter") {
    let value = e.target.value;
    // console.log(e.target.value);
    axios
      .post(`${API_URL}/tasks`, {
        text: value
      })
      .then(() => {
        fetchData();
      });
    e.target.value = "";
  }
});

fetchData();

function renderList(list) {
  listElement.innerHTML = "";

  list.forEach(function (task) {
    let li = document.createElement("li");
    listElement.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = task.text;
    li.appendChild(span);

    span.addEventListener("click", function () {
      span.style.textDecoration = "line-through";
      if (task.isDone === true) {
        span.style.textDecoration = "none;";
      }
      axios
        .put(`${API_URL}/tasks/${task.id}`, {
          isDone: !task.isDone
        })
        .then(() => {
          fetchData();
        });
    });

    let arrows = document.createElement("div");
    arrows.classList.toggle("arrows");
    let arrowTop = document.createElement("i");
    let arrowBottom = document.createElement("i");
    arrowTop.innerHTML = "↑";
    arrowBottom.innerHTML = "↓";
    arrows.appendChild(arrowTop);
    arrows.appendChild(arrowBottom);
    if (task.order === 1) {
      arrowTop.style.color = "#ccc";
    }

    if (task.order === list.length) {
      arrowBottom.style.color = "ccc";
    }

    arrowTop.addEventListener("click", function () {
      if (task.order === 1) {
        return list;
      } else {
        task.order = task.order - 1;
        axios
          .put(`${API_URL}/tasks/${task.id}`, {
            order: task.order
          })
          .then(() => {
            fetchData();
          });
        console.log(list);
      }
    });

    arrowBottom.addEventListener("click", function () {
      if (task.order === list.length) {
        return list;
      } else {
        task.order = task.order + 1;
        axios
          .put(`${API_URL}/tasks/${task.id}`, {
            order: task.order
          })
          .then(() => {
            fetchData();
          });
        console.log(list);
      }
    });

    li.addEventListener("mouseenter", function () {
      let edit = document.createElement("i");

      edit.innerHTML = "edit";
      edit.classList.toggle("edit-btn");
      li.insertBefore(arrows, closeButton);
      li.insertBefore(edit, closeButton);

      li.addEventListener("mouseleave", function () {
        // edit.style.display = "none";
        li.removeChild(edit);
        li.removeChild(arrows);
      });

      edit.addEventListener("click", function () {
        let input = document.createElement("input");
        li.insertBefore(input, closeButton);
        input.value = task.text;
        span.style.display = "none";
        edit.style.display = "none";
        input.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            let value = e.target.value;
            axios
              .put(`${API_URL}/tasks/${task.id}`, {
                text: value
              })
              .then(() => {
                fetchData();
              });
          }
        });
      });

      li.addEventListener("mouseenter", function () {});
    });

    let closeButton = document.createElement("i");
    closeButton.classList.toggle("close-button");
    closeButton.innerHTML = "×";
    li.appendChild(closeButton);
    closeButton.addEventListener("click", function () {
      axios.delete(`${API_URL}/tasks/${task.id}`).then(function () {
        fetchData();
      });
    });
  });
}

function fetchData() {
  axios.get(`${API_URL}/tasks`).then(function (response) {
    for (let i = 0; i < response.data.length; i++) {
      response.data[i].order = i + 1;
    }

    renderList(response.data);
  });
}