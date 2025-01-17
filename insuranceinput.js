const insuranceInput = document.getElementById("insurance-input");
const dropdownItems = document.querySelectorAll(".inputItem");
const inputItemCheckbox = document.querySelector(".inputItem-checkbox");


dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
        const text = item.querySelector('p').textContent;
        insuranceInput.value = text;
    });
});



