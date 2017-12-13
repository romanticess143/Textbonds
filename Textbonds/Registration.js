var registration = document.getElementById("registration");

function handleSubmission(event){
	var Email = registration.elements.Email;
	var Password = registration.elements.Password;
	var Confirm = registration.elements.Confirm;

		if(Email.value.length < 3){
			alert("Please make sure your username has more than 3 characters.");
			event.preventDefault();
			Email.focus();
			return false;
		}

		if(Password.value.length < 3){
			alert("Please make sure your password has more than 3 characters.");
			event.preventDefault();
			Password.focus();
			return false;
		}

		if (Password.value !== Confirm.value){
			alert("Please check that your passwords match");
			event.preventDefault();
			Password.focus();
			return false;
		}

}

registration.addEventListener("submit", handleSubmission)