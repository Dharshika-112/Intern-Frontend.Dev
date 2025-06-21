function bmical(weight,height){
    let a=(weight/(height*height));  //fformumla  for bmi cal
    return Math.round(a);  // to round of
}
var bmi=bmical(65,1.8);
console.log(bmi);