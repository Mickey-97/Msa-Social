<!DOCTYPE html>
<html>
<head>
	<title></title>
	
	<style type="text/css">

	*:focus {
    outline: none;
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
			top: 0vw;
			font-family: 'PT Sans', sans-serif;
			font-weight: bold;


		}
		#loginform {
			position: absolute;
			left: 2vw;
			font-size: 2vw;
			top: 5vw;

		}
		#email {
			background-color: transparent;
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

		}
		.acbut:hover {
			    
}
		.btnLogin{
			margin-top:15vw;
		  	margin-left:17vw;
		    background-color: #181818; 
		    border-radius: 5px;
		    border:0.1vw #181818;
		    cursor: pointer;
		    font: 0.8vw Lato;
		    color:white;
		    text-align: center;
		    padding-top:0.5vw;
		    padding-left: 3vw;
		    padding-right: 3vw;
		    padding-bottom:0.5vw;
		}
		.btnLogin:hover
		{
		    background-color: #843200;
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
		.error {
			font-size: 12px;
			color :red;
		}

	</style>
	<!-- Latest compiled and minified CSS -->
<?php
require 'libraries.php';

?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
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
	<form action="info.php" method="POST" name="registration">
	<div id="loginBoxes" class="animated fadeIn">
		<h1 style="" id="msasocial">msa social</h1>
		<table id="loginform">
			<td><input type="text" name="firstname" id="email" placeholder="First Name" size="15" onchange="checkname();"></td>
				<td><input type="text" name="lastname" id="email" placeholder="Last Name" size="15" onchange="checkname()"><span id="nameerror" class="error">Error!</span></td>
				<td style="position: absolute; left: 24vw"><input type="password" name="pass" id="email" placeholder="New password" size="30"></td>


			</tr>
			<tr>
				<td style="position: absolute; left: 24vw;  width: 22vw;"">
								<span style="font-size: 0.9vw; font-family: 'Lato'; color: #181818;">Birthday:</span>

				<select name="birthday" oninvalid="this.setCustomValidity('Please insert your birthday')" required oninput="this.setCustomValidity('')" style="font-size: 0.7vw";>
				 <option value="">Day:</option>
				 <?php 
				 for ($i=1; $i < 31; $i++) { 
		echo '<option value="'.$i.'">'.$i.'</option>';
				 }
				 ?>
			</select>
			<select name="birthmonth" oninvalid="this.setCustomValidity('Insert your birthday')" required oninput="this.setCustomValidity('')" style="font-size: 0.7vw;">
				<option value="">Month:</option>
				<option value="January">Jan</option>
				<option value="February">Feb</option>
				<option value="March">Mar</option>
				<option value="April">Apr</option>
				<option value="May">May</option>
				<option value="June">Jun</option>
				<option value="July">Jul</option>
				<option value="August">Aug</option>
				<option value="September">Sep</option>
				<option value="October">Oct</option>
				<option value="November">Nov</option>
 				<option value="December">Dec</option>
			</select>
			<select name="birthyear" oninvalid="this.setCustomValidity('Please enter your bithday')" required oninput="this.setCustomValidity('')" style="font-size: 0.7vw;">
			<option value="">Year:</option>
			<?php 
				 for ($i=2012; $i >1900; $i--) { 
		echo '<option value="'.$i.'">'.$i.'</option>';
				 }
				 ?>
			</select>
				</td>

			</tr>
			<tr>
				<td colspan="3"><input type="text" name="email" id="email" placeholder="Email Address" size="33"></td>

			</tr>
			<tr>
				<td colspan="3">
					<input type="text"  id="email" placeholder="Re-enter Email Address" size="33">
				</td>
				<td style="position: fixed; right: 20.9vw; font-family: 'Lato'; font-weight: bold;">
					<input type="radio" name="gender" value="Male" >  
					<span style="vertical-align: center; font-size: 0.9vw;"> Male</span>  	
				</td>
				<td style="position: fixed; right: 15.9vw;  font-family: 'Lato';font-weight: bold;">
					<input type="radio" name="gender" value="Female">
					<span style="vertical-align: center; font-size: 0.9vw;"> Female</span>  	
				</td>



			<tr>
				
			</tr>
		</table>
		<div>
			<input type="submit" class ="btnLogin" value="Sign Up" />
		</div>
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
<script>
var uname = document.registration.firstname;
var lname = document.registration.lastname;

$('#nameerror').hide();

function checkname () {
		var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters) && lname.value.match(letters) )  
{  
$('#nameerror').hide();
}  
else  
{  
$('#nameerror').show();  
}   
	}
</script>
</body>
</html>