const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation =""

    }
    addDigit(digit){

        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return
        }
        this.currentOperation = digit
        this.updateScreen()

    processOperation(operation){
        let operationvalue
        const previous = + this.previousOperationText.innerText
        const current = + this.currentOperation.innerText
        switch (operation){
            case "+":
                operationvalue = previous + current
                this.updateScreen(operationvalue, operation, current, previous)
                break
                default
                return
        }

    }
    }

    updateScreen(operationValue = null,
        operation = null,
        current = null, 
        previous = null
    ){

        console.log(operationvalue, operation, current, previous)

        
        this.currentOperationText.innerText += this.currentOperation
    }

}
const calc = new calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;
        if(+ value >= 0 || value === "."){
            calc.addDigit(value)
        } else {
        calc.processOperation(value)
        }
    })
})
