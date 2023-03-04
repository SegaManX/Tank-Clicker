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
	<div class="sectionFooter">
    <h1>Tank Clicker™</h1>
    <button onclick=" saveGame()">Save Game</button>
    <button onclick="resetGame()">Reset Game</button>
    <button onclick="help()">Help</button>
    <button id="levelButton" onclick="NextLevel()">Next Level</button> 
    <span id="scoreKeeper">
      <span id="scoreBot">0</span> <span>/</span> <span id="nextSc">0</span>
    </span>
    <button onclick="window.location.href = 'index.php';">Log out</button>
  </div>
  <div class="sectionRight">
    <div id="upgradeContainer"></div>
    <div id="shopContainer"></div>
  </div>
  

  <script src="main.js"></script>
</body>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
</html>