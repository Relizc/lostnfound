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
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "abra6325@outlook.com",
                    Password: "Abraham632580",
                    To: email.value,
                    From: "abra6325@outlook.com",
                    Subject: "VERIFICATION CODE!!!!",
                    Body: verification + " EXPIRES 60 SECOND!!!",
                  })
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
    username = document.getElementById("username");

}