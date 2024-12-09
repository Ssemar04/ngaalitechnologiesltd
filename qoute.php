<?php  
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    // Gather and sanitize input data  
    $gname = htmlspecialchars(trim($_POST['gname']));  
    $gmail = htmlspecialchars(trim($_POST['gmail']));  
    $cname = htmlspecialchars(trim($_POST['cname']));  
    $cage = htmlspecialchars(trim($_POST['cage']));  
    $message = htmlspecialchars(trim($_POST['message']));  

    // Set the recipient email address  
    $to = "codesman04@gmail.com"; // Replace with the website owner's email address  

    // Set the subject  
    $subject = "New Quote Request from $gname";  

    // Build the email content  
    $email_content = "Name: $gname\n";  
    $email_content .= "Email: $gmail\n";  
    $email_content .= "Child Name: $cname\n";  
    $email_content .= "Child Age: $cage\n";  
    $email_content .= "Message: $message\n";  

    // Set the email headers  
    $headers = "From: $gname <$gmail>\r\n";  
    $headers .= "Reply-To: $gmail\r\n";  

    // Send the email  
    if (mail($to, $subject, $email_content, $headers)) {  
        // Redirect to a thank you page or display a success message  
        echo "Thank you! Your request has been sent.";  
    } else {  
        echo "Oops! Something went wrong, please try again.";  
    }  
} else {  
    // Not a POST request  
    echo "Invalid request.";  
}  
?>