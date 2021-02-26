// var maxNumber = [45, 81, 63, 52, 56, 35, 23, 22];
// var sum = 0;
// for (var i = 0; i < maxNumber.length; i++){
//     var element = maxNumber[i];
//     sum = sum + element
// }
// console.log("Total of the Number : " + sum);

function ArraySum(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 81, 63, 52, 56, 35, 23, 55];
var result = ArraySum(numbers);
console.log("Total of the Number : " + result);