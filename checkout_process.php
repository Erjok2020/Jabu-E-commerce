<?php
// Retrieve form data
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$address = $_POST['address'];
$phone = $_POST['phone'];

// Here, you would typically save the order details to a database or perform other processing

// Redirect to thank you page
header("Location: thank_you.php");
exit;
?>
