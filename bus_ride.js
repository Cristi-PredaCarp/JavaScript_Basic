var sum = 0;
var station1 = parseInt(prompt("Station1! How many people go on the bus?"));
if (sum + station1 >= 30) {
console.log("The buss is full", passenger + station1 - 30, "have to walk.");
passenger = 30;
}
else {
sum += station1;
console.log(station1 + " passengers are going on the bus.");
}
var station2 = parseInt(prompt("Station2! How many people go on the bus?"));
if (sum + station2 >= 30) {
console.log("The buss is full", sum + station2 - 30, "have to walk.");
sum = 30;
}
else {
sum += station2;
console.log(station2 + " passengers are going on the bus.");
}
var station3 = parseInt(prompt("Station3! How many people go on the bus?"));
if (sum + station3 >= 30) {
console.log("The buss is full", sum + station3 - 30, "have to walk.");
sum = 30;
}
else {
sum += station3;
console.log(station3 + " passengers are going on the bus.");
}
console.log("The bus has arrived with " , sum , " people on board!");
