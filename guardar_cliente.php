<?php
include ('config/conex.php');
//agregar resp a las condicionales

$user=$_POST['user'];
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$pass=$_POST['pass'];
$resp=0;


if(preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/", $_POST['email']))
{
//if it has the correct format whether the email has already exist
$sql1 = "SELECT email FROM cliente WHERE email = '$email'";

    $result1 = mysqli_query($con,$sql1);

	$stmt = mysqli_prepare ($con, $sql1); 
	mysqli_stmt_execute($stmt);
	mysqli_stmt_store_result($stmt);
	$rows = mysqli_stmt_num_rows($stmt);

if ($rows > 0)
{
    //Correo repetido
    $resp=1;
}

}
else{
    //Problemas con el formato del correo 
	$resp=2;
}

$sql2 = "SELECT codigo FROM cliente WHERE codigo = '$user'";

$result2 = mysqli_query($con,$sql2);

	$stmt2 = mysqli_prepare ($con,$sql2); 
	mysqli_stmt_execute($stmt2);
	mysqli_stmt_store_result($stmt2);
	$rows2 = mysqli_stmt_num_rows($stmt2);

if ($rows2 > 0)
{
    //Usuario repetido
    $resp=3;
}


if($resp==0){
    //Si no ocurrió ningún problema, la variable "resp" queda con el valor de 0 y luego se procede a insertar los datos enviados por el ajax en la BD
      $insertar="INSERT INTO cliente(codigo,nombre,email,password) VALUES ('$user','$nombre','$email','$pass')";
 
        $ejecutar = mysqli_query($con, $insertar); 
}
  
    




echo json_encode($resp); //Devuelvo una respuesta en formato JSON la cual servirá para mostrar un mensaje de JavaScript en pantalla
