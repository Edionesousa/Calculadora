const  previousOperationText = document.querySelector("#previous-operation");// previous === anterios
const currentOperationText = document.querySelector("#current-operation"); // current === atual
const buttons = document.querySelectorAll("#buttons-container","#button");

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = "";
    };

    addDigit(digit){
        if(digit === "." && this.currentOperationText.innerText.includes(".")){ // Este trecho nao permit o (.) ser adicionado mais de uma vez.
            return; 
        }
        this.currentOperation = digit
        this.updateScreen()
    };
    

    processOperation(operation){
        let operationValue;
        const previous = +this.previousOperationText.innerText;
        const current = +this.currentOperationText.innerText;

        switch(operation){
            case "+": 
            case "-":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
            break;
            default:
            return;
            console.log(operation)
        }
        
    }

        updateScreen(
            operationValue = null,
            operation = null,
            current = null,
            previous = null
            ){

            if(operation === null){
                this.currentOperationText.innerText += this.currentOperation;
            } else{
                if(previous === 0){
                    operation = current
                }
                this.previousOperationText.innerText = `${operationValue} ${operation}`
            }
        };


};

const calc = new calculator(previousOperationText, currentOperationText);


buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else{
            calc.previousOperation(value);
        }//*
    })
})
