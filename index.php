<form method="POST" action="index.php">
    <label for="email">Email:</label>
    <input type="text" name="email" id="email" placeholder="enter your email" />
    <textarea name="message"  cols="30" rows="10"></textarea>
    <input type="submit" value="Ok" />
</form>
<?php 

$email=$_POST['email'];
$subject = 'Hello';
$message = $_POST['message'];

mail($email, $subject, $message);


?>