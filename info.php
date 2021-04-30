<?php
$username = "root";
$password = "";
$hostname = "localhost";

//connecting to the database

$con = mysqli_connect($hostname, $username, $password) 
	or die ("Unable to connect to MYSQL");
//===================================================
	
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$pass = $_POST['pass'];
$birthday = $_POST['birthday'];
$birthmonth = $_POST['birthmonth'];
$birthyear = $_POST['birthyear'];
$gender = $_POST['gender'];
$firsttime=0;

mysqli_query($con," INSERT INTO amm.register(firstname,lastname,email,pass,birthday,birthmonth,birthyear,gender,firsttime) VALUES ('$firstname','$lastname','$email','$pass','$birthday','$birthmonth','$birthyear','$gender','$firsttime') ");


$must = mysqli_query($con,"SELECT * FROM amm.register WHERE `email`='$email'");
$rows = mysqli_fetch_array($must,MYSQLI_ASSOC);
$follow = "follow".$rows['ID'];
mysqli_query($con, "CREATE TABLE Amm.$follow (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY)");



?>	

<!DOCTYPE html>
<html>
<head>
	<title></title>
	 <meta http-equiv="refresh" content="0; index.php" />

</head>
<body>
	<p><a href="index.php">Redirect</a></p>
</body>
</html>