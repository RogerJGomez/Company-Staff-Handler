<?php
   include('config/conex.php');
   //session_start();  //Incio la sesion de php 
   
   $user_check = $_SESSION['user']; //Obtengo la variable de sesion del usuario
   
   $ses_sql = mysqli_query($con,"select codigo from cliente where codigo = '$user_check' "); //Verifico si la variable de sesion existe en la base de datos (En este caso es el nombre de usuario)
   
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC); //Obtengo un arreglo de la consulta anterior
   
   $login_session = $row['codigo']; //Verifico el campo código, que viene siendo el nombre de usuario del cliente 
   
   if(!isset($_SESSION['user'])){ 
      header("location:index.php");
   }//Verifico si la varibale de sesion está activa, si no lo está, se redirecciona al index.php para que no pueda acceder al menu
?>