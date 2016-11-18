<?php
$sendto   = "mail_dimona@mail.ru";
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
// Формирование заголовка письма
$subject  = "Заявка с redyworkmd.com";
$headers  = "From: mail_dimona@mail.ru" . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;margin:0 0 5px;border-bottom:1px dotted #ccc;'>Заявка с сайта redyworkmd.com</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>E-mail:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>
