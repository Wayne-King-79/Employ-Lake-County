<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=ASCII");

$conn = new mysqli("employlakecountyorg.ipagemysql.com", "lcfjobs", "lcfjobs", "lcfjobs");

if( !$conn ) {
    die('Could not connect to database' . mysqli_error());
}

$result = $conn->query("SELECT * FROM jobs ORDER BY id DESC");
$output = "";

while( $rs = $result->fetch_array(MYSQLI_ASSOC) ) {
    if( $output != "") {
        $output .= ",";
    }
    $output .= '{"ID":"' . $rs["id"] . '",';
    $output .= '"Date":"' . $rs["date"] . '",';
    $output .= '"Company":"' . $rs["company"] . '",';
    $output .= '"Address":"' . $rs["address"] . '",';
    $output .= '"City":"' . $rs["city"] . '",';
    $output .= '"State":"' . $rs["state"] . '",';
    $output .= '"Zip":"' . $rs["zip"] . '",';
    $output .= '"Latitude":"' . $rs["latitude"] . '",';
    $output .= '"Longitude":"' . $rs["longitude"] . '",';
    $output .= '"Description":"' . $rs["description"] . '"}';
}

$output = '{"records":[' . $output . ']}';
#$output = json_decode($output);
$conn->close();

echo($output);

