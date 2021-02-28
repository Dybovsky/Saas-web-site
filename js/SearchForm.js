class SearchForm {
  constructor(element) {
    this.element = element;
  }

  createSearchForm() {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "mb-3");
    this.element.appendChild(inputGroup);
    //
    const input = document.createElement("input");
    input.type = "search";
    input.id = "search";
    input.classList.add("form-control");
    input.placeholder = "Find your dream company";
    input.ariaLabel = "search";
    // input.ariaDescribedBy = "button-addon2";
    inputGroup.appendChild(input);
    //
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-secondary");
    btn.type = "button";
    btn.id = "button-addon2";
    btn.textContent = "Search  ";
    inputGroup.appendChild(btn);
    //
    const lens = document.createElement("i");
    lens.classList.add("fas", "fa-search");
    btn.appendChild(lens);
    //
    //
    this.btn = document.getElementById("button-addon2");
    this.search = document.getElementById("search");
    this.btn.addEventListener("click", () => {});
    this.search.addEventListener("keydown", (event) => {
      if (event.keyCode == 13) {
        console.log(111111);
      }
    });
  }
}

// let searchBtn = document.getElementById("button-addon2");

// let search = document.getElementById("search");
// let url = "";

// let resultsList = document.getElementById("resultsList");

// let marquee = document.querySelector(".marquee");
// function displaySpinner(name) {
//   name.style.display = "block";
// }

// function hideSpinner(name) {
//   name.style.display = "none";
// }

// async function makeSearch() {
//   displaySpinner(spinner);
//   let searchTerm = search.value;
//   url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${searchTerm}&limit=10&exchange=NASDAQ`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// async function displaySearch() {
//   resultsList.textContent = "";
//   let searchResults = await makeSearch(); // handle errors;
//   //   console.log(searchResults[0].name);
//   for (let item of searchResults) {
//     displayItem(item);
//   }
//   hideSpinner(spinner);
// }

// function displayItem(data) {
//   const newLi = document.createElement("li");
//   const item = document.createElement("a");
//   newLi.style.listStyle = "none";
//   item.innerText = `  ${data.name} (${data.symbol})`;
//   item.setAttribute("href", `./company.html?symbol=${data.symbol}`);
//   item.setAttribute("class", "list-group-item list-group-item-action");
//   resultsList.appendChild(newLi);
//   newLi.appendChild(item);
//   //
//   let profileUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${data.symbol}`;
//   fetch(profileUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const perc = document.createElement("span");
//       const logo = document.createElement("img");
//       logo.src = data.profile.image;
//       //logo.style.width = "30px";
//       logo.style.height = "30px";
//       const companyChanges = data.profile.changesPercentage;
//       perc.innerText = `${companyChanges}`;
//       item.prepend(logo);
//       item.append(perc);
//       if (companyChanges.includes("-")) {
//         perc.style.color = "red";
//       } else {
//         perc.style.color = "green";
//       }
//     });
// }

// searchBtn.addEventListener("click", displaySearch);
// search.addEventListener("keydown", (event) => {
//   if (event.keyCode == 13) {
//     displaySearch();
//   }
// });
