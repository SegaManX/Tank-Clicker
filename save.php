<?php
   include("config.php");
   session_start();
   $save = $_POST['myData'];
   $username = $_SESSION['login_user'];
   $res = mysqli_query($db, "SELECT id FROM users WHERE username='$username'");
    $id = mysqli_fetch_assoc($res)['id'];
   mysqli_query($db, 
   "UPDATE saves SET SaveFile='$save' WHERE User_ID = '$id'");
?>