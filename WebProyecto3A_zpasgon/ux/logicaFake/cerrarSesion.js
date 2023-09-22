function cerrarSesion(cb) {

    // preparar la llamada remota
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        // callback para cuando llegue la respuesta
        // de la petición que haremos más abajo

        if (this.readyState == 4 && this.status == 200) {
            // este es el texto JSON recibido la llamada a
            // demo_file.php, pasado a objeto JSON
            console.log( "recibo: " + this.responseText )
            var resultado = JSON.parse(this.responseText)

            // no hay error, devuelvo el resultado
            cb( resultado )

        }
    }

    // llamamos *remotamente* al fichero diHola.php
    // (la verdadera función de la lógica)
    xmlhttp.open("GET", "../rest/hacerLogin.php", true)
    xmlhttp.send()

}