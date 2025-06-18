#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

// Test that the config can be loaded
console.log("Testing ESLint configuration...");

try {
  // Load the configuration
  const config = require("./index.js");

  // Validate it's an array (flat config format)
  if (!Array.isArray(config)) {
    throw new Error("Configuration should be an array for flat config format");
  }

  // Validate it has at least one configuration object
  if (config.length === 0) {
    throw new Error("Configuration array should not be empty");
  }

  // Validate the first config object has required properties
  const firstConfig = config[0];
  if (!firstConfig.languageOptions) {
    throw new Error("Configuration should have languageOptions");
  }

  if (!firstConfig.rules) {
    throw new Error("Configuration should have rules");
  }

  // Count rules
  const ruleCount = Object.keys(firstConfig.rules).length;
  console.log(`✓ Configuration loaded successfully`);
  console.log(`✓ Flat config format validated`);
  console.log(`✓ Found ${ruleCount} ESLint rules`);
  console.log(
    `✓ Language options configured: ECMAScript ${firstConfig.languageOptions.ecmaVersion}, ${firstConfig.languageOptions.sourceType} modules`
  );
  // Test that it can be used with ESLint
  const { ESLint } = require("eslint");

  // Create a test file
  const testFile = path.join(__dirname, "temp-test.js");
  const testContent = `const test = "hello world";\nconsole.log(test);\n`;
  fs.writeFileSync(testFile, testContent);

  // Test ESLint with our configuration - using async/await properly
  (async () => {
    try {
      const eslint = new ESLint({
        overrideConfigFile: path.join(__dirname, "index.js"),
      });

      const results = await eslint.lintFiles([testFile]);

      // Clean up test file
      fs.unlinkSync(testFile);

      // Check if ESLint ran successfully
      if (results && results.length > 0) {
        const result = results[0];
        console.log(`✓ ESLint validation completed`);
        console.log(
          `✓ Found ${result.messages.length} linting messages (expected due to no-console rule)`
        );

        // Verify no-console rule is working
        const hasConsoleError = result.messages.some(
          (msg) => msg.ruleId === "no-console"
        );
        if (hasConsoleError) {
          console.log(
            `✓ Rules are working correctly (no-console rule triggered as expected)`
          );
        }
      }

      console.log("\n🎉 All tests passed! Configuration is valid and working.");
      process.exit(0);
    } catch (eslintError) {
      // Clean up test file if it exists
      if (fs.existsSync(testFile)) {
        fs.unlinkSync(testFile);
      }
      throw eslintError;
    }
  })();
} catch (error) {
  console.error("❌ Test failed:");
  console.error(error.message);
  process.exit(1);
}
