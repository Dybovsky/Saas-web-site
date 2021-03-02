class SearchForm {
  constructor(element, callback) {
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
    btn.addEventListener("click", () => {
      this.callback();
    });

    //
    const lens = document.createElement("i");
    lens.classList.add("fas", "fa-search");
    btn.appendChild(lens);
    //
    //
    this.btn = btn;
    this.search = input;
    input.addEventListener("keydown", (event) => {
      if (event.keyCode == 13) {
        this.callback();
      }
    });
    this.createSpinner();
  }
  createSpinner() {
    const spinner = document.createElement("div");
    spinner.id = "spinner";
    spinner.classList.add("d-none", "spinner-border", "text-success");
    spinner.role = "status";
    this.element.appendChild(spinner);
    //
    const span = document.createElement("span");
    span.classList.add("visually-hidden");
    spinner.appendChild(span);
  }

  onSearch(callback) {
    this.callback = callback;
  }
}
