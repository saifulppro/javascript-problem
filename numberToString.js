var speech = "I  love my country very much, I also love my mother";
var count = 0;
for(var i = 0; i < speech.length; i++){
    var character = speech[i];
    if(character == " " && speech[i-1] != " "){
        count++;
    }
}
console.log(count)