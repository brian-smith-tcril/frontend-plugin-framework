"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@edx/frontend-platform/react");
var _PluginContainerIframe = _interopRequireDefault(require("./PluginContainerIframe"));
var _PluginContainerDirect = _interopRequireDefault(require("./PluginContainerDirect"));
var _constants = require("./data/constants");
var _shapes = require("./data/shapes");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["config", "slotOptions", "slotErrorFallbackComponent"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function PluginContainer(_ref) {
  let {
      config = null,
      slotOptions = {},
      slotErrorFallbackComponent
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  if (!config) {
    return null;
  }

  // this will allow for future plugin types to be inserted in the PluginErrorBoundary
  let renderer = null;
  switch (config.type) {
    case _constants.IFRAME_PLUGIN:
      renderer = /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginContainerIframe.default, _objectSpread({
        config: config
      }, props));
      break;
    case _constants.DIRECT_PLUGIN:
      renderer = /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginContainerDirect.default, _objectSpread({
        config: config,
        slotOptions: slotOptions
      }, props));
      break;
    default:
      break;
  }

  // Retrieve a fallback component from JS config if one exists
  // Otherwise, use the fallback component specific to the PluginSlot if one exists
  // Otherwise, default to fallback from frontend-platform's ErrorBoundary
  const finalFallback = config.errorFallbackComponent || slotErrorFallbackComponent;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.ErrorBoundary, {
    fallbackComponent: finalFallback,
    children: renderer
  });
}
var _default = exports.default = PluginContainer;
PluginContainer.propTypes = {
  /** Configuration for the Plugin in this container — i.e pluginSlot[id].example_plugin */
  config: _propTypes.default.shape(_shapes.pluginConfigShape),
  /** Options passed to the PluginSlot */
  slotOptions: _propTypes.default.shape(_shapes.slotOptionsShape),
  /** Error fallback component for the PluginSlot */
  slotErrorFallbackComponent: _propTypes.default.node
};
//# sourceMappingURL=PluginContainer.js.map