const menuexit = document.querySelector(".exit-icon");
const findDoctor = document.querySelector(".find-doctor-btn");

menuexit.addEventListener("click", () => {
    window.location.href = "index.html";
});

findDoctor.addEventListener("click", () => {
    window.location.href = "finddoctor.html";
});