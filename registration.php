<html>
  <head>
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
        <div style = "background-color:#333333; color:#FFFFFF; padding:3px;"><b>Register</b></div>
        <div style = "margin:30px">       
          <form action="register.php" method="post">
            <label for="username">Username:</label><input type="text" id="username" name="username"><br /><br />
            <label for="password">Password:</label><input type="password" id="password" name="password"><br /><br />
            <input type="submit" value="Register"><br />
          </form>
        </div>
      </div>
		</div>
  </body>
</html>