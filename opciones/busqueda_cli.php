<?php

include ('../config/conex.php');//Se conecta con la BD  


$html = '';
$key = $_POST['key'];
 
$result = $con->query(
    'SELECT * FROM clientes WHERE codigo LIKE "%'.strip_tags($key).'%"'
);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {                
        $html .= '<div><a class="suggest-element" data="'.utf8_encode($row['codigo']).'" id="socio'.$row['codigo'].'">'.utf8_encode($row['codigo']).' '.utf8_encode($row['nombre']).'</a></div>';
    }
}
echo $html;
?>