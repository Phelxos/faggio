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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n/* harmony import */ var _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typings/types/TOffices */ \"./typings/types/TOffices.ts\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst markers = [\n    {\n        markerOffset: 12,\n        name: \"k\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"m\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"leipzig\",\n        coordinates: [\n            12.360103,\n            51.340199\n        ]\n    },\n    {\n        markerOffset: 11,\n        name: \"bremen\",\n        coordinates: [\n            8.806422,\n            53.073635\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__.ContextTeams);\n    const [dynClassCircle, setDynClassCircle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function handleMarkerClick(office) {\n        const germanOfficeNameInLowerCase = office.toLowerCase();\n        context === null || context === void 0 ? void 0 : context.setDisplayedOffice(_typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesGermanToEnglish[germanOfficeNameInLowerCase]);\n    }\n    function isCurrentlyDisplayedOffice(chosenOffice) {\n        return chosenOffice === _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesEnglishToGerman[context === null || context === void 0 ? void 0 : context.displayedOffice];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.ComposableMap, {\n        width: 120,\n        height: 165,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            stroke: \"#0284c7\",\n                            className: \"outline-none\"\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>/*#__PURE__*/ {\n                let { name , coordinates , markerOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                    coordinates: coordinates,\n                    onClick: ()=>handleMarkerClick(name),\n                    style: {\n                        default: {\n                            fill: \"#06F\"\n                        },\n                        hover: {\n                            fontSize: \"16px\"\n                        }\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"\".concat(isCurrentlyDisplayedOffice(name) ? \"#7dd3fc\" : \"#0369a1\"),\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5,\n                            className: \"\".concat(!isCurrentlyDisplayedOffice(name) ? \"animate-pulse\" : \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"6px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\",\n                                fontWeight: \"\".concat(isCurrentlyDisplayedOffice(name) ? \"bold\" : \"300\"),\n                                opacity: \"\".concat(isCurrentlyDisplayedOffice(name) ? \"1\" : \"0.5\")\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(MapOffices, \"mCsiujYuqhR+YpaqDWv2bfQ4KPc=\");\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxlQUFlO2dDQUNmQyxZQUFZLEdBRVgsT0FEQzdCLDJCQUEyQlosUUFBUSxTQUFTLEtBQUs7Z0NBRW5EMEMsU0FBUyxHQUFrRCxPQUEvQzlCLDJCQUEyQlosUUFBUSxNQUFNLEtBQUs7NEJBQzVEO3NDQUVDQTs7Ozs7OzttQkE5QkVBOzs7OztZQWdDQzs7Ozs7OztBQUloQixDQUFDO0dBN0V1Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBPZmZpY2VzLnRzeD8zNzk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGV4dFRlYW1zIH0gZnJvbSBcIi4vY29udGV4dHMvQ29udGV4dFRlYW1zXCI7XG5pbXBvcnQge1xuICBFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaCxcbiAgRU9mZmljZXNFbmdsaXNoVG9HZXJtYW4sXG4gIFRPZmZpY2VzR2VybWFuLFxufSBmcm9tIFwiLi4vdHlwaW5ncy90eXBlcy9UT2ZmaWNlc1wiO1xuaW1wb3J0IHtcbiAgQ29tcG9zYWJsZU1hcCxcbiAgR2VvZ3JhcGhpZXMsXG4gIEdlb2dyYXBoeSxcbiAgTWFya2VyLFxufSBmcm9tIFwicmVhY3Qtc2ltcGxlLW1hcHNcIjtcblxuaW50ZXJmYWNlIElNYXJrZXIge1xuICBtYXJrZXJPZmZzZXQ6IG51bWJlcjtcbiAgbmFtZTogVE9mZmljZXNHZXJtYW47XG4gIGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5jb25zdCBtYXJrZXJzOiBJTWFya2VyW10gPSBbXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDEyLFxuICAgIG5hbWU6IFwia8O2bG5cIixcbiAgICBjb29yZGluYXRlczogWzYuOTUzMTAxLCA1MC45MzUxNzNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNixcbiAgICBuYW1lOiBcImRvcnRtdW5kXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs3LjQ2NiwgNTEuNTE0OTRdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNixcbiAgICBuYW1lOiBcIm3DvG5jaGVuXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMS41NzU0OSwgNDguMTM3NDNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNixcbiAgICBuYW1lOiBcImhhbWJ1cmdcIixcbiAgICBjb29yZGluYXRlczogWzkuOTkzMDIsIDUzLjU1MDczXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogMTIsXG4gICAgbmFtZTogXCJmcmFua2Z1cnRcIixcbiAgICBjb29yZGluYXRlczogWzguNjg0MTcsIDUwLjExNTUyXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTYsXG4gICAgbmFtZTogXCJiZXJsaW5cIixcbiAgICBjb29yZGluYXRlczogWzEzLjQxMDUzLCA1Mi41MjQzN10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDEyLFxuICAgIG5hbWU6IFwibGVpcHppZ1wiLFxuICAgIGNvb3JkaW5hdGVzOiBbMTIuMzYwMTAzLCA1MS4zNDAxOTldLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAxMSxcbiAgICBuYW1lOiBcImJyZW1lblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbOC44MDY0MjIsIDUzLjA3MzYzNV0sXG4gIH0sXG5dO1xuXG5jb25zdCBnZW9VcmwgPVxuICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZWxkZXJzdmVsZC90b3BvanNvbi9tYXN0ZXIvY291bnRyaWVzL2dlcm1hbnkvZ2VybWFueS1yZWdpb25zLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwT2ZmaWNlcygpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29udGV4dFRlYW1zKTtcbiAgY29uc3QgW2R5bkNsYXNzQ2lyY2xlLCBzZXREeW5DbGFzc0NpcmNsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBmdW5jdGlvbiBoYW5kbGVNYXJrZXJDbGljayhvZmZpY2U6IFRPZmZpY2VzR2VybWFuKSB7XG4gICAgY29uc3QgZ2VybWFuT2ZmaWNlTmFtZUluTG93ZXJDYXNlOiBUT2ZmaWNlc0dlcm1hbiA9XG4gICAgICBvZmZpY2UudG9Mb3dlckNhc2UoKSBhcyBUT2ZmaWNlc0dlcm1hbjtcbiAgICBjb250ZXh0Py5zZXREaXNwbGF5ZWRPZmZpY2UoXG4gICAgICBFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaFtnZXJtYW5PZmZpY2VOYW1lSW5Mb3dlckNhc2VdXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ3VycmVudGx5RGlzcGxheWVkT2ZmaWNlKGNob3Nlbk9mZmljZTogVE9mZmljZXNHZXJtYW4pIHtcbiAgICByZXR1cm4gY2hvc2VuT2ZmaWNlID09PSBFT2ZmaWNlc0VuZ2xpc2hUb0dlcm1hbltjb250ZXh0Py5kaXNwbGF5ZWRPZmZpY2UhXTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbXBvc2FibGVNYXBcbiAgICAgIHdpZHRoPXsxMjB9XG4gICAgICBoZWlnaHQ9ezE2NX1cbiAgICAgIHByb2plY3Rpb249XCJnZW9NZXJjYXRvclwiXG4gICAgICBwcm9qZWN0aW9uQ29uZmlnPXt7XG4gICAgICAgIHJvdGF0ZTogWy0xMC41LCAtNTEuMCwgMF0sXG4gICAgICAgIHNjYWxlOiAxMDAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8R2VvZ3JhcGhpZXMgZ2VvZ3JhcGh5PXtnZW9Vcmx9PlxuICAgICAgICB7KHsgZ2VvZ3JhcGhpZXMgfSkgPT5cbiAgICAgICAgICBnZW9ncmFwaGllcy5tYXAoKGdlbykgPT4gKFxuICAgICAgICAgICAgPEdlb2dyYXBoeVxuICAgICAgICAgICAgICBrZXk9e2dlby5yc21LZXl9XG4gICAgICAgICAgICAgIGdlb2dyYXBoeT17Z2VvfVxuICAgICAgICAgICAgICBmaWxsPVwiIzAyODRjN1wiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiMwMjg0YzdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L0dlb2dyYXBoaWVzPlxuICAgICAge21hcmtlcnMubWFwKCh7IG5hbWUsIGNvb3JkaW5hdGVzLCBtYXJrZXJPZmZzZXQgfSkgPT4gKFxuICAgICAgICA8TWFya2VyXG4gICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgIGNvb3JkaW5hdGVzPXtjb29yZGluYXRlc31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYXJrZXJDbGljayhuYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGVmYXVsdDogeyBmaWxsOiBcIiMwNkZcIiB9LFxuICAgICAgICAgICAgaG92ZXI6IHsgZm9udFNpemU6IFwiMTZweFwiIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgIHI9ezN9XG4gICAgICAgICAgICBmaWxsPXtgJHtpc0N1cnJlbnRseURpc3BsYXllZE9mZmljZShuYW1lKSA/IFwiIzdkZDNmY1wiIDogXCIjMDM2OWExXCJ9YH1cbiAgICAgICAgICAgIHN0cm9rZT1cIiMwMTU3OWJcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezAuNX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICFpc0N1cnJlbnRseURpc3BsYXllZE9mZmljZShuYW1lKSA/IFwiYW5pbWF0ZS1wdWxzZVwiIDogXCJcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICB5PXttYXJrZXJPZmZzZXR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCI2cHhcIixcbiAgICAgICAgICAgICAgZmlsbDogXCIjZTFmNWZlXCIsXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGAke1xuICAgICAgICAgICAgICAgIGlzQ3VycmVudGx5RGlzcGxheWVkT2ZmaWNlKG5hbWUpID8gXCJib2xkXCIgOiBcIjMwMFwiXG4gICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBgJHtpc0N1cnJlbnRseURpc3BsYXllZE9mZmljZShuYW1lKSA/IFwiMVwiIDogXCIwLjVcIn1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgIDwvTWFya2VyPlxuICAgICAgKSl9XG4gICAgPC9Db21wb3NhYmxlTWFwPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ29udGV4dFRlYW1zIiwiRU9mZmljZXNHZXJtYW5Ub0VuZ2xpc2giLCJFT2ZmaWNlc0VuZ2xpc2hUb0dlcm1hbiIsIkNvbXBvc2FibGVNYXAiLCJHZW9ncmFwaGllcyIsIkdlb2dyYXBoeSIsIk1hcmtlciIsIm1hcmtlcnMiLCJtYXJrZXJPZmZzZXQiLCJuYW1lIiwiY29vcmRpbmF0ZXMiLCJnZW9VcmwiLCJNYXBPZmZpY2VzIiwiY29udGV4dCIsImR5bkNsYXNzQ2lyY2xlIiwic2V0RHluQ2xhc3NDaXJjbGUiLCJoYW5kbGVNYXJrZXJDbGljayIsIm9mZmljZSIsImdlcm1hbk9mZmljZU5hbWVJbkxvd2VyQ2FzZSIsInRvTG93ZXJDYXNlIiwic2V0RGlzcGxheWVkT2ZmaWNlIiwiaXNDdXJyZW50bHlEaXNwbGF5ZWRPZmZpY2UiLCJjaG9zZW5PZmZpY2UiLCJkaXNwbGF5ZWRPZmZpY2UiLCJ3aWR0aCIsImhlaWdodCIsInByb2plY3Rpb24iLCJwcm9qZWN0aW9uQ29uZmlnIiwicm90YXRlIiwic2NhbGUiLCJnZW9ncmFwaHkiLCJnZW9ncmFwaGllcyIsIm1hcCIsImdlbyIsImZpbGwiLCJzdHJva2UiLCJjbGFzc05hbWUiLCJyc21LZXkiLCJvbkNsaWNrIiwic3R5bGUiLCJkZWZhdWx0IiwiaG92ZXIiLCJmb250U2l6ZSIsImNpcmNsZSIsInIiLCJzdHJva2VXaWR0aCIsInRleHQiLCJ0ZXh0QW5jaG9yIiwieSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0Iiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});