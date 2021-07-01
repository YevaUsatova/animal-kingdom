//JSON URL
const myURL= "http://localhost:3000/animals";

//Accesses ul in HTML for adding JSON info
const ulJson = document.querySelector("#cute-animals");

//Accesses button in HTML for adding JS event click
const clickButton = document.querySelector('#fact-button');

//Function with the JSON transformed into sting
function fetched() {
    fetch(myURL)
    .then(response => response.json())
    .then(data => {
        ulJson.innerHTML = "";
        data.forEach(animal => {
            const li= document.createElement('li');
            li.textContent = animal.fact;
            ulJson.append(li); 
            li.addEventListener('click', event => event.target.remove())  
        });
        
    })
}        
// Creates events for button   

clickButton.addEventListener('click', fetched);

clickButton.addEventListener('click', () =>{
    const bodyUpdate = document.body
    bodyUpdate.style.filter ="drop-shadow(30px 10px 4px #4444dd)"
})    