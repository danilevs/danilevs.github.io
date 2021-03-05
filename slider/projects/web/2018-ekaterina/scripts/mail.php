<?php
    
   	$name  = $_GET[name];
   	$tel  = $_GET[tel];
    $email = $_GET[email];
	$comments  = $_GET[comments];


	$my = mail("pahomova_katya.9@mail.ru", "Ответ с сайта", "$name\n$tel\n$email\n$comments"); /*\n - пробел, перенос строки*/

	if ($my) {
		echo 'Письмо успешно отправлено!';
    } 
    else {
    	echo 'Письмо не отправлено!';
    }

?>
