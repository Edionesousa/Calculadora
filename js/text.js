/*const getSmallestWord = (str) => {
    const strArr = str.trim().split(" ") //(.split()) e mesmo que uma tesoura, corta os pedaços.

    let getSmallestWord = strArr[0]

    for(let i = 1; i < strArr.length; i++ ){
        if(strArr[i].length < getSmallestWord.length){
            getSmallestWord = strArr[i]

        }
    }

    return getSmallestWord
}

console.log(getSmallestWord("Carros classicos sao colecionaveis"))*/


const menorP = (str) =>{
    const strArr = str.trim().split(" ")

     let menorP = strArr[0]

        for(let i = 1; i < strArr.length; i++){

            if(strArr[i].length < menorP.length){
                menorP = strArr[i]
            }
        }
        return menorP
    }


console.log(menorP("Carros classicos sao colecionaveis"))