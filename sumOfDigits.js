/* digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6
 */
function digital_root(number) {
    let resultado = number;
   while(resultado.toString().length !== 1){
            let arr = resultado.toString().split('');
             resultado = arr.reduce((acc,curr) => parseInt(acc) + parseInt(curr))
    }
    return resultado
}
console.log(digital_root(942))