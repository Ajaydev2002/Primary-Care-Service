const findInsurance = document.querySelector(".find-by-insurance");
const insuranceDropdown = document.querySelector(".insurance-dropdown");
const insuranceInput = document.getElementById("insurance-input");
const inputItems = document.querySelectorAll(".inputItem");


findInsurance.addEventListener("click", (event) => {
  event.stopPropagation(); 
  insuranceDropdown.style.display = 
    insuranceDropdown.style.display === "block" ? "" : "block";
});


inputItems.forEach((item) => {
  const checkbox = item.querySelector("input");
  const text = item.querySelector("p").textContent;

  item.addEventListener("click", (event) => {
    event.stopPropagation(); 

    insuranceInput.value = text;

    inputItems.forEach((otherItem) => {
      const otherCheckbox = otherItem.querySelector("input");
      otherCheckbox.checked = false;
    });

    checkbox.checked = true;

    insuranceDropdown.style.display = "";
  });

  checkbox.addEventListener("click", (event) => {
    event.stopPropagation();
    item.click();
  });
});

document.addEventListener("click", () => {
  insuranceDropdown.style.display = "";
});
