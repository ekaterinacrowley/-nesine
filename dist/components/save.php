<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && !empty($_POST["email"])) {
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $file = fopen("emails.txt", "a");
  fwrite($file, $email . PHP_EOL);
  fclose($file);
  echo "Email saved successfully!";
} else {
  http_response_code(400);
  echo "Invalid request";
}
?>
