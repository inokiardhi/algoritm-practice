// isValidExpression("({[]})") // true
// isValidExpression("({[})") // false
// isValidExpression("{}{}") //false
let stack = [];
function peek() {
    return stack[stack.length-1]
}

function isValidExpression(a) {
    for(let i = 0; i < a.length; i++) {
        if (a[i] === "(" || a[i] === "{" || a[i] === "[") {
            stack.push(a[i])
        } 
    }
    for (let i = a.length/2; i < a.length; i++) {
        console.log(peek())
        if (a[i] === ")" ||a[i] === "}" ||a[i] === "]") {
            if (peek() === "(" || peek() === "{" || peek(stack) === "[" ) {
                stack.pop();
            } else {
                return false
            }
        } 
    }
    return stack.length === 0;
        
}
console.log(isValidExpression("{}{}"))