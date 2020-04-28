
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
    
    let arr = bits.split('')
    if(arr[0]!=="1"){
        arr.shift()
        arr[arr.length-1]!=="1"? arr.pop(): null;
    }else if(arr[arr.length-1]!=="1"){
        arr.pop()
    }

    
    let newArr = arr;
    let result = arr.reduce(function(r, i) {
        if (typeof r.last === 'undefined' || r.last !== i) {
            r.last = i;
            r.arr.push([]);
        }
        r.arr[r.arr.length - 1].push(i);
        return r;
    }, {arr: []}).arr;

    
    for(let a of result){

    }

    let [primCar,segCar,terCar] = result
    let totCar = [primCar.length, segCar.length, terCar.length]
    let menor = Math.min(...totCar)

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

let bits = '111';

// console.log(decodeBits(bits))
console.log(decodeMorse(decodeBits(bits)))

//console.log(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))