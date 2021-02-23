const comName = document.getElementById("companyName");
const comImg = document.getElementById("companyImg");
const comDescr = document.getElementById("companyDescr");
const comLink = document.getElementById("companyLink");
const comChanges = document.getElementById("changes");
const comPrice = document.getElementById("price");
const spinner = document.getElementById("spinner");

function displaySpinner(name) {
  name.style.display = "block";
}

function hideSpinner(name) {
  name.style.display = "none";
}

function getSymbol() {
  const urlParam = new URLSearchParams(window.location.search);
  const symbol = urlParam.get("symbol");
  return symbol;
}

function showCompanyProfile(data) {
  const companyName = data.profile.companyName;
  const companyImg = data.profile.image;
  const companyDescr = data.profile.description;
  const companyLink = data.profile.website;
  const companyPrice = data.profile.price;
  const companyChanges = data.profile.changesPercentage;
  comName.textContent = companyName;
  comImg.src = companyImg;
  comDescr.textContent += companyDescr;
  comLink.href = companyLink;
  comPrice.innerText += companyPrice;
  comChanges.innerText += companyChanges;
  if (companyChanges.includes("-")) {
    comChanges.style.color = "red";
  }
  comChanges.style.color = "green";
}

async function getCompanyPage() {
  displaySpinner(spinner);
  let symbol = getSymbol();
  let companyUrl = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;
  const response = await fetch(companyUrl);
  const data = await response.json();
  showCompanyProfile(data);
  hideSpinner(spinner);
}

async function getPriceHistory() {
  let symbol = getSymbol();
  let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`;
  const response = await fetch(url);
  const data = await response.json();
  drawGraph(data);
  //   console.log(data.historical[i]);
}

getPriceHistory();

getCompanyPage();

function drawGraph(mydata) {
  Chart.defaults.global.defaultFontColor = "black";
  let days = [];
  let price = [];
  for (let i = 0; i < mydata.historical.length; i++) {
    days.push(mydata.historical[i].date);
    price.push(mydata.historical[i].close);
  }
  console.log(mydata.historical);
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: days,
      datasets: [
        {
          label: "Stock price",
          backgroundColor: "#4c1f7c",
          borderColor: "#4c1f7c",
          data: price,
          pointRadius: 1,
        },
      ],
    },

    // Configuration options go here
    options: {},
  });
}
