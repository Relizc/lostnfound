window.onload = () => {
    if(localStorage.getItem("token")==null){
        window.location = "/login/index.html"
    }
}