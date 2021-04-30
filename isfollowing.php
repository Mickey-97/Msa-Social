<?php 
require 'connectDatabase.php';

$myid = $_POST['currentUser'];
$otherid = $_POST['currentOpen'];
$table = "amm.follow".$myid;
if($myid == $otherid){
	echo "heis";
	return;
}
$result = mysqli_query($con,"SELECT * FROM $table  WHERE followid = '$otherid'");
// $rows = mysqli_fetch_array($result, MYSQLI_ASSOC);
$n=mysqli_num_rows($result);

if($n>0){
	echo "yes";
	return;
}



 ?>