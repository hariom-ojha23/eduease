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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ContentCopy */ \"./node_modules/@mui/icons-material/ContentCopy.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Text = function(props) {\n    var variant = props.variant, component = props.component, children = props.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n        sx: {\n            mb: 2\n        },\n        textAlign: \"center\",\n        variant: variant,\n        component: component,\n        color: \"white\",\n        fontWeight: \"400\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this));\n};\n_c = Text;\nvar PaperSurface = function(props) {\n    var breakpoints = props.breakpoints, title = props.title, isCopied = props.isCopied, setCopy = props.setCopy, url = props.url;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n        sx: {\n            mt: 2,\n            mb: 1,\n            borderRadius: 3\n        },\n        elevation: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                sx: {\n                    p: 1.5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    component: \"p\",\n                    variant: \"p\",\n                    fontSize: 16,\n                    children: title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                direction: \"row\",\n                justifyContent: \"space-between\",\n                sx: _objectSpread({\n                    width: 650\n                }, breakpoints, {\n                    px: 1.5,\n                    pb: 1.5\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center',\n                            flexWrap: 'wrap',\n                            width: '90%'\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                            noWrap: true,\n                            component: \"p\",\n                            variant: \"p\",\n                            children: url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                        onCopy: function() {\n                            return setCopy(true);\n                        },\n                        text: url,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = PaperSurface;\nvar Share = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hostUrlCopied = ref[0], setHostUrlCopied = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), viewUrlCopied = ref1[0], setViewUrlCopied = ref1[1];\n    var theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.useTheme)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _obj;\n    var breakpoints = (_obj = {}, _defineProperty(_obj, theme.breakpoints.down('760'), {\n        maxWidth: 500\n    }), _defineProperty(_obj, theme.breakpoints.down('610'), {\n        maxWidth: 400\n    }), _defineProperty(_obj, theme.breakpoints.down('sm'), {\n        maxWidth: 300\n    }), _defineProperty(_obj, theme.breakpoints.down('300'), {\n        maxWidth: 250\n    }), _obj);\n    var url = 'kkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhs';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        sx: {\n            flex: 6,\n            flexDirection: 'row'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            sx: {\n                width: '100%',\n                display: 'flex',\n                flexDirection: 'column',\n                justifyContent: 'space-evenly',\n                margin: '5% auto 0'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                    variant: \"h4\",\n                    component: \"h4\",\n                    children: \"Eduease\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                    variant: \"h6\",\n                    component: \"p\",\n                    children: \"Modern Way to Learn in Classrooms\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    sx: {\n                        display: 'flex',\n                        flexDirection: 'column',\n                        width: '100%',\n                        alignItems: 'center',\n                        justifyContent: 'spae-evenly'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaperSurface, {\n                            breakpoints: breakpoints,\n                            title: \"Attendee URL\",\n                            isCopied: viewUrlCopied,\n                            setCopy: setViewUrlCopied,\n                            url: url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaperSurface, {\n                            breakpoints: breakpoints,\n                            title: \"Host URL\",\n                            isCopied: hostUrlCopied,\n                            setCopy: setHostUrlCopied,\n                            url: url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            sx: _objectSpread({\n                                py: 1.2,\n                                width: 550,\n                                borderRadius: '25px',\n                                my: 2\n                            }, breakpoints),\n                            variant: \"contained\",\n                            onClick: function() {\n                                return router.push('/join');\n                            },\n                            children: \"Start Meeting (as Host)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            sx: _objectSpread({\n                                py: 1.2,\n                                width: 550,\n                                borderRadius: '25px',\n                                my: 2\n                            }, breakpoints),\n                            variant: \"outlined\",\n                            onClick: function() {\n                                return console.log('clicked');\n                            },\n                            children: \"Copy invite to Clipboard\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 149,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, _this));\n};\n_s(Share, \"uUFItYlzQGM1TSDo+7Xkk+x2iUI=\", false, function() {\n    return [\n        _emotion_react__WEBPACK_IMPORTED_MODULE_6__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c2 = Share;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Text\");\n$RefreshReg$(_c1, \"PaperSurface\");\n$RefreshReg$(_c2, \"Share\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRSxHQUFHO2dDQUNWTixZQUFZLEVBQUUsQ0FBTTtnQ0FDcEI0QixFQUFFLEVBQUUsQ0FBQzsrQkFDRmxDLFdBQVc7NEJBRWhCVCxPQUFPLEVBQUMsQ0FBVTs0QkFDbEI0QyxPQUFPLEVBQUUsUUFBUTtnQ0FBRkUsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTOztzQ0FDckMsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0dBakdLakIsS0FBSzs7UUFJS25DLG9EQUFRO1FBQ1BQLGtEQUFTOzs7TUFMcEIwQyxLQUFLO0FBbUdYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hhcmUuanM/MTcxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQnV0dG9uLFxyXG4gIFBhcGVyLFxyXG4gIEljb25CdXR0b24sXHJcbiAgU3RhY2ssXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IENvbnRlbnRDb3B5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvbnRlbnRDb3B5J1xyXG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcclxuXHJcbmNvbnN0IFRleHQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHZhcmlhbnQsIGNvbXBvbmVudCwgY2hpbGRyZW4gfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgIHN4PXt7IG1iOiAyIH19XHJcbiAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuICAgICAgY29sb3I9J3doaXRlJ1xyXG4gICAgICBmb250V2VpZ2h0PSc0MDAnXHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFBhcGVyU3VyZmFjZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYnJlYWtwb2ludHMsIHRpdGxlLCBpc0NvcGllZCwgc2V0Q29weSwgdXJsIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN4PXt7IG10OiAyLCBtYjogMSwgYm9yZGVyUmFkaXVzOiAzIH19IGVsZXZhdGlvbj17MTB9PlxyXG4gICAgICA8Qm94IHN4PXt7IHA6IDEuNSB9fT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3AnIHZhcmlhbnQ9J3AnIGZvbnRTaXplPXsxNn0+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcbiAgICAgICAgc3g9e3sgd2lkdGg6IDY1MCwgLi4uYnJlYWtwb2ludHMsIHB4OiAxLjUsIHBiOiAxLjUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgbm9XcmFwIGNvbXBvbmVudD0ncCcgdmFyaWFudD0ncCc+XHJcbiAgICAgICAgICAgIHt1cmx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgb25Db3B5PXsoKSA9PiBzZXRDb3B5KHRydWUpfSB0ZXh0PXt1cmx9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxDb250ZW50Q29weUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cclxuICAgICAgPC9TdGFjaz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTaGFyZSA9ICgpID0+IHtcclxuICBjb25zdCBbaG9zdFVybENvcGllZCwgc2V0SG9zdFVybENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlld1VybENvcGllZCwgc2V0Vmlld1VybENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignNzYwJyldOiB7XHJcbiAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJzYxMCcpXToge1xyXG4gICAgICBtYXhXaWR0aDogNDAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXhXaWR0aDogMzAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCczMDAnKV06IHtcclxuICAgICAgbWF4V2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cmwgPVxyXG4gICAgJ2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2ZocydcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgZmxleDogNiwgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgICAgICAgbWFyZ2luOiAnNSUgYXV0byAwJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDQnPlxyXG4gICAgICAgICAgRWR1ZWFzZVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PSdoNicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgIE1vZGVybiBXYXkgdG8gTGVhcm4gaW4gQ2xhc3Nyb29tc1xyXG4gICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhZS1ldmVubHknLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGFwZXJTdXJmYWNlXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICAgICAgdGl0bGU9J0F0dGVuZGVlIFVSTCdcclxuICAgICAgICAgICAgaXNDb3BpZWQ9e3ZpZXdVcmxDb3BpZWR9XHJcbiAgICAgICAgICAgIHNldENvcHk9e3NldFZpZXdVcmxDb3BpZWR9XHJcbiAgICAgICAgICAgIHVybD17dXJsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxQYXBlclN1cmZhY2VcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgICAgICB0aXRsZT0nSG9zdCBVUkwnXHJcbiAgICAgICAgICAgIGlzQ29waWVkPXtob3N0VXJsQ29waWVkfVxyXG4gICAgICAgICAgICBzZXRDb3B5PXtzZXRIb3N0VXJsQ29waWVkfVxyXG4gICAgICAgICAgICB1cmw9e3VybH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHk6IDEuMixcclxuICAgICAgICAgICAgICB3aWR0aDogNTUwLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxyXG4gICAgICAgICAgICAgIG15OiAyLFxyXG4gICAgICAgICAgICAgIC4uLmJyZWFrcG9pbnRzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvam9pbicpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFydCBNZWV0aW5nIChhcyBIb3N0KVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDU1MCxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcclxuICAgICAgICAgICAgICBteTogMixcclxuICAgICAgICAgICAgICAuLi5icmVha3BvaW50cyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdjbGlja2VkJyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvcHkgaW52aXRlIHRvIENsaXBib2FyZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFyZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkJveCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJQYXBlciIsIkljb25CdXR0b24iLCJTdGFjayIsInVzZVRoZW1lIiwiQ29udGVudENvcHlJY29uIiwiQ29weVRvQ2xpcGJvYXJkIiwiVGV4dCIsInByb3BzIiwidmFyaWFudCIsImNvbXBvbmVudCIsImNoaWxkcmVuIiwic3giLCJtYiIsInRleHRBbGlnbiIsImNvbG9yIiwiZm9udFdlaWdodCIsIlBhcGVyU3VyZmFjZSIsImJyZWFrcG9pbnRzIiwidGl0bGUiLCJpc0NvcGllZCIsInNldENvcHkiLCJ1cmwiLCJtdCIsImJvcmRlclJhZGl1cyIsImVsZXZhdGlvbiIsInAiLCJmb250U2l6ZSIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJweCIsInBiIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsIm5vV3JhcCIsIm9uQ29weSIsInRleHQiLCJTaGFyZSIsImhvc3RVcmxDb3BpZWQiLCJzZXRIb3N0VXJsQ29waWVkIiwidmlld1VybENvcGllZCIsInNldFZpZXdVcmxDb3BpZWQiLCJ0aGVtZSIsInJvdXRlciIsImRvd24iLCJtYXhXaWR0aCIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luIiwicHkiLCJteSIsIm9uQ2xpY2siLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Share.js\n");

/***/ })

});