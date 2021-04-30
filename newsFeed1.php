<!DOCTYPE html>
<html>
<head>
	<title>MSA Social</title>
	<link rel="shortcut icon" type="image/x-icon" href="images/social.ico" />
	<style type="text/css">
		*:focus {
    outline: none;
}
		#navbar {
			position:absolute;
			display:flex;
			text-align: center;
			top:0px;
			left:0px;
			width:100%;
			height:50px;
			font-size: 23pt;
			color:#181818;
			background:#FFFFFF;
			border-bottom: 1px solid #181818;
			border-color: rgba(0,0,0,0.3);
			
		}
		#body {
			width:1024px;
			margin:0 auto;
			background-color: #f2f2f2;

		}

		#searchnav {
			width: 457px;
			height:28px;

		}
		#srchicon {
			position: absolute;
			border:0px;
			border:1px solid black;
			border-left: none;
			border-color: rgba(0,0,0,0.3);
			border-radius: 1px 5px 5px 1px;
			width: 50px;
			height:27px;
			left:540px;
			top :10px;
		}
		#srchicon:hover{
			background-color: #c1c1c1;
		}
		#srchbox {
			width: 457px;
			font-family: 'Lato';
			font-weight: bold;
			top :10px;
			height:27px;
			left:130px;
			position: absolute;
			border: 1px solid black;
			border-radius: 5px;
			border-color: rgba(0,0,0,0.3);
		}
		#Home , #Messages,#separatorHM,#accountFN,#separatorFN ,#Notifications{
		color : #181818;
		position :absolute;
		left: 5px;
		font-size: 18pt;
		top :6.5px;
		text-decoration: none;
		font-family: 'PT Sans', sans-serif;

		}
		#Home:hover{
			text-decoration: none;
		}
		#separatorHM {
			left: 16.6px;
		}
		#separatorFN {
			left: 73.5px;
			font-size: 1.7px;
			top: 0.5px;
		}
		#Messages {
			left : 17.3px;
		}
		#accountFN {
		left:59px;
		width: 14px;
		text-align: right;
		}
		#accountP{
			
			width: 33px;
			height: 33px;
			border-radius: 50%;

			object-fit: cover;
		}
		#Noti{
			margin-bottom:3px;
			width: 21px;
			margin-right:3px;	
		}
		#msg{
			margin-bottom:3px;
			width: 22px;
			margin-right:20px;	
		}
		#accountNotP{
			
			position: absolute;
		    left: -16px;
		    right: -100%;
		    top: -100%;
		    bottom: -100%;
		    margin: auto; 
		    height: 4px;
		    width: 4px;
		}
		#submitFormBt {
			position: absolute;
			margin-top: 82px;
			margin-left:-67px;
			width: 60px;
			font-size: 10pt;
			display: inline;
			border-radius: 3px;
			background-color: #930e49;
			font-family: Lato;
			color: white;
			border:0px solid grey;
		}
		#submitFormBt:hover {
			background-color: #660831;
		}
		
		#newPostBox {
			display: block;
			margin-top: 66px;
		}
		#newPost {
			width: 500px;
			height:35px;
			margin-top:8px;
			border: 1px solid grey;
			border-color: rgba(0,0,0,0.3);
			font-family: 'Lato';
			color:black;
			font-size: 15px;
			padding-top:5px;
			padding-left:75px;
			resize: none;
		}
		#newPostP {
			width: 50px;
			height: 50px;
			object-fit: cover;
			position: absolute;
			margin-left:20px;
			margin-bottom:100px;
			border-radius: 50%;
			box-shadow: 0.7px 0.7px 0.7px #181818;
		}
		#ImgPostBox {
			width: 500px;
			background-color: #FFFFFF;
			margin-left:262px;
			margin-top:25px;
			border: 1px solid grey;
			border-color: rgba(0,0,0,0.3);
			font-family: 'Lato';
			color:black;
			font-size: 15px;
			padding-top:5px;
			padding-left:75px;
		}
		#ImgPost {
			border: 1px solid grey;
			padding-left: 5px;
			padding-bottom: 18px;
			margin-bottom: 2px;
		}
		#ImgPostP {
			width: 50px;
			height: 50px;
			object-fit: cover;
			position: absolute;
			margin-left:-55px;
			margin-top:-20px;
			border-radius: 50%;
			box-shadow: 0.7px 0.7px 0.7px #181818;

		}
		#ImgPostN {
			font-family: 'Calibri light', sans-serif;
			font-weight: bold;
			font-size:14px;
			color: #8f4d14;
			display: inline;
		}
		table{
			position: static;
			text-align: left;
		}
		#ImgPostD {
			display: inline;
			color: grey;
			font-family: 'Calibri', sans-serif;
			font-size: 9px;
		}
		#ImgPosttxt {
			font-family: 'Calibri light', sans-serif;
			font-size:18px;
			margin-left:-50px;
			margin-top: 10px;

		}
		#ImgPostlikeComment {
			top: 17.8px;
			left: 1px;
			width:27px;
			border-top: 1px solid grey;
		}
		#ImgPostlikeComment span i {
			color: black;
			opacity: 0.5;
		}
		#ImgPostPP {
			border: 1px solid #c9c9c9;
			margin-top: 3px;
			width :450px;
			max-height: 600px;
			object-fit: cover;
			
		}
		#like{
			margin-left:-45px;
		}
		#comment{
			border:0px solid red;
			width: 95%;	
			margin-bottom:5px;
			font-family: 'lato light';
			text-align: left;
			font-size: 10px;
			color:black;
		}
		#line{
			margin-left:-50px;
			width:106%;
			border-top:0.5px solid grey;
			opacity: 1;
			border-color:#8b8b8b;
		}
		.right{
			width:1024px;
			min-width: 1024px;
			margin:0 auto;
			position: relative;
			object-fit: cover;

		}
		.cont{
			background-color: #000000;	
			
			width:219px;
			margin:0 auto;
			color:black;
			position: absolute;
			top :70px;
			border-radius:10px;
			height:55px;
		}
		.anoun{
			background-color: #ececec;
			width:225px;
			max-width: 1024px;
			margin:0 auto;
			color:black;
			position: absolute;
			top :70px;
			right:2px;
			border:0px solid black;
			border-radius:10px;
		}
		#an{
			font-family:'lato'; 
			text-align: left;
			margin-top:4px;
			margin-bottom: 4px;
			margin-left:7px;
			font-size: 18px;
			color: #c30c0c;
		}
		#para{
			font-family:'lato'; 
			font-size: 14px;
			text-align: left;
			margin-left:7px;
			margin-bottom: 4px;
			color: #181818;
		}
		#cover{
			opacity: 0.35;
			border:1px solid grey;
			width:219px;
			height:55px;
			object-fit: cover;
			border-radius:10px;	
		}
		#namebox{
			font-family:'lato light'; 
			font-size: 15.7px;
			position: absolute;
			color:white;
			left:32%;
			top:-3%;
		}
		#namebox:hover{
			text-decoration: underline;
		}
		#pbox{
			position: absolute;
			width:35px;
			height:35px;
			object-fit: cover;
			left:8%;
			top:16%;
			border-radius: 50%;
			border:0px solid white;
	
		}
		.course{
			background-color:#ececec;
			width:219px;
			margin:0 auto;
			color:black;
			position: absolute;
			top :140px;
			border:0px solid grey;
			border-radius:10px;
		}
		#faculty{

			font-family:'lato'; 
			font-weight: bold;
			font-style: italic;
			font-size: 12px;
			margin-top:0.8%;
			margin-left:10%;
		}
		#pgrad{
			position: absolute;
			width:27px;
			height:27px;
			object-fit: cover;
			margin-left: -47.5%;	
			margin-top:-1.5%;
		}
		#courses{
			font-family:'lato'; 
			margin-bottom: 10px;
			font-size: 10px;
			margin-left:4%;
			text-align: left;
		}
		a , a:hover, a:active , a:visited ,a:link
		{
			color: black;
			font-family: 'Lato', sans-serif;
			text-decoration: none;
		}
		.shortcut{
			background-color:transparent;
			width:219px;
			margin:0 auto;
			color:black;
			position: absolute;
			top :275px;
			border:0px solid grey;
		}
		#li{
			width:100%;
			border: 0px solid red;
			background: transparent;
		}
		#li:hover{
			border:1px solid black;
			text-decoration: none;
			background-color: rgba(0,0,0,0.08);
		}
		#short{
			
			font-size: 14px;
			text-align: left;
			margin-left:3%;
		}
		
		#shortc{
			font-family:'lato light'; 
			font-weight: bold; 
			font-size: 11px;
			text-align: left;
			margin-top:5%;
			margin-bottom: 4%;
			margin-left:12.5%;
		}
		#icon{
			position: absolute;
			width:25px;
			height:25px;
			object-fit: cover;	
			margin-top:2%;
			margin-left:-47.5%;

		}
		#bor{
			background-color: #dfdfdf;
			position: absolute;
			width:498px;
			height:28.5px;
			object-fit: cover;	
			left:25.7%;
			margin-top:13.1%;
		}
		#camera {
			border: 0px;
			background: transparent;
			position: absolute;
			width: 23px;	
			margin-top: 42px;
			margin-left:-240px;

		}
		#camera:hover {
			opacity:0.8;
		}
	#slideshow > div {
  position: absolute;
  border-radius: 10px;
  top: 80px;
  left: 10px;
  right: 10px;
  bottom: 10px;
	}
		
	</style>
	<?php
require 'libraries.php';

?>

</head>
<body id="body" >
<div id='navbar'  >
	<div class="right" >
		
	<a href="#" id="Home">msa Social</a>

    <input type="text" class="form-control srch" id="srchbox" placeholder="Search" size="50">
    <button class="btn btn-default srch" type="submit" id="srchicon"><i class="glyphicon glyphicon-search"></i></button>
   

    <div style="position: absolute; margin-right: 0px; margin-left:86%;">


    <a href="#"><img  src="images/noti.png" id="Noti" onmouseover="hover(this);" onmouseout="unhover(this);" /></a>

    <a href="#"><img  src="images/msg.png" id="msg" onmouseover="hover1(this);" onmouseout="unhover1(this);" /></a>
    	<a href="#"><img src="images/pp.jpg" id="accountP"></a>
	
	
    </div>

	<a href="#">
    <div class="cont">
	<img src="images/profile.jpg" id="cover" >
	 <h1 id="namebox"> Mohanad Hani</h1>
	 <img src="images/pp.jpg" id="pbox">
	</div>
	</a>

	<div class="anoun">
	 <a href="#"><p id="an"> Announcements</p></a>
	 <p id="para">
	 Two days left for CS283 project!
	 Two days left for CS283 project!
	 Two days left for CS283 project!
	 Two days left for CS283 project!
	 Two days left for CS283 project!
	 Two days left for CS283 project!</p>
	</div>

	<div class="course">
	<img src="images/grad.png" id="pgrad">
	 <p id="faculty">Computer Science - Third Semester</p>
	 <p id="courses">
		<a href="#"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="#"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="#"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="#"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="#"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="#"><b>CS213</b> Data Structure and Algorithms<br></a>
	 </p>
	</div>
	<div class="shortcut">
	 <p id="short">SHORTCUTS
	<button  type="submit" id="li"><img src="images/calendar.png" id="icon">
	<p id="shortc">Weekly Schedule<br></p></button>
	<button  type="submit" id="li"><img src="images/cast.png" id="icon">
	<p id="shortc">MSA Cast<br></p></button>
	<button  type="submit" id="li"><img src="images/result.png" id="icon">
	<p id="shortc">Your results<br></p></button>
	<button  type="submit" id="li"><img src="images/fees.png" id="icon">
	<p id="shortc">Tuition fees<br></p></button>
	</div>
	</p>
	<div id="bor"></div>
	<div id="newPostBox">

	<img src="images/pp.jpg" id="newPostP">

	<textarea  name="newPost"  id="newPost" onfocus="expandpost()" placeholder="Say Something !" ></textarea>
	 <button class="acbut" type="submit" id="submitFormBt"><span>Post</span></button>
	 <button  type="login" id="camera"><img src="images/camera.png" id="camera"></button>
	</div>
<table>
<tr>
	<td>
		<div id="ImgPostBox" >
		<img src="images/mike.jpg" id="ImgPostP">
		<p id="ImgPostN">Michael Maged
		<p id = "ImgPostD"> 
					. Nov 26
				</p>
		</p>
				
				<p id="ImgPosttxt">Helw el nezam elgdeeeed :)
				<img src="images/shot.jpg" id="ImgPostPP"></p>
				<div id="line"></div>	
				<div >				
					<span id="like">
						<i class="fa fa-heart-o" aria-hidden="true"></i>
			    		<input type="text" id="comment" placeholder="Comment...">
			    	</span>
				</div>
		</div>
	</td>
</tr>
<tr>
	<td>
		<div id="ImgPostBox" >
		<img src="images/mike.jpg" id="ImgPostP">
		<p id="ImgPostN">Michael Maged
		<p id = "ImgPostD"> 
					. Nov 26
				</p>
		</p>
				
				<p id="ImgPosttxt">Helw el nezam elgdeeeed :)
				<img src="images/shot.jpg" id="ImgPostPP"></p>
				<div id="line"></div>	
				<div >				
					<span id="like">
						<i class="fa fa-heart-o" aria-hidden="true"></i>
			    		<input type="text" id="comment" placeholder="Comment...">
			    	</span>
				</div>
		</div>
	</td>
</tr>
<tr>
	<td>
		<div id="ImgPostBox" >
		<img src="images/mike.jpg" id="ImgPostP">
		<p id="ImgPostN">Michael Maged
		<p id = "ImgPostD"> 
					. Nov 26
				</p>
		</p>
				
				<p id="ImgPosttxt">Helw el nezam elgdeeeed :)
				<img src="images/shot.jpg" id="ImgPostPP"></p>
				<div id="line"></div>	
				<div >				
					<span id="like">
						<i class="fa fa-heart-o" aria-hidden="true"></i>
			    		<input type="text" id="comment" placeholder="Comment...">
			    	</span>
				</div>
		</div>
	</td>
</tr>
</table>
</div>


<script type="text/javascript">
$('#submitFormBt').hide();
$('#bor').hide();
$('#camera').hide();
	$('#newPost').focus(function()
{
    /*to make this flexible, I'm storing the current width in an attribute*/
    $(this).attr('data-default', $(this).height());
    $(this).animate({ height: 100 }, 'slow');
    $('#submitFormBt').show(800);
    $('#bor').show(800);
	$('#camera').show(800);
}).blur(function()
{
    /* lookup the original width */
    var h = $(this).attr('data-default');
    $(this).animate({ height: 35 }, 'slow');
    $('#submitFormBt').hide(800);
    $('#bor').hide(1000);
	$('#camera').hide(800 );
});


</script>
<script>
	function hover(element) {
    element.setAttribute('src', 'images/notihover.png');
	}
	function unhover(element) {
    element.setAttribute('src', 'images/noti.png');
	}
	function hover1(element) {
    element.setAttribute('src', 'images/msghover.png');
	}
	function unhover1(element) {
    element.setAttribute('src', 'images/msg.png');
	}
</script>
</body>
</html>