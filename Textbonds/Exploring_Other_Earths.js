var eye = document.querySelector(".fa-eye");
var eye_slash = document.querySelector(".fa-eye-slash");
var all = document.querySelector("#All");

eye_slash.addEventListener('click', function(event){
				all.classList.remove("collapse");
});

eye.addEventListener('click',function(event){
all.classList.add("collapse");
});

function myFunction() {
	var x = document.getElementById("Comment");
	if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleTextfield() {
	var x = document.getElementById("respond");
	if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hideTextfield() {
    var x = document.getElementById("respond");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        alert("Your annotation has been added!");
    }
}