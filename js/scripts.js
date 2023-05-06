const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");
const calc = document.querySelector("calc");


class calculator{
        constructor(previousOperationText,currentOperationText){
            this.previousOperationText = previousOperationText
            this.currentOperationText = currentOperationText
            this.currentOperation = "";
        }

}


buttons.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if(+ value >= 0 || value === "."){
            console.log(value)
        }else{
            console.log("op:" + value);
        }
    });
});