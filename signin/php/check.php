<?php 
$login = filter_var(trim($_POST['login']),FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING); 
$pass = filter_var(trim($_POST['pass']),FILTER_SANITIZE_STRING); 
if(mb_strlen($login)<5||mb_strlen($login)>90){
    echo"Длина логина не допустима";
    exit();
} else if (mb_strlen($name)<3||mb_strlen($name)>50){
    echo"Длина имени не допустима";
    exit();
}
else if (mb_strlen($pass)<2||mb_strlen($pass)>6){
    echo"Длина пароля не допустима(oт 2 до 6 символов)";
    exit();
}
$pass=md5($pass."codewiki");
$mysql= new mysqli('localhost','root','','register-bd');
if ($mysql->query("INSERT INTO users (login,pass,name) VALUES('$login','$pass','$name')")) {
    echo "Данные успешно записаны в базу данных";
    } else {
    echo "Произошла ошибка при записи данных";
    }
$mysql->close();
header('Location: /');
exit()
?>