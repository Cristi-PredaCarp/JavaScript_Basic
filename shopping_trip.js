var bread = 2 ;
var milk = 1.5 ;
var cheese = 4 ;
var yogurt = 1.2 ;
var sum = 0 ;
alert( "Hi! Welcome to Cristi's Shop!" );
var input = prompt( "How much bread do you want?" );
sum += input * bread;
var input = prompt( "How much milk (liter) do you want?" );
sum += input * milk;
var input = prompt( "How much cheese do you want" );
sum += input * cheese;
var input = prompt( "How many yogurts do you want?" );
sum += input * yogurt;
console .log( "The total amount to pay is" , sum);
