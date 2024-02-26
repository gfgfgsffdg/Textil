<?php
header("Content-Type: application/json");

$pastebin_url = "https://pastebin.com/raw/jAxZRYvZ";
$data = file_get_contents($pastebin_url);

if ($data) {
  echo $data;
} else {
  echo json_encode(array("error" => "Error fetching the messages"));
}
?>
