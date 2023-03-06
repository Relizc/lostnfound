window.onload = () => {
    sendVerify = document.getElementById("sendCode");
    submit = document.getElementById("logger");
    submit.disable = true;
    xml = new XMLHttpRequest;
    sendVerify.onclick = () => {
        forceCloseWhoops();
        email = document.getElementById("email");
        verification = Math.floor(Math.random()*90000) + 10000;
        id = Math.floor(Math.random()*90000) + 10000;
        xml.onreadystatechange = () =>{
            if(xml.status == 500){
                whoops("Error!","Invalid Email.");
                
            }
            else if(xml.status == 200){
                d = JSON.parse(xml.responseText);
                
                whoops("Success!",d.message);
            }
        }
        xml.open("POST","https://LostnFoundAPI.ericpooman.repl.co/api/verificationcode")
        xml.send(JSON.stringify({
            "id":id,
            "verify":verification,
            "email":email.value
        }))
    }
    submit.onclick = () => {
        forceCloseWhoops();
        email = document.getElementById("email");
        code = document.getElementById("verify");
        username = document.getElementById("username");
        pass1 = document.getElementById("password");
        pass2 = document.getElementById("confirmpass");
        if(email.value == ""||toString(code.value)==""||username.value==""||pass1.value==""||pass2.value==""){
            whoops("Error!","One of the fields are not filled out!");
            
        }
        else{
            if(pass1.value == pass2.value){
                xml.onreadystatechange = () => {
                    if(xml.status == 500){
                        whoops("Error!","Invalid Email");
                    }else if(xml.status == 403){
                        whoops("Error!","Invalid code");
                    }else if (xml.status == 200){
                        d = JSON.parse(xml.responseText);
                        window.location = "/login/index.html";
                    }
                }
                xml.open("POST","https://LostnFoundAPI.ericpooman.repl.co/api/register");
                xml.send(JSON.stringify({
                    "email":email.value,
                    "code":toString(code.value),
                    "username":username.value,
                    "password":pass1.value
                }))
            }else{
                whoops("Error!","The two passwords are different")
            }
        }
    }
    

}