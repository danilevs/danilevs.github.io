<?php

	$to      = 'it.school.pnz@gmail.com'; 
	// $to      = 'warnes23@yandex.ru'; 
	$subject = 'Письмо с сайта http://it-school58.ru/'; 
   	$message = $_GET[message];
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	$my = mail($to, $subject, $message, $headers);

	if ($my) {
        echo "success";
    } else {
        echo "error";
    }
?>
