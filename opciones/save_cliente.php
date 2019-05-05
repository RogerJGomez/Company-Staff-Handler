<?php
include ('../config/conex.php');
//agregar resp a las condicionales
//Se reciben los datos enviados por ajax.
$nombre_cliente =$_POST['nombre_cliente'];
$codigo =$_POST['codigo'];
$comercial =$_POST['comercial'];
$rnc = $_POST['rnc'];
$actividad=$_POST['actividad'];
$direccion=$_POST['direccion'];
$proximoA=$_POST['proximoA'];
$tlf1=$_POST['tlf1'];
$fax=$_POST['fax'];
$email=$_POST['email'];
$admin=$_POST['admin'];
$tlf_admin=$_POST['tlf_admin'];      
$enc_compras=$_POST['enc_compras'];
$tlf_enc_compras=$_POST['tlf_enc_compras'];
$enc_pagos=$_POST['enc_pagos'];
$tlf_enc_pagos=$_POST['tlf_enc_pagos'];
$otros=$_POST['otros'];
$tlf_otros=$_POST['tlf_otros'];
$exc_itbis=$_POST['exc_itbis'];
$consignacion=$_POST['consignacion'];
$desc=$_POST['desc'];
$incremento=$_POST['incremento'];
$dias_cr=$_POST['dias_cr'];
$lim_activo=$_POST['lim_activo'];
$lim_act_cant=$_POST['lim_act_cant'];
$nro_fts=$_POST['nro_fts'];
$condicion=$_POST['condicion'];
$paga_flete=$_POST['paga_flete'];
$flete_valor=$_POST['flete_valor'];
$comision=$_POST['comision'];
$inactivo=$_POST['inactivo'];
$inactivo_txt=$_POST['inactivo_txt'];
$cuenta=$_POST['cuenta'];
$ncf=$_POST['ncf'];
$vendedor=$_POST['vendedor'];
$tipo_cliente=$_POST['tipo_cliente'];
$zona=$_POST['zona'];
$lista_precio=$_POST['lista_precio'];
$activo=$_POST['activo'];
$permiso=$_POST['permiso'];
$dpto=$_POST['dpto'];
$resp=0;
if($resp==0){
    //Si no ocurrió ningún problema, la variable "resp" queda con el valor de 0 y luego se procede a insertar los datos enviados por el ajax en la BD
      $insertar="INSERT INTO clientes(codigo,nombre,direccion,telefono1,fax,email,rnc,enc_compras,tlf_enc_compras,cuenta,diascr,excento,consignacion,inactivo,comision,comercial,enc_pagos,tlf_enc_pagos,otros,tlf_otros,inactivonota,actividad, proximoa, administrador, tlf_admin, vendedor,zona,paga_flete,flete_valor,limite_act,lim_act_credito,limitefts,condicioncr,descuento,incremento,listap,activo,permisos,dpto,tipoc,fiscal) VALUES ('$codigo','$nombre_cliente','$direccion','$tlf1','$fax','$email','$rnc','$enc_compras','$tlf_enc_compras','$cuenta','$dias_cr',$exc_itbis,$consignacion,$inactivo,'$comision','$comercial','$enc_pagos','$tlf_enc_pagos','$otros','$tlf_otros','$inactivo_txt','$actividad','$proximoA','$admin','$tlf_admin','$vendedor','$zona',$paga_flete,'$flete_valor',$lim_activo,'$lim_act_cant','$nro_fts','$condicion','$desc','$incremento','$lista_precio','$activo','$permiso','$dpto','$tipo_cliente','$ncf')";

        $ejecutar = mysqli_query($con, $insertar); 
}
  
    




echo json_encode($resp);