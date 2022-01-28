"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Share.js":
/*!*****************************!*\
  !*** ./components/Share.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ContentCopy */ \"./node_modules/@mui/icons-material/ContentCopy.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SnackBar */ \"./components/SnackBar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Text = function(props) {\n    var variant = props.variant, component = props.component, children = props.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n        sx: {\n            mb: 2\n        },\n        textAlign: \"center\",\n        variant: variant,\n        component: component,\n        color: \"white\",\n        fontWeight: \"400\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_c = Text;\nvar PaperSurface = function(props) {\n    var breakpoints = props.breakpoints, title = props.title, setCopy = props.setCopy, url = props.url;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {\n        sx: {\n            mt: 2,\n            mb: 1,\n            borderRadius: 3\n        },\n        elevation: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    p: 1.5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                    component: \"p\",\n                    variant: \"p\",\n                    fontSize: 16,\n                    children: title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                direction: \"row\",\n                justifyContent: \"space-between\",\n                sx: _objectSpread({\n                    width: 650\n                }, breakpoints, {\n                    px: 1.5,\n                    pb: 1.5\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center',\n                            flexWrap: 'wrap',\n                            width: '90%'\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            noWrap: true,\n                            component: \"p\",\n                            variant: \"p\",\n                            children: url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                        onCopy: function() {\n                            return setCopy(true);\n                        },\n                        text: url,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = PaperSurface;\nvar Share = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hostUrlCopied = ref[0], setHostUrlCopied = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), viewUrlCopied = ref1[0], setViewUrlCopied = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), message = ref2[0], setMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('success'), variant = ref3[0], setVariant = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), snackOpen = ref4[0], setSnackOpen = ref4[1];\n    var theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.useTheme)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _obj;\n    var breakpoints = (_obj = {}, _defineProperty(_obj, theme.breakpoints.down('760'), {\n        maxWidth: 500\n    }), _defineProperty(_obj, theme.breakpoints.down('610'), {\n        maxWidth: 400\n    }), _defineProperty(_obj, theme.breakpoints.down('sm'), {\n        maxWidth: 300\n    }), _defineProperty(_obj, theme.breakpoints.down('300'), {\n        maxWidth: 250\n    }), _obj);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (hostUrlCopied) {\n            setMessage('Host URL copied to clipboard!');\n            setVariant('info');\n            setSnackOpen(true);\n        }\n    }, [\n        hostUrlCopied\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (viewUrlCopied) {\n            setMessage('Attendee URL copied to clipboard!');\n            setVariant('info');\n            setSnackOpen(true);\n        }\n    }, [\n        viewUrlCopied\n    ]);\n    var snackClose = function(event, reason) {\n        if (reason === 'clickaway') {\n            return;\n        }\n        setSnackOpen(false);\n    };\n    var url = 'kkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhs';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        sx: {\n            flex: 6,\n            flexDirection: 'row'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    width: '100%',\n                    display: 'flex',\n                    flexDirection: 'column',\n                    justifyContent: 'space-evenly',\n                    margin: '5% auto 0'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        variant: \"h4\",\n                        component: \"h4\",\n                        children: \"Eduease\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        variant: \"h6\",\n                        component: \"p\",\n                        children: \"Modern Way to Learn in Classrooms\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            width: '100%',\n                            alignItems: 'center',\n                            justifyContent: 'spae-evenly'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaperSurface, {\n                                breakpoints: breakpoints,\n                                title: \"Attendee URL\",\n                                setCopy: setViewUrlCopied,\n                                url: url\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaperSurface, {\n                                breakpoints: breakpoints,\n                                title: \"Host URL\",\n                                setCopy: setHostUrlCopied,\n                                url: url\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 155,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                sx: _objectSpread({\n                                    py: 1.2,\n                                    width: 550,\n                                    borderRadius: '25px',\n                                    my: 2\n                                }, breakpoints),\n                                variant: \"contained\",\n                                onClick: function() {\n                                    return router.push('/join');\n                                },\n                                children: \"Start Meeting (as Host)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 161,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                sx: _objectSpread({\n                                    py: 1.2,\n                                    width: 550,\n                                    borderRadius: '25px',\n                                    my: 2\n                                }, breakpoints),\n                                variant: \"outlined\",\n                                onClick: function() {\n                                    return console.log('clicked');\n                                },\n                                children: \"Copy invite to Clipboard\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 175,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SnackBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                snackOpen: snackOpen,\n                snackClose: snackClose,\n                variant: variant,\n                message: message\n            }, void 0, false, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 190,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, _this));\n};\n_s(Share, \"g0A9N6xIgc5wUIQvxE5bU+lRjPo=\", false, function() {\n    return [\n        _emotion_react__WEBPACK_IMPORTED_MODULE_7__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c2 = Share;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Text\");\n$RefreshReg$(_c1, \"PaperSurface\");\n$RefreshReg$(_c2, \"Share\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFTOzswQ0FDckMsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUdIekQsaURBQVE7Z0JBQ1B3QyxTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCTSxVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCM0MsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQmtDLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozs7Ozs7O0FBSXhCLENBQUM7R0FoSUtMLEtBQUs7O1FBT0tuQyxvREFBUTtRQUNQUCxrREFBUzs7O01BUnBCMEMsS0FBSztBQWtJWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NoYXJlLmpzPzE3MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQnV0dG9uLFxyXG4gIFBhcGVyLFxyXG4gIEljb25CdXR0b24sXHJcbiAgU3RhY2ssXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IENvbnRlbnRDb3B5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvbnRlbnRDb3B5J1xyXG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcclxuaW1wb3J0IFNuYWNrQmFyIGZyb20gJy4vU25hY2tCYXInXHJcblxyXG5jb25zdCBUZXh0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB2YXJpYW50LCBjb21wb25lbnQsIGNoaWxkcmVuIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeVxyXG4gICAgICBzeD17eyBtYjogMiB9fVxyXG4gICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgdmFyaWFudD17dmFyaWFudH1cclxuICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XHJcbiAgICAgIGNvbG9yPSd3aGl0ZSdcclxuICAgICAgZm9udFdlaWdodD0nNDAwJ1xyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBQYXBlclN1cmZhY2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGJyZWFrcG9pbnRzLCB0aXRsZSwgc2V0Q29weSwgdXJsIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN4PXt7IG10OiAyLCBtYjogMSwgYm9yZGVyUmFkaXVzOiAzIH19IGVsZXZhdGlvbj17MTB9PlxyXG4gICAgICA8Qm94IHN4PXt7IHA6IDEuNSB9fT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3AnIHZhcmlhbnQ9J3AnIGZvbnRTaXplPXsxNn0+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcbiAgICAgICAgc3g9e3sgd2lkdGg6IDY1MCwgLi4uYnJlYWtwb2ludHMsIHB4OiAxLjUsIHBiOiAxLjUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgbm9XcmFwIGNvbXBvbmVudD0ncCcgdmFyaWFudD0ncCc+XHJcbiAgICAgICAgICAgIHt1cmx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgb25Db3B5PXsoKSA9PiBzZXRDb3B5KHRydWUpfSB0ZXh0PXt1cmx9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxDb250ZW50Q29weUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cclxuICAgICAgPC9TdGFjaz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTaGFyZSA9ICgpID0+IHtcclxuICBjb25zdCBbaG9zdFVybENvcGllZCwgc2V0SG9zdFVybENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlld1VybENvcGllZCwgc2V0Vmlld1VybENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpXHJcbiAgY29uc3QgW3NuYWNrT3Blbiwgc2V0U25hY2tPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBicmVha3BvaW50cyA9IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCc3NjAnKV06IHtcclxuICAgICAgbWF4V2lkdGg6IDUwMCxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignNjEwJyldOiB7XHJcbiAgICAgIG1heFdpZHRoOiA0MDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1heFdpZHRoOiAzMDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJzMwMCcpXToge1xyXG4gICAgICBtYXhXaWR0aDogMjUwLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaG9zdFVybENvcGllZCkge1xyXG4gICAgICBzZXRNZXNzYWdlKCdIb3N0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkIScpXHJcbiAgICAgIHNldFZhcmlhbnQoJ2luZm8nKVxyXG4gICAgICBzZXRTbmFja09wZW4odHJ1ZSlcclxuICAgIH1cclxuICB9LCBbaG9zdFVybENvcGllZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmlld1VybENvcGllZCkge1xyXG4gICAgICBzZXRNZXNzYWdlKCdBdHRlbmRlZSBVUkwgY29waWVkIHRvIGNsaXBib2FyZCEnKVxyXG4gICAgICBzZXRWYXJpYW50KCdpbmZvJylcclxuICAgICAgc2V0U25hY2tPcGVuKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW3ZpZXdVcmxDb3BpZWRdKVxyXG5cclxuICBjb25zdCBzbmFja0Nsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHNldFNuYWNrT3BlbihmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVybCA9XHJcbiAgICAna2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhzJ1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyBmbGV4OiA2LCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICAgICAgICBtYXJnaW46ICc1JSBhdXRvIDAnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PSdoNCcgY29tcG9uZW50PSdoNCc+XHJcbiAgICAgICAgICBFZHVlYXNlXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9J2g2JyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgTW9kZXJuIFdheSB0byBMZWFybiBpbiBDbGFzc3Jvb21zXHJcbiAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFlLWV2ZW5seScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQYXBlclN1cmZhY2VcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgICAgICB0aXRsZT0nQXR0ZW5kZWUgVVJMJ1xyXG4gICAgICAgICAgICBzZXRDb3B5PXtzZXRWaWV3VXJsQ29waWVkfVxyXG4gICAgICAgICAgICB1cmw9e3VybH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UGFwZXJTdXJmYWNlXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICAgICAgdGl0bGU9J0hvc3QgVVJMJ1xyXG4gICAgICAgICAgICBzZXRDb3B5PXtzZXRIb3N0VXJsQ29waWVkfVxyXG4gICAgICAgICAgICB1cmw9e3VybH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHk6IDEuMixcclxuICAgICAgICAgICAgICB3aWR0aDogNTUwLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxyXG4gICAgICAgICAgICAgIG15OiAyLFxyXG4gICAgICAgICAgICAgIC4uLmJyZWFrcG9pbnRzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvam9pbicpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFydCBNZWV0aW5nIChhcyBIb3N0KVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDU1MCxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcclxuICAgICAgICAgICAgICBteTogMixcclxuICAgICAgICAgICAgICAuLi5icmVha3BvaW50cyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdjbGlja2VkJyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvcHkgaW52aXRlIHRvIENsaXBib2FyZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8U25hY2tCYXJcclxuICAgICAgICBzbmFja09wZW49e3NuYWNrT3Blbn1cclxuICAgICAgICBzbmFja0Nsb3NlPXtzbmFja0Nsb3NlfVxyXG4gICAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cclxuICAgICAgLz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcmVcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJCb3giLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiUGFwZXIiLCJJY29uQnV0dG9uIiwiU3RhY2siLCJ1c2VUaGVtZSIsIkNvbnRlbnRDb3B5SWNvbiIsIkNvcHlUb0NsaXBib2FyZCIsIlNuYWNrQmFyIiwiVGV4dCIsInByb3BzIiwidmFyaWFudCIsImNvbXBvbmVudCIsImNoaWxkcmVuIiwic3giLCJtYiIsInRleHRBbGlnbiIsImNvbG9yIiwiZm9udFdlaWdodCIsIlBhcGVyU3VyZmFjZSIsImJyZWFrcG9pbnRzIiwidGl0bGUiLCJzZXRDb3B5IiwidXJsIiwibXQiLCJib3JkZXJSYWRpdXMiLCJlbGV2YXRpb24iLCJwIiwiZm9udFNpemUiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicHgiLCJwYiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJub1dyYXAiLCJvbkNvcHkiLCJ0ZXh0IiwiU2hhcmUiLCJob3N0VXJsQ29waWVkIiwic2V0SG9zdFVybENvcGllZCIsInZpZXdVcmxDb3BpZWQiLCJzZXRWaWV3VXJsQ29waWVkIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzZXRWYXJpYW50Iiwic25hY2tPcGVuIiwic2V0U25hY2tPcGVuIiwidGhlbWUiLCJyb3V0ZXIiLCJkb3duIiwibWF4V2lkdGgiLCJzbmFja0Nsb3NlIiwicmVhc29uIiwiZXZlbnQiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsInB5IiwibXkiLCJvbkNsaWNrIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Share.js\n");

/***/ })

});