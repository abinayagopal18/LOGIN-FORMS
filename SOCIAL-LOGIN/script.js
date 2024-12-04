function RegisterToNavigate(){
    let createAccount = document.getElementById("createAccount");
    if (createAccount.textContent === "Create Account"){
        window.location.href = "file:///C:/WORK/PRATICE-DEMO/LOGIN-FILE/SOCIAL-LOGIN/register.html";
    }
    else{
        window.location.href = "file:///C:/WORK/PRATICE-DEMO/LOGIN-FILE/SOCIAL-LOGIN/index.html";
    }
}