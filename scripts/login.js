function login(){
    var parsed;
    fetch("/users.json").then(response => response.json()).then(data =>{
        parsed = data
        console.log(parsed);
    });
}