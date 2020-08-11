<?php

    // GET DATA
    $input = $_GET['$val2$'];
    // CREATE JSON OBJ
    $j_res = new stdClass;
    $j_res->val5 = strval( $input );
    
    // CONVERT JSON TO STRING
    $s_res = json_encode($j_res);
    
    // RESPONSE CODE & HEADER
    http_response_code(200);
    header('Content-Type: application/json');
    echo $s_res;



