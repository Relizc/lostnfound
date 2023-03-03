function login(){
    var parsed = getFile("/us");
    
}
function getFile(filepath){
    fetch("/users.json").then(response => response.json()).then(data =>{
        return data;
    });
}
<<<<<<< HEAD
=======

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

window.onload = () => {
    document.body.style = "background-image: url(\"/assets/wp" + getRandomInt(0, 2) + ".jpg\"); background-size: cover;"
>>>>>>> 35ef62065ed8318d0f0effde170c5bb53791f4a0
}