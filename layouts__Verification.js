(self["webpackChunktimeline"]=self["webpackChunktimeline"]||[]).push([[73],{80856:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": function() { return /* binding */ layouts_Verification; }\n});\n\n// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules\nvar slicedToArray = __webpack_require__(38573);\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(67294);\n// EXTERNAL MODULE: ./node_modules/prop-types/index.js\nvar prop_types = __webpack_require__(44721);\n;// CONCATENATED MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs\n/*! js-cookie v3.0.1 | MIT */\n\n/* eslint-disable no-var */\nfunction js_cookie_assign(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n/* eslint-enable no-var */\n\n/* eslint-disable no-var */\n\n\nvar defaultConverter = {\n  read: function read(value) {\n    if (value[0] === '\"') {\n      value = value.slice(1, -1);\n    }\n\n    return value.replace(/(%[\\dA-F]{2})+/gi, decodeURIComponent);\n  },\n  write: function write(value) {\n    return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);\n  }\n};\n/* eslint-enable no-var */\n\n/* eslint-disable no-var */\n\nfunction init(converter, defaultAttributes) {\n  function set(key, value, attributes) {\n    if (typeof document === 'undefined') {\n      return;\n    }\n\n    attributes = js_cookie_assign({}, defaultAttributes, attributes);\n\n    if (typeof attributes.expires === 'number') {\n      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);\n    }\n\n    if (attributes.expires) {\n      attributes.expires = attributes.expires.toUTCString();\n    }\n\n    key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);\n    var stringifiedAttributes = '';\n\n    for (var attributeName in attributes) {\n      if (!attributes[attributeName]) {\n        continue;\n      }\n\n      stringifiedAttributes += '; ' + attributeName;\n\n      if (attributes[attributeName] === true) {\n        continue;\n      } // Considers RFC 6265 section 5.2:\n      // ...\n      // 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n      //     character:\n      // Consume the characters of the unparsed-attributes up to,\n      // not including, the first %x3B (\";\") character.\n      // ...\n\n\n      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];\n    }\n\n    return document.cookie = key + '=' + converter.write(value, key) + stringifiedAttributes;\n  }\n\n  function get(key) {\n    if (typeof document === 'undefined' || arguments.length && !key) {\n      return;\n    } // To prevent the for loop in the first place assign an empty array\n    // in case there are no cookies at all.\n\n\n    var cookies = document.cookie ? document.cookie.split('; ') : [];\n    var jar = {};\n\n    for (var i = 0; i < cookies.length; i++) {\n      var parts = cookies[i].split('=');\n      var value = parts.slice(1).join('=');\n\n      try {\n        var foundKey = decodeURIComponent(parts[0]);\n        jar[foundKey] = converter.read(value, foundKey);\n\n        if (key === foundKey) {\n          break;\n        }\n      } catch (e) {}\n    }\n\n    return key ? jar[key] : jar;\n  }\n\n  return Object.create({\n    set: set,\n    get: get,\n    remove: function remove(key, attributes) {\n      set(key, '', js_cookie_assign({}, attributes, {\n        expires: -1\n      }));\n    },\n    withAttributes: function withAttributes(attributes) {\n      return init(this.converter, js_cookie_assign({}, this.attributes, attributes));\n    },\n    withConverter: function withConverter(converter) {\n      return init(js_cookie_assign({}, this.converter, converter), this.attributes);\n    }\n  }, {\n    attributes: {\n      value: Object.freeze(defaultAttributes)\n    },\n    converter: {\n      value: Object.freeze(converter)\n    }\n  });\n}\n\nvar api = init(defaultConverter, {\n  path: '/'\n});\n/* eslint-enable no-var */\n\n/* harmony default export */ var js_cookie = (api);\n;// CONCATENATED MODULE: ./src/layouts/Verification/index.tsx\n/* provided dependency */ var process = __webpack_require__(82195);\n\n// \u8d26\u6237\u767b\u9646\u9a8c\u8bc1\n\n// \u7c7b\u578b\n // JS\u64cd\u4f5ccookie\u7684\u63d2\u4ef6\n\n // \u6a21\u62df\u4ece\u7edf\u4e00\u7ba1\u7406\u5e73\u53f0\u8df3\u8f6c\u540e\u5e73\u53f0\u5e26\u6709\u7684Cookie\u6570\u636e\n\nvar CookieList = [{\n  platform_cn: '%E8%BE%9B%E8%BF%A6%E5%8D%97'\n}, {\n  platform_user: 'xinjn'\n}, {\n  Hm_lpvt_854ddd4a39be7c994420d51fb2e3ded7: '1655919991'\n}, {\n  if_mid: '1655652445910_o46mfj159'\n}, {\n  userid: '1655652445910_o46mfj159'\n}, {\n  Hm_lvt_ea92cb20c864b973fde8e6d16e4475e5: '1655444401'\n}, {\n  Hm_lvt_854ddd4a39be7c994420d51fb2e3ded7: '1655881455'\n}, {\n  Hm_lpvt_ea92cb20c864b973fde8e6d16e4475e5: '1655962589'\n}, {\n  _fe891: 'http://172.16.37.180:80'\n}, {\n  region_ver: '1.2'\n}, {\n  Hm_lpvt_ea92cb20c864b973fde8e6d16e4475e5: '1655777704'\n}, {\n  weather_city: 'bj'\n}, {\n  city: '010'\n}, {\n  region_ip: '114.112.77.x'\n}, {\n  prov: 'prov'\n}, {\n  _ga: 'GA1.2.1189717332.1655701993'\n}, {\n  token: '2022-6-16'\n}, {\n  day_limit_41816: '2022-6-16'\n}];\n/* \u7528\u6237\u767b\u9646\u9a8c\u8bc1 */\n\nvar Verification = props => {\n  // \u9a8c\u8bc1\u7528\u6237\u767b\u9646\n  var verifyUserLogin = () => {\n    // \u9a8c\u8bc1token\uff0c\u5224\u65ad\u662f\u5426\u767b\u9646\n    var token = js_cookie.get('cmpp_token');\n    var linkLoginUrl = process['CONFIG'].linkLoginUrl; // \u6dfb\u52a0Cookie\u6570\u636e\n\n    var setCookie = () => {\n      // \u904d\u5386\u6570\u7ec4\u5bf9\u8c61\n      for (var i = 0; i < CookieList.length; i++) {\n        var obj = CookieList[i];\n\n        for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {\n          var _ref3 = _Object$entries[_i];\n\n          var _ref2 = (0,slicedToArray/* default */.Z)(_ref3, 2);\n\n          var key = _ref2[0];\n          var value = _ref2[1];\n          js_cookie.set(\"\".concat(key), \"\".concat(value));\n        }\n      }\n    }; // \u96c6\u6210\u6743\u9650\u7cfb\u7edf\uff08\u7edf\u4e00\u5e73\u53f0\u7ba1\u7406: \u6dfb\u52a0Cookie\u6570\u636e\uff08\u8bf7\u6c42\u6570\u636e\uff1a\u81ea\u52a8\u6dfb\u52a0\u8bf7\u6c42\u5934\uff09\n\n\n    if (!token) {\n      // window.location.href = `${ linkLoginUrl }?url=${ encodeURIComponent(location.pathname) }`;\n      // Mock:\u6a21\u62df\u4ece\u7edf\u4e00\u7ba1\u7406\u5e73\u53f0\u8df3\u8f6c\u540e\u5e73\u53f0\u5e26\u6709\u7684Cookie\u6570\u636e\n      console.log('\u6a21\u62df\u4ece\u7edf\u4e00\u7ba1\u7406\u5e73\u53f0\u8df3\u8f6c\u540e\u5e73\u53f0\u5e26\u6709\u7684Cookie\u6570\u636e');\n      setCookie();\n    }\n  };\n\n  (0,react.useEffect)(() => {\n    verifyUserLogin();\n  }, []);\n  return props === null || props === void 0 ? void 0 : props.children;\n};\n\nVerification.propTypes = {\n  children: prop_types.node\n};\n/* harmony default export */ var layouts_Verification = (Verification);\n\n//# sourceURL=webpack://timeline/./src/layouts/Verification/index.tsx_+_1_modules?")}}]);