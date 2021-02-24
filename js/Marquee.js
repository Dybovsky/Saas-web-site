class Marquee {
  constructor(element) {
    this.myElement = element;
    this.url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/stock/actives`;
  }
  createMarquee() {
    let h3 = document.createElement("h3");
    h3.id = "marquee";
    let img = document.createElement("img");
    img.src = "../favicon/favicon-32x32.png";
    h3.appendChild(img);
    this.myElement.appendChild(h3);
  }

  async showMarquee() {
    const response = await fetch(this.url);
    const data = await response.json();
    for (let i = 0; i < data.mostActiveStock.length; i++) {
      this.addItemToMar(data.mostActiveStock[i]);
    }
  }

  addItemToMar(item) {
    let marquee = document.getElementById("marquee");
    const marSymb = document.createElement("span");
    const marPerc = document.createElement("span");
    marquee.style.background = "white";
    marSymb.style.color = "black";
    if (item.changesPercentage.includes("-")) {
      marPerc.style.color = "red";
    } else {
      marPerc.style.color = "green";
    }

    marSymb.innerText = `|  ${item.ticker}:`;
    marPerc.innerText = `${item.changesPercentage} `;
    marquee.appendChild(marSymb);
    marquee.appendChild(marPerc);
  }
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
