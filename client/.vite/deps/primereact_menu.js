"use client";
import {
  OverlayService
} from "./chunk-FKKBGSXG.js";
import {
  CSSTransition
} from "./chunk-DMGMT4JE.js";
import {
  Ripple
} from "./chunk-GZUX2DBJ.js";
import {
  Portal
} from "./chunk-SI3SA36K.js";
import "./chunk-QPG7G3M7.js";
import {
  ComponentBase,
  DomHandler,
  ESC_KEY_HANDLING_PRIORITIES,
  IconUtils,
  ObjectUtils,
  PrimeReact,
  PrimeReactContext,
  UniqueComponentId,
  ZIndexUtils,
  classNames,
  useDisplayOrder,
  useGlobalOnEscapeKey,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useOverlayListener,
  useUnmountEffect
} from "./chunk-DQGIVY7O.js";
import {
  __toESM,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/primereact/menu/menu.esm.js
var React = __toESM(require_react());
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
var styles = "\n@layer primereact {\n    .p-menu-overlay {\n        position: absolute;\n        /* Github #3122: Prevent animation flickering  */\n        top: -9999px;\n        left: -9999px;\n    }\n\n    .p-menu ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    .p-menu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    .p-menu .p-menuitem-text {\n        line-height: 1;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props, context = _ref.context;
    return classNames("p-menu p-component", {
      "p-menu-overlay": props.popup,
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  menu: "p-menu-list p-reset",
  content: "p-menuitem-content",
  action: function action(_ref2) {
    var item = _ref2.item;
    return classNames("p-menuitem-link", {
      "p-disabled": item.disabled
    });
  },
  menuitem: function menuitem(_ref3) {
    var focused = _ref3.focused;
    return classNames("p-menuitem", {
      "p-focus": focused
    });
  },
  submenuHeader: function submenuHeader(_ref4) {
    var submenu = _ref4.submenu;
    return classNames("p-submenu-header", {
      "p-disabled": submenu.disabled
    });
  },
  separator: "p-menu-separator",
  label: "p-menuitem-text",
  icon: "p-menuitem-icon",
  transition: "p-connected-overlay"
};
var inlineStyles = {
  submenuHeader: function submenuHeader2(_ref5) {
    var submenu = _ref5.submenu;
    return submenu.style;
  },
  menuitem: function menuitem2(_ref6) {
    var item = _ref6.item;
    return item.style;
  }
};
var MenuBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Menu",
    id: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    tabIndex: 0,
    model: null,
    popup: false,
    popupAlignment: "left",
    style: null,
    className: null,
    autoZIndex: true,
    baseZIndex: 0,
    appendTo: null,
    onFocus: null,
    onBlur: null,
    transitionOptions: null,
    onShow: null,
    onHide: null,
    children: void 0,
    closeOnEscape: true
  },
  css: {
    classes,
    styles,
    inlineStyles
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
var Menu = React.memo(React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = MenuBase.getProps(inProps, context);
  var _React$useState = React.useState(props.id), _React$useState2 = _slicedToArray(_React$useState, 2), idState = _React$useState2[0], setIdState = _React$useState2[1];
  var _React$useState3 = React.useState(!props.popup), _React$useState4 = _slicedToArray(_React$useState3, 2), visibleState = _React$useState4[0], setVisibleState = _React$useState4[1];
  var _React$useState5 = React.useState(-1), _React$useState6 = _slicedToArray(_React$useState5, 2), focusedOptionIndex = _React$useState6[0], setFocusedOptionIndex = _React$useState6[1];
  var _React$useState7 = React.useState(-1), _React$useState8 = _slicedToArray(_React$useState7, 2), selectedOptionIndex = _React$useState8[0], setSelectedOptionIndex = _React$useState8[1];
  var _React$useState9 = React.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), focused = _React$useState10[0], setFocused = _React$useState10[1];
  var _MenuBase$setMetaData = MenuBase.setMetaData({
    props,
    state: {
      id: idState,
      visible: visibleState,
      focused
    }
  }), ptm = _MenuBase$setMetaData.ptm, cx = _MenuBase$setMetaData.cx, sx = _MenuBase$setMetaData.sx, isUnstyled = _MenuBase$setMetaData.isUnstyled;
  var getMenuItemPTOptions = function getMenuItemPTOptions2(key, menuContext) {
    return ptm(key, {
      context: menuContext
    });
  };
  useHandleStyle(MenuBase.css.styles, isUnstyled, {
    name: "menu"
  });
  var menuRef = React.useRef(null);
  var listRef = React.useRef(null);
  var targetRef = React.useRef(null);
  var isCloseOnEscape = !!(visibleState && props.popup && props.closeOnEscape);
  var popupMenuDisplayOrder = useDisplayOrder("menu", isCloseOnEscape);
  useGlobalOnEscapeKey({
    callback: function callback(event) {
      hide(event);
    },
    when: isCloseOnEscape && popupMenuDisplayOrder,
    priority: [ESC_KEY_HANDLING_PRIORITIES.MENU, popupMenuDisplayOrder]
  });
  var _useOverlayListener = useOverlayListener({
    target: targetRef,
    overlay: menuRef,
    listener: function listener(event, _ref) {
      var valid = _ref.valid;
      if (valid) {
        hide(event);
        setFocusedOptionIndex(-1);
      }
    },
    when: visibleState
  }), _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var onPanelClick = function onPanelClick2(event) {
    if (props.popup) {
      OverlayService.emit("overlay-click", {
        originalEvent: event,
        target: targetRef.current
      });
    }
  };
  var onItemClick = function onItemClick2(event, item, key) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    if (props.popup) {
      hide(event);
    }
    if (!props.popup && focusedOptionIndex !== key) {
      setFocusedOptionIndex(key);
    }
    if (!item.url) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  var onItemMouseMove = function onItemMouseMove2(event, key) {
    if (event && props.popup && focusedOptionIndex !== key) {
      setFocusedOptionIndex(key);
    }
  };
  var onListFocus = function onListFocus2(event) {
    setFocused(true);
    if (!props.popup) {
      if (selectedOptionIndex !== -1) {
        changeFocusedOptionIndex(selectedOptionIndex);
        setSelectedOptionIndex(-1);
      } else {
        changeFocusedOptionIndex(0);
      }
    }
    props.onFocus && props.onFocus(event);
  };
  var onListBlur = function onListBlur2(event) {
    setFocused(false);
    setFocusedOptionIndex(-1);
    props.onBlur && props.onBlur(event);
  };
  var onListKeyDown = function onListKeyDown2(event) {
    switch (event.code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "Home":
        onHomeKey(event);
        break;
      case "End":
        onEndKey(event);
        break;
      case "Enter":
      case "NumpadEnter":
        onEnterKey(event);
        break;
      case "Space":
        onSpaceKey(event);
        break;
      case "Escape":
        if (props.popup) {
          DomHandler.focus(targetRef.current);
          hide(event);
        }
      case "Tab":
        props.popup && visibleState && hide(event);
        break;
    }
  };
  var onArrowDownKey = function onArrowDownKey2(event) {
    var optionIndex = findNextOptionIndex(focusedOptionIndex);
    changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  };
  var onArrowUpKey = function onArrowUpKey2(event) {
    if (event.altKey && props.popup) {
      DomHandler.focus(targetRef.current);
      hide(event);
      event.preventDefault();
    } else {
      var optionIndex = findPrevOptionIndex(focusedOptionIndex);
      changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  };
  var onHomeKey = function onHomeKey2(event) {
    changeFocusedOptionIndex(0);
    event.preventDefault();
  };
  var onEndKey = function onEndKey2(event) {
    changeFocusedOptionIndex(DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  };
  var onEnterKey = function onEnterKey2(event) {
    var element2 = DomHandler.findSingle(menuRef.current, 'li[id="'.concat("".concat(focusedOptionIndex), '"]'));
    var anchorElement = element2 && DomHandler.findSingle(element2, 'a[data-pc-section="action"]');
    props.popup && DomHandler.focus(targetRef.current);
    anchorElement ? anchorElement.click() : element2 && element2.click();
    event.preventDefault();
  };
  var onSpaceKey = function onSpaceKey2(event) {
    onEnterKey(event);
  };
  var findNextOptionIndex = function findNextOptionIndex2(index) {
    var links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    var matchedOptionIndex = _toConsumableArray(links).findIndex(function(link) {
      return link.id === index;
    });
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  };
  var findPrevOptionIndex = function findPrevOptionIndex2(index) {
    var links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    var matchedOptionIndex = _toConsumableArray(links).findIndex(function(link) {
      return link.id === index;
    });
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  };
  var changeFocusedOptionIndex = function changeFocusedOptionIndex2(index) {
    var links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    var order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
    order > -1 && setFocusedOptionIndex(links[order].getAttribute("id"));
  };
  var focusedOptionId = function focusedOptionId2() {
    return focusedOptionIndex !== -1 ? focusedOptionIndex : null;
  };
  var toggle = function toggle2(event) {
    if (props.popup) {
      visibleState ? hide(event) : show(event);
    }
  };
  var show = function show2(event) {
    targetRef.current = event.currentTarget;
    setVisibleState(true);
    props.onShow && props.onShow(event);
  };
  var hide = function hide2(event) {
    targetRef.current = event.currentTarget;
    setVisibleState(false);
    props.onHide && props.onHide(event);
  };
  var onEnter = function onEnter2() {
    DomHandler.addStyles(menuRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    ZIndexUtils.set("menu", menuRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, props.baseZIndex || context && context.zIndex.menu || PrimeReact.zIndex.menu);
    DomHandler.absolutePosition(menuRef.current, targetRef.current, props.popupAlignment);
    if (props.popup) {
      DomHandler.focus(listRef.current);
      changeFocusedOptionIndex(0);
    }
  };
  var onEntered = function onEntered2() {
    bindOverlayListener();
  };
  var onExit = function onExit2() {
    targetRef.current = null;
    unbindOverlayListener();
  };
  var onExited = function onExited2() {
    ZIndexUtils.clear(menuRef.current);
  };
  useMountEffect(function() {
    if (!idState) {
      setIdState(UniqueComponentId());
    }
  });
  useUnmountEffect(function() {
    ZIndexUtils.clear(menuRef.current);
  });
  React.useImperativeHandle(ref, function() {
    return {
      props,
      toggle,
      show,
      hide,
      getElement: function getElement() {
        return menuRef.current;
      },
      getTarget: function getTarget() {
        return targetRef.current;
      }
    };
  });
  var createSubmenu = function createSubmenu2(submenu, index) {
    var key = idState + "_sub_" + index;
    var items = submenu.items.map(function(item, index2) {
      return createMenuItem(item, index2, key);
    });
    var submenuHeaderProps = mergeProps({
      id: key,
      role: "none",
      className: classNames(submenu.className, cx("submenuHeader", {
        submenu
      })),
      style: sx("submenuHeader", {
        submenu
      }),
      "data-p-disabled": submenu.disabled
    }, ptm("submenuHeader"));
    return React.createElement(React.Fragment, {
      key
    }, React.createElement("li", _extends({}, submenuHeaderProps, {
      key
    }), submenu.label), items);
  };
  var createSeparator = function createSeparator2(item, index) {
    var key = idState + "_separator_" + index;
    var separatorProps = mergeProps({
      id: key,
      className: classNames(item.className, cx("separator")),
      role: "separator"
    }, ptm("separator"));
    return React.createElement("li", _extends({}, separatorProps, {
      key
    }));
  };
  var createMenuItem = function createMenuItem2(item, index) {
    var parentId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (item.visible === false) {
      return null;
    }
    var menuContext = {
      item,
      index,
      parentId
    };
    var linkClassName = classNames("p-menuitem-link", {
      "p-disabled": item.disabled
    });
    var iconClassName = classNames("p-menuitem-icon", item.icon);
    var iconProps = mergeProps({
      className: cx("icon")
    }, getMenuItemPTOptions("icon", menuContext));
    var icon = IconUtils.getJSXIcon(item.icon, _objectSpread({}, iconProps), {
      props
    });
    var labelProps = mergeProps({
      className: cx("label")
    }, getMenuItemPTOptions("label", menuContext));
    var label = item.label && React.createElement("span", labelProps, item.label);
    var key = item.id || (parentId || idState) + "_" + index;
    var contentProps = mergeProps({
      onClick: function onClick(event) {
        return onItemClick(event, item, key);
      },
      onMouseMove: function onMouseMove(event) {
        return onItemMouseMove(event, key);
      },
      className: cx("content")
    }, getMenuItemPTOptions("content", menuContext));
    var actionProps = mergeProps({
      href: item.url || "#",
      className: cx("action", {
        item
      }),
      onFocus: function onFocus(event) {
        return event.stopPropagation();
      },
      target: item.target,
      tabIndex: "-1",
      "aria-label": item.label,
      "aria-hidden": true,
      "aria-disabled": item.disabled,
      "data-p-disabled": item.disabled
    }, getMenuItemPTOptions("action", menuContext));
    var content = React.createElement("div", contentProps, React.createElement("a", actionProps, icon, label, React.createElement(Ripple, null)));
    if (item.template) {
      var defaultContentOptions = {
        onClick: function onClick(event) {
          return onItemClick(event, item, key);
        },
        className: linkClassName,
        tabIndex: "-1",
        labelClassName: "p-menuitem-text",
        iconClassName,
        element: content,
        props
      };
      content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
    }
    var menuitemProps = mergeProps({
      id: key,
      className: classNames(item.className, cx("menuitem", {
        focused: focusedOptionIndex === key
      })),
      style: sx("menuitem", {
        item
      }),
      role: "menuitem",
      "aria-label": item.label,
      "aria-disabled": item.disabled,
      "data-p-focused": focusedOptionId() === key,
      "data-p-disabled": item.disabled || false
    }, getMenuItemPTOptions("menuitem", menuContext));
    return React.createElement("li", _extends({}, menuitemProps, {
      key
    }), content);
  };
  var createItem = function createItem2(item, index) {
    return item.separator ? createSeparator(item, index) : item.items ? createSubmenu(item, index) : createMenuItem(item, index);
  };
  var createMenu = function createMenu2() {
    return props.model.map(createItem);
  };
  var createElement2 = function createElement3() {
    if (props.model) {
      var menuitems = createMenu();
      var rootProps = mergeProps({
        className: classNames(props.className, cx("root", {
          context
        })),
        style: props.style,
        onClick: function onClick(e) {
          return onPanelClick(e);
        }
      }, MenuBase.getOtherProps(props), ptm("root"));
      var menuProps = mergeProps({
        ref: listRef,
        className: cx("menu"),
        id: idState + "_list",
        tabIndex: props.tabIndex || "0",
        role: "menu",
        "aria-label": props.ariaLabel,
        "aria-labelledby": props.ariaLabelledBy,
        "aria-activedescendant": focused ? focusedOptionId() : void 0,
        onFocus: onListFocus,
        onKeyDown: onListKeyDown,
        onBlur: onListBlur
      }, ptm("menu"));
      var transitionProps = mergeProps({
        classNames: cx("transition"),
        "in": visibleState,
        timeout: {
          enter: 120,
          exit: 100
        },
        options: props.transitionOptions,
        unmountOnExit: true,
        onEnter,
        onEntered,
        onExit,
        onExited
      }, ptm("transition"));
      return React.createElement(CSSTransition, _extends({
        nodeRef: menuRef
      }, transitionProps), React.createElement("div", _extends({
        id: props.id,
        ref: menuRef
      }, rootProps), React.createElement("ul", menuProps, menuitems)));
    }
    return null;
  };
  var element = createElement2();
  return props.popup ? React.createElement(Portal, {
    element,
    appendTo: props.appendTo
  }) : element;
}));
Menu.displayName = "Menu";
export {
  Menu
};
//# sourceMappingURL=primereact_menu.js.map
