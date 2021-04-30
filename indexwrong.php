<!DOCTYPE html>
<html>
<head>
	<title></title>
	
	<style type="text/css">

	*:focus {
    outline: none;
}
input[type="password"]::-webkit-input-placeholder {
color: red ;
}
 
input[type="password"]:-moz-placeholder { /* Firefox 18- */
color: red;  
}
 
input[type="password"]::-moz-placeholder {  /* Firefox 19+ */
color: red ;  
}
 
input[type="password"]:-ms-input-placeholder {  
color: red ;  
}

		#welcome {
			height: 20vw;
			background-color: white;
		}
		#weltext {
			position: relative;
			width: 100px;
			left: 47.3vw;
			top: 6.4vw;
			font-family: 'Lato', sans-serif;
			font-size: 1.5vw;
		}
		#univbackground {
			height: 24vw;
			width: 100vw;
			object-fit: cover;
			position: absolute;
			left: 0vw;
			top :14vw;
		}
		#pic {
		position: absolute;
		right:104vw;
		top: 19vw;
		}
		.pics {
			background-color: black; 
			width: 8vw; height: 8vw;
			 border-radius: 50%; 
			 border: 0px;
			 position: absolute;
		}
		#pic1 {
			left : 10vw;
			top: 2vw;
			object-fit: cover;
		}
		#pic2 {
			left :25vw;
			top: 7vw;
			object-fit: cover;


		}
		#pic3 {
			left :40vw;
			top: 2vw;
			object-fit: cover;


		}
		#txt1 {
			text-align: center;
			left: 20vw;
			position: absolute;
			width: 18vw;
			top: -1vw;
			font-size: 1.7vw;
			font-family: 'Lato', sans-serif;
			font-weight: 400;
			line-height: 1.5;

		}
		#loginBoxes {
			border-left: 1px solid black;
			position: absolute;
			height: 20vw;
			width: 45vw;
			left: 50vw;
			top: 16vw;

		}
		#msasocial {
			text-align: center;
			position: absolute;
			left: 40%;
			font-size: 1.7vw;
			top: 3vw;
			font-family: 'PT Sans', sans-serif;
			font-weight: bold;


		}
		#loginform {
			position: absolute;
			left: 22%;
			font-size: 2vw;
			top: 7vw;

		}
		#email {
			background-color: transparent;
			color:black;
			font-family: Lato;
			border : 0px;
			border-bottom: 1px solid grey;
			font-size: 0.9vw;
		}
		#password {
			background-color: transparent;
			border : 0px;
			font-family: Lato;
			border-bottom: 1px solid grey;
			font-size: 0.9vw;
		}
		#password:focus,#email:focus {
			

			border-bottom: 2px solid black;
			
		}
		input[type="password"].big-dog::-webkit-input-placeholder {
 		 color: red;
		}
		#fixedfooter {
			font-family: 'Lato', sans-serif;
			font-size: 0.7vw;
			font-weight: bold;
			position:fixed;
			bottom:0px;
			left:0px;
			width:99%;
			color:#000000;
			background:#FFFFFF;
			padding:8px;
			text-align: right;
		}
		#forgot {
			font-size: 0.5vw;
			font-family: Lato;
			position: absolute;
			right: 0vw;
			vertical-align: bottom;
			color: grey;
		}
		#loginId{
			font-size: 0.7vw;
			text-decoration: underline;
			color: grey;
			font-family: Lato;
		}
		#remember {
			position: absolute;
			color: black;
			right: 0;
		}
		.acbut {
			
		    margin-left: 0.2vw;
		    background-color: #3d2200; 
		    border-radius: 5px;
		    border:0.1vw #181818;
		    cursor: pointer;
		    font: 0.8vw Lato;
		    color:white;
		    text-align: center;
		    
		    padding-top:0.5vw;
		    padding-bottom:0.5vw;
		}
		.acbut:hover {
			    background-color: #843200;
		}

		.btnLogin
		{
			margin-top:2vw;
			margin-left: 2.8vw;
		    background-color: #00233d; 
		    border-radius: 5px;
		    border:0.1vw #181818;
		    cursor: pointer;
		    font: 0.8vw Lato;
		    color:white;
		    text-align: center;
		    
		    padding:0.5vw 3vw;
		}
		.btnLogin:hover
		{
		    background-color: #004d84; 
		    
		   
		}
		#other_links {
		
			
			
		}
		#co_other  {
			padding:10px;
		
		}
		.logo {
			position :absolute;
			left: 48vw;
			top: 2vw;
		}
		a , a:hover, a:active , a:visited ,a:link{
			color: black;
			font-family: 'Lato', sans-serif;
			text-decoration: none;
		}

	</style>
	<!-- Latest compiled and minified CSS -->
<?php 
session_start();
if(isset($_GET["kill"])){
    if($_GET["kill"]==1)session_destroy();

}
if(isset($_SESSION['email'])){

header('Location: newsFeed.php');


}


?>

<?php
require 'libraries.php';

?>
</head>
<body>
<div id="welcome">
	<h1 style=" vertical-align: bottom;" id="weltext">Welcome</h1>
	<a href="index.php"><img src="images/logo.png" style="height: 4.5vw; width: 4.5vw;" class="logo"></a>

</div>
<div id="other_links">
	
</div>
<div id="signindiv">
	<img src="background1.jpg" id="univbackground">
	<div id="pic">
		<img src="images/img1.jpg" style="" class="pics" id="pic1">
		<img src="images/img4.jpg" style="" class="pics" id="pic2">
		<img src="images/img2.jpg" style="" class="pics" id="pic3">
		<h2 id="txt1">Better interaction <br> More Fun</h2>
	</div>

	<div id="loginBoxes">
		<h1 style="" id="msasocial">msa social</h1>
		<form action="logintest.php" method="post">
		<table id="loginform">
			<tr>
				<td><input type="text" name="email" id="email" placeholder="Email Address" size="50"></td>

			</tr>
			<tr>
				<td><input type="password" name="password" id="password" placeholder="Wrong Password!" size="50" value=""></td>
				<td><span id= "forgot">Forgot your password?</span></td>
				
			</tr>
			<tr>
				<td id="loginId">
				 	<span>Login with college ID</span>
				 	
				 	<span id="remember" style="text-align: right; font-size: 0.7vw;">
				 	<input type="checkbox" name="" style="height: 0.6vw; width: 0.6vw;">
				 	Remember me
				 	</span>
				</td>

			</tr>

			<tr>
				<td>
				
					<input type="submit" class="btnLogin" value="LOGIN" 
 					tabindex="4">
					<input type="signup" class ="acbut" onclick="location.href='signup.php';" value="Sign Up" />
				</td>
			</tr>
		</table>
		</form>
	</div>
</div>
<div id="fixedfooter">

<table >
<tr>
<td style="width:91vw; text-align:left; ">
	<a style="padding-right:0.5vw;" href="http://www.msa.edu.eg/msauniversity/about-msa/welcome-to-msa/terms-of-use" target='_blank' > Terms</a>
		<a style="padding-right:0.5vw;" href="http://www.msa.edu.eg/msauniversity/about-msa/welcome-to-msa/privacy-policy" target='_blank'> Privacy</a>
		 <a style="padding-right:0.5vw;" href="http://www.msa.edu.eg/msauniversity/contacts/contact-information" target='_blank'> Support</a>
</td>
<td style=" ">
	© MSA Univesity 2016
</td>
</tr>
</table></div>
</div>
</body>
</html>