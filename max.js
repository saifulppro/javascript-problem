var bussiness = 150;
var minister = 251;
var sochib  = 250;
// easy way
var max = Math.max(bussiness, minister, sochib);
console.log(max)
// dificult way
if (bussiness > minister){
    if(bussiness > sochib){
        console.log("bussiness is bigger");
    }
    else{
        console.log("Sochib is bigger");
    }
}
else{
    if(minister > sochib){
        console.log("Minister is bigger");
    }
    else{
        console.log("Sochib is bigger")
    }
}