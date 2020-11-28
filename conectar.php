<?php
    $serverName = "localhost"; // update me
    $connectionOptions = array(
        "Database" => "medidas", // update me
    );
    //Establishes the connection
    $conn = sqlsrv_connect($serverName, $connectionOptions);
    echo ("Reading data from table" . PHP_EOL);
    if ($getResults == FALSE)
    {
        echo (sqlsrv_errors());
    }
    sqlsrv_free_stmt($getResults);
?>