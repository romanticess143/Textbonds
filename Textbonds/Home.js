var book = document.querySelector("#text3");

function goToURL(event){
 var currentEleId = event.currentTarget.id;
 if(currentEleId=="text3"){

   window.location = "Exploring_Other_Earths.html"
 } 
}

book.addEventListener("click", goToURL);