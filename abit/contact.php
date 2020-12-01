<?php

//adres na który wysyłany będzie mail z wiadomością
$to = '';

//adres z którego przychodzi wiadomość.
$from = '';

$page = '';


$subject = 'Wiadomość ze strony ' . $page;
$message = ""
    . "Adres email: {$_POST['email']}\n"
    . "Numer telefonu: {$_POST['phone']}\n"
    . "Treść: {$_POST['message']}";


$headers = 'From: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();


mail($to, $subject, $message, $headers);

header("Location: {$page}?message=send#kontakt");
