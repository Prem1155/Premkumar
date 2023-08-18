<?php


// Connect to the database (replace with your database credentials)
$host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'students_details';

$conn = mysqli_connect($host, $db_user, $db_pass, $db_name);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


// Get form data
$student_id = $_POST['student_id'];
$student_name = $_POST['student_name'];
$course_id = $_POST['course_id'];
$course_name = $_POST['course_name'];
$qualification = $_POST['qualification'];
$year_passed = $_POST['year_passed'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$phone = $_POST['phone'];


// Insert data into the student_details table
$sql_student = "INSERT INTO resgistration (student_id, student_name, course_id, course_name, qualification, year_passed, dob, email, phone) VALUES ('$student_id', '$student_name', '$course_id', '$course_name', '$qualification', '$year_passed', '$dob', '$email', '$phone')";

if (mysqli_query($conn, $sql_student)) {
    // Data inserted successfully, send email
    $to = 'kavithabanu1996@gmail.com';
    $subject = 'New Student Registration';
    $message = "A new student has registered:" . "\r\n" . "Name: $student_name" . "\r\n" . "Email: $email" . "\r\n" . "Phone: $phone";
     mail($to, $subject, $message);

    // Redirect to welcome page
    header('Location: welcome.php');
} else {
    echo "Error: " . $sql_student . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
