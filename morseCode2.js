
let decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    //1-eliminar ceros de los extremos
    //Determinar cual es la menor unidad para punto y espacio
    //parece que se define en la relacion entre los primeros dos caracteres
    //leer secuencia de caracteres y reemplazar:
    //".... . -.--   .--- ..- -.. ."
    //11--->punto de letra
    //111111--->barra de letra
    //00--->espacio entre puntos y barra en la letra    
    //000000--->espacio entre letras en la palabra
    //00000000000000 ----> espacio entre palabras
    
    let arr = bits.split('')
    if(arr[0]!=="1"){
        arr.shift()
        arr[arr.length-1]!=="1"? arr.pop(): null;
    }else if(arr[arr.length-1]!=="1"){
        arr.pop()
    }
    let total1 = 0;
    let total0 = 0;
    let string = [];

    arr.reduce((valAnterior,valActual)=>{
        //aca tengo que definir la relacion
        if(valActual === "1"){
            total1+= 1;
            switch(total0){
                case 1:
                    string.push("");
                    total0 = 0;
                break;
                case 3:
                    string.push(" ");
                    total0 = 0;
                break;
                case 7:
                    string.push("   ");
                    total0 = 0;
                break;
            }
        }else{
            switch(total1){
                case 1:
                    string.push(".");
                    total1 = 0;
                break;
                case 3:
                    string.push("-");
                    total1 = 0;
                break;
            }
            total0+=1;

        }
        return 
    },"1")
    switch(total1){
        case 1:
            string.push(".");
            total1 = 0;
        break;
        case 3:
            string.push("-");
            total1 = 0;
        break;
    }
    
    return string.join('')
}

let morse= {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    "−−−": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "···": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "...---...": "SOS",
    "-.-.--": "!",
    ".-.-.-": "."
}

decodeMorse = function(morseCode){
    let palabras = (morseCode.trim()).split("   ")
    let decodificado = []
    for(let i of palabras){
      let letras = i.split(" ")
        let palabra = [];
        for(let a of letras){
            let letra = morse[a]
            palabra.push(letra)
        }
        decodificado.push(palabra.join(""))
    }
    return decodificado.join(" ")
}

let bits = '10111';

console.log(decodeBits(bits))
console.log(decodeMorse(decodeBits(bits)))

//console.log(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))