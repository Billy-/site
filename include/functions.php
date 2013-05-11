<?php
function my_include($file){
	switch($file){
		case "head":
			include($_SERVER['DOCUMENT_ROOT'] . '/include/head.php');
			break;
		case "header":
			include($_SERVER['DOCUMENT_ROOT'] . '/include/header.php');
			break;
		case "main_nav":
			include($_SERVER['DOCUMENT_ROOT'] . '/include/navigation.php');
			break;
	}
}
function home_url(){
	$protocol = 'http'; //($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
	return $protocol . "://" . $_SERVER['HTTP_HOST'];
}
?>