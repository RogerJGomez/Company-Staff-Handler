<?php
header('Content-Type: text/html;');
header('Content-Type: application/json',true);

include '../../config/conex.php';


$query = "SELECT count(codigo) as allcount FROM socios";
$result = mysqli_query($con,$query); 


$jsonData = array();
while ($datos=mysqli_fetch_assoc($result)) {
    $jsonData[] = $datos;
}


        $jsonDataf = utf8ize($jsonData);

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


echo json_encode($jsonDataf);