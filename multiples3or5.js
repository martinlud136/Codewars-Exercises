/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. */
/* function test(n, expected) {
    let actual = solution(n)
    Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
  }
  
  Test.describe("basic tests", function(){
    test(10,23)
  }) */

  //primero si es multiplo de 3, si es asi obtener número sino descartar //resto es 0
  //saber si es multiplo de 5, si es así obtener número sino descartar
  //saber si es multiplo de 3 y de 5, si es así obtener numero
  //repetir y sumar al anterior
function solution(number){
  let total = 0
  for(let i = 0 ; i < number; i++){
    i % 3 === 0 ? total +=i : 
    i % 5  === 0 ? total +=i : 
    i % (5*3)===0? total +=i : 0;
  }
  return total
}
console.log(solution(32))