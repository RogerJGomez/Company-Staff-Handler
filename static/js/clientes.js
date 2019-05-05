var origen;
var tfilas;
var rowid;
var allcount;
var objetos;
var Modo;


// Total number of rows visible at a time
var rowperpage = 1;


cargar_vendedor();//Funcion que carga el select de vendedor con los datos de su tabla
$(document).ready(function(){//Botones de navegación
    getData();//SE LLAMA A LA FUNCION getData() para que traiga los datos mediante ajax y los muestre en pantalla

        $("#boton_fila_anterior").click(function(){//Funcion que devuelve el registro anterior al que se encuentra actualmente
            rowid = Number($("#txt_rowid").val());//Se determina en qué fila está parado el formulario
            allcount = Number($("#txt_allcount").val());
            rowid -= rowperpage;//Se le resta uno para que vaya al registro anterior
            if(rowid < 0){//Si la variable rowid es menor a 0, quiere decir que ya estaba parado en el primer registro, por lo tanto se le asigna el valor de 0 de nuevo a la variable.
                rowid = 0;
            }
            $("#txt_rowid").val(rowid);//A la variable global de html que almacena el valor de la fila actual, se le asigna rowid.
            getData();//Por ultimo se llama a la función getData() para que devuelva los valores en la fila especificada.
        });
        
        $("#boton_fila_primero").click(function(){//Función que devuelve el primer registro de la tabla 
            rowid = Number($("#txt_rowid").val());
            allcount = Number($("#txt_allcount").val());
            if(rowid > 0){//Si el valor de rowid es mayor a 0, quiere decir que no está parado en la primera fila de la tabla, por lo tanto se le asigna el valor de 0 para que esté parado directamente en la primera fila de la tabla
                rowid = 0;
            }
            $("#txt_rowid").val(rowid);
            getData();
        });

        $("#boton_fila_siguiente").click(function(){//Función que devuelve el siguiente registro del que estamos actualmente.
            rowid = Number($("#txt_rowid").val());
            allcount = Number($("#txt_allcount").val());
            rowid += rowperpage;//Se incrementa en 1 el valor de la variable rowid, para que se coloque en la siguiente fila de la tabla.
            if(rowid < allcount){//Si el valor de la cantidad total de filas es mayor a la fila actual, se llama a la función getData(), de no ser así, quiere decir que ya se encuentra en la ultima fila de la tabla, por lo tanto no se ejecuta la función getData()
                $("#txt_rowid").val(rowid);
                getData();
            }

        });
            $("#boton_fila_ultimo").click(function(){//Función que devuelve el ultimo registro de la tabla.
            rowid = Number($("#txt_rowid").val());
            allcount = Number($("#txt_allcount").val());
            var rep = allcount / rowperpage;
            var lastPage = Math.ceil(rep);
            //console.log(lastPage);
            if(rowid < allcount){
                rowid = allcount - rowperpage;
            }
        $("#txt_rowid").val(rowid);
        getData();

        });

    });




    
//------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
    block();
    disable_campos();
    
    

//---------------------------------------------------------------------------
    
function block(){//Función que bloquea los botones Aceptar y Cancelar hasta que se haga click en alguno de los botones de nuevo, editar, eliminar, buscar.
    $("#boton_aceptar").addClass('disabled');
    $("#boton_cancelar").addClass('disabled');
}

//---------------------------------------------------------------------------
function enable_buttons(){//Funcion para habilitar los botones de navegacion y de manejo de datos.
    $("#boton_fila_eliminar").removeClass('disabled');
    $("#boton_fila_editar").removeClass('disabled');
    $("#boton_fila_nuevo").removeClass('disabled');
    $("#boton_fila_ultimo").removeClass('disabled');
    $("#boton_fila_siguiente").removeClass('disabled');
    $("#boton_fila_anterior").removeClass('disabled');
    $("#boton_fila_primero").removeClass('disabled');
    $("#boton_fila_buscar").removeClass('disabled');
    
}
//---------------------------------------------------------------------------
$('#boton_fila_buscar').on('click',function(e){//Función que se ejecuta cuando se hace click en el botón buscar. Se habilitan los botones Aceptar y Cancelar.
    
    $("#boton_aceptar").removeClass('disabled');
    $("#boton_cancelar").removeClass('disabled');
    $("#boton_fila_eliminar").addClass('disabled');
    $("#boton_fila_editar").addClass('disabled');
    $("#boton_fila_nuevo").addClass('disabled');
    $("#boton_fila_ultimo").addClass('disabled');
    $("#boton_fila_siguiente").addClass('disabled');
    $("#boton_fila_anterior").addClass('disabled');
    $("#boton_fila_primero").addClass('disabled');
    Modo="B";//Se establece el modo de manejo de datos en "B"
});


//---------------------------------------------------------------------------
$('#boton_fila_eliminar').on('click',function(e){//Funcion que se ejecuta al hacer click en el botón de eliminar. Se habilitan los botones Aceptar y Cancelar


    $("#boton_aceptar").removeClass('disabled');
    $("#boton_cancelar").removeClass('disabled');
    $("#boton_fila_buscar").addClass('disabled');
    $("#boton_fila_editar").addClass('disabled');
    $("#boton_fila_nuevo").addClass('disabled');
    $("#boton_fila_ultimo").addClass('disabled');
    $("#boton_fila_siguiente").addClass('disabled');
    $("#boton_fila_anterior").addClass('disabled');
    $("#boton_fila_primero").addClass('disabled');
    Modo="D";//Se establece el modo de manejo de datos en "D" 
});


//---------------------------------------------------------------------------
$('#boton_fila_editar').on('click',function(e){//Funcion que se ejecuta al hacer click en el botón de editar Se habilitan los botones Aceptar y Cancelar

    $("#boton_aceptar").removeClass('disabled');
    $("#boton_cancelar").removeClass('disabled');
    $("#boton_fila_buscar").addClass('disabled');
    $("#boton_fila_eliminar").addClass('disabled');
    $("#boton_fila_nuevo").addClass('disabled');
    $("#boton_fila_ultimo").addClass('disabled');
    $("#boton_fila_siguiente").addClass('disabled');
    $("#boton_fila_anterior").addClass('disabled');
    $("#boton_fila_primero").addClass('disabled');
    Modo="E";//Se establece el modo de manejo de datos en "E"
    enable_campos();//Se llama a la función enable_campos() para habilitar los campos de texto.
});


//---------------------------------------------------------------------------
$('#boton_fila_nuevo').on('click',function(e){//Funcion que se ejecuta al hacer click en el botón de nuevo registro. Se habilitan los botones Aceptar y Cancelar

    $("#boton_aceptar").removeClass('disabled');
    $("#boton_cancelar").removeClass('disabled');
    $("#boton_fila_buscar").addClass('disabled');
    $("#boton_fila_eliminar").addClass('disabled');
    $("#boton_fila_editar").addClass('disabled');
    $("#boton_fila_ultimo").addClass('disabled');
    $("#boton_fila_siguiente").addClass('disabled');
    $("#boton_fila_anterior").addClass('disabled');
    $("#boton_fila_primero").addClass('disabled');

    vaciar_campos();//Se llama a la función vaciar_campos() para que limpie los campos de texto
    ultimo_cliente();//Se llama a la función ultima_merc() para que devuelva el un codigo
    enable_campos();//Se llama a la función enable_campos() para habilitar los campos de texto.
    cargar_vendedor();//Se llama a la función cargar_suplidor() para que haga una consulta mediante ajax y devuelva los nombres de la tabla suplidores y se carguen en el select Vendedor
    
    Modo="N";//Se establece el modo de manejo de datos en "N"
});

//---------------------------------------------------------------------------
$('#boton_fila_ultimo').on('click',function(e){

    $("#boton_aceptar").addClass('disabled');
    $("#boton_cancelar").addClass('disabled');

});

//---------------------------------------------------------------------------
$('#boton_fila_siguiente').on('click',function(e){

    $("#boton_aceptar").addClass('disabled');
    $("#boton_cancelar").addClass('disabled');

});

//---------------------------------------------------------------------------
$('#boton_fila_anterior').on('click',function(e){

    $("#boton_aceptar").addClass('disabled');
    $("#boton_cancelar").addClass('disabled');

});

//---------------------------------------------------------------------------
$('#boton_fila_primero').on('click',function(e){
    $("#boton_aceptar").addClass('disabled');
    $("#boton_cancelar").addClass('disabled');

});

//---------------------------------------------------------------------------
function disable_campos(){//Función que se encarga de deshabilitar los campos del formulario
    
        $("#nombre_cliente").prop('disabled', true);
        $("#codigo_cliente").prop('disabled', true);
        $("#comercial_cliente").prop('disabled', true);
        $("#rnc_cliente").prop('disabled', true);
        $("#actividad_cliente").prop('disabled', true);
        $("#direccion_cliente").prop('disabled', true);
        $("#proximoa_cliente").prop('disabled', true);
        $("#telefono1_cliente").prop('disabled', true);
        $("#fax_cliente").prop('disabled', true);
        $("#email_cliente").prop('disabled', true);
        $("#nombreAdmin_cliente").prop('disabled', true);
        $("#tlfAdmin_cliente").prop('disabled', true);       
        $("#nombreEncCompras_cliente").prop('disabled', true);
        $("#tlfEncCompras_cliente").prop('disabled', true);
        $("#nombreEncPagos_cliente").prop('disabled', true);
        $("#tlfEncPagos_cliente").prop('disabled', true);
        $("#nombreOtros_cliente").prop('disabled', true);
        $("#tlfOtros_cliente").prop('disabled', true);
        $("#excItbis_cliente").prop('disabled', true);
        $("#consig_cliente").prop('disabled', true);
        $("#desc_cliente").prop('disabled', true);
        $("#incremento").prop('disabled', true);
        $("#diascr_cliente").prop('disabled', true);
        $("#limActivo_cliente").prop('disabled', true);
        $("#limActivoCant_cliente").prop('disabled', true);
        $("#noFts_cliente").prop('disabled', true);
        $("#condicion_cliente").prop('disabled', true);
        $("#pagaFlete_cliente").prop('disabled', true);
        $("#pagaFleteCant_cliente").prop('disabled', true);
        $("#comision_cliente").prop('disabled', true);
        $("#inactivo_cliente").prop('disabled', true);
        $("#inactivoDesc_cliente").prop('disabled', true);
        $("#cuenta_cliente").prop('disabled', true);
        $("#ncf_cliente").prop('disabled', true);
        $("#vendedor_cliente").prop('disabled', true);
        $("#tipo_cliente").prop('disabled', true);
        $("#zona_cliente").prop('disabled', true);
        $("#listaPrecio_cliente").prop('disabled', true);
        $("#activo_cliente").prop('disabled', true);
        $("#permiso").prop('disabled', true);
        $("#dpto").prop('disabled', true);
}
//---------------------------------------------------------------------------
function enable_campos(){//Funcion que se encarga de habilitar todos los campos del formulario
    
        //$('select').material_select();

        //class="browser-default" 
        document.getElementById("cuenta_cliente").disabled = false;
        document.getElementById("ncf_cliente").disabled = false;
        document.getElementById("vendedor_cliente").disabled = false;
        document.getElementById("tipo_cliente").disabled = false; 
        $("#nombre_cliente").prop('disabled', false);
        //$("#codigo_cliente").prop('disabled', false);
        $("#comercial_cliente").prop('disabled', false);
        $("#rnc_cliente").prop('disabled', false);
        $("#actividad_cliente").prop('disabled', false);
        $("#direccion_cliente").prop('disabled', false);
        $("#proximoa_cliente").prop('disabled', false);
        $("#telefono1_cliente").prop('disabled', false);
        $("#fax_cliente").prop('disabled', false);
        $("#email_cliente").prop('disabled', false);
        $("#nombreAdmin_cliente").prop('disabled', false);
        $("#tlfAdmin_cliente").prop('disabled', false);       
        $("#nombreEncCompras_cliente").prop('disabled', false);
        $("#tlfEncCompras_cliente").prop('disabled', false);
        $("#nombreEncPagos_cliente").prop('disabled', false);
        $("#tlfEncPagos_cliente").prop('disabled', false);
        $("#nombreOtros_cliente").prop('disabled', false);
        $("#tlfOtros_cliente").prop('disabled', false);
        $("#excItbis_cliente").prop('disabled', false);
        $("#consig_cliente").prop('disabled', false);
        $("#desc_cliente").prop('disabled', false);
        $("#incremento").prop('disabled', false);
        $("#diascr_cliente").prop('disabled', false);
        $("#limActivo_cliente").prop('disabled', false);
        $("#limActivoCant_cliente").prop('disabled', false);
        $("#noFts_cliente").prop('disabled', false);
        $("#condicion_cliente").prop('disabled', false);
        $("#pagaFlete_cliente").prop('disabled', false);
        $("#pagaFleteCant_cliente").prop('disabled', false);
        $("#comision_cliente").prop('disabled', false);
        $("#inactivo_cliente").prop('disabled', false);
        $("#inactivoDesc_cliente").prop('disabled', false);
        $("#zona_cliente").prop('disabled', false);
        document.getElementById("listaPrecio_cliente").disabled = false;
        $("#activo_cliente").prop('disabled', false);
        $("#permiso").prop('disabled', false);
        $("#dpto").prop('disabled', false);
}

//---------------------------------------------------------------------------
function vaciar_campos(){//Función que vacía todos los campos del formulario
    
        $("#nombre_cliente").val('');
        $("#codigo_cliente").val('');
        $("#comercial_cliente").val('');
        $("#rnc_cliente").val('');
        $("#actividad_cliente").val('');
        $("#direccion_cliente").val('');
        $("#proximoa_cliente").val('');
        $("#telefono1_cliente").val('');
        $("#fax_cliente").val('');
        $("#email_cliente").val('');
        $("#nombreAdmin_cliente").val('');
        $("#tlfAdmin_cliente").val('');     
        $("#nombreEncCompras_cliente").val('');
        $("#tlfEncCompras_cliente").val('');
        $("#nombreEncPagos_cliente").val('');
        $("#tlfEncPagos_cliente").val('');
        $("#nombreOtros_cliente").val('');
        $("#tlfOtros_cliente").val('');
        $("#desc_cliente").val('');
        $("#incremento").val('');
        $("#diascr_cliente").val('');
        $("#limActivoCant_cliente").val('');
        $("#noFts_cliente").val('');
        $("#condicion_cliente").val('');
        $("#pagaFleteCant_cliente").val('');
        $("#comision_cliente").val('');
        $("#inactivoDesc_cliente").val('');
        $("#cuenta_cliente").val('');
        $("#zona_cliente").val('');
        $("#permiso").val('');
        $("#dpto").val('');
        document.getElementById("excItbis_cliente").checked=false;
        document.getElementById("consig_cliente").checked=false;
        document.getElementById("limActivo_cliente").checked=false;
        document.getElementById("pagaFlete_cliente").checked=false;
        document.getElementById("inactivo_cliente").checked=false;
        document.getElementById("activo_cliente").checked=false;
        document.getElementById('tipo_cliente').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('ncf_cliente').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('vendedor_cliente').getElementsByTagName('option')[0].selected = 'selected';
}

//---------------------------------------------------------------------------
$('#boton_cancelar').on('click',function(e){//Función que se ejecuta al hacer click en el botón Cancelar

        if(Modo=="N"){//Si el modo de manejo de datos es "N" de Nuevo regitro, se ejecuta la función que te devuelve el primer registro de la tabla

            rowid = Number($("#txt_rowid").val());
            allcount = Number($("#txt_allcount").val());
            if(rowid > 0){
                rowid = 0;
            }
            $("#txt_rowid").val(rowid);
            getData();
        }
        disable_campos();//Se llama a la función para deshabilitar los campos
        block();//Se llama a la función para deshabilitar los botones Aceptar y Cancelar.
        enable_buttons();// Y por último se habilitan todos los botones de manejo de datos y navegación.
        
});
//---------------------------------------------------------------------------


function cargar_vendedor(){
        
    $.ajax({
        url: "opciones/cargar_vendedor.php",
        dataType: 'text',
        success: function (resproducto) {

        var objproducto = JSON.parse(resproducto);
        var opciones;         
               opciones='<option value="">Seleccione una opción</option>'; 

    $.each(objproducto, function (key, value) {
        opciones=opciones+'<option value="'+value.codigo+'">'+value.nombre+'</option>';
    });
    
    
    $('#vendedor_cliente').html(opciones);
    $('#vendedor_cliente').trigger('contentChanged');

        }
        ,error: function (resproducto) {
            alert("Error");
        }
    });
    
    
}


//---------------------------------------------------------------------------
$('#boton_aceptar').on('click',function(e){//Funcion que se ejecuta al hacer click en el boton Aceptar

    nombre_cliente = $("#nombre_cliente").val(); 
    codigo = $("#codigo_cliente").val();
    comercial = $("#comercial_cliente").val();
    rnc = $("#rnc_cliente").val();
    actividad=$("#actividad_cliente").val();
    direccion=$("#direccion_cliente").val();
    proximoA=$("#proximoa_cliente").val();
    tlf1=$("#telefono1_cliente").val();
    fax=$("#fax_cliente").val();
    email=$("#email_cliente").val();
    admin=$("#nombreAdmin_cliente").val();
    tlf_admin=$("#tlfAdmin_cliente").val();       
    enc_compras=$("#nombreEncCompras_cliente").val();
    tlf_enc_compras=$("#tlfEncCompras_cliente").val();
    enc_pagos=$("#nombreEncPagos_cliente").val();
    tlf_enc_pagos=$("#tlfEncPagos_cliente").val();
    otros=$("#nombreOtros_cliente").val();
    tlf_otros=$("#tlfOtros_cliente").val();
    exc_itbis1=$("#excItbis_cliente").is(":checked");
    
    if(exc_itbis1==true){
        exc_itbis=1;
    }
    else{
        exc_itbis=0;
    }
    
    consignacion1=$("#consig_cliente").is(":checked");
    if(consignacion1==true){
        consignacion=1;
    }
    else{
        consignacion=0;
    }
    incremento=$("#incremento").val();
    desc=$("#desc_cliente").val();

    dias_cr=$("#diascr_cliente").val();
    lim_activo1=$("#limActivo_cliente").is(":checked");
    
    if(lim_activo1==true){
        lim_activo=1;
    }
    else{
        lim_activo=0;
    }
    
    lim_act_cant=$("#limActivoCant_cliente").val();
    nro_fts=$("#noFts_cliente").val();
    condicion=$("#condicion_cliente").val();
    paga_flete1=$("#pagaFlete_cliente").is(":checked");
    if(paga_flete1==true){
        paga_flete=1;
    }
    else{
        paga_flete=0;
    }
    flete_valor=$("#pagaFleteCant_cliente").val();
    comision=$("#comision_cliente").val();
    inactivo1=$("#inactivo_cliente").is(":checked");
    
    if(inactivo1==true){
        inactivo=1;
    }
    else{
        inactivo=0;
    }
    
    inactivo_txt=$("#inactivoDesc_cliente").val();
    cuenta=$("#cuenta_cliente").val();
    ncf=$("#ncf_cliente").val();
    vendedor=$("#vendedor_cliente").val();
    tipo_cliente=$("#tipo_cliente").val();
    zona=$("#zona_cliente").val();
    lista_precio=$("#listaPrecio_cliente").val();
    activo1=$("#activo_cliente").is(":checked");
    
    if(activo1==true){
        activo=1;
    }
    else{
        activo=0;
    }
    permiso=$("#permiso").val();
    dpto=$("#dpto").val();

//Dependiendo si el Modo es "N" de Nuevo registro ó  "E" de Editar, se ejecuta un ajax distinto.
    if(Modo=="N"){//Si el modo es igual a N se procede a llamar a la función ajax que registra datos en la BD
           
        if(nombre_cliente!=""){
            $.ajax({
                    url: "opciones/save_cliente.php", //ruta del php a ejecutar.
                    type: "POST",
                    dataType: 'text',
                    data:{'nombre_cliente':nombre_cliente,'codigo':codigo,'comercial':comercial,'rnc':rnc,'actividad':actividad,'direccion':direccion,'proximoA':proximoA,'tlf1':tlf1,'fax':fax,'email':email,'admin':admin,'tlf_admin':tlf_admin,'enc_compras':enc_compras,'tlf_enc_compras':tlf_enc_compras,'enc_pagos':enc_pagos,'tlf_enc_pagos':tlf_enc_pagos,'otros':otros,'tlf_otros':tlf_otros,'exc_itbis':exc_itbis,'consignacion':consignacion,'desc':desc,'dias_cr':dias_cr,'lim_activo':lim_activo,'lim_act_cant':lim_act_cant,'nro_fts':nro_fts,'condicion':condicion,'paga_flete':paga_flete,'flete_valor':flete_valor,'comision':comision,'inactivo':inactivo,'cuenta':cuenta,'ncf':ncf,'vendedor':vendedor, 'tipo_cliente':tipo_cliente, 'zona':zona, 'lista_precio':lista_precio,'activo':activo,'permiso':permiso,'dpto':dpto,'incremento':incremento},
                    success: function (guardar) {
                            
                            mensaje="<div class='alert alert-success col-md-12' role='alert' id='error'>Datos ingresados correctamente</div>";
                            $('#exito1').html(mensaje).show(200).delay(2500).hide(200);        
                            disable_campos();//Se deshabilitan los campos del formulario.
                                    block();//Se deshabilitan los botones Aceptar y Cancelar.
                                    enable_buttons();//Se habilitan los botones de navegación y manejo de datos-.

                    }
    
                });
        }
        else{
            mensaje="<div class='alert alert-danger col-md-12' role='alert' id='error'>Debe llenar al menos el campo nombre</div>";
            $('#error1').html(mensaje).show(200).delay(2500).hide(200);
        }
    }

    if(Modo=="E"){//Si el modo es igual a "E", se hace practicamente lo mismo que arriba, solo que cambia la consulta SQL.
        $.ajax({
                url: "opciones/editar_cliente.php", 
                type: "POST",
                dataType: 'text',
                data:{'nombre_cliente':nombre_cliente,'codigo':codigo,'comercial':comercial,'rnc':rnc,'actividad':actividad,'direccion':direccion,'proximoA':proximoA,'tlf1':tlf1,'fax':fax,'email':email,'admin':admin,'tlf_admin':tlf_admin,'enc_compras':enc_compras,'tlf_enc_compras':tlf_enc_compras,'enc_pagos':enc_pagos,'tlf_enc_pagos':tlf_enc_pagos,'otros':otros,'tlf_otros':tlf_otros,'exc_itbis':exc_itbis,'consignacion':consignacion,'desc':desc,'dias_cr':dias_cr,'lim_activo':lim_activo,'lim_act_cant':lim_act_cant,'nro_fts':nro_fts,'condicion':condicion,'paga_flete':paga_flete,'flete_valor':flete_valor,'comision':comision,'inactivo':inactivo,'cuenta':cuenta,'ncf':ncf,'vendedor':vendedor, 'tipo_cliente':tipo_cliente, 'zona':zona, 'lista_precio':lista_precio,'activo':activo,'permiso':permiso,'dpto':dpto,'inactivo_txt':inactivo_txt, 'incremento':incremento},
                success: function (guardar) {
                        mensaje="<div class='alert alert-success col-md-12' role='alert' id='error'>Datos actualizados correctamente</div>";
                        $('#exito1').html(mensaje).show(200).delay(2500).hide(200);  
                        disable_campos();
                                block();
                                enable_buttons();

                   

                }
  
            });
            
    }
    
    

})
//---------------------------------------------------------------------------




//FuncionesEliminar

function borrarcliente(){//Funcion que elimina un registro de la tabla proveedor
        
    codigo=$("#codigo_cliente").val();//Se obtiene el valor del campo codigo para luego enviarlo por ajax.
    
            $.ajax({
                url:'opciones/borrar_cliente.php',//Ruta del archivo php que se va a ejecutar.
                type:'post',//Forma de envío de datos POST
                data:{'codigo':codigo},//Por aquí se envían los datos al archivo php, siendo 'codigo' la variable declarada arriba y codigo la variable que recibirá los datos en el php
                dataType:'text',
                success:function(borrarcli){//Luego de que se ejecute la consulta, si no ocurrió algún error, se procede a recibir la respuesta del php
                 
                 var resp = JSON.parse(borrarcli);//Se almacena en una variable llamada resp un objeto convertido a JSON de la respuesta obtenida
                 
                if(resp==1){//En este caso, la respuesta es solo un entero. Si el entero es igual a 1, quiere decir que la consulta se ejecutó con éxito.
                   
                    //Se ejectua el codigo que te devuelve al primer registro de la tabla 
                    rowid = Number($("#txt_rowid").val());
                    allcount = Number($("#txt_allcount").val());
                    if(rowid > 0){
                        rowid = 0;
                    }
                    $("#txt_rowid").val(rowid);
                    getData();
                    //Se muestra un mensaje en pantalla
                    mensaje="<div class='alert alert-success col-md-12' role='alert' id='error'>Eliminado exitosamente</div>";
                    $('#exito1').html(mensaje).show(200).delay(2500).hide(200);
                    disable_campos();
                    block();
                    enable_buttons();
                   
                    
                }else if(resp==2){//Si la variable obtenida es igual a 2, quiere decir que hubo algun error en la consulta, por lo tanto se devuelve un mensaje de error.
                    mensaje="<div class='alert alert-danger col-md-12' role='alert' id='error'>Error al momento de eliminar</div>";
                    $('#error1').html(mensaje).show(200).delay(2500).hide(200);
                }
            }
        ,error: function (borrarcli) {//Si ocurre algún error al momento de enviarse los datos por ajax se muestra un mensaje en pantalla.
            alert("Error");
        }            
            
        });
 
    }


//LLamadoFuncionesEliminar
$("#boton_fila_eliminar").on('click', function(e){ //Función que se ejecuta al hacer click en el botón eliminar.

    Modo="D";//Se establece el modo en "D"
            //initialize all modals           
            $('#modal1').modal('show');

        
        $("#borrar_cli").on('click', function(e){ //Luego de hacer click en botón del modal eliminar
        
          $("#boton_aceptar").addClass('disabled');//Se deshabilita el botón Aceptar para evitar errores.
          borrarcliente();// Se llama a la función que borra el registro
        
        });
    
    
});




$("#cancel_del").on('click', function(e){ 
        
        disable_campos();
        block();
        enable_buttons();

});





//------------------------------------------------------------------------------    
//Llenar campos desde que se abre el formulario
function getData(){//Funcion que carga todos los campos del formulario
    rowid=$("#txt_rowid").val();//Se obtiene el valor de la fila actual
    allcount=$("#txt_allcount").val();//Se obtiene el valor de la cantidad total
        
        $.ajax({
        url: "opciones/rowcount_cli.php",//Ruta del php que se ejecutará.
        dataType:'text',
        success: function (totalfila) {

                var objtfilas=JSON.parse(totalfila);//Respuesta obtenida del php
                
                var dataLen=objtfilas.length;

            for(var i=0; i<dataLen; i++){//Ciclo for que recorre todas la filas
                if(i === 0){
                    allcount = objtfilas[i]['allcount'];
                    $("#txt_allcount").val(allcount);
                }
            }
        }
            
        });

        $.ajax({
            url:'opciones/getinfo_cli.php',//Ruta del php a ejecutar
            type:'post',
            data:{'rowid':rowid,'rowperpage':rowperpage},// Se envían por ajax la cantidad total de filas y la fila actual.
            dataType:'text',
            success:function(response){
                
            objetos=JSON.parse(response);// La respuesta es un objeto JSON
                //Se le asigna a cada campo del formulario el valor de cada campo de la fila.
            
                $("#codigo_cliente").val(objetos[0].codigo);
                $('#nombre_cliente').val(objetos[0].nombre);
                $("#comercial_cliente").val(objetos[0].comercial);
                $("#rnc_cliente").val(objetos[0].rnc);
                $("#actividad_cliente").val(objetos[0].actividad);
                $("#direccion_cliente").val(objetos[0].direccion);
                $("#proximoa_cliente").val(objetos[0].proximoa);
                $("#telefono1_cliente").val(objetos[0].telefono1);
                $("#fax_cliente").val(objetos[0].fax);
                $("#email_cliente").val(objetos[0].email);
                $("#nombreAdmin_cliente").val(objetos[0].administrador);
                $("#tlfAdmin_cliente").val(objetos[0].tlf_admin);     
                $("#nombreEncCompras_cliente").val(objetos[0].enc_compras);
                $("#tlfEncCompras_cliente").val(objetos[0].tlf_enc_compras);
                $("#nombreEncPagos_cliente").val(objetos[0].enc_pagos);
                $("#tlfEncPagos_cliente").val(objetos[0].tlf_enc_pagos);
                $("#nombreOtros_cliente").val(objetos[0].otros);
                $("#tlfOtros_cliente").val(objetos[0].tlf_otros);
                $("#desc_cliente").val(objetos[0].descuento);
                $("#incremento").val(objetos[0].incremento);
                $("#diascr_cliente").val(objetos[0].diascr);
                $("#limActivoCant_cliente").val(objetos[0].lim_act_credito);
                $("#noFts_cliente").val(objetos[0].limitefts);
                $("#condicion_cliente").val(objetos[0].condicioncr);
                $("#pagaFleteCant_cliente").val(objetos[0].flete_valor);
                $("#comision_cliente").val(objetos[0].comision);
                $("#inactivoDesc_cliente").val(objetos[0].inactivonota);
                $("#cuenta_cliente").val(objetos[0].cuenta);
                $("#zona_cliente").val(objetos[0].zona);
                $("#permiso").val(objetos[0].permisos);
                $("#dpto").val(objetos[0].dpto);
                activo=objetos[0].activo;
                if(activo==1){//Se verifica si le valor de un bool es 1 o 0, eso determinará si el checkbox estará en modo Checked o no.
                    document.getElementById("activo_cliente").checked=true;
                }
                else{
                    document.getElementById("activo_cliente").checked=false;
                }
                itbis=objetos[0].excento;
                if(itbis==1){
                    document.getElementById("excItbis_cliente").checked=true;
                }
                else{
                    document.getElementById("excItbis_cliente").checked=false;
                }
                consignacion=objetos[0].consignacion;
                if(consignacion==1){
                    document.getElementById("consig_cliente").checked=true;
                }
                else{
                    document.getElementById("consig_cliente").checked=false;
                }
                inactivo=objetos[0].inactivo;
                if(inactivo==1){
                    document.getElementById("inactivo_cliente").checked=true;
                }
                else{
                    document.getElementById("inactivo_cliente").checked=false;
                }
                lim_activo=objetos[0].limite_act;
                if(lim_activo==1){
                    document.getElementById("limActivo_cliente").checked=true;
                }
                else{
                    document.getElementById("limActivo_cliente").checked=false;
                }
                paga_flete=objetos[0].paga_flete;
                if(paga_flete==1){
                    document.getElementById("pagaFlete_cliente").checked=true;
                }
                else{
                    document.getElementById("pagaFlete_cliente").checked=false;
                }
                
                
//-----------------------SELECTS-----------------------------------------------
                //Para llenar los selects con el valor que tiene la fila se necesita recorrer el select del html y verificar el valor del mismo con el valor de la fila, si el valor es el mismo, se asgina como seleccionado ese valor.
            var len_cliente = document.getElementById('tipo_cliente').length;
            var tipo_cli=document.getElementById('tipo_cliente');
            var len_ncf = document.getElementById('ncf_cliente').length;
            var ncf2=document.getElementById('ncf_cliente');
            var len_vend = document.getElementById('vendedor_cliente').length;
            var vend_cli=document.getElementById('vendedor_cliente');
            var pos_tipo=0;
            var pos_ncf=0;
            var pos_vend=0;
            
            for(var i=0; i<len_cliente;i++){
                if(document.getElementById('tipo_cliente').getElementsByTagName('option')[i].value==objetos[0].tipoc){
                    document.getElementById('tipo_cliente').getElementsByTagName('option')[i].selected = 'selected';
                    pos_tipo=i;
                }
                
            }
            

            if(pos_tipo==0){
                    document.getElementById('tipo_cliente').getElementsByTagName('option')[0].selected = 'selected';
            }

            for(var i=0; i<len_ncf;i++){
                if(document.getElementById('ncf_cliente').getElementsByTagName('option')[i].value==objetos[0].fiscal){
                    document.getElementById('ncf_cliente').getElementsByTagName('option')[i].selected = 'selected';
                    pos_ncf=i;
                }
            }
            
            if(pos_ncf==0){
                document.getElementById('ncf_cliente').getElementsByTagName('option')[0].selected = 'selected';
            }
            
            
            for(var i=0; i<len_vend;i++){
                if(document.getElementById('vendedor_cliente').getElementsByTagName('option')[i].value==objetos[0].vendedor){
                    document.getElementById('vendedor_cliente').getElementsByTagName('option')[i].selected = 'selected';
                    pos_vend=i;
                }
            }
            
            if(pos_vend==0){
                document.getElementById('vendedor_cliente').getElementsByTagName('option')[0].selected = 'selected';
            }
                
        }
    });

}

//-----------------------------------------------------------------------------

function buscar(){//Función que busca un registro en específico (Funciona igual que el getData() por si tienes dudas)
    
        codigo=$("#buscar_cli").val();//Se obtiene el codigo del campo de texto del modal buscar.
        
        
//Luego se hacen las llamadas a Ajax y se llenan los campos del formulario.        
        $.ajax({
            url: "opciones/cargar_cliente.php",
            type: "POST",
            dataType: 'text',
            data: { 'codigo': codigo },
            success: function (resproducto) {
    
            var objetos = JSON.parse(resproducto);
            var len=objetos.length;
            if(len>0){

                $("#codigo_cliente").val(objetos[0].codigo);
                $('#nombre_cliente').val(objetos[0].nombre);
                $("#comercial_cliente").val(objetos[0].comercial);
                $("#rnc_cliente").val(objetos[0].rnc);
                $("#actividad_cliente").val(objetos[0].actividad);
                $("#direccion_cliente").val(objetos[0].direccion);
                $("#proximoa_cliente").val(objetos[0].proximoa);
                $("#telefono1_cliente").val(objetos[0].telefono1);
                $("#fax_cliente").val(objetos[0].fax);
                $("#email_cliente").val(objetos[0].email);
                $("#nombreAdmin_cliente").val(objetos[0].administrador);
                $("#tlfAdmin_cliente").val(objetos[0].tlf_admin);     
                $("#nombreEncCompras_cliente").val(objetos[0].enc_compras);
                $("#tlfEncCompras_cliente").val(objetos[0].tlf_enc_compras);
                $("#nombreEncPagos_cliente").val(objetos[0].enc_pagos);
                $("#tlfEncPagos_cliente").val(objetos[0].tlf_enc_pagos);
                $("#nombreOtros_cliente").val(objetos[0].otros);
                $("#tlfOtros_cliente").val(objetos[0].tlf_otros);
                $("#desc_cliente").val(objetos[0].descuento);
                $("#incremento").val(objetos[0].incremento);
                $("#diascr_cliente").val(objetos[0].diascr);
                $("#limActivoCant_cliente").val(objetos[0].lim_act_credito);
                $("#noFts_cliente").val(objetos[0].limitefts);
                $("#condicion_cliente").val(objetos[0].condicioncr);
                $("#pagaFleteCant_cliente").val(objetos[0].flete_valor);
                $("#comision_cliente").val(objetos[0].comision);
                $("#inactivoDesc_cliente").val(objetos[0].inactivonota);
                $("#cuenta_cliente").val(objetos[0].cuenta);
                $("#zona_cliente").val(objetos[0].zona);
                $("#permiso").val(objetos[0].permisos);
                $("#dpto").val(objetos[0].dpto);
                activo=objetos[0].activo;
                if(activo==1){
                    document.getElementById("activo_cliente").checked=true;
                }
                else{
                    document.getElementById("activo_cliente").checked=false;
                }
                itbis=objetos[0].excento;
                if(itbis==1){
                    document.getElementById("excItbis_cliente").checked=true;
                }
                else{
                    document.getElementById("excItbis_cliente").checked=false;
                }
                consignacion=objetos[0].consignacion;
                if(consignacion==1){
                    document.getElementById("consig_cliente").checked=true;
                }
                else{
                    document.getElementById("consig_cliente").checked=false;
                }
                inactivo=objetos[0].inactivo;
                if(inactivo==1){
                    document.getElementById("inactivo_cliente").checked=true;
                }
                else{
                    document.getElementById("inactivo_cliente").checked=false;
                }
                lim_activo=objetos[0].limite_act;
                if(lim_activo==1){
                    document.getElementById("limActivo_cliente").checked=true;
                }
                else{
                    document.getElementById("limActivo_cliente").checked=false;
                }
                paga_flete=objetos[0].paga_flete;
                if(paga_flete==1){
                    document.getElementById("pagaFlete_cliente").checked=true;
                }
                else{
                    document.getElementById("pagaFlete_cliente").checked=false;
                }
                
                
                
//-----------------------SELECTS-----------------------------------------------
    

            var len_cliente = document.getElementById('tipo_cliente').length;
            var tipo_cli=document.getElementById('tipo_cliente');
            var len_ncf = document.getElementById('ncf_cliente').length;
            var ncf2=document.getElementById('ncf_cliente');
            var len_vend = document.getElementById('vendedor_cliente').length;
            var vend_cli=document.getElementById('vendedor_cliente');
            var pos_tipo=0;
            var pos_ncf=0;
            var pos_vend=0;
            
            for(var i=0; i<len_cliente;i++){
                if(document.getElementById('tipo_cliente').getElementsByTagName('option')[i].value==objetos[0].tipoc){
                    document.getElementById('tipo_cliente').getElementsByTagName('option')[i].selected = 'selected';
                    pos_tipo=i;
                }
                
            }
            

            if(pos_tipo==0){
                    document.getElementById('tipo_cliente').getElementsByTagName('option')[0].selected = 'selected';
            }

            for(var i=0; i<len_ncf;i++){
                if(document.getElementById('ncf_cliente').getElementsByTagName('option')[i].value==objetos[0].fiscal){
                    document.getElementById('ncf_cliente').getElementsByTagName('option')[i].selected = 'selected';
                    pos_ncf=i;
                }
            }
            
            if(pos_ncf==0){
                document.getElementById('ncf_cliente').getElementsByTagName('option')[0].selected = 'selected';
            }
            
            
            for(var i=0; i<len_vend;i++){
                if(document.getElementById('vendedor_cliente').getElementsByTagName('option')[i].value==objetos[0].vendedor){
                    document.getElementById('vendedor_cliente').getElementsByTagName('option')[i].selected = 'selected';
                    pos_vend=i;
                }
            }
            
            if(pos_vend==0){
                document.getElementById('vendedor_cliente').getElementsByTagName('option')[0].selected = 'selected';
            }

                
                codigo1=$("#buscar_cli").val('');
                disable_campos();
                block();
                enable_buttons();
                
                
            }
            else{
                alert("CLIENTE NO ENCONTRADO, POR FAVOR, VERIFIQUE EL CODIGO");
            }
            
            
            }
            ,error: function (resproducto) {
                alert("Error");
            }
        });
    
}


//LLamadoFuncionesEliminar
$("#boton_fila_buscar").on('click', function(e){ 

    Modo="B";
            //initialize all modals           
            $('#buscar').modal('show');

    
    
});



$("#aceptar_buscar").on('click', function(e){ 

  //alert("BUSCAR PROXIMAMENTE...");
  $("#aceptar_buscar").addClass('disabled');
  buscar();
  $('#buscar_cli').val('');
  

});


$("#cancelar_buscar").on('click', function(e){ 
        
        disable_campos();
        block();
        enable_buttons();
        $('#suggestions').fadeOut(1000);

});


//---------------------------------------------------------------------------
function ultimo_cliente(){ //Funcion que devuelve un codigo nuevo al momento de ingresar un registro al sistema
            
            
        $.ajax({
            url: "opciones/ultimo_cliente.php",//ruta del php a ejecutar
            type: "POST",
            dataType: 'text',
            success: function (resproducto) {
    
            var objetos = JSON.parse(resproducto);//Objeto JSON de respuesta.
            var codigo="CC-";//variable que almacenará el nuevo codigo.
            var codigo1="";//variable que almacena el ultimo codigo de la tabla
            var pos=parseInt(objetos[0].codigo);//Se convierte a entero el ultimo codigo de la tabla.
            codigo1=codigo1+pos;//Se le asigna a la variable codigo1 el valor de pos
            //console.log(codigo1.length);
            if(codigo1.length==1){//luego se verifica la logintud del codigo para determinar cuantos ceros tendrá el nuevo codigo.
                codigo=codigo+"00000";
            }
            if(codigo1.length==2){
                codigo=codigo+"0000";
            }
            if(codigo1.length==3){
                codigo=codigo+"000";
            }
            if(codigo1.length==4){
                codigo=codigo+"00";
            }
            if(codigo1.length==5){
                codigo=codigo+"0";
            }
            //console.log(objetos[0].codigo);
            pos = pos +1;//Luego de saber la longitud del codigo, se incrementa en uno y se concatena con la variable codigo.
            codigo=codigo+pos;
            //console.log(codigo);
            $("#codigo_cliente").val(codigo);//Y por ultimo se le asigna al campo de texto codigo_mercancia el codigo nuevo.

            }
            ,error: function (resproducto) {
                alert("Error");
            }
        });


}



$(document).ready(function() {
    $('#buscar_cli').on('keyup', function() {
        var key = $(this).val();		
        var dataString = 'key='+key;
	$.ajax({
            type: "POST",
            url: "opciones/busqueda_cli.php",
            data: dataString,
            success: function(data) {
                //Escribimos las sugerencias que nos manda la consulta
                $('#suggestions').fadeIn(1000).html(data);
                //Al hacer click en alguna de las sugerencias
                $('.suggest-element').on('click', function(){
                        //Obtenemos la id unica de la sugerencia pulsada
                        var id = $(this).attr('id');
                        //Editamos el valor del input con data de la sugerencia pulsada
                        $('#buscar_cli').val($('#'+id).attr('data'));
                        //Hacemos desaparecer el resto de sugerencias
                        $('#suggestions').fadeOut(1000);
                        return false;
                });
            }
        });
    });
}); 