<!DOCTYPE HTML>
<html>

<head>
  <title>0 $ - Tank Clicker</title>

  <link rel="stylesheet" href="main.css">
</head>

<body>
  <div class="sectionLeft">
    <center>
      <div class="scoreContainer unselectable">
        <span id="score">0</span> $<br>
        <span id="scorePS">0</span> $ per second
      </div>
      <br>
      <div class="clickerContainer unselectable">
        <img src="images/tank.png" height="500px" width="600px" id="clicker" class="unselectable">
			</div>
		</center>
  </div>

  <div class="sectionRight">
    <div id="upgradeContainer"></div>
    <div id="shopContainer"></div>
  </div>
  
	<div class="sectionFooter">
    <h1>Tank Clicker™</h1>
    <button onclick=" saveGame()">Save Game</button>
    <button onclick="resetGame()">Reset Game</button>
    <button onclick="help()">Help</button>
    <button onclick="NextLevel()">Next Level</button> 
    <span class="scoreKeeper">
      <span id="scoreBot">0</span> <span>/</span> <span id="nextSc">0</span>
    </span>
  </div>
  <script src="main.js"></script>
</body>

</html>