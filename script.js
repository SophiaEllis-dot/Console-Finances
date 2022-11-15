// total for profit/lost
// total changes
// average changes
// greatest increase
// greatest decrease



let total = 0;
let averageChange = 0;
var array = finances;
var i = 0,
  sum = 0,
  average = 0;


  
// loop for finding sum

for (i = 0; i < finances.length; i++) {
  sum = sum + finances[i][1];
}
// finds average
average = sum / finances.length;
average_round = average.toFixed(2);



// Console logs
console.log("Financial Analysis\n-------------------");
console.log(`Total Months: ${finances.length}`);
console.log("Total $" + sum);
console.log("Average Changes $" + average_round);
console.log(
  `Greatest Increase: ${finances[finances.length - 1][0]} ($${
    finances[finances.length - 1][1]
  })`
);
console.log(`Greatest Decrease: ${finances[0][0]} ($ ${finances[0][1]})`);

console.log("Financial Analysis\n-------------------");
