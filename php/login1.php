<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="styles/login.css">
</head>
<body>
<?php
$email = $_POST['email'];
$password = $_POST['password'];

if ($email === 'g231210010@ogr.sakarya.edu.tr' && $password === 'g231210010') {
    echo "Hoşgeldiniz \"$email\". Login işlemi başarılı.";
} else {
    header("Location: login.html");
    exit;
}
?>

<html>
<body>


</body>
</html>
</body>
</html>