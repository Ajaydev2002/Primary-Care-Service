const searchBtn = document.querySelector(".search-btn");
const doctorList = document.querySelectorAll(".doctors"); 
const acceptingNewPatients = document.querySelector(".accepting-patients");
const doctors = document.querySelector(".doctor-detail");


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


