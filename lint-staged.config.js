module.exports = {
  "**/*.(md|json)": filenames => `yarn prettier --write ${filenames.join(" ")}`,
  "**/*.(ts|tsx|js)": filenames => [
    `prettier --write ${filenames.join(" ")}`,
    `eslint --fix ${filenames.join(" ")}`,
  ],
};
