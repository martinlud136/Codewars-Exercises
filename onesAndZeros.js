/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [8, 4, 2, 1] ==> 11 */

/* describe("One's and Zero's", () => {

    it("Example tests", () => {
        Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
        Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
        Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
        Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
    });
  
  }); */

const binaryArrayToNumber = arr => {
    let exponente = 0;
    let number = arr.reduceRight(function suma(acc, curr){
        if(curr%2 !==0){
            let suma = acc + Math.pow(2,exponente)
            exponente +=1;
            return suma
        }
        exponente +=1;
        return acc
    }, 0)
    return number
};

console.log(binaryArrayToNumber([0,1,1,0]));
console.log('holdda')
