/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs-extra');
const process = require('process');
const { execSync } = require('child_process');

const run = () => {
  console.log('Slet mapper og filer der autogeneres af Open API Generator CLI');

  try {
    const files = fs.readdirSync(__dirname + '/src');

    files.forEach((file) => {
      const filename = __dirname + '/src' + file;
      fs.removeSync(filename);
    });

    console.log('Generer Open API client');

    process.chdir(__dirname + '/openapi');
    execSync('npx openapi-generator-cli generate');
  } catch (e) {
    console.log(e);
  }
};

run();
