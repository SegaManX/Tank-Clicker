<?php
include("config.php");

$user_name = $_POST['user_name'];
$sql = "UPDATE users SET admin = 1 WHERE username = '$user_name'";

if (mysqli_query($db, $sql))
{
  header("Location: admin.php");
}
else
{
  echo "Error updating record: " . mysqli_error($db);
}

mysqli_close($db);
?>