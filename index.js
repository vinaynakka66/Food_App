const form = document.getElementById("form")
const uname = document.getElementById("uname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const tandc= document.getElementById("tc")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validate()) {
        window.location.href = "form.html";
    }
})

function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let isValid = true;

    if(nameValue===''){
        setError(uname,'User name cannot be empty')
        isValid = false;
    }
    else if(nameValue.length<3){
        setError(uname,'User name should be minimum 3 characters')
        isValid = false;
    }
    else{        
        setSuccess(uname)
    }
    
    if(emailValue===''){
        setError(email,'Email cannot be empty')
        isValid = false;
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter a valid Email Id')
        isValid = false;
    }
    else{        
        setSuccess(email)
    }
    
    if(passwordValue===''){
        setError(password,'Password cannot be empty')
        isValid = false;
    }
    else if(passwordValue.length<8){
        setError(password,'Password should be minimum 8 characters')
        isValid = false;
    }
    else{        
        setSuccess(password)
    }
    
    if(!tandc.checked){
        setError(tc,'Click on agree terms checkbox')
        isValid = false;        
    }
    else{
        setSuccess(tc)
    }

    return isValid; // Return whether the form is valid
}

function setError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error')
    parent.classList.remove('success')
}

function setSuccess(input){
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}

function emailCheck(input){
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input)       
    return valid
}
