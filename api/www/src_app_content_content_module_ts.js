"use strict";
(self["webpackChunksynadmin"] = self["webpackChunksynadmin"] || []).push([["src_app_content_content_module_ts"],{

/***/ 97291:
/*!***************************************************!*\
  !*** ./src/app/content/content-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentRoutingModule": () => (/* binding */ ContentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _grid_system_grid_system_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-system/grid-system.component */ 99883);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography/typography.component */ 79129);
/* harmony import */ var _text_utilities_text_utilities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-utilities/text-utilities.component */ 71390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        children: [
            {
                path: 'grid-system',
                component: _grid_system_grid_system_component__WEBPACK_IMPORTED_MODULE_0__.GridSystemComponent,
                data: {
                    title: 'Analytics'
                }
            },
            {
                path: 'typography',
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_1__.TypographyComponent,
                data: {
                    title: 'Sales'
                }
            },
            {
                path: 'text-utilities',
                component: _text_utilities_text_utilities_component__WEBPACK_IMPORTED_MODULE_2__.TextUtilitiesComponent,
                data: {
                    title: 'Sales'
                }
            },
        ]
    }
];
class ContentRoutingModule {
}
ContentRoutingModule.??fac = function ContentRoutingModule_Factory(t) { return new (t || ContentRoutingModule)(); };
ContentRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: ContentRoutingModule });
ContentRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5390:
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentModule": () => (/* binding */ ContentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-routing.module */ 97291);
/* harmony import */ var _grid_system_grid_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-system/grid-system.component */ 99883);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography/typography.component */ 79129);
/* harmony import */ var _text_utilities_text_utilities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-utilities/text-utilities.component */ 71390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







class ContentModule {
}
ContentModule.??fac = function ContentModule_Factory(t) { return new (t || ContentModule)(); };
ContentModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: ContentModule });
ContentModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _content_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](ContentModule, { declarations: [_grid_system_grid_system_component__WEBPACK_IMPORTED_MODULE_1__.GridSystemComponent,
        _typography_typography_component__WEBPACK_IMPORTED_MODULE_2__.TypographyComponent,
        _text_utilities_text_utilities_component__WEBPACK_IMPORTED_MODULE_3__.TextUtilitiesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _content_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule] }); })();


/***/ }),

/***/ 99883:
/*!**************************************************************!*\
  !*** ./src/app/content/grid-system/grid-system.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridSystemComponent": () => (/* binding */ GridSystemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class GridSystemComponent {
    constructor() { }
    ngOnInit() {
    }
}
GridSystemComponent.??fac = function GridSystemComponent_Factory(t) { return new (t || GridSystemComponent)(); };
GridSystemComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GridSystemComponent, selectors: [["app-grid-system"]], decls: 355, vars: 0, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-auto"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-lg-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "mb-0"], [1, "table-responsive"], [1, "table"], [1, "border-dark"], ["scope", "col"], [1, "fw-normal"], ["scope", "row", 1, "fw-normal"], [1, "text-muted"], ["scope", "row", 1, "text-nowrap"], ["colspan", "6"], ["href", "/docs/5.0/layout/gutters/"], ["href", "#nesting"], ["href", "/docs/5.0/layout/columns/#reordering"]], template: function GridSystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2)(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GridSystemComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Grid System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14)(19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GridSystemComponent_Template_a_click_19_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GridSystemComponent_Template_a_click_21_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GridSystemComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GridSystemComponent_Template_a_click_26_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Available breakpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 21)(35, "table", 22)(36, "thead")(37, "tr")(38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Breakpoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Class infix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Dimensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tbody")(45, "tr")(46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "X-Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td")(49, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "<576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "tr")(54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td")(57, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\u2265576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "tr")(62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "td")(65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "\u2265768px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "tr")(70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "td")(73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "\u2265992px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "tr")(78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Extra large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td")(81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "\u22651200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "tr")(86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Extra extra large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "td")(89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "xxl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "\u22651400px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 17)(94, "div", 18)(95, "div", 19)(96, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Containers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 21)(100, "table", 22)(101, "thead")(102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Extra small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "<576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "\u2265576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "\u2265768px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Large ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "\u2265992px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "X-Large ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "\u22651200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "XX-Large ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "\u22651400px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "tbody")(135, "tr")(136, "th", 26)(137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, ".container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "540px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "720px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "960px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "1320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "tr")(152, "th", 26)(153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, ".container-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "540px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "720px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "960px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "1320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "tr")(168, "th", 26)(169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, ".container-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "720px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "960px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "1320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "tr")(184, "th", 26)(185, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, ".container-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "960px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "1320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "tr")(200, "th", 26)(201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, ".container-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "1320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "tr")(216, "th", 26)(217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, ".container-xxl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "1320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "tr")(232, "th", 26)(233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, ".container-fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 17)(248, "div", 18)(249, "div", 19)(250, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Grid options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](252, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 21)(254, "table", 22)(255, "thead")(256, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](257, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "xs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "<576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "sm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "\u2265576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "md ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "\u2265768px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "lg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "\u2265992px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "xl ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "\u22651200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "xxl ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](285, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "\u22651400px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "tbody")(289, "tr")(290, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Container ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "code", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "max-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "None (auto)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "540px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "720px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "960px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "1320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "tr")(307, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "Class prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "td")(310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, ".col-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "td")(313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, ".col-sm-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "td")(316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, ".col-md-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "td")(319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, ".col-lg-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "td")(322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, ".col-xl-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "td")(325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, ".col-xxl-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "tr")(328, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "# of columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "tr")(333, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "Gutter width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "1.5rem (.75rem on left and right)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "tr")(338, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "Custom gutters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "td", 29)(341, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "tr")(344, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "Nestable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "td", 29)(347, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "tr")(350, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "Column ordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "td", 29)(353, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLXN5c3RlbS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 71390:
/*!********************************************************************!*\
  !*** ./src/app/content/text-utilities/text-utilities.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextUtilitiesComponent": () => (/* binding */ TextUtilitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TextUtilitiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextUtilitiesComponent.??fac = function TextUtilitiesComponent_Factory(t) { return new (t || TextUtilitiesComponent)(); };
TextUtilitiesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TextUtilitiesComponent, selectors: [["app-text-utilities"]], decls: 252, vars: 0, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-auto"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-lg-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "mb-0", "text-uppercase"], [1, "row", "row-cols-1", "row-cols-md-2", "row-cols-lg-4"], [1, "col"], [1, "card", "bg-primary", "text-center"], [1, "card-body"], [1, "p-4", "text-white", "rounded"], [1, "card", "bg-secondary", "text-center"], [1, "card", "bg-success", "text-center"], [1, "card", "bg-danger", "text-center"], [1, "card", "bg-warning", "text-center"], [1, "p-4", "text-dark", "rounded"], [1, "card", "bg-info", "text-center"], [1, "card", "bg-light", "text-center"], [1, "card", "bg-dark", "text-center"], [1, "card", "bg-primary", "bg-gradient", "text-center"], [1, "p-3", "text-white", "rounded"], [1, "card", "bg-secondary", "bg-gradient", "text-center"], [1, "card", "bg-success", "bg-gradient", "text-center"], [1, "card", "bg-danger", "bg-gradient", "text-center"], [1, "card", "bg-warning", "bg-gradient", "text-center"], [1, "p-3", "text-dark", "rounded"], [1, "card", "bg-info", "bg-gradient", "text-center"], [1, "card", "bg-light", "bg-gradient", "text-center"], [1, "card", "bg-dark", "bg-gradient", "text-center"], [1, "card", "text-center"], [1, "text-primary", "rounded"], [1, "text-secondary", "rounded"], [1, "text-success", "rounded"], [1, "text-danger", "rounded"], [1, "text-warning", "rounded"], [1, "text-info", "rounded"], [1, "card", "text-center", "bg-dark"], [1, "text-light", "rounded"], [1, "text-dark", "rounded"], [1, "card"], [1, "row", "row-cols-auto", "row-cols-1", "row-cols-md-2", "row-cols-lg-4", "g-3"], [1, "p-4", "border", "text-center", "rounded", "bg-light"], [1, "p-4", "border-top", "text-center", "rounded", "bg-light"], [1, "p-4", "border-bottom", "text-center", "rounded", "bg-light"], [1, "p-4", "border-start", "text-center", "rounded", "bg-light"], [1, "p-4", "border-end", "text-center", "rounded", "bg-light"], [1, "p-4", "border-1", "border", "text-center", "rounded", "bg-light"], [1, "p-4", "border-2", "border", "text-center", "rounded", "bg-light"], [1, "p-4", "border-3", "border", "text-center", "rounded", "bg-light"], [1, "p-4", "border-4", "border", "text-center", "rounded", "bg-light"], [1, "p-4", "border-5", "border", "text-center", "rounded", "bg-light"], [1, "p-4", "border", "border-3", "border-primary", "text-center", "rounded", "bg-light"], [1, "p-4", "border", "border-3", "border-danger", "text-center", "rounded", "bg-light"], [1, "p-4", "border", "border-3", "border-success", "text-center", "rounded", "bg-light"], [1, "p-4", "border", "border-3", "border-info", "text-center", "rounded", "bg-light"], [1, "p-4", "border", "border-3", "border-warning", "text-center", "rounded", "bg-light"], [1, "p-4", "border", "border-3", "border-dark", "text-center", "rounded", "bg-light"], [1, "row", "row-cols-auto", "g-3", "align-items-center"], ["src", "http://via.placeholder.com/120x120", "height", "120", "alt", "...", 1, "img-fluid", "rounded"], ["src", "http://via.placeholder.com/120x120", "height", "120", "alt", "...", 1, "img-fluid", "rounded-top"], ["src", "http://via.placeholder.com/120x120", "height", "120", "alt", "...", 1, "img-fluid", "rounded-bottom"], ["src", "http://via.placeholder.com/120x120", "height", "120", "alt", "...", 1, "img-fluid", "rounded-start"], ["src", "http://via.placeholder.com/120x120", "height", "120", "alt", "...", 1, "img-fluid", "rounded-end"], ["src", "http://via.placeholder.com/120x120", "height", "120", "alt", "...", 1, "img-fluid", "rounded-circle"], ["src", "http://via.placeholder.com/150x75", "height", "120", "alt", "...", 1, "img-fluid", "rounded-pill"], [1, "row", "row-cols-1", "row-cols-lg-4", "g-3", "align-items-center"], [1, "shadow-none", "p-4", "rounded"], [1, "shadow-sm", "p-4", "rounded"], [1, "shadow", "p-4", "rounded"], [1, "shadow-lg", "p-4", "rounded"]], template: function TextUtilitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2)(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TextUtilitiesComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Text Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14)(19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TextUtilitiesComponent_Template_a_click_19_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TextUtilitiesComponent_Template_a_click_21_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TextUtilitiesComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TextUtilitiesComponent_Template_a_click_26_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Background Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, ".bg-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 19)(38, "div", 23)(39, "div", 21)(40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, ".bg-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 19)(43, "div", 24)(44, "div", 21)(45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, ".bg-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 19)(48, "div", 25)(49, "div", 21)(50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, ".bg-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 19)(53, "div", 26)(54, "div", 21)(55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, ".bg-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 19)(58, "div", 28)(59, "div", 21)(60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, ".bg-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 19)(63, "div", 29)(64, "div", 21)(65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, ".bg-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 19)(68, "div", 30)(69, "div", 21)(70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, ".bg-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Gradient Background Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 18)(76, "div", 19)(77, "div", 31)(78, "div", 21)(79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ".bg-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 19)(82, "div", 33)(83, "div", 21)(84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, ".bg-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 19)(87, "div", 34)(88, "div", 21)(89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, ".bg-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 19)(92, "div", 35)(93, "div", 21)(94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, ".bg-danger.bg-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 19)(97, "div", 36)(98, "div", 21)(99, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, ".bg-warning.bg-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 19)(102, "div", 38)(103, "div", 21)(104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, ".bg-info.bg-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 19)(107, "div", 39)(108, "div", 21)(109, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, ".bg-light.bg-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 19)(112, "div", 40)(113, "div", 21)(114, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, ".bg-dark.bg-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Text Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 18)(120, "div", 19)(121, "div", 41)(122, "div", 21)(123, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, ".text-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 19)(126, "div", 41)(127, "div", 21)(128, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, ".text-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 19)(131, "div", 41)(132, "div", 21)(133, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, ".text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 19)(136, "div", 41)(137, "div", 21)(138, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, ".text-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 19)(141, "div", 41)(142, "div", 21)(143, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, ".text-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 19)(146, "div", 41)(147, "div", 21)(148, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, ".text-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 19)(151, "div", 48)(152, "div", 21)(153, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, ".text-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 19)(156, "div", 41)(157, "div", 21)(158, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, ".text-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Border Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 51)(164, "div", 21)(165, "div", 52)(166, "div", 19)(167, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 19)(170, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, ".border-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 19)(173, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, ".border-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 19)(176, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, ".border-start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 19)(179, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, ".border-end");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 19)(182, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, ".border-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 19)(185, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, ".border-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 19)(188, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, ".border-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 19)(191, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, ".border-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 19)(194, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, ".border-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 19)(197, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, ".border-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 19)(200, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, ".border-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 19)(203, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, ".border-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 19)(206, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, ".border-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 19)(209, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, ".border-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 19)(212, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, ".border-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Border Radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 51)(218, "div", 21)(219, "div", 69)(220, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](221, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](223, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](225, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](227, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](233, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Shadows Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](236, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 51)(238, "div", 21)(239, "div", 77)(240, "div", 19)(241, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "No shadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 19)(244, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Small shadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 19)(247, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "Regular shadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 19)(250, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Larger shadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LXV0aWxpdGllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 79129:
/*!************************************************************!*\
  !*** ./src/app/content/typography/typography.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyComponent": () => (/* binding */ TypographyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TypographyComponent {
    constructor() { }
    ngOnInit() {
    }
}
TypographyComponent.??fac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(); };
TypographyComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TypographyComponent, selectors: [["app-typography"]], decls: 148, vars: 0, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "javascript:;"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-auto"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-lg-end"], ["href", "javascript:;", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "row"], [1, "col-12"], [1, "mb-0", "text-uppercase"], [1, "card"], [1, "card-body"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "display-5"], [1, "display-6"], [1, "blockquote"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "text-center"], [1, "text-end"], [1, "list-inline", "mb-0"], [1, "list-inline-item"]], template: function TypographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2)(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14)(19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 17)(29, "div", 18)(30, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Headings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 20)(34, "div", 21)(35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "h1. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "h2. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "h3. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "h4. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "h5. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "h6. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Display headings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 20)(56, "div", 21)(57, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Display 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Display 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Display 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Display 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Display 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Display 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Inline text elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 20)(78, "div", 21)(79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "You can use the mark tag to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p")(85, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "This line of text is meant to be treated as deleted text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p")(88, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "This line of text is meant to be treated as no longer accurate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p")(91, "ins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "This line of text is meant to be treated as an addition to the document.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p")(94, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "This line of text will render as underlined.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p")(97, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "This line of text is meant to be treated as fine print.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p")(100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "This line rendered as bold text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p")(103, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "This line rendered as italicized text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Naming a source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 20)(109, "div", 21)(110, "figure")(111, "blockquote", 28)(112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "figcaption", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "cite", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "figure", 31)(120, "blockquote", 28)(121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "figcaption", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "cite", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "figure", 32)(129, "blockquote", 28)(130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "figcaption", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "cite", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 20)(140, "div", 21)(141, "ul", 33)(142, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Phasellus iaculis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Nulla volutpat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_content_content_module_ts.js.map