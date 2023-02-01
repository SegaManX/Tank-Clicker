<?php
   include("config.php");
   session_start();
   $username = $_SESSION['login_user'];
   $res = mysqli_query($db, "SELECT id FROM users WHERE username='$username'");
    $id = mysqli_fetch_assoc($res)['id'];
   $json = mysqli_query($db, "SELECT SaveFile FROM saves WHERE User_ID = '$id'");
   $save = mysqli_fetch_assoc($json);

echo $save['SaveFile'];
?>