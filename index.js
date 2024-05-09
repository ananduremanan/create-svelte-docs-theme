#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const projectPath = process.argv[2];

// Define the current directory of your boilerplate
const currentPath = path.join(__dirname, 'docTheme');

// Define the destination path
const destinationPath = path.join(process.cwd(), projectPath);

// Copy the boilerplate into the new project directory
fs.copySync(currentPath, destinationPath);
