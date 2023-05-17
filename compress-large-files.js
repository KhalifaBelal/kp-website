const { exec } = require("child_process");

const filesToCompress = [
  {
    input: "./public/glb-assets/sparring-model_dark.glb",
    output: "./public/glb-assets/sparring-model_dark.glb",
  },
  {
    input: "./public/glb-assets/sparring-model_light.glb",
    output: "./public/glb-assets/sparring-model_light.glb",
  },
  {
    input: "./public/glb-assets/strategicplan-model_dark.glb",
    output: "./public/glb-assets/strategicplan-model_dark.glb",
  },
  {
    input: "./public/glb-assets/strategicplan-model_light.glb",
    output: "./public/glb-assets/strategicplan-model_light.glb",
  },
  {
    input: "./public/glb-assets/offer-model_dark.glb",
    output: "./public/glb-assets/offer-model_dark.glb",
  },
  {
    input: "./public/glb-assets/offer-model_light.glb",
    output: "./public/glb-assets/offer-model_light.glb",
  },
  {
    input: "./public/glb-assets/pyramid_dark.glb",
    output: "./public/glb-assets/pyramid_dark.glb",
  },
  {
    input: "./public/glb-assets/pyramid_light.glb",
    output: "./public/glb-assets/pyramid_light.glb",
  },
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
];

filesToCompress.forEach((file) => {
  exec(
    `npx gltf-pipeline -i ${file.input} -o ${file.output} --draco.compressionLevel 7`,
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
