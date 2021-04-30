<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="firsttime1.css">
	<title>MSA Social - Welcome</title>
	<link rel="shortcut icon" type="image/x-icon" href="images/social.ico" />
	<link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:300" rel="stylesheet">
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
		
		#slideshow {

		}
		.pic{
			border-radius: 30px;
			 border:1px solid black;
			 border-color: rgba(255,255,255,0.5);
			 opacity: 1;
			width:950px;
			height:300px;
			object-position: 50% 50%;
			object-fit: cover;
	
		}
		h1 span{

			
			color: black; 
   			font-family:'lato'; 
   			font-size:17pt;

		}
		body{

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
		
	<a href="newsFeed.php" id="Home">msa Social</a>

    <input type="text" class="form-control srch" id="srchbox" placeholder="Search" size="50">
    <button class="btn btn-default srch" type="submit" id="srchicon"><i class="glyphicon glyphicon-search"></i></button>
   

    <div style="position: absolute; margin-right: 40px; margin-left:860px;">


    <a href="#"><img  src="images/noti.png" id="Noti" onmouseover="hover(this);" onmouseout="unhover(this);" /></a>

    <a href="#"><img  src="images/msg.png" id="msg" onmouseover="hover1(this);" onmouseout="unhover1(this);" /></a>
    	<a href="#"><img src="images/pp.jpg" id="accountP"></a>
	
	
    </div>
    

<div id="slideshow">
   <div >
     <img class="pic" src="Images/1.jpg">
   </div>
   <div>
     <img class="pic" src="Images/2.jpg">
   </div>
</div>

<div id="welcome">
	Welcome To msaSocial 
</div>

<div id="newform">
	

<form action="m.php" method="POST" enctype="multipart/form-data">

  
<table align="center" cellpadding = "8" >

 <tr align="center">
<tr>
<td ><p id="txt">
   <img id="blah" src="images/pd.jpg" alt="your image" />
<input type='file' onchange="readURL(this);" id="fileToUpload" name='fileToUpload' />
 </p>
</td>
</tr>
<tr>
<td><p id="txt">
   <img id="blah2" src="images/coverd.jpg" alt="your image" />
<input type='file' onchange="readURL2(this);" id="fileToUpload" name='fileToUpload2'  />
 
</td>
</tr>
<tr>
<td><input type="text"  name="bio" maxlength="30" placeholder="Enter Your Bio" id="field">

</td>
 </tr>
 <tr>
 <td>
<select name="faculty" id="facu" oninvalid="this.setCustomValidity('Insert your birthday')" required oninput="this.setCustomValidity('')" >
				<option  value="">Choose your Faculty</option>
				<option value="Arts and Design">Arts and Design</option>
				<option value="Biotechnology">Biotechnology</option>
				<option value="Computer Science">Computer Science</option>
				<option value="Dentistry">Dentistry</option>
				<option value="Engineering">Engineering</option>
				<option value="Languages">Languages</option>
				<option value="Managment Sciences">Managment Sciences</option>
				<option value="Pharmacy">Pharmacy</option>
			</select>
</td>
 </tr>
  <tr>
 <td>
<select id="facu" name="semester" oninvalid="this.setCustomValidity('Please enter your bithday')" required oninput="this.setCustomValidity('')" ">
			<option value="">Semester</option>
			<?php 
				 for ($i=10; $i >0; $i--) { 
		echo ' <option value=" '.$i.'">Semester '.$i.'</option>';
				 }
				 ?>
			</select>
</td>
 </tr>
<tr>
<td><input type="text"  name="country" maxlength="30" placeholder="Country" id="field">

</td>
 </tr>
 

 <td><input type="text" name="city"  placeholder="City"  
             maxlength="30" id="field" />
 
 </td>
 </tr>

  

 <tr>

 <td><input type="text" name="link" maxlength="100" placeholder="Social Network Link" id="field" />
        </td>
 </tr>

 </td>
 </tr>

 <tr>
 <td colspan="2" align="center">

<input type="submit" class="btnLogin" value="Submit" tabindex="4">
 
 </td>
 </tr>
 </table>
  
 </form>
</div>

<script>
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

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

	     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                        .width(100)
                        .height(100);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
        function readURL2(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah2')
                        .attr('src', e.target.result)
                        .width(100)
                        .height(60	);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
</script>
</body>
</html>