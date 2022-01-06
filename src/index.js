module.exports = function reverse (n) {
    let str = n.toString();
    let revStr = '';
    for (let i = (str.length - 1); i >= 0; i--){
        revStr +=str[i];        
    }  
    (n < 0)  ? revStr = revStr.substring(0,revStr.length-1) : revStr = revStr;
    return Number(revStr);
}
