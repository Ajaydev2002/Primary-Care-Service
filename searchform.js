const  searchIcon = document.querySelector(".search-icon");
const CloseIcon = document.querySelector(".close-icon");
const searchForm = document.querySelector(".search-form");


searchIcon.addEventListener("click", () => {
    searchForm.style.display = "block";
});

CloseIcon.addEventListener("click", () => {
    searchForm.style.display = '';
});