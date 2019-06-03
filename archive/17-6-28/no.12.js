/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var romanSet = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];
    var roman = romanSet[3][parseInt(num / 1000) % 10] + romanSet[2][parseInt(num / 100) % 10] + romanSet[1][parseInt(num / 10) % 10] + romanSet[0][num % 10];
    return roman;
};
