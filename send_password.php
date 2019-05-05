<?php
include ('config/conex.php');

require("PHPMailer/class.phpmailer.php");
require("PHPMailer/class.smtp.php");
//agregar resp a las condicionales

//Variables que recibirán los datos enviados por Ajax
$email=$_POST['mail'];

$resp=0;

$sql1 = "SELECT * FROM cliente WHERE email = '$email'";
$result = mysqli_query($con,$sql1);

$stmt = mysqli_prepare ($con, $sql1); 
mysqli_stmt_execute($stmt);
mysqli_stmt_store_result($stmt);
$rows = mysqli_stmt_num_rows($stmt);
if ($rows > 0){
    $datos=mysqli_fetch_assoc($result);
    $resp=1;


    $pass=$datos['password'];
    $user=$datos['codigo'];


	$body = '<table width="537" height="662" border="1">
        <tbody>
            <tr>
            <td>Buenas, '.$user. ', su password es: '.$pass. '</td>
            </tr>
            <tr>
                <td colspan="2"><img src="http://static1.squarespace.com/static/567c11999cadb6554daa572d/t/567c151cbfe873f15c0138e7/1522970581505/"></td>
            </tr>
        </tbody>
    </table>';


    $mail = new PHPMailer;
    $mail->SMTPSecure = 'tls';
    $mail->Username = "email@mail.com";
    $mail->Password = "*******";
    $mail->AddAddress($email);
    $mail->FromName = "RG System";
    $mail->Subject = "Recuperar password";
    $mail->MsgHTML($body);
    $mail->Host = "smtp.live.com";
    $mail->Port = 587;
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->From = $mail->Username;
    $mail->Send();

    

}
else{
    $resp=2;

}

echo json_encode($resp);