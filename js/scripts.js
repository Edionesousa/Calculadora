const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = "";
    }
//add digit to calculator screen

    addDigit(digit) {

        // check if current operation already has a dot

        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        }
            this.currentOperation = digit;
            this.updateScreen();
        }

        
        //precess all calculator operations
        
        processOperation(operation){
            // Check if current is empty
            if(this.currentOperationText.innerText === "" ) {

                // Change operation
                if(this.previousOperationText !== "" ){
                    this.changeOperation(operation)

                }
                return;
            }

            // Get current and previous value
            let operationValue
            const previous = +this.previousOperationText.innerText.split(" ")[0]; 
            const current = +this.currentOperationText.innerText;

            switch(operation){
                case "+":
                    operationValue = previous + current;
                    this.updateScreen(operationValue, operation, current, previous)
                    break;
                    case "-":
                        operationValue = previous - current;
                        this.updateScreen(operationValue, operation, current, previous)
                        break;
                        case "/":
                            operationValue = previous / current;
                            this.updateScreen(operationValue, operation, current, previous)
                            break;
                            case "*":
                                operationValue = previous * current;
                                this.updateScreen(operationValue, operation, current, previous)
                                break;
                    default:
                        return;
            }
        }

    //change values of the calculator screen
    
    updateScreen(
        operationValue = null,
        operation =  null, 
        current = null, 
        previous = null
        ){
            
            if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        }else{
            //check is value is zero, if it is just add current value
            if(previous === 0 ){
                operationValue = current;
            }
            // Add current value to previus
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";


        }
    }

             //Change math operation

        changeOperation(operation){
            const mathOperation = ["*","/","+","-"]

            if(!mathOperation.includes(operation)) {
                return;
            }

            this.previousOperationText.innerText = this.previousOperationText.innerText.slice()
        }

}


const calc = new calculator (previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if(+value >= 0 || value === ".") {

        calc.addDigit(value);

    } else {
        calc.processOperation(value);
    }
    })
})



























































