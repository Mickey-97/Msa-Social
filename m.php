<?php
$username = "root";
$password = "";
$hostname = "localhost";

//connecting to the database

$con = mysqli_connect($hostname, $username, $password) 
	or die ("Unable to connect to MYSQL");
//===================================================
session_start();	
$bio= $_POST['bio'];
$link= $_POST['link'];
$faculty = $_POST['faculty'];
$country = $_POST['country'];
$city = $_POST['city'];
$semester = $_POST['semester'];


$target_dir = "Images/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);


// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}


$target_dir = "Images/";
$target_file2 = $target_dir . basename($_FILES["fileToUpload2"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);


// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

$email = $_SESSION['email'];








mysqli_query($con,"UPDATE amm.register SET `firsttime` = '1', `bio` = '$bio', `link` = '$link', `faculty` = '$faculty', `location` = '$country', `city` = '$city', `cover` = '$target_file2', `semester` = '$semester', `image` = '$target_file' WHERE `register`.`email` = '$email'");

 // INSERT INTO amm.register(bio,link,faculty,location,city,semester,image,cover) VALUES (,'$link','$faculty','$country','$city','$semester','$target_file','$target_file2') 
?>	

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta http-equiv="refresh" content="0; newsFeed.php" />

</head>
<body>
	<p><a href="newsFeed.php">Redirect</a></p>
</body>
</html>