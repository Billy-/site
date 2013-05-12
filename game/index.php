<?php include( $_SERVER['DOCUMENT_ROOT'] . '/include/functions.php'); ?>
<html>
	<head>
		<?php my_include('head'); ?>
		<script src="scripts.js" type="text/javascript"></script>
	</head>
	
	<body>
		<div class="wrapper">
			<?php my_include('header'); ?>
			<canvas id="canvas" height="600" width="940">
				If you're reading this, your browser doesn't support the canvas element.
			</canvas>
			<?php my_include('footer'); ?>
		</div>
		
	</body>
</html>