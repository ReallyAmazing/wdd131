// select the DOM elements for output
const currentyear = document.querySelector("#currentyear");


// use the date object
const today = new Date();
currentyear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;


alert(document.lastModified)
let olastModif = new Date(document.lastModified)