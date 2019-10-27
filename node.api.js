"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(options) {
  if (!options.id) {
    console.log("The Google Analytics plugin expects a google analytics \"id\" option to be provided like ['react-static-plugin-google-analytics', {id: 'GOOGLE ANALYTICS ID'}]");
    return;
  }

  var scriptUrl = "https://www.googletagmanager.com/gtag/js?id=".concat(options.id);
  var gTag = "\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', '".concat(options.id, "');\n  ");
  return {
    Head: function Head() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("script", {
        async: true,
        src: scriptUrl
      }), _react["default"].createElement("script", {
        dangerouslySetInnerHTML: {
          __html: gTag
        }
      }));
    }
  };
};

exports["default"] = _default;

