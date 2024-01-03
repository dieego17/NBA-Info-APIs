const nav__none = document.getElementById("nav__none")
const hambur__icon = document.getElementById("hambur__icon")

let isNavVisible = false;

nav__none.classList.add("displaynone");

hambur__icon.addEventListener("click", () => {
    if (isNavVisible) {
        nav__none.classList.add("displaynone");
        nav__none.classList.remove("displayflex");
        isNavVisible = false;
    } else {
        nav__none.classList.remove("displaynone");
        nav__none.classList.add("displayflex");
        isNavVisible = true;
    }
});

