const addmissionForm = document.getElementById("addmissionForm");
const thankyou = document.getElementById("thankyou");
const submitButton = document.getElementById("submitButton");
let name = document.getElementById("name");
let number = document.getElementById("number");
addmissionForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    //alert("Thank you. Our staff will contact you!!!");
    thankyou.style.display="block";
    addmissionForm.classList.add("disable-content");
    addmissionForm.reset();
})
