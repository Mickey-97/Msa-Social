<?php 
$username = "root";
$password = "";
$hostname = "localhost";

//connecting to the database

$con = mysqli_connect($hostname, $username, $password) 
	or die ("Unable to connect to MYSQL");

session_start();


$email = $_SESSION['email'];
$bio = $_POST['bio'];
mysqli_query($con,"UPDATE amm.register SET  `bio` = '$bio' WHERE `register`.`email` = '$email'");




?>