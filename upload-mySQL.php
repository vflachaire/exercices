<?php
    $connexion = mysqli_connect("localhost","root","","Exercices");
    //phpinfo();
    if (isset($_POST["upload"])) {
        $file = $_FILES['image']['name'];
        $size = $_FILES['image']['size'];

        
        $query = "INSERT INTO upload(image,size) VALUES('media/$file','$size')";
        echo $query."<br>";

        $res = mysqli_query($connexion,$query);

        if ($res) {
            move_uploaded_file($_FILES['image']['tmp_name'], "media/$file");
        }
        else {
            echo("Description de l'erreur :" . mysqli_error($connexion));
        }
    }
    if (isset($_POST["supprimer"])) {
        echo "<p>suppression de l'image ". $_POST['id_image']."</p>";
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload</title>
    <link rel="stylesheet" href="upload-mySQL.css">
</head>

<body>
    <div class="container">
        <div>
            <h3>Upload Image</h3>
            <form action="upload-mySQL.php" method="post" enctype="multipart/form-data" id="form-upload">
                <input type="file" name="image" class="form-control" required>
                <input type="submit" name="upload" name="upload">
            </form>
        </div>
        <h3>Display Image</h3>
        <div class="panel">

            <?php 
                $sel = "SELECT * FROM upload";
                //echo $sel."<br>";
                $que = mysqli_query($connexion,$sel);

                $output = "";
                if (mysqli_num_rows($que) < 1) {
                    $output .= "<p style=\"text-align:center\">Pas d'images disponible</p>";
                }

                while ($row = mysqli_fetch_array($que)) {
                    if (empty($row['size'])) $size_image = "";
                    else 
                    $size_image ="size : ". number_format($row['size'] / 1000,3,',',' ')." kB";
                    $id_image = $row['id'];
                    $output .= "<div><a href=".$row['image']."><img src=".$row['image']." style=\"max-width:300px;height:auto;\"></a><figcaption>".$size_image."</figcaption><form action=\"upload-mySQL.php\" method=\"post\" id=\"form-suppr\"><input type=\"hidden\" name=\"id_image\" value=\"".$row['id']."\"><input type=\"submit\" value=\"supprimer\" 
                    name=\"supprimer\" id=\"".$row['id']."\"></form></div>\n";
                }
            ?>
            <?php echo $output ?>
        </div>
</body>
<script src="upload-mySQL.js"></script>

</html>