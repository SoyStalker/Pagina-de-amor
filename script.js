function displace() {
    this.style.marginLeft == "400px" ? this.style.marginLeft = "20px" : this.style.marginLeft = "400px";
}

function sies() {
    alert("Ya somos novios <3");
}

document.getElementById("no").addEventListener("mouseover", displace)

document.getElementById("si").addEventListener("click", sies)

document.getElementById("si").addEventListener("click", function(){
    notify()
});

function notify(){
    if (!("Notification" in window)) {
        alert("S");
    }else if(Notification.permission === "granted"){
        var notification = new Notification("Hola mi amor :3");
    }else if(Notification.permission !== "denied"){

        Notification.requestPermission(function(permission) {

            if(Notification.permission === "granted"){

                var notification = new Notification("Aceptaste ser mi novia/o")
            }
        });
    }
}