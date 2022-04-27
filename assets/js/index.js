window.addEventListener("load", function () {
  const searchInput = document.querySelector(".search__input");
  const logo = document.querySelector(".logo");
  const burguer = document.querySelector(".burguer");
  const menu = document.querySelector(".topMenu__list");
  const close = document.querySelector(".topMenu__close");

  burguer.addEventListener("click", function () {
    menu.style.display = "flex";
    close.style.display = "block";
  });

  close.addEventListener("click", function () {
    close.style.display = "none";
    menu.style.display = "none";
  });

  searchInput.addEventListener("click", function () {
    if (window.innerWidth <= 1024) {
      logo.classList.add("none");
      searchInput.classList.add("search__input--active");
      searchInput.style.width = innerWidth - 150 + "px";
    }
  });

  searchInput.addEventListener("focusout", function () {
    if (window.innerWidth <= 1024) {
      searchInput.classList.remove("search__input--active");
      searchInput.value = "";
      searchInput.style.width = "17px";
      logo.classList.remove("none");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      menu.style.display = "flex";
      searchInput.style.width = "246px";
      close.style.display = "none";
    } else {
      searchInput.value = "";
      searchInput.style.width = "17px";
      searchInput.classList.remove("search__input--active");
      logo.classList.remove("none");
      menu.style.display = "none";
    }
  });
});
