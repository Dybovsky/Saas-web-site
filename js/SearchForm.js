class SearchForm {
  constructor(element) {
    this.element = element;
    this.inputGroup = this.createInputGroup();
    this.searchForm = this.createSearchForm();
    this.btn = this.createSearchBtn();
    this.spinner = this.createSpinner();
  }

  async makeSearch() {
    const searchTerm = this.searchForm.value;
    const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${searchTerm}&limit=10&exchange=NASDAQ`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  createSpinner() {
    const spinner = document.createElement("div");
    spinner.id = "spinner";
    spinner.classList.add("spinner-border", "text-success", "d-none");
    spinner.role = "status";
    this.element.appendChild(spinner);
    //
    const span = document.createElement("span");
    span.classList.add("visually-hidden");
    spinner.appendChild(span);
    return spinner;
  }

  createInputGroup() {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "mb-3");
    this.element.appendChild(inputGroup);
    return inputGroup;
  }

  createSearchForm() {
    //

    const input = document.createElement("input");
    input.type = "search";
    input.id = "search";
    input.classList.add("form-control");
    input.placeholder = "Find your dream company";
    input.ariaLabel = "search";
    // input.ariaDescribedBy = "button-addon2";
    this.inputGroup.appendChild(input);
    return input;
    //
  }

  createSearchBtn() {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-secondary");
    btn.type = "button";
    btn.id = "button-addon2";
    btn.textContent = "Search  ";
    this.inputGroup.appendChild(btn);

    //
    const lens = document.createElement("i");
    lens.classList.add("fas", "fa-search");
    btn.appendChild(lens);

    return btn;
  }

  onSearch(callback) {
    this.btn.addEventListener("click", async () => {
      this.spinner.classList.remove("d-none");
      const resArr = await this.makeSearch();
      await callback(resArr);
      this.spinner.classList.add("d-none");
    });
  }
  //
  //
  // this.btn = document.getElementById("button-addon2");
  // this.search = document.getElementById("search");
  // this.btn.addEventListener("click", () => {});
  // this.search.addEventListener("keydown", (event) => {
  //   if (event.keyCode == 13) {
  //     console.log(111111);
  //   }
  // });
}
