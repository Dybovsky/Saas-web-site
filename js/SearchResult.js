class SearchResults {
  constructor(element) {
    this.element = element;
  }

  async displaySearch() {
    let spin = document.getElementById("spinner");
    spin.classList.remove("d-none");
    const resultsList = document.getElementById("resultsList");
    resultsList.textContent = "";
    let searchResults = await this.makeSearch(); // handle errors;
    //   console.log(searchResults[0].name);
    for (let item of searchResults) {
      this.displayItem(item);
      //console.log(111111111);
    }
    spin.classList.add("d-none");
  }

  async makeSearch() {
    //this.displaySpinner();
    const searchTerm = document.getElementById("search").value;
    const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${searchTerm}&limit=10&exchange=NASDAQ`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  }

  displayItem(data) {
    const resultsList = document.getElementById("resultsList");
    const newLi = document.createElement("li");
    const item = document.createElement("a");
    newLi.style.listStyle = "none";
    let res = `  ${data.name} (${data.symbol})`;
    let term = document.getElementById("search").value;
    item.innerHTML = res.replace(
      new RegExp(term, "gi"),
      (match) => `<mark>${match}</mark>`
    );
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
}
