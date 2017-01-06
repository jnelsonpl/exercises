/*
Instructions
Write a program that will convert a dollar amount to the number of coins that make up the amount. 
Use the common American coins of quarters, dimes, nickels, and pennies.
 */

var coinCounterElement = document.getElementById("coincounter"); 

function coinCounter (getChange) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  // getChange is amount of money (67)
  var quarterRemainder = getChange % 25; // take input (getChange (67)) and get the remainder from 25, ie. 17.
  var quarterSubGetChangeFromRemainder = getChange - quarterRemainder; // Subtract the input (getChange (67)) from remainder (17), var is 50.
  // quarterSubGetChangeFromRemainder (50) is a number divisable by 25
  coinPurse.quarters = quarterSubGetChangeFromRemainder / 25; // amount of quarters (2), quarterRemainder holds remainder from getChange (still 17)

  // quarterRemainder is 17
  var dimeRemainder = quarterRemainder % 10; // take 17 and divide by ten and give us remainder 7
  var dimeSubQuarterRemainderFromDimeRemainder = quarterRemainder - dimeRemainder; // 17 - 7
  coinPurse.dimes = dimeSubQuarterRemainderFromDimeRemainder / 10;

  // remainder is 7. lets work on nickles...
  var nickleRemainder = dimeRemainder % 5; // gives us 3 to hold
  var nickleSubDimeRemainderFromNickleRemainder = dimeRemainder - nickleRemainder; // 7 - 3 to give us even 5 to get 1 nickle
  coinPurse.nickles = nickleSubDimeRemainderFromNickleRemainder / 5;

  // remainder is 2
  var pennyRemainder = nickleRemainder % 1;
  var pennySubNickleRemainderFromPennyRemainder = nickleRemainder - pennyRemainder;
  coinPurse.pennies = pennySubNickleRemainderFromPennyRemainder / 1;

  coinCounterElement.innerHTML += "<p style=color: red>" + "Quarters: " + coinPurse.quarters + "</p>";
  coinCounterElement.innerHTML += "<p style=color: blue>" + "Dimes: " + coinPurse.dimes + "</p>";
  coinCounterElement.innerHTML += "<p style=color: green>" + "Nickles: " + coinPurse.nickles + "</p>";
  coinCounterElement.innerHTML += "<p style=color: orange>" + "Pennies: " + coinPurse.pennies + "</p>";

  return coinPurse;
}

var countCoins = prompt("Enter the amount to convert to coins");
coinCounter(countCoins);

// console.log(coinCounter(countCoins));




