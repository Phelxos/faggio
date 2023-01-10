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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapOffices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/ContextTeams */ \"./components/contexts/ContextTeams.tsx\");\n/* harmony import */ var _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typings/types/TOffices */ \"./typings/types/TOffices.ts\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-maps */ \"./node_modules/react-simple-maps/dist/index.umd.js\");\n/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst markers = [\n    {\n        markerOffset: 13,\n        name: \"k\\xf6ln\",\n        coordinates: [\n            6.953101,\n            50.935173\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"dortmund\",\n        coordinates: [\n            7.466,\n            51.51494\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"m\\xfcnchen\",\n        coordinates: [\n            11.57549,\n            48.13743\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"hamburg\",\n        coordinates: [\n            9.99302,\n            53.55073\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"frankfurt\",\n        coordinates: [\n            8.68417,\n            50.11552\n        ]\n    },\n    {\n        markerOffset: -5,\n        name: \"berlin\",\n        coordinates: [\n            13.41053,\n            52.52437\n        ]\n    },\n    {\n        markerOffset: 12,\n        name: \"leipzig\",\n        coordinates: [\n            12.360103,\n            51.340199\n        ]\n    },\n    {\n        markerOffset: 11,\n        name: \"bremen\",\n        coordinates: [\n            8.806422,\n            53.073635\n        ]\n    }\n];\nconst geoUrl = \"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json\";\nfunction MapOffices() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ContextTeams__WEBPACK_IMPORTED_MODULE_2__.ContextTeams);\n    function handleMarkerClick(office) {\n        const germanOfficeNameInLowerCase = office.toLowerCase();\n        context === null || context === void 0 ? void 0 : context.setDisplayedOffice(_typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesGermanToEnglish[germanOfficeNameInLowerCase]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.ComposableMap, {\n        width: 120,\n        height: 200,\n        projection: \"geoMercator\",\n        projectionConfig: {\n            rotate: [\n                -10.5,\n                -51.0,\n                0\n            ],\n            scale: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geographies, {\n                geography: geoUrl,\n                children: (param)=>{\n                    let { geographies  } = param;\n                    return geographies.map((geo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Geography, {\n                            geography: geo,\n                            fill: \"#0284c7\",\n                            stroke: \"#0369a1\",\n                            strokeOpacity: 0.25,\n                            strokeWidth: 0.125\n                        }, geo.rsmKey, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            markers.map((param)=>{\n                let { name , coordinates , markerOffset  } = param;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                    coordinates: coordinates,\n                    onClick: ()=>handleMarkerClick(name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            r: 3,\n                            fill: \"\".concat(name === _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesEnglishToGerman[context === null || context === void 0 ? void 0 : context.displayedOffice] ? \"#7dd3fc\" : \"#0369a1\"),\n                            stroke: \"#01579b\",\n                            strokeWidth: 0.5\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            textAnchor: \"middle\",\n                            y: markerOffset,\n                            style: {\n                                fontSize: \"8px\",\n                                fill: \"#e1f5fe\",\n                                textTransform: \"uppercase\",\n                                fontWeight: \"\".concat(name === _typings_types_TOffices__WEBPACK_IMPORTED_MODULE_3__.EOfficesEnglishToGerman[context === null || context === void 0 ? void 0 : context.displayedOffice] ? \"bold\" : \"lighter\")\n                            },\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, name, true, {\n                    fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilhelm.felk/Library/CloudStorage/OneDrive-adessoGroup/werkstatt/faggio/components/MapOffices.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(MapOffices, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n_c = MapOffices;\nvar _c;\n$RefreshReg$(_c, \"MapOffices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE9mZmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUNhO0FBS3BCO0FBTVI7QUFRM0IsTUFBTVMsVUFBcUI7SUFDekI7UUFDRUMsY0FBYztRQUNkQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVU7SUFDcEM7SUFDQTtRQUNFRixjQUFjLENBQUM7UUFDZkMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBTztTQUFTO0lBQ2hDO0lBQ0E7UUFDRUYsY0FBYyxDQUFDO1FBQ2ZDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVU7U0FBUztJQUNuQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFTO1NBQVM7SUFDbEM7SUFDQTtRQUNFRixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVM7U0FBUztJQUNsQztJQUNBO1FBQ0VGLGNBQWMsQ0FBQztRQUNmQyxNQUFNO1FBQ05DLGFBQWE7WUFBQztZQUFVO1NBQVM7SUFDbkM7SUFDQTtRQUNFRixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsYUFBYTtZQUFDO1lBQVc7U0FBVTtJQUNyQztJQUNBO1FBQ0VGLGNBQWM7UUFDZEMsTUFBTTtRQUNOQyxhQUFhO1lBQUM7WUFBVTtTQUFVO0lBQ3BDO0NBQ0Q7QUFFRCxNQUFNQyxTQUNKO0FBRWEsU0FBU0MsYUFBYTs7SUFDbkMsTUFBTUMsVUFBVWQsaURBQVVBLENBQUNDLGdFQUFZQTtJQUN2QyxTQUFTYyxrQkFBa0JDLE1BQXNCLEVBQUU7UUFDakQsTUFBTUMsOEJBQ0pELE9BQU9FLFdBQVc7UUFDcEJKLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0ssa0JBQWtCLENBQ3pCakIsNEVBQXVCLENBQUNlLDRCQUE0QjtJQUV4RDtJQUVBLHFCQUNFLDhEQUFDYiw0REFBYUE7UUFDWmdCLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxZQUFXO1FBQ1hDLGtCQUFrQjtZQUNoQkMsUUFBUTtnQkFBQyxDQUFDO2dCQUFNLENBQUM7Z0JBQU07YUFBRTtZQUN6QkMsT0FBTztRQUNUOzswQkFFQSw4REFBQ3BCLDBEQUFXQTtnQkFBQ3FCLFdBQVdkOzBCQUNyQixTQUNDZTt3QkFEQSxFQUFFQSxZQUFXLEVBQUU7MkJBQ2ZBLFlBQVlDLEdBQUcsQ0FBQyxDQUFDQyxvQkFDZiw4REFBQ3ZCLHdEQUFTQTs0QkFFUm9CLFdBQVdHOzRCQUNYQyxNQUFLOzRCQUNMQyxRQUFPOzRCQUNQQyxlQUFlOzRCQUNmQyxhQUFhOzJCQUxSSixJQUFJSyxNQUFNOzs7OztnQkFPbEI7Ozs7OztZQUdKMUIsUUFBUW9CLEdBQUcsQ0FBQztvQkFBQyxFQUFFbEIsS0FBSSxFQUFFQyxZQUFXLEVBQUVGLGFBQVksRUFBRTs4QkFDL0MscUVBQUNGLHFEQUFNQTtvQkFFTEksYUFBYUE7b0JBQ2J3QixTQUFTLElBQU1wQixrQkFBa0JMOztzQ0FFakMsOERBQUMwQjs0QkFDQ0MsR0FBRzs0QkFDSFAsTUFBTSxHQUlMLE9BSENwQixTQUFTUCw0RUFBdUIsQ0FBQ1csb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTd0IsZUFBZSxDQUFFLEdBQ3ZELFlBQ0EsU0FBUzs0QkFFZlAsUUFBTzs0QkFDUEUsYUFBYTs7Ozs7O3NDQUVmLDhEQUFDTTs0QkFDQ0MsWUFBVzs0QkFDWEMsR0FBR2hDOzRCQUNIaUMsT0FBTztnQ0FDTEMsVUFBVTtnQ0FDVmIsTUFBTTtnQ0FDTmMsZUFBZTtnQ0FDZkMsWUFBWSxHQUlYLE9BSENuQyxTQUFTUCw0RUFBdUIsQ0FBQ1csb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTd0IsZUFBZSxDQUFFLEdBQ3ZELFNBQ0EsU0FBUzs0QkFFakI7c0NBRUM1Qjs7Ozs7OzttQkE1QkVBOzs7Ozs7Ozs7Ozs7QUFrQ2YsQ0FBQztHQXRFdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwT2ZmaWNlcy50c3g/Mzc5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGV4dFRlYW1zIH0gZnJvbSBcIi4vY29udGV4dHMvQ29udGV4dFRlYW1zXCI7XG5pbXBvcnQge1xuICBFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaCxcbiAgRU9mZmljZXNFbmdsaXNoVG9HZXJtYW4sXG4gIFRPZmZpY2VzR2VybWFuLFxufSBmcm9tIFwiLi4vdHlwaW5ncy90eXBlcy9UT2ZmaWNlc1wiO1xuaW1wb3J0IHtcbiAgQ29tcG9zYWJsZU1hcCxcbiAgR2VvZ3JhcGhpZXMsXG4gIEdlb2dyYXBoeSxcbiAgTWFya2VyLFxufSBmcm9tIFwicmVhY3Qtc2ltcGxlLW1hcHNcIjtcblxuaW50ZXJmYWNlIElNYXJrZXIge1xuICBtYXJrZXJPZmZzZXQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXTtcbn1cblxuY29uc3QgbWFya2VyczogSU1hcmtlcltdID0gW1xuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAxMyxcbiAgICBuYW1lOiBcImvDtmxuXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs2Ljk1MzEwMSwgNTAuOTM1MTczXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJkb3J0bXVuZFwiLFxuICAgIGNvb3JkaW5hdGVzOiBbNy40NjYsIDUxLjUxNDk0XSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJtw7xuY2hlblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbMTEuNTc1NDksIDQ4LjEzNzQzXSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogLTUsXG4gICAgbmFtZTogXCJoYW1idXJnXCIsXG4gICAgY29vcmRpbmF0ZXM6IFs5Ljk5MzAyLCA1My41NTA3M10sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IDEyLFxuICAgIG5hbWU6IFwiZnJhbmtmdXJ0XCIsXG4gICAgY29vcmRpbmF0ZXM6IFs4LjY4NDE3LCA1MC4xMTU1Ml0sXG4gIH0sXG4gIHtcbiAgICBtYXJrZXJPZmZzZXQ6IC01LFxuICAgIG5hbWU6IFwiYmVybGluXCIsXG4gICAgY29vcmRpbmF0ZXM6IFsxMy40MTA1MywgNTIuNTI0MzddLFxuICB9LFxuICB7XG4gICAgbWFya2VyT2Zmc2V0OiAxMixcbiAgICBuYW1lOiBcImxlaXB6aWdcIixcbiAgICBjb29yZGluYXRlczogWzEyLjM2MDEwMywgNTEuMzQwMTk5XSxcbiAgfSxcbiAge1xuICAgIG1hcmtlck9mZnNldDogMTEsXG4gICAgbmFtZTogXCJicmVtZW5cIixcbiAgICBjb29yZGluYXRlczogWzguODA2NDIyLCA1My4wNzM2MzVdLFxuICB9LFxuXTtcblxuY29uc3QgZ2VvVXJsID1cbiAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZGVsZGVyc3ZlbGQvdG9wb2pzb24vbWFzdGVyL2NvdW50cmllcy9nZXJtYW55L2dlcm1hbnktcmVnaW9ucy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcE9mZmljZXMoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbnRleHRUZWFtcyk7XG4gIGZ1bmN0aW9uIGhhbmRsZU1hcmtlckNsaWNrKG9mZmljZTogVE9mZmljZXNHZXJtYW4pIHtcbiAgICBjb25zdCBnZXJtYW5PZmZpY2VOYW1lSW5Mb3dlckNhc2U6IFRPZmZpY2VzR2VybWFuID1cbiAgICAgIG9mZmljZS50b0xvd2VyQ2FzZSgpIGFzIFRPZmZpY2VzR2VybWFuO1xuICAgIGNvbnRleHQ/LnNldERpc3BsYXllZE9mZmljZShcbiAgICAgIEVPZmZpY2VzR2VybWFuVG9FbmdsaXNoW2dlcm1hbk9mZmljZU5hbWVJbkxvd2VyQ2FzZV1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9zYWJsZU1hcFxuICAgICAgd2lkdGg9ezEyMH1cbiAgICAgIGhlaWdodD17MjAwfVxuICAgICAgcHJvamVjdGlvbj1cImdlb01lcmNhdG9yXCJcbiAgICAgIHByb2plY3Rpb25Db25maWc9e3tcbiAgICAgICAgcm90YXRlOiBbLTEwLjUsIC01MS4wLCAwXSxcbiAgICAgICAgc2NhbGU6IDEwMDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxHZW9ncmFwaGllcyBnZW9ncmFwaHk9e2dlb1VybH0+XG4gICAgICAgIHsoeyBnZW9ncmFwaGllcyB9KSA9PlxuICAgICAgICAgIGdlb2dyYXBoaWVzLm1hcCgoZ2VvKSA9PiAoXG4gICAgICAgICAgICA8R2VvZ3JhcGh5XG4gICAgICAgICAgICAgIGtleT17Z2VvLnJzbUtleX1cbiAgICAgICAgICAgICAgZ2VvZ3JhcGh5PXtnZW99XG4gICAgICAgICAgICAgIGZpbGw9XCIjMDI4NGM3XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiIzAzNjlhMVwiXG4gICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk9ezAuMjV9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXswLjEyNX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9HZW9ncmFwaGllcz5cbiAgICAgIHttYXJrZXJzLm1hcCgoeyBuYW1lLCBjb29yZGluYXRlcywgbWFya2VyT2Zmc2V0IH0pID0+IChcbiAgICAgICAgPE1hcmtlclxuICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICBjb29yZGluYXRlcz17Y29vcmRpbmF0ZXN9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTWFya2VyQ2xpY2sobmFtZSBhcyBUT2ZmaWNlc0dlcm1hbil9XG4gICAgICAgID5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICByPXszfVxuICAgICAgICAgICAgZmlsbD17YCR7XG4gICAgICAgICAgICAgIG5hbWUgPT09IEVPZmZpY2VzRW5nbGlzaFRvR2VybWFuW2NvbnRleHQ/LmRpc3BsYXllZE9mZmljZSFdXG4gICAgICAgICAgICAgICAgPyBcIiM3ZGQzZmNcIlxuICAgICAgICAgICAgICAgIDogXCIjMDM2OWExXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgc3Ryb2tlPVwiIzAxNTc5YlwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD17MC41fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRcbiAgICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgeT17bWFya2VyT2Zmc2V0fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiOHB4XCIsXG4gICAgICAgICAgICAgIGZpbGw6IFwiI2UxZjVmZVwiLFxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBgJHtcbiAgICAgICAgICAgICAgICBuYW1lID09PSBFT2ZmaWNlc0VuZ2xpc2hUb0dlcm1hbltjb250ZXh0Py5kaXNwbGF5ZWRPZmZpY2UhXVxuICAgICAgICAgICAgICAgICAgPyBcImJvbGRcIlxuICAgICAgICAgICAgICAgICAgOiBcImxpZ2h0ZXJcIlxuICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICkpfVxuICAgIDwvQ29tcG9zYWJsZU1hcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0VGVhbXMiLCJFT2ZmaWNlc0dlcm1hblRvRW5nbGlzaCIsIkVPZmZpY2VzRW5nbGlzaFRvR2VybWFuIiwiQ29tcG9zYWJsZU1hcCIsIkdlb2dyYXBoaWVzIiwiR2VvZ3JhcGh5IiwiTWFya2VyIiwibWFya2VycyIsIm1hcmtlck9mZnNldCIsIm5hbWUiLCJjb29yZGluYXRlcyIsImdlb1VybCIsIk1hcE9mZmljZXMiLCJjb250ZXh0IiwiaGFuZGxlTWFya2VyQ2xpY2siLCJvZmZpY2UiLCJnZXJtYW5PZmZpY2VOYW1lSW5Mb3dlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsInNldERpc3BsYXllZE9mZmljZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJvamVjdGlvbiIsInByb2plY3Rpb25Db25maWciLCJyb3RhdGUiLCJzY2FsZSIsImdlb2dyYXBoeSIsImdlb2dyYXBoaWVzIiwibWFwIiwiZ2VvIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXaWR0aCIsInJzbUtleSIsIm9uQ2xpY2siLCJjaXJjbGUiLCJyIiwiZGlzcGxheWVkT2ZmaWNlIiwidGV4dCIsInRleHRBbmNob3IiLCJ5Iiwic3R5bGUiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MapOffices.tsx\n"));

/***/ })

});