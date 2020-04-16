/* Test.assertEquals(calculate(3.2,"+", 8), 11.2, "3.2 + 8 = 11.2")
Test.assertEquals(calculate(3.2,"-", 8), -4.8, "3.2 - 8 = -4.8")
Test.assertEquals(calculate(3.2,"/", 8), 0.4, "3.2 / 8 = .4")
Test.assertEquals(calculate(3.2,"*", 8), 25.6, "3.2 * 8 = 25.6")
Test.assertEquals(calculate(-3,"+", 0), -3, "-3 + 0 = -3")
Test.assertEquals(calculate(-3,"-", 0), -3, "-3 - 0 = -3")
Test.assertEquals(calculate(-3,"/", 0), null, "-3 / 0 = null")
Test.assertEquals(calculate(-3,"*", 0), 0, "-3 * 0 = 0")
Test.assertEquals(calculate(-3,"w", 0), null, "-3 w 0 = null") */

function calculate(num1, operation, num2) {
    switch (operation){
        case "+":
            return num1 + num2;
        break;
        case "-":
            return num1 - num2;
        break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num2 === 0 ? null :  num1 / num2;
            break;
        default:
            return null;
    }
}

//otras soluciones
function calculate(num1, operation, num2) {
    var ops = {
      '+': function(x, y) { return x + y; },
      '-': function(x, y) { return x - y; },
      '*': function(x, y) { return x * y; },
      '/': function(x, y) { return y === 0 ? null : x / y; }
    };
    return (ops[operation] || function() { return null; })(num1, num2);
}

function calculate(num1, operation, num2) {
    var op = ['+', '-', '*', '/'],
        fn = [function(a, b) { return a + b; },
              function(a, b) { return a - b; },
              function(a, b) { return a * b; },
              function(a, b) { return b === 0 ? null : a / b; }],
        i = op.indexOf(operation);
    return i === -1 ? null : fn[i](num1, num2);
  }

console.log(calculate(3.2,"w", 0))