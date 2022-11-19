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

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @next/next/no-img-element */ \n\n\nconst Navbar = ()=>{\n    const menu = [\n        {\n            label: \"About\",\n            route: \"/\"\n        },\n        {\n            label: \"Pricing\",\n            route: \"/pricing\"\n        },\n        {\n            label: \"Team\",\n            route: \"/team\"\n        },\n        {\n            label: \"Tracks\",\n            route: \"/tracks\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-fit text-black flex flex-row justify-start gap-12 items-center bg-transparent sticky top-0 z-[100] bg-gradient-to-r from-white via-transparent\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"./logo.svg\",\n                height: 80,\n                width: 100,\n                alt: \"AAP-logo\",\n                className: \"pl-5 py-1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nitya\\\\Desktop\\\\GIT-HUB\\\\Testing for hackathon\\\\components\\\\Navbar.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            menu.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-xl font-semibold\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: item.route,\n                        children: item.label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nitya\\\\Desktop\\\\GIT-HUB\\\\Testing for hackathon\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 25\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Nitya\\\\Desktop\\\\GIT-HUB\\\\Testing for hackathon\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 21\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl font-semibold\",\n                children: \"More >\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nitya\\\\Desktop\\\\GIT-HUB\\\\Testing for hackathon\\\\components\\\\Navbar.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nitya\\\\Desktop\\\\GIT-HUB\\\\Testing for hackathon\\\\components\\\\Navbar.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRDQUE0QyxHQUM1QztBQUE0QjtBQUNIO0FBRXpCLE1BQU1FLFNBQVMsSUFBTTtJQUNqQixNQUFNQyxPQUFPO1FBQUM7WUFBRUMsT0FBTztZQUFTQyxPQUFPO1FBQUk7UUFBRztZQUFFRCxPQUFPO1lBQVdDLE9BQU87UUFBVztRQUFHO1lBQUVELE9BQU87WUFBUUMsT0FBTztRQUFRO1FBQUc7WUFBRUQsT0FBTztZQUFVQyxPQUFPO1FBQVU7S0FBRTtJQUNoSyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFJQyxLQUFJO2dCQUFhQyxRQUFRO2dCQUFJQyxPQUFPO2dCQUFLQyxLQUFJO2dCQUFXTCxXQUFVOzs7Ozs7WUFDdEVKLEtBQUtVLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO2dCQUN2QixxQkFDSSw4REFBQ1Q7b0JBQWdCQyxXQUFVOzhCQUN2Qiw0RUFBQ1Asa0RBQUlBO3dCQUFDZ0IsTUFBTUYsS0FBS1QsS0FBSztrQ0FDakJTLEtBQUtWLEtBQUs7Ozs7OzttQkFGVFc7Ozs7O1lBTWxCOzBCQUNBLDhEQUFDVDtnQkFBSUMsV0FBVTswQkFBd0I7Ozs7Ozs7Ozs7OztBQUtuRDtLQW5CTUw7QUFxQk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IFt7IGxhYmVsOiBcIkFib3V0XCIsIHJvdXRlOiBcIi9cIiB9LCB7IGxhYmVsOiBcIlByaWNpbmdcIiwgcm91dGU6IFwiL3ByaWNpbmdcIiB9LCB7IGxhYmVsOiBcIlRlYW1cIiwgcm91dGU6IFwiL3RlYW1cIiB9LCB7IGxhYmVsOiBcIlRyYWNrc1wiLCByb3V0ZTogXCIvdHJhY2tzXCIgfV1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZpdCB0ZXh0LWJsYWNrIGZsZXggZmxleC1yb3cganVzdGlmeS1zdGFydCBnYXAtMTIgaXRlbXMtY2VudGVyIGJnLXRyYW5zcGFyZW50IHN0aWNreSB0b3AtMCB6LVsxMDBdIGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZSB2aWEtdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9sb2dvLnN2Z1wiIGhlaWdodD17ODB9IHdpZHRoPXsxMDB9IGFsdD1cIkFBUC1sb2dvXCIgY2xhc3NOYW1lPVwicGwtNSBweS0xXCIgLz5cbiAgICAgICAgICAgIHttZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5yb3V0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICBNb3JlICZndDtcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJOYXZiYXIiLCJtZW51IiwibGFiZWwiLCJyb3V0ZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n"));

/***/ })

});