const shell = require("shelljs");
const inquirer = require("inquirer");
const prompsConfig = require("./config/promps");
const chalk = require("chalk");
async function gitCommit() {
  let { type } = await inquirer.prompt(prompsConfig.ciType);
  let { scope } = await inquirer.prompt(prompsConfig.ciScope);
  if (scope === "other") {
    let scopeObj = await inquirer.prompt(prompsConfig.ciScopeMsg);
    scope = scopeObj.scopeMsg;
  }
  // let { type } = await inquirer.prompt(prompsConfig.ciType)
  let { msg } = await inquirer.prompt(prompsConfig.ciMsg);
  shell.exec(
    `git fetch && git pull && git add . && git commit -m "${type}(${scope}):${msg}" && git push`,
    function() {
      console.log(
        chalk.cyan(
          `\n提交脚本: git fetch && git pull && git add . && git commit -m "${type}(${scope}):${msg}" && git push`
        )
      );
    }
  );
}

gitCommit();
