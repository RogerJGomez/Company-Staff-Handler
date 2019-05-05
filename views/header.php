<?php 

    session_name("cliente");
    session_start();
    include ('session_start.php');

?>
<!DOCTYPE html>

  <html>

    
<head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
         
<title>RG System</title>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
            <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
            <link rel='stylesheet' href='static/css/style.css'>          
            <!--Let browser know website is optimized for mobile-->
          
        <link rel="icon" href="imagenes/rg-logo.ico" type="image/ico">

    </head>

<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
  <img src="imagenes/rg.png" style="height: 50px; margin-left:10px">
  </button>
  <a class="navbar-brand" href=""><img src="imagenes/rg.png" style="height: 50px; margin-left:10px"></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Operaciones
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="regis_clientes.php">Clientes</a>
          <a class="dropdown-item" href="socios.php">Socios</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="cerrar.php">Cerrar Sesión: <h5 style="color:#1E51A4; font-size:17px"><?php echo $_SESSION["user"];?></h5></a>
        </div>
      </li>
        <li class="nav-item active">
        <a class="nav-link" href="menu.php">Inicio<span class="sr-only">(current)</span></a>
        </li>
  </div>
</nav>


      
