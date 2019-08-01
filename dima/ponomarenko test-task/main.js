const textarea = document.querySelector("textarea");
const sendBtn = document.querySelector(".send-btn");
const list = document.querySelector(".user-feedback");
let username = "Dmytro Ponomarenko";
let date = new Date();

let options = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

let today = date.toLocaleString("ru", options);

sendBtn.addEventListener("click", renderFeedback);
textarea.addEventListener("keydown", function(e) {
  if (event.ctrlKey && event.key === "Enter") {
    renderFeedback();
  }
});

function renderFeedback() {
  let text = document.querySelector("textarea").value;

  if (text !== "") {
    let newElement = document.createElement("div");
    newElement.classList.toggle("user-feedback");

    let aboutUser = document.createElement("div");
    aboutUser.classList.toggle("about-user");

    let user = document.createElement("h4");
    user.classList.toggle("user-name");
    user.innerHTML = username;

    let date = document.createElement("p");
    date.classList.toggle("feedback-date");
    date.innerHTML = today;

    let feedback = document.createElement("p");
    feedback.innerHTML = text;
    feedback.classList.toggle("feedback-text");

    newElement.appendChild(aboutUser);
    newElement.appendChild(feedback);
    aboutUser.appendChild(user);
    aboutUser.appendChild(date);
    list.parentNode.appendChild(newElement);
  }

  document.querySelector("textarea").value = "";
}

// const API_URL = "http://159.69.85.4:7777/api/dima";
// function renderFeedback() {
//   let newElement = document.createElement("div");
//   newElement.classList.toggle("user-feedback");
//   let aboutUser = document.createElement("div");
//   aboutUser.classList.toggle("about-user");
//   let user = document.createElement("h4");
//   user.classList.toggle("user-name");
//   let date = document.createElement("p");
//   date.classList.toggle("feedback-date");
//   let text = document.createElement("p");
//   text.classList.toggle("feedback-text");
//   newElement.appendChild(aboutUser);
//   newElement.appendChild(text);
//   aboutUser.appendChild(user);
//   aboutUser.appendChild(date);

//   text.innerHTML = value;
// }

// sendBtn.addEventListener("click", function(e) {
//   renderFeedback();
//   let value = e.target.value;
//   axios
//     .post(`${API_URL}/tasks`, {
//       text: value
//     })
//     .then(() => {
//       fetchData();
//     });
// });

// console.log(e);

// function fetchData() {
//   axios.get(`${API_URL}/tasks`).then(function(response) {
//     // console.log(response.data);
//     renderFeedback(response.data);
//   });
// }

// fetchData();
