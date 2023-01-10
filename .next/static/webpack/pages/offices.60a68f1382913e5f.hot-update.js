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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst markers = [\n    {\n        markerOffset: 13,\n        name: \"K\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -6,\n        name: \"Dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"M\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"Frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"Berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    function handleMarkerClick(e) {\n        console.log(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.ComposableMap, {\n        width: 120,\n        height: 200,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            stroke: \"#0369a1\",\n                            strokeOpacity: 0.25\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>/*#__PURE__*/ {\n                let { name , coordinates , markerOffset  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                    coordinates: coordinates,\n                    onClick: (e)=>handleMarkerClick(e),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"#e1f5fe\",\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"8px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\"\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQU1DO0FBUTNCLE1BQU1LLFVBQXFCO0lBQ3pCO1FBQ0VDLGNBQWM7UUFDZEMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBVTtTQUFVO0lBQ3BDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQU87U0FBUztJQUNoQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVM7SUFDbkM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBUztTQUFTO0lBQ2xDO0lBQ0E7UUFDRUYsY0FBYztRQUNkQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFTO1NBQVM7SUFDbEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBVTtTQUFTO0lBQ25DO0NBQ0Q7QUFFRCxNQUFNQyxTQUNKO0FBRWEsU0FBU0MsYUFBYTtJQUNuQyxTQUFTQyxrQkFBa0JDLENBQU0sRUFBRTtRQUNqQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUEscUJBQ0UsOERBQUNYLDREQUFhQTtRQUNaYyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsWUFBVztRQUNYQyxrQkFBa0I7WUFDaEJDLFFBQVE7Z0JBQUMsQ0FBQztnQkFBTSxDQUFDO2dCQUFNO2FBQUU7WUFDekJDLE9BQU87UUFDVDs7MEJBRUEsOERBQUNsQiwwREFBV0E7Z0JBQUNtQixXQUFXWjswQkFDckIsU0FDQ2E7d0JBREEsRUFBRUEsWUFBVyxFQUFFOzJCQUNmQSxZQUFZQyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ2YsOERBQUNyQix3REFBU0E7NEJBRVJrQixXQUFXRzs0QkFDWEMsTUFBSzs0QkFDTEMsUUFBTzs0QkFDUEMsZUFBZTsyQkFKVkgsSUFBSUksTUFBTTs7Ozs7Z0JBTWxCOzs7Ozs7WUFHSnZCLFFBQVFrQixHQUFHLENBQUMsdUJBQ1g7b0JBRFksRUFBRWhCLEtBQUksRUFBRUMsWUFBVyxFQUFFRixhQUFZLEVBQUU7dUJBQy9DLDhEQUFDRixxREFBTUE7b0JBRUxJLGFBQWFBO29CQUNicUIsU0FBUyxDQUFDakIsSUFBTUQsa0JBQWtCQzs7c0NBRWxDLDhEQUFDa0I7NEJBQU9DLEdBQUc7NEJBQUdOLE1BQUs7NEJBQVVDLFFBQU87NEJBQVVNLGFBQWE7Ozs7OztzQ0FDM0QsOERBQUNDOzRCQUNDQyxZQUFXOzRCQUNYQyxHQUFHN0I7NEJBQ0g4QixPQUFPO2dDQUNMQyxVQUFVO2dDQUNWWixNQUFNO2dDQUNOYSxlQUFlOzRCQUNqQjtzQ0FFQy9COzs7Ozs7O21CQWRFQTs7Ozs7WUFnQkM7Ozs7Ozs7QUFJaEIsQ0FBQztLQWxEdUJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwT2ZmaWNlcy50c3g/Mzc5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDb21wb3NhYmxlTWFwLFxuICBHZW9ncmFwaGllcyxcbiAgR2VvZ3JhcGh5LFxuICBNYXJrZXIsXG59IGZyb20gXCJyZWFjdC1zaW1wbGUtbWFwc1wiO1xuXG5pbnRlcmZhY2UgSU1hcmtlciB7XG4gIG1hcmtlck9mZnNldDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5jb25zdCBtYXJrZXJzOiBJTWFya2VyW10gPSBbXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDEzLFxuICAgIG5hbWU6IFwiS8O2bG5cIixcbiAgICBjb29yZGluYXRlczogWzYuOTUzMTAxLCA1MC45MzUxNzNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNixcbiAgICBuYW1lOiBcIkRvcnRtdW5kXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs3LjQ2NiwgNTEuNTE0OTRdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNSxcbiAgICBuYW1lOiBcIk3DvG5jaGVuXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMS41NzU0OSwgNDguMTM3NDNdLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAtNSxcbiAgICBuYW1lOiBcIkhhbWJ1cmdcIixcbiAgICBjb29yZGluYXRlczogWzkuOTkzMDIsIDUzLjU1MDczXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogMTIsXG4gICAgbmFtZTogXCJGcmFua2Z1cnRcIixcbiAgICBjb29yZGluYXRlczogWzguNjg0MTcsIDUwLjExNTUyXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJCZXJsaW5cIixcbiAgICBjb29yZGluYXRlczogWzEzLjQxMDUzLCA1Mi41MjQzN10sXG4gIH0sXG5dO1xuXG5jb25zdCBnZW9VcmwgPVxuICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZWxkZXJzdmVsZC90b3BvanNvbi9tYXN0ZXIvY291bnRyaWVzL2dlcm1hbnkvZ2VybWFueS1yZWdpb25zLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwT2ZmaWNlcygpIHtcbiAgZnVuY3Rpb24gaGFuZGxlTWFya2VyQ2xpY2soZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb21wb3NhYmxlTWFwXG4gICAgICB3aWR0aD17MTIwfVxuICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICBwcm9qZWN0aW9uPVwiZ2VvTWVyY2F0b3JcIlxuICAgICAgcHJvamVjdGlvbkNvbmZpZz17e1xuICAgICAgICByb3RhdGU6IFstMTAuNSwgLTUxLjAsIDBdLFxuICAgICAgICBzY2FsZTogMTAwMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEdlb2dyYXBoaWVzIGdlb2dyYXBoeT17Z2VvVXJsfT5cbiAgICAgICAgeyh7IGdlb2dyYXBoaWVzIH0pID0+XG4gICAgICAgICAgZ2VvZ3JhcGhpZXMubWFwKChnZW8pID0+IChcbiAgICAgICAgICAgIDxHZW9ncmFwaHlcbiAgICAgICAgICAgICAga2V5PXtnZW8ucnNtS2V5fVxuICAgICAgICAgICAgICBnZW9ncmFwaHk9e2dlb31cbiAgICAgICAgICAgICAgZmlsbD1cIiMwMjg0YzdcIlxuICAgICAgICAgICAgICBzdHJva2U9XCIjMDM2OWExXCJcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT17MC4yNX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9HZW9ncmFwaGllcz5cbiAgICAgIHttYXJrZXJzLm1hcCgoeyBuYW1lLCBjb29yZGluYXRlcywgbWFya2VyT2Zmc2V0IH0pID0+IChcbiAgICAgICAgPE1hcmtlclxuICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICBjb29yZGluYXRlcz17Y29vcmRpbmF0ZXN9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZU1hcmtlckNsaWNrKGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSByPXszfSBmaWxsPVwiI2UxZjVmZVwiIHN0cm9rZT1cIiMwMTU3OWJcIiBzdHJva2VXaWR0aD17MC41fSAvPlxuICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgIHk9e21hcmtlck9mZnNldH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjhweFwiLFxuICAgICAgICAgICAgICBmaWxsOiBcIiNlMWY1ZmVcIixcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICkpfVxuICAgIDwvQ29tcG9zYWJsZU1hcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvc2FibGVNYXAiLCJHZW9ncmFwaGllcyIsIkdlb2dyYXBoeSIsIk1hcmtlciIsIm1hcmtlcnMiLCJtYXJrZXJPZmZzZXQiLCJuYW1lIiwiY29vcmRpbmF0ZXMiLCJnZW9VcmwiLCJNYXBPZmZpY2VzIiwiaGFuZGxlTWFya2VyQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwicHJvamVjdGlvbiIsInByb2plY3Rpb25Db25maWciLCJyb3RhdGUiLCJzY2FsZSIsImdlb2dyYXBoeSIsImdlb2dyYXBoaWVzIiwibWFwIiwiZ2VvIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU9wYWNpdHkiLCJyc21LZXkiLCJvbkNsaWNrIiwiY2lyY2xlIiwiciIsInN0cm9rZVdpZHRoIiwidGV4dCIsInRleHRBbmNob3IiLCJ5Iiwic3R5bGUiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});