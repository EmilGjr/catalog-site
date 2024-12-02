<?php
// router.php

$requestUri = $_SERVER['REQUEST_URI'];

// Add your routing logic here. For example, if the URL matches a certain pattern, include a specific PHP file:
if (preg_match('/^\/product\/([0-9]+)$/', $requestUri, $matches)) {
    // Assume you're looking for product details and the ID is in the URL
    $_GET['id'] = $matches[1];
    include 'product-detail.php';
} else {
    return false; // Let PHP serve the requested file
}
