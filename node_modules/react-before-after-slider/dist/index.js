'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * @class BlockImage
 *
 * Component that displays a div with background-image instead of an img for
 * more control. Also allows for specifying an optional fallback image and
 * loading component.
 */

var BlockImage = function (_PureComponent) {
  inherits(BlockImage, _PureComponent);

  function BlockImage() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, BlockImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = BlockImage.__proto__ || Object.getPrototypeOf(BlockImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      status: 'loading'
    }, _this._isMounted = false, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(BlockImage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._isMounted = true;
      this._reload(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.src !== props.src || this.props.fallback !== props.fallback && this.state.status === 'error') {
        this._reload(props);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          fallback = _props.fallback,
          showPreview = _props.showPreview,
          loader = _props.loader,
          backgroundPosition = _props.backgroundPosition,
          backgroundRepeat = _props.backgroundRepeat,
          backgroundSize = _props.backgroundSize,
          children = _props.children,
          style = _props.style,
          rest = objectWithoutProperties(_props, ['src', 'fallback', 'showPreview', 'loader', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'children', 'style']);
      var status = this.state.status;


      var bgImageStyles = {};
      var loadingAndShowPreview = status === 'loading' && showPreview;

      var url = src || fallback;

      if (fallback && (status === 'error' || loadingAndShowPreview)) {
        url = fallback;
      }

      if (url) {
        var backgroundImage = 'url(' + url + ')';
        bgImageStyles.backgroundImage = backgroundImage;
        bgImageStyles.backgroundPosition = backgroundPosition;
        bgImageStyles.backgroundRepeat = backgroundRepeat;
        bgImageStyles.backgroundSize = backgroundSize;
      }

      var rootStyle = Object.assign(bgImageStyles, style);

      return React__default.createElement(
        'div',
        _extends({
          style: rootStyle
        }, rest),
        children,
        loadingAndShowPreview && loader
      );
    }
  }, {
    key: '_reload',
    value: function _reload(props) {
      var _this2 = this;

      var src = props.src;


      if (!src) {
        this.setState({ status: 'error' });
      } else {
        var img = new Image();

        img.onload = function () {
          if (_this2._isMounted) {
            _this2.setState({ status: 'success' });
          }
        };

        img.onerror = img.onabort = function (event) {
          if (_this2._isMounted) {
            _this2.setState({ status: 'error' });
          }
        };

        this.setState({ status: 'loading' });
        img.src = src;
      }
    }
  }]);
  return BlockImage;
}(React.PureComponent);

BlockImage.propTypes = {
  // preferred image source url
  src: PropTypes.string,

  // fallback image source url
  fallback: PropTypes.string,

  // optional children
  children: PropTypes.node,

  // whether or not to show fallback while preferred src is loading
  showPreview: PropTypes.bool,

  // node to show while image is loading
  loader: PropTypes.node,

  // optionally control css background-size
  backgroundSize: PropTypes.string,

  // optionally control css background-position
  backgroundPosition: PropTypes.string,

  // optionally control css background-repeat
  backgroundRepeat: PropTypes.string,

  // optional style override
  style: PropTypes.object
};
BlockImage.defaultProps = {
  showPreview: false,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_container__2pRR5 {\n  position: relative;\n}\n\n.styles_wrapper__3KXDn {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  top: -10%;\n  left: -10%;\n}\n\n.styles_content__1Phom {\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: col-resize;\n}\n\n.styles_content__1Phom, .styles_before__2pu1e, .styles_after__OMQap {\n  width: 100%;\n  height: 100%;\n}\n\n.styles_afterWrapper__24Cdm {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 50%;\n  overflow: hidden;\n}\n\n.styles_handle__33IZp {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin-left: -1px;\n  width: 2px;\n  background: #fff;\n}\n";
var styles = { "container": "styles_container__2pRR5", "wrapper": "styles_wrapper__3KXDn", "content": "styles_content__1Phom", "before": "styles_before__2pu1e", "after": "styles_after__OMQap", "afterWrapper": "styles_afterWrapper__24Cdm", "handle": "styles_handle__33IZp" };
styleInject(css);

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends$1 = Object.assign || function (target) {
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

var inherits$1 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties$1 = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * @class BeforeAfterSlider
 */

var BeforeAfterSlider = function (_Component) {
  inherits$1(BeforeAfterSlider, _Component);

  function BeforeAfterSlider() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$1(this, BeforeAfterSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, (_ref = BeforeAfterSlider.__proto__ || Object.getPrototypeOf(BeforeAfterSlider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      progress: _this.props.defaultProgress
    }, _this._contentRef = function (ref) {
      _this._content = ref;
    }, _this._onMoveWrapper = function (event) {
      event.preventDefault();
      var offsetX = event.nativeEvent.offsetX;

      if (!offsetX) {
        var rect = event.target.getBoundingClientRect();
        offsetX = event.targetTouches[0].pageX - rect.left;
      }
      var width = _this.props.width;

      var progress = Math.max(0, Math.min(1, (offsetX - width / 10) / width));
      _this.setState({ progress: progress });
    }, _this._onMoveContent = function (event) {
      event.preventDefault();
      var offsetX = event.nativeEvent.offsetX;

      if (!offsetX) {
        var rect = event.target.getBoundingClientRect();
        offsetX = event.targetTouches[0].pageX - rect.left;
      }
      var width = _this.props.width;

      var progress = Math.max(0, Math.min(1, offsetX / width));
      _this.setState({ progress: progress });
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  createClass$1(BeforeAfterSlider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          before = _props.before,
          after = _props.after,
          className = _props.className,
          defaultProgress = _props.defaultProgress,
          beforeClassName = _props.beforeClassName,
          afterClassName = _props.afterClassName,
          beforeProps = _props.beforeProps,
          afterProps = _props.afterProps,
          width = _props.width,
          height = _props.height,
          rest = objectWithoutProperties$1(_props, ['before', 'after', 'className', 'defaultProgress', 'beforeClassName', 'afterClassName', 'beforeProps', 'afterProps', 'width', 'height']);
      var progress = this.state.progress;


      return React__default.createElement(
        'div',
        _extends$1({
          className: classnames(styles.container, className),
          style: {
            width: width,
            height: height
          }
        }, rest),
        React__default.createElement(
          'div',
          {
            className: styles.afterWrapper,
            style: {
              width: 100 * progress + '%'
            }
          },
          React__default.createElement(BlockImage, _extends$1({
            src: after,
            className: classnames(styles.after, afterClassName),
            style: { width: width }
          }, afterProps))
        ),
        React__default.createElement(BlockImage, _extends$1({
          src: before,
          className: classnames(styles.before, beforeClassName)
        }, beforeProps)),
        React__default.createElement('div', {
          className: styles.handle,
          style: {
            left: 100 * progress + '%'
          }
        }),
        React__default.createElement('div', {
          className: styles.wrapper,
          ref: this._contentRef,
          onTouchMove: this._onMoveWrapper,
          onMouseMove: this._onMoveWrapper
        }),
        React__default.createElement('div', {
          className: styles.content,
          onTouchMove: this._onMoveContent,
          onMouseMove: this._onMoveContent
        })
      );
    }
  }]);
  return BeforeAfterSlider;
}(React.Component);

BeforeAfterSlider.propTypes = {
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  defaultProgress: PropTypes.number,
  className: PropTypes.string,
  beforeClassName: PropTypes.string,
  afterClassName: PropTypes.string,
  beforeProps: PropTypes.object,
  afterProps: PropTypes.object
};
BeforeAfterSlider.defaultProps = {
  defaultProgress: 0.5,
  beforeProps: {},
  afterProps: {}
};

module.exports = BeforeAfterSlider;
