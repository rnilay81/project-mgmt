<?php

// Connects to the XE service (i.e. database) on the "localhost" machine
$conn = oci_connect('nilay', 'admin', 'localhost/XE');
$stid = oci_parse($conn, 'SELECT * FROM employees');
oci_execute($stid);
 $result = array();
echo "<table border='1'>\n";
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
$result[] = $row;
    
}
    echo json_encode($result);


?>