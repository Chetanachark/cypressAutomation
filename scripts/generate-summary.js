const fs = require("fs");
const path = "./merged.json";

// Check if merged.json exists
if (!fs.existsSync(path)) {
  console.error("No merged.json found. Run cy:report first.");
  process.exit(1);
}

// Read merged JSON
const data = JSON.parse(fs.readFileSync(path));

// Use overall stats
const stats = data.stats;

const total = stats.tests || 0;
const passed = stats.passes || 0;
const failed = stats.failures || 0;
const durationMins = ((stats.duration || 0) / 60000).toFixed(2);
const passRate = total > 0 ? ((passed / total) * 100).toFixed(2) : 0;

console.log("---- Regression Summary ----");
console.log(`Total: ${total}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Duration: ${durationMins} mins`);

if (failed > 0) {
  console.log("⚠️ Regression Failed!");
  process.exit(1);
} else {
  console.log("Hurrrayy.....Regression Passed.");
}