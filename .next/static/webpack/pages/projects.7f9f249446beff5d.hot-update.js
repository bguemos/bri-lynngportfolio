"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/carousel/index.js":
/*!**************************************!*\
  !*** ./components/carousel/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Carousel.module.css */ \"./components/carousel/Carousel.module.css\");\n/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects */ \"./components/projects/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\n\n\n\n\nfunction Carousel() {\n    const projects = [\n        {\n            image: \"/projectImages/innersightphones.png\",\n            title: \"innersight\",\n            description: \"Innersight is a mental health journaling application that utilizes AI sentiment analysis to examine your previous journal entries, identifying patterns in behaviors or events that may contribute to your symptoms. The aim of this app is to enhance your comprehension of your emotional well-being, while also assisting you in pinpointing elements in your daily life that bring you joy.\",\n            imageHeight: 300,\n            imageWidth: 400\n        },\n        {\n            image: \"/projectImages/pagepal.png\",\n            title: \"PagePal\",\n            description: \"PagePal is a personal library management web app using React, powered by Google Books API. This application allows users to effortlessly organize and digitally track records for both physical books and e-books in a unified platform. PagePal was designed for readers who want to organize their physical and e-books they currently have as well as give them the ability to discover new ones.\",\n            imageHeight: 300,\n            imageWidth: 600\n        },\n        {\n            image: \"/projectImages/westpoint.png\",\n            imageHeight: 300,\n            imageWidth: 548,\n            title: \"Westpoint Hotel\",\n            description: \"WestPoint Hotel is a luxury resort on the beautiful island of the Carribean. This Wordpress website was designed to  emote feelings of exclusivity,luxury and elegance. This website includes 4 logo designs, specific typography and  images to extend Westpoint hotels branding into their online presence.\"\n        }\n    ];\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default().slider),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            ...settings,\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default().maincontent),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            image: project.image,\n                            title: project.title,\n                            description: project.description,\n                            imageHeight: project.imageHeight,\n                            imageWidth: project.imageWidth\n                        }, void 0, false, {\n                            fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_c = Carousel;\n;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNaO0FBQ0Y7QUFDSDtBQUNlO0FBQ007QUFDWjtBQUNEO0FBSWxCLFNBQVNNO0lBT3BCLE1BQU1DLFdBQVc7UUFDYjtZQUNFQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsYUFDRTtZQUNBQyxhQUFhO1lBQ2JDLFlBQVk7UUFDaEI7UUFDQTtZQUNJSixPQUFPO1lBQ1BDLE9BQU87WUFDUEMsYUFDQztZQUNBQyxhQUFhO1lBQ2JDLFlBQVk7UUFDZjtRQUNBO1lBQ0VKLE9BQU87WUFDUEcsYUFBYTtZQUNiQyxZQUFZO1lBQ1pILE9BQU87WUFDUEMsYUFDQztRQUNIO0tBQ0g7SUFPTCxNQUFNRyxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO0lBRWxCO0lBSUkscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdwQixvRUFBYTtrQkFHN0IsNEVBQUNLLG1EQUFNQTtZQUFFLEdBQUdRLFFBQVE7c0JBQ2pCTixTQUFTZSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDTDtvQkFBSUMsV0FBV3BCLHlFQUFrQjs4QkFDbEMsNEVBQUNtQjtrQ0FDQyw0RUFBQ2YsaURBQU9BOzRCQUNOSSxPQUFPZSxRQUFRZixLQUFLOzRCQUNwQkMsT0FBT2MsUUFBUWQsS0FBSzs0QkFDcEJDLGFBQWFhLFFBQVFiLFdBQVc7NEJBQ2hDQyxhQUFhWSxRQUFRWixXQUFXOzRCQUNoQ0MsWUFBWVcsUUFBUVgsVUFBVTs7Ozs7O3VCQU54Qlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2xCO0tBdkVvQmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2Fyb3VzZWwvaW5kZXguanM/ZjNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2Fyb3VzZWwubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vcHJvamVjdHMnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCgpIHtcblxuXG5cbiAgXG5cblxuICAgIGNvbnN0IHByb2plY3RzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaW1hZ2U6ICcvcHJvamVjdEltYWdlcy9pbm5lcnNpZ2h0cGhvbmVzLnBuZycsXG4gICAgICAgICAgdGl0bGU6ICdpbm5lcnNpZ2h0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdJbm5lcnNpZ2h0IGlzIGEgbWVudGFsIGhlYWx0aCBqb3VybmFsaW5nIGFwcGxpY2F0aW9uIHRoYXQgdXRpbGl6ZXMgQUkgc2VudGltZW50IGFuYWx5c2lzIHRvIGV4YW1pbmUgeW91ciBwcmV2aW91cyBqb3VybmFsIGVudHJpZXMsIGlkZW50aWZ5aW5nIHBhdHRlcm5zIGluIGJlaGF2aW9ycyBvciBldmVudHMgdGhhdCBtYXkgY29udHJpYnV0ZSB0byB5b3VyIHN5bXB0b21zLiBUaGUgYWltIG9mIHRoaXMgYXBwIGlzIHRvIGVuaGFuY2UgeW91ciBjb21wcmVoZW5zaW9uIG9mIHlvdXIgZW1vdGlvbmFsIHdlbGwtYmVpbmcsIHdoaWxlIGFsc28gYXNzaXN0aW5nIHlvdSBpbiBwaW5wb2ludGluZyBlbGVtZW50cyBpbiB5b3VyIGRhaWx5IGxpZmUgdGhhdCBicmluZyB5b3Ugam95LicsXG4gICAgICAgICAgICBpbWFnZUhlaWdodDogMzAwLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiAnL3Byb2plY3RJbWFnZXMvcGFnZXBhbC5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICdQYWdlUGFsJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICdQYWdlUGFsIGlzIGEgcGVyc29uYWwgbGlicmFyeSBtYW5hZ2VtZW50IHdlYiBhcHAgdXNpbmcgUmVhY3QsIHBvd2VyZWQgYnkgR29vZ2xlIEJvb2tzIEFQSS4gVGhpcyBhcHBsaWNhdGlvbiBhbGxvd3MgdXNlcnMgdG8gZWZmb3J0bGVzc2x5IG9yZ2FuaXplIGFuZCBkaWdpdGFsbHkgdHJhY2sgcmVjb3JkcyBmb3IgYm90aCBwaHlzaWNhbCBib29rcyBhbmQgZS1ib29rcyBpbiBhIHVuaWZpZWQgcGxhdGZvcm0uIFBhZ2VQYWwgd2FzIGRlc2lnbmVkIGZvciByZWFkZXJzIHdobyB3YW50IHRvIG9yZ2FuaXplIHRoZWlyIHBoeXNpY2FsIGFuZCBlLWJvb2tzIHRoZXkgY3VycmVudGx5IGhhdmUgYXMgd2VsbCBhcyBnaXZlIHRoZW0gdGhlIGFiaWxpdHkgdG8gZGlzY292ZXIgbmV3IG9uZXMuJyxcbiAgICAgICAgICAgICBpbWFnZUhlaWdodDogMzAwLFxuICAgICAgICAgICAgIGltYWdlV2lkdGg6IDYwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6ICcvcHJvamVjdEltYWdlcy93ZXN0cG9pbnQucG5nJyxcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA1NDgsXG4gICAgICAgICAgICB0aXRsZTogJ1dlc3Rwb2ludCBIb3RlbCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAnV2VzdFBvaW50IEhvdGVsIGlzIGEgbHV4dXJ5IHJlc29ydCBvbiB0aGUgYmVhdXRpZnVsIGlzbGFuZCBvZiB0aGUgQ2FycmliZWFuLiBUaGlzIFdvcmRwcmVzcyB3ZWJzaXRlIHdhcyBkZXNpZ25lZCB0byAgZW1vdGUgZmVlbGluZ3Mgb2YgZXhjbHVzaXZpdHksbHV4dXJ5IGFuZCBlbGVnYW5jZS4gVGhpcyB3ZWJzaXRlIGluY2x1ZGVzIDQgbG9nbyBkZXNpZ25zLCBzcGVjaWZpYyB0eXBvZ3JhcGh5IGFuZCAgaW1hZ2VzIHRvIGV4dGVuZCBXZXN0cG9pbnQgaG90ZWxzIGJyYW5kaW5nIGludG8gdGhlaXIgb25saW5lIHByZXNlbmNlLidcbiAgICAgICAgICB9LFxuICAgICAgXTtcblxuXG4gICBcbiAgICBcbiAgICBcbiAgICBcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBcbiAgfTtcbiAgXG5cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxuXG4gICAgICBcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5jb250ZW50fT5cbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgaW1hZ2VIZWlnaHQ9e3Byb2plY3QuaW1hZ2VIZWlnaHR9XG4gICAgICAgICAgICAgICAgaW1hZ2VXaWR0aD17cHJvamVjdC5pbWFnZVdpZHRofVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuICAgICJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsIkxpbmsiLCJSZWFjdCIsIlByb2plY3QiLCJTbGlkZXIiLCJDYXJvdXNlbCIsInByb2plY3RzIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZVdpZHRoIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpZGVyIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwibWFpbmNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel/index.js\n"));

/***/ })

});