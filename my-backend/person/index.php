<?php

    // GET DATA
    $input = $_GET['$input$'];
    // CREATE JSON OBJ
    $j_res = new stdClass;
    $j_res->val1 = strval( $input );
    $j_res->val2 = strval( $input + 100 ); 
    
    // CONVERT JSON TO STRING
    $s_res = json_encode($j_res);
    
    // RESPONSE CODE & HEADER
    http_response_code(200);
    header('Content-Type: application/json');
    echo $s_res;



