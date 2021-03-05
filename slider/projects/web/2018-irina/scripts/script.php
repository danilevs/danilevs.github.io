<?

$name  = $_POST['name'];
$email  = $_POST['email'];
$address  = $_POST['address'];
$text  = $_POST['text'];

$message = 'Письмо от посетителя: '.$name.'<'.$email.'>'.', проживающего по адресу:'.$address.'. Текст сообщения: '.$text;

$to = 'antigravitydany@gmail.com'; // получатель / получатели
$subject = 'Обращение с сайта от пользователя $name';                       // тема письма

$email = mail($to, $subject, $message);
if ($email) {
    echo 'Письмо успешно отправлено!';
} else {
    echo 'Письмо не отправлено!';
}

?>
