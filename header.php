<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		*:focus {
    outline: none;
}
	::-webkit-input-placeholder {
   color: grey;
   font-family: 'Lato', sans-serif;
	font-weight: lighter;
}

:-moz-placeholder { /* Firefox 18- */
   color: grey;  
      font-family: calibri light ;

}

::-moz-placeholder {  /* Firefox 19+ */
   color: grey;  
      font-family: calibri light ;

}

:-ms-input-placeholder {  
   color: grey;  
      font-family: calibri light ;

}
		#navbar {
			position:fixed;
			display:flex;
			text-align: center;
			top:0px;
			left:0px;
			width:100%;
			height:42px;
			font-size: 23pt;
			color:#c4c1c1;
			background:#1D1D1D;
			
		}
		#body {
			width:1024px;
			margin:0 auto;
			overflow: hidden;
			background-color: #FFFFFF;

		}
		#searchnav {
			width: 457px;
			height:28px;
		}
		#srchicon {
			position: absolute;
			background-color: #e4e4e4;
			border:0px;
			border-left: 1px solid black;
			border-radius: 1px 5px 5px 1px;
			width: 50px;
			height:27px;
			left:540px;
			top :7px;

		}
		#srchicon:hover{
			background-color: #c1c1c1;
		}
		#srchbox {
			width: 457px;
			font-family: 'Lato';
			font-weight: bold;
			top :7px;
			height:27px;
			left:130px;
			position: absolute;
			border-radius: 5px;
		}
		#Home , #Messages,#separatorHM,#accountFN,#separatorFN ,#Notifications{
		color : #dadada;
		position :absolute;
		left: 5px;
		font-size: 18pt;
		top :4px;
		
		font-weight: 300;
		font-family: 'PT Sans', sans-serif;

		}
		#Home:hover{
			text-decoration: none;
		}
		#separatorHM {
			left: 16.6vw;
		}
		#separatorFN {
			left: 73.5vw;
			font-size: 1.7vw;
			top: 0.5vw;
		}
		#Messages {
			left : 17.3vw;
		}
		#accountFN {
		left:59vw;
		width: 14vw;
		text-align: right;
		}
		#accountP{
			top:0px;

			margin-bottom:5px;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			object-fit: cover;
		}
		#Noti{
			margin-bottom:6px;
			width: 24px;
			margin-right:6px;	
		}
		#msg{
			margin-bottom:6px;
			width: 24px;
			margin-right:20px;	
		}
		#Notifications {
			left: 75.7vw;
			font-weight: 300;
		}
		#accountNotP{
			
			     position: absolute;
    left: -16vw;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto; 
    height: 4vw;
    width: 4vw;
		}
		#newPostBox {
			width: 18vw;
			display: block;
			margin-top: 1vw;
			
		}
		#newPost {
			padding: 0.4vw;
			border: 1px solid grey;
			padding-left: 5vw;
			margin-bottom: 2vw;
			font-size: 0.9vw;
						resize: none;
			

		}
		#newPostP {
			width: 3vw;
			height: 3vw;
			position: relative;
			left: 1.5vw;
			top: 2.5vw;
			border-radius: 50%;
			box-shadow: 1px 1px 1px #000000;
		}
		#ImgPostBox {
			width: 30vw;
			display: block;
			left: 35vw;
			top: 12vw;
			/*height: 40vw;*/
			background-color: white;
			padding: 0vw 1.5vw 0vw 1.5vw;
			border: 1px solid grey;
			

		}
		#ImgPost {
			padding: 0.4vw;
			border: 1px solid grey;
			padding-left: 5vw;
			padding-bottom: 18vw;
			margin-bottom: 2vw;

		}
		#ImgPostP {
			width: 4vw;
			height: 4vw;
			left: -0.6vw;
			border-radius: 50%;
			top: -1.1vw;
						box-shadow: 1px 1px 1px #000000;
									position: relative;


		}
		#ImgPostN {
			left: 0.7vw;
			top: -0.5vw;
								font-family: 'Lato', sans-serif;
											color: #8f4d14;
			padding-left: 0.2vw;
		}
		#ImgPostD {
			color: grey;
			font-size: 0.55vw
		}
		#ImgPosttxt {
						
						padding-bottom: 1vw;
						margin: 0px;
						position: relative;
						top: -0.6vw;

		}
		#ImgPostlikeComment {
			top: 17.8vw;
			left: 1vw;
			width:27vw;
			border-top: 1px solid grey;
		}
		#ImgPostlikeComment span i {
			color: black;
			opacity: 0.5;
		}
		#ImgPostPP {
			border: 1px solid #c9c9c9;
			margin-top: 0vw;
			width :27vw;
			left: 2vw;
			height: 20vw;
			object-fit: cover;
			top: -0.5vw;
			
		}
		#submitFormBt {
			position: absolute;

			left :60vw;
			top: 10.7vw;
			width: 4vw;
			font-size: .6vw;
			display: inline;
			padding: 0.2vw;
			border-radius: 3px;
			background-color: #930e49;
		}
		#submitFormBt:hover {
			background-color: #660831;
		}
		.acbut {
			font-size: 1vw;
			padding: 1vw 3vw 1vw 3vw;
			background-color: #181818;
			font-family: Lato;
			color: white;
			border:0px solid grey;
			border-radius: 1vw 1vw 1vw 1vw;
		}
		.right{
			width:1024px;
			min-width: 1024px;
			margin:0 auto;
			position: relative;
			object-fit: cover;
		}
		#slideshow {
 			
			

		}
		.pic{
			border-radius: 10px;
			 border:1px solid black;
			width:1000px;
			height:300px;
			object-position: 50% 0%;
			object-fit: cover;
	
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
<body id="body">
<div id='navbar' >
	<div class="right">
		
	<a href="#" id="Home">msa Social</a>

    <input type="text" class="form-control srch" id="srchbox" placeholder="Search" size="50">
    <button class="btn btn-default srch" type="submit" id="srchicon"><i class="glyphicon glyphicon-search"></i></button>
   

    <div style="position: absolute; margin-right: 40px; margin-left:860px;">


    <a href="#"><img  src="images/noti.png" id="Noti" onmouseover="hover(this);" onmouseout="unhover(this);" /></a>

    <a href="#"><img  src="images/msg.png" id="msg" onmouseover="hover1(this);" onmouseout="unhover1(this);" /></a>
    	<a href="#"><img src="images/pp.jpg" id="accountP"></a>
	
	
    </div>
    

</div>

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