let form = document.querySelector("form");
let signupData=JSON.parse(localStorage.getItem("signup-data"))||[];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        name:form.name.value,
        email:form.mail.value,
        password:form.password.value,
        confirmPassword:form.password2.value
    }
    let flag=true;
    signupData.forEach((elem)=>{
        if(elem.email==obj.email){
            flag=false;
        
        }

    });
    if(flag==false){
        alert("email already registered");
    }else{
        if(obj.password.length<8){
            alert("Password length should be above 7")
        };
        
        
        // let regularExpression = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,20}$/;
        // if(!regularExpression.test(obj.password)){
        //     alert("Password must contain one small, one capital and one special character");
            
    
        // }
        if(obj.password!=obj.confirmPassword){
            alert("password not matched");
        }
        
        else{
            signupData.push(obj);
            localStorage.setItem("signup-data",JSON.stringify(signupData));
            alert("Sign Up successfully");
            window.location.href="login.html";
        }
    }


    

});
