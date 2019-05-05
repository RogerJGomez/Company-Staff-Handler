<?php
include ('../../config/conex.php');
include ('../../config/crypt.php');
//agregar resp a las condicionales


$codigo =$_POST['codigo'];
$nombre =$_POST['nombre'];
$cod_guagua = $_POST['cod_guagua'];
$tlf=$_POST['tlf'];
$doc_id=$_POST['doc_id'];


$resp=0;
if($resp==0){
    //Si no ocurrió ningún problema, la variable "resp" queda con el valor de 0 y luego se procede a insertar los datos enviados por el ajax en la BD
      $insertar="INSERT INTO socios (codigo, nombre, cod_guagua, telefono, doc_id) VALUES ('$codigo', '$nombre', '$cod_guagua', '$tlf', '$doc_id')";
        
        $ejecutar = mysqli_query($con, $insertar); 
}
  
    




echo json_encode($resp); //Devuelvo una respuesta en formato JSON la cual servirá para mostrar un mensaje de JavaScript en pantalla