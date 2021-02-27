var statement = "I love JavaScript Programming"

function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var character = str[i];
        reverse = character + reverse;
    }
    return reverse;
}
var ulta = reverseString(statement);
console.log(ulta);