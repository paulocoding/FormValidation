// getting the list of for the error field
var formErrorList = document.getElementsByClassName("form-error");

// username validation
document.getElementById("username").onblur = function () {
	var msg = "";
	if (this.value.length < 6) {
		msg = "6 characters minimum";	
	}
	formErrorList[0].textContent = msg;	
};

// password validation
document.getElementById("pw").onblur = function () {
	var msg = "";
	var hasNum = false;
	var hasSpec = false;
	for (var i = 0, l = this.value.length; i < l; i++) {
		// checking if it contains numbers
		if ( !isNaN(this.value[i]) ) {
			hasNum = true;
		}
		
		// checking if it contains special characters
		if (this.value[i] === "-" || this.value[i] === "+" || this.value[i] === "*" || this.value[i] === "#" ) {
			hasSpec = true;
		}
	}
	
	// checking if it is at least 8 chars long
	if (this.value.length < 8 || !hasNum || !hasSpec) {
		msg = "8 characters minimum, a special character - + * # and at least a number";	
	}
	formErrorList[1].textContent = msg;	
};

// email validation
document.getElementById("email").onblur = function () { 
	var msg = "";
	var hasAt = false;
	var hasDot = false;
	
	for (var i = 0, l = this.value.length; i < l; i++) {
		
		// checking if it contains @
		if ( this.value[i] === "@" ) {
			hasAt = true;
		}
		
		// checking if it contains a dot
		if (this.value[i] === ".") {
			hasDot = true;
		}
	}
	
	if(!hasAt || !hasDot ) {
		msg = "Not a valid email";
	}
	formErrorList[2].textContent = msg;		
};

// telephone number validation
document.getElementById("tel").onblur = function () { 
	var msg = "";
	if (this.value.length != 10|| this.value[0] != "0") {
		msg = "invalid phone number (0xxxxxxxxx)";	
	}
	formErrorList[3].textContent = msg;	
};

// gender validation
function validateGender() { 
	var msg = "";
	if (this.value === "") {
		msg = "please select a gender";	
	}
	formErrorList[6].textContent = msg;	
}
var formGenderEl = document.getElementById("gender");
formGenderEl.onblur = validateGender;
formGenderEl.onchange = validateGender;
