const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");


class calculator{
        constructor(previousOperationText,currentOperationText){
            this.previousOperationText = previousOperationText
            this.currentOperationText = currentOperationText
            this.currentOperation = "";

        }
        addDigit(digit){

            if(digit === "." && this.currentOperationText.innerText.includes(".")){
                return;
            }
            this.currentOperation = digit;
            this.upDateScreen();
        }

        processOperation(operation){
            let operationValue;
            const previous = +this.previousOperationText.innerText.split("")[0];
            const current = +this.currentOperationText.innerText;


            switch(operation){
                case"+":
                operationValue = previous + current;
                this.upDateScreen(operationValue, operation, current, previous);
                    break;
                    case"-":
                operationValue = previous - current;
                this.upDateScreen(operationValue, operation, current, previous);
                    break;
                    case"/":
                operationValue = previous / current;
                this.upDateScreen(operationValue, operation, current, previous);
                    break;
                    case"*":
                operationValue = previous * current;
                this.upDateScreen(operationValue, operation, current, previous);
                    break;
                    default:
                    return;
            }
        }       

        upDateScreen(
            operationValue = null,
            operation = null,
            current = null,
            previous = null
        ){


            if(operationValue === null){
                this.currentOperationText.innerText += this.currentOperation;
            }else{
                if(previous === 0){
                    operationValue = current
                }

                this.previousOperationText =`${operationValue} ${operation}`;
                this.currentOperationText ="";

            }
        }

}

const calc =  new calculator( previousOperationText, currentOperationText)

buttons.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if(+ value >= 0 || value === "."){
            calc.addDigit(value)
        }else{
            calc.processOperation(value)
        }
    });
});