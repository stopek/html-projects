<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bank spółdzielczy w Toruniu</title>
    <meta name="Description" content=""/>
    <meta name="Keywords" content=""/>
    <meta name="Author" content=""/>
    <meta name="Robots" content="index, follow"/>
    <meta name="Googlebot" content="index, follow"/>
    <link rel="Shortcut icon" href="files/images/icon.ico"/>
    <link href="css/reset.css" rel="stylesheet" type="text/css"/>
    <link href="css/pagestyle.css?r=<?php echo time(); ?>" rel="stylesheet" type="text/css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/scripts.js?r=<?php echo time(); ?>"></script>
</head>
<body>
<main>
    <header>
        <div class="content">
            <div class="container">
                <div id="logo">
                    <a href="http://bstorun.pl"></a>
                </div>
                <div id="form">
                    <h1>Wyślij formularz</h1>
                    <h2>- oddzwonimy!</h2>
                    <form method="post" action="send.php">
                        <ul>
                            <li><input id="JQ_name" type="text" class="input" name="name" value=""
                                       placeholder="Imię i nazwisko*"/></li>
                            <li><input id="JQ_phone" type="text" class="input" name="phone" value=""
                                       placeholder="nr telefonu*"/></li>
                            <li><input id="JQ_email" type="email" class="input" name="email" value=""
                                       placeholder="e-mail"/></li>
                            <li class="rulez">
                                <input type="checkbox" name="rulez" value="1" id="JQ_rulez"/>
                                <p>
                                    Wyrażam zgodę na wykorzystanie przez Bank Spółdzielczy w Toruniu podanego przeze
                                    mnie numeru telefonu (i adresu poczty elektronicznej)... <a href="#"
                                                                                                id="JQ_fullmessage">przeczytaj
                                        pełną treść</a>
                                    <small> * pole obowiązkowe</small>
                                </p>
                                <div id="JQ_fullmessagecontent" class="hcontent">
                                    <div class="close">x</div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed erat mauris, viverra id diam a, mattis consequat purus.
                                        Aliquam convallis nunc nec urna rhoncus laoreet.
                                        Ut sit amet venenatis magna, vitae suscipit odio.
                                        In hac habitasse platea dictumst.
                                    </p>
                                </div>
                            </li>
                            <li class="submit">
                                <input type="submit" name="submit" value="Wyślij"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </header>
    <div id="description">
        <div class="content">
            <div class="container">
                <div id="wooman">
                    <img src="images/wooman.png" alt=""/>
                </div>
                <div id="title">
                    <h1>kredytowi</h1>
                    <h2>wygrywasz!</h2>
                </div>
                <div id="title2">
                    <h1>Promocyjne<br/>oprocentowanie</h1>
                    <h2>6,9%</h2>
                </div>
            </div>
        </div>
    </div>
    <?php if (empty($_GET['message'])) { ?>
        <section id="info">
            <div class="content">
                <div class="container">
                    <p>
                        <strong>Kredyt gotówkowy</strong> na promocyjnych warunkach z możliwością wygrania nagród?
                        Brzmi niewiarygodnie? U nas to możliwe!
                        <small>10 wysokiej klasy telewizorów Panasonic oraz setki innych nagród!</small>
                    </p>
                    <div id="prize"></div>
                </div>
            </div>
        </section>
    <?php } else { ?>
        <section id="info">
            <div class="content">
                <div class="container" style="width: 100%; text-align: center;">
                    <p style="width: 100%;">
                        <small>Twoja wiadomość została wysłana.</small>
                    </p>
                </div>
            </div>
        </section>
    <?php } ?>
    <section id="cookie">
        <div class="content">
            <div class="container">
                Zgodnie z ustawą o kredycie konsumenckim z dnia 12 maja 2011 roku przykład reprezentatywny kredytu w
                Banku Spółdzielczym w
                Toruniu charakteryzuje się następującymi parametrami: okres kredytowania - 36 miesięcy, oprocentowanie
                kredytu – 6,90%,
                RRSO – 13,51%, całkowita kwota kredytu – 6 360,00 zł, wysokość opłat uwzględnianych w całkowitym
                koszcie kredytu
                (odsetki, opłaty, prowizje i marże) = 1 219,84 zł.<br/><br/>
                Udzielenie kredytu zależne jest od indywidualnej oceny Wnioskodawcy oraz od wyniku badania jego
                zdolności kredytowej
                przez Bank Spółdzielczy w Toruniu.<br/><br/>
                Organizatorem Loterii promocyjnej o nazwie „Kredyt gotówkowy (jesień 2015)” jest SGB-Bank S.A. z
                siedzibą w Poznaniu
                przy ul. Szarych Szeregów 23a, 60-462 Poznań. Okres promocji (sprzedaży) kredytów trwa od 12.10.2015 r.
                do 31.12.2015 r.
                Szczegółowe informacje dotyczące Loterii, w tym warunki uczestnictwa, liczba, rodzaj i dostępność
                nagród, lista
                Banków Spółdzielczych SGB, biorących udział w Loterii, znajdują się w Regulaminie Loterii promocyjnej,
                dostępnym
                na stronie internetowej www.bstorun.pl. Uzyskanie kredytu oraz jego warunki uzależnione są od wyniku
                badania zdolności kredytowej.

                <div id="button">
                    <a href="http://bstorun.pl/uploads/bankspoldzielczy/file/545796daa8ae6/545797094af13/Regulamin_loterii_Dobry_Kredyt.pdf"
                       target="_blank">Regulamin loterii</a>
                    <a href="http://bstorun.pl/cookies.html" target="_blank">Pliki cookie</a>
                </div>
            </div>
        </div>
    </section>
</main>
</body>
</html>