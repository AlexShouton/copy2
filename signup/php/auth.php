<?php 
$login = filter_var(trim($_POST['login']),FILTER_SANITIZE_STRING); 
$name = filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING);  
$pass = filter_var(trim($_POST['pass']),FILTER_SANITIZE_STRING);  
$pass=md5($pass."codewiki"); 
$mysql= new mysqli('localhost','root','','register-bd'); 
$result=$mysql->query("SELECT * FROM users WHERE login='$login' AND pass='$pass'"); 
$user=$result->fetch_assoc(); 
if(!$user){ 
    echo"Такой пользователь не найден"; 
    exit(); 
} 
setcookie('user',$user['name'],time()+3600,"/"); 
$mysql->close(); 
header('Location: /'); 
exit();
?>