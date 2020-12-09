function operacion(valor){
	n = document.getElementById(valor)

	document.querySelector(".pantalla1").innerHTML += n.id
}
function resultado(){
	r = document.querySelector(".pantalla1");
	r2 = document.querySelector(".pantalla");
	res = r.innerHTML;
	
	r2.innerHTML = eval(res);
}

function negativo(){
	
	r2 = document.querySelector(".pantalla");
	
	if (r2.innerHTML > 0){
		r2.innerHTML = r2.innerHTML*(-1)
	}
	else {
		r2.innerHTML = r2.innerHTML*(-1)
	}
}

function borrar(){
	document.querySelector(".pantalla1").innerHTML = ""
	document.querySelector(".pantalla").innerHTML = ""
}