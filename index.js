const myURL= "http://localhost:3000/animals"
fetch(myURL)
.then(response => response.json())
.then(data => {
    const ul = document.querySelector("#cute-animals");
    data.forEach(animal => {
        const idS=`${animal.name} ${animal.fact}`;
        const li= document.createElement('li');
        li.textContent = idS;
        ul.append(li)
    });
})