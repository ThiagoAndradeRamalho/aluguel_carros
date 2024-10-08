"use client";
import {
  CSSTransition,
  TransitionGroup_default
} from "./chunk-DMGMT4JE.js";
import {
  Ripple
} from "./chunk-GZUX2DBJ.js";
import {
  Portal
} from "./chunk-SI3SA36K.js";
import "./chunk-QPG7G3M7.js";
import {
  CheckIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
  TimesCircleIcon
} from "./chunk-FM4QDL76.js";
import {
  IconBase
} from "./chunk-LMS6Y442.js";
import {
  ComponentBase,
  DomHandler,
  IconUtils,
  ObjectUtils,
  PrimeReact,
  PrimeReactContext,
  ZIndexUtils,
  classNames,
  useHandleStyle,
  useMergeProps,
  useTimeout,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-DQGIVY7O.js";
import {
  __toESM,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/primereact/toast/toast.esm.js
var React2 = __toESM(require_react());

// node_modules/primereact/icons/times/index.esm.js
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
var TimesIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }));
}));
TimesIcon.displayName = "TimesIcon";

// node_modules/primereact/toast/toast.esm.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends2.apply(this, arguments);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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
var styles = "\n@layer primereact {\n    .p-toast {\n        width: calc(100% - var(--toast-indent, 0px));\n        max-width: 25rem;\n    }\n    \n    .p-toast-message-icon {\n        flex-shrink: 0;\n    }\n    \n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n    }\n    \n    .p-toast-message-text {\n        flex: 1 1 auto;\n    }\n    \n    .p-toast-summary {\n        overflow-wrap: anywhere;\n    }\n    \n    .p-toast-detail {\n        overflow-wrap: anywhere;\n    }\n    \n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n    \n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n    \n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n    \n    .p-toast-icon-close {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-toast-icon-close.p-link {\n        cursor: pointer;\n    }\n    \n    /* Animations */\n    .p-toast-message-enter {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n    \n    .p-toast-message-enter-active {\n        opacity: 1;\n        transform: translateY(0);\n        transition: transform 0.3s, opacity 0.3s;\n    }\n    \n    .p-toast-message-enter-done {\n        transform: none;\n    }\n    \n    .p-toast-message-exit {\n        opacity: 1;\n        max-height: 1000px;\n    }\n    \n    .p-toast .p-toast-message.p-toast-message-exit-active {\n        opacity: 0;\n        max-height: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props, context = _ref.context;
    return classNames("p-toast p-component p-toast-" + props.position, props.className, {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  message: {
    message: function message(_ref2) {
      var severity = _ref2.severity;
      return classNames("p-toast-message", _defineProperty({}, "p-toast-message-".concat(severity), severity));
    },
    content: "p-toast-message-content",
    buttonicon: "p-toast-icon-close-icon",
    closeButton: "p-toast-icon-close p-link",
    icon: "p-toast-message-icon",
    text: "p-toast-message-text",
    summary: "p-toast-summary",
    detail: "p-toast-detail"
  },
  transition: "p-toast-message"
};
var inlineStyles = {
  root: function root2(_ref3) {
    var props = _ref3.props;
    return {
      position: "fixed",
      top: props.position === "top-right" || props.position === "top-left" || props.position === "top-center" ? "20px" : props.position === "center" ? "50%" : null,
      right: (props.position === "top-right" || props.position === "bottom-right") && "20px",
      bottom: (props.position === "bottom-left" || props.position === "bottom-right" || props.position === "bottom-center") && "20px",
      left: props.position === "top-left" || props.position === "bottom-left" ? "20px" : props.position === "center" || props.position === "top-center" || props.position === "bottom-center" ? "50%" : null
    };
  }
};
var ToastBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Toast",
    id: null,
    className: null,
    content: null,
    style: null,
    baseZIndex: 0,
    position: "top-right",
    transitionOptions: null,
    appendTo: "self",
    onClick: null,
    onRemove: null,
    onShow: null,
    onHide: null,
    onMouseEnter: null,
    onMouseLeave: null,
    children: void 0
  },
  css: {
    classes,
    styles,
    inlineStyles
  }
});
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var FilterMatchMode = Object.freeze({
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter",
  CUSTOM: "custom"
});
var PrimeReact2 = _createClass(function PrimeReact3() {
  _classCallCheck(this, PrimeReact3);
});
_defineProperty(PrimeReact2, "ripple", false);
_defineProperty(PrimeReact2, "inputStyle", "outlined");
_defineProperty(PrimeReact2, "locale", "en");
_defineProperty(PrimeReact2, "appendTo", null);
_defineProperty(PrimeReact2, "cssTransition", true);
_defineProperty(PrimeReact2, "autoZIndex", true);
_defineProperty(PrimeReact2, "hideOverlaysOnDocumentScrolling", false);
_defineProperty(PrimeReact2, "nonce", null);
_defineProperty(PrimeReact2, "nullSortOrder", 1);
_defineProperty(PrimeReact2, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
_defineProperty(PrimeReact2, "pt", void 0);
_defineProperty(PrimeReact2, "filterMatchModeOptions", {
  text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
  numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
  date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
});
_defineProperty(PrimeReact2, "changeTheme", function(currentTheme, newTheme, linkElementId, callback) {
  var _linkElement$parentNo;
  var linkElement = document.getElementById(linkElementId);
  if (!linkElement) {
    throw Error("Element with id ".concat(linkElementId, " not found."));
  }
  var newThemeUrl = linkElement.getAttribute("href").replace(currentTheme, newTheme);
  var newLinkElement = document.createElement("link");
  newLinkElement.setAttribute("rel", "stylesheet");
  newLinkElement.setAttribute("id", linkElementId);
  newLinkElement.setAttribute("href", newThemeUrl);
  newLinkElement.addEventListener("load", function() {
    if (callback) {
      callback();
    }
  });
  (_linkElement$parentNo = linkElement.parentNode) === null || _linkElement$parentNo === void 0 || _linkElement$parentNo.replaceChild(newLinkElement, linkElement);
});
var locales = {
  en: {
    accept: "Yes",
    addRule: "Add Rule",
    am: "AM",
    apply: "Apply",
    cancel: "Cancel",
    choose: "Choose",
    chooseDate: "Choose Date",
    chooseMonth: "Choose Month",
    chooseYear: "Choose Year",
    clear: "Clear",
    completed: "Completed",
    contains: "Contains",
    custom: "Custom",
    dateAfter: "Date is after",
    dateBefore: "Date is before",
    dateFormat: "mm/dd/yy",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    emptyFilterMessage: "No results found",
    emptyMessage: "No available options",
    emptySearchMessage: "No results found",
    emptySelectionMessage: "No selected item",
    endsWith: "Ends with",
    equals: "Equals",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filter",
    firstDayOfWeek: 0,
    gt: "Greater than",
    gte: "Greater than or equal to",
    lt: "Less than",
    lte: "Less than or equal to",
    matchAll: "Match All",
    matchAny: "Match Any",
    medium: "Medium",
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    nextDecade: "Next Decade",
    nextHour: "Next Hour",
    nextMinute: "Next Minute",
    nextMonth: "Next Month",
    nextSecond: "Next Second",
    nextYear: "Next Year",
    noFilter: "No Filter",
    notContains: "Not contains",
    notEquals: "Not equals",
    now: "Now",
    passwordPrompt: "Enter a password",
    pending: "Pending",
    pm: "PM",
    prevDecade: "Previous Decade",
    prevHour: "Previous Hour",
    prevMinute: "Previous Minute",
    prevMonth: "Previous Month",
    prevSecond: "Previous Second",
    prevYear: "Previous Year",
    reject: "No",
    removeRule: "Remove Rule",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    showMonthAfterYear: false,
    startsWith: "Starts with",
    strong: "Strong",
    today: "Today",
    upload: "Upload",
    weak: "Weak",
    weekHeader: "Wk",
    aria: {
      cancelEdit: "Cancel Edit",
      close: "Close",
      collapseRow: "Row Collapsed",
      editRow: "Edit Row",
      expandRow: "Row Expanded",
      falseLabel: "False",
      filterConstraint: "Filter Constraint",
      filterOperator: "Filter Operator",
      firstPageLabel: "First Page",
      gridView: "Grid View",
      hideFilterMenu: "Hide Filter Menu",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      lastPageLabel: "Last Page",
      listView: "List View",
      moveAllToSource: "Move All to Source",
      moveAllToTarget: "Move All to Target",
      moveBottom: "Move Bottom",
      moveDown: "Move Down",
      moveToSource: "Move to Source",
      moveToTarget: "Move to Target",
      moveTop: "Move Top",
      moveUp: "Move Up",
      navigation: "Navigation",
      next: "Next",
      nextPageLabel: "Next Page",
      nullLabel: "Not Selected",
      pageLabel: "Page {page}",
      otpLabel: "Please enter one time password character {0}",
      passwordHide: "Hide Password",
      passwordShow: "Show Password",
      previous: "Previous",
      previousPageLabel: "Previous Page",
      rotateLeft: "Rotate Left",
      rotateRight: "Rotate Right",
      rowsPerPageLabel: "Rows per page",
      saveEdit: "Save Edit",
      scrollTop: "Scroll Top",
      selectAll: "All items selected",
      selectRow: "Row Selected",
      showFilterMenu: "Show Filter Menu",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      star: "1 star",
      stars: "{star} stars",
      trueLabel: "True",
      unselectAll: "All items unselected",
      unselectRow: "Row Unselected",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out"
    }
  }
};
function localeOption(key, locale) {
  if (key.includes("__proto__") || key.includes("prototype")) {
    throw new Error("Unsafe key detected");
  }
  var _locale = locale || PrimeReact2.locale;
  try {
    return localeOptions(_locale)[key];
  } catch (error) {
    throw new Error("The ".concat(key, " option is not found in the current locale('").concat(_locale, "')."));
  }
}
function localeOptions(locale) {
  var _locale = locale || PrimeReact2.locale;
  if (_locale.includes("__proto__") || _locale.includes("prototype")) {
    throw new Error("Unsafe locale detected");
  }
  return locales[_locale];
}
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
var ToastMessage = React2.memo(React2.forwardRef(function(props, ref) {
  var mergeProps = useMergeProps();
  var messageInfo = props.messageInfo, parentMetaData = props.metaData, _props$ptCallbacks = props.ptCallbacks, ptm = _props$ptCallbacks.ptm, ptmo = _props$ptCallbacks.ptmo, cx = _props$ptCallbacks.cx, index = props.index;
  var _messageInfo$message = messageInfo.message, severity = _messageInfo$message.severity, content = _messageInfo$message.content, summary = _messageInfo$message.summary, detail = _messageInfo$message.detail, closable = _messageInfo$message.closable, life = _messageInfo$message.life, sticky = _messageInfo$message.sticky, _className = _messageInfo$message.className, style = _messageInfo$message.style, _contentClassName = _messageInfo$message.contentClassName, contentStyle = _messageInfo$message.contentStyle, _icon = _messageInfo$message.icon, _closeIcon = _messageInfo$message.closeIcon, pt = _messageInfo$message.pt;
  var params = {
    index
  };
  var parentParams = _objectSpread(_objectSpread({}, parentMetaData), params);
  var _React$useState = React2.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focused = _React$useState2[0], setFocused = _React$useState2[1];
  var _useTimeout = useTimeout(function() {
    onClose();
  }, life || 3e3, !sticky && !focused), _useTimeout2 = _slicedToArray(_useTimeout, 1), clearTimer = _useTimeout2[0];
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread({
      hostName: props.hostName
    }, options));
  };
  var onClose = function onClose2() {
    clearTimer();
    props.onClose && props.onClose(messageInfo);
  };
  var onClick = function onClick2(event) {
    if (props.onClick && !(DomHandler.hasClass(event.target, "p-toast-icon-close") || DomHandler.hasClass(event.target, "p-toast-icon-close-icon"))) {
      props.onClick(messageInfo.message);
    }
  };
  var onMouseEnter = function onMouseEnter2(event) {
    props.onMouseEnter && props.onMouseEnter(event);
    if (event.defaultPrevented) {
      return;
    }
    if (!sticky) {
      clearTimer();
      setFocused(true);
    }
  };
  var onMouseLeave = function onMouseLeave2(event) {
    props.onMouseLeave && props.onMouseLeave(event);
    if (event.defaultPrevented) {
      return;
    }
    if (!sticky) {
      setFocused(false);
    }
  };
  var createCloseIcon = function createCloseIcon2() {
    var buttonIconProps = mergeProps({
      className: cx("message.buttonicon")
    }, getPTOptions("buttonicon", parentParams), ptmo(pt, "buttonicon", _objectSpread(_objectSpread({}, params), {}, {
      hostName: props.hostName
    })));
    var icon = _closeIcon || React2.createElement(TimesIcon, buttonIconProps);
    var closeIcon2 = IconUtils.getJSXIcon(icon, _objectSpread({}, buttonIconProps), {
      props
    });
    var ariaLabel = props.ariaCloseLabel || localeOption("close");
    var closeButtonProps = mergeProps({
      type: "button",
      className: cx("message.closeButton"),
      onClick: onClose,
      "aria-label": ariaLabel
    }, getPTOptions("closeButton", parentParams), ptmo(pt, "closeButton", _objectSpread(_objectSpread({}, params), {}, {
      hostName: props.hostName
    })));
    if (closable !== false) {
      return React2.createElement("div", null, React2.createElement("button", closeButtonProps, closeIcon2, React2.createElement(Ripple, null)));
    }
    return null;
  };
  var createMessage = function createMessage2() {
    if (messageInfo) {
      var contentEl = ObjectUtils.getJSXElement(content, {
        message: messageInfo.message,
        onClick,
        onClose
      });
      var iconProps = mergeProps({
        className: cx("message.icon")
      }, getPTOptions("icon", parentParams), ptmo(pt, "icon", _objectSpread(_objectSpread({}, params), {}, {
        hostName: props.hostName
      })));
      var icon = _icon;
      if (!_icon) {
        switch (severity) {
          case "info":
            icon = React2.createElement(InfoCircleIcon, iconProps);
            break;
          case "warn":
            icon = React2.createElement(ExclamationTriangleIcon, iconProps);
            break;
          case "error":
            icon = React2.createElement(TimesCircleIcon, iconProps);
            break;
          case "success":
            icon = React2.createElement(CheckIcon, iconProps);
            break;
        }
      }
      var messageIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, iconProps), {
        props
      });
      var textProps = mergeProps({
        className: cx("message.text")
      }, getPTOptions("text", parentParams), ptmo(pt, "text", _objectSpread(_objectSpread({}, params), {}, {
        hostName: props.hostName
      })));
      var summaryProps = mergeProps({
        className: cx("message.summary")
      }, getPTOptions("summary", parentParams), ptmo(pt, "summary", _objectSpread(_objectSpread({}, params), {}, {
        hostName: props.hostName
      })));
      var detailProps = mergeProps({
        className: cx("message.detail")
      }, getPTOptions("detail", parentParams), ptmo(pt, "detail", _objectSpread(_objectSpread({}, params), {}, {
        hostName: props.hostName
      })));
      return contentEl || React2.createElement(React2.Fragment, null, messageIcon, React2.createElement("div", textProps, React2.createElement("span", summaryProps, summary), detail && React2.createElement("div", detailProps, detail)));
    }
    return null;
  };
  var message2 = createMessage();
  var closeIcon = createCloseIcon();
  var messageProps = mergeProps({
    ref,
    className: classNames(_className, cx("message.message", {
      severity
    })),
    style,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    onClick,
    onMouseEnter,
    onMouseLeave
  }, getPTOptions("message", parentParams), ptmo(pt, "root", _objectSpread(_objectSpread({}, params), {}, {
    hostName: props.hostName
  })));
  var contentProps = mergeProps({
    className: classNames(_contentClassName, cx("message.content")),
    style: contentStyle
  }, getPTOptions("content", parentParams), ptmo(pt, "content", _objectSpread(_objectSpread({}, params), {}, {
    hostName: props.hostName
  })));
  return React2.createElement("div", messageProps, React2.createElement("div", contentProps, message2, closeIcon));
}));
ToastMessage.displayName = "ToastMessage";
var messageIdx = 0;
var Toast = React2.memo(React2.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React2.useContext(PrimeReactContext);
  var props = ToastBase.getProps(inProps, context);
  var _React$useState = React2.useState([]), _React$useState2 = _slicedToArray(_React$useState, 2), messagesState = _React$useState2[0], setMessagesState = _React$useState2[1];
  var containerRef = React2.useRef(null);
  var metaData = {
    props,
    state: {
      messages: messagesState
    }
  };
  var ptCallbacks = ToastBase.setMetaData(metaData);
  useHandleStyle(ToastBase.css.styles, ptCallbacks.isUnstyled, {
    name: "toast"
  });
  var show = function show2(messageInfo) {
    if (messageInfo) {
      setMessagesState(function(prev) {
        return assignIdentifiers(prev, messageInfo, true);
      });
    }
  };
  var assignIdentifiers = function assignIdentifiers2(currentState, messageInfo, copy) {
    var messages;
    if (Array.isArray(messageInfo)) {
      var multipleMessages = messageInfo.reduce(function(acc, message3) {
        acc.push({
          _pId: messageIdx++,
          message: message3
        });
        return acc;
      }, []);
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray(currentState), _toConsumableArray(multipleMessages)) : multipleMessages;
      } else {
        messages = multipleMessages;
      }
    } else {
      var message2 = {
        _pId: messageIdx++,
        message: messageInfo
      };
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray(currentState), [message2]) : [message2];
      } else {
        messages = [message2];
      }
    }
    return messages;
  };
  var clear = function clear2() {
    ZIndexUtils.clear(containerRef.current);
    setMessagesState([]);
  };
  var replace = function replace2(messageInfo) {
    setMessagesState(function(previousMessagesState) {
      return assignIdentifiers(previousMessagesState, messageInfo, false);
    });
  };
  var remove = function remove2(messageInfo) {
    var removeMessage = messageInfo._pId ? messageInfo._pId : messageInfo.message || messageInfo;
    setMessagesState(function(prev) {
      return prev.filter(function(msg) {
        return msg._pId !== messageInfo._pId && !ObjectUtils.deepEquals(msg.message, removeMessage);
      });
    });
    props.onRemove && props.onRemove(messageInfo.message || removeMessage);
  };
  var onClose = function onClose2(messageInfo) {
    remove(messageInfo);
  };
  var onEntered = function onEntered2() {
    props.onShow && props.onShow();
  };
  var onExited = function onExited2() {
    messagesState.length === 1 && ZIndexUtils.clear(containerRef.current);
    props.onHide && props.onHide();
  };
  useUpdateEffect(function() {
    ZIndexUtils.set("toast", containerRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, props.baseZIndex || context && context.zIndex.toast || PrimeReact.zIndex.toast);
  }, [messagesState, props.baseZIndex]);
  useUnmountEffect(function() {
    ZIndexUtils.clear(containerRef.current);
  });
  React2.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      replace,
      remove,
      clear,
      getElement: function getElement() {
        return containerRef.current;
      }
    };
  });
  var createElement3 = function createElement4() {
    var rootProps = mergeProps({
      ref: containerRef,
      id: props.id,
      className: ptCallbacks.cx("root", {
        context
      }),
      style: ptCallbacks.sx("root")
    }, ToastBase.getOtherProps(props), ptCallbacks.ptm("root"));
    var transitionProps = mergeProps({
      classNames: ptCallbacks.cx("transition"),
      timeout: {
        enter: 300,
        exit: 300
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEntered,
      onExited
    }, ptCallbacks.ptm("transition"));
    return React2.createElement("div", rootProps, React2.createElement(TransitionGroup_default, null, messagesState && messagesState.map(function(messageInfo, index) {
      var messageRef = React2.createRef();
      return React2.createElement(CSSTransition, _extends2({
        nodeRef: messageRef,
        key: messageInfo._pId
      }, transitionProps), inProps.content ? ObjectUtils.getJSXElement(inProps.content, {
        message: messageInfo.message
      }) : React2.createElement(ToastMessage, {
        hostName: "Toast",
        ref: messageRef,
        messageInfo,
        index,
        onClick: props.onClick,
        onClose,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        closeIcon: props.closeIcon,
        ptCallbacks,
        metaData
      }));
    })));
  };
  var element = createElement3();
  return React2.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
}));
Toast.displayName = "Toast";
export {
  Toast
};
//# sourceMappingURL=primereact_toast.js.map
