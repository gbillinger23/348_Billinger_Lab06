<?php
	$s = $_POST['size'];
	echo "<table border=1>";
	
	echo "<tr><td></td>";
	for ($i = 1; $i <= $s; $i++) {
		echo "<td>$i</td>";
	}
	echo "</tr>";

	for ($i = 1; $i <= $s; $i++) {
		echo "<tr>";
		echo "<td>$i</td>";
		for ($j = 1; $j <= $s; $j++) {
			echo "<td>" . ($i * $j) . "</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
?>	
