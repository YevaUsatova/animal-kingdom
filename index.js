const myURL= "http://localhost:3000/animals"
fetch(myURL)
.then(response => response.json())
.then(data => {
    console.log(data)
})