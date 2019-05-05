<?php
header('Content-Type: text/html;');
header('Content-Type: application/json',true);

include ('../config/conex.php');//Se conecta con la BD

$codigo=$_POST['codigo'];

$query3 = "SELECT codigo,nombre,direccion,telefono1,fax,email,rnc,enc_compras,cuenta,diascr,excento,consignacion,inactivo,round(comision,2) as comision,comercial,enc_pagos,tlf_enc_pagos,otros,tlf_otros,inactivonota,actividad, proximoa, administrador, tlf_admin, vendedor,zona,paga_flete,round(flete_valor,2) as flete_valor ,limite_act,round(lim_act_credito,2) as lim_act_credito,limitefts,condicioncr,round(descuento,2) as descuento,round(incremento,2) as incremento,listap,activo,permisos,dpto,tipoc,fiscal,vendedor  FROM proveedores where codigo = '$codigo'";//Se ejecuta la consulta en la que seleccionan los datos donde codigo es igual a la variable codigo recibida por ajax

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