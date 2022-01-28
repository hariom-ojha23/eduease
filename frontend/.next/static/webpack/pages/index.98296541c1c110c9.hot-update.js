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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ContentCopy */ \"./node_modules/@mui/icons-material/ContentCopy.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SnackBar */ \"./components/SnackBar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Text = function(props) {\n    var variant = props.variant, component = props.component, children = props.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n        sx: {\n            mb: 2\n        },\n        textAlign: \"center\",\n        variant: variant,\n        component: component,\n        color: \"white\",\n        fontWeight: \"400\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_c = Text;\nvar PaperSurface = function(props) {\n    var breakpoints = props.breakpoints, title = props.title, url = props.url, setMessage = props.setMessage, setVariant = props.setVariant, setSnackOpen = props.setSnackOpen;\n    var copyToClipboard = function() {\n        var msg = title.split(' ')[0] === 'Host' ? 'Host URl copied to clipboard' : 'Attendee URL copied to clipboard';\n        setMessage(msg);\n        setVariant('info');\n        setSnackOpen(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {\n        sx: {\n            mt: 2,\n            mb: 1,\n            borderRadius: 3\n        },\n        elevation: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    p: 1.5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                    component: \"p\",\n                    variant: \"p\",\n                    fontSize: 16,\n                    children: title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                direction: \"row\",\n                justifyContent: \"space-between\",\n                sx: _objectSpread({\n                    width: 650\n                }, breakpoints, {\n                    px: 1.5,\n                    pb: 1.5\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center',\n                            flexWrap: 'wrap',\n                            width: '90%'\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            noWrap: true,\n                            component: \"p\",\n                            variant: \"p\",\n                            children: url\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                        onCopy: function() {\n                            return copyToClipboard();\n                        },\n                        text: url,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = PaperSurface;\nvar Share = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), message = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('success'), variant = ref1[0], setVariant = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), snackOpen = ref2[0], setSnackOpen = ref2[1];\n    var theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.useTheme)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _obj;\n    var breakpoints = (_obj = {}, _defineProperty(_obj, theme.breakpoints.down('760'), {\n        maxWidth: 500\n    }), _defineProperty(_obj, theme.breakpoints.down('610'), {\n        maxWidth: 400\n    }), _defineProperty(_obj, theme.breakpoints.down('sm'), {\n        maxWidth: 300\n    }), _defineProperty(_obj, theme.breakpoints.down('300'), {\n        maxWidth: 250\n    }), _obj);\n    var snackClose = function(event, reason) {\n        if (reason === 'clickaway') {\n            return;\n        }\n        setSnackOpen(false);\n    };\n    // fake data till host control\n    var hostUrl = 'kkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhs';\n    var viewUrl = 'kkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhs';\n    var hostControl = true;\n    var meetingName = \"Meeting Name: Test Name\";\n    var attendee = \"Join link for Attendee: \".concat(viewUrl);\n    var host = \"Join link for Host: \".concat(hostUrl);\n    var msg = '';\n    if (hostControl) {\n        msg = msg + \"\".concat(meetingName, \"\\n\").concat(attendee, \"\\n\").concat(host);\n    } else {\n        msg = msg + \"\".concat(meetingName, \"\\n\").concat(host);\n    }\n    var copyToClipboard = function() {\n        setMessage('Copied to Clipboard!');\n        setVariant('info');\n        setSnackOpen(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        sx: {\n            flex: 6,\n            flexDirection: 'row'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                sx: {\n                    width: '100%',\n                    display: 'flex',\n                    flexDirection: 'column',\n                    justifyContent: 'space-evenly',\n                    margin: '5% auto 0'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        variant: \"h4\",\n                        component: \"h4\",\n                        children: \"Eduease\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        variant: \"h6\",\n                        component: \"p\",\n                        children: \"Modern Way to Learn in Classrooms\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            width: '100%',\n                            alignItems: 'center',\n                            justifyContent: 'spae-evenly'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaperSurface, {\n                                breakpoints: breakpoints,\n                                title: \"Attendee URL\",\n                                setSnackOpen: setSnackOpen,\n                                setVariant: setVariant,\n                                setMessage: setMessage,\n                                url: viewUrl\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaperSurface, {\n                                breakpoints: breakpoints,\n                                title: \"Host URL\",\n                                setSnackOpen: setSnackOpen,\n                                setVariant: setVariant,\n                                setMessage: setMessage,\n                                url: hostUrl\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 171,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                sx: _objectSpread({\n                                    py: 1.2,\n                                    width: 550,\n                                    borderRadius: '25px',\n                                    my: 2\n                                }, breakpoints),\n                                variant: \"contained\",\n                                onClick: function() {\n                                    return router.push('/join');\n                                },\n                                children: \"Start Meeting (as Host)\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 179,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                                onCopy: function() {\n                                    return copyToClipboard();\n                                },\n                                text: msg,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    sx: _objectSpread({\n                                        py: 1.2,\n                                        width: 550,\n                                        borderRadius: '25px',\n                                        my: 2\n                                    }, breakpoints),\n                                    variant: \"outlined\",\n                                    onClick: function() {\n                                        return console.log('clicked');\n                                    },\n                                    children: \"Copy invite to Clipboard\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                    lineNumber: 194,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                                lineNumber: 193,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SnackBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                snackOpen: snackOpen,\n                snackClose: snackClose,\n                variant: variant,\n                message: message\n            }, void 0, false, {\n                fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n                lineNumber: 210,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Harry\\\\projects\\\\eduease\\\\frontend\\\\components\\\\Share.js\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, _this));\n};\n_s(Share, \"nyMSzuZ7iskM2ESTt4EZ/MxKi5I=\", false, function() {\n    return [\n        _emotion_react__WEBPACK_IMPORTED_MODULE_7__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c2 = Share;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Text\");\n$RefreshReg$(_c1, \"PaperSurface\");\n$RefreshReg$(_c2, \"Share\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxFQUFFLEVBQUUsR0FBRztvQ0FDUDVCLEtBQUssRUFBRSxHQUFHO29DQUNWTixZQUFZLEVBQUUsQ0FBTTtvQ0FDcEJtQyxFQUFFLEVBQUUsQ0FBQzttQ0FDRjdDLFdBQVc7Z0NBRWhCVCxPQUFPLEVBQUMsQ0FBVztnQ0FDbkJ1RCxPQUFPLEVBQUUsUUFBUTtvQ0FBRmpCLE1BQU0sQ0FBTkEsTUFBTSxDQUFDa0IsSUFBSSxDQUFDLENBQU87OzBDQUNuQyxDQUVEOzs7Ozs7d0dBRUM1RCxvRUFBZTtnQ0FBQ29DLE1BQU0sRUFBRSxRQUFRO29DQUFGakIsTUFBTSxDQUFOQSxlQUFlOztnQ0FBSWtCLElBQUksRUFBRWpCLEdBQUc7c0hBQ3hEMUIsaURBQU07b0NBQ0xhLEVBQUU7d0NBQ0FrRCxFQUFFLEVBQUUsR0FBRzt3Q0FDUDVCLEtBQUssRUFBRSxHQUFHO3dDQUNWTixZQUFZLEVBQUUsQ0FBTTt3Q0FDcEJtQyxFQUFFLEVBQUUsQ0FBQzt1Q0FDRjdDLFdBQVc7b0NBRWhCVCxPQUFPLEVBQUMsQ0FBVTtvQ0FDbEJ1RCxPQUFPLEVBQUUsUUFBUTt3Q0FBRkUsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTOzs4Q0FDckMsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSUw3RCxpREFBUTtnQkFDUHVDLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJLLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJ6QyxPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCbUMsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7Ozs7QUFJeEIsQ0FBQztHQXpJS0QsS0FBSzs7UUFLS3hDLG9EQUFRO1FBQ1BQLGtEQUFTOzs7TUFOcEIrQyxLQUFLO0FBMklYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hhcmUuanM/MTcxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBCdXR0b24sXHJcbiAgUGFwZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBTdGFjayxcclxufSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudENvcHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ29udGVudENvcHknXHJcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJ1xyXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnLi9TbmFja0JhcidcclxuXHJcbmNvbnN0IFRleHQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHZhcmlhbnQsIGNvbXBvbmVudCwgY2hpbGRyZW4gfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgIHN4PXt7IG1iOiAyIH19XHJcbiAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuICAgICAgY29sb3I9J3doaXRlJ1xyXG4gICAgICBmb250V2VpZ2h0PSc0MDAnXHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFBhcGVyU3VyZmFjZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYnJlYWtwb2ludHMsIHRpdGxlLCB1cmwsIHNldE1lc3NhZ2UsIHNldFZhcmlhbnQsIHNldFNuYWNrT3BlbiB9ID1cclxuICAgIHByb3BzXHJcblxyXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1zZyA9XHJcbiAgICAgIHRpdGxlLnNwbGl0KCcgJylbMF0gPT09ICdIb3N0J1xyXG4gICAgICAgID8gJ0hvc3QgVVJsIGNvcGllZCB0byBjbGlwYm9hcmQnXHJcbiAgICAgICAgOiAnQXR0ZW5kZWUgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnXHJcbiAgICBzZXRNZXNzYWdlKG1zZylcclxuICAgIHNldFZhcmlhbnQoJ2luZm8nKVxyXG4gICAgc2V0U25hY2tPcGVuKHRydWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN4PXt7IG10OiAyLCBtYjogMSwgYm9yZGVyUmFkaXVzOiAzIH19IGVsZXZhdGlvbj17MTB9PlxyXG4gICAgICA8Qm94IHN4PXt7IHA6IDEuNSB9fT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3AnIHZhcmlhbnQ9J3AnIGZvbnRTaXplPXsxNn0+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcbiAgICAgICAgc3g9e3sgd2lkdGg6IDY1MCwgLi4uYnJlYWtwb2ludHMsIHB4OiAxLjUsIHBiOiAxLjUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgbm9XcmFwIGNvbXBvbmVudD0ncCcgdmFyaWFudD0ncCc+XHJcbiAgICAgICAgICAgIHt1cmx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgb25Db3B5PXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQoKX0gdGV4dD17dXJsfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Q29udGVudENvcHlJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICA8L1BhcGVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU2hhcmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ZhcmlhbnQsIHNldFZhcmlhbnRdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKVxyXG4gIGNvbnN0IFtzbmFja09wZW4sIHNldFNuYWNrT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignNzYwJyldOiB7XHJcbiAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJzYxMCcpXToge1xyXG4gICAgICBtYXhXaWR0aDogNDAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXhXaWR0aDogMzAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCczMDAnKV06IHtcclxuICAgICAgbWF4V2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgfVxyXG5cclxuICBjb25zdCBzbmFja0Nsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHNldFNuYWNrT3BlbihmYWxzZSlcclxuICB9XHJcblxyXG4gIC8vIGZha2UgZGF0YSB0aWxsIGhvc3QgY29udHJvbFxyXG4gIGNvbnN0IGhvc3RVcmwgPVxyXG4gICAgJ2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2Zoc2traGFka2hha2RhZGZzZ2ZocydcclxuICBjb25zdCB2aWV3VXJsID1cclxuICAgICdra2hhZGtoYWtkYWRmc2dmaHNra2hhZGtoYWtkYWRmc2dmaHNra2hhZGtoYWtkYWRmc2dmaHNra2hhZGtoYWtkYWRmc2dmaHNra2hhZGtoYWtkYWRmc2dmaHNra2hhZGtoYWtkYWRmc2dmaHMnXHJcblxyXG4gIGNvbnN0IGhvc3RDb250cm9sID0gdHJ1ZVxyXG4gIGNvbnN0IG1lZXRpbmdOYW1lID0gYE1lZXRpbmcgTmFtZTogVGVzdCBOYW1lYFxyXG4gIGNvbnN0IGF0dGVuZGVlID0gYEpvaW4gbGluayBmb3IgQXR0ZW5kZWU6ICR7dmlld1VybH1gXHJcbiAgY29uc3QgaG9zdCA9IGBKb2luIGxpbmsgZm9yIEhvc3Q6ICR7aG9zdFVybH1gXHJcbiAgbGV0IG1zZyA9ICcnXHJcblxyXG4gIGlmIChob3N0Q29udHJvbCkge1xyXG4gICAgbXNnID0gbXNnICsgYCR7bWVldGluZ05hbWV9XFxuJHthdHRlbmRlZX1cXG4ke2hvc3R9YFxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2cgKyBgJHttZWV0aW5nTmFtZX1cXG4ke2hvc3R9YFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKCkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZSgnQ29waWVkIHRvIENsaXBib2FyZCEnKVxyXG4gICAgc2V0VmFyaWFudCgnaW5mbycpXHJcbiAgICBzZXRTbmFja09wZW4odHJ1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IGZsZXg6IDYsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgICAgICAgIG1hcmdpbjogJzUlIGF1dG8gMCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2g0Jz5cclxuICAgICAgICAgIEVkdWVhc2VcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD0naDYnIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICBNb2Rlcm4gV2F5IHRvIExlYXJuIGluIENsYXNzcm9vbXNcclxuICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWUtZXZlbmx5JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBhcGVyU3VyZmFjZVxyXG4gICAgICAgICAgICBicmVha3BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgICAgIHRpdGxlPSdBdHRlbmRlZSBVUkwnXHJcbiAgICAgICAgICAgIHNldFNuYWNrT3Blbj17c2V0U25hY2tPcGVufVxyXG4gICAgICAgICAgICBzZXRWYXJpYW50PXtzZXRWYXJpYW50fVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlPXtzZXRNZXNzYWdlfVxyXG4gICAgICAgICAgICB1cmw9e3ZpZXdVcmx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFBhcGVyU3VyZmFjZVxyXG4gICAgICAgICAgICBicmVha3BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgICAgIHRpdGxlPSdIb3N0IFVSTCdcclxuICAgICAgICAgICAgc2V0U25hY2tPcGVuPXtzZXRTbmFja09wZW59XHJcbiAgICAgICAgICAgIHNldFZhcmlhbnQ9e3NldFZhcmlhbnR9XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2U9e3NldE1lc3NhZ2V9XHJcbiAgICAgICAgICAgIHVybD17aG9zdFVybH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHk6IDEuMixcclxuICAgICAgICAgICAgICB3aWR0aDogNTUwLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxyXG4gICAgICAgICAgICAgIG15OiAyLFxyXG4gICAgICAgICAgICAgIC4uLmJyZWFrcG9pbnRzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvam9pbicpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFydCBNZWV0aW5nIChhcyBIb3N0KVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPENvcHlUb0NsaXBib2FyZCBvbkNvcHk9eygpID0+IGNvcHlUb0NsaXBib2FyZCgpfSB0ZXh0PXttc2d9PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTUwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjVweCcsXHJcbiAgICAgICAgICAgICAgICBteTogMixcclxuICAgICAgICAgICAgICAgIC4uLmJyZWFrcG9pbnRzLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ2NsaWNrZWQnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvcHkgaW52aXRlIHRvIENsaXBib2FyZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPFNuYWNrQmFyXHJcbiAgICAgICAgc25hY2tPcGVuPXtzbmFja09wZW59XHJcbiAgICAgICAgc25hY2tDbG9zZT17c25hY2tDbG9zZX1cclxuICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXJlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQm94IiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIlBhcGVyIiwiSWNvbkJ1dHRvbiIsIlN0YWNrIiwidXNlVGhlbWUiLCJDb250ZW50Q29weUljb24iLCJDb3B5VG9DbGlwYm9hcmQiLCJTbmFja0JhciIsIlRleHQiLCJwcm9wcyIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJjaGlsZHJlbiIsInN4IiwibWIiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImZvbnRXZWlnaHQiLCJQYXBlclN1cmZhY2UiLCJicmVha3BvaW50cyIsInRpdGxlIiwidXJsIiwic2V0TWVzc2FnZSIsInNldFZhcmlhbnQiLCJzZXRTbmFja09wZW4iLCJjb3B5VG9DbGlwYm9hcmQiLCJtc2ciLCJzcGxpdCIsIm10IiwiYm9yZGVyUmFkaXVzIiwiZWxldmF0aW9uIiwicCIsImZvbnRTaXplIiwiZGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsInB4IiwicGIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwibm9XcmFwIiwib25Db3B5IiwidGV4dCIsIlNoYXJlIiwibWVzc2FnZSIsInNuYWNrT3BlbiIsInRoZW1lIiwicm91dGVyIiwiZG93biIsIm1heFdpZHRoIiwic25hY2tDbG9zZSIsInJlYXNvbiIsImV2ZW50IiwiaG9zdFVybCIsInZpZXdVcmwiLCJob3N0Q29udHJvbCIsIm1lZXRpbmdOYW1lIiwiYXR0ZW5kZWUiLCJob3N0IiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJweSIsIm15Iiwib25DbGljayIsInB1c2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Share.js\n");

/***/ })

});