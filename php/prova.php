
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
                table {
                        border-collapse: collapse;
                }

                td {
                        border: 1px solid black;
                        padding: 10px;
                }
                .even {
                    background-color: #ffffff;
                    color: #000000
                }
                .odd {
                    background-color: #000000;
                    color: #ffffff
                }
        </style>
</head>
<body>

        <?php
            echo '<table>';

            for ($i = 0; $i < 10; $i++) {
                echo '<tr>';
                for ($j = 0; $j < 10; $j++) {
                    $n = ($i * 10) + $j + 1;

                    if (($i + $j) % 2 == 0) {
                        $class = 'even';
                    } else {
                        $class = 'odd';
                    }

                    echo "<td class='$class'>$n</td>";
                }
                echo '</tr>';
            }

            echo '</table>';
        ?>

</body>
</html>
