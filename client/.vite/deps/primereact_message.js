"use client";
import {
  CheckIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
  TimesCircleIcon
} from "./chunk-FM4QDL76.js";
import "./chunk-LMS6Y442.js";
import {
  ComponentBase,
  IconUtils,
  ObjectUtils,
  PrimeReactContext,
  classNames,
  useHandleStyle,
  useMergeProps
} from "./chunk-DQGIVY7O.js";
import {
  __toESM,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/primereact/message/message.esm.js
var React = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MessageBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Message",
    id: null,
    className: null,
    style: null,
    text: null,
    icon: null,
    severity: "info",
    content: null,
    children: void 0
  },
  css: {
    classes: {
      root: function root(_ref) {
        var severity = _ref.props.severity;
        return classNames("p-inline-message p-component", _defineProperty({}, "p-inline-message-".concat(severity), severity));
      },
      icon: "p-inline-message-icon",
      text: "p-inline-message-text"
    },
    styles: "\n        @layer primereact {\n            .p-inline-message {\n                display: inline-flex;\n                align-items: center;\n                justify-content: center;\n                vertical-align: top;\n            }\n\n            .p-inline-message-icon {\n                flex-shrink: 0;\n            }\n            \n            .p-inline-message-icon-only .p-inline-message-text {\n                visibility: hidden;\n                width: 0;\n            }\n            \n            .p-fluid .p-inline-message {\n                display: flex;\n            }        \n        }\n        "
  }
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Message = React.memo(React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = MessageBase.getProps(inProps, context);
  var elementRef = React.useRef(null);
  var _MessageBase$setMetaD = MessageBase.setMetaData({
    props
  }), ptm = _MessageBase$setMetaD.ptm, cx = _MessageBase$setMetaD.cx, isUnstyled = _MessageBase$setMetaD.isUnstyled;
  useHandleStyle(MessageBase.css.styles, isUnstyled, {
    name: "message"
  });
  var createContent = function createContent2() {
    if (props.content) {
      return ObjectUtils.getJSXElement(props.content, props);
    }
    var text = ObjectUtils.getJSXElement(props.text, props);
    var iconProps = mergeProps({
      className: cx("icon")
    }, ptm("icon"));
    var icon = props.icon;
    if (!icon) {
      switch (props.severity) {
        case "info":
          icon = React.createElement(InfoCircleIcon, iconProps);
          break;
        case "warn":
          icon = React.createElement(ExclamationTriangleIcon, iconProps);
          break;
        case "error":
          icon = React.createElement(TimesCircleIcon, iconProps);
          break;
        case "success":
          icon = React.createElement(CheckIcon, iconProps);
          break;
      }
    }
    var messageIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, iconProps), {
      props
    });
    var textProps = mergeProps({
      className: cx("text")
    }, ptm("text"));
    return React.createElement(React.Fragment, null, messageIcon, React.createElement("span", textProps, text));
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var content = createContent();
  var rootProps = mergeProps({
    className: classNames(props.className, cx("root")),
    style: props.style,
    role: "alert",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, MessageBase.getOtherProps(props), ptm("root"));
  return React.createElement("div", _extends({
    id: props.id,
    ref: elementRef
  }, rootProps), content);
}));
Message.displayName = "Message";
export {
  Message
};
//# sourceMappingURL=primereact_message.js.map
