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
            this.currentOperation = digit
            this.uppDateScreen()
        }

        processOperation(operation){
            let operationValue
            let previous = +this.previousOperationText.innerText;
            let current = +this.currentOperationText.innerText;

        }       



        uppDateScreen(){
            this.currentOperationText.innerText += this.currentOperation
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