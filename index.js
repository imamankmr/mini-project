 const inputSlider=document.querySelector("[data-lengthSlider]"); 
 const lengthDisplay=document.querySelector("[data-lengthNumber]");

 const passwordDisplay=document.querySelector("[data-PasswordDisplay]");
 const copybuttton=document.querySelector("[data-copy]");
 const copymsg=document.querySelector("[data-copymsg]");
 const uppercaseCheck=document.querySelector("#uppercase");
 const lowercasecheck=document.querySelector("#lowercase");
 const numberscheck=document.querySelector("#numbers");
 const symbolscheck=document.querySelector("#symbols  ");
 const indicator=document.querySelector("data-indicator");
 const generateBtn=document.querySelector(".generateButton");
 const allCheckbox=document.querySelectorAll("input[type=checkbox]");
 const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

 let password="";  
 let passwordLength=10;
 let checkCount=1;
 handleSlider();

 function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
 }    

 function setIndicator(color){
indicator.style.backgroundColor= color;
 }
 function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)) +min;
 }

 function generateRandomNumber(){
   return getRndInteger(0,9);
 }
  function generateLowerCase(){
        return  String.fromCharCode(getRndInteger(97,123))
  }
  function generateUpperCase(){
   return  String.fromCharCode(getRndInteger(65,91))
}
function generateSymbol(){
   const randNum=getRndInteger(0,symbols.length);
   return symbols.charAt[randNum]; 
}
// const inputSlider = document.querySelector("[data-lengthSlider]");
// const lengthDisplay = document.querySelector("[data-lengthNumber]");

// const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
// const copyMsg = document.querySelector("[data-copyMsg]");
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolsCheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generateBtn = document.querySelector(".generateButton");
// const allCheckBox = document.querySelectorAll("input[type=checkbox]");
// const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


// initially
// let password = "";
// let passwordLength = 10;
// let checkCount = 1;
// handleSlider();
// ste strength circle color to grey


// set passwordLength
// function handleSlider() {
//     inputSlider.value = passwordLength;
//     lengthDisplay.innerText = passwordLength;
   //  or kuch bhi karna chahiye ? - HW
// }