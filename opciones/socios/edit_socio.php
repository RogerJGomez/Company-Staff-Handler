<?php
include ('../../config/conex.php');

//agregar resp a las condicionales

$codigo =$_POST['codigo'];
$nombre =$_POST['nombre'];
$cod_guagua = $_POST['cod_guagua'];
$tlf=$_POST['tlf'];
$doc_id=$_POST['doc_id'];
$resp=0;


if($resp==0){

        $update="UPDATE socios SET codigo='$codigo', nombre='$nombre',cod_guagua='$cod_guagua',telefono='$tlf', doc_id='$doc_id' WHERE codigo = '$codigo'";
 
        $ejecutar = mysqli_query($con, $update); 
        //Si la respuesta se mantiene en 0 quiere decir que no ocurrieron problemas. Se procede a ejecutar una consulta SQL donde se actualizan los datos del usuario ingresado, dandole valores a su contraseña, permisos y activo
}
  
    




echo json_encode($resp);