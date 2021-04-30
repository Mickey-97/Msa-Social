<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="profile.css">
	<title>Mohanad Hani</title>
	<link rel="shortcut icon" type="image/x-icon" href="images/social.ico" />
	<link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:300" rel="stylesheet">
	<?php
require 'libraries.php';
require 'connectDatabase.php';
 session_start();

$id = $_GET['id'];
  $search = mysqli_query($con, "SELECT * FROM amm.register WHERE ID = '$id'");
  $row = mysqli_fetch_array($search,MYSQLI_ASSOC);
  $image = $row['image'];
  $cov = $row['cover'];
  $country = $row['location'];
  $city = $row['city'];
  $link = $row['link'];
  $bio = $row['bio'];
  $fac= $row['faculty'];
  $fullname = $row['firstname']." ".$row['lastname'];
  echo $id;
?>
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
	<div class="right" >
		
	<a href="newsFeed.php" id="Home">msaSocial</a>
<input type="file" name="fileToUpload" id="fileToUpload" value="" class="hidden">
    <input type="text" class="form-control srch" id="srchbox" placeholder="Search" size="50">
    	<div style="position: absolute; margin-left: 12.8%; margin-top: 3.7%; width: 40.02%; background-color: white; z-index: 4; padding-top:0px; border:1px solid grey; border-radius:5px;">
   		<ul id="srchresults">
   			<!-- <li ><img src="images/pp.jpg" >Mohanad Hani  <span id="info">.Computer Science</span></li>
   			
   			<li><img src="images/amr.jpg"> Amr Walid</li>
   			
   			<li><img src="images/mike.jpg"> Michael Maged</li> -->
   			
   		</ul>

   	</div>
    <button class="btn btn-default srch" type="submit" id="srchicon"><i class="glyphicon glyphicon-search"></i></button>
    <div style="position: absolute; margin-right: 0px; margin-left:86%;">
    <a href="#"><img  src="images/noti.png" id="Noti" onmouseover="hover(this);" onmouseout="unhover(this);" /></a>

    <a href="#"><img  src="images/msg.png" id="msg" onmouseover="hover1(this);" onmouseout="unhover1(this);" /></a>
    	<a href="#"><img src="<?php echo $image ?>" id="accountP"></a>
    </div>

	<div >

		<div id="ov">
			<img src="<?php echo $cov ?>" class="pcover">
		</div>
		<img src="<?php echo $image ?>" id="profP">
		<button type="button" id="follow" onclick="following()">Follow</button>
	</div>
	<div > 
			<div >
				<h1 align="center" id="profilename"><?php echo $row['firstname']; ?></h1>
				<input type="text" id="bio" value="This is your bio, you can write whatever you want here." onchange="updatebio()" style="background-color: transparent; border:0px;" >
				
<!-- 				<br>Click me to change.
 -->				<!-- </p> -->
				<hr id="profline">

			</div>
		</div>
<div class="shortcutp">
	 <p id="short">
	<button  type="submit" id="li"><img src="images/photos.png" id="icon">
	<p id="shortc">Photos<br></p></button>
	<button  type="submit" id="li"><img src="images/friends.png" id="icon">
	<p id="shortc">Following<br></p></button>
	<button  type="submit" id="li"><img src="images/groups.png" id="icon">
	<p id="shortc">Groups<br></p></button>
	<button  type="submit" id="li"><img src="images/cast.png" id="icon">
	<p id="shortc">MSA Cast<br></p></button>
	</div>

<div class="recent">
	<p id="recentabout">About<br></p>
	<hr id="proflinerecent">
	<img src="images/location.png" id="iconrecent">
	<p id="recenttext"><?php echo $country." ,".$city; ?></p>
	<img src="images/cake.png" id="iconrecent2">
	<p id="recenttext">Born in 21/10/1996</p>
	<img src="images/link.png" id="iconrecent2">
	<p id="recenttext"><?php echo $link; ?></p>
	<img src="images/gradp.png" id="iconrecent3">
	<p id="recenttext"><?php echo $fac; ?></p>

	</div>

	<!-- <div id="newPostBox" style="margin-top:-12px">

	<img src="images/pp.jpg" id="newPostP">

	<textarea  name="newPost"  id="newPost" onfocus="expandpost()" placeholder="Say Something !" ></textarea>
	 <button class="acbut" type="submit" id="submitFormBt"><span>Post</span></button>
	 <button  type="login" id="camera"><img src="images/camera.png" id="camera"></button>
	</div>
	 -->
	 <div id="newPostBox" style="margin-top:-12px">

	<img src="<?php echo $image; ?>" id="newPostP">

	<textarea  name="newPost"   id="newPost" onfocus="" placeholder="Say Something !" ></textarea>
	 <button class="acbut" type="submit" onclick="addnewPost();" id="submitFormBt"><span>Post</span></button>
	 <button  type="" class="cameras" id="camera"><img class="cameras" src="images/camera.png" id="camera"></button>
	</div>

<table id='postsGroup'>
<!-- <tr>
	<td>
		<div id="ImgPostBox" >
		<img src="images/pp.jpg" id="ImgPostP">
		<p id="ImgPostN">Mohanad Hani
		<p id = "ImgPostD"> 
					. Jan 5
				</p>
		</p>
				
				<p id="ImgPosttxt">Photography Beauty
				<img src="images/pic.jpg" id="ImgPostPP"></p>
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
// 	.blur(function()
// {
//     /* lookup the original width */
//     var h = $(this).attr('data-default');
//     $(this).animate({ height: 35 }, 'slow');
//     $('#submitFormBt').hide(800);
//     $('#bor').hide(1000);
// 	$('#camera').hide(800 );
// });


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
update ();
	function following () {
		var currentUser = '<?php echo $_SESSION['id']; ?>' ;
		var currentOpen = '<?php echo $_GET['id']; ?>';
		 $.ajax({
    	url: 'followUser.php',
    	type: 'POST',
    	data : {currentUser : currentUser,currentOpen:currentOpen,},
    	success : function(response) {update ();}
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
    

		

	}
	function update () {
		var currentUser = '<?php echo $_SESSION['id']; ?>' ;
		var currentOpen = '<?php echo $_GET['id']; ?>';
		 $.ajax({
    	url: 'isfollowing.php',
    	type: 'POST',
    	data : {currentUser : currentUser,currentOpen:currentOpen,},
    	success : function(response) {
    		    	console.log(response);

    		if(response == "heis"){
    			$('#follow').css({
    				opacity: '0',
    				property2: 'value2'
    			});
    				$("#bio").prop("readonly", false);

    			
    		}else if(response == "yes"){
    			$('#follow').css({
    				color: 'whitef',
					backgroundColor: '#004e77'});
    			$('#follow').html("Following");
    			$('#follow').attr({
    				onclick: ''
    				
    			});
    		}
    	}
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
    
	}
</script>
<script type="text/javascript">
	//update posts 
	var userid = '<?php echo $_GET['id']; ?>';
	var totalposts = 0;
	setInterval(function(){ 
    //code goes here that will be run every 5 seconds. 
    // 
    // ImgPostNNN 
    $.ajax({
    	url: 'getmyposts.php',
    	type: 'POST',
    	data : {id : userid},
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
<script type="text/javascript">
	$('#bio').val('<?php echo $bio;?>');
	$("#bio").prop("readonly", true);
function updatebio() {
	var newbio = $('#bio').val();
	$.ajax({
			url: 'upbio.php',
			type: 'POST',
			data: {bio: newbio , 
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
}
</script>
</body>
</html>