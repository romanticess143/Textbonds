var login = document.getElementById("login");

function handleSubmission(event){
	var Email = login.elements.Email;
	var Password = login.elements.Password;

		if(Email.value.length < 1){
			alert("Please enter your email address.");
			event.preventDefault();
			Email.focus();
			return false;
		}

		if(Password.value.length < 1){
			alert("Please enter your password.");
			event.preventDefault();
			Password.focus();
			return false;
		}

}

login.addEventListener("submit", handleSubmission);

var open = document.querySelector("#new");

function goToURL(event){
 var currentEleId = event.currentTarget.id;
 if(currentEleId=="new"){

   window.location = "Registration.html"
 } 
}

open.addEventListener("click", goToURL);