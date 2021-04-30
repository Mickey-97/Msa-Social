<?php 
require 'connectDatabase.php';
require 'libraries.php';
session_start();
checkNewPosts();


function checkNewPosts() {
global $con;
$search = mysqli_query($con, "SELECT * FROM amm.posts WHERE 1");
$row = mysqli_fetch_array($search,MYSQLI_ASSOC);



returnNewPosts();






}


function returnNewPosts () {
	global $con;
	// $id = $_SESSION['id'];
	$userid = $_POST['id'];

	$search = mysqli_query($con, "SELECT * FROM amm.posts WHERE userid = '$userid' ORDER BY `ID` DESC");
	$text = '';
	
	while(($row = mysqli_fetch_array($search,MYSQLI_ASSOC))){
	$searchUser = mysqli_query($con, "SELECT * FROM amm.register WHERE ID = '$userid'");
	$userdetail = mysqli_fetch_array($searchUser,MYSQLI_ASSOC);
	$userimage = $userdetail['image'];
	if($row['img']==''){$Imaage=" ";}else{
		$Imaage = '<img src="'.$row['img'].'" id="ImgPostPP" alt="">';
	}
		$text =$text.'<tr>
	<td>
		<div id="ImgPostBox" >
		<img src="'.$userimage.'" id="ImgPostP">
		<p id="ImgPostN">'.$row['name'].'
		<p id = "ImgPostD"> 
					. Jan 5
				</p>
		</p>
				
				<p id="ImgPosttxt">' .$row['kalam'].'
				'.$Imaage.'</p>
				<div id="line"></div>	
				<div >				
					<span id="like">
						<i class="fa fa-heart-o" aria-hidden="true"></i>
			    		<input type="text" id="comment" placeholder="Comment...">
			    	</span>
				</div>
		</div>
	</td>
</tr>';
	}

	echo $text;



}

//echo "hambozo";



?>