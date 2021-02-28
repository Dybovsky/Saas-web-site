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
