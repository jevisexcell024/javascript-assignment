
function CalculateBmi(weight,height){
    let bmi = (weight / (height * height) * 13)

if (bmi <= 18.5) {
    console.log("Underweight");
}
else if (bmi >=18.5 || bmi <= 24.9) {
    console.log("Normal weight");
}
else if (bmi >=25 || bmi <= 29.9) {
    console.log("Overweight");
}
else{
    console.log("obese")
}
}
console.log(CalculateBmi(2,2))
