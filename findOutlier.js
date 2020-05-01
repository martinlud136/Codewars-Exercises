/* [2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */

function findOutlier(integers){
    let totalpares = []
    let totalImpares = []
    let arr = integers
    while(arr.length !== 0 ){
        let num = arr.shift();
        num % 2 === 0 ? totalpares.push(num): totalImpares.push(num)
    }
      return totalpares.length > totalImpares.length ? totalImpares[0] : totalpares[0]
}
    

  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))