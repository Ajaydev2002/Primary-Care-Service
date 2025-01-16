const searchBtn = document.querySelector(".search-btn");
const doctorList = document.querySelectorAll(".doctors"); 
const acceptingPatientsCheckbox = document.querySelector(".accepting-patients-checkbox");
const scheduleOnlineCheckbox = document.querySelector(".schedule-online-checkbox");
const scheduleOnlineContent = document.querySelector(".schedule-online-content");

const applyFilters = () => {
    const input = document.getElementById("insurance-input").value.trim().toLowerCase(); 
    const showOnlyAccepting = acceptingPatientsCheckbox.checked;
    const showOnlyOnline = scheduleOnlineCheckbox.checked;
    let anyDoctorVisible = false;

    doctorList.forEach(doctor => {
        const dataTarget = doctor.getAttribute("data-target").toLowerCase();
        const doctorDetail = doctor.querySelector(".doctor-detail h4");
        const isAcceptingNewPatients = doctorDetail && doctorDetail.textContent.trim().toUpperCase() === "ACCEPTING NEW PATIENTS";
        const isScheduleOnline = doctorDetail && doctorDetail.textContent.trim().toUpperCase() === "SCHEDULE ONLINE";

        let shouldDisplay = dataTarget.includes(input);

        if (showOnlyAccepting) {
            shouldDisplay = shouldDisplay && isAcceptingNewPatients;
        }
        if (showOnlyOnline) {
            shouldDisplay = shouldDisplay && isScheduleOnline;
        }

        doctor.style.display = shouldDisplay ? "block" : "none";
        if (shouldDisplay) {
            anyDoctorVisible = true;
        }
    });

    scheduleOnlineContent.style.display = anyDoctorVisible ? "none" : "block";
};

searchBtn.addEventListener("click", applyFilters);
acceptingPatientsCheckbox.addEventListener("change", applyFilters);
scheduleOnlineCheckbox.addEventListener("change", applyFilters);
