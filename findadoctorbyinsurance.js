const searchBtn = document.querySelector(".search-btn");
const doctorList = document.querySelectorAll(".doctors"); 


searchBtn.addEventListener("click", () => {
    const input = document.getElementById("insurance-input").value.trim().toLowerCase(); 
    doctorList.forEach(doctor => {
        const dataTarget = doctor.getAttribute("data-target").toLowerCase(); 

        if (dataTarget.includes(input)) {
            doctor.style.display = "block"; 
        } else {
            doctor.style.display = "none"; 
        }
    });
});


