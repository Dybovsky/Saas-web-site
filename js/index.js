let searchBtn = document.getElementById("button-addon2");

let search = document.getElementById("search");
let url = "";

let resultsList = document.getElementById("resultsList");

let marquee = document.querySelector(".marquee");
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
  item.innerText = `  ${data.name} (${data.symbol})`;
  item.setAttribute("href", `./company.html?symbol=${data.symbol}`);
  item.setAttribute("class", "list-group-item list-group-item-action");
  resultsList.appendChild(newLi);
  newLi.appendChild(item);
  //
  let profileUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${data.symbol}`;
  fetch(profileUrl)
    .then((response) => response.json())
    .then((data) => {
      const perc = document.createElement("span");
      const logo = document.createElement("img");
      logo.src = data.profile.image;
      //logo.style.width = "30px";
      logo.style.height = "30px";
      const companyChanges = data.profile.changesPercentage;
      perc.innerText = `${companyChanges}`;
      item.prepend(logo);
      item.append(perc);
      if (companyChanges.includes("-")) {
        perc.style.color = "red";
      } else {
        perc.style.color = "green";
      }
    });
}

// async function showMarquee() {
//   url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/stock/actives`;
//   const response = await fetch(url);
//   const data = await response.json();
//   for (let i = 0; i < data.mostActiveStock.length; i++) {
//     // console.log(data.mostActiveStock[i]);
//     addItemToMar(data.mostActiveStock[i]);
//   }
// }

// function addItemToMar(item) {
//   const marSymb = document.createElement("span");
//   const marPerc = document.createElement("span");
//   marquee.style.background = "white";
//   marSymb.style.color = "black";
//   if (item.changesPercentage.includes("-")) {
//     marPerc.style.color = "red";
//   } else {
//     marPerc.style.color = "green";
//   }

//   marSymb.innerText = `|  ${item.ticker}:`;
//   marPerc.innerText = `${item.changesPercentage} `;
//   marquee.appendChild(marSymb);
//   marquee.appendChild(marPerc);
// }
// showMarquee();

searchBtn.addEventListener("click", displaySearch);
search.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    displaySearch();
  }
});

const myMarquee = new Marquee(marquee);
myMarquee.createMarquee();
myMarquee.showMarquee();

// fetch(
//     "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ"
//   ).then((response) => {
//     response.json().then((data) => console.log(data));
//   });
