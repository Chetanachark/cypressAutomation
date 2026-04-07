const fs = require('fs');

// Read merged mochawesome report
const report = JSON.parse(fs.readFileSync('merged.json', 'utf-8'));

let totalTests = 0;
let passed = 0;
let failed = 0;
let skipped = 0;
let duration = 0;

// Loop through each spec result safely
report.results.forEach(spec => {
  // Each spec may have suites
  if (spec.stats) {
    totalTests += spec.stats.tests || 0;
    passed += spec.stats.passes || 0;
    failed += spec.stats.failures || 0;
    skipped += spec.stats.pending || 0;
    duration += spec.stats.duration || 0;
  } else if (spec.suites && spec.suites.length > 0) {
    spec.suites.forEach(suite => {
      if (suite.tests) {
        totalTests += suite.tests.length;
        suite.tests.forEach(t => {
          if (t.state === 'passed') passed++;
          else if (t.state === 'failed') failed++;
          else if (t.state === 'pending') skipped++;
          duration += t.duration || 0;
        });
      }
    });
  }
});

// Convert duration to minutes
const durationMinutes = (duration / 60000).toFixed(2);

// Pass rate
const passRate = totalTests > 0 ? ((passed / totalTests) * 100).toFixed(2) : 0;

console.log("\n---- Regression Summary ----");
console.log(`Total: ${totalTests}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Skipped: ${skipped}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Duration: ${durationMinutes} minutes`);
console.log("----------------------------");

// Fail pipeline if any test failed
if (failed > 0) {
  console.log("⚠️ Regression Failed!");
  process.exit(1);
} else {
  console.log("🎉 Hurray! Regression Passed.");
}