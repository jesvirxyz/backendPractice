var environment = require('./environment.json');
var env = process.env.NODE_ENV || 'development';
const path = require("path");
const rootPath = path.normalize(__dirname + "/..");

if (env === 'development') {
  var envConfig = environment[env];
  envConfig.root = rootPath;
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
} else {
  var envConfig = environment.prod;
  envConfig.root = rootPath;
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}