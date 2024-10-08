const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");


// use the date object
const today = new Date();

currentyear.innerHTML = `©️ <span class="highlight">${today.getFullYear()}</span> `;

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});