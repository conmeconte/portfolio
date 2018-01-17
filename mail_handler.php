<?php
require_once('email_config.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->SMTPDebug = 0;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = 'chhongserver@gmail.com';  // sender's email address (shows in "From" field)
$mail->FromName = $_POST['name'];   // sender's name (shows in "From" field)
$mail->addAddress('conmeconte@gmail.com', 'Receiving John');  // Add a recipient
//$mail->addAddress('ellen@example.com');                        // Name is optional
$mail->addReplyTo($_POST['email']);                          // Add a reply-to address ex) $_POST['email']
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject =$_POST['subject'];
// $mail->Body    = 'This is the HTML message body <b>in bold!</b>'; //ex $_POST['body']
$mail->Body    = $_POST['body']; //ex $_POST['body']
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients'; //ex htmlentities($_POST['body'])
$mail->AltBody = htmlentities($_POST['body']); //ex htmlentities($_POST['body'])

$output=[];

if(!$mail->send()) {
    $output['success']=false;
    $output['message']=$mail->ErrorInfo;
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    $output['success']=true; 
}

echo json_encode($output);
?>
