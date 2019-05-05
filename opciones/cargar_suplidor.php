<?php
header('Content-Type: text/html;');
header('Content-Type: application/json',true);

include ('../config/conex.php');//Se conecta con la BD


$query3 = "SELECT DISTINCT trim(codigo) as codigo, trim(nombre) as nombre FROM suplidor";//Se ejecuta la consulta en la que seleccionan el nombre y el codigo sin repetirse

    $result = mysqli_query($con,$query3); 
        
    $jsonData = array();//Se declara un arreglo donde se almacenarán los datos de la tabla
    while ($datos=mysqli_fetch_assoc($result)) {
        $jsonData[] = $datos;//Se recorre el resultado de la consulta SQL y los datos se van almacenando en el arreglo jsonData
    }
    
    
            $jsonDataf = utf8ize($jsonData);//Luego se le da formato al arreglo
    
      function utf8ize($mixed) {
        if (is_array($mixed)) {
            foreach ($mixed as $key => $value) {
                $mixed[$key] = utf8ize($value);
            }
        } else if (is_string ($mixed)) {
            return utf8_encode($mixed);
        }
        return $mixed;
    }
    
    
    echo json_encode($jsonDataf);//Se devuelve la respuesta en formato JSON ya preparado
    
    