<?php Header("HTTP/1.1 404 Not Found"); ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="icon" type="image/png" href="../img/favicon/favicon.png"> 

<style type="text/css">
* {
	box-sizing: border-box;
}
body {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}
.container {
	display: flex;
	height: 100vh;
	flex-direction: column;
	padding: 50px;
	align-items: center;
	font-size: 22px;
	color: #493d42;
}
.container span {
	margin: 15px;
}
.logo {
	height: 120px;
	margin-top: 10%;
	margin-bottom: 50px;
}
.error {
	font-size: 45px;
	background: #edefcd;
	padding: 10px 20px;
}
.container a {
	background: #edefcd;
	padding: 10px 20px;
	text-decoration: none;
	color: inherit;
	transition: 0.4s;
}
.container a:hover {
	opacity: 0.8;
}
</style>

</head>
<body>

	<div class="container">
		<img class="logo" src="../img/logo.jpg">
		<span class="error">404</span>
		<span class="comment">Страница не найдена!</span>
		<span class="link">Вы можете вернуться на <a href="../">главную</a></span>
	</div>

</body>
</html>