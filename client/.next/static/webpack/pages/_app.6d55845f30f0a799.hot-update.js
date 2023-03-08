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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n//&& user.role.includes(\"Instructor\")\n\n\n\n\n\n\n\nconst { Item , SubMenu , ItemGroup  } = antd__WEBPACK_IMPORTED_MODULE_6__.Menu;\nconst TopNav = ()=>{\n    _s();\n    let [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { state: { user  } , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context___WEBPACK_IMPORTED_MODULE_3__.Context);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n    // console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    const logout = async ()=>{\n        dispatch({\n            type: \"LOGOUT\"\n        });\n        window.localStorage.removeItem(\"user\");\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/logout\");\n        //  toast (data.message);\n        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"signout successful\");\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        className: \"mb-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent = e.key,\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.AppstoreAddOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \"App\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, \"/\", false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            user !== null && user.role.includes(\"Instructor\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.CarryOutOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/instructor/course/create\",\n                    children: \"Create Course\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined)\n            }, \"/instructor/course/create\", false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.TeamOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/user/become-instructor\",\n                    children: \"Become an Instructor\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined)\n            }, \"/user/become-instructor\", false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined),\n            user === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                        onClick: (e)=>setCurrent(e.key),\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                        push: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined)\n                    }, \"/login\", false, {\n                        fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                        onClick: (e)=>setCurrent(e.key),\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                        push: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/register\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined)\n                    }, \"/register\", false, {\n                        fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            user !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.UserOutlined, {}, void 0, false, void 0, void 0),\n                title: user && user.name,\n                style: {\n                    marginLeft: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/user\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined)\n                        }, \"/user\", false, {\n                            fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                            className: \"float-end\",\n                            onClick: logout,\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LogoutOutlined, {}, void 0, false, void 0, void 0),\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined),\n            user !== null && user.role.includes(\"Instructor\") && // <span class=\"float-end\"></span>\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.TeamOutlined, {}, void 0, false, void 0, void 0),\n                className: \"float-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/instructor\",\n                    children: \"Instructor\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 120,\n                    columnNumber: 11\n                }, undefined)\n            }, \"/instructor\", false, {\n                fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\learn2\\\\learn\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TopNav, \"EsUlGayGSvGOMyRl20sMXt+JOLg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MENBQVE7Ozs7OzsyQkFEWDs7Ozs7c0NBSVYsOERBQUM5Qjs0QkFDQ3lCLFdBQVU7NEJBQ1ZDLFNBQVNYOzRCQUNUYyxvQkFBTSw4REFBQ3RDLDZEQUFjQTtzQ0FDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTU5nQixTQUFTLElBQUksSUFBSUEsS0FBS3dCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLGlCQUNuQyxrQ0FBa0M7MEJBQ2xDLDhEQUFDaEM7Z0JBRUMwQixTQUFTLENBQUNDLElBQU10QixXQUFXc0IsRUFBRUMsR0FBRztnQkFDaENDLG9CQUFNLDhEQUFDbEMsMkRBQVlBO2dCQUNuQjhCLFdBQVU7MEJBRVYsNEVBQUNyQyxrREFBSUE7b0JBQUMwQyxNQUFLOzhCQUFjOzs7Ozs7ZUFMckI7Ozs7Ozs7Ozs7O0FBVWQ7R0F6R00zQjs7UUFPV0wsa0RBQVNBOzs7S0FQcEJLO0FBMkdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyYmIHVzZXIucm9sZS5pbmNsdWRlcyhcIkluc3RydWN0b3JcIilcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBBcHBzdG9yZUFkZE91dGxpbmVkLFxyXG4gIExvZ2luT3V0bGluZWQsXHJcbiAgTG9nb3V0T3V0bGluZWQsXHJcbiAgVXNlckFkZE91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBDYXJyeU91dE91dGxpbmVkLFxyXG4gIFRlYW1PdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5jb25zdCB7IEl0ZW0sIFN1Yk1lbnUsIEl0ZW1Hcm91cCB9ID0gTWVudTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICBsZXQgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qge1xyXG4gICAgc3RhdGU6IHsgdXNlciB9LFxyXG4gICAgZGlzcGF0Y2gsXHJcbiAgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvY2Vzcy5icm93c2VyICYmIHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgfSwgW3Byb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR09VVFwiIH0pO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9sb2dvdXRcIik7XHJcbiAgICAvLyAgdG9hc3QgKGRhdGEubWVzc2FnZSk7XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwic2lnbm91dCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX0gY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICA8SXRlbVxyXG4gICAgICAgIGtleT1cIi9cIlxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiAoc2V0Q3VycmVudCA9IGUua2V5KX1cclxuICAgICAgICBpY29uPXs8QXBwc3RvcmVBZGRPdXRsaW5lZCAvPn1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QXBwPC9MaW5rPlxyXG4gICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICB7dXNlciAhPT0gbnVsbCAmJiB1c2VyLnJvbGUuaW5jbHVkZXMoXCJJbnN0cnVjdG9yXCIpID8gKFxyXG4gICAgICAgIDxJdGVtXHJcbiAgICAgICAgICBrZXk9XCIvaW5zdHJ1Y3Rvci9jb3Vyc2UvY3JlYXRlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX1cclxuICAgICAgICAgIGljb249ezxDYXJyeU91dE91dGxpbmVkIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5zdHJ1Y3Rvci9jb3Vyc2UvY3JlYXRlXCI+Q3JlYXRlIENvdXJzZTwvTGluaz5cclxuICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEl0ZW1cclxuICAgICAgICAgIGtleT1cIi91c2VyL2JlY29tZS1pbnN0cnVjdG9yXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX1cclxuICAgICAgICAgIGljb249ezxUZWFtT3V0bGluZWQgLz59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL2JlY29tZS1pbnN0cnVjdG9yXCI+QmVjb21lIGFuIEluc3RydWN0b3I8L0xpbms+XHJcbiAgICAgICAgPC9JdGVtPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3VzZXIgPT09IG51bGwgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICBrZXk9XCIvbG9naW5cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICAgIGljb249ezxMb2dpbk91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICBwdXNoPXt0cnVlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICBrZXk9XCIvcmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICAgIGljb249ezxVc2VyQWRkT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgIHB1c2g9e3RydWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHt1c2VyICE9PSBudWxsICYmIChcclxuICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn1cclxuICAgICAgICAgIHRpdGxlPXt1c2VyICYmIHVzZXIubmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEl0ZW1Hcm91cD5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL3VzZXJcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj5EYXNoYm9hcmQ8L0xpbms+XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtZW5kXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dvdXR9XHJcbiAgICAgICAgICAgICAgaWNvbj17PExvZ291dE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDwvSXRlbUdyb3VwPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgKX1cclxuICAgICAge3VzZXIgIT09IG51bGwgJiYgdXNlci5yb2xlLmluY2x1ZGVzKFwiSW5zdHJ1Y3RvclwiKSAmJiAoXHJcbiAgICAgICAgLy8gPHNwYW4gY2xhc3M9XCJmbG9hdC1lbmRcIj48L3NwYW4+XHJcbiAgICAgICAgPEl0ZW1cclxuICAgICAgICAgIGtleT1cIi9pbnN0cnVjdG9yXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX1cclxuICAgICAgICAgIGljb249ezxUZWFtT3V0bGluZWQgLz59XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1lbmRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5zdHJ1Y3RvclwiPkluc3RydWN0b3I8L0xpbms+XHJcbiAgICAgICAgPC9JdGVtPlxyXG4gICAgICApfVxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJNZW51IiwiTGluayIsIkFwcHN0b3JlQWRkT3V0bGluZWQiLCJMb2dpbk91dGxpbmVkIiwiTG9nb3V0T3V0bGluZWQiLCJVc2VyQWRkT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJDYXJyeU91dE91dGxpbmVkIiwiVGVhbU91dGxpbmVkIiwiQ29udGV4dCIsImF4aW9zIiwidXNlUm91dGVyIiwidG9hc3QiLCJJdGVtIiwiU3ViTWVudSIsIkl0ZW1Hcm91cCIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJ1c2VyIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsb2dvdXQiLCJ0eXBlIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImRhdGEiLCJnZXQiLCJzdWNjZXNzIiwicHVzaCIsIm1vZGUiLCJzZWxlY3RlZEtleXMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZSIsImtleSIsImljb24iLCJocmVmIiwicm9sZSIsImluY2x1ZGVzIiwidGl0bGUiLCJuYW1lIiwic3R5bGUiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});