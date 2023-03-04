<?php
   include("config.php");
   session_start();
   $save = $_POST['myData'];
   $username = $_SESSION['login_user'];
   $res = mysqli_query($db, "SELECT id FROM users WHERE username='$username'");
   $id = mysqli_fetch_assoc($res)['id'];
   $aquery = "SELECT * FROM saves WHERE User_ID = '$id'";
   $result = mysqli_query($db, $aquery);

   if (mysqli_num_rows($result) > 0) {
      $query = "UPDATE saves SET SaveFile='$save' WHERE User_ID = '$id'";
      mysqli_query($db, $query);
   } else {
      $query = "INSERT INTO saves (User_ID, SaveFile) VALUES ('$id', '$save')";
      mysqli_query($db, $query);
   }

   mysqli_close($db);
?>


