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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Carousel.module.css */ \"./components/carousel/Carousel.module.css\");\n/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects */ \"./components/projects/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\n\n\n\n\nfunction Carousel() {\n    const PrevArrow = (param)=>{\n        let { onClick } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default().arrow),\n            onClick: onClick,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/logo/leftarrow.png\",\n                alt: \"Left Arrow\",\n                width: 20,\n                height: 20\n            }, void 0, false, {\n                fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        }, this);\n    };\n    const NextArrow = (param)=>{\n        let { onClick } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default().arrow),\n            onClick: onClick,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/logo/rightarrow.png\",\n                alt: \"Right Arrow\",\n                width: 20,\n                height: 20\n            }, void 0, false, {\n                fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, this);\n    };\n    const customPaging = (i, currentSlide1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default().customDot),\n            children: i === currentSlide1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PrevArrow, {}, void 0, false, {\n                fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                lineNumber: 30,\n                columnNumber: 29\n            }, this) : null\n        }, void 0, false, {\n            fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        }, this);\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        customPaging: (i)=>customPaging(i, currentSlide)\n    };\n    const projects = [\n        {\n            image: \"/projectImages/innersightphones.png\",\n            title: \"innersight\",\n            description: \"Innersight is a mental health journaling application that utilizes AI sentiment analysis to examine your previous journal entries, identifying patterns in behaviors or events that may contribute to your symptoms. The aim of this app is to enhance your comprehension of your emotional well-being, while also assisting you in pinpointing elements in your daily life that bring you joy.\",\n            imageHeight: 300,\n            imageWidth: 400\n        },\n        {\n            image: \"/projectImages/pagepal.png\",\n            title: \"PagePal\",\n            description: \"PagePal is a personal library management web app using React, powered by Google Books API. This application allows users to effortlessly organize and digitally track records for both physical books and e-books in a unified platform. PagePal was designed for readers who want to organize their physical and e-books they currently have as well as give them the ability to discover new ones.\",\n            imageHeight: 300,\n            imageWidth: 600\n        },\n        {\n            image: \"/projectImages/westpoint.png\",\n            imageHeight: 300,\n            imageWidth: 548,\n            title: \"Westpoint Hotel\",\n            description: \"WestPoint Hotel is a luxury resort on the beautiful island of the Carribean. This Wordpress website was designed to  emote feelings of exclusivity,luxury and elegance. This website includes 4 logo designs, specific typography and  images to extend Westpoint hotels branding into their online presence.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default().slider),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            ...settings,\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_8___default().maincontent),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            image: project.image,\n                            title: project.title,\n                            description: project.description,\n                            imageHeight: project.imageHeight,\n                            imageWidth: project.imageWidth\n                        }, void 0, false, {\n                            fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n            lineNumber: 86,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bri-lynnguemos/Desktop/bri-lynngportfolio-2/components/carousel/index.js\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, this);\n}\n_c = Carousel;\n;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNaO0FBQ0Y7QUFDSDtBQUNlO0FBQ007QUFDWjtBQUNEO0FBSWxCLFNBQVNNO0lBR3RCLE1BQU1DLFlBQVk7WUFBQyxFQUFFQyxPQUFPLEVBQUU7NkJBQzVCLDhEQUFDQztZQUFJQyxXQUFXVixtRUFBWTtZQUFFUSxTQUFTQTtzQkFDckMsNEVBQUNQLG1EQUFLQTtnQkFBQ1csS0FBSTtnQkFBc0JDLEtBQUk7Z0JBQWFDLE9BQU87Z0JBQUlDLFFBQVE7Ozs7Ozs7Ozs7OztJQUl6RSxNQUFNQyxZQUFZO1lBQUMsRUFBRVIsT0FBTyxFQUFFOzZCQUM1Qiw4REFBQ0M7WUFBSUMsV0FBV1YsbUVBQVk7WUFBRVEsU0FBU0E7c0JBQ3JDLDRFQUFDUCxtREFBS0E7Z0JBQUNXLEtBQUk7Z0JBQXVCQyxLQUFJO2dCQUFjQyxPQUFPO2dCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7SUFLM0UsTUFBTUUsZUFBZSxDQUFDQyxHQUFHQyw4QkFDdkIsOERBQUNWO1lBQUlDLFdBQVdWLHVFQUFnQjtzQkFDN0JrQixNQUFNQyw4QkFBZSw4REFBQ1o7Ozs7dUJBQWU7Ozs7OztJQUkxQyxNQUFNYyxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCVCxjQUFjLENBQUNDLElBQU1ELGFBQWFDLEdBQUdDO0lBQ3ZDO0lBTUUsTUFBTVEsV0FBVztRQUNiO1lBQ0VDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxhQUNFO1lBQ0FDLGFBQWE7WUFDYkMsWUFBWTtRQUNoQjtRQUNBO1lBQ0lKLE9BQU87WUFDUEMsT0FBTztZQUNQQyxhQUNDO1lBQ0FDLGFBQWE7WUFDYkMsWUFBWTtRQUNmO1FBQ0E7WUFDRUosT0FBTztZQUNQRyxhQUFhO1lBQ2JDLFlBQVk7WUFDWkgsT0FBTztZQUNQQyxhQUNDO1FBQ0g7S0FDSDtJQVVELHFCQUNFLDhEQUFDckI7UUFBSUMsV0FBV1Ysb0VBQWE7a0JBRzdCLDRFQUFDSyxtREFBTUE7WUFBRSxHQUFHZ0IsUUFBUTtzQkFDakJNLFNBQVNPLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUMzQjtvQkFBSUMsV0FBV1YseUVBQWtCOzhCQUNsQyw0RUFBQ1M7a0NBQ0MsNEVBQUNMLGlEQUFPQTs0QkFDTndCLE9BQU9PLFFBQVFQLEtBQUs7NEJBQ3BCQyxPQUFPTSxRQUFRTixLQUFLOzRCQUNwQkMsYUFBYUssUUFBUUwsV0FBVzs0QkFDaENDLGFBQWFJLFFBQVFKLFdBQVc7NEJBQ2hDQyxZQUFZRyxRQUFRSCxVQUFVOzs7Ozs7dUJBTnhCSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEI7S0EzRm9COUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9pbmRleC5qcz9mM2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJvdXNlbC5tb2R1bGUuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9wcm9qZWN0cyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKCkge1xuXG5cbiAgY29uc3QgUHJldkFycm93ID0gKHsgb25DbGljayB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30gb25DbGljaz17b25DbGlja30+XG4gICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28vbGVmdGFycm93LnBuZ1wiIGFsdD1cIkxlZnQgQXJyb3dcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XG4gICAgPC9kaXY+XG4gICk7XG4gIFxuICBjb25zdCBOZXh0QXJyb3cgPSAoeyBvbkNsaWNrIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby9yaWdodGFycm93LnBuZ1wiIGFsdD1cIlJpZ2h0IEFycm93XCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxuICAgIDwvZGl2PlxuICApO1xuXG5cbiAgY29uc3QgY3VzdG9tUGFnaW5nID0gKGksIGN1cnJlbnRTbGlkZSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tRG90fT5cbiAgICAgIHtpID09PSBjdXJyZW50U2xpZGUgPyA8UHJldkFycm93IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbiAgXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgY3VzdG9tUGFnaW5nOiAoaSkgPT4gY3VzdG9tUGFnaW5nKGksIGN1cnJlbnRTbGlkZSksXG4gIH07XG5cblxuICBcblxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpbWFnZTogJy9wcm9qZWN0SW1hZ2VzL2lubmVyc2lnaHRwaG9uZXMucG5nJyxcbiAgICAgICAgICB0aXRsZTogJ2lubmVyc2lnaHQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0lubmVyc2lnaHQgaXMgYSBtZW50YWwgaGVhbHRoIGpvdXJuYWxpbmcgYXBwbGljYXRpb24gdGhhdCB1dGlsaXplcyBBSSBzZW50aW1lbnQgYW5hbHlzaXMgdG8gZXhhbWluZSB5b3VyIHByZXZpb3VzIGpvdXJuYWwgZW50cmllcywgaWRlbnRpZnlpbmcgcGF0dGVybnMgaW4gYmVoYXZpb3JzIG9yIGV2ZW50cyB0aGF0IG1heSBjb250cmlidXRlIHRvIHlvdXIgc3ltcHRvbXMuIFRoZSBhaW0gb2YgdGhpcyBhcHAgaXMgdG8gZW5oYW5jZSB5b3VyIGNvbXByZWhlbnNpb24gb2YgeW91ciBlbW90aW9uYWwgd2VsbC1iZWluZywgd2hpbGUgYWxzbyBhc3Npc3RpbmcgeW91IGluIHBpbnBvaW50aW5nIGVsZW1lbnRzIGluIHlvdXIgZGFpbHkgbGlmZSB0aGF0IGJyaW5nIHlvdSBqb3kuJyxcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA0MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6ICcvcHJvamVjdEltYWdlcy9wYWdlcGFsLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ1BhZ2VQYWwnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgJ1BhZ2VQYWwgaXMgYSBwZXJzb25hbCBsaWJyYXJ5IG1hbmFnZW1lbnQgd2ViIGFwcCB1c2luZyBSZWFjdCwgcG93ZXJlZCBieSBHb29nbGUgQm9va3MgQVBJLiBUaGlzIGFwcGxpY2F0aW9uIGFsbG93cyB1c2VycyB0byBlZmZvcnRsZXNzbHkgb3JnYW5pemUgYW5kIGRpZ2l0YWxseSB0cmFjayByZWNvcmRzIGZvciBib3RoIHBoeXNpY2FsIGJvb2tzIGFuZCBlLWJvb2tzIGluIGEgdW5pZmllZCBwbGF0Zm9ybS4gUGFnZVBhbCB3YXMgZGVzaWduZWQgZm9yIHJlYWRlcnMgd2hvIHdhbnQgdG8gb3JnYW5pemUgdGhlaXIgcGh5c2ljYWwgYW5kIGUtYm9va3MgdGhleSBjdXJyZW50bHkgaGF2ZSBhcyB3ZWxsIGFzIGdpdmUgdGhlbSB0aGUgYWJpbGl0eSB0byBkaXNjb3ZlciBuZXcgb25lcy4nLFxuICAgICAgICAgICAgIGltYWdlSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogJy9wcm9qZWN0SW1hZ2VzL3dlc3Rwb2ludC5wbmcnLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIGltYWdlV2lkdGg6IDU0OCxcbiAgICAgICAgICAgIHRpdGxlOiAnV2VzdHBvaW50IEhvdGVsJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICdXZXN0UG9pbnQgSG90ZWwgaXMgYSBsdXh1cnkgcmVzb3J0IG9uIHRoZSBiZWF1dGlmdWwgaXNsYW5kIG9mIHRoZSBDYXJyaWJlYW4uIFRoaXMgV29yZHByZXNzIHdlYnNpdGUgd2FzIGRlc2lnbmVkIHRvICBlbW90ZSBmZWVsaW5ncyBvZiBleGNsdXNpdml0eSxsdXh1cnkgYW5kIGVsZWdhbmNlLiBUaGlzIHdlYnNpdGUgaW5jbHVkZXMgNCBsb2dvIGRlc2lnbnMsIHNwZWNpZmljIHR5cG9ncmFwaHkgYW5kICBpbWFnZXMgdG8gZXh0ZW5kIFdlc3Rwb2ludCBob3RlbHMgYnJhbmRpbmcgaW50byB0aGVpciBvbmxpbmUgcHJlc2VuY2UuJ1xuICAgICAgICAgIH0sXG4gICAgICBdO1xuXG5cbiAgIFxuICAgIFxuICAgIFxuICAgIFxuICBcblxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XG5cbiAgICAgIFxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbmNvbnRlbnR9PlxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPFByb2plY3RcbiAgICAgICAgICAgICAgICBpbWFnZT17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZUhlaWdodD17cHJvamVjdC5pbWFnZUhlaWdodH1cbiAgICAgICAgICAgICAgICBpbWFnZVdpZHRoPXtwcm9qZWN0LmltYWdlV2lkdGh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG4gICAgIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiTGluayIsIlJlYWN0IiwiUHJvamVjdCIsIlNsaWRlciIsIkNhcm91c2VsIiwiUHJldkFycm93Iiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsImFycm93Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJOZXh0QXJyb3ciLCJjdXN0b21QYWdpbmciLCJpIiwiY3VycmVudFNsaWRlIiwiY3VzdG9tRG90Iiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicHJvamVjdHMiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZUhlaWdodCIsImltYWdlV2lkdGgiLCJzbGlkZXIiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJtYWluY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/carousel/index.js\n"));

/***/ })

});