<?php
// Include your database connection file
require_once "db_connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $email = mysqli_real_escape_string($connection, $_POST["email"]);
    $password = mysqli_real_escape_string($connection, $_POST["password"]);

    // Hash the provided password
    $hashed_password = md5($password); // You should use a more secure hashing algorithm like bcrypt

    // Perform SQL query using prepared statement
    $query = "SELECT * FROM users WHERE email = ? AND password = ?";
    $stmt = mysqli_stmt_init($connection);
    if (mysqli_stmt_prepare($stmt, $query)) {
        mysqli_stmt_bind_param($stmt, "ss", $email, $hashed_password);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

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
            $response = array("error" => "Invalid email or password");
            echo json_encode($response);
        }
    }

    mysqli_stmt_close($stmt);
}
?>
