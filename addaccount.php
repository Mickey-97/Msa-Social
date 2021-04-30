<?php 
require 'connectDatabase.php';
// $ID = $_POST['ID'];
$firstname = $_POST['firstname'];

$lastname = $_POST['lastname'];
$email = $_POST['email'];
$pass = $_POST['pass'];
$birthday = $_POST['birthday'];
$birthmonth = $_POST['birthmonth'];
$birthyear = $_POST['birthyear'];
$gender = $_POST['gender'];

$insert = "INSERT INTO amm.register(`firstname`, `lastname`, `email`, `pass`, `birthday`, `birthmonth`, `birthyear`, `gender`) VALUES ('$firstname','$lastname','$email','$pass','$birthday','$birthmonth','$birthyear','$gender')";
mysqli_query($con, $insert);
header ("Location: index.php");

?>