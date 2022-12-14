"use strict";
(self["webpackChunksynadmin"] = self["webpackChunksynadmin"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 43105:
/*!************************************************************!*\
  !*** ./src/app/dashboard/alternate/alternate.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateComponent": () => (/* binding */ AlternateComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/alternate.dashboard */ 15698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ 79342);



class AlternateComponent {
    constructor() {
        // Chart 1
        this.Highcharts1 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.Highcharts1;
        this.chartOptions1 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.chartOptions1;
        // Chart 2
        this.Highcharts2 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.Highcharts2;
        this.chartOptions2 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.chartOptions2;
        // Chart 3
        this.Highcharts3 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.Highcharts3;
        this.chartOptions3 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.chartOptions3;
        // Chart 4
        this.Highcharts4 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.Highcharts4;
        this.chartOptions4 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.chartOptions4;
        // Chart 5
        this.Highcharts5 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.Highcharts5;
        this.chartOptions5 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.chartOptions5;
        // Chart 6
        this.Highcharts6 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.Highcharts6;
        this.chartOptions6 = _shared_data_alternate_dashboard__WEBPACK_IMPORTED_MODULE_0__.chartOptions6;
    }
    ngOnInit() {
    }
}
AlternateComponent.??fac = function AlternateComponent_Factory(t) { return new (t || AlternateComponent)(); };
AlternateComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AlternateComponent, selectors: [["app-alternate"]], decls: 204, vars: 12, consts: [[1, "row", "row-cols-1", "row-cols-lg-3"], [1, "col"], [1, "card", "radius-10"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "mb-0"], [1, "font-weight-bold"], [1, "text-success", "font-13"], [1, "text-success", "mb-0", "font-13"], [1, "widgets-icons", "bg-gradient-cosmic", "text-white"], [1, "bx", "bx-refresh"], [1, "text-secondary", "mb-0", "font-13"], [1, "widgets-icons", "bg-gradient-burning", "text-white"], [1, "bx", "bx-group"], [1, "widgets-icons", "bg-gradient-lush", "text-white"], [1, "bx", "bx-time"], [1, "widgets-icons", "bg-gradient-kyoto", "text-white"], [1, "bx", "bxs-cube"], [1, "text-danger", "font-13"], [1, "widgets-icons", "bg-gradient-blues", "text-white"], [1, "bx", "bx-line-chart"], [1, "widgets-icons", "bg-gradient-moonlit", "text-white"], [1, "bx", "bx-bar-chart"], [1, "row"], [1, "col-12", "col-lg-6"], [2, "display", "block", 3, "Highcharts", "options"], [1, "col-12", "col-lg-8", "d-lg-flex", "align-items-lg-stretch"], [1, "card", "radius-10", "w-100"], [1, "card-header", "border-bottom-0", "bg-transparent"], [1, "d-lg-flex", "align-items-center"], [1, ""], [1, "mb-1"], [1, "text-secondary", "mb-2", "mb-lg-0", "font-14"], [1, "ms-lg-auto"], [1, "btn-group-round"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-white"], [1, "col-12", "col-lg-4", "d-lg-flex", "align-items-lg-stretch"], [1, "card-header", "bg-transparent"], [1, "table-responsive"], [1, "table", "table-striped", "mb-0"]], template: function AlternateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "32,842 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "(+40%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Analytics for last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 1)(17, "div", 2)(18, "div", 3)(19, "div", 4)(20, "div", 5)(21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "16,352 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "(+22%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Analytics for last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 1)(32, "div", 2)(33, "div", 3)(34, "div", 4)(35, "div", 5)(36, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Time on Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "34m 14s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "(+55%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Analytics for last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 1)(47, "div", 2)(48, "div", 3)(49, "div", 4)(50, "div", 5)(51, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Goal Completions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "1,94,2335");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Analytics for last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](58, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 1)(60, "div", 2)(61, "div", 3)(62, "div", 4)(63, "div", 5)(64, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "58% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "(-16%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Analytics for last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 1)(75, "div", 2)(76, "div", 3)(77, "div", 4)(78, "div", 5)(79, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "New Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "96% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "(+54%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Analytics for last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 24)(90, "div", 25)(91, "div", 2)(92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](93, "highcharts-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 25)(95, "div", 2)(96, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](97, "highcharts-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 24)(99, "div", 27)(100, "div", 28)(101, "div", 29)(102, "div", 30)(103, "div", 31)(104, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "Website Audience Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "There are plenty of free web proxy sites that you can use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 34)(109, "div", 35)(110, "div", 36)(111, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](118, "highcharts-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 38)(120, "div", 28)(121, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "Traffic Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 3)(124, "div", 40)(125, "table", 41)(126, "thead")(127, "tr")(128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, "Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "tbody")(135, "tr")(136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "(direct)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, "56");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, "10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "tr")(143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "tr")(150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "linkedin.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "68");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "33%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "tr")(157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "bing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, "24%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "tr")(164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](165, "facebook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "87");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "22%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "tr")(171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "98");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "27%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "tr")(178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "linkedin.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "68");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183, "33%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "tr")(185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, "bing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "24%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "div", 0)(192, "div", 1)(193, "div", 2)(194, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](195, "highcharts-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 1)(197, "div", 2)(198, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](199, "highcharts-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "div", 1)(201, "div", 2)(202, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](203, "highcharts-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts1)("options", ctx.chartOptions1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts2)("options", ctx.chartOptions2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts3)("options", ctx.chartOptions3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts4)("options", ctx.chartOptions4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts5)("options", ctx.chartOptions5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts6)("options", ctx.chartOptions6);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__.HighchartsChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHRlcm5hdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 51892:
/*!************************************************************!*\
  !*** ./src/app/dashboard/analytics/analytics.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_analytics_highchartsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/analytics.highchartsData */ 16289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-angular */ 79342);
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-formio */ 30766);





const _c0 = ["json"];
class AnalyticsComponent {
    constructor() {
        // Chart 1
        this.Highcharts1 = _shared_data_analytics_highchartsData__WEBPACK_IMPORTED_MODULE_0__.Highcharts1;
        this.chartOptions1 = _shared_data_analytics_highchartsData__WEBPACK_IMPORTED_MODULE_0__.chartOptions1;
        // Chart 2
        this.Highcharts2 = _shared_data_analytics_highchartsData__WEBPACK_IMPORTED_MODULE_0__.Highcharts2;
        this.chartOptions2 = _shared_data_analytics_highchartsData__WEBPACK_IMPORTED_MODULE_0__.chartOptions2;
        // Chart 3
        this.Highcharts3 = _shared_data_analytics_highchartsData__WEBPACK_IMPORTED_MODULE_0__.Highcharts3;
        this.chartOptions3 = _shared_data_analytics_highchartsData__WEBPACK_IMPORTED_MODULE_0__.chartOptions3;
        this.form = {
            components: []
        };
    }
    ngOnInit() {
        $.getScript('./assets/js/analytics-dashboard.js');
    }
    onChange(event) {
        this.jsonElement.nativeElement.innerHTML = '';
        this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    }
}
AnalyticsComponent.??fac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(); };
AnalyticsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], viewQuery: function AnalyticsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.jsonElement = _t.first);
    } }, decls: 352, vars: 7, consts: [[1, "dash-wrapper", "bg-dark"], [1, "row", "row-cols-1", "row-cols-md-2", "row-cols-xl-5", "row-cols-xxl-5"], [1, "col", "border-end", "border-light-2"], [1, "card", "bg-transparent", "shadow-none", "mb-0"], [1, "card-body", "text-center"], [1, "mb-1", "text-white"], [1, "mb-3", "text-white"], [1, "font-13", "text-white"], [1, "text-success"], [1, "lni", "lni-arrow-up"], ["id", "chart1"], ["id", "chart2"], [1, "text-danger"], [1, "lni", "lni-arrow-down"], ["id", "chart3"], ["id", "chart4"], [1, "col", "col-md-12"], ["id", "chart5"], [1, "row", "row-cols-1", "row-cols-xl-2"], [1, "col", "d-flex"], [1, "card", "radius-10", "w-100"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "mb-0"], [1, "dropdown", "ms-auto"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "btn-sm", "radius-10", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["id", "chart6"], [1, "d-flex", "align-items-center", "ms-auto", "font-13", "gap-2"], [1, "border", "px-1", "rounded", "cursor-pointer"], [1, "bx", "bxs-circle", "text-primary", "me-1"], [1, "bx", "bxs-circle", "text-sky-light", "me-1"], ["id", "chart7"], [1, "row"], [1, "col-12", "col-lg-8", "d-flex"], [1, "font-22", "ms-auto"], [1, "bx", "bx-dots-horizontal-rounded"], ["id", "geographic-map", 1, ""], [1, "col-12", "col-lg-4", "d-flex"], [1, "dashboard-top-countries", "mb-3", "p-3", 3, "perfectScrollbar"], [1, "row", "mb-4"], [1, "col-2"], ["src", "assets/images/icons/united-states.png", "width", "42", "alt", ""], [1, "col"], [1, "mb-2"], [1, "float-end"], [1, "progress", "radius-10", 2, "height", "6px"], ["role", "progressbar", 1, "progress-bar", "bg-gradient-blues", 2, "width", "86%"], ["src", "assets/images/icons/germany.png", "width", "42", "alt", ""], ["role", "progressbar", 1, "progress-bar", "bg-gradient-cosmic", 2, "width", "66%"], ["src", "assets/images/icons/canada.png", "width", "42", "alt", ""], ["role", "progressbar", 1, "progress-bar", "bg-gradient-burning", 2, "width", "56%"], ["src", "assets/images/icons/india.png", "width", "42", "alt", ""], ["role", "progressbar", 1, "progress-bar", "bg-gradient-lush", 2, "width", "45%"], ["src", "assets/images/icons/netherlands.png", "width", "42", "alt", ""], ["role", "progressbar", 1, "progress-bar", "bg-gradient-kyoto", 2, "width", "38%"], [1, "row", "mb-0"], ["src", "assets/images/icons/malaysia.png", "width", "42", "alt", ""], ["role", "progressbar", 1, "progress-bar", "bg-gradient-moonlit", 2, "width", "28%"], [1, "row", "row-cols-1", "row-cols-lg-2", "row-cols-xl-3"], [1, "card", "radius-10", "p-0", "w-100", "bg-transparent", "shadow-none"], [1, "card", "radius-10"], [1, "widgets-icons", "bg-light-primary", "text-primary", "ms-auto"], [1, "bx", "bxs-cookie"], ["id", "chart8"], [1, "widgets-icons", "bg-light-danger", "text-danger", "ms-auto"], [1, "bx", "bxs-bookmark-alt-plus"], ["id", "chart9"], [1, "card", "radius-10", "mb-0"], [1, "widgets-icons", "bg-light-success", "text-success", "ms-auto"], [1, "bx", "bxs-cloud-download"], ["id", "chart10"], ["id", "chart11"], [1, "row", "align-items-center", "py-2"], [1, "col-auto"], [1, "progress", "radius-10", "mb-0", 2, "height", "6px"], ["role", "progressbar", 1, "progress-bar", "bg-primary", 2, "width", "85%"], ["role", "progressbar", 1, "progress-bar", "bg-danger", 2, "width", "65%"], ["role", "progressbar", 1, "progress-bar", "bg-success", 2, "width", "45%"], [1, "col", "col-lg-12", "d-flex"], [1, "card", "radius-10", "p-0", "w-100", "p-3"], [1, "card", "radius-10", "shadow-none", "bg-transparent", "border"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [2, "display", "block", 3, "Highcharts", "options"], [1, ""], [1, "mb-0", "d-flex", "align-items-center"], [1, "bx", "bx-male", "text-danger", "fs-4"], [1, "mx-2"], [1, "bx", "bx-female", "text-primary", "fs-4"], [1, "card", "radius-10", "mb-0", "shadow-none", "bg-transparent", "mb-0", "border"], [1, "d-flex", "align-items-center", "mb-4"], [1, "row", "row-cols-3", "g-3"], [1, "d-flex", "gap-2"], [1, "mb-1", "d-flex"], [1, "align-self-start", "fs-6"], [1, "mb-0", "align-self-center", "text-success"], [1, "bx", "bxs-circle", "text-info", "fs-6"], [1, "mb-0", "align-self-center", "text-danger"], [1, "bx", "bxs-circle", "text-success", "fs-6"], [1, "bx", "bxs-circle", "text-warning", "fs-6"], [1, "progress", "radius-10", "mt-4", 2, "height", "10px"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "45%"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "30%"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "25%"], [1, "col-12", "col-lg-6"], [3, "form", "change"], [1, "well", "jsonviewer"], ["id", "json"], [1, "language-json"], ["json", ""]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "876");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "p", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "2.1%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, " vs last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 2)(16, "div", 3)(17, "div", 4)(18, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "4.5M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "p", 7)(23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, " 4.2% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, " last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 2)(29, "div", 3)(30, "div", 4)(31, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Page Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "64,835");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "p", 7)(36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](37, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, " 3.6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, " vs last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 2)(42, "div", 3)(43, "div", 4)(44, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "42.68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "p", 7)(49, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](50, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, " 2.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](52, " vs last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "div", 16)(55, "div", 3)(56, "div", 4)(57, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "Avg. Session Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](60, "00:04:60");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "p", 7)(62, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](64, " 5.2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, " vs last 7 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](66, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 18)(68, "div", 19)(69, "div", 20)(70, "div", 21)(71, "div", 22)(72, "div")(73, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "Sales Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "div", 24)(76, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](77, " This Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "ul", 26)(79, "li")(80, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](81, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](82, "li")(83, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](84, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "li")(86, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](87, "This Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "div", 19)(90, "div", 20)(91, "div", 21)(92, "div", 22)(93, "div")(94, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](95, "Visitor Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "div", 29)(97, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](98, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](99, "New Visitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](101, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](102, "Old Visitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](103, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "div", 34)(105, "div", 35)(106, "div", 20)(107, "div", 21)(108, "div", 22)(109, "div")(110, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](111, "Geographic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](113, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](114, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "div", 39)(116, "div", 20)(117, "div", 21)(118, "div", 22)(119, "div")(120, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](121, "Impressions By Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](122, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](123, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](124, "div", 40)(125, "div", 41)(126, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](127, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "div", 44)(129, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](130, "United States ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](132, "445,85");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](133, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](134, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](135, "div", 41)(136, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](137, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](138, "div", 44)(139, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](140, "Germany ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](141, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](142, "683,46");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](143, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](144, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](145, "div", 41)(146, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](147, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](148, "div", 44)(149, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](150, "Canada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](151, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](152, "982,43");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](153, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](154, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](155, "div", 41)(156, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](157, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](158, "div", 44)(159, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](160, "India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](161, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](162, "852,35");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](163, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](164, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](165, "div", 41)(166, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](167, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](168, "div", 44)(169, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](170, "Netherlands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](171, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](172, "785,24");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](173, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](174, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](175, "div", 57)(176, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](177, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](178, "div", 44)(179, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](180, "Malaysia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](181, "strong", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](182, "387,56");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](183, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](184, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](185, "div", 60)(186, "div", 19)(187, "div", 61)(188, "div", 62)(189, "div", 21)(190, "div", 22)(191, "div")(192, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](193, "New Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](194, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](195, "54.6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](196, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](197, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](198, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](199, "div", 62)(200, "div", 21)(201, "div", 22)(202, "div")(203, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](204, "Average Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](205, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](206, "38.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](207, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](208, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](209, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](210, "div", 69)(211, "div", 21)(212, "div", 22)(213, "div")(214, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](215, "Cloud Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](216, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](217, "24.5K");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](218, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](219, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](220, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](221, "div", 19)(222, "div", 20)(223, "div", 21)(224, "div", 22)(225, "div")(226, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](227, "Goal Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](228, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](229, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](230, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](231, "div", 74)(232, "div", 75)(233, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](234, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](235, "div", 75)(236, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](237, "1580");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](238, "div", 75)(239, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](240, "875");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](241, "div", 44)(242, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](243, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](244, "div", 74)(245, "div", 75)(246, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](247, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](248, "div", 75)(249, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](250, "1852");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](251, "div", 75)(252, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](253, "356");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](254, "div", 44)(255, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](256, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](257, "div", 74)(258, "div", 75)(259, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](260, "Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](261, "div", 75)(262, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](263, "1280");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](264, "div", 75)(265, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](266, "867");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](267, "div", 44)(268, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](269, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](270, "div", 80)(271, "div", 81)(272, "div", 82)(273, "div", 21)(274, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](275, "highcharts-chart", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](276, "div", 85)(277, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](278, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](279, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](280, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](282, "65%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](283, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](284, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](285, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](286, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](287, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](288, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](289, "div", 90)(290, "div", 21)(291, "div", 91)(292, "div")(293, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](294, "Device Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](295, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](296, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](297, "div", 92)(298, "div", 44)(299, "div", 93)(300, "h4", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](301, "61 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](302, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](303, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](304, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](305, "(+8.4%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](306, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](307, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](308, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](309, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](310, "div", 44)(311, "div", 93)(312, "h4", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](313, "28 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](314, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](315, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](316, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](317, "(-1.9%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](318, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](319, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](320, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](321, "iOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](322, "div", 44)(323, "div", 93)(324, "h4", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](325, "11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](326, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](327, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](328, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](329, "(+6.8%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](330, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](331, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](332, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](333, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](334, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](335, "div", 102)(336, "div", 103)(337, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](338, "div", 34)(339, "div", 105)(340, "div", 62)(341, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](342, "highcharts-chart", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](343, "div", 105)(344, "div", 62)(345, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](346, "highcharts-chart", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](347, "form-builder", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function AnalyticsComponent_Template_form_builder_change_347_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](348, "div", 107)(349, "pre", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](350, "code", 109, 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](275);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("Highcharts", ctx.Highcharts1)("options", ctx.chartOptions1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("Highcharts", ctx.Highcharts2)("options", ctx.chartOptions2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("Highcharts", ctx.Highcharts3)("options", ctx.chartOptions3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("form", ctx.form);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarDirective, highcharts_angular__WEBPACK_IMPORTED_MODULE_4__.HighchartsChartComponent, angular_formio__WEBPACK_IMPORTED_MODULE_1__.FormBuilderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _alternate_alternate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alternate/alternate.component */ 43105);
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics/analytics.component */ 51892);
/* harmony import */ var _e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./e-commerce/e-commerce.component */ 20915);
/* harmony import */ var _hospitality_hospitality_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hospitality/hospitality.component */ 20541);
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales/sales.component */ 24035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_1__.AnalyticsComponent,
                data: {
                    title: 'Analytics'
                }
            },
            {
                path: 'sales',
                component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_4__.SalesComponent,
                data: {
                    title: 'Sales'
                }
            },
            {
                path: 'e-commerce',
                component: _e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_2__.ECommerceComponent,
                data: {
                    title: 'e-Commerce'
                }
            },
            {
                path: 'alternate',
                component: _alternate_alternate_component__WEBPACK_IMPORTED_MODULE_0__.AlternateComponent,
                data: {
                    title: 'Alternate'
                }
            },
            {
                path: 'hospitality',
                component: _hospitality_hospitality_component__WEBPACK_IMPORTED_MODULE_3__.HospitalityComponent,
                data: {
                    title: 'Hospitality'
                }
            },
        ]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.??fac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts-angular */ 79342);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-commerce/e-commerce.component */ 20915);
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics/analytics.component */ 51892);
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales/sales.component */ 24035);
/* harmony import */ var _alternate_alternate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alternate/alternate.component */ 43105);
/* harmony import */ var _hospitality_hospitality_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hospitality/hospitality.component */ 20541);
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-formio */ 30766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);











class DashboardModule {
}
DashboardModule.??fac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: DashboardModule });
DashboardModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
            highcharts_angular__WEBPACK_IMPORTED_MODULE_10__.HighchartsChartModule,
            angular_formio__WEBPACK_IMPORTED_MODULE_6__.FormioModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](DashboardModule, { declarations: [_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__.AnalyticsComponent,
        _e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_1__.ECommerceComponent, _sales_sales_component__WEBPACK_IMPORTED_MODULE_3__.SalesComponent, _alternate_alternate_component__WEBPACK_IMPORTED_MODULE_4__.AlternateComponent, _hospitality_hospitality_component__WEBPACK_IMPORTED_MODULE_5__.HospitalityComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
        highcharts_angular__WEBPACK_IMPORTED_MODULE_10__.HighchartsChartModule,
        angular_formio__WEBPACK_IMPORTED_MODULE_6__.FormioModule] }); })();


/***/ }),

/***/ 20915:
/*!**************************************************************!*\
  !*** ./src/app/dashboard/e-commerce/e-commerce.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ECommerceComponent": () => (/* binding */ ECommerceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);


class ECommerceComponent {
    constructor() { }
    ngOnInit() {
        $.getScript('./assets/js/e-commerce-dashboard.js');
    }
}
ECommerceComponent.??fac = function ECommerceComponent_Factory(t) { return new (t || ECommerceComponent)(); };
ECommerceComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ECommerceComponent, selectors: [["app-e-commerce"]], decls: 653, vars: 0, consts: [[1, "row", "row-cols-1", "row-cols-lg-4"], [1, "col"], [1, "card", "radius-10", "overflow-hidden", "bg-gradient-cosmic"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "mb-0", "text-white"], [1, "ms-auto", "text-white"], [1, "bx", "bx-cart", "font-30"], [1, "progress", "bg-white-2", "radius-10", "mt-4", 2, "height", "4.5px"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "46%"], [1, "card", "radius-10", "overflow-hidden", "bg-gradient-burning"], [1, "bx", "bx-wallet", "font-30"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "72%"], [1, "card", "radius-10", "overflow-hidden", "bg-gradient-Ohhappiness"], [1, "bx", "bx-bulb", "font-30"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "68%"], [1, "card", "radius-10", "overflow-hidden", "bg-gradient-moonlit"], [1, "bx", "bx-chat", "font-30"], ["role", "progressbar", 1, "progress-bar", "bg-white", 2, "width", "66%"], [1, "card", "radius-10"], [1, "card-header", "border-bottom-0", "bg-transparent"], [1, "d-lg-flex", "align-items-center"], [1, "font-weight-bold", "mb-2", "mb-lg-0"], [1, "ms-lg-auto", "mb-2", "mb-lg-0"], [1, "btn-group-round"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-white"], ["type", "button", 1, "btn", "btn-primary", "radius-10", "ms-lg-3"], ["id", "chart1"], [1, "row"], [1, "col-12", "col-lg-8"], [1, "font-22", "ms-auto"], [1, "bx", "bx-dots-horizontal-rounded"], [1, "d-flex", "align-items-center", "ms-auto", "font-13", "gap-2"], [1, "border", "px-1", "rounded", "cursor-pointer"], [1, "bx", "bxs-circle", "text-danger", "me-1"], [1, "bx", "bxs-circle", "text-success", "me-1"], [1, "bx", "bxs-circle", "text-info", "me-1"], ["id", "chart2"], [1, "col-12", "col-lg-4"], [1, "card", "radius-10", "bg-primary"], [1, "text-white"], [1, "font-weight-bold", "text-white"], [1, "font-13", "text-white"], ["id", "chart3"], [1, "revenue-by-channel"], [1, "mb-4", "font-weight-bold"], [1, "progress-wrapper"], [1, "text-secondary"], [1, "ms-auto", "pe-4"], [1, "text-success"], [1, "progress", "mt-2", 2, "height", "3px"], ["role", "progressbar", 1, "progress-bar", 2, "width", "65%"], [1, "progress-wrapper", "mt-3"], ["role", "progressbar", 1, "progress-bar", 2, "width", "55%"], [1, "text-danger"], ["role", "progressbar", 1, "progress-bar", 2, "width", "35%"], [1, "col-12", "col-lg-6", "d-flex"], [1, "card", "radius-10", "w-100"], [1, "font-weight-bold", "mb-0"], [1, "dropdown", "ms-auto"], ["data-bs-toggle", "dropdown", 1, "cursor-pointer", "text-dark", "font-24", "dropdown-toggle", "dropdown-toggle-nocaret"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javaScript:;", 1, "dropdown-item"], [1, "dropdown-divider"], ["id", "chart4"], [1, "d-flex", "align-items-center", "justify-content-between", "text-center"], [1, "mb-1", "font-weight-bold"], [1, "mb-0", "text-secondary"], [1, "mb-1"], [1, "card", "w-100", "radius-10", "shadow-none", "bg-transparent"], [1, "card-body", "p-0"], ["id", "chart5"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-weight-bold", "text-white"], [1, "bx", "bx-diamond", "font-24", "text-white"], [1, "row", "row-cols-1", "row-cols-sm-2"], [1, "card", "radius-10", "mb-sm-0"], ["id", "chart6"], [1, "card", "radius-10", "mb-0"], ["id", "chart7"], [1, "row", "row-cols-1", "row-cols-lg-3"], [1, "col", "d-flex"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "best-selling-products", "p-3", "mb-3", 3, "perfectScrollbar"], [1, "product-img"], ["src", "assets/images/icons/ice-cream-cornet.png", "alt", "", 1, "p-1"], [1, "ps-3"], [1, "mb-0", "font-weight-bold"], [1, "ms-auto", "mb-0", "text-purple"], ["src", "assets/images/icons/wine-glass.png", "alt", "", 1, "p-1"], ["src", "assets/images/icons/banana.png", "alt", "", 1, "p-1"], ["src", "assets/images/icons/telephone.png", "alt", "", 1, "p-1"], ["src", "assets/images/icons/plate.png", "alt", "", 1, "p-1"], ["src", "assets/images/icons/ice-cream-cornet.png", "alt", "", 1, ""], [1, "recent-reviews", "p-3", "mb-3", 3, "perfectScrollbar"], [1, "ms-auto", "mb-0"], [1, "bx", "bxs-star", "text-warning", "mr-1"], [1, "support-list", "p-3", "mb-3", 3, "perfectScrollbar"], [1, "d-flex", "align-items-top"], [1, ""], ["src", "assets/images/avatars/avatar-1.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], [1, "ps-2"], [1, "text-primary", "float-end", "font-13"], [1, "mb-0", "font-13", "text-secondary"], ["src", "assets/images/avatars/avatar-2.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-3.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-4.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-5.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], [1, "ms-auto"], ["type", "button", 1, "btn", "btn-white", "radius-10"], [1, "table-responsive"], [1, "table", "mb-0", "align-middle"], [1, "product-img", "bg-transparent", "border"], ["src", "assets/images/icons/shoes.png", "alt", "", 1, "p-1"], ["href", "javaScript:;", 1, "btn", "btn-sm", "btn-success", "radius-30"], ["src", "assets/images/icons/smartphone.png", "alt", "", 1, "p-1"], ["href", "javaScript:;", 1, "btn", "btn-sm", "btn-danger", "radius-30"], ["src", "assets/images/icons/mouse.png", "alt", "", 1, "p-1"], ["href", "javaScript:;", 1, "btn", "btn-sm", "btn-warning", "radius-30"], ["src", "assets/images/icons/tshirt.png", "alt", "", 1, "p-1"], ["src", "assets/images/icons/headphones.png", "alt", "", 1, "p-1"]], template: function ECommerceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "867");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1)(15, "div", 10)(16, "div", 3)(17, "div", 4)(18, "div")(19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "$52,945");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1)(28, "div", 13)(29, "div", 3)(30, "div", 4)(31, "div")(32, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "24.5K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1)(41, "div", 16)(42, "div", 3)(43, "div", 4)(44, "div")(45, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "869");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "div")(57, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Monthly Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 23)(60, "div", 24)(61, "div", 25)(62, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div")(69, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Download CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 29)(74, "div", 30)(75, "div", 19)(76, "div", 20)(77, "div", 21)(78, "div")(79, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Historical Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 3)(84, "div", 33)(85, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Page Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 39)(96, "div", 40)(97, "div", 3)(98, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Active Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h4", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "3467");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Page view per minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 19)(106, "div", 3)(107, "div", 45)(108, "h6", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Revenue by Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 47)(111, "div", 4)(112, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Direct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "$1,24,685");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "65.6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 53)(121, "div", 4)(122, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "$1,22,863");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "45.6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 53)(131, "div", 4)(132, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "$1,24,685");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "25.2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 29)(141, "div", 57)(142, "div", 58)(143, "div", 3)(144, "div", 4)(145, "div")(146, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 60)(149, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 62)(152, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 66)(161, "div")(162, "h5", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "289");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Booked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 69)(167, "h5", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "348");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div")(172, "h5", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "152");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Canceled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 57)(177, "div", 70)(178, "div", 71)(179, "div", 40)(180, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](181, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 73)(183, "div")(184, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "$534.8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Average Weekly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](189, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 76)(191, "div", 1)(192, "div", 77)(193, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 1)(196, "div", 79)(197, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 81)(200, "div", 82)(201, "div", 58)(202, "div", 3)(203, "div", 4)(204, "div")(205, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Best Selling Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 60)(208, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](209, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 83)(211, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 84)(219, "div", 4)(220, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](221, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 87)(223, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Cone Ice Cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "$29/Each 56 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "$521.52");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 4)(231, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](232, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 87)(234, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Wine Glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "$30/Each 48 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "$406.87");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](240, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 4)(242, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](243, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 87)(245, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Banana Toy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "$26/Each 66 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "$685.69");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](251, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 4)(253, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](254, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 87)(256, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "Old Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "$39/Each 26 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "$913.72");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](262, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 4)(264, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 87)(267, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Orange Plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "$22/Each 34 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "$372.62");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](273, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "div", 4)(275, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](276, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 87)(278, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Old Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "$39/Each 26 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "$913.72");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](284, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 4)(286, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 87)(289, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "Banana Toy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "$26/Each 66 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "$685.69");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](295, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 4)(297, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 87)(300, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "Wine Glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "$30/Each 48 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "$406.87");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](306, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 4)(308, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](309, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 87)(311, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "Cone Ice Cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "$29/Each 56 Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "$521.52");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 82)(318, "div", 58)(319, "div", 3)(320, "div", 4)(321, "div")(322, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Recent Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 60)(325, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](326, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 83)(328, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](332, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 95)(336, "div", 4)(337, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](338, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "div", 87)(340, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "Banana Toy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](343, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, " 5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](345, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div", 4)(347, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](348, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 87)(350, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "Old Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](353, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, " 5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](355, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 4)(357, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](358, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 87)(360, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Wine Glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](363, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, " 5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](365, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 4)(367, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](368, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 87)(370, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "Orange Plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](373, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, " 5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](375, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "div", 4)(377, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](378, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 87)(380, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "Cone Ice Cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](383, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, " 5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](385, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 4)(387, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](388, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "div", 87)(390, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "Old Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](393, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, " 5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "div", 4)(397, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](398, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "div", 87)(400, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "Wine Glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](403, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, " 5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](405, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "div", 4)(407, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](408, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "div", 87)(410, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "Orange Plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](413, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, " 5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "div", 82)(416, "div", 58)(417, "div", 3)(418, "div", 4)(419, "div")(420, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "Support Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "div", 60)(423, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](424, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "div", 83)(426, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](430, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 98)(434, "div", 99)(435, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](436, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "div", 102)(438, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "Jordan Ntolo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, "2 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, "My item doesn't ship to correct address. Please check It Proper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](444, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "div", 99)(446, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](447, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "div", 102)(449, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "Carolien Bloeme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "3 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "You shipped different color, I need it to be changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](455, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "div", 99)(457, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](458, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "div", 102)(460, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "Lisanne Viscall ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "12 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Can you please refund my money. I don't want to wait anymore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](466, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 99)(468, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](469, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "div", 102)(471, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](472, "Sun Jun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, "12 Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "Please return my phone. it is not iPhon7. I send you many request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](477, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "div", 99)(479, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](480, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "div", 102)(482, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](483, "Lotila Remo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "Hello, I need admin template product. how can i purchase?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](488, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "div", 99)(490, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](491, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "div", 102)(493, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "Carolien Bloeme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "3 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, "You shipped different color, I need it to be changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](499, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "div", 99)(501, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](502, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "div", 102)(504, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, "Lisanne Viscall ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "12 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "Can you please refund my money. I don't want to wait anymore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](510, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "div", 99)(512, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](513, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "div", 102)(515, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](516, "Sun Jun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](518, "12 Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](520, "Please return my phone. it is not iPhon7. I send you many request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "div", 19)(522, "div", 20)(523, "div", 4)(524, "div")(525, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, "Recent Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "div", 109)(528, "button", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](529, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "div", 3)(531, "div", 111)(532, "table", 112)(533, "thead")(534, "tr")(535, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](540, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "Product id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "tbody")(548, "tr")(549, "td")(550, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](551, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, "Nike Sports NK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "Mitchell Daniel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](557, "#9668521");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](559, "$99.85");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](560, "td")(561, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "tr")(564, "td")(565, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](566, "img", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](568, "Redmi Airdts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](570, "Craig Clayton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](572, "#8627523");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "$59.35");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "td")(576, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](577, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "tr")(579, "td")(580, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](581, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](583, "Magic Mouse 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](585, "Julia Burke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, "#6875954");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](589, "$42.68");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "td")(591, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](592, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](593, "tr")(594, "td")(595, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](596, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, "Coton-T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](600, "Clark Natela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "#4587892");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](604, "$32.78");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "td")(606, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](607, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "tr")(609, "td")(610, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](611, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](613, "Headphones 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](614, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](615, "Robin Mandela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](617, "#5587426");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](618, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](619, "$29.52");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](620, "td")(621, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](622, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](623, "tr")(624, "td")(625, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](626, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](627, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](628, "Magic Mouse 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](630, "Julia Burke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](632, "#6875954");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](634, "$42.68");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](635, "td")(636, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](637, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](638, "tr")(639, "td")(640, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](641, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](642, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](643, "Coton-T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](645, "Clark Natela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](647, "#4587892");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](649, "$32.78");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](650, "td")(651, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](652, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlLWNvbW1lcmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 20541:
/*!****************************************************************!*\
  !*** ./src/app/dashboard/hospitality/hospitality.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HospitalityComponent": () => (/* binding */ HospitalityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HospitalityComponent {
    constructor() { }
    ngOnInit() {
        $.getScript('./assets/js/hospitality-dashboard.js');
    }
}
HospitalityComponent.??fac = function HospitalityComponent_Factory(t) { return new (t || HospitalityComponent)(); };
HospitalityComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HospitalityComponent, selectors: [["app-hospitality"]], decls: 302, vars: 0, consts: [[1, "row"], [1, "col-12", "col-lg-8"], [1, "card", "radius-10"], [1, "card-header", "border-bottom-0", "bg-transparent"], [1, "d-lg-flex", "align-items-center"], [1, "font-weight-bold", "mb-2", "mb-lg-0"], [1, "ms-lg-auto", "mb-2", "mb-lg-0"], [1, "btn-group-round"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-white"], [1, "dropdown-menu"], ["href", "javaScript:;", 1, "dropdown-item"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-white", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "card-body"], ["id", "chart1"], [1, "col-12", "col-lg-4"], [1, "card", "radius-10", "bg-gradient-burning"], [1, "d-flex", "align-items-center"], ["src", "assets/images/icons/appointment-book.png", "width", "45", "alt", ""], [1, "ms-auto", "text-end"], [1, "mb-0", "text-white"], [1, "bx", "bxs-arrow-from-bottom"], [1, "d-flex", "align-items-center", "mt-3"], [1, "flex-grow-1"], [1, "mb-1", "text-white"], [1, "mb-0", "text-white", "font-weight-bold"], ["id", "chart2"], [1, "card", "radius-10", "bg-gradient-blues"], ["src", "assets/images/icons/surgery.png", "width", "45", "alt", ""], ["id", "chart3"], [1, "row", "row-cols-1", "row-cols-lg-3"], [1, "col", "d-flex"], [1, "card", "radius-10", "w-100"], [1, "mb-0", "font-weight-bold"], [1, "mb-0", "ms-auto"], [1, "bx", "bx-dots-horizontal-rounded", "float-end", "font-24"], ["src", "assets/images/avatars/avatar-1.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], [1, "flex-grow-1", "ms-3"], [1, "mb-0"], [1, "badge", "badge-pill", "bg-light-danger", "text-danger"], [1, "font-weight-bold", "mb-0"], [1, "text-secondary", "mb-0"], ["href", "javaScript:;", 1, "btn", "btn-sm", "btn-outline-primary", "radius-10"], ["src", "assets/images/avatars/avatar-2.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-3.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-4.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], [1, "pt-5"], ["id", "chart4"], [1, "card", "radius-10", "w-100", "overflow-hidden"], [1, ""], [1, "mb-2", "font-weight-bold"], [1, "mb-3", "text-secondary"], ["id", "chart5"], [1, "col-12", "col-lg-6"], [1, "d-flex", "my-4"], [1, "mb-0", "ml-3", "font-14", "align-self-end", "text-secondary"], [1, "progress", "radius-10", 2, "height", "10px"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "45%"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "10%"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "15%"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "25%"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "10%"], [1, "table-responsive", "mt-4"], [1, "table", "mb-0"], [1, "px-0"], [1, "bx", "bxs-checkbox", "me-2", "font-24", "text-primary"], [1, "px-0", "text-end"], [1, "bx", "bxs-checkbox", "me-2", "font-24", "text-danger"], [1, "bx", "bxs-checkbox", "me-2", "font-24", "text-success"], [1, "bx", "bxs-checkbox", "me-2", "font-24", "text-warning"], [1, "bx", "bxs-checkbox", "me-2", "font-24", "text-info"], [1, "bg-light-primary", "p-3", "radius-10", "text-center", "mt-3"], [1, "mb-0", "font-weight-bold", "text-primary"], ["id", "chart6"], [1, "card-header", "bg-transparent"], [1, "table-responsive", "p-3"], ["src", "assets/images/avatars/avatar-1.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], [1, "badge", "badge-pill", "bg-success"], ["src", "assets/images/avatars/avatar-2.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], [1, "badge", "badge-pill", "bg-danger"], ["src", "assets/images/avatars/avatar-3.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], [1, "badge", "badge-pill", "bg-info"], ["src", "assets/images/avatars/avatar-4.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], [1, "badge", "badge-pill", "bg-warning"]], template: function HospitalityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Hospital Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Last 1 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 12)(19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16)(24, "div", 17)(25, "div", 14)(26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20)(29, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " 2.69%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Since Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 23)(35, "div", 24)(36, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "1879");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 28)(42, "div", 14)(43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 20)(46, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " 3.56%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Since Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 23)(52, "div", 24)(53, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Surgery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "3768");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 31)(59, "div", 32)(60, "div", 33)(61, "div", 14)(62, "div", 18)(63, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Top Doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 38)(70, "p", 39)(71, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "4.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Dr. Neil Wagner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Pediatrician");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 38)(83, "p", 39)(84, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "3.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Dr. Kane Williamson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Psychiatrist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 38)(96, "p", 39)(97, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "5.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Dr. Tom Bundle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Neurologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 38)(109, "p", 39)(110, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "8.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Dr. Tim Southee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Rheumatologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 32)(119, "div", 33)(120, "div", 14)(121, "div", 18)(122, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Diseases Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 32)(129, "div", 49)(130, "div", 14)(131, "div", 50)(132, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "3,240");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Patients this month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 0)(138, "div", 54)(139, "div", 2)(140, "div", 14)(141, "div", 18)(142, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Most Common Medication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 55)(147, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "144");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "div", 58)(153, "div", 59)(154, "div", 60)(155, "div", 61)(156, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 63)(158, "table", 64)(159, "tbody")(160, "tr")(161, "td", 65)(162, "div", 18)(163, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Medication \"Aripiprazole\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "46 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "33%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "tr")(172, "td", 65)(173, "div", 18)(174, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Medication \"Risperidone\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "12 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "17%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "tr")(183, "td", 65)(184, "div", 18)(185, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Medication \"Aripiprazole+Risperidone\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "29 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "21%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "tr")(194, "td", 65)(195, "div", 18)(196, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "No Medication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "34 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "23%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "tr")(205, "td", 65)(206, "div", 18)(207, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](208, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "28 Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "19%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 54)(216, "div", 2)(217, "div", 14)(218, "div", 18)(219, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Average Treatment Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](222, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 72)(224, "h1", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "$8,305");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Average Treatment Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](228, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 2)(230, "div", 75)(231, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "New Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 76)(234, "table", 64)(235, "thead")(236, "tr")(237, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "tbody")(246, "tr")(247, "td")(248, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](249, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 38)(251, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Annette Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Dr. Cody Fisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "Jun 08, 2020, 1:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "td")(258, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "injuries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "tr")(261, "td")(262, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 38)(265, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "Devone Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Dr. Esther Howard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Jun 08, 2020, 2:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "td")(272, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "Diabetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "tr")(275, "td")(276, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 38)(279, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "Kathryn Murphy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Dr. Wade Warren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Jun 08, 2020, 3:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "td")(286, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Influenza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "tr")(289, "td")(290, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](291, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 38)(293, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Jane Cooper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "Dr. Jane Cooper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Jun 08, 2020, 5:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "td")(300, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "Respiratory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3NwaXRhbGl0eS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24035:
/*!****************************************************!*\
  !*** ./src/app/dashboard/sales/sales.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesComponent": () => (/* binding */ SalesComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_sales_highchartsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/sales.highchartsData */ 13960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ 79342);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);




class SalesComponent {
    constructor() {
        // Chart 1
        this.Highcharts1 = _shared_data_sales_highchartsData__WEBPACK_IMPORTED_MODULE_0__.Highcharts1;
        this.chartOptions1 = _shared_data_sales_highchartsData__WEBPACK_IMPORTED_MODULE_0__.chartOptions1;
        // Chart 2
        this.Highcharts2 = _shared_data_sales_highchartsData__WEBPACK_IMPORTED_MODULE_0__.Highcharts2;
        this.chartOptions2 = _shared_data_sales_highchartsData__WEBPACK_IMPORTED_MODULE_0__.chartOptions2;
    }
    ngOnInit() {
        $.getScript('./assets/js/sales-dashboars.js');
    }
}
SalesComponent.??fac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(); };
SalesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SalesComponent, selectors: [["app-sales"]], decls: 671, vars: 4, consts: [[1, "row", "row-cols-1", "row-cols-lg-2", "row-cols-xl-4"], [1, "col"], [1, "card", "radius-10", "overflow-hidden"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "mb-0"], [1, "ms-auto"], [1, "bx", "bx-cart", "font-30"], ["id", "chart1", 1, ""], [1, "bx", "bx-wallet", "font-30"], ["id", "chart2", 1, ""], [1, "bx", "bx-group", "font-30"], ["id", "chart3", 1, ""], [1, "bx", "bx-chat", "font-30"], ["id", "chart4", 1, ""], [1, "row"], [1, "col-12", "col-xl-8", "d-flex"], [1, "card", "radius-10", "w-100"], [2, "display", "block", 3, "Highcharts", "options"], [1, "col-12", "col-xl-4", "d-flex"], [1, "mb-1"], [1, "font-22", "ms-auto"], [1, "bx", "bx-dots-horizontal-rounded"], ["id", "chart6", 1, "mt-4"], [1, "ms-auto", "d-flex", "align-items-center", "border", "radius-10", "px-2"], [1, "bx", "bxs-checkbox", "font-22", "me-1", "text-primary"], [1, "row", "row-cols-1", "row-cols-xl-2"], [1, "col", "d-flex"], ["id", "chart8", 1, ""], [1, "col-12", "col-xl-4", "col-xxl-3", "d-flex"], [1, "card", "radius-10", "w-100", "overflow-hidden"], [1, ""], [1, "mb-0", "text-success"], ["id", "chart9", 1, ""], [1, "col-12", "col-xl-8", "col-xxl-9", "d-flex"], [1, "card", "w-100", "radius-10"], [1, "row", "g-0"], [1, "col-md-4", "border-end"], [1, "card-title"], [1, "mt-4", "mb-1"], [1, "flag-icon", "flag-icon-us", "rounded"], [1, "mb-0", "text-secondary"], [1, "list-group", "mt-4", "list-group-flush"], [1, "list-group-item", "d-flex", "align-items-center"], [1, "bx", "bxs-circle", "me-1", "text-success"], [1, "bx", "bxs-circle", "me-1", "text-danger"], [1, "bx", "bxs-circle", "me-1", "text-primary"], [1, "bx", "bxs-circle", "me-1", "text-warning"], [1, "col-md-8"], [1, "p-3"], ["id", "geographic-map", 1, ""], [1, "customers-list", "p-3", "mb-3", 3, "perfectScrollbar"], [1, "customers-list-item", "d-flex", "align-items-center", "border-top", "border-bottom", "p-2", "cursor-pointer"], ["src", "assets/images/avatars/avatar-1.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], [1, "ms-2"], [1, "mb-1", "font-14"], [1, "mb-0", "font-13", "text-secondary"], [1, "list-inline", "d-flex", "customers-contacts", "ms-auto"], ["href", "javascript:;", 1, "list-inline-item"], [1, "bx", "bxs-envelope"], [1, "bx", "bxs-phone"], [1, "bx", "bx-dots-vertical-rounded"], [1, "customers-list-item", "d-flex", "align-items-center", "border-bottom", "p-2", "cursor-pointer"], ["src", "assets/images/avatars/avatar-2.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-3.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-4.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-5.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-6.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-7.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-8.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-9.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-10.png", "width", "46", "height", "46", "alt", "", 1, "rounded-circle"], [1, "store-metrics", "p-3", "mb-3", 3, "perfectScrollbar"], [1, "card", "mt-3", "radius-10", "border", "shadow-none"], [1, "widgets-icons", "bg-light-primary", "text-primary", "ms-auto"], [1, "bx", "bxs-shopping-bag"], [1, "card", "radius-10", "border", "shadow-none"], [1, "widgets-icons", "bg-light-danger", "text-danger", "ms-auto"], [1, "bx", "bxs-group"], [1, "widgets-icons", "bg-light-success", "text-success", "ms-auto"], [1, "bx", "bxs-category"], [1, "widgets-icons", "bg-light-info", "text-info", "ms-auto"], [1, "bx", "bxs-cart-add"], [1, "card", "radius-10", "border", "shadow-none", "mb-0"], [1, "widgets-icons", "bg-light-warning", "text-warning", "ms-auto"], [1, "bx", "bxs-user-account"], [1, "product-list", "p-3", "mb-3", 3, "perfectScrollbar"], [1, "d-flex", "align-items-center", "py-3", "border-bottom", "cursor-pointer"], [1, "product-img", "me-2"], ["src", "assets/images/products/01.png", "alt", "product img"], [1, "mb-0", "font-14"], ["src", "assets/images/products/03.png", "alt", "product img"], ["src", "assets/images/products/04.png", "alt", "product img"], ["src", "assets/images/products/05.png", "alt", "product img"], ["src", "assets/images/products/06.png", "alt", "product img"], ["src", "assets/images/products/07.png", "alt", "product img"], ["src", "assets/images/products/08.png", "alt", "product img"], ["src", "assets/images/products/09.png", "alt", "product img"], ["src", "assets/images/products/10.png", "alt", "product img"], ["src", "assets/images/products/11.png", "alt", "product img"], [1, "card", "radius-10", "mb-0"], ["href", "javscript:;", 1, "btn", "btn-primary", "btn-sm", "radius-30"], [1, "table-responsive", "mt-3"], [1, "table", "align-middle", "mb-0"], [1, "table-light"], [1, "recent-product-img"], ["src", "assets/images/products/15.png", "alt", ""], [1, "badge", "bg-light-success", "text-success", "w-100"], [1, "d-flex", "order-actions"], ["href", "javascript:;", 1, "text-danger", "bg-light-danger", "border-0"], [1, "bx", "bxs-trash"], ["href", "javascript:;", 1, "ms-4", "text-primary", "bg-light-primary", "border-0"], [1, "bx", "bxs-edit"], ["src", "assets/images/products/16.png", "alt", ""], [1, "badge", "bg-light-danger", "text-danger", "w-100"], ["src", "assets/images/products/19.png", "alt", ""], [1, "badge", "bg-light-warning", "text-warning", "w-100"], ["src", "assets/images/products/07.png", "alt", ""], ["src", "assets/images/products/17.png", "alt", ""], ["src", "assets/images/products/14.png", "alt", ""], ["src", "assets/images/products/08.png", "alt", ""]], template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "867");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 1)(14, "div", 2)(15, "div", 3)(16, "div", 4)(17, "div")(18, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "$52,945");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 1)(26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "div")(30, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "24.5K");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 1)(38, "div", 2)(39, "div", 3)(40, "div", 4)(41, "div")(42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "869");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 15)(50, "div", 16)(51, "div", 17)(52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "highcharts-chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 19)(55, "div", 17)(56, "div", 3)(57, "div", 4)(58, "div")(59, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Sales Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](62, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 4)(65, "div")(66, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "2248");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "/2,800 target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](71, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Marketing Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 26)(75, "div", 27)(76, "div", 17)(77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "highcharts-chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 27)(80, "div", 17)(81, "div", 3)(82, "div", 4)(83, "div")(84, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Sales Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](87, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 15)(90, "div", 29)(91, "div", 30)(92, "div", 3)(93, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Overall Sales Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 31)(96, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "$84,126.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, "+2.5% vs last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](100, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 34)(102, "div", 35)(103, "div", 36)(104, "div", 37)(105, "div", 3)(106, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Top Sales Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "25.860 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](110, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Our Most Customers in US");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "ul", 42)(114, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](115, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Massive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "18.4k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](121, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "6.9k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](127, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, "5.4k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](133, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "875");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 48)(139, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](140, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "div", 15)(142, "div", 19)(143, "div", 17)(144, "div", 3)(145, "div", 4)(146, "div")(147, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](148, "New Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](150, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 51)(152, "div", 52)(153, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](154, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "div", 54)(156, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Emy Jackson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "emy_jac@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "div", 57)(161, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](162, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](164, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](166, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 62)(168, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](169, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "div", 54)(171, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "Martin Hughes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "martin.hug@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "div", 57)(176, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](177, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](179, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](181, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 62)(183, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](184, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 54)(186, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "Laura Madison");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "laura_01@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "div", 57)(191, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](192, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](194, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](196, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 62)(198, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](199, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "div", 54)(201, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](202, "Shoan Stephen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, "s.stephen@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "div", 57)(206, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](207, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](209, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](211, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "div", 62)(213, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](214, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "div", 54)(216, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](217, "Keate Medona");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "Keate@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 57)(221, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](222, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](224, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](226, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "div", 62)(228, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](229, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "div", 54)(231, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, "Paul Benn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "pauly.b@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "div", 57)(236, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](237, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](239, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](241, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "div", 62)(243, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](244, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "div", 54)(246, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, "Winslet Maya");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](249, "winslet_02@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 57)(251, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](252, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](254, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](256, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "div", 62)(258, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](259, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 54)(261, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](262, "Bruno Bernard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "bruno.b@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "div", 57)(266, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](267, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](269, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](271, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "div", 62)(273, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](274, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "div", 54)(276, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](277, "Merlyn Dona");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](279, "merlyn.d@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "div", 57)(281, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](282, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](284, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](286, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "div", 62)(288, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](289, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "div", 54)(291, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](292, "Alister Campel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, "alister_42@xyz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "div", 57)(296, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](297, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](299, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](301, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "div", 19)(303, "div", 30)(304, "div", 3)(305, "div", 4)(306, "div")(307, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](308, "Store Metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](309, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](310, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "div", 72)(312, "div", 73)(313, "div", 3)(314, "div", 4)(315, "div")(316, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](317, "Total Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](319, "856");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](321, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "div", 76)(323, "div", 3)(324, "div", 4)(325, "div")(326, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](327, "Total Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](328, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](329, "45,241");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](331, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "div", 76)(333, "div", 3)(334, "div", 4)(335, "div")(336, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, "Total Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](339, "98");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](340, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](341, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "div", 76)(343, "div", 3)(344, "div", 4)(345, "div")(346, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](349, "124");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](351, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](352, "div", 83)(353, "div", 3)(354, "div", 4)(355, "div")(356, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, "Total Vendors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](359, "55");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](361, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "div", 19)(363, "div", 17)(364, "div", 3)(365, "div", 4)(366, "div")(367, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](368, "Top Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](369, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](370, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "div", 86)(372, "div", 87)(373, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](374, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "div", 31)(376, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](377, "Black Boost Chair");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](379, "148 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](380, "div", 6)(381, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](382, "$246.24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "div", 87)(384, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](385, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](386, "div", 31)(387, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, "Red Single Sofa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](389, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](390, "122 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](391, "div", 6)(392, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, "$328.14");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](394, "div", 87)(395, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](396, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](397, "div", 31)(398, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](399, "Pink Rounded Sofa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](400, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](401, "105 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](402, "div", 6)(403, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](404, "$124.35");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](405, "div", 87)(406, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](407, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](408, "div", 31)(409, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](410, "Brown Single Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](411, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](412, "201 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](413, "div", 6)(414, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](415, "$158.34");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](416, "div", 87)(417, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](418, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "div", 31)(420, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](421, "Grey Long Chair");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](422, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](423, "146 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](424, "div", 6)(425, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](426, "158.24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](427, "div", 87)(428, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](429, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](430, "div", 31)(431, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](432, "Beautiful Sofa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](433, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](434, "210 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](435, "div", 6)(436, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](437, "$520.24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](438, "div", 87)(439, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](440, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](441, "div", 31)(442, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](443, "Grey Stand Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](444, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](445, "115 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](446, "div", 6)(447, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](448, "$345.24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](449, "div", 87)(450, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](451, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](452, "div", 31)(453, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](454, "Brown Single Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](455, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](456, "116 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](457, "div", 6)(458, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](459, "$126.24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](460, "div", 87)(461, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](462, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](463, "div", 31)(464, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](465, "Four Leg Chair");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](466, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](467, "154 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](468, "div", 6)(469, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](470, "$425.24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](471, "div", 87)(472, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](473, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](474, "div", 31)(475, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](476, "Blue Light T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](477, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](478, "186 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](479, "div", 6)(480, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](481, "$149.34");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](482, "div", 15)(483, "div", 1)(484, "div", 100)(485, "div", 3)(486, "div", 4)(487, "div")(488, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](489, "Recent Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](490, "div", 6)(491, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](492, "View All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](493, "div", 102)(494, "table", 103)(495, "thead", 104)(496, "tr")(497, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](498, "Tracking ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](499, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](500, "Products Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](501, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](502, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](503, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](504, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](505, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](506, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](507, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](508, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](509, "tbody")(510, "tr")(511, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](512, "#55879");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](513, "td")(514, "div", 4)(515, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](516, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](517, "div", 54)(518, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](519, "Light Red T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](521, "22 Jun, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](522, "td", 31)(523, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](524, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](526, "#149.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](527, "td")(528, "div", 108)(529, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](530, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](531, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](532, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](533, "tr")(534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](535, "#88379");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](536, "td")(537, "div", 4)(538, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](539, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](540, "div", 54)(541, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](542, "Grey Headphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](544, "22 Jun, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](545, "td", 31)(546, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](547, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](549, "#149.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](550, "td")(551, "div", 108)(552, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](553, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](554, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](555, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](556, "tr")(557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](558, "#68823");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](559, "td")(560, "div", 4)(561, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](562, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](563, "div", 54)(564, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](565, "Grey Hand Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](567, "22 Jun, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](568, "td", 31)(569, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](570, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](572, "#149.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](573, "td")(574, "div", 108)(575, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](576, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](577, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](578, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](579, "tr")(580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](581, "#54869");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](582, "td")(583, "div", 4)(584, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](585, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](586, "div", 54)(587, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](588, "Brown Sofa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](589, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](590, "22 Jun, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](591, "td", 31)(592, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](593, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](595, "#149.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](596, "td")(597, "div", 108)(598, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](599, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](600, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](601, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](602, "tr")(603, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](604, "#22536");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](605, "td")(606, "div", 4)(607, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](608, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](609, "div", 54)(610, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](611, "Black iPhone 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](612, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](613, "22 Jun, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](614, "td", 31)(615, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](616, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](618, "#149.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](619, "td")(620, "div", 108)(621, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](622, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](623, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](624, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](625, "tr")(626, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](627, "#25796");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](628, "td")(629, "div", 4)(630, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](631, "img", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](632, "div", 54)(633, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](634, "Men Yellow T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](635, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](636, "22 Jun, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](637, "td", 31)(638, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](639, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](640, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](641, "#149.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](642, "td")(643, "div", 108)(644, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](645, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](646, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](647, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](648, "tr")(649, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](650, "#98754");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](651, "td")(652, "div", 4)(653, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](654, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](655, "div", 54)(656, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](657, "Grey Stand Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](658, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](659, "22 Jun, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](660, "td", 31)(661, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](662, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](663, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](664, "#149.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](665, "td")(666, "div", 108)(667, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](668, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](669, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](670, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts1)("options", ctx.chartOptions1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts2)("options", ctx.chartOptions2);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__.HighchartsChartComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 15698:
/*!****************************************************!*\
  !*** ./src/app/shared/data/alternate.dashboard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Highcharts1": () => (/* binding */ Highcharts1),
/* harmony export */   "Highcharts2": () => (/* binding */ Highcharts2),
/* harmony export */   "Highcharts3": () => (/* binding */ Highcharts3),
/* harmony export */   "Highcharts4": () => (/* binding */ Highcharts4),
/* harmony export */   "Highcharts5": () => (/* binding */ Highcharts5),
/* harmony export */   "Highcharts6": () => (/* binding */ Highcharts6),
/* harmony export */   "chartOptions1": () => (/* binding */ chartOptions1),
/* harmony export */   "chartOptions2": () => (/* binding */ chartOptions2),
/* harmony export */   "chartOptions3": () => (/* binding */ chartOptions3),
/* harmony export */   "chartOptions4": () => (/* binding */ chartOptions4),
/* harmony export */   "chartOptions5": () => (/* binding */ chartOptions5),
/* harmony export */   "chartOptions6": () => (/* binding */ chartOptions6)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 75972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);

// Chart 1
var Highcharts1 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions1 = {
    chart: {
        height: 350,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        styledMode: true
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Sessions Device'
    },
    subtitle: {
        text: 'Ratio of devices use by users'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: 120,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            showInLegend: true
        }
    },
    //colors: ['#ff9ad5', '#50b5ff', '#5a65dc'],
    series: [{
            name: 'Users',
            type: 'pie',
            colorByPoint: true,
            data: [{
                    name: 'Desktop',
                    y: 56
                }, {
                    name: 'Mobile',
                    y: 30
                }, {
                    name: 'Tablet',
                    y: 14
                }]
        }],
    responsive: {
        rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    plotOptions: {
                        pie: {
                            innerSize: 140,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    },
                }
            }]
    }
};
// Chart 2 
var Highcharts2 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions2 = {
    chart: {
        height: 350,
        type: 'column',
        styledMode: false
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Browser usage'
    },
    subtitle: {
        text: 'Records of browser usage by users'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Browsers usage by users'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    colors: ['#ff6459', '#f5964b', '#56aafb', '#62aedf', '#9a78f0', '#5bb75f'],
    series: [{
            name: "Browsers",
            type: 'column',
            colorByPoint: true,
            data: [{
                    name: "Chrome",
                    y: 47.29,
                    drilldown: "Chrome"
                }, {
                    name: "Firefox",
                    y: 24.25,
                    drilldown: "Firefox"
                }, {
                    name: "Internet Explorer",
                    y: 41.48,
                    drilldown: "Internet Explorer"
                }, {
                    name: "Safari",
                    y: 44.32,
                    drilldown: "Safari"
                }, {
                    name: "Edge",
                    y: 76.39,
                    drilldown: "Edge"
                }, {
                    name: "Opera",
                    y: 16.92,
                    drilldown: "Opera"
                }]
        }],
    drilldown: {
        series: [{
                name: "Chrome",
                id: "Chrome",
                type: 'column',
                data: [
                    ["v65.0",
                        0.1
                    ],
                    ["v64.0",
                        1.3
                    ],
                    ["v63.0",
                        53.02
                    ],
                    ["v62.0",
                        1.4
                    ],
                    ["v61.0",
                        0.88
                    ],
                    ["v60.0",
                        0.56
                    ],
                    ["v59.0",
                        0.45
                    ],
                    ["v58.0",
                        0.49
                    ],
                    ["v57.0",
                        0.32
                    ],
                    ["v56.0",
                        0.29
                    ],
                    ["v55.0",
                        0.79
                    ],
                    ["v54.0",
                        0.18
                    ],
                    ["v51.0",
                        0.13
                    ],
                    ["v49.0",
                        2.16
                    ],
                    ["v48.0",
                        0.13
                    ],
                    ["v47.0",
                        0.11
                    ],
                    ["v43.0",
                        0.17
                    ],
                    ["v29.0",
                        0.26
                    ]
                ]
            }, {
                name: "Firefox",
                id: "Firefox",
                type: 'column',
                data: [
                    ["v58.0",
                        1.02
                    ],
                    ["v57.0",
                        7.36
                    ],
                    ["v56.0",
                        0.35
                    ],
                    ["v55.0",
                        0.11
                    ],
                    ["v54.0",
                        0.1
                    ],
                    ["v52.0",
                        0.95
                    ],
                    ["v51.0",
                        0.15
                    ],
                    ["v50.0",
                        0.1
                    ],
                    ["v48.0",
                        0.31
                    ],
                    ["v47.0",
                        0.12
                    ]
                ]
            }, {
                name: "Internet Explorer",
                id: "Internet Explorer",
                type: 'column',
                data: [
                    ["v11.0",
                        6.2
                    ],
                    ["v10.0",
                        0.29
                    ],
                    ["v9.0",
                        0.27
                    ],
                    ["v8.0",
                        0.47
                    ]
                ]
            }, {
                name: "Safari",
                id: "Safari",
                type: 'column',
                data: [
                    ["v11.0",
                        3.39
                    ],
                    ["v10.1",
                        0.96
                    ],
                    ["v10.0",
                        0.36
                    ],
                    ["v9.1",
                        0.54
                    ],
                    ["v9.0",
                        0.13
                    ],
                    ["v5.1",
                        0.2
                    ]
                ]
            }, {
                name: "Edge",
                id: "Edge",
                type: 'column',
                data: [
                    ["v16",
                        2.6
                    ],
                    ["v15",
                        0.92
                    ],
                    ["v14",
                        0.4
                    ],
                    ["v13",
                        0.1
                    ]
                ]
            }, {
                name: "Opera",
                id: "Opera",
                type: 'column',
                data: [
                    ["v50.0",
                        0.96
                    ],
                    ["v49.0",
                        0.82
                    ],
                    ["v12.1",
                        0.14
                    ]
                ]
            }]
    }
};
// Chart 3
var Highcharts3 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions3 = {
    chart: {
        height: 330,
        type: 'column',
        styledMode: true
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Website Audience Overview',
        style: {
            display: 'none',
        }
    },
    subtitle: {
        text: 'Website Audience Overview',
        style: {
            display: 'none',
        }
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)',
            style: {
                display: 'none',
            }
        }
    },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false,
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    //colors: ['#50b5ff', '#ff9ad5'],
    series: [{
            name: 'New Visitors',
            type: 'column',
            data: [70.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: 'Returning Visitors',
            type: 'column',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        }]
};
// Chart 4
var Highcharts4 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions4 = {
    chart: {
        //height:380,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        //styledMode: true
    },
    credits: {
        enabled: false
    },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false,
            }
        }
    },
    title: {
        text: 'Visitors by Location'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: 0,
            colors: ['#0370e6', 'rgb(3 112 230 / 76%)', 'rgb(3 112 230 / 60%)', 'rgb(3 112 230 / 46%)', 'rgb(3 112 230 / 26%)'],
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
            name: 'Visitors',
            type: 'pie',
            data: [{
                    name: 'USA',
                    y: 61.41
                }, {
                    name: 'Australia',
                    y: 11.84
                }, {
                    name: 'India',
                    y: 4.67
                }, {
                    name: 'China',
                    y: 4.18
                },]
        }]
};
// Chart 5
var Highcharts5 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions5 = {
    chart: {
        type: 'line',
        styledMode: true
    },
    title: {
        text: 'Popular Pages'
    },
    credits: {
        enabled: false
    },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false,
            }
        }
    },
    yAxis: {
        title: {
            text: 'Popular Pages',
            style: {
                display: 'none',
            }
        }
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr']
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    //colors: ['#dc3545', '#01adff', '#673ab7'],
    series: [{
            name: 'Search',
            type: 'line',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Payment',
            type: 'line',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Profile',
            type: 'line',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }],
    responsive: {
        rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
    }
};
// Chart 6
var Highcharts6 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions6 = {
    chart: {
        type: 'bar',
        styledMode: true
    },
    credits: {
        enabled: false
    },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false,
            }
        }
    },
    //colors: ['#7c6cfb', '#02c9ef', '#f7a103'],
    title: {
        text: 'Visitor by Gender'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Visitor by Genders',
            style: {
                display: 'none',
            }
        }
    },
    legend: {
        reversed: false
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
            name: 'Male',
            type: 'bar',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Female',
            type: 'bar',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Others',
            type: 'bar',
            data: [3, 4, 4, 2, 5]
        }]
};


/***/ }),

/***/ 16289:
/*!*********************************************************!*\
  !*** ./src/app/shared/data/analytics.highchartsData.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Highcharts1": () => (/* binding */ Highcharts1),
/* harmony export */   "Highcharts2": () => (/* binding */ Highcharts2),
/* harmony export */   "Highcharts3": () => (/* binding */ Highcharts3),
/* harmony export */   "chartOptions1": () => (/* binding */ chartOptions1),
/* harmony export */   "chartOptions2": () => (/* binding */ chartOptions2),
/* harmony export */   "chartOptions3": () => (/* binding */ chartOptions3)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 75972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);

// Chart 1
var Highcharts1 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions1 = {
    chart: {
        width: '190',
        height: '190',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        styledMode: true
    },
    credits: {
        enabled: false
    },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false,
            }
        }
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
            name: 'Users',
            type: 'pie',
            colorByPoint: true,
            data: [{
                    name: 'Male',
                    y: 61.41,
                    //sliced: true,
                    selected: true
                }, {
                    name: 'Female',
                    y: 11.84
                }]
        }]
};
// Chart 2 
var Highcharts2 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions2 = {
    chart: {
        height: 360,
        type: 'column',
        styledMode: true
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Traffic Sources Status. January, 2021'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Traffic Sources Status'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
            name: "Traffic Sources",
            colorByPoint: true,
            type: 'column',
            data: [{
                    name: "Organic Search",
                    y: 62.74,
                    drilldown: "Organic Search"
                }, {
                    name: "Direct",
                    y: 40.57,
                    drilldown: "Direct"
                }, {
                    name: "Referral",
                    y: 25.23,
                    drilldown: "Referral"
                }, {
                    name: "Others",
                    y: 10.58,
                    drilldown: "Others"
                }]
        }],
};
// Chart 3 
var Highcharts3 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions3 = {
    chart: {
        height: 360,
        type: 'column',
        styledMode: true
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Visitor Age Group Status'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Age Group Status'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}K'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
            name: "Age Group",
            type: 'column',
            colorByPoint: true,
            data: [{
                    name: "18-24",
                    y: 35.74,
                    //drilldown: "Organic Search"
                }, {
                    name: "25-34",
                    y: 65.57,
                    //drilldown: "Direct"
                }, {
                    name: "35-44",
                    y: 30.23,
                    //drilldown: "Referral"
                }, {
                    name: "45-54",
                    y: 20.58,
                    //drilldown: "Others"
                }, {
                    name: "55-64",
                    y: 15.58,
                    //drilldown: "Others"
                }, {
                    name: "65-80",
                    y: 8.58,
                    //drilldown: "Others"
                }]
        }],
};


/***/ }),

/***/ 13960:
/*!*****************************************************!*\
  !*** ./src/app/shared/data/sales.highchartsData.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Highcharts1": () => (/* binding */ Highcharts1),
/* harmony export */   "Highcharts2": () => (/* binding */ Highcharts2),
/* harmony export */   "chartOptions1": () => (/* binding */ chartOptions1),
/* harmony export */   "chartOptions2": () => (/* binding */ chartOptions2)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 75972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);

// Chart 1
var Highcharts1 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions1 = {
    chart: {
        type: 'area',
        height: 420,
        styledMode: true
    },
    credits: {
        enabled: false
    },
    accessibility: {
    //description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR???s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR???s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia???s 4,500.'
    },
    title: {
        text: 'Sales and Traffic Annual Report'
    },
    xAxis: {
        allowDecimals: false,
        type: 'datetime',
        labels: {
            formatter: function () {
                return this.value + ''; // clean, unformatted number for year
            }
        },
        accessibility: {
        //rangeDescription: 'Range: 1940 to 2017.'
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                var nValue;
                nValue = this.value;
                return nValue / 1000 + "k";
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
            name: 'Sales',
            type: 'area',
            data: [
                null, null, null, null, null, 6, 11, 32, 110, 235,
                369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
            ]
        }, {
            name: 'Traffic',
            type: 'area',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
                1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
                11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
                30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
                37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
                12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
            ]
        }]
};
// Chart 2 
var Highcharts2 = highcharts__WEBPACK_IMPORTED_MODULE_0__;
var chartOptions2 = {
    chart: {
        type: 'pie',
        height: 330,
        styledMode: true
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Total Traffic by Source'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
            innerSize: '65%',
            type: 'pie',
            name: 'Traffic',
            data: [{
                    name: 'Organic',
                    y: 505370,
                    z: 92.9
                }, {
                    name: 'Paid',
                    y: 551500,
                    z: 118.7
                }, {
                    name: 'Email',
                    y: 312685,
                    z: 124.6
                }, {
                    name: 'Google',
                    y: 78867,
                    z: 137.5
                }, {
                    name: 'Direct',
                    y: 301340,
                    z: 201.8
                }, {
                    name: 'Bing',
                    y: 357022,
                    z: 235.6
                }]
        }]
};


/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map