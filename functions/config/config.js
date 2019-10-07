"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable import/no-dynamic-require */
var ambiente = require("./env/".concat(process.env.NODE_ENV || 'development', ".js"));

var Config = new ambiente.Config();
var _default = Config;
exports["default"] = _default;