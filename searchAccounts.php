<?php 
require 'connectDatabase.php';
require 'libraries.php';

checkNewPosts();


function checkNewPosts() {
global $con;

$searchtext = $_POST['userText'] . '%';
if($_POST['userText'] == "") {
	echo "";
	return;
}
$search = mysqli_query($con, "SELECT * FROM amm.register WHERE 
	ID LIKE '$searchtext' OR firstname LIKE '$searchtext' OR lastname LIKE '$searchtext' OR email LIKE '$searchtext' ");
$searchresult ='';
while(($row = mysqli_fetch_array($search,MYSQLI_ASSOC))){
$searchresult = $searchresult.'<li><a href="profile.php?id='.$row['ID'].'"> <img src="'.$row['image'].'">'.$row['firstname'].' '.$row['lastname'].'<span id="info">.'.$row['faculty'].' </span></li></a>';


}
echo $searchresult;







}




?>