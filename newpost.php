<?php

require 'libraries.php';

$username = "root";
$password = "";
$hostname = "localhost";

 
$con = mysqli_connect($hostname, $username, $password) 
	or die ("Unable to connect to MYSQL");

// q=ucase(request.querystring("suggest"))

$postText = $_POST['name'];
$account = $_POST['email'];
if($_POST['img']!=''){
$imge = basename($_POST['img']);
$img = 'Images/'.$imge;
}else {
$img='';	
}
$userSearch = mysqli_query($con, "SELECT * FROM amm.register WHERE email = '$account' ");
$user = mysqli_fetch_array($userSearch, MYSQLI_ASSOC);
$id = $user ['ID'];
$firstname = $user['firstname']." ".$user['lastname'];
mysqli_query($con,"INSERT INTO amm.posts (kalam,userid,name,img) VALUES ('$postText','$id','$firstname','$img') ");





//connecting to the database






?>
