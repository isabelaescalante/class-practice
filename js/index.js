// se pone javascript abajo de los elementos porque despues se tarda en load la webpage
//2 click event listeners (avoid refresh)
//submit: retrive full name and email
//submit: retrieve password and the confirmation. validate that they are the same and contains at least 1 letter and 2 number
//submit: retrieve country. validate that at least one is selected
//submit: retrieve gender. validate that it is selected
//submit: place all retrieved fields as an object
//cancel: reset all values to default

console.log("Binded correctly");

let submitBtn = document.getElementById("submitinput");
let cancelBtn = document.getElementById("cancelinput");


submitBtn.addEventListener("click", submitValidation);
cancelBtn.addEventListener("click", cancelValidation);

let name, email, password, passwordConfirmation, country, gender;

function submitValidation(e) {
	e.preventDefault();

	let name = document.getElementById("textinput").value;
	let email = document.getElementById("emailinput").value;

	let password = document.getElementById("passinput").value;
	let passwordConfirmation = document.getElementById("passconinput").value;
	let valNumber = new RegExp("[0-9]+");
	let valLetter = new RegExp("[A-Za-z]+");
	if(!(password.match(valNumber) && password.match(valLetter) && password == passwordConfirmation)) {
		alert("Contraseña incorrecta");
	}

	let countrySelect = document.getElementById("countryid");
	if(countrySelect.options[countrySelect.selectedIndex].value != "default") {
		let country = countrySelect.options[countrySelect.selectedIndex].text;
	}
	else {
		alert("Select a country");
	}

	var radios = document.getElementsByName("gender");
	var gender = "";
	for(var i = 0; i < radios.length; i++) {
		if(radios[i].checked) {
			if(radios[i].value == "M") {
				gender = "Masculine";
			} else {
				gender = "Femenine";
			}
		}
	}
	if(gender == "") {
		alert("Select a gender");
	}

	var User = {theName : name, theEmail : email, thePassword : password, thePassConfirmation : passwordConfirmation, theCountry : country, theGender : gender }
	console.log(User.theName);
	
}

function cancelValidation() {
	document.getElementById("form1").reset();
}

