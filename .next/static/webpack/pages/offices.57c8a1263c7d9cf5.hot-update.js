"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/offices",{

/***/ "./pages/offices.tsx":
/*!***************************!*\
  !*** ./pages/offices.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Offices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons/Icon */ \"./components/icons/Icon.tsx\");\n/* harmony import */ var _components_MapOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MapOffices */ \"./components/MapOffices.tsx\");\n/* harmony import */ var _components_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Offices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_4__.ContextTeams);\n    const [allColleagues, setAllColleagues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [displayedColleagues, setDisplayedColleagues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const filteredListOfColleagues = allColleagues === null || allColleagues === void 0 ? void 0 : allColleagues.filter((colleague)=>{\n            return (colleague.forename.includes(context === null || context === void 0 ? void 0 : context.searchForUser) || colleague.surname.includes(context === null || context === void 0 ? void 0 : context.searchForUser)) && colleague.office === (context === null || context === void 0 ? void 0 : context.displayedOffice);\n        });\n        setDisplayedColleagues(filteredListOfColleagues);\n    }, [\n        context === null || context === void 0 ? void 0 : context.displayedOffice\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full grow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-xl bg-gradient-to-b from-sky-700 to-slate-900 p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-light tracking-widest text-slate-900/50\",\n                    children: \"Standort w\\xe4hlen\"\n                }, void 0, false, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative mt-1 flex items-center justify-start border-t-2 border-sky-900 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            icon: \"informationCircle\",\n                            className: \"-top-10 -right-2 mr-1 h-7 w-7 fill-slate-900/75\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"z-10 text-xs uppercase\",\n                            children: [\n                                \"auf Stadt \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"tippen\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MapOffices__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Offices, \"kxHB+E7vL3lZkQm3mUde72hNxVE=\");\n_c = Offices;\nvar _c;\n$RefreshReg$(_c, \"Offices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vZmZpY2VzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0Q7QUFDbkI7QUFDTTtBQUdpQjs7QUFHcEQsU0FBU08sVUFBVTs7SUFDaEMsTUFBTUMsVUFBVU4saURBQVVBLENBQUNJLDJFQUFZQTtJQUN2QyxNQUFNLENBQUNHLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUE7SUFDbEQsTUFBTSxDQUFDUSxxQkFBcUJDLHVCQUF1QixHQUNqRFQsK0NBQVFBO0lBRVZGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNWSwyQkFBMkJKLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZUssTUFBTSxDQUNwRCxDQUFDQyxZQUEwQjtZQUN6QixPQUNFLENBQUNBLFVBQVVDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDVCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNVLGFBQWEsS0FDakRILFVBQVVJLE9BQU8sQ0FBQ0YsUUFBUSxDQUFDVCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNVLGFBQWEsTUFDbkRILFVBQVVLLE1BQU0sS0FBS1osQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTYSxlQUFlO1FBRWpEO1FBRUZULHVCQUF1QkM7SUFDekIsR0FBRztRQUFDTCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNhLGVBQWU7S0FBQztJQUM3QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF3RDs7Ozs7OzhCQUd0RSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDbkIsOERBQUlBOzRCQUNIcUIsTUFBSzs0QkFDTEYsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDRzs0QkFBR0gsV0FBVTs7Z0NBQXlCOzhDQUMzQiw4REFBQ0k7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHdEIsOERBQUN0Qiw4REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkIsQ0FBQztHQXJDdUJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29mZmljZXMudHN4P2U2NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL2ljb25zL0ljb25cIjtcbmltcG9ydCBNYXBPZmZpY2VzIGZyb20gXCIuLi9jb21wb25lbnRzL01hcE9mZmljZXNcIjtcbmltcG9ydCBUZWFtc1ZpZXdDb2xsZWFndWVzIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VUZWFtcy9UZWFtc1ZpZXdDb2xsZWFndWVzXCI7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tIFwiLi4vY29uZmlnL2luZGV4XCI7XG5pbXBvcnQgeyBDb250ZXh0VGVhbXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0cy9Db250ZXh0VGVhbXNcIjtcbmltcG9ydCBJQ29sbGVhZ3VlIGZyb20gXCIuLi90eXBpbmdzL2ludGVyZmFjZXMvSUNvbGxlYWd1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZmZpY2VzKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0VGVhbXMpO1xuICBjb25zdCBbYWxsQ29sbGVhZ3Vlcywgc2V0QWxsQ29sbGVhZ3Vlc10gPSB1c2VTdGF0ZTxJQ29sbGVhZ3VlW10+KCk7XG4gIGNvbnN0IFtkaXNwbGF5ZWRDb2xsZWFndWVzLCBzZXREaXNwbGF5ZWRDb2xsZWFndWVzXSA9XG4gICAgdXNlU3RhdGU8SUNvbGxlYWd1ZVtdPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0T2ZDb2xsZWFndWVzID0gYWxsQ29sbGVhZ3Vlcz8uZmlsdGVyKFxuICAgICAgKGNvbGxlYWd1ZTogSUNvbGxlYWd1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChjb2xsZWFndWUuZm9yZW5hbWUuaW5jbHVkZXMoY29udGV4dD8uc2VhcmNoRm9yVXNlcikgfHxcbiAgICAgICAgICAgIGNvbGxlYWd1ZS5zdXJuYW1lLmluY2x1ZGVzKGNvbnRleHQ/LnNlYXJjaEZvclVzZXIpKSAmJlxuICAgICAgICAgIGNvbGxlYWd1ZS5vZmZpY2UgPT09IGNvbnRleHQ/LmRpc3BsYXllZE9mZmljZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gICAgc2V0RGlzcGxheWVkQ29sbGVhZ3VlcyhmaWx0ZXJlZExpc3RPZkNvbGxlYWd1ZXMpO1xuICB9LCBbY29udGV4dD8uZGlzcGxheWVkT2ZmaWNlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3Jvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1za3ktNzAwIHRvLXNsYXRlLTkwMCBwLTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbGlnaHQgdHJhY2tpbmctd2lkZXN0IHRleHQtc2xhdGUtOTAwLzUwXCI+XG4gICAgICAgICAgU3RhbmRvcnQgd8OkaGxlblxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBib3JkZXItdC0yIGJvcmRlci1za3ktOTAwIHB5LTJcIj5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImluZm9ybWF0aW9uQ2lyY2xlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIi10b3AtMTAgLXJpZ2h0LTIgbXItMSBoLTcgdy03IGZpbGwtc2xhdGUtOTAwLzc1XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ6LTEwIHRleHQteHMgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICBhdWYgU3RhZHQgPHN0cm9uZz50aXBwZW48L3N0cm9uZz5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1hcE9mZmljZXMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2FwaS90ZWFtc2ApO1xuICBsZXQgYWxsQ29sbGVhZ3Vlc2Zyb21BUEkgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbENvbGxlYWd1ZXNmcm9tQVBJLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJJY29uIiwiTWFwT2ZmaWNlcyIsIkNvbnRleHRUZWFtcyIsIk9mZmljZXMiLCJjb250ZXh0IiwiYWxsQ29sbGVhZ3VlcyIsInNldEFsbENvbGxlYWd1ZXMiLCJkaXNwbGF5ZWRDb2xsZWFndWVzIiwic2V0RGlzcGxheWVkQ29sbGVhZ3VlcyIsImZpbHRlcmVkTGlzdE9mQ29sbGVhZ3VlcyIsImZpbHRlciIsImNvbGxlYWd1ZSIsImZvcmVuYW1lIiwiaW5jbHVkZXMiLCJzZWFyY2hGb3JVc2VyIiwic3VybmFtZSIsIm9mZmljZSIsImRpc3BsYXllZE9mZmljZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaWNvbiIsImgzIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/offices.tsx\n"));

/***/ })

});