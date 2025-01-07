const aboutHeading1 = document.querySelector(".FAQ-content1-heading");
const aboutHeading2 = document.querySelector(".FAQ-content2-heading");
const aboutHeading3 = document.querySelector(".FAQ-content3-heading");

const aboutPara1 = document.querySelector(".FAQ-content1-para");
const aboutPara2 = document.querySelector(".FAQ-content2-para");
const aboutPara3 = document.querySelector(".FAQ-content3-para");


aboutHeading1.addEventListener("click", () => {
    if(aboutPara1.style.display == '') {    
        aboutPara1.style.display = "block";
    } else {
        aboutPara1.style.display = '';
    }
});

aboutHeading2.addEventListener("click", () => {
    if(aboutPara2.style.display == '') {
        aboutPara2.style.display = "block";
    } else {
        aboutPara2.style.display = '';
    }
});

aboutHeading3.addEventListener("click", () => {
    if(aboutPara3.style.display == '') {
        aboutPara3.style.display = "block";
    } else {
        aboutPara3.style.display = ''
    }
})