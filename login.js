let form = document.querySelector("form");
let loginCheck=JSON.parse(localStorage.getItem("signup-data"))||[];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let login_mail = document.querySelector("#log_mail").value;
    let login_pass = document.querySelector("#log_pass").value;
    let mail_check=false;
    let pass_check=false;
    loginCheck.forEach((elem)=>{
        if(login_mail==elem.email){
            mail_check=true;
        }
        if(login_pass==elem.confirmPassword){
            pass_check=true;
        }

    
    });
    if(mail_check==false){
        alert("email not found");
    }else if(pass_check==false){
        alert("password not matched");
    }else if(mail_check==true&&pass_check==true){
        alert("log in successfully");
        window.location.href="index.html";

        
    }
    
});
console.log(loginCheck)