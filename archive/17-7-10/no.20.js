var pre = {
    "{": "}",
    "(": ")",
    "[": "]"
};
var suf = {
    "}": "{",
    ")": "(",
    "]": "["
};
var isValid = function(s) {
    var parStack = [];
    var len = s.length;
    for(let i = 0; i < len; i++) {
        parStack.push(s[i]);
        // console.log("pushed: ", s[i]);
        if((s[i] in suf) && (parStack[parStack.length - 2] === suf[s[i]])) {
            // console.log("poped: ", parStack[parStack.length - 2], parStack[parStack.length - 1]);
            parStack.pop();
            parStack.pop();
        }
    }
    return parStack.length === 0;
};
// console.log(isValid("{(})"));

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var myStack = [];
    var result = true;
    for (var i =0; i < s.length; i++) {
        var popped;
        switch(s[i]) {
            case '{':
                myStack.push(s[i]);
                break;
            case '[':
                myStack.push(s[i]);
                break;
            case '(':
                myStack.push(s[i]);
                break;
            case '}':
                popped = myStack.pop();
                if (popped !== '{') {
                    result = false;
                    return result;
                } 
                break;
            case ']':
                popped = myStack.pop();
                if (popped !== '[') {
                    result = false;
                    return result;
                } 
                break;
            case ')':
                popped = myStack.pop();
                if (popped !== '(') {
                    result = false;
                    return result;
                } 
                break; 
        }
    }
    if (myStack.length> 0) {
        result = false;
    } 
    return result;
};
