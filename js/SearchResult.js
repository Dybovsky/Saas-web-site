class SearchResults {
  constructor(element) {
    this.element = element;
  }

  async displaySearch(searchResults) {
    // let spinner = document.getElementById("spinner");

    const resultsList = document.getElementById("resultsList");
    resultsList.textContent = "";

    // const searchResults = await this.makeSearch(); // handle errors;
    //   console.log(searchResults[0].name);
    for (let item of searchResults) {
      this.displayItem(item);
    }
  }

  displayItem(data) {
    const resultsList = document.getElementById("resultsList");
    const newLi = document.createElement("li");
    const item = document.createElement("a");
    newLi.style.listStyle = "none";
    item.innerText = `  ${data.name} (${data.symbol})`; //var
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

  //   let btn = document.getElementById('button-addon2');
  //   btn..addEventListener("click", this.displaySearch);
}
