<?php
session_start();  
$username = "root";
$password = "";
$hostname = "localhost";



$con = mysqli_connect($hostname, $username, $password) 
	or die ("Unable to connect to MYSQL");

if(isset($_SESSION['email'])){
$email = $_SESSION['email'];
$password = $_SESSION['password'] ;
}  



 if(isset($_POST['email'])) {
  	$email = $_POST['email'];
  }
  if(isset($_POST['password'])) {
  	$password = $_POST['password'];
  }
$check = "SELECT * FROM amm.register WHERE `email`='$email' AND `pass`='$password'";
$m =mysqli_query($con,$check);
$n=mysqli_num_rows($m);
    

if($n>0)
{
	$rows = mysqli_fetch_array($m,MYSQLI_ASSOC);
	$_SESSION['email'] = $_POST['email'];
    $_SESSION['password'] = $_POST['password'];
    $firsttime = $rows['firsttime'];
    $ID=$rows['ID'];
    $_SESSION['id'] =  $ID;
    if($firsttime==0)
    {
		$w=1;
		mysqli_select_db($con, "msacast");
		mysqli_query($con," UPDATE register
							SET firsttime = '$w'
							WHERE ID = '$ID';");
		header('Location: firstime.php');
	}
	else
	{

		header('Location: newsFeed.php');
	}
   	
}
else
{
	header('Location: indexwrong.php');
	session_destroy();

  
}

?>