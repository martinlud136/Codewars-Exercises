function persistence(num) {
    let resultado = num;
    let total = 0
    while(resultado.toString().length !=1){
        let arr = resultado.toString().split('');
        resultado = arr.reduce((acc,curr) => parseInt(acc) * parseInt(curr))
        total+=1
    }
    return total
  }
  let num = 4;
  
  console.log(persistence(num))