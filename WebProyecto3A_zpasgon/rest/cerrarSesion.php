<?php

require_once('../logica/cerrarSesion.php');

$objetoResultado = new stdClass;
// obtengo valores de los parámetros
$nombre = null;
$password = null;

if ( cerrarSesion() == true  ) {
    session_destroy();

    $objetoResultado->resultado = false;
}