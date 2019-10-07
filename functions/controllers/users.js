"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UsersController =
/*#__PURE__*/
function () {
  function UsersController(User) {
    _classCallCheck(this, UsersController);

    this.User = User;
  }

  _createClass(UsersController, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                return _context.abrupt("return", "Get ".concat(this.User));

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                throw new Error(_context.t0);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 4]]);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                return _context2.abrupt("return", "Get id ".concat(this.User, " ").concat(id));

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2["catch"](0);
                throw new Error(_context2.t0);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 4]]);
      }));

      function getById(_x) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(userDTO) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                return _context3.abrupt("return", "Post ".concat(this.User, " ").concat(userDTO));

              case 4:
                _context3.prev = 4;
                _context3.t0 = _context3["catch"](0);
                throw new Error(_context3.t0);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 4]]);
      }));

      function create(_x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id, userDTO) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                return _context4.abrupt("return", "Put ".concat(this.User, " ").concat(id, " ").concat(userDTO));

              case 4:
                _context4.prev = 4;
                _context4.t0 = _context4["catch"](0);
                throw new Error(_context4.t0);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 4]]);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(id) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                return _context5.abrupt("return", "Delete ".concat(this.User, " ").concat(id));

              case 4:
                _context5.prev = 4;
                _context5.t0 = _context5["catch"](0);
                throw new Error(_context5.t0);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 4]]);
      }));

      function remove(_x5) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);

  return UsersController;
}();

var _default = UsersController;
exports["default"] = _default;