'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
	async prompting() {
		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the remarkable ' + chalk.red('generator-discord-bot') + ' generator!'
		));
		this.answers = await this.prompt(
			[
				{
			type    : 'input',
			name    : 'token',
			message : 'Your discord bot token',
			default : ''
		  },
		  {
			type    : 'input',
			name    : 'ownerID',
			message : 'Owner discord ID (Used for permissions)',
			default : ''
		  }
		]
		);


	}

	writing() {

		this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath(), {token: this.answers.token, ownerID: this.answers.ownerID});
		this.fs.copy(this.templatePath('**/.*'), this.destinationPath());
	}

	install() {
		this.installDependencies({bower: false});
	}
};
