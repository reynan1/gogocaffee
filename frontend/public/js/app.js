function showSearchForm() {
  let searchBtn = document.querySelector(".navigation__button-2");
  let searchForm = document.querySelector(".navigation__search-data");
  searchBtn.addEventListener("click", () => {
    searchForm.style.visibility = "visible";
    searchForm.style.opacity = "1";

    setTimeout(function () {
      searchForm.style.visibility = "hidden";
      searchForm.style.opacity = "0";
    }, 15000);
  });
}

showSearchForm();

function toggleForm() {
  let closeBtn = document.querySelector(".navigation__login-cancel");
  let toggleBtn = document.querySelector("#toggle-id");
  let navForm = document.querySelector(".navigation__nav");
  toggleBtn.addEventListener("click", () => {
    navForm.style.marginLeft = "0";
    navForm.style.opacity = "1";
  });

  closeBtn.addEventListener("click", () => {
    navForm.style.opacity = "0";
    navForm.style.marginLeft = "-100rem";
  });
}

toggleForm();

function showAboutList() {
  let closeBtn = document.querySelector(".navigation__minus-icon");
  let arrowDownIcon = document.querySelector(".navigation__drop-icon");
  let aboutList = document.querySelector(".navigation__about--list");
  arrowDownIcon.addEventListener("click", () => {
    aboutList.style.marginTop = "0";
    aboutList.style.opacity = "1";
    arrowDownIcon.style.visibility = "hidden";
    arrowDownIcon.style.opacity = "0";
    closeBtn.style.zIndex = "1";
    closeBtn.style.opacity = "1";
    console.log("working");
  });

  closeBtn.addEventListener("click", () => {
    aboutList.style.opacity = "0";
    aboutList.style.marginTop = "-30rem";
    closeBtn.style.zIndex = "-1";
    closeBtn.style.opacity = "0";
    arrowDownIcon.style.visibility = "visible";
    arrowDownIcon.style.opacity = "1";
  });
}

showAboutList();

function bannerCarousel() {
  let counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
}

bannerCarousel();
