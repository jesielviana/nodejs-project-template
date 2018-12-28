const ambiente = require(`./env/${(process.env.NODE_ENV || 'development')}.js`);

const Config = new ambiente.Config();

export default Config;
