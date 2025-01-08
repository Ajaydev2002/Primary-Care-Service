const insuranceInput = document.getElementById("insurance-input");
const dropdownItems = document.querySelectorAll(".inputItem p");


dropdownItems.forEach((item) => {
    item.addeventListener("click", () => {
            insuranceInput.textContent = this.textcontent;
    });
});


