const { exec } = require("child_process");

const filesToCompress = [
  {
    input: "./out/_next/static/chunks/05ee798f-8231db80582eed74.js",
    output: "./out/_next/static/chunks/05ee798f-8231db80582eed74.js",
  },
  {
    input: "./out/_next/static/chunks/167-4f711d550d7696af.js",
    output: "./out/_next/static/chunks/167-4f711d550d7696af.js",
  },
  {
    input: "./out/_next/static/chunks/2443530c-ae343e094d078836.js",
    output: "./out/_next/static/chunks/2443530c-ae343e094d078836.js",
  },
  {
    input: "./out/_next/static/chunks/414-90d59fdc595e78a1.js",
    output: "./out/_next/static/chunks/414-90d59fdc595e78a1.js",
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
