<!DOCTYPE html>

  <html>

    
<head><meta http-equiv="Content-Type" charset="utf-8" content="text/html">
         
<title>RG System</title>
        <!--Import Google Icon Font-->
        	  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
              <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
          <!--Let browser know website is optimized for mobile-->
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="imagenes/rg-logo.ico" type="image/ico">

</head>

<body>
<main>
  



<div class="container" style="margin-bottom:10px;margin-top:5px; margin-right:100px;" >

  <div class="row">
        <div style="padding-right:220px; margin-top:100px" class="col-md-8">
            <center><img style="width:500px; heigth:500px;" src="imagenes/rg.png"/></center>
        </div>
        <div class="card col-md-4" style="margin-top:100px;">

            <div id="pass-form">
                <div class="card-header">  
                    <center> <h5 class="col-md-10">RECUPERAR CONTRASEÑA</h5></center>
                </div>
                <div class="card-body"> 

                    <div class="form-group md-10" style="margin-bottom:5px;" id="">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email_pass" placeholder="you@example.com">
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    
                    <div class="form-group md-10"style="margin-bottom:20px; margin-top:15px;" id="">
                        <center><button class="btn" style="background-color:#1E51A4; color:#fff;" id ="forgot"name="login">Confirmar
                        </button></center>
                        <center><p class="forgot"style="margin-bottom:20px; margin-top:15px;" ><a id ="login_ref1" href="#">¿Ya posee una cuenta? Inicie Sesión</a></p> </center>             
                        <div class="col-md-12" id="exito1">
                        </div>
                        <div class="col-md-12" id="error1">
                        </div>
                    </div>   
                </div>
            </div>            
            <div id="login-form">
                <div class="card-header">
                    <center> <h5 class="col-md-8">INICIAR SESIÓN</h5></center>
                </div>
                <div class="card-body">   
                    <form action="sesion.php" method="post">    
                        <div class="form-group md-10" style="margin-bottom:5px;" >
                            <label for="usuario" >Nombre de usuario:</label>
                            <input required autocomplete="on" type="text" class="form-control" name="usuario" id="user1" placeholder="Ingrese su nombre de usuario" required></input> 
                            
                        </div>
                        
                        <div class="form-group md-10"style="margin-bottom:5px;" >
                            <label for="pass" >Contraseña:</label>
                            <input required autocomplete="off" type="password"  class="form-control" name="pass" id="password" placeholder="Ingrese su contrañesa"></input> 
                        </div>
                        
                        <div class="form-group md-10"style="margin-bottom:20px; margin-top:15px;" >
                            <center><button class="btn" style="background-color:#1E51A4; color:#fff;" name="login">Iniciar Sesión
                            </button></center>  
                            <center><p class="forgot"style="margin-bottom:20px; margin-top:15px;"><a id ="regis_ref" href="#">¿No posee una cuenta? Registrarse</a></p> </center>
                            <center><p class="forgot"style="margin-bottom:20px; margin-top:15px;" ><a id ="change_pass" href="#">¿Olvidó su contraseña?</a></p> </center>              
                        </div>
                    </form>
                </div>
            </div>

            <div id="regis-form">
                <div class="card-header">  
                    <center> <h5 class="col-md-10">REGISTRARSE</h5></center>
                </div>
                <div class="card-body" style="margin-bottom:10px;"> 

                    <div class="form-group md-10" style="margin-bottom:5px;" id="">
                        <label for="usuario" >Nombre</label>
                        <input required autocomplete="on" type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" required></input> 
                        
                    </div>

                    <div class="form-group md-10" style="margin-bottom:5px;" id="">
                        <label for="usuario" >Nombre de usuario</label>
                        <input required autocomplete="on" type="text" class="form-control"  id="user" placeholder="Ingrese su nombre de usuario" required></input> 
                        
                    </div>
                    
                    <div class="form-group md-10"style="margin-bottom:5px;" id="">
                        <label for="pass" >Contraseña</label>
                        <input required autocomplete="off" type="password"  class="form-control" name="pass" id="pass1" placeholder="Ingrese su contrañesa"></input> 
                    </div>

                    <div class="form-group md-10"style="margin-bottom:5px;" id="">
                        <label for="pass" >Confirmar contraseña</label>
                        <input required autocomplete="off" type="password"  class="form-control" name="pass" id="pass" placeholder="Confirme su contrañesa"></input> 
                    </div>

                    <div class="form-group md-10" style="margin-bottom:5px;" id="">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com">
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    
                    <div class="form-group md-10"style="margin-bottom:20px; margin-top:15px;" id="">
                    <center><button class="btn" style="background-color:#1E51A4; color:#fff;" id ="add"name="login">Registrarse
                    </button></center>

                    <center><p class="forgot"style="margin-bottom:20px; margin-top:15px;" ><a id ="login_ref" href="#">¿Ya posee una cuenta? Inicie Sesión</a></p> </center>
                    <div class="col-md-12" id="exito2">
                    </div>
                    <div class="col-md-12" id="error2">
                    </div>
                </div>
            </div>



        </div>
    </div>
</div>

 </main>	
 	
	  <!-- Compiled and minified JavaScript -->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="static/js/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script> 
     <script src="static/js/scripts.js"></script> 
    </body>
    
 </html>