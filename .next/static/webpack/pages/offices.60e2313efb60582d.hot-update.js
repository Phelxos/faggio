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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst markers = [\n    {\n        markerOffset: -20,\n        name: \"K\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -20,\n        name: \"Dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -20,\n        name: \"M\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -20,\n        name: \"Hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: -20,\n        name: \"Frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -20,\n        name: \"Berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.ComposableMap, {\n        width: 100,\n        height: 500,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 5000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.Geography, {\n                            geography: geo,\n                            fill: \"#9998A3\",\n                            stroke: \"white\"\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>/*#__PURE__*/ {\n                let { name , coordinates , markerOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                    coordinates: coordinates,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 10,\n                            fill: \"#F00\",\n                            stroke: \"#fff\",\n                            strokeWidth: 2\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontFamily: \"system-ui\",\n                                fill: \"white\"\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQU1DO0FBUTNCLE1BQU1LLFVBQXFCO0lBQ3pCO1FBQ0VDLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVU7SUFDcEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBTztTQUFTO0lBQ2hDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVU7U0FBUztJQUNuQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFTO1NBQVM7SUFDbEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBUztTQUFTO0lBQ2xDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVU7U0FBUztJQUNuQztDQUNEO0FBRUQsTUFBTUMsU0FDSjtBQUVhLFNBQVNDLGFBQWE7SUFDbkMscUJBQ0UsOERBQUNULDREQUFhQTtRQUNaVSxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsWUFBVztRQUNYQyxrQkFBa0I7WUFDaEJDLFFBQVE7Z0JBQUMsQ0FBQztnQkFBTSxDQUFDO2dCQUFNO2FBQUU7WUFDekJDLE9BQU87UUFDVDs7MEJBRUEsOERBQUNkLDBEQUFXQTtnQkFBQ2UsV0FBV1I7MEJBQ3JCLFNBQ0NTO3dCQURBLEVBQUVBLFlBQVcsRUFBRTsyQkFDZkEsWUFBWUMsR0FBRyxDQUFDLENBQUNDLG9CQUNmLDhEQUFDakIsd0RBQVNBOzRCQUVSYyxXQUFXRzs0QkFDWEMsTUFBSzs0QkFDTEMsUUFBTzsyQkFIRkYsSUFBSUcsTUFBTTs7Ozs7Z0JBS2xCOzs7Ozs7WUFHSmxCLFFBQVFjLEdBQUcsQ0FBQyx1QkFDWDtvQkFEWSxFQUFFWixLQUFJLEVBQUVDLFlBQVcsRUFBRUYsYUFBWSxFQUFFO3VCQUMvQyw4REFBQ0YscURBQU1BO29CQUFZSSxhQUFhQTs7c0NBQzlCLDhEQUFDZ0I7NEJBQU9DLEdBQUc7NEJBQUlKLE1BQUs7NEJBQU9DLFFBQU87NEJBQU9JLGFBQWE7Ozs7OztzQ0FDdEQsOERBQUNDOzRCQUNDQyxZQUFXOzRCQUNYQyxHQUFHdkI7NEJBQ0h3QixPQUFPO2dDQUFFQyxZQUFZO2dDQUFhVixNQUFNOzRCQUFRO3NDQUUvQ2Q7Ozs7Ozs7bUJBUFFBOzs7OztZQVNMOzs7Ozs7O0FBSWhCLENBQUM7S0FyQ3VCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4PzM3OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ29tcG9zYWJsZU1hcCxcbiAgR2VvZ3JhcGhpZXMsXG4gIEdlb2dyYXBoeSxcbiAgTWFya2VyLFxufSBmcm9tIFwicmVhY3Qtc2ltcGxlLW1hcHNcIjtcblxuaW50ZXJmYWNlIElNYXJrZXIge1xuICBtYXJrZXJPZmZzZXQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXTtcbn1cblxuY29uc3QgbWFya2VyczogSU1hcmtlcltdID0gW1xuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtMjAsXG4gICAgbmFtZTogXCJLw7ZsblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbNi45NTMxMDEsIDUwLjkzNTE3M10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC0yMCxcbiAgICBuYW1lOiBcIkRvcnRtdW5kXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs3LjQ2NiwgNTEuNTE0OTRdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtMjAsXG4gICAgbmFtZTogXCJNw7xuY2hlblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbMTEuNTc1NDksIDQ4LjEzNzQzXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTIwLFxuICAgIG5hbWU6IFwiSGFtYnVyZ1wiLFxuICAgIGNvb3JkaW5hdGVzOiBbOS45OTMwMiwgNTMuNTUwNzNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtMjAsXG4gICAgbmFtZTogXCJGcmFua2Z1cnRcIixcbiAgICBjb29yZGluYXRlczogWzguNjg0MTcsIDUwLjExNTUyXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTIwLFxuICAgIG5hbWU6IFwiQmVybGluXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMy40MTA1MywgNTIuNTI0MzddLFxuICB9LFxuXTtcblxuY29uc3QgZ2VvVXJsID1cbiAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZGVsZGVyc3ZlbGQvdG9wb2pzb24vbWFzdGVyL2NvdW50cmllcy9nZXJtYW55L2dlcm1hbnktcmVnaW9ucy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcE9mZmljZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbXBvc2FibGVNYXBcbiAgICAgIHdpZHRoPXsxMDB9XG4gICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgIHByb2plY3Rpb249XCJnZW9NZXJjYXRvclwiXG4gICAgICBwcm9qZWN0aW9uQ29uZmlnPXt7XG4gICAgICAgIHJvdGF0ZTogWy0xMC41LCAtNTEuMCwgMF0sXG4gICAgICAgIHNjYWxlOiA1MDAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8R2VvZ3JhcGhpZXMgZ2VvZ3JhcGh5PXtnZW9Vcmx9PlxuICAgICAgICB7KHsgZ2VvZ3JhcGhpZXMgfSkgPT5cbiAgICAgICAgICBnZW9ncmFwaGllcy5tYXAoKGdlbykgPT4gKFxuICAgICAgICAgICAgPEdlb2dyYXBoeVxuICAgICAgICAgICAgICBrZXk9e2dlby5yc21LZXl9XG4gICAgICAgICAgICAgIGdlb2dyYXBoeT17Z2VvfVxuICAgICAgICAgICAgICBmaWxsPVwiIzk5OThBM1wiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9HZW9ncmFwaGllcz5cbiAgICAgIHttYXJrZXJzLm1hcCgoeyBuYW1lLCBjb29yZGluYXRlcywgbWFya2VyT2Zmc2V0IH0pID0+IChcbiAgICAgICAgPE1hcmtlciBrZXk9e25hbWV9IGNvb3JkaW5hdGVzPXtjb29yZGluYXRlc30+XG4gICAgICAgICAgPGNpcmNsZSByPXsxMH0gZmlsbD1cIiNGMDBcIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlV2lkdGg9ezJ9IC8+XG4gICAgICAgICAgPHRleHRcbiAgICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgeT17bWFya2VyT2Zmc2V0fVxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWlcIiwgZmlsbDogXCJ3aGl0ZVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICkpfVxuICAgIDwvQ29tcG9zYWJsZU1hcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvc2FibGVNYXAiLCJHZW9ncmFwaGllcyIsIkdlb2dyYXBoeSIsIk1hcmtlciIsIm1hcmtlcnMiLCJtYXJrZXJPZmZzZXQiLCJuYW1lIiwiY29vcmRpbmF0ZXMiLCJnZW9VcmwiLCJNYXBPZmZpY2VzIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwicHJvamVjdGlvbkNvbmZpZyIsInJvdGF0ZSIsInNjYWxlIiwiZ2VvZ3JhcGh5IiwiZ2VvZ3JhcGhpZXMiLCJtYXAiLCJnZW8iLCJmaWxsIiwic3Ryb2tlIiwicnNtS2V5IiwiY2lyY2xlIiwiciIsInN0cm9rZVdpZHRoIiwidGV4dCIsInRleHRBbmNob3IiLCJ5Iiwic3R5bGUiLCJmb250RmFtaWx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});