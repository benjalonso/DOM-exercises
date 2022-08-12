let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let button = document.getElementById("mySelect")
button.addEventListener("change", function () {
	countries.map((country) => {
        let option = createElement("option")
         option.innerHTML = country
        
    })
	
});

