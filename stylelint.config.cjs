module.exports = {
  extends: ["stylelint-config-recommended"],
  rules: {
    // Allow Tailwind's at-rules
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ]
  }
};
