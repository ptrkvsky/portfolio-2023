module.exports = {
  ci: {
    collect: {
      // Other collect options...
      numberOfRuns: 1, // Adjust as needed
    },
    upload: {
      // Other upload options...
    },
    assert: {
      // Include any other assertions you want to keep
      "categories:performance": ["error", { minScore: 0.9 }],
      "categories:accessibility": ["warn", { minScore: 0.9 }],
      "categories:best-practices": ["warn", { minScore: 0.9 }],
      "categories:seo": ["warn", { minScore: 0.9 }],
      // Exclude the bf-cache audit
      "bf-cache": "off",
    },
  },
};
