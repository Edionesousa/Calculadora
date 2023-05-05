const previousOperationText = document.querySelector("previous-operation");
const currentOperationText = document.querySelector("current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
    addDigit(digit){
        this.currentOperation = digit;
        this.updateScreen();
    }
    updateScreen(){
        this.currentOperationText += currentOperationText;
    }
}



const calc = new calculator(previousOperationText, currentOperationText);




buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;
        
        if(+value >= 0 || value === "."){
            calc.addDigit(value)
        }else{
            console.log()
        }
    })
})