<?php

require 'PHPMailer/PHPMailerAutoload.php';

define('MAIL_HOST', 'host');
define('MAIL_USERNAME', 'username');
define('MAIL_PASSWORD', 'password');
define('MAIL_PORT', 587);

class SendMail
{
    private $aData;

    public function __construct($aData)
    {
        $this->aData = $aData;
    }

    public function send($sEmail)
    {
        $mail = new PHPMailer;
        $mail->isSMTP(); /* Set mailer to use SMTP */
        $mail->Host = 'smtp.gmail.com'; /* Specify main and backup SMTP servers */
        $mail->Port = 465;
        $mail->SMTPAuth = true; // authentication enabled
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
        $mail->Username = MAIL_USERNAME; /* SMTP username */
        $mail->Password = MAIL_PASSWORD; /* SMTP password */
        $mail->From = MAIL_USERNAME;
        $mail->FromName = $this->aData['FromName'];
        $mail->addAddress($sEmail);
        $mail->isHTML(true);
        $mail->setLanguage('pl');
        $mail->CharSet = 'UTF-8';

        $mail->Subject = $this->aData['Subject'];
        $mail->Body = $this->aData['Body'];
        return $mail->send();
    }
}

$sBody = 'Nowa wiadomość ze strony gotowkowy.bstorun.pl<br/>'
    . 'Telefon: ' . $_POST['phone'] . '<br/>'
    . 'Imię i nazwisko: ' . $_POST['name'] . '<br/>'
    . 'Czas: ' . date('Y-m-d H:i:s') . '<br/>'
    . 'IP: ' . $_SERVER['REMOTE_ADDR'] . '<br/>'
    . 'Email do korespondencji: ' . $_POST['email'];


$sSubject = 'Nowa wiadomość ze strony gotowkowy.bstorun.pl';
$sFromName = 'Bank Sółdzielczy w Toruniu';

$ob = new SendMail(array('Body' => $sBody, 'Subject' => $sSubject, 'FromName' => $sFromName));
$ob->send('adres.email@domena.pl');