<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
</head>
<body>
  <h2>Contact Form Submission Details</h2>
  <?php
  $name = isset($_POST['name']) ? $_POST['name'] : '';
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
  $message = isset($_POST['message']) ? $_POST['message'] : '';
  $birthdate = isset($_POST['birthdate']) ? $_POST['birthdate'] : '';
  $gender = isset($_POST['gender']) ? $_POST['gender'] : '';
  $interest = isset($_POST['interest']) ? $_POST['interest'] : '';
  $subscription = isset($_POST['subscription']) ? $_POST['subscription'] : '';
  $agree = isset($_POST['agree']) ? 'Yes' : 'No';
  
  echo "<p>Name: $name</p>";
  echo "<p>Email: $email</p>";
  echo "<p>Phone: $phone</p>";
  echo "<p>Message: $message</p>";
  echo "<p>Birthdate: $birthdate</p>";
  echo "<p>Gender: $gender</p>";
  echo "<p>Interest: $interest</p>";
  echo "<p>Subscription: $subscription</p>";
  echo "<p>Agree to terms: $agree</p>";
  ?>
</body>
</html>