// get largest number from an array.
var maxNumber = [45, 81, 63, 52, 56, 35, 23, 22];
var max = maxNumber[0];
for (var i = 0; i < maxNumber.length; i++) {
    var element = maxNumber[i];
    if(element > max) {
        max = element;
    }
}
console.log("Highest value is " + max);