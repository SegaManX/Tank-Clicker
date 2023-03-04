<?php
include("config.php");
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST")
{
  // Username and password from form

  $myusername = mysqli_real_escape_string($db,$_POST['username']);
  $mypassword = mysqli_real_escape_string($db,$_POST['password']);
  $result = mysqli_query($db, "SELECT admin FROM users WHERE username = '$myusername' and password = '$mypassword'");
  $result = $result->fetch_array();
  $admin = intval($result[0]);

  if(!$admin)
  {
    $_SESSION['login_user'] = $myusername;
    header("location: game.php");
  }
  else if($admin)
  {
    $_SESSION['login_user'] = $myusername;
    header("location: admin.php");
  }
  else
  {
    $error = "Your Login Name or Password is invalid";
  }
  
}
?>
<html>

<head>
  <title>Sign In - Tank Clicker</title>

  <style type = "text/css">
    body {
      font-family:Arial, Helvetica, sans-serif;
      font-size:14px;
      background: url('images/bg.png') no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      margin: 0;
     
    }
    label {
      font-weight:bold;
      width:100px;
      font-size:14px;
    }
    .box {
      border:#666666 solid 1px;
    }
    .vcenter{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
   

  </style>
</head>

<body>
	
      <div align="center" class="vcenter">
         <div style = "width:300px; border: solid 1px #333333; background-color:#666666;" align = "left">
            <div style = "background-color:#333333; color:#FFFFFF; padding:3px;"><b>Login</b></div>
				
            <div style = "margin:30px">
               
              <form action = "" method = "post">
                <label>Username  :</label><input type = "text" name = "username" class = "box"/><br /><br />
                <label>Password  :</label><input type = "password" name = "password" class = "box" /><br/><br />
                <input type = "submit" value = " Submit "/><br />
              </form>
               
              <div style = "font-size:11px; color:#cc0000; margin-top:10px"><?php if (isset($error)){echo $error;}; ?></div>
              <div>
                <a href="registration.php"><button>Register</button></a>
              </div>
            </div>
				
         </div>
			
      </div>

   </body>
   <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
</html>