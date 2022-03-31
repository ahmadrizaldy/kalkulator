
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {    
    calculatorScreen.value = number
}
//buat ambil tombol number
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {    
    number.addEventListener("click", (event) => {
        console.log(event.target.value);
    });
});

let prevNumb = "";
let calcOperat = "";
let currentNumb = "0";
// ini biar input angkanya bisa lebih dari 1digit
const inputNumber = (number) => {
    if (currentNumb === "0"){
        currentNumb = number
    }    else {
        currentNumb += number
    }    
}

numbers.forEach((number) =>{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumb);
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((opert) => {
    opert.addEventListener ("click", (event) => {
        inputOperators(event.target.value)
       
    })
})
// ini buat operator
const inputOperators = (opert) => {      
    prevNumb = currentNumb
    calcOperat= opert 
    currentNumb = ""   

    if(calcOperat === ""){
        prevNumb= currentNumb        
    } else{
    calcOperat = opert
    currentNumb = "0"
}
}


const equalsymb = document.querySelector(".equal-sign");
equalsymb.addEventListener("click", () =>{
    calculation()    
    updateScreen(currentNumb)
    
})
// ini masih bingung kalo operatornya dipencet lebih dari 1 kali (biar jadi mau berapakalipun dipencet operatornya, harusnya ke pencet 1 kali)
const calculation = () => {
    let result = ""    
    switch(calcOperat){
        case "+": 
            result = parseFloat (prevNumb) + parseFloat (currentNumb) // pake parseFloat biar bisa ngitung decimal
            break
        case "-":
            result = parseFloat (prevNumb) - parseFloat (currentNumb)
           break
        case "*":
            result = parseFloat (prevNumb) * parseFloat (currentNumb)
            break
        case "/":
            result = parseFloat (prevNumb) /parseFloat (currentNumb)
           break       
        default:         
        return  ;      
    }
    currentNumb= result
    calcOperat = ""
}

const clearAll = () => {
    prevNumb =""
    calcOperat= ""
    currentNumb = "0"
}
const ACBtn = document.querySelector(".all-clear");

ACBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumb)
})
// ini biar kalo input . jadi apik 
inputDecimal = (dot) => {
   if (currentNumb.includes(".")){
       return;
   } 
   currentNumb += dot
}
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumb)
})




