<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode(["message" => "Methode nicht erlaubt."]);
    exit();
}

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->message)
) {
    require_once __DIR__ . '/../vendor/autoload.php';

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
    $dotenv->load();

    $to_email = $_ENV['CONTACT_EMAIL'];
    $subject = "Neue Kontaktanfrage von " . strip_tags($data->name);

    $message_content = "Name: " . strip_tags($data->name) . "\n";
    $message_content .= "E-Mail: " . strip_tags($data->email) . "\n";
    $message_content .= "Telefon: " . strip_tags($data->phone ?? '-') . "\n\n";
    $message_content .= "Nachricht:\n" . strip_tags($data->message) . "\n";

  $headers = "From: " . $_ENV['FROM_EMAIL'] . "\r\n" .
               "Reply-To: " . strip_tags($data->email) . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to_email, $subject, $message_content, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Nachricht erfolgreich gesendet."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "E-Mail konnte nicht gesendet werden."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Unvollständige Daten."]);
}
?>
