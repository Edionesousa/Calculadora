

const previousOperationText = document.querySelector("#previousOperation");
const currentOperationText = document.querySelector("#currentOperation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOpreation = "";
    }
    //add digit to calculator screen
    addDigit(digit){
        console.log(digit);

    }
    
}

const calc = new (previousOperationText, currentOperationText);


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        const value = e.target.innerText;


        if(+value >= 0 || value === "."){
            calc.eddDigit(value)
        }else{
            console.log("op" + value)
        }

    });
});



































































