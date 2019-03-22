<!DOCTYPE html>
<meta charset = utf8>
<html>
<head>
    <title>Primer z gumbi</title>
</head>

<body>

<button id="gumbPrižgi1" onClick="prižgi1()">Prižgi Z 1</button>
<button id="gumbUgasni1" onClick="ugasni1()">Ugasni Z 1</button>
<p></p>
<button id="gumbPrižgi2" onClick="prižgi2()">Prižgi O 1</button>
<button id="gumbUgasni2" onClick="ugasni2()">Ugasni O 1</button>
<p></p>
<button id="gumbPrižgi3" onClick="prižgi3()">Prižgi Z 2</button>
<button id="gumbUgasni3" onClick="ugasni3()">Ugasni Z 2</button>
<p></p>
<button id="gumbPrižgi4" onClick="prižgi4()">Prižgi O 2</button>
<button id="gumbUgasni4" onClick="ugasni4()">Ugasni O 2</button>
<p></p>
<br>

<script type="text/javascript" src="/socket.io/socket.io.js"></script>

<script type="text/javascript">

var socket1 = io.connect("192.168.1.203:8080"); // povez. prek vtičnika
var socket2 = io.connect("192.168.1.206:8080"); // povez. prek vtičnika 2.

function prižgi1 () {
    socket1.emit("ukazArduinu", 1); // na strežnik pošljem 1
}

function ugasni1 () {
    socket1.emit("ukazArduinu", 0); // na strežnik pošljem 0
}
function prižgi2 () {
    socket1.emit("ukazArduinu", 3); // na strežnik pošljem 1
}

function ugasni2 () {
    socket1.emit("ukazArduinu", 2); // na strežnik pošljem 0
}
function prižgi3 () {
    socket2.emit("ukazArduinu", 1); // na strežnik pošljem 1
}

function ugasni3 () {
    socket2.emit("ukazArduinu", 0); // na strežnik pošljem 0
}

function prižgi4 () {
    socket2.emit("ukazArduinu", 3); // na strežnik pošljem 3
}

function ugasni4 () {
    socket2.emit("ukazArduinu", 2); // na strežnik pošljem 2
}

</script>
    
</body>

</html>