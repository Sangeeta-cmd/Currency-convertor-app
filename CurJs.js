// const Base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";



const dropdowns = document.querySelectorAll(".dropdown select ");
const btn = document.querySelector("form button");
let fromCurreny , toCurreny;

for(select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
            fromCurreny = currCode;
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
            toCurreny = currCode;
        }
        select.append(newOption);
    }
    
    select.addEventListener("change" ,(evt)=>{
       updateFlag(evt.target);
    })
}

function updateFlag(element){
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let img = element.parentElement.querySelector("img");
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    img.src = newSrc;
    if(element.name === "from"){
      fromCurreny = currCode;  
    }else if(element.name === "to"){
       toCurreny = currCode;
    }
}

btn.addEventListener("click" , (evt)=>{
   evt.preventDefault();
   let amount = document.querySelector("form input");
   let amtValue = amount.value;
   if(amtValue === ""){
    amtValue = 1;
    amount.value = "1";
   } 
   
   getCurrency(amtValue);
})

async function getCurrency(amtValue){
    fromCurreny = fromCurreny.toLowerCase();
    toCurreny = toCurreny.toLowerCase();
    const Base_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurreny}.json`;
    let resp = await fetch(Base_url);
    console.log(resp);
    let data = await resp.json();
    console.log(data[fromCurreny]);
    let amount = data[fromCurreny][toCurreny];
    amount = amount * amtValue;
    console.log(amount)
    let convertedAmt = document.querySelector("form input");
    convertedAmt.value = Math.round(amount);
 }
