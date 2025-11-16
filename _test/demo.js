const { convertTime } = require("../index");

console.log("=== Valid Timestamp ===");
const timestamp = Date.now();
const transformed = convertTime(timestamp);
console.log("✔ Timestamp:", timestamp);
console.log("✔ Time breakdown:", transformed);

console.log("\n=== Invalid Input (NaN) ===");
const invalid = convertTime("abc");
console.log("✔ Invalid input result:", invalid);
