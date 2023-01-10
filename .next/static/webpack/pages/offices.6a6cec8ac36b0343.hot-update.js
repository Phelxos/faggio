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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Offices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons/Icon */ \"./components/icons/Icon.tsx\");\n/* harmony import */ var _components_MapOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MapOffices */ \"./components/MapOffices.tsx\");\n/* harmony import */ var _components_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Offices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_4__.ContextTeams);\n    const [allColleagues, setAllColleagues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [displayedColleagues, setDisplayedColleagues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    async function fetchImagesOfColleagues() {\n        try {\n            setIsLoading(true);\n            const resRandomUsers = await fetch(\"https://randomuser.me/api/?results=\".concat(allColleaguesfromAPI.length));\n            const randomUsers = await resRandomUsers.json();\n            const imgSources = randomUsers.results;\n            const colleaguesWithPhotos = allColleaguesfromAPI.map((colleague, i)=>{\n                return {\n                    ...colleague,\n                    imgSrc: imgSources[i].picture.large\n                };\n            });\n            filterColleagues(colleaguesWithPhotos);\n            setAllColleagues(colleaguesWithPhotos);\n        } catch (e) {\n            console.error(\"Something has gone wrong while fetching the photos of the colleagues.\");\n        } finally{\n            setIsLoading(false);\n            return;\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const filteredListOfColleagues = allColleagues === null || allColleagues === void 0 ? void 0 : allColleagues.filter((colleague)=>{\n            return colleague.office === (context === null || context === void 0 ? void 0 : context.displayedOffice);\n        });\n        setDisplayedColleagues(filteredListOfColleagues);\n    }, [\n        context === null || context === void 0 ? void 0 : context.displayedOffice\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full grow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-xl bg-gradient-to-b from-sky-700 to-slate-900 p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-light tracking-widest text-slate-900/50\",\n                    children: \"Standort w\\xe4hlen\"\n                }, void 0, false, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative mt-1 flex items-center justify-start border-t-2 border-sky-900 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            icon: \"informationCircle\",\n                            className: \"-top-10 -right-2 mr-1 h-7 w-7 fill-slate-900/75\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"z-10 text-xs uppercase\",\n                            children: [\n                                \"auf Stadt \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"tippen\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MapOffices__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/pages/offices.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Offices, \"24+f0OWkkIMlPZW7wRNY5CoWjJs=\");\n_c = Offices;\nvar _c;\n$RefreshReg$(_c, \"Offices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vZmZpY2VzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0Q7QUFDbkI7QUFDTTtBQUdpQjs7QUFHcEQsU0FBU08sVUFBVTs7SUFDaEMsTUFBTUMsVUFBVU4saURBQVVBLENBQUNJLDJFQUFZQTtJQUN2QyxNQUFNLENBQUNHLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUE7SUFDbEQsTUFBTSxDQUFDUSxxQkFBcUJDLHVCQUF1QixHQUNqRFQsK0NBQVFBO0lBQ1YsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFVLElBQUk7SUFFeEQsZUFBZVksMEJBQTZEO1FBQzFFLElBQUk7WUFDRkQsYUFBYSxJQUFJO1lBQ2pCLE1BQU1FLGlCQUFpQixNQUFNQyxNQUMzQixzQ0FBa0UsT0FBNUJDLHFCQUFxQkMsTUFBTTtZQUVuRSxNQUFNQyxjQUFjLE1BQU1KLGVBQWVLLElBQUk7WUFDN0MsTUFBTUMsYUFBYUYsWUFBWUcsT0FBTztZQUV0QyxNQUFNQyx1QkFBdUJOLHFCQUFxQk8sR0FBRyxDQUNuRCxDQUFDQyxXQUF1QkMsSUFBYztnQkFDcEMsT0FBTztvQkFDTCxHQUFHRCxTQUFTO29CQUNaRSxRQUFRTixVQUFVLENBQUNLLEVBQUUsQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLO2dCQUNyQztZQUNGO1lBRUZDLGlCQUFpQlA7WUFDakJkLGlCQUFpQmM7UUFDbkIsRUFBRSxPQUFPUSxHQUFHO1lBQ1ZDLFFBQVFDLEtBQUssQ0FDWDtRQUVKLFNBQVU7WUFDUnBCLGFBQWEsS0FBSztZQUNsQjtRQUNGO0lBQ0Y7SUFFQWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1rQywyQkFBMkIxQiwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWUyQixNQUFNLENBQ3BELENBQUNWLFlBQTBCO1lBQ3pCLE9BQU9BLFVBQVVXLE1BQU0sS0FBSzdCLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBUzhCLGVBQWU7UUFDdEQ7UUFFRjFCLHVCQUF1QnVCO0lBQ3pCLEdBQUc7UUFBQzNCLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBUzhCLGVBQWU7S0FBQztJQUM3QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF3RDs7Ozs7OzhCQUd0RSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDcEMsOERBQUlBOzRCQUNIc0MsTUFBSzs0QkFDTEYsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDRzs0QkFBR0gsV0FBVTs7Z0NBQXlCOzhDQUMzQiw4REFBQ0k7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHdEIsOERBQUN2Qyw4REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkIsQ0FBQztHQS9EdUJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29mZmljZXMudHN4P2U2NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL2ljb25zL0ljb25cIjtcbmltcG9ydCBNYXBPZmZpY2VzIGZyb20gXCIuLi9jb21wb25lbnRzL01hcE9mZmljZXNcIjtcbmltcG9ydCBUZWFtc1ZpZXdDb2xsZWFndWVzIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VUZWFtcy9UZWFtc1ZpZXdDb2xsZWFndWVzXCI7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tIFwiLi4vY29uZmlnL2luZGV4XCI7XG5pbXBvcnQgeyBDb250ZXh0VGVhbXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0cy9Db250ZXh0VGVhbXNcIjtcbmltcG9ydCBJQ29sbGVhZ3VlIGZyb20gXCIuLi90eXBpbmdzL2ludGVyZmFjZXMvSUNvbGxlYWd1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZmZpY2VzKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0VGVhbXMpO1xuICBjb25zdCBbYWxsQ29sbGVhZ3Vlcywgc2V0QWxsQ29sbGVhZ3Vlc10gPSB1c2VTdGF0ZTxJQ29sbGVhZ3VlW10+KCk7XG4gIGNvbnN0IFtkaXNwbGF5ZWRDb2xsZWFndWVzLCBzZXREaXNwbGF5ZWRDb2xsZWFndWVzXSA9XG4gICAgdXNlU3RhdGU8SUNvbGxlYWd1ZVtdPigpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbWFnZXNPZkNvbGxlYWd1ZXMoKTogUHJvbWlzZTxJQ29sbGVhZ3VlW10gfCB1bmRlZmluZWQ+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzUmFuZG9tVXNlcnMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvP3Jlc3VsdHM9JHthbGxDb2xsZWFndWVzZnJvbUFQSS5sZW5ndGh9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJhbmRvbVVzZXJzID0gYXdhaXQgcmVzUmFuZG9tVXNlcnMuanNvbigpO1xuICAgICAgY29uc3QgaW1nU291cmNlcyA9IHJhbmRvbVVzZXJzLnJlc3VsdHM7XG5cbiAgICAgIGNvbnN0IGNvbGxlYWd1ZXNXaXRoUGhvdG9zID0gYWxsQ29sbGVhZ3Vlc2Zyb21BUEkubWFwKFxuICAgICAgICAoY29sbGVhZ3VlOiBJQ29sbGVhZ3VlLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY29sbGVhZ3VlLFxuICAgICAgICAgICAgaW1nU3JjOiBpbWdTb3VyY2VzW2ldLnBpY3R1cmUubGFyZ2UgYXMgc3RyaW5nLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBmaWx0ZXJDb2xsZWFndWVzKGNvbGxlYWd1ZXNXaXRoUGhvdG9zKTtcbiAgICAgIHNldEFsbENvbGxlYWd1ZXMoY29sbGVhZ3Vlc1dpdGhQaG90b3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiU29tZXRoaW5nIGhhcyBnb25lIHdyb25nIHdoaWxlIGZldGNoaW5nIHRoZSBwaG90b3Mgb2YgdGhlIGNvbGxlYWd1ZXMuXCJcbiAgICAgICk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3RPZkNvbGxlYWd1ZXMgPSBhbGxDb2xsZWFndWVzPy5maWx0ZXIoXG4gICAgICAoY29sbGVhZ3VlOiBJQ29sbGVhZ3VlKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xsZWFndWUub2ZmaWNlID09PSBjb250ZXh0Py5kaXNwbGF5ZWRPZmZpY2U7XG4gICAgICB9XG4gICAgKTtcbiAgICBzZXREaXNwbGF5ZWRDb2xsZWFndWVzKGZpbHRlcmVkTGlzdE9mQ29sbGVhZ3Vlcyk7XG4gIH0sIFtjb250ZXh0Py5kaXNwbGF5ZWRPZmZpY2VdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXNreS03MDAgdG8tc2xhdGUtOTAwIHAtNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1saWdodCB0cmFja2luZy13aWRlc3QgdGV4dC1zbGF0ZS05MDAvNTBcIj5cbiAgICAgICAgICBTdGFuZG9ydCB3w6RobGVuXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IGJvcmRlci10LTIgYm9yZGVyLXNreS05MDAgcHktMlwiPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiaW5mb3JtYXRpb25DaXJjbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiLXRvcC0xMCAtcmlnaHQtMiBtci0xIGgtNyB3LTcgZmlsbC1zbGF0ZS05MDAvNzVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInotMTAgdGV4dC14cyB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgIGF1ZiBTdGFkdCA8c3Ryb25nPnRpcHBlbjwvc3Ryb25nPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWFwT2ZmaWNlcyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NlcnZlcn0vYXBpL3RlYW1zYCk7XG4gIGxldCBhbGxDb2xsZWFndWVzZnJvbUFQSSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsQ29sbGVhZ3Vlc2Zyb21BUEksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkljb24iLCJNYXBPZmZpY2VzIiwiQ29udGV4dFRlYW1zIiwiT2ZmaWNlcyIsImNvbnRleHQiLCJhbGxDb2xsZWFndWVzIiwic2V0QWxsQ29sbGVhZ3VlcyIsImRpc3BsYXllZENvbGxlYWd1ZXMiLCJzZXREaXNwbGF5ZWRDb2xsZWFndWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hJbWFnZXNPZkNvbGxlYWd1ZXMiLCJyZXNSYW5kb21Vc2VycyIsImZldGNoIiwiYWxsQ29sbGVhZ3Vlc2Zyb21BUEkiLCJsZW5ndGgiLCJyYW5kb21Vc2VycyIsImpzb24iLCJpbWdTb3VyY2VzIiwicmVzdWx0cyIsImNvbGxlYWd1ZXNXaXRoUGhvdG9zIiwibWFwIiwiY29sbGVhZ3VlIiwiaSIsImltZ1NyYyIsInBpY3R1cmUiLCJsYXJnZSIsImZpbHRlckNvbGxlYWd1ZXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyZWRMaXN0T2ZDb2xsZWFndWVzIiwiZmlsdGVyIiwib2ZmaWNlIiwiZGlzcGxheWVkT2ZmaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJpY29uIiwiaDMiLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/offices.tsx\n"));

/***/ })

});