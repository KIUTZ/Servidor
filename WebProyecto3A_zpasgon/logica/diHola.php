<?php
// -------------------------------------------------
//
// usuario:Texto -> diHola() -> (nombre:Texto, saludo:Texto) 
//
// -------------------------------------------------

function diHola( $usuario ) {
  $numero = rand(1, 10);
  $objetoResultado = new stdClass;
  $objetoResultado->nombre = $usuario;
  $objetoResultado->saludo = $numero;

  return $objetoResultado;
}

?>
