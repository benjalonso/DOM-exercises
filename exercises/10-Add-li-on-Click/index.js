let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
	const myList = document.getElementById("#myList")
	let newElem = document.createElement("li");
	newElem.textContent = "Fourth item"
	myList.appendChild(newElem);// Your code here
});
