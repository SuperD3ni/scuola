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
        </style>
</head>
<body>

        <?php
        echo '<table>';

                for ($i = 0; $i < 100; $i++) {
                        if ($i % 10 == 0) {
                                echo "<tr>";
                        }

                        echo "<td>", $i + 1, "</td>";

                        if ($i % 10 == 9) {
                                echo "</tr>";
                        }
                }

                echo '</table>';
        ?>

</body>
</html>
