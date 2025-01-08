const findInsurance = document.querySelector(".find-by-insurance");
const insuranceDropdown = document.querySelector(".insurance-dropdown");

findInsurance.addEventListener("click", () => {
    if(insuranceDropdown.style.display == ''){
        insuranceDropdown.style.display = "block";
    } else {
        insuranceDropdown.style.display = '';
    }
});