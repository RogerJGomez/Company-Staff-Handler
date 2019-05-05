
$("#regis-form").hide();
$("#pass-form").hide();
  
 //Nombre de variable del div del formulario de login

      
    $(document).ready(function() {
        jQuery.fn.outerHTML = function() {
        return (this[0]) ? this[0].outerHTML : '';  
    };  
         
    }); 
    
    
    
// CORREO



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
      
      


 ///FUNCION PARA REGISTRAR USUARIOS
$('#add').on('click',function(e){
        
        
        nombre = $("#nombre").val(); //Variables del HTML que se usarán para enviarse mediante ajacx
        user = $("#user").val();
        email = $("#email").val();
        pass= $("#pass").val();
        pass1= $("#pass1").val();

        if(nombre!=""&&user!=""&&email!=""&&pass!=""&&pass1!=""){

            if(pass!=pass1){
                
                mensaje="<div class='alert alert-danger col-md-12' role='alert' id='exito'>Las contraseñas deben coincidir</div>";

                $('#exito1').html(mensaje).show(200).delay(2500).hide(200);
            }
            else{
                $.ajax({ //Codigo ajax mediante la estructura POST se envían datos a un .php específico, en este caso: "guardar_cliente.php"
                    url: "guardar_cliente.php",
                    type: "POST",
                    dataType: 'text',
                    data:{'user':user,'nombre':nombre,'email':email,'pass':pass},//Se envían los datos por aquí
                    success: function (guardar) { //Si el envío de datos se cumplió con éxito, el .php devuelve un objeto JSON el cual se usará en este caso para determinar que las respuestas recibidas 
                        
                        var resp = JSON.parse(guardar);//variable que guardará el objeto JSON

                        if(resp==1){ //Mediante "If" voy verificando qué valor posee la variable y dependiendo del valor, envío un mensaje en pantalla 
                            
                        mensaje="<div class='alert alert-danger col-md-12' role='alert' id='exito'>Email ya en uso</div>";

                        $('#exito2').html(mensaje).show(200).delay(2500).hide(200);
                            
                        }
                        else if(resp==2){
                            
                            mensaje="<div class='alert alert-danger col-md-12' role='alert' id='exito'>Debe ingresar un formato de correo correcto</div>";

                            $('#exito2').html(mensaje).show(200).delay(2500).hide(200);                    
                        }else if(resp==3){


                            mensaje="<div class='alert alert-danger col-md-12' role='alert' id='exito'>Nombre de usuario ya en uso</div>";

                            $('#exito2').html(mensaje).show(200).delay(2500).hide(200);

                        }
                        else{
                            //Si la variable "resp" no cambia de valor, quiere decir que la consulta SQL se realizó correctamente. Muestro un mensaje en pantalla y vacío los campos de texto
                            mensaje="<div class='alert alert-success col-md-12' role='alert' id='exito'>Usuario registrado exitosamente</div>";

                            
                                $("#nombre").val('');
                                $("#user").val('');
                                $("#email").val('');
                                $("#pass").val('');
                                $("#pass1").val('');
                                $('#error2').html(mensaje).show(200).delay(3500).hide(200);

                        }
                    

                    }
                    ,error: function (guardar) {
                        alert("Error");
                    }

                });
            }    
        }
        else{
            mensaje="<div class='alert alert-danger col-md-12' role='alert' id='exito'>Debe llenar todos los campos</div>";

            $('#exito2').html(mensaje).show(200).delay(2500).hide(200);

        }


      
      
     
    });
    
    
$('#login_ref').on('click',function(e){//Función que permite alternar vistas entre el formulario de registro y el formulario de inicio de sesion
    $("#login-form").show();//Muestro el formulario de inicio de sesion
    $("#regis-form").hide();//Escondo el formulario de registro
    $("#pass-form").hide();
    
});

$('#login_ref1').on('click',function(e){//Función que permite alternar vistas entre el formulario de registro y el formulario de inicio de sesion
    $("#login-form").show();//Muestro el formulario de inicio de sesion
    $("#pass-form").hide();
    
});

$('#regis_ref').on('click',function(e){//Función que permite alternar vistas entre el formulario de registro y el formulario de inicio de sesion
    $("#login-form").hide();//Muestro el formulario de registro
    $("#regis-form").show();//Escondo el formulario de inicio de sesión
    
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------



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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
 ///FUNCION PARA ESTABLECER CONTRASEÑA
$('#forgot').on('click',function(e){ //Cuando se haga click en esta variable de HTML inicia la función
        
        
        mail = $("#email_pass").val(); //Variables tomadas de los inputs HTML para enviarse mediante ajax
   
        $.ajax({
                url: "send_password.php", //Se llama al .php "set_password.php", al cual se le enviarán los datos mediante ajax
                type: "POST",
                dataType: 'text',
                data:{'mail':mail},
                success: function (guardar) {
                    var resp = JSON.parse(guardar);

                    if(resp==1){//Si la variable resp devuelve 3 quiere decir que la consulta SQL donde se verfica si el usuario existe devolvió falso, por lo tanto no existe
                        
                        mensaje="<div class='alert alert-success col-md-12' role='alert' id='exito'>Se ha enviado la contraseña a su correo exitosamente</div>";

                        $('#exito1').html(mensaje).show(200).delay(3500).hide(200);//Se muestra un mensaje en pantalla
                        
                    }

                    else{

                        mensaje="<div class='alert alert-danger col-md-12' role='alert' id='exito'>No se ha encontrado el correo</div>";

                        $('#exito1').html(mensaje).show(200).delay(2500).hide(200);

                    }
                   

                }
  
            });

      
      
     
    });
    
//---------------------------------------------------------------------------
    


$('#change_pass').on('click',function(e){
    $("#pass-form").show();
    $("#login-form").hide();
    
});