const getSmallestWord = (str) => {
    const strArr = str.trim().split(" ") //(.split()) e mesmo que uma tesoura, corta os pedaços.

    let getSmallestWord = strArr[0]

    for(let i = 1; i < strArr.length; i++ ){
        if(strArr[1].length < getSmallestWord.length){
            getSmallestWord = strArr[i]

        }
    }

    return getSmallestWord
}