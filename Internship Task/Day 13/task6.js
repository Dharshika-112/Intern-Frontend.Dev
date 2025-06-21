function bmiCalculator(weight,height){
    var bmi=Math.round(weight/(height*height));  //formumla  for bmi cal 
    if (bmi<18.5){
        return(`your BMI is ${bmi} So,you are Under weight `);
    }
    else if (bmi>18.5 && bmi<24.9){
        return(`Your BMI is ${bmi} So,you have normal weight`);
    }
    else{
        return(`Your BMI is ${bmi} So , you are Overweight`);
    }
}
let message=bmiCalculator(60,1.7);
console.log(message);