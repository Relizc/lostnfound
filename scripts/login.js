function login(){
    var parsed;
    fetch("/users.json").then(response => response.json()).then(data =>{
        parsed = data
        console.log(parsed);
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