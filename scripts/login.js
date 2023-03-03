function login(){
    var parsed = getFile("/us");
    
}
function getFile(filepath){
    fetch("/users.json").then(response => response.json()).then(data =>{
        return data;
    });
}
}