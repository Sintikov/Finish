var name, password, error ;

function signup() {
	name = document.getElementById("name").value;
	password = document.getElementById("password").value;
	confrim = document.getElementById("confrim").value;
	error = "PLEASE WRITE CORRECTLY ";
	if (name === "" ) {
		document.getElementById("results").innerHTML = error;
	} else if (password === ""){
		document.getElementById("results").innerHTML = error;
	}
	else if (confrim === ""){
		document.getElementById("results").innerHTML = error;
	}
	else if (confrim != password){
		var audio = new Audio();
		audio.src = './click.mp3';
		audio.play();
		document.getElementById("results") = audio + "PLEASE WRITE CORRECTLY ";
	}
	else {

	document.location.href = "WebProSintikovmain/index.html";

}
}
