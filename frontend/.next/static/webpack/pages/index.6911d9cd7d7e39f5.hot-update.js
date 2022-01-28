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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ContentCopy */ \"./node_modules/@mui/icons-material/ContentCopy.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SnackBar */ \"./components/SnackBar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Text = function(props) {\n    var variant = props.variant, component = props.component, children = props.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n        sx: {\n            mb: 2\n        },\n        textAlign: \"center\",\n        variant: variant,\n        component: component,\n        color: \"white\",\n        fontWeight: \"400\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_c = Text;\nvar PaperSurface = function(props) {\n    var breakpoints = props.breakpoints, title = props.title, url = props.url, setMessage = props.setMessage, setVariant = props.setVariant, setSnackOpen = props.setSnackOpen;\n    var copyToClipboard = function() {\n        var msg = title.split(' ')[0] === 'Host' ? 'Host URl copied to clipboard' : 'Attendee URL copied to clipboard';\n        setMessage(msg);\n        setVariant('info');\n        setSnackOpen(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {\n        sx: {\n            mt: 2,\n            mb: 1,\n            borderRadius: 3\n        },\n        elevation: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    p: 1.5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                    component: \"p\",\n                    variant: \"p\",\n                    fontSize: 16,\n                    children: title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                direction: \"row\",\n                justifyContent: \"space-between\",\n                sx: _objectSpread({\n                    width: 650\n                }, breakpoints, {\n                    px: 1.5,\n                    pb: 1.5\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center',\n                            flexWrap: 'wrap',\n                            width: '90%'\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            noWrap: true,\n                            component: \"p\",\n                            variant: \"p\",\n                            children: url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                        onCopy: function() {\n                            return copyToClipboard();\n                        },\n                        text: url,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = PaperSurface;\nvar Share = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), message = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('success'), variant = ref1[0], setVariant = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), snackOpen = ref2[0], setSnackOpen = ref2[1];\n    var theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.useTheme)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _obj;\n    var breakpoints = (_obj = {}, _defineProperty(_obj, theme.breakpoints.down('760'), {\n        maxWidth: 500\n    }), _defineProperty(_obj, theme.breakpoints.down('610'), {\n        maxWidth: 400\n    }), _defineProperty(_obj, theme.breakpoints.down('sm'), {\n        maxWidth: 300\n    }), _defineProperty(_obj, theme.breakpoints.down('300'), {\n        maxWidth: 250\n    }), _obj);\n    var snackClose = function(event, reason) {\n        if (reason === 'clickaway') {\n            return;\n        }\n        setSnackOpen(false);\n    };\n    // fake data till host control\n    var url = 'kkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhs';\n    var hostControl = false;\n    var roomName = \"Meeting Name: Test Name\";\n    var attendee = \"Join link for Attendee: \".concat(url);\n    var host = \"Join link for Host: \".concat(url);\n    var msg = '';\n    if (hostControl) {\n        msg = msg + \"\".concat(roomName, \"\\n        \").concat(attendee, \"\\n        \").concat(host);\n    } else {\n        msg = msg + \"\".concat(roomName, \"\\n        \").concat(host);\n    }\n    var copyToClipboard = function() {\n        setMessage('Copied to Clipboard!');\n        setVariant('info');\n        setSnackOpen(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        sx: {\n            flex: 6,\n            flexDirection: 'row'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    width: '100%',\n                    display: 'flex',\n                    flexDirection: 'column',\n                    justifyContent: 'space-evenly',\n                    margin: '5% auto 0'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        variant: \"h4\",\n                        component: \"h4\",\n                        children: \"Eduease\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        variant: \"h6\",\n                        component: \"p\",\n                        children: \"Modern Way to Learn in Classrooms\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 155,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            width: '100%',\n                            alignItems: 'center',\n                            justifyContent: 'spae-evenly'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaperSurface, {\n                                breakpoints: breakpoints,\n                                title: \"Attendee URL\",\n                                setSnackOpen: setSnackOpen,\n                                setVariant: setVariant,\n                                setMessage: setMessage,\n                                url: url\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 168,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaperSurface, {\n                                breakpoints: breakpoints,\n                                title: \"Host URL\",\n                                setSnackOpen: setSnackOpen,\n                                setVariant: setVariant,\n                                setMessage: setMessage,\n                                url: url\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 176,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                sx: _objectSpread({\n                                    py: 1.2,\n                                    width: 550,\n                                    borderRadius: '25px',\n                                    my: 2\n                                }, breakpoints),\n                                variant: \"contained\",\n                                onClick: function() {\n                                    return router.push('/join');\n                                },\n                                children: \"Start Meeting (as Host)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 184,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                                onCopy: function() {\n                                    return copyToClipboard();\n                                },\n                                text: msg,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    sx: _objectSpread({\n                                        py: 1.2,\n                                        width: 550,\n                                        borderRadius: '25px',\n                                        my: 2\n                                    }, breakpoints),\n                                    variant: \"outlined\",\n                                    onClick: function() {\n                                        return console.log('clicked');\n                                    },\n                                    children: \"Copy invite to Clipboard\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                    lineNumber: 199,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 198,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SnackBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                snackOpen: snackOpen,\n                snackClose: snackClose,\n                variant: variant,\n                message: message\n            }, void 0, false, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 215,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, _this));\n};\n_s(Share, \"nyMSzuZ7iskM2ESTt4EZ/MxKi5I=\", false, function() {\n    return [\n        _emotion_react__WEBPACK_IMPORTED_MODULE_7__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c2 = Share;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Text\");\n$RefreshReg$(_c1, \"PaperSurface\");\n$RefreshReg$(_c2, \"Share\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVk4sWUFBWSxFQUFFLENBQU07b0NBQ3BCaUMsRUFBRSxFQUFFLENBQUM7bUNBQ0YzQyxXQUFXO2dDQUVoQlQsT0FBTyxFQUFDLENBQVc7Z0NBQ25CcUQsT0FBTyxFQUFFLFFBQVE7b0NBQUZmLE1BQU0sQ0FBTkEsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDLENBQU87OzBDQUNuQyxDQUVEOzs7Ozs7d0dBRUMxRCxvRUFBZTtnQ0FBQ29DLE1BQU0sRUFBRSxRQUFRO29DQUFGakIsTUFBTSxDQUFOQSxlQUFlOztnQ0FBSWtCLElBQUksRUFBRWpCLEdBQUc7c0hBQ3hEMUIsaURBQU07b0NBQ0xhLEVBQUU7d0NBQ0FnRCxFQUFFLEVBQUUsR0FBRzt3Q0FDUDFCLEtBQUssRUFBRSxHQUFHO3dDQUNWTixZQUFZLEVBQUUsQ0FBTTt3Q0FDcEJpQyxFQUFFLEVBQUUsQ0FBQzt1Q0FDRjNDLFdBQVc7b0NBRWhCVCxPQUFPLEVBQUMsQ0FBVTtvQ0FDbEJxRCxPQUFPLEVBQUUsUUFBUTt3Q0FBRkUsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTOzs4Q0FDckMsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSUwzRCxpREFBUTtnQkFDUHVDLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJLLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJ6QyxPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCbUMsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7Ozs7QUFJeEIsQ0FBQztHQTlJS0QsS0FBSzs7UUFLS3hDLG9EQUFRO1FBQ1BQLGtEQUFTOzs7TUFOcEIrQyxLQUFLO0FBZ0pYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hhcmUuanM/MTcxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBCdXR0b24sXHJcbiAgUGFwZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBTdGFjayxcclxufSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudENvcHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ29udGVudENvcHknXHJcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJ1xyXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnLi9TbmFja0JhcidcclxuXHJcbmNvbnN0IFRleHQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHZhcmlhbnQsIGNvbXBvbmVudCwgY2hpbGRyZW4gfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgIHN4PXt7IG1iOiAyIH19XHJcbiAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuICAgICAgY29sb3I9J3doaXRlJ1xyXG4gICAgICBmb250V2VpZ2h0PSc0MDAnXHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFBhcGVyU3VyZmFjZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYnJlYWtwb2ludHMsIHRpdGxlLCB1cmwsIHNldE1lc3NhZ2UsIHNldFZhcmlhbnQsIHNldFNuYWNrT3BlbiB9ID1cclxuICAgIHByb3BzXHJcblxyXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1zZyA9XHJcbiAgICAgIHRpdGxlLnNwbGl0KCcgJylbMF0gPT09ICdIb3N0J1xyXG4gICAgICAgID8gJ0hvc3QgVVJsIGNvcGllZCB0byBjbGlwYm9hcmQnXHJcbiAgICAgICAgOiAnQXR0ZW5kZWUgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnXHJcbiAgICBzZXRNZXNzYWdlKG1zZylcclxuICAgIHNldFZhcmlhbnQoJ2luZm8nKVxyXG4gICAgc2V0U25hY2tPcGVuKHRydWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN4PXt7IG10OiAyLCBtYjogMSwgYm9yZGVyUmFkaXVzOiAzIH19IGVsZXZhdGlvbj17MTB9PlxyXG4gICAgICA8Qm94IHN4PXt7IHA6IDEuNSB9fT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3AnIHZhcmlhbnQ9J3AnIGZvbnRTaXplPXsxNn0+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcbiAgICAgICAgc3g9e3sgd2lkdGg6IDY1MCwgLi4uYnJlYWtwb2ludHMsIHB4OiAxLjUsIHBiOiAxLjUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgbm9XcmFwIGNvbXBvbmVudD0ncCcgdmFyaWFudD0ncCc+XHJcbiAgICAgICAgICAgIHt1cmx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgb25Db3B5PXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQoKX0gdGV4dD17dXJsfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Q29udGVudENvcHlJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICA8L1BhcGVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU2hhcmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ZhcmlhbnQsIHNldFZhcmlhbnRdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKVxyXG4gIGNvbnN0IFtzbmFja09wZW4sIHNldFNuYWNrT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignNzYwJyldOiB7XHJcbiAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJzYxMCcpXToge1xyXG4gICAgICBtYXhXaWR0aDogNDAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXhXaWR0aDogMzAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCczMDAnKV06IHtcclxuICAgICAgbWF4V2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgfVxyXG5cclxuICBjb25zdCBzbmFja0Nsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHNldFNuYWNrT3BlbihmYWxzZSlcclxuICB9XHJcblxyXG4gIC8vIGZha2UgZGF0YSB0aWxsIGhvc3QgY29udHJvbFxyXG4gIGNvbnN0IHVybCA9XHJcbiAgICAna2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhza2toYWRraGFrZGFkZnNnZmhzJ1xyXG5cclxuICBjb25zdCBob3N0Q29udHJvbCA9IGZhbHNlXHJcbiAgY29uc3Qgcm9vbU5hbWUgPSBgTWVldGluZyBOYW1lOiBUZXN0IE5hbWVgXHJcbiAgY29uc3QgYXR0ZW5kZWUgPSBgSm9pbiBsaW5rIGZvciBBdHRlbmRlZTogJHt1cmx9YFxyXG4gIGNvbnN0IGhvc3QgPSBgSm9pbiBsaW5rIGZvciBIb3N0OiAke3VybH1gXHJcbiAgbGV0IG1zZyA9ICcnXHJcblxyXG4gIGlmIChob3N0Q29udHJvbCkge1xyXG4gICAgbXNnID1cclxuICAgICAgbXNnICtcclxuICAgICAgYCR7cm9vbU5hbWV9XHJcbiAgICAgICAgJHthdHRlbmRlZX1cclxuICAgICAgICAke2hvc3R9YFxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPVxyXG4gICAgICBtc2cgK1xyXG4gICAgICBgJHtyb29tTmFtZX1cclxuICAgICAgICAke2hvc3R9YFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKCkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZSgnQ29waWVkIHRvIENsaXBib2FyZCEnKVxyXG4gICAgc2V0VmFyaWFudCgnaW5mbycpXHJcbiAgICBzZXRTbmFja09wZW4odHJ1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IGZsZXg6IDYsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgICAgICAgIG1hcmdpbjogJzUlIGF1dG8gMCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2g0Jz5cclxuICAgICAgICAgIEVkdWVhc2VcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD0naDYnIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICBNb2Rlcm4gV2F5IHRvIExlYXJuIGluIENsYXNzcm9vbXNcclxuICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWUtZXZlbmx5JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBhcGVyU3VyZmFjZVxyXG4gICAgICAgICAgICBicmVha3BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgICAgIHRpdGxlPSdBdHRlbmRlZSBVUkwnXHJcbiAgICAgICAgICAgIHNldFNuYWNrT3Blbj17c2V0U25hY2tPcGVufVxyXG4gICAgICAgICAgICBzZXRWYXJpYW50PXtzZXRWYXJpYW50fVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlPXtzZXRNZXNzYWdlfVxyXG4gICAgICAgICAgICB1cmw9e3VybH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UGFwZXJTdXJmYWNlXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICAgICAgdGl0bGU9J0hvc3QgVVJMJ1xyXG4gICAgICAgICAgICBzZXRTbmFja09wZW49e3NldFNuYWNrT3Blbn1cclxuICAgICAgICAgICAgc2V0VmFyaWFudD17c2V0VmFyaWFudH1cclxuICAgICAgICAgICAgc2V0TWVzc2FnZT17c2V0TWVzc2FnZX1cclxuICAgICAgICAgICAgdXJsPXt1cmx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDU1MCxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcclxuICAgICAgICAgICAgICBteTogMixcclxuICAgICAgICAgICAgICAuLi5icmVha3BvaW50cyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2pvaW4nKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3RhcnQgTWVldGluZyAoYXMgSG9zdClcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgb25Db3B5PXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQoKX0gdGV4dD17bXNnfT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBweTogMS4yLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU1MCxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxyXG4gICAgICAgICAgICAgICAgbXk6IDIsXHJcbiAgICAgICAgICAgICAgICAuLi5icmVha3BvaW50cyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdjbGlja2VkJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb3B5IGludml0ZSB0byBDbGlwYm9hcmRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxTbmFja0JhclxyXG4gICAgICAgIHNuYWNrT3Blbj17c25hY2tPcGVufVxyXG4gICAgICAgIHNuYWNrQ2xvc2U9e3NuYWNrQ2xvc2V9XHJcbiAgICAgICAgdmFyaWFudD17dmFyaWFudH1cclxuICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFyZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkJveCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJQYXBlciIsIkljb25CdXR0b24iLCJTdGFjayIsInVzZVRoZW1lIiwiQ29udGVudENvcHlJY29uIiwiQ29weVRvQ2xpcGJvYXJkIiwiU25hY2tCYXIiLCJUZXh0IiwicHJvcHMiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiY2hpbGRyZW4iLCJzeCIsIm1iIiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiUGFwZXJTdXJmYWNlIiwiYnJlYWtwb2ludHMiLCJ0aXRsZSIsInVybCIsInNldE1lc3NhZ2UiLCJzZXRWYXJpYW50Iiwic2V0U25hY2tPcGVuIiwiY29weVRvQ2xpcGJvYXJkIiwibXNnIiwic3BsaXQiLCJtdCIsImJvcmRlclJhZGl1cyIsImVsZXZhdGlvbiIsInAiLCJmb250U2l6ZSIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJweCIsInBiIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsIm5vV3JhcCIsIm9uQ29weSIsInRleHQiLCJTaGFyZSIsIm1lc3NhZ2UiLCJzbmFja09wZW4iLCJ0aGVtZSIsInJvdXRlciIsImRvd24iLCJtYXhXaWR0aCIsInNuYWNrQ2xvc2UiLCJyZWFzb24iLCJldmVudCIsImhvc3RDb250cm9sIiwicm9vbU5hbWUiLCJhdHRlbmRlZSIsImhvc3QiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsInB5IiwibXkiLCJvbkNsaWNrIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Share.js\n");

/***/ })

});