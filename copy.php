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
        <img src="images/tank.png" height="500000px" width="600px" id="clicker" class="unselectable">
				</div>
			</center>
			<div class=" sectionFooter">
        <h5>Tank Clicker™</h5>
        <button onclick=" saveGame()">Save Game</button>
        <button onclick="resetGame()">Reset Game</button>
      </div>
      <div class="NextLvl">
        <button onclick="NextLevel()">Next Level</button> <span id="scoreBot">0</span> / <span id="nextSc">0</span>
      </div>
  </div>

  <div class="sectionRight">
    <div id="upgradeContainer"></div>
    <div id="shopContainer"></div>
  </div>
  <script src="main.js"></script>
</body>

</html>