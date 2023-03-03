

function whoops(msg = "We got a problem here!", message = "Sorry, this page encountered an error!") {
    document.body.insertAdjacentHTML("afterbegin", `<div class="whoops">
    <i class="whoops-icon fa-solid fa-triangle-exclamation"></i>
    <div class="msgarea">
        <p class="title">${msg}</p>
        <p>${message}</p>
    </div>
    <i class="fa-solid fa-xmark"></i>
    
</div>`)
}