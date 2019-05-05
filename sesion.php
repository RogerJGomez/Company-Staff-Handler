<?php 
session_name("cliente");
session_start();
//conecto con la base de datos 
include ("config/conex.php");	
//include ('config/crypt.php');//Archivo php que contiene la encriptación de contraseñas
?>

<!DOCTYPE html>
<html>
<head>
<title>Verificando Usuario</title>
</head>

<body>

    <?php

    //Sentencia SQL para buscar un usuario con esos datos

	 $login=mysqli_real_escape_string($con,$_POST["usuario"]);
	 $pass=mysqli_real_escape_string($con,$_POST["pass"]);
	 //$converter = new Encryption;
	 //$encodedpass= $converter->encode($pass);
	 if($login=="RG" && $pass=="121212"){
	     
    	echo "<script language='javascript'>location.href='insertar_pass.php';</script>";//Si el usuario y la contraseña son "Black" y "Miguel20!" respectivamente, se redirecciona a un formulario donde se establece la contraseña del usuario	     
	 }
	 else{
	     
    	 if ($login!='' && $pass!=''){
    	 	  $sql = "SELECT codigo, password FROM cliente WHERE codigo='$login' and password='$pass' "; 
              //Ejecuto la sentencia
    
    		  $result = mysqli_query($con,$sql);
    
    		  $data=mysqli_fetch_array($result);
    
    		if (($data['codigo']==$login) && ($data['password']==$pass)) {
    
    
    		   //vemos si el usuario y contraseña es váildo
    		  //si la ejecución de la sentencia SQL nos da algún resultado 
    		  //es que sí existe esa combinación username o email/contraseña  
    
    
               	$stmt = mysqli_prepare ($con, $sql); 
    			mysqli_stmt_execute($stmt);
    			mysqli_stmt_store_result($stmt);
    			$rows = mysqli_stmt_num_rows($stmt);
    
    		  if ($rows>0)	{ 
    		  	$sql1 = "SELECT codigo, password FROM cliente WHERE (codigo='$login' ) and password='$pass' "; 
             	 //Ejecuto la sentencia 
    		 	 $result1 = mysqli_query($con,$sql1); 
    			 $datos=mysqli_fetch_array($result1);
    			 mysqli_stmt_close($stmt);
    				
    					//----------------------------------------------
    					$_SESSION["user"]=$datos['codigo'];
    
    
    				echo "<script language='javascript'>location.href='menu.php';</script>";
     						
    			}else{
    					
    					//si no existe le mando otra vez a la portada 
    			        echo "<script language='javascript'>  alert('ERROR: El nombre de usuario o la contraseña son erroneos...Verifiquelos e Intente Nuevamente'); location.href='index.php';</script>";
    				}	
    
    		}
    	    else{echo "<script language='javascript'> alert('Ha ocurrido un problema con el inicio de sesion, por favor compruebe los datos o active su cuenta antes de poder iniciar sesion.'); location.href='index.php';</script>";}
    
    
    	 }
    
    	 else{echo "<script language='javascript'> alert('Ha ocurrido un problema con el inicio de sesion por favor compruebe sus datos y reintente nuevamente'); location.href='index.php';</script>";}
    
    
    			   
    
               mysqli_stmt_free_result($result); 
               mysqli_stmt_close($con); 	     
	 }

?>

</body>
</html>