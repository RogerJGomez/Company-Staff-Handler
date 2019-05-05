<?php
include ('../config/conex.php');

//agregar resp a las condicionales

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
$dpto=$_POST['dpto'];//Variables que recibirán los datos enviados por Ajax

$resp=0;


if($resp==0){

        $update="UPDATE clientes SET nombre='$nombre_cliente',direccion='$direccion',telefono1='$tlf1',fax='$fax',email='$email',rnc='$rnc',enc_compras='$enc_compras',tlf_enc_compras='$tlf_enc_compras',cuenta='$cuenta',diascr='$dias_cr',excento=$exc_itbis,consignacion=$consignacion,inactivo=$inactivo,comision='$comision',comercial='$comercial',enc_pagos='$enc_pagos',tlf_enc_pagos='$tlf_enc_pagos',otros='$otros',tlf_otros='$tlf_otros',inactivonota='$inactivo_txt',actividad='$actividad', proximoa='$proximoA', administrador='$admin', tlf_admin='$tlf_admin', vendedor='$vendedor',zona='$zona',paga_flete=$paga_flete,flete_valor='$flete_valor',limite_act=$lim_activo,lim_act_credito='$lim_act_cant',limitefts='$nro_fts',condicioncr='$condicion',descuento='$desc',incremento='$incremento',listap='$lista_precio',activo='$activo',permisos='$permiso',dpto='$dpto',tipoc='$tipo_cliente',fiscal='$ncf' WHERE codigo = '$codigo'";
        $ejecutar = mysqli_query($con, $update); 
        //Si la respuesta se mantiene en 0 quiere decir que no ocurrieron problemas. Se procede a ejecutar una consulta SQL donde se actualizan los datos del usuario ingresado, dandole valores a su contraseña, permisos y activo
}
  
    




echo json_encode($resp);