const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }
    processOperation(operation){
        let operationValue
        const previous = +this.previousOperationText.innerText
        const current = +this.currentOperationText.innerText

        switch(operation){
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
                return
        }
    }
    addDigit(digit){

        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return
        }
        this.currentOperation = digit
        this.updateScreen()

        processOperation(operation)
        
    }
        
        updateScreen(
            operationValue = null,
            operation = null,
            current = null,
            previous = null
        ){
            console.log(previousOperationText, currentOperationText)

            this.currentOperationText.innerText += this.currentOperationText
            this.currentOperation = ""
        }
}
const calc = new calculator(previousOperationText, currentOperationText)

buttons.forEach((btn => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText
        if( +value >= 0 || value === "."){
            calc.addDigit(value)
        }else{
            calc.processOperation(value)
        }
    })
})
