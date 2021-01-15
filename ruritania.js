var input= prompt("What's your income?")
var income= parseFloat (input);
//afiseaza in consola suma introdusa de utilizator
console.log(income);

if (income<1000){
  var tax = income*0.1;
}
else{
  var tax=income*0.1 + (income-1000)*0.3;
}
console.log("Your taxes are:", tax );
