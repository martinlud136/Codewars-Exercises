/* In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:
*/
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
    // un espacio separa letras
    // tres espacios para separar letras
    //primero detectar la separacion entre palabras
    // detectar la separacion entre letras
    // identificar las letras => compararla con la base de datos
    // traer la letra que coincide en la base de datos => unir las letras hasta formar la palabra
    // hace lo mismo con todas las palabras => unir y devolver las palabras

    let palabras = (morseCode.trim()).split("   ")
    let decodificado = []
    for(let i of palabras){
      letras = i.split(" ")
        let palabra = [];
        for(let a of letras){
            let letra = morse[a]
            palabra.push(letra)
        }
        decodificado.push(palabra.join(""))
    }
    return decodificado.join(" ")
}

console.log(decodeMorse('···−−−···'))