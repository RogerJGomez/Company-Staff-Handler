var origen;
var tfilas;//CONTADOR DE FILAS DE LA TABLA QUE SE QUIERE RECORRER
var rowid;//TOTAL DE FILAS CONTADAS
var allcount; //ARREGLO DE OBJETOS QUE DEVUELVE AJAX 
var objetos;//VARIABLE QUE DETERMINA EL MODO EN QUE SE EJECUTARÁ UNA CONSULTA, YA SEA INSERTAR, BORRAR, MODIFICAR Ó BUSCAR
var Modo;


// Total number of rows visible at a time
var rowperpage = 1;
//Funcion para los botones Registro Clientes






//Funciones de cada botón de movimiento, ya sea siguiente, anterior, último ó primero
$(document).ready(function(){
    getData();//SE LLAMA A LA FUNCION getData() para que traiga los datos mediante ajax y los muestre en pantalla

        $("#boton_fila_anterior").click(function(){//Funcion que devuelve el registro anterior al que se encuentra actualmente
            rowid = Number($("#txt_rowid").val());//Se determina en qué fila está parado el formulario 
            allcount = Number($("#txt_allcount").val());
            rowid -= rowperpage;//Se le resta uno para que vaya al registro anterior
            if(rowid < 0){//Si la variable rowid es menor a 0, quiere decir que ya estaba parado en el primer registro, por lo tanto se le asigna el valor de 0 de nuevo a la variable.
                rowid = 0;
            }
            $("#txt_rowid").val(rowid); //A la variable global de html que almacena el valor de la fila actual, se le asigna rowid.
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



  
    $("#regis-form").hide();  //Nombre de variable del div del formulario de login

      
    $(document).ready(function() {
        jQuery.fn.outerHTML = function() {
        return (this[0]) ? this[0].outerHTML : '';  
    };  
         
    }); 
    
//------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
    block();
    disable_campos();
    
    

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
      
      


//funcion para validar que solo se acepten numeros
      $(document).ready(function() {
        $("#incre_cliente, #desc_cliente, #diascr_cliente, #limActivoCant_cliente, #noFts_cliente,#pagaFleteCant_cliente,#comision_cliente").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

    


   function checkSpcialChar(event){//Funcion para NO permitir caracteres especiales, afectan en la DB  
            if((event.key == "ó")||(event.key == "á")||(event.key == "é")||(event.key == "í")||(event.key == "ú")||(event.key == "à")||(event.key == "è")||(event.key == "ì")||(event.key == "ò")||(event.key == "ù")||(event.key == "ñ")||(event.key == "Ñ")){
               event.returnValue = false;
               return;
            }//Se verifican los caracteres especiales con "event.key" y si todas las comparaciones dieron falso, se retorna "true", "false" en caso contrario
            event.returnValue = true;
    }
//------------------------------------------------------------------------------------------------------------------------------------------------------------    

    
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


    ultimo_socio();//Se llama a la función ultima_merc() para que devuelva el un codigo nuevo de socios.
    vaciar_campos();//Se llama a la función vaciar_campos() para que limpie los campos de texto
    enable_campos();//Se llama a la función enable_campos() para habilitar los campos de texto.
    
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
    
        $("#nombre_socio").prop('disabled', true);
        $("#codigo_socio").prop('disabled', true);
        $("#cod_guagua").prop('disabled', true);
        $("#telefono").prop('disabled', true);
        $("#doc_id").prop('disabled', true);

}
//---------------------------------------------------------------------------
function enable_campos(){//Función que se encarga de habilitar los campos del formulario
    
        $("#nombre_socio").prop('disabled', false);
        //$("#codigo_socio").prop('disabled', true);
        $("#cod_guagua").prop('disabled', false);
        $("#telefono").prop('disabled', false);
        $("#doc_id").prop('disabled', false);
}

//---------------------------------------------------------------------------
function vaciar_campos(){//Función que vacía todos los campos del formulario
    
        $("#nombre_socio").val('');
        $("#cod_guagua").val('');
        $("#telefono").val('');
        $("#doc_id").val('');
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


//---------------------------------------------------------------------------
$('#boton_aceptar').on('click',function(e){

    if(Modo=="N"){
        
        codigo=$("#codigo_socio").val();
        nombre=$("#nombre_socio").val();
        cod_guagua=$("#cod_guagua").val();
        tlf=$("#telefono").val();
        doc_id=$("#doc_id").val();
        if(nombre==""||cod_guagua==""||tlf==""||doc_id==""){
            mensaje="<div class='alert alert-danger col-md-12' role='alert' id='error'>Debe llenar todos los campos</div>";
            $('#error1').html(mensaje).show(200).delay(2500).hide(200);
            console.log(mensaje);
        }
        else{
        $.ajax({
                url: "opciones/socios/save_socio.php", 
                type: "POST",
                dataType: 'text',
                data:{'codigo':codigo,'nombre':nombre,'cod_guagua':cod_guagua,'tlf':tlf,'doc_id':doc_id},
                success: function (guardar) {
                    
                    var resp = JSON.parse(guardar);

                    var mensaje="";
                    if(resp==3){
                        mensaje="<div class='alert alert-danger col-md-12' role='alert' id='error'>Error al ingresar los datos(56000021)</div>";

                        $('#error1').html(mensaje).show(200).delay(2500).hide(200);
                    }

                    else{
                        mensaje="<div class='alert alert-success col-md-12' role='alert' id='exito'>Datos ingresados correctamente</div>";

                        $('#exito1').html(mensaje).show(200).delay(2500).hide(200);
                                disable_campos();
                                block();
                                enable_buttons();

                    }
                   

                }
  
            });
        }
    }
    
    
    if(Modo=="E"){
        
        codigo=$("#codigo_socio").val();
        nombre=$("#nombre_socio").val();
        cod_guagua=$("#cod_guagua").val();
        tlf=$("#telefono").val();
        doc_id=$("#doc_id").val();

        $.ajax({
                url: "opciones/socios/edit_socio.php", 
                type: "POST",
                dataType: 'text',
                data:{'codigo':codigo,'nombre':nombre,'cod_guagua':cod_guagua,'tlf':tlf,'doc_id':doc_id},
                success: function (guardar) {
                    
                    var resp = JSON.parse(guardar);

                    if(resp==0){
                        mensaje="<div class='alert alert-success col-md-12' role='alert' id='exito'>Datos editados exitosamente</div>";

                        $('#exito1').html(mensaje).show(200).delay(2500).hide(200);
                          disable_campos();
                                block();
                                enable_buttons();
                    }

                    else{

                        alert("¡ERROR!");

                    }
                   

                }
  
            });
            
    }
    
    

})
//---------------------------------------------------------------------------




//FuncionesEliminar

function borrarsocio(){//Funcion que elimina un registro de la tabla
        
    codigo=$("#codigo_socio").val()//Se obtiene el valor del campo codigo para luego enviarlo por ajax.
    
            $.ajax({
                url:'opciones/socios/borrar_socio.php',//Ruta del archivo php que se va a ejecutar.
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
                    mensaje="<div class='alert alert-success col-md-12' role='alert' id='exito'>Se ha eliminado el socio especificado</div>";

                    $('#exito1').html(mensaje).show(200).delay(2500).hide(200);
                    disable_campos();
                    block();
                    enable_buttons();
                   
                    
                }else if(resp==2){//Si la variable obtenida es igual a 2, quiere decir que hubo algun error en la consulta, por lo tanto se devuelve un mensaje de error.
                    mensaje="<div class='alert alert-danger col-md-12' role='alert' id='exito'>Error al eliminar</div>";

                    $('#exito1').html(mensaje).show(200).delay(2500).hide(200);
                    
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
        
        $("#borrar_socio").on('click', function(e){ //Luego de hacer click en botón del modal eliminar
        
          $("#boton_aceptar").addClass('disabled');//Se deshabilita el botón Aceptar para evitar errores.
          borrarsocio();// Se llama a la función que borra el registro
        
        });
    
    
});




$("#cancel_socio").on('click', function(e){ 
        
        disable_campos();
        block();
        enable_buttons();

});





//------------------------------------------------------------------------------    
//Llenar campos desde que se abre el formulario
function getData(){//Funcion que carga todos los campos del formulario
    rowid=$("#txt_rowid").val();//Se obtiene el valor de la fila actual
    allcount=$("#txt_allcount").val();//Se obtiene el valor de la cantidad total de filas 
        
        $.ajax({
        url: "opciones/socios/rowcount_socio.php",//Ruta del php que se ejecutará.
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
            url:'opciones/socios/getinfo_socio.php',//Ruta del php a ejecutar
            type:'post',
            data:{'rowid':rowid,'rowperpage':rowperpage},// Se envían por ajax la cantidad total de filas y la fila actual.
            dataType:'text',
            success:function(response){
                
               
                
            objetos=JSON.parse(response);// La respuesta es un objeto JSON 
            
            //Se le asigna a cada campo del formulario el valor de cada campo de la fila.
                $("#codigo_socio").val(objetos[0].codigo);
                $("#nombre_socio").val(objetos[0].nombre);
                $("#cod_guagua").val(objetos[0].cod_guagua);
                $("#telefono").val(objetos[0].telefono);
                $("#doc_id").val(objetos[0].doc_id);
                
        }
    });

}

//-----------------------------------------------------------------------------

function buscar(){//Función que busca un registro en específico (Funciona igual que el getData() por si tienes dudas)
   // Se declara una variable codigo para que almacene el codigo luego de que se elimine la parte  del nombre 
        var codigo=$("#buscar_socio").val();
        
    //Luego se hacen las llamadas a Ajax y se llenan los campos del formulario.    
        $.ajax({
            url: "opciones/socios/cargar_socio.php",
            type: "POST",
            dataType: 'text',
            data: { 'codigo': codigo },
            success: function (resproducto) {
    
            var objetos = JSON.parse(resproducto);
                $("#codigo_socio").val(objetos[0].codigo);
                $("#nombre_socio").val(objetos[0].nombre);
                $("#cod_guagua").val(objetos[0].cod_guagua);
                $("#telefono").val(objetos[0].telefono);
                $("#doc_id").val(objetos[0].doc_id);
                disable_campos();//Se deshabilitan los campos  
                block();//Se deshabilitan los botones de Aceptar y Cancelar.
                enable_buttons();

            },error: function (resproducto) {
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
  $("#boton_aceptar").addClass('disabled');
  buscar();
  $('#buscar_socio').val('');
  

});


$("#cancelar_buscar").on('click', function(e){ //Funcion que se ejecuta al hacer click en el boton cancelar del modal buscar.
        
        disable_campos();//Se deshabilitan los campos  
        block();//Se deshabilitan los botones de Aceptar y Cancelar.
        enable_buttons();//Se habilitan los botones de manejo de datos y navegación.
        $('#suggestions').fadeOut(1000);
        $('#buscar_socio').val('');
});


//---------------------------------------------------------------------------
function ultimo_socio(){ //Funcion que devuelve un codigo nuevo al momento de ingresar un registro al sistema.
            
            
        $.ajax({
            url: "opciones/socios/ultimo_socio.php",//ruta del php a ejecutar
            type: "POST",
            dataType: 'text',
            success: function (resproducto) {
    
            var objetos = JSON.parse(resproducto);//Objeto JSON de respuesta.
            var codigo="CS-";//variable que almacenará el nuevo codigo.
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
            $("#codigo_socio").val(codigo);//Y por ultimo se le asigna al campo de texto codigo_socio el codigo nuevo.

            }
            ,error: function (resproducto) {
                alert("Error");
            }
        });


}

$(document).ready(function() {
    $('#buscar_socio').on('keyup', function() {
        var key = $(this).val();		
        var dataString = 'key='+key;
	$.ajax({
            type: "POST",
            url: "opciones/socios/busqueda_socio.php",
            data: dataString,
            success: function(data) {
                //Escribimos las sugerencias que nos manda la consulta
                $('#suggestions').fadeIn(1000).html(data);
                //Al hacer click en alguna de las sugerencias
                $('.suggest-element').on('click', function(){
                        //Obtenemos la id unica de la sugerencia pulsada
                        var id = $(this).attr('id');
                        //Editamos el valor del input con data de la sugerencia pulsada
                        $('#buscar_socio').val($('#'+id).attr('data'));
                        //Hacemos desaparecer el resto de sugerencias
                        $('#suggestions').fadeOut(1000);
                        return false;
                });
            }
        });
    });
}); 