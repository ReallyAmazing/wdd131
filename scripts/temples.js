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