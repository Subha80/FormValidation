let nameError=document.getElementById("name-error");
let phoneError=document.getElementById("phone-error");
let emailError=document.getElementById("email-error");
let massageError=document.getElementById("message-error");
let submitError=document.getElementById("submit-error");

function nameValidation(){
    var fullname= document.getElementById("name").value;

    if(fullname.length ==0){
        nameError.innerHTML="Fullname is required";
        return false;
    }
    if(!fullname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write fullname";
        return false;
    }
    nameError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
      return true;
}

function phoneValidation(){
    var phonenumber=document.getElementById("phone").value;

    if(phonenumber.length ==0){
        phoneError.innerHTML="Phone No is required";
        return false;
    }
    if(phonenumber.length !==10){
        phoneError.innerHTML="Phone No should be 10 digits";
        return false;
    }
    if(!phonenumber.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Only numbers please";
        return false;
    }
    phoneError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}

function emailValidation(){
    let emailid=document.getElementById("email").value;

    if(emailid.length == 0){
        emailError.innerHTML="Email-id is required";
        return false;
    }
    if(!emailid.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Invalid Email-Id";
        return false;
    }

    emailError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;

}
function messageValidation(){
    let message=document.getElementById("message").value;
    let minimum=30;
    let rest=minimum-message.length;

    if(rest > 0){
        massageError.innerHTML=rest+" more charecters required";
        return false;
    }
    massageError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
    
}

function validateForm(){
    if(!nameValidation() || !phoneValidation() || !emailValidation() || !messageValidation()){
        submitError.style.display="block";
        submitError.innerHTML="All fields are required";
        setTimeout(function(){submitError.style.display='none'},3000);
        return false;
    }
}



