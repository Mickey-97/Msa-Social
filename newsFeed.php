<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" type="text/css" href="main2.css">
	<title>MSA Social</title>
	<link rel="shortcut icon" type="image/x-icon" href="images/social.ico" />
	<link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:300" rel="stylesheet">
	<style type="text/css">

	</style>
		

	<?php
 session_start();

require 'libraries.php';
require 'libraries.php';
require 'connectDatabase.php';
 session_start();

  $id = $_SESSION['id'];
  $search = mysqli_query($con, "SELECT * FROM amm.register WHERE ID = '$id'");
  $row = mysqli_fetch_array($search,MYSQLI_ASSOC);
  $image = $row['image'];
  $fullname = $row['firstname']." ".$row['lastname'];
  $semester = $row['semester'];
  $fac = $row['faculty'];
    $cov = $row['cover'];
?>
<style type="text/css">
	.dropbtn {
    background-image: url('images/pp.jpg');
    cursor: pointer;
	width: 33px;
	height: 33px;
	border-radius: 50%;
	object-fit: cover;
}

.dropbtn:hover, .dropbtn:focus {
    /*background-color: #3e8e41;*/
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    font-size: 18px;
    z-index: 4;
}

.dropdown-content a {
    color: black;
    padding: 5px 16px;
    text-decoration: none;
    display: block;
}


.show {display:block;}
</style>
<style type="text/css">

	#srchresults img {
		width: 35px;
		height:35px;
		object-fit: cover;
		display: inline;
		border-radius: 50%;
	
	}
	#srchresults li {
		text-align: left;
		font-size: 18px;
		list-style-type: none;
		font-family: 'Lato';
		font-size:15px;
		color:black;
		padding-top:4px;
		padding-bottom: 8px;
		padding-left: 2px;
	}
	#srchresults li:hover {
		background-color: #e8e8e8;
		cursor: pointer;

	}
	#srchresults{
		padding:2px;
		margin:0px;
	}
	#searchtext{
		padding-top:2px;
	}
	#info{
		font-size:8px;
		color:#656565;
	}
</style>
</head>
<body id="body" >
<div id='navbar'  >
	<div class="right"  >
		
	<a href="newsFeed.php" id="Home">msa Social</a>

    <input class="form-control srch" name="srchbox" id="srchbox" placeholder="Search" size="50">
   	<div style="position: absolute; margin-left: 12.8%; margin-top: 3.4%; width: 40.02%; background-color: white; z-index: 4; padding-top:0px; border-bottom:1px solid grey; border-right:1px solid grey; border-left:1px solid grey; border-top:0px solid grey; border-radius:5px;">
   		<ul id="srchresults">
   			<!-- <li ><img src="images/pp.jpg" >Mohanad Hani  <span id="info">.Computer Science</span></li>
   			
   			<li><img src="images/amr.jpg"> Amr Walid</li>
   			
   			<li><img src="images/mike.jpg"> Michael Maged</li> -->
   			
   		</ul>

   	</div>

 	<img id="srchicon" src="images/search.png">
   

    <div style="position: absolute; margin-right: 0px; margin-left:86%;">

    <a href="#"><img  src="images/noti.png" id="Noti" onmouseover="hover(this);" onmouseout="unhover(this);" /></a>
    <a href="#"><img  src="images/msg.png" id="msg" onmouseover="hover1(this);" onmouseout="unhover1(this);" /></a>
    <div class="dropdown">
    	<a href="#"><img src="<?php echo $image; ?>" id="accountP" onclick="myFunction()" class="dropbtn" >
    	
  <div id="myDropdown" class="dropdown-content">
    <a href="profile.php?id=<?php echo $id ?>">Profile</a>
    <a href="firstime.php">Settings</a>
    <a href="destroySession.php">Logout</a>
  </div>
</div></a>
	
	
    </div>

	<a href="profile.php?id=<?php echo $id ?>">
    <div class="cont">
	<img src="<?php echo $cov; ?>" id="cover" >
	 <h1 id="namebox"><?php echo $fullname; ?></h1>
	 <img src="<?php echo $image; ?>" id="pbox">
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
	 <p id="faculty"><?php echo $fac; ?> - <?php echo $semester." Semester" ?></p>
	 <p id="courses">
		<a href="http://msa.edu.eg/msauniversity/computer-science/about"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="http://msa.edu.eg/msauniversity/computer-science/about"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="http://msa.edu.eg/msauniversity/computer-science/about"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="http://msa.edu.eg/msauniversity/computer-science/about"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="http://msa.edu.eg/msauniversity/computer-science/about"><b>CS213</b> Data Structure and Algorithms<br></a>
		<a href="http://msa.edu.eg/msauniversity/computer-science/about"><b>CS213</b> Data Structure and Algorithms<br></a>
	 </p>
	</div>
	<div class="shortcut">
	 <p id="short">SHORTCUTS
	<a href="http://www.msa.edu.eg/msauniversity/student-life/academic-calendar"><button  type="submit" id="li"><img src="images/calendar.png" id="icon">
	<p id="shortc">Weekly Schedule<br></p></button></a>
	<a href="http://www.msa.edu.eg/msauniversity/student-life/academic-calendar"><button  type="submit" id="li"><img src="images/cast.png" id="icon">
	<p id="shortc">MSA Cast<br></p></button></a>
	<a href="http://e-learning.msa.edu.eg/"><button  type="submit" id="li"><img src="images/result.png" id="icon">
	<p id="shortc">Your results<br></p></button></a>
	<a href="http://www.msa.edu.eg/msauniversity/admission/tuition-fees?highlight=YToxOntpOjA7czo0OiJmZWVzIjt9"><button  type="submit" id="li"><img src="images/fees.png" id="icon">
	<p id="shortc">Tuition fees<br></p></button></a>
	</div>
	</p>
	<div id="bor"></div>

 <input type="file" name="fileToUpload" id="fileToUpload" value="" class="hidden">
	
	<div id="newPostBox">

	<img src="<?php echo $image; ?>" id="newPostP">

	<textarea  name="newPost"   id="newPost" onfocus="" placeholder="Say Something !" ></textarea>
	 <button class="acbut" type="submit" onclick="addnewPost();" id="submitFormBt"><span>Post</span></button>
	 <button  type="" class="cameras" id="camera"><img class="cameras" src="images/camera.png" id="camera"></button>
	</div>

	<!-- Pooooooooooooooooooooooosts -->
<table id="postsGroup">
<!-- <tr>
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
</tr> -->
</table>
</div>


<script type="text/javascript">
$(document).ready(function(){
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
	
	$('#camera').click(function() {
$('#fileToUpload').trigger('click');	});

})
// 	$('body').focus(function()
// {
//     var h = $(this).attr('data-default');
//     $(this).animate({ height: 35 }, 'slow');
//     $('#submitFormBt').hide(800);
//     $('#bor').hide(1000);
// 	$('#camera').hide(800 );
// });




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
<script type="text/javascript">
	function addnewPost () {
		var text = $('#newPost').val();
		// var fd = new FormData();
		// fd.append('fileToUpload',$("fileToUpload").val());
		//  // var formData = new FormData($("fileToUpload"));
		 var email = '<?php echo $_SESSION['email']; ?>' ; 
	var img = $('input#fileToUpload').val().replace(/C:\\fakepath\\/i, '');
			console.log(img+"hambozo");

		$.ajax({
			url: 'newpost.php',
			type: 'POST',
			data: {name: text , id:'163465' , email : email,img:img,
			}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		$('#newPost').val('');
		$('input#fileToUpload').val('') ;
	}
</script>
<script type="text/javascript">
	//update posts 
	
	var totalposts = 0;
	setInterval(function(){ 
    //code goes here that will be run every 5 seconds. 
    // 
    // ImgPostNNN 
    $.ajax({
    	url: 'newpostcheck.php',
    	type: 'POST',
    	data : {totalposts : totalposts},
    	success : function(response) {
    	$('#postsGroup').html(response);},
    })
    .done(function() {
    	console.log("success");
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    
    
    
}, 500);

</script>
<script type="text/javascript">
	    $('#srchresults').hide();

$(document).ready(function() {
  $('#srchbox').on('input', function() {
    var userText = $(this).val();
     $.ajax({
    	url: 'searchAccounts.php',
    	type: 'POST',
    	data : {userText : userText},
    	success : function(response) {
    	$('#srchresults').show();
    $('#srchresults').html(response);},
    })
    .done(function() {
    	console.log("successAcc");
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    

   
  })
   $('#srchbox').blur (function () {
   	/* body... */
   		    $('#srchresults').hover(function() {
   		    $('#srchresults').show();
   		    } ).blur(function() {
   		    $('#srchresults').hide();
   		    });


   })
});

</script>
<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>

</body>
</html>