function login(){
    userName = document.getElementById("username").value;
    password = Number(document.getElementById("password").value);
    
    xml = new XMLHttpRequest;
    xml.onreadystatechange = () =>{
        if(xml.status == 500){
            alert("Wrong username or password")
        }
        else if(xml.status == 200){
            alert("Success!");
            parsed = JSON.parse(xml.responseText);

            localStorage.setItem("token",parsed["token"])
        }
    }
    xml.open("POST","https://LostnFoundAPI.abra6325.repl.co/api/login");

    xml.send(JSON.stringify({
        "username":userName,
        "password":password
    }))
}
function getFile(filepath){
    fetch("/users.json").then(response => response.json()).then(data =>{
        return data;
    });
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

window.onload = () => {
    document.body.style = "background-image: url(\"/assets/wp" + getRandomInt(0, 2) + ".jpg\"); background-size: cover;"
}