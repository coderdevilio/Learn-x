"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n//&& user.role.includes(\"Instructor\")\n\n\n\n\n\n\n\nconst { Item , SubMenu , ItemGroup  } = antd__WEBPACK_IMPORTED_MODULE_6__.Menu;\nconst TopNav = ()=>{\n    _s();\n    let [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { state: { user  } , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context___WEBPACK_IMPORTED_MODULE_3__.Context);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n    // console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    const logout = async ()=>{\n        dispatch({\n            type: \"LOGOUT\"\n        });\n        window.localStorage.removeItem(\"user\");\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/logout\");\n        //  toast (data.message);\n        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"signout successful\");\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        // theme=\"dark\"\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        className: \"mb-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent = e.key,\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.AppstoreAddOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \"APP\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, \"/\", false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            user !== null && user.role.includes(\"Instructor\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.CarryOutOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/instructor/course/create\",\n                    children: \"Create Course\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined)\n            }, \"/instructor/course/create\", false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.TeamOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/user/become-instructor\",\n                    children: \"Become an Instructor\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, undefined)\n            }, \"/user/become-instructor\", false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            user === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                        onClick: (e)=>setCurrent(e.key),\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined)\n                    }, \"/login\", false, {\n                        fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                        onClick: (e)=>setCurrent(e.key),\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/register\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined)\n                    }, \"/register\", false, {\n                        fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            user !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.UserOutlined, {}, void 0, false, void 0, void 0),\n                title: user && user.name,\n                style: {\n                    marginLeft: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/user\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, undefined)\n                        }, \"/user\", false, {\n                            fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                            className: \"float-end\",\n                            onClick: logout,\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LogoutOutlined, {}, void 0, false, void 0, void 0),\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, undefined),\n            user !== null && user.role.includes(\"Instructor\") && // <span class=\"float-end\"></span>\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.TeamOutlined, {}, void 0, false, void 0, void 0),\n                className: \"float-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/instructor\",\n                    children: \"Instructor\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 123,\n                    columnNumber: 11\n                }, undefined)\n            }, \"/instructor\", false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TopNav, \"EsUlGayGSvGOMyRl20sMXt+JOLg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQzlCOzRCQUNDeUIsV0FBVTs0QkFDVkMsU0FBU1g7NEJBQ1RjLG9CQUFNLDhEQUFDdEMsNkRBQWNBO3NDQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNTmdCLFNBQVMsSUFBSSxJQUFJQSxLQUFLd0IsSUFBSSxDQUFDQyxRQUFRLENBQUMsaUJBQ25DLGtDQUFrQzswQkFDbEMsOERBQUNoQztnQkFFQzBCLFNBQVMsQ0FBQ0MsSUFBTXRCLFdBQVdzQixFQUFFQyxHQUFHO2dCQUNoQ0Msb0JBQU0sOERBQUNsQywyREFBWUE7Z0JBQ25COEIsV0FBVTswQkFFViw0RUFBQ3JDLGtEQUFJQTtvQkFBQzBDLE1BQUs7OEJBQWM7Ozs7OztlQUxyQjs7Ozs7Ozs7Ozs7QUFVZDtHQTVHTTNCOztRQU9XTCxrREFBU0E7OztLQVBwQks7QUE4R04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3BOYXYuanM/OWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vJiYgdXNlci5yb2xlLmluY2x1ZGVzKFwiSW5zdHJ1Y3RvclwiKVxyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIEFwcHN0b3JlQWRkT3V0bGluZWQsXHJcbiAgTG9naW5PdXRsaW5lZCxcclxuICBMb2dvdXRPdXRsaW5lZCxcclxuICBVc2VyQWRkT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIENhcnJ5T3V0T3V0bGluZWQsXHJcbiAgVGVhbU91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmNvbnN0IHsgSXRlbSwgU3ViTWVudSwgSXRlbUdyb3VwIH0gPSBNZW51O1xyXG5cclxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xyXG4gIGxldCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB7XHJcbiAgICBzdGF0ZTogeyB1c2VyIH0sXHJcbiAgICBkaXNwYXRjaCxcclxuICB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgLy8gY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HT1VUXCIgfSk7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2xvZ291dFwiKTtcclxuICAgIC8vICB0b2FzdCAoZGF0YS5tZXNzYWdlKTtcclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCJzaWdub3V0IHN1Y2Nlc3NmdWxcIik7XHJcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudVxyXG4gICAgICAvLyB0aGVtZT1cImRhcmtcIlxyXG4gICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfVxyXG4gICAgICBjbGFzc05hbWU9XCJtYi0yXCJcclxuICAgID5cclxuICAgICAgPEl0ZW1cclxuICAgICAgICBrZXk9XCIvXCJcclxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gKHNldEN1cnJlbnQgPSBlLmtleSl9XHJcbiAgICAgICAgaWNvbj17PEFwcHN0b3JlQWRkT3V0bGluZWQgLz59XHJcbiAgICAgID5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkFQUDwvTGluaz5cclxuICAgICAgPC9JdGVtPlxyXG5cclxuICAgICAge3VzZXIgIT09IG51bGwgJiYgdXNlci5yb2xlLmluY2x1ZGVzKFwiSW5zdHJ1Y3RvclwiKSA/IChcclxuICAgICAgICA8SXRlbVxyXG4gICAgICAgICAga2V5PVwiL2luc3RydWN0b3IvY291cnNlL2NyZWF0ZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICBpY29uPXs8Q2FycnlPdXRPdXRsaW5lZCAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3IvY291cnNlL2NyZWF0ZVwiPkNyZWF0ZSBDb3Vyc2U8L0xpbms+XHJcbiAgICAgICAgPC9JdGVtPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxJdGVtXHJcbiAgICAgICAgICBrZXk9XCIvdXNlci9iZWNvbWUtaW5zdHJ1Y3RvclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICBpY29uPXs8VGVhbU91dGxpbmVkIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9iZWNvbWUtaW5zdHJ1Y3RvclwiPkJlY29tZSBhbiBJbnN0cnVjdG9yPC9MaW5rPlxyXG4gICAgICAgIDwvSXRlbT5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHt1c2VyID09PSBudWxsICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAga2V5PVwiL2xvZ2luXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxyXG4gICAgICAgICAgICBpY29uPXs8TG9naW5PdXRsaW5lZCAvPn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAga2V5PVwiL3JlZ2lzdGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxyXG4gICAgICAgICAgICBpY29uPXs8VXNlckFkZE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7dXNlciAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgIGljb249ezxVc2VyT3V0bGluZWQgLz59XHJcbiAgICAgICAgICB0aXRsZT17dXNlciAmJiB1c2VyLm5hbWV9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJdGVtR3JvdXA+XHJcbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi91c2VyXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+RGFzaGJvYXJkPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LWVuZFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9nb3V0fVxyXG4gICAgICAgICAgICAgIGljb249ezxMb2dvdXRPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8L0l0ZW1Hcm91cD5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICl9XHJcbiAgICAgIHt1c2VyICE9PSBudWxsICYmIHVzZXIucm9sZS5pbmNsdWRlcyhcIkluc3RydWN0b3JcIikgJiYgKFxyXG4gICAgICAgIC8vIDxzcGFuIGNsYXNzPVwiZmxvYXQtZW5kXCI+PC9zcGFuPlxyXG4gICAgICAgIDxJdGVtXHJcbiAgICAgICAgICBrZXk9XCIvaW5zdHJ1Y3RvclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICBpY29uPXs8VGVhbU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtZW5kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3JcIj5JbnN0cnVjdG9yPC9MaW5rPlxyXG4gICAgICAgIDwvSXRlbT5cclxuICAgICAgKX1cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiTWVudSIsIkxpbmsiLCJBcHBzdG9yZUFkZE91dGxpbmVkIiwiTG9naW5PdXRsaW5lZCIsIkxvZ291dE91dGxpbmVkIiwiVXNlckFkZE91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiQ2FycnlPdXRPdXRsaW5lZCIsIlRlYW1PdXRsaW5lZCIsIkNvbnRleHQiLCJheGlvcyIsInVzZVJvdXRlciIsInRvYXN0IiwiSXRlbSIsIlN1Yk1lbnUiLCJJdGVtR3JvdXAiLCJUb3BOYXYiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInN0YXRlIiwidXNlciIsImRpc3BhdGNoIiwicm91dGVyIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibG9nb3V0IiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkYXRhIiwiZ2V0Iiwic3VjY2VzcyIsInB1c2giLCJtb2RlIiwic2VsZWN0ZWRLZXlzIiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJrZXkiLCJpY29uIiwiaHJlZiIsInJvbGUiLCJpbmNsdWRlcyIsInRpdGxlIiwibmFtZSIsInN0eWxlIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});