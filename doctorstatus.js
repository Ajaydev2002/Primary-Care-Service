const scheduleOnline = document.querySelector(".schedule-online");
const acceptingPatients = document.querySelector(".schedule-online");
const onlineContent = document.querySelector(".schedule-online-content");

scheduleOnline.addEventListener("click", () => {
    onlineContent.style.display =
    onlineContent.style.display === "block" ? "none" : "block";
});

