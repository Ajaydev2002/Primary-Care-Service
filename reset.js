document.addEventListener("DOMContentLoaded", function() {
    const resetAll = document.querySelector(".reset-btn");

    resetAll.addEventListener('click', function() {
        window.location.reload();
    });
});
