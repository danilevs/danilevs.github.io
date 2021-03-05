<?php
    
   	$name  = $_GET[name];
    $email = $_GET[email];
	$message  = $_GET[message];

	$my = mail("anjanu@mail.ru", "Ответ с сайта", "$name\n$email\n$message"); 

	if ($my) {
		echo 'Письмо успешно отправлено!';
    } else {
    	echo 'Письмо не отправлено!';
    }

?>
