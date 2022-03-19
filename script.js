<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>login</title>
	<link rel="stylesheet" href="./style.css">
	<link href="script.js">
</head>

<body  background="logo.jpg">

<div class="hero">
	<div class="form-box">
		<div class="button-box">
			<div id="btn"></div>
				<button type="button" class="toggle-btn" onclick="login()">Login</button>
				<button type="button" class="toggle-btn" onclick="register()">Register</button>

		<div>
			<form id="login" class="input-group">
				<input type="text" class="input-field" placeholder="Username" required=""> 
				<input type="text" class="input-field" placeholder="Password" required=""> 
				<input type="checkbox" class="chech-box"><span>Remember Password</span>
				<button type="submit" class="submit-btn">login</button>
			</form>
				<form id="register" class="input-group">
					<input type="text" class="input-field" placeholder="Username" required=""> 
					<input type="email" class="input-field" placeholder="email address" required=""> 
					<input type="checkbox" class="chech-box"><span>i agree to the rems and conditions</span>
					<button type="submit" class="submit-btn">register</button>
			</form>
				
</div>
</div>
</div>
<script>
	var x = document.getElementById("login")
	var y = document.getElementById("register")
	var z = document.getElementById("btn")

	function register(){
		x.style.left= "-400px"
		y.style.left= "0px"
		z.style.left= "0px"
	}
function login(){
		x.style.left= "0px"
		y.style.left= "450px"
		z.style.left= "0"
	}



</script>

</body>
</html>
