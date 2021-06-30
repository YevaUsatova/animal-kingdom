//JSON URL
const myURL= "http://localhost:3000/animals";

//Accesses ul in HTML for adding JSON info
const ulJson = document.querySelector("#cute-animals");

//Accesses ul in HTML for pictures of animals
const ulPictures = document.querySelector("#photoes");

//Accesses button in HTML for adding JS event click
const clickButton = document.querySelector('#fact-button');

//Function with the JSON transformed into sting
function fetched() {
    fetch(myURL)
    .then(response => response.json())
    .then(data => {
        data.forEach(animal => {
            const li= document.createElement('li');
            li.textContent = animal.fact;
            ulJson.append(li);    
        });
    })
}        
// Creates event for button   
 clickButton.addEventListener('click', fetched);
    


 //Accesses JSON string and creates list ins HTML
 

    //  
    //     const idS=`${animal.name} ${animal.fact}`;
    //     const li= document.createElement('li');
    //     li.textContent = idS;
    //     ulJson.append(li)
    // });
    
  
