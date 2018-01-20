<?php
  header('Content-Type: application/csv');
  header('Content-Disposition: attachment; filename="fun.csv";');
  $data = file_get_contents('stuff.json');
  print($data);
?>
