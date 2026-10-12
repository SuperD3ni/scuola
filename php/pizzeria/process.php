<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizzeria Cozze Francesi</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $address = $_POST['address'];
        $time = $_POST['time'];
        $coupon = $_POST['coupon'];
        $margheritas = $_POST['margheritas'] ?? 0;
        $marinaras = $_POST['marinaras'] ?? 0;
        $capricciosas = $_POST['capricciosas'] ?? 0;
        $quattrostagioni = $_POST['quattrostagioni'] ?? 0;
        $quattroformaggi = $_POST['quattroformaggi'] ?? 0;
        $diavolas = $_POST['diavolas'] ?? 0;
        $napolis = $_POST['napolis'] ?? 0;

        if (!empty($name) && !empty($surname) && !empty($address) && !empty($time)) {
            $html = '<div id="order-summary"><h2>Dettagli dell\'ordine</h2><p>La tua pizza verra consegnata a '.$address.' a nome di '.$name.' '.$surname.' all\'ora '.$time.'</p>';

            $pizzas = [
                'Margherita' => $margheritas,
                'Marinara' => $marinaras,
                'Capricciosa' => $capricciosas,
                'Quattro Stagioni' => $quattrostagioni,
                'Quattro Formaggi' => $quattroformaggi,
                'Diavola' => $diavolas,
                'Napoli' => $napolis
            ];

            $prices = [
                'Margherita' => 5.50,
                'Marinara' => 4.50,
                'Capricciosa' => 8.00,
                'Quattro Stagioni' => 8.00,
                'Quattro Formaggi' => 8.00,
                'Diavola' => 8.00,
                'Napoli' => 8.00
            ];

            $keys = array_keys($pizzas);
            $price = 0.0;

            for ($i=0; $i<count($pizzas);$i++){
                $pizza = $keys[$i];
                $quantity = floatval($pizzas[$pizza]);

                if ($quantity > 0){
                    $html = $html.'<br>'.$keys[$i].': '.$quantity;
                    $price = $price + $quantity * $prices[$pizza];
                }
            }

            if ($coupon === 'PHPISTHEBEST'){
                $html = $html.'<br>codice sconto applicato 15%';
                $price = $price * 0.85;
            }
            $html = $html.'<br>Prezzo totale: '.$price.' Euro';
            $html = $html.'</div>';
            echo $html;
        } else {
            echo '<div id="order-summary"><h1>Errore: alcuni campi non sono stati inseriti</h1></div>';
        }
    ?>
</body>
</html>

