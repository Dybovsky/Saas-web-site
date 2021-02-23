let searchBtn = document.getElementById("button-addon2");

let search = document.getElementById("search");
let url = "";

let resultsList = document.getElementById("resultsList");

function displaySpinner(name) {
  name.style.display = "block";
}

function hideSpinner(name) {
  name.style.display = "none";
}

async function makeSearch() {
  displaySpinner(spinner);
  let searchTerm = search.value;
  url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${searchTerm}&limit=10&exchange=NASDAQ`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function displaySearch() {
  resultsList.textContent = "";
  let searchResults = await makeSearch(); // handle errors;
  //   console.log(searchResults[0].name);
  for (let item of searchResults) {
    displayItem(item);
  }
  hideSpinner(spinner);
}

function displayItem(data) {
  const newLi = document.createElement("li");
  const item = document.createElement("a");
  newLi.style.listStyle = "none";
  item.innerText = `${data.name} (${data.symbol})`;
  item.setAttribute("href", `./company.html?symbol=${data.symbol}`);
  item.setAttribute("class", "list-group-item list-group-item-action");
  resultsList.appendChild(newLi);
  newLi.appendChild(item);
}

searchBtn.addEventListener("click", displaySearch);
// search.addEventListener("keydown", (event) => {
//   if (event.keyCode == 13) {
//     displaySearch;
//   }
// });

// fetch(
//     "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ"
//   ).then((response) => {
//     response.json().then((data) => console.log(data));
//   });
