function myEvent() {
	var password = document.getElementById("password").value;
	var repassword = document.getElementById("repassword").value;
	console.log(password);
	console.log(repassword);
	if (password == repassword && password.length > 7) {
		alert("The passwords matched!");
	}
	else {
		alert("Passwords do not match or password is not long enough")
	}
}
