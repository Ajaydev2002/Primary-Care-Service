const findDoctor = document.querySelectorAll(".find-doctor-btn,.prim-care-doctor-btn");

findDoctor.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "finddoctor.html";
    });
});
