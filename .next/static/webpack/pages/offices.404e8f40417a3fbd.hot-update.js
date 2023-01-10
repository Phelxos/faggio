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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n/* harmony import */ var _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typings/types/TOffices */ \"./typings/types/TOffices.ts\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst markers = [\n    {\n        markerOffset: 13,\n        name: \"K\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"Dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"M\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"Frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__.ContextTeams);\n    function handleMarkerClick(office) {\n        const germanOfficeNameInLowerCase = office.toLowerCase();\n        context === null || context === void 0 ? void 0 : context.setDisplayedOffice(_typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesGermanToEnglish[germanOfficeNameInLowerCase]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.ComposableMap, {\n        width: 120,\n        height: 200,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            stroke: \"#0369a1\",\n                            strokeOpacity: 0.25,\n                            strokeWidth: 0.125\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>/*#__PURE__*/ {\n                let { name , coordinates , markerOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                    coordinates: coordinates,\n                    onClick: ()=>handleMarkerClick(name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"#e1f5fe\",\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"8px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\"\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(MapOffices, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUNhO0FBSXBCO0FBTVI7QUFRM0IsTUFBTVEsVUFBcUI7SUFDekI7UUFDRUMsY0FBYztRQUNkQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVU7SUFDcEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBTztTQUFTO0lBQ2hDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVU7U0FBUztJQUNuQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFTO1NBQVM7SUFDbEM7SUFDQTtRQUNFRixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVM7U0FBUztJQUNsQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVM7SUFDbkM7Q0FDRDtBQUVELE1BQU1DLFNBQ0o7QUFFYSxTQUFTQyxhQUFhOztJQUNuQyxNQUFNQyxVQUFVYixpREFBVUEsQ0FBQ0MsZ0VBQVlBO0lBQ3ZDLFNBQVNhLGtCQUFrQkMsTUFBc0IsRUFBRTtRQUNqRCxNQUFNQyw4QkFDSkQsT0FBT0UsV0FBVztRQUNwQkosb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTSyxrQkFBa0IsQ0FDekJoQiw0RUFBdUIsQ0FBQ2MsNEJBQTRCO0lBRXhEO0lBRUEscUJBQ0UsOERBQUNiLDREQUFhQTtRQUNaZ0IsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFlBQVc7UUFDWEMsa0JBQWtCO1lBQ2hCQyxRQUFRO2dCQUFDLENBQUM7Z0JBQU0sQ0FBQztnQkFBTTthQUFFO1lBQ3pCQyxPQUFPO1FBQ1Q7OzBCQUVBLDhEQUFDcEIsMERBQVdBO2dCQUFDcUIsV0FBV2Q7MEJBQ3JCLFNBQ0NlO3dCQURBLEVBQUVBLFlBQVcsRUFBRTsyQkFDZkEsWUFBWUMsR0FBRyxDQUFDLENBQUNDLG9CQUNmLDhEQUFDdkIsd0RBQVNBOzRCQUVSb0IsV0FBV0c7NEJBQ1hDLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLGVBQWU7NEJBQ2ZDLGFBQWE7MkJBTFJKLElBQUlLLE1BQU07Ozs7O2dCQU9sQjs7Ozs7O1lBR0oxQixRQUFRb0IsR0FBRyxDQUFDLHVCQUNYO29CQURZLEVBQUVsQixLQUFJLEVBQUVDLFlBQVcsRUFBRUYsYUFBWSxFQUFFO3VCQUMvQyw4REFBQ0YscURBQU1BO29CQUVMSSxhQUFhQTtvQkFDYndCLFNBQVMsSUFBTXBCLGtCQUFrQkw7O3NDQUVqQyw4REFBQzBCOzRCQUFPQyxHQUFHOzRCQUFHUCxNQUFLOzRCQUFVQyxRQUFPOzRCQUFVRSxhQUFhOzs7Ozs7c0NBQzNELDhEQUFDSzs0QkFDQ0MsWUFBVzs0QkFDWEMsR0FBRy9COzRCQUNIZ0MsT0FBTztnQ0FDTEMsVUFBVTtnQ0FDVlosTUFBTTtnQ0FDTmEsZUFBZTs0QkFDakI7c0NBRUNqQzs7Ozs7OzttQkFkRUE7Ozs7O1lBZ0JDOzs7Ozs7O0FBSWhCLENBQUM7R0F4RHVCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4PzM3OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHRUZWFtcyB9IGZyb20gXCIuL2NvbnRleHRzL0NvbnRleHRUZWFtc1wiO1xuaW1wb3J0IFRPZmZpY2VzLCB7XG4gIEVPZmZpY2VzR2VybWFuVG9FbmdsaXNoLFxuICBUT2ZmaWNlc0dlcm1hbixcbn0gZnJvbSBcIi4uL3R5cGluZ3MvdHlwZXMvVE9mZmljZXNcIjtcbmltcG9ydCB7XG4gIENvbXBvc2FibGVNYXAsXG4gIEdlb2dyYXBoaWVzLFxuICBHZW9ncmFwaHksXG4gIE1hcmtlcixcbn0gZnJvbSBcInJlYWN0LXNpbXBsZS1tYXBzXCI7XG5cbmludGVyZmFjZSBJTWFya2VyIHtcbiAgbWFya2VyT2Zmc2V0OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl07XG59XG5cbmNvbnN0IG1hcmtlcnM6IElNYXJrZXJbXSA9IFtcbiAge1xuICAgIG1hcmtlck9mZnNldDogMTMsXG4gICAgbmFtZTogXCJLw7ZsblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbNi45NTMxMDEsIDUwLjkzNTE3M10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC02LFxuICAgIG5hbWU6IFwiRG9ydG11bmRcIixcbiAgICBjb29yZGluYXRlczogWzcuNDY2LCA1MS41MTQ5NF0sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC01LFxuICAgIG5hbWU6IFwiTcO8bmNoZW5cIixcbiAgICBjb29yZGluYXRlczogWzExLjU3NTQ5LCA0OC4xMzc0M10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC01LFxuICAgIG5hbWU6IFwiSGFtYnVyZ1wiLFxuICAgIGNvb3JkaW5hdGVzOiBbOS45OTMwMiwgNTMuNTUwNzNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAxMixcbiAgICBuYW1lOiBcIkZyYW5rZnVydFwiLFxuICAgIGNvb3JkaW5hdGVzOiBbOC42ODQxNywgNTAuMTE1NTJdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNSxcbiAgICBuYW1lOiBcIkJlcmxpblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbMTMuNDEwNTMsIDUyLjUyNDM3XSxcbiAgfSxcbl07XG5cbmNvbnN0IGdlb1VybCA9XG4gIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RlbGRlcnN2ZWxkL3RvcG9qc29uL21hc3Rlci9jb3VudHJpZXMvZ2VybWFueS9nZXJtYW55LXJlZ2lvbnMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBPZmZpY2VzKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0VGVhbXMpO1xuICBmdW5jdGlvbiBoYW5kbGVNYXJrZXJDbGljayhvZmZpY2U6IFRPZmZpY2VzR2VybWFuKSB7XG4gICAgY29uc3QgZ2VybWFuT2ZmaWNlTmFtZUluTG93ZXJDYXNlOiBUT2ZmaWNlc0dlcm1hbiA9XG4gICAgICBvZmZpY2UudG9Mb3dlckNhc2UoKSBhcyBUT2ZmaWNlc0dlcm1hbjtcbiAgICBjb250ZXh0Py5zZXREaXNwbGF5ZWRPZmZpY2UoXG4gICAgICBFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaFtnZXJtYW5PZmZpY2VOYW1lSW5Mb3dlckNhc2VdXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbXBvc2FibGVNYXBcbiAgICAgIHdpZHRoPXsxMjB9XG4gICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgIHByb2plY3Rpb249XCJnZW9NZXJjYXRvclwiXG4gICAgICBwcm9qZWN0aW9uQ29uZmlnPXt7XG4gICAgICAgIHJvdGF0ZTogWy0xMC41LCAtNTEuMCwgMF0sXG4gICAgICAgIHNjYWxlOiAxMDAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8R2VvZ3JhcGhpZXMgZ2VvZ3JhcGh5PXtnZW9Vcmx9PlxuICAgICAgICB7KHsgZ2VvZ3JhcGhpZXMgfSkgPT5cbiAgICAgICAgICBnZW9ncmFwaGllcy5tYXAoKGdlbykgPT4gKFxuICAgICAgICAgICAgPEdlb2dyYXBoeVxuICAgICAgICAgICAgICBrZXk9e2dlby5yc21LZXl9XG4gICAgICAgICAgICAgIGdlb2dyYXBoeT17Z2VvfVxuICAgICAgICAgICAgICBmaWxsPVwiIzAyODRjN1wiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiMwMzY5YTFcIlxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5PXswLjI1fVxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MC4xMjV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvR2VvZ3JhcGhpZXM+XG4gICAgICB7bWFya2Vycy5tYXAoKHsgbmFtZSwgY29vcmRpbmF0ZXMsIG1hcmtlck9mZnNldCB9KSA9PiAoXG4gICAgICAgIDxNYXJrZXJcbiAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1hcmtlckNsaWNrKG5hbWUgYXMgVE9mZmljZXNHZXJtYW4pfVxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSByPXszfSBmaWxsPVwiI2UxZjVmZVwiIHN0cm9rZT1cIiMwMTU3OWJcIiBzdHJva2VXaWR0aD17MC41fSAvPlxuICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgIHk9e21hcmtlck9mZnNldH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjhweFwiLFxuICAgICAgICAgICAgICBmaWxsOiBcIiNlMWY1ZmVcIixcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICkpfVxuICAgIDwvQ29tcG9zYWJsZU1hcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0VGVhbXMiLCJFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaCIsIkNvbXBvc2FibGVNYXAiLCJHZW9ncmFwaGllcyIsIkdlb2dyYXBoeSIsIk1hcmtlciIsIm1hcmtlcnMiLCJtYXJrZXJPZmZzZXQiLCJuYW1lIiwiY29vcmRpbmF0ZXMiLCJnZW9VcmwiLCJNYXBPZmZpY2VzIiwiY29udGV4dCIsImhhbmRsZU1hcmtlckNsaWNrIiwib2ZmaWNlIiwiZ2VybWFuT2ZmaWNlTmFtZUluTG93ZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJzZXREaXNwbGF5ZWRPZmZpY2UiLCJ3aWR0aCIsImhlaWdodCIsInByb2plY3Rpb24iLCJwcm9qZWN0aW9uQ29uZmlnIiwicm90YXRlIiwic2NhbGUiLCJnZW9ncmFwaHkiLCJnZW9ncmFwaGllcyIsIm1hcCIsImdlbyIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2lkdGgiLCJyc21LZXkiLCJvbkNsaWNrIiwiY2lyY2xlIiwiciIsInRleHQiLCJ0ZXh0QW5jaG9yIiwieSIsInN0eWxlIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});