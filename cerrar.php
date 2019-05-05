<?php
session_name("cliente");
session_start();
session_unset();
session_destroy();

    echo "<script language='javascript'> 
	location.href='index.php' </script>";
	
?>
