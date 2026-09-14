<?php
echo '<table>';
echo '<tbody>';

for ($i = 0; $i < 100; $i++) {
    if ($i % 10 == 0) {
        echo "<tr>";
    }

    echo "<td>", $i + 1, "</td>";

    if ($i % 10 == 9) {
        echo "</tr>";
    }
}

echo '</tbody>';
echo '</table>';
?>
