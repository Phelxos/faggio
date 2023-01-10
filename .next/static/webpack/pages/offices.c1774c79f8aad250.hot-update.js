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

/***/ "./components/MapOffices.tsx":
/*!***********************************!*\
  !*** ./components/MapOffices.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n/* harmony import */ var _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typings/types/TOffices */ \"./typings/types/TOffices.ts\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst markers = [\n    {\n        markerOffset: 13,\n        name: \"k\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"m\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__.ContextTeams);\n    function handleMarkerClick(office) {\n        const germanOfficeNameInLowerCase = office.toLowerCase();\n        context === null || context === void 0 ? void 0 : context.setDisplayedOffice(_typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesGermanToEnglish[germanOfficeNameInLowerCase]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.ComposableMap, {\n        width: 120,\n        height: 200,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            stroke: \"#0369a1\",\n                            strokeOpacity: 0.25,\n                            strokeWidth: 0.125\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>{\n                let { name , coordinates , markerOffset  } = param;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                    coordinates: coordinates,\n                    onClick: ()=>handleMarkerClick(name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"#e1f5fe\",\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"8px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\",\n                                fontWeight: \"\".concat(name === _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesEnglishToGerman[context === null || context === void 0 ? void 0 : context.displayedOffice] ? \"bold\" : \"thin\")\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(MapOffices, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUNhO0FBS3BCO0FBTVI7QUFRM0IsTUFBTVMsVUFBcUI7SUFDekI7UUFDRUMsY0FBYztRQUNkQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVU7SUFDcEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBTztTQUFTO0lBQ2hDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVU7U0FBUztJQUNuQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFTO1NBQVM7SUFDbEM7SUFDQTtRQUNFRixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVM7U0FBUztJQUNsQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVM7SUFDbkM7Q0FDRDtBQUVELE1BQU1DLFNBQ0o7QUFFYSxTQUFTQyxhQUFhOztJQUNuQyxNQUFNQyxVQUFVZCxpREFBVUEsQ0FBQ0MsZ0VBQVlBO0lBQ3ZDLFNBQVNjLGtCQUFrQkMsTUFBc0IsRUFBRTtRQUNqRCxNQUFNQyw4QkFDSkQsT0FBT0UsV0FBVztRQUNwQkosb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTSyxrQkFBa0IsQ0FDekJqQiw0RUFBdUIsQ0FBQ2UsNEJBQTRCO0lBRXhEO0lBRUEscUJBQ0UsOERBQUNiLDREQUFhQTtRQUNaZ0IsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFlBQVc7UUFDWEMsa0JBQWtCO1lBQ2hCQyxRQUFRO2dCQUFDLENBQUM7Z0JBQU0sQ0FBQztnQkFBTTthQUFFO1lBQ3pCQyxPQUFPO1FBQ1Q7OzBCQUVBLDhEQUFDcEIsMERBQVdBO2dCQUFDcUIsV0FBV2Q7MEJBQ3JCLFNBQ0NlO3dCQURBLEVBQUVBLFlBQVcsRUFBRTsyQkFDZkEsWUFBWUMsR0FBRyxDQUFDLENBQUNDLG9CQUNmLDhEQUFDdkIsd0RBQVNBOzRCQUVSb0IsV0FBV0c7NEJBQ1hDLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLGVBQWU7NEJBQ2ZDLGFBQWE7MkJBTFJKLElBQUlLLE1BQU07Ozs7O2dCQU9sQjs7Ozs7O1lBR0oxQixRQUFRb0IsR0FBRyxDQUFDO29CQUFDLEVBQUVsQixLQUFJLEVBQUVDLFlBQVcsRUFBRUYsYUFBWSxFQUFFOzhCQUMvQyxxRUFBQ0YscURBQU1BO29CQUVMSSxhQUFhQTtvQkFDYndCLFNBQVMsSUFBTXBCLGtCQUFrQkw7O3NDQUVqQyw4REFBQzBCOzRCQUFPQyxHQUFHOzRCQUFHUCxNQUFLOzRCQUFVQyxRQUFPOzRCQUFVRSxhQUFhOzs7Ozs7c0NBQzNELDhEQUFDSzs0QkFDQ0MsWUFBVzs0QkFDWEMsR0FBRy9COzRCQUNIZ0MsT0FBTztnQ0FDTEMsVUFBVTtnQ0FDVlosTUFBTTtnQ0FDTmEsZUFBZTtnQ0FDZkMsWUFBWSxHQUlYLE9BSENsQyxTQUFTUCw0RUFBdUIsQ0FBQ1csb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTK0IsZUFBZSxDQUFFLEdBQ3ZELFNBQ0EsTUFBTTs0QkFFZDtzQ0FFQ25DOzs7Ozs7O21CQW5CRUE7Ozs7Ozs7Ozs7OztBQXlCZixDQUFDO0dBN0R1Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBPZmZpY2VzLnRzeD8zNzk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0VGVhbXMgfSBmcm9tIFwiLi9jb250ZXh0cy9Db250ZXh0VGVhbXNcIjtcbmltcG9ydCB7XG4gIEVPZmZpY2VzR2VybWFuVG9FbmdsaXNoLFxuICBFT2ZmaWNlc0VuZ2xpc2hUb0dlcm1hbixcbiAgVE9mZmljZXNHZXJtYW4sXG59IGZyb20gXCIuLi90eXBpbmdzL3R5cGVzL1RPZmZpY2VzXCI7XG5pbXBvcnQge1xuICBDb21wb3NhYmxlTWFwLFxuICBHZW9ncmFwaGllcyxcbiAgR2VvZ3JhcGh5LFxuICBNYXJrZXIsXG59IGZyb20gXCJyZWFjdC1zaW1wbGUtbWFwc1wiO1xuXG5pbnRlcmZhY2UgSU1hcmtlciB7XG4gIG1hcmtlck9mZnNldDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5jb25zdCBtYXJrZXJzOiBJTWFya2VyW10gPSBbXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDEzLFxuICAgIG5hbWU6IFwia8O2bG5cIixcbiAgICBjb29yZGluYXRlczogWzYuOTUzMTAxLCA1MC45MzUxNzNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNixcbiAgICBuYW1lOiBcImRvcnRtdW5kXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs3LjQ2NiwgNTEuNTE0OTRdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNSxcbiAgICBuYW1lOiBcIm3DvG5jaGVuXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMS41NzU0OSwgNDguMTM3NDNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNSxcbiAgICBuYW1lOiBcImhhbWJ1cmdcIixcbiAgICBjb29yZGluYXRlczogWzkuOTkzMDIsIDUzLjU1MDczXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogMTIsXG4gICAgbmFtZTogXCJmcmFua2Z1cnRcIixcbiAgICBjb29yZGluYXRlczogWzguNjg0MTcsIDUwLjExNTUyXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJiZXJsaW5cIixcbiAgICBjb29yZGluYXRlczogWzEzLjQxMDUzLCA1Mi41MjQzN10sXG4gIH0sXG5dO1xuXG5jb25zdCBnZW9VcmwgPVxuICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZWxkZXJzdmVsZC90b3BvanNvbi9tYXN0ZXIvY291bnRyaWVzL2dlcm1hbnkvZ2VybWFueS1yZWdpb25zLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwT2ZmaWNlcygpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29udGV4dFRlYW1zKTtcbiAgZnVuY3Rpb24gaGFuZGxlTWFya2VyQ2xpY2sob2ZmaWNlOiBUT2ZmaWNlc0dlcm1hbikge1xuICAgIGNvbnN0IGdlcm1hbk9mZmljZU5hbWVJbkxvd2VyQ2FzZTogVE9mZmljZXNHZXJtYW4gPVxuICAgICAgb2ZmaWNlLnRvTG93ZXJDYXNlKCkgYXMgVE9mZmljZXNHZXJtYW47XG4gICAgY29udGV4dD8uc2V0RGlzcGxheWVkT2ZmaWNlKFxuICAgICAgRU9mZmljZXNHZXJtYW5Ub0VuZ2xpc2hbZ2VybWFuT2ZmaWNlTmFtZUluTG93ZXJDYXNlXVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb21wb3NhYmxlTWFwXG4gICAgICB3aWR0aD17MTIwfVxuICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICBwcm9qZWN0aW9uPVwiZ2VvTWVyY2F0b3JcIlxuICAgICAgcHJvamVjdGlvbkNvbmZpZz17e1xuICAgICAgICByb3RhdGU6IFstMTAuNSwgLTUxLjAsIDBdLFxuICAgICAgICBzY2FsZTogMTAwMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEdlb2dyYXBoaWVzIGdlb2dyYXBoeT17Z2VvVXJsfT5cbiAgICAgICAgeyh7IGdlb2dyYXBoaWVzIH0pID0+XG4gICAgICAgICAgZ2VvZ3JhcGhpZXMubWFwKChnZW8pID0+IChcbiAgICAgICAgICAgIDxHZW9ncmFwaHlcbiAgICAgICAgICAgICAga2V5PXtnZW8ucnNtS2V5fVxuICAgICAgICAgICAgICBnZW9ncmFwaHk9e2dlb31cbiAgICAgICAgICAgICAgZmlsbD1cIiMwMjg0YzdcIlxuICAgICAgICAgICAgICBzdHJva2U9XCIjMDM2OWExXCJcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT17MC4yNX1cbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezAuMTI1fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L0dlb2dyYXBoaWVzPlxuICAgICAge21hcmtlcnMubWFwKCh7IG5hbWUsIGNvb3JkaW5hdGVzLCBtYXJrZXJPZmZzZXQgfSkgPT4gKFxuICAgICAgICA8TWFya2VyXG4gICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgIGNvb3JkaW5hdGVzPXtjb29yZGluYXRlc31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYXJrZXJDbGljayhuYW1lIGFzIFRPZmZpY2VzR2VybWFuKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGUgcj17M30gZmlsbD1cIiNlMWY1ZmVcIiBzdHJva2U9XCIjMDE1NzliXCIgc3Ryb2tlV2lkdGg9ezAuNX0gLz5cbiAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICB5PXttYXJrZXJPZmZzZXR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCI4cHhcIixcbiAgICAgICAgICAgICAgZmlsbDogXCIjZTFmNWZlXCIsXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGAke1xuICAgICAgICAgICAgICAgIG5hbWUgPT09IEVPZmZpY2VzRW5nbGlzaFRvR2VybWFuW2NvbnRleHQ/LmRpc3BsYXllZE9mZmljZSFdXG4gICAgICAgICAgICAgICAgICA/IFwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICA6IFwidGhpblwiXG4gICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgIDwvTWFya2VyPlxuICAgICAgKSl9XG4gICAgPC9Db21wb3NhYmxlTWFwPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkNvbnRleHRUZWFtcyIsIkVPZmZpY2VzR2VybWFuVG9FbmdsaXNoIiwiRU9mZmljZXNFbmdsaXNoVG9HZXJtYW4iLCJDb21wb3NhYmxlTWFwIiwiR2VvZ3JhcGhpZXMiLCJHZW9ncmFwaHkiLCJNYXJrZXIiLCJtYXJrZXJzIiwibWFya2VyT2Zmc2V0IiwibmFtZSIsImNvb3JkaW5hdGVzIiwiZ2VvVXJsIiwiTWFwT2ZmaWNlcyIsImNvbnRleHQiLCJoYW5kbGVNYXJrZXJDbGljayIsIm9mZmljZSIsImdlcm1hbk9mZmljZU5hbWVJbkxvd2VyQ2FzZSIsInRvTG93ZXJDYXNlIiwic2V0RGlzcGxheWVkT2ZmaWNlIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwicHJvamVjdGlvbkNvbmZpZyIsInJvdGF0ZSIsInNjYWxlIiwiZ2VvZ3JhcGh5IiwiZ2VvZ3JhcGhpZXMiLCJtYXAiLCJnZW8iLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdpZHRoIiwicnNtS2V5Iiwib25DbGljayIsImNpcmNsZSIsInIiLCJ0ZXh0IiwidGV4dEFuY2hvciIsInkiLCJzdHlsZSIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5ZWRPZmZpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});