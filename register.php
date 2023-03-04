<?php
include("config.php");

$myusername = mysqli_real_escape_string($db,$_POST['username']);
$mypassword = mysqli_real_escape_string($db,$_POST['password']);

$sql = "INSERT INTO users (username, password, admin) VALUES ('$myusername', '$mypassword', 0)";
if (mysqli_query($db, $sql)) {
  header("Location: index.php");
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($db);
}

mysqli_close($db);
?>
