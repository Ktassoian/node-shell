// const cmd = "pwd";
module.exports = function () {
  process.stdout.write(process.cwd());
  process.stdout.write("\nprompt >");
};
