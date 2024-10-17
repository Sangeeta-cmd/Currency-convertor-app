const URL = "https://dog.ceo/api/breeds/image/random";

const getDogBtn = document.querySelector("#btn");
const img = document.querySelector("img");

// async - await function
const getData = async ()=>{
console.log("getting data ..")
let response = await fetch(URL);
// console.log(response.status)
console.log(response);  // JSON format 
let data = await response.json();   // converting data from json fromat to js object / parsing
// console.log(data.message);
img.setAttribute("src",data.message);
}


getDogBtn.addEventListener("click" , getData);

// promise chianing
// function getData(){
//     fetch(URL)
//     .then((response)=>{
//        return response.json(); // parsing
//     })
//     .then((data)=>{
//        console.log(data);
//     })
// }