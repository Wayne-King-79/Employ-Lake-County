<?php

$firstname = $lastname = $companyname = $worktitle = $emailaddress = $password = "";

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = cleanInput($_POST["firstName"]);
    $lastname = cleanInput($_POST["lastName"]);
    $companyname = cleanInput($_POST["companyName"]);
    $worktitle = cleanInput($_POST["workTitle"]);
    $emailaddress = cleanInput($_POST["email"]);
    $password = cleanInput($_POST["password"]);

    if(empty($firstname)) {
        header('Location: http://employlakecounty.org/manager/error.html');
    }

    if(empty($lastname)) {
        header('Location: http://employlakecounty.org/manager/error.html');
    }

    if(empty($companyname)) {
        header('Location: http://employlakecounty.org/manager/error.html');
    }

    if(empty($worktitle)) {
        header('Location: http://employlakecounty.org/manager/error.html');
    }

    if(empty($emailaddress)) {
        header('Location: http://employlakecounty.org/manager/error.html');
    }

    if(empty($password)) {
        header('Location: http://employlakecounty.org/manager/error.html');
    }
}

function cleanInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>