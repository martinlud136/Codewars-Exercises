
let decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    //1-eliminar ceros de los extremos
    //Determinar cual es la menor unidad para punto y espacio
    //parece que se define en la relacion entre los primeros dos caracteres
    //leer secuencia de caracteres y reemplazar:
    // "Dot" – is 1 time unit long.
    // "Dash" – is 3 time units long.
    // Pause between dots and dashes in a character – is 1 time unit long.
    // Pause between characters inside a word – is 3 time units long.
    // Pause between words – is 7 time units long.
    
    // 111   .
    // 1111111100

    //Dividir por el menor valor de los tres primeros
 
     //agrupar ceros y unos   

    let result = bits.split('').reduce(function(r, i) {
        if (typeof r.last === 'undefined' || r.last !== i) {
            r.last = i;
            r.arr.push([]);
        }
        r.arr[r.arr.length - 1].push(i);
        return r;
    }, {arr: []}).arr;

    let totalength = []

    for(let a of result){
        totalength.push(a.length);
    }
    let menor = Math.min(...totalength)

    //eliminar los ceros de los extremos
 
    if(result[0][0] !=="1"){
        result[0][0].shift()
        result[result.length-1][0] !== "1"? result[result.length-1][0].pop(): null;
    }else if(result[result.length-1][0] !=="1"){
        result[result.length-1][0].pop()
    }

    let string = [];

    result.reduce((valAnterior,valActual)=>{

        if(valActual[0] === "1"){
 
            switch(valActual.length / menor){
                case 1:
                    string.push(".");
                    total1 = 0;
                break;
                case 3:
                    string.push("-");
                    total1 = 0;
                break;
            }
        }else{
            switch(valActual.length / menor){
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
        }
        return 
    },"1")
    
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

let bits = '1111111';

// console.log(decodeBits(bits))
console.log(decodeMorse(decodeBits(bits)))

//console.log(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))