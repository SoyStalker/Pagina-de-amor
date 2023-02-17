// funcion displace
function displace() {
    this.style.marginLeft == "400px" ? this.style.marginLeft = "20px" : this.style.marginLeft = "400px";
}

// funcion sies (solo es una notificacion)
function sies() {
    alert("Ya somos novios <3");  //notificacion en la web
}

// cuando el mouse se desplace por el boton "no" se ejecutara la funcion "displace"
document.getElementById("no").addEventListener("mouseover", displace) 

// cuando el mouse de click en el boton "si" se ejecutara la funcion "sies"
document.getElementById("si").addEventListener("click", sies)

// esta tercera funcion tranquila mente la podria juntar con la de "sies", pero seria muy larga
document.getElementById("si").addEventListener("click", function(){
    notify()
});

// funcion notify
function notify(){
    if (!("Notification" in window)) {
        alert("S");
    }else if(Notification.permission === "granted"){
        var notification = new Notification("Hola mi amor :3"); //le envia este mensaje al escritorio si ya tenia el permiso aceptado
    }else if(Notification.permission !== "denied"){

        Notification.requestPermission(function(permission) { // en caso de que no tenga el permiso lo solicita

            if(Notification.permission === "granted"){

                var notification = new Notification("Aceptaste ser mi novia/o") // le envia este mensaje cuando acepte la notificacion
            }
        });
    }
}