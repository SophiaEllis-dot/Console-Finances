// List of vars
// total for profit/lost
// total changes
// average changes
// greatest increase
// greatest decrease

let total = 0;
let averageChange = 0;

// Finds average
for (let i = 0; i < finances.length; i++) {
  total += finances[i][1];

  for (let k = 1; k < finances.length; k++) {
    averageChange += (finances[k][1] - finances[i][1]) / (finances[i][1] * 100);
  }
}

// Console Logs
console.log("Financial Analysis\n-------------------");
console.log(`Total Months: ${finances.length}`);
console.log(`Total: $${total}`);
console.log(`Average Changes: $${Math.round(total / finances.length)}`);
console.log(
  `Greatest Increase: ${finances[finances.length - 1][0]} ($${
    finances[finances.length - 1][1]
  })`
);
console.log(`Greatest Decrease: ${finances[0][0]} ($ ${finances[0][1]})`);
console.log("Financial Analysis\n-------------------");
