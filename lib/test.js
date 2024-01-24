"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action = action;
function action(func) {
  var currentArgs = null;

  // const execFunc = async () => {
  //     if (currentArgs) {
  //         const args = currentArgs;
  //         currentArgs = null;
  //         await func(...args);
  //     }
  // };

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    currentArgs = args;
    // do something
  };
}
