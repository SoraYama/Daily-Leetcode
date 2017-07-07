var isPalindrome1 = function(x) {
    if(x < 0)
      return false;
    else{
        var xString = x.toString(10);
        var len = xString.length;
        var x2 = '';
        for(let i = 0; i < len; i++){
            x2 += xString.charAt(len - 1 - i);
        }
        if(xString === x2)
          return true;
        else
          return false;
    }
};


var isPalindrome = function(x) {

    if(x < 0) { return false; }
    var flip = 0;
    if(x > 0 && x % 10 === 0) {return false;}

    while(flip < x) {
        flip = flip * 10 + x % 10;
        x = parseInt(x / 10);
        console.log('**flip=' + flip);
        console.log('**x=' + x);
    }

    return x === flip || parseInt(flip / 10) === x;
};

