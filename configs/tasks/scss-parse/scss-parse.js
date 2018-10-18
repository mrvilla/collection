// ## SCSS symbols PARSER
// see: https://github.com/mrmlnc/scss-symbols-parser

'use strict';

const fs = require('fs-extra');
const chalk = require('chalk');
const symbolsParser = require('scss-symbols-parser');
const veamsConfig = require('../../../veams-cli.json');

const sourceFilePath = `${process.cwd()}/${veamsConfig.paths.app}/shared/styles/global/_vars.scss`;
const outputFilePath = `${process.cwd()}/${veamsConfig.paths.app}/styleguide/output-data/scss-parse.hjson`;


function createAST(string) {
	let ast = symbolsParser.parseSymbols(string);
	return ast;
}

fs.readFile(sourceFilePath, 'utf-8')
	.then(data => {
		try {
			let outputData = createAST(data);

			fs.writeFile(outputFilePath, JSON.stringify(outputData));
			console.log(chalk.green(`ScssParse was successfull`));
		} catch(err) {
			console.error(chalk.red('Error in ScssParse: Files cannot be written:\n', err));
		}
	})
	.catch(err => console.error(chalk.red('Error in ScssParse data generation :: Files cannot be written:\n', err)));
