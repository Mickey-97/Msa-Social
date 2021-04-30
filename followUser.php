<?php 
require 'libraries.php';
require 'connectDatabase.php';
$myid = $_POST['currentUser'];
$otherid = $_POST['currentOpen'];
$table = "amm.follow".$myid;
mysqli_query($con,"INSERT INTO $table (followid) VALUES ('$otherid') ");



 ?>