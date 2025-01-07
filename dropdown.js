
const getCare = document.querySelector(".get-care");
const mainContainer = document.querySelector(".dropdown-container");

getCare.addEventListener("click", () => {
    if (mainContainer.style.display == '') {
        mainContainer.style.display = 'block';
    }else {
        mainContainer.style.display = '';
    }
});