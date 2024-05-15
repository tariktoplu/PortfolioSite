<?php
$email = $_POST['email'];
$password = $_POST['password'];

if ($email === 'g231210010@sakarya.edu.tr' && $password === 'g231210010') {
    echo "Hoşgeldiniz \"$email\". Login işlemi başarılı.";
} else {
    header("Location: login.html");
    exit;
}
