<?php 
include ('../../config/conex.php');//Se conecta con la BD  

  $codigo=$_POST['codigo'];//Se recibe el codigo del cliente por ajax
  $resp;//Respuesta que se enviará al ajax


  if($codigo !=""){

  $query = "DELETE FROM socios WHERE codigo='$codigo'"; //Se ejecuta la consulta donde se elimina una fila especifa donde codigo sea igual a la variable codigo que se recibió del ajax
  $sql= mysqli_query($con,$query);

if ($sql){//Si la consulta se ejecutó sin problemas, se le asigna 1 a la variable resp
    $resp=1;
    
}

}
else{
    $resp=2;//Si el codigo está vacío se envía la resp con valor 2
    
}
    
    echo json_encode($resp);//Se envía la respuesta al ajax.