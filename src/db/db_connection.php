<?php
$host = "localhost"; // or your MySQL server hostname
$username = "root"; // your MySQL username
$password = "250591"; // your MySQL password
$database = "users"; // your MySQL database name

// Create connection
$connection = new mysqli($host, $username, $password, $database);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
?>