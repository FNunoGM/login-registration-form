<?php
// Include your database connection file
require_once "db_connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Perform SQL query to check if the user exists and the password is correct
    $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($connection, $query);

    if (mysqli_num_rows($result) == 1) {
        // User exists and password is correct
        // Start a session and store user data if needed
        session_start();
        $_SESSION["email"] = $email;
        // Redirect to dashboard or homepage
        header("Location: dashboard.php");
        exit();
    } else {
        // User doesn't exist or password is incorrect
        echo "<script>document.querySelector('.feedback').textContent = 'Invalid email or password';</script>";
    }
}
?>