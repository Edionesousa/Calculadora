const previusOperationText = document.querySelector("#previus-operation");
const currentOperationText = document.querySelector("#current-operetion");
const button = document.querySelectorAll("#buttons-conteiner button");

class calculator {
    constructor(previusOperationText, currentOperationText){
        this.previusOperationText = previusOperationText
        this.currentOperationText = currentOperationText
        this.currentOperationText ="";
    }
addDigit(digit){
    console.log(digit)

    this.currentOperationText = digit
    this.updateScreen()
}
    updateScreen(){
        this.currentOperationText.innerText =+ this.currentOperationText;
    }
}


const clac = new calculator(previusOperationText, currentOperationText);


button.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if(+value >= 0 || value === "."){
            clac.addDigit(value);
        } else{
            console.log(button);
        }

    })
    
});

