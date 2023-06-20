const { exec } = require("child_process");

const filesToCompress = [
  {
    input: "./src/lib/conceptPage/conceptPageData.js",
    output: "./src/lib/conceptPage/conceptPageData.js",
  },
  {
    input: "./src/lib/philosophy/philosophyData.js",
    output: "./src/lib/philosophy/philosophyData.js",
  },
  {
    input: "./src/lib/weWorkWith/expertsPage/whyPartnerData.js",
    output: "./src/lib/weWorkWith/expertsPage/whyPartnerData.js",
  },
  {
    input: "./src/lib/weWorkWith/investorsPage/howToInvestData.js",
    output: "./src/lib/weWorkWith/investorsPage/howToInvestData.js",
  },
  {
    input: "./src/lib/weWorkWith/investorsPage/whyInvestData.js",
    output: "./src/lib/weWorkWith/investorsPage/whyInvestData.js",
  },
  {
    input: "./src/lib/weWorkWith/leadersPage/skillsLeadersData.js",
    output: "./src/lib/weWorkWith/leadersPage/skillsLeadersData.js",
  },
  {
    input: "./src/lib/weWorkWith/weWorkWithData.js",
    output: "./src/lib/weWorkWith/weWorkWithData.js",
  },
  {
    input: "./out/_next/static/chunks/473-633cae64390f5e24.js",
    output: "./out/_next/static/chunks/473-633cae64390f5e24.js",
  },
];

filesToCompress.forEach((file) => {
  exec(
    `npx uglify-js ${file.input} -o ${file.output}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(stdout);
    }
  );
});
