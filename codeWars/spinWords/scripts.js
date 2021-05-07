let string = "Hey fellow warriors"


function spinWords(string){
    let arrayFrase = []
    let nuevaFrase = ""
    let arrayPalabras = string.split(" ")   
    // console.log(arrayPalabras)
    for (let i = 0; i < arrayPalabras.length; i++) {
        if(arrayPalabras[i].length>=5){
           arrayPalabras[i] = arrayPalabras[i].split('').reverse().join("");
        //    console.log(arrayPalabras[i])
            arrayFrase.push(arrayPalabras[i])
        }else {
            arrayFrase.push(arrayPalabras[i])
        }
        // console.log(arrayFrase)
    }
    nuevaFrase = arrayFrase.join(" ")
    return nuevaFrase
}

console.log(spinWords(string));
