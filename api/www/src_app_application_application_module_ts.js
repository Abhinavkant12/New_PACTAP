"use strict";
(self["webpackChunksynadmin"] = self["webpackChunksynadmin"] || []).push([["src_app_application_application_module_ts"],{

/***/ 77364:
/*!***********************************************************!*\
  !*** ./src/app/application/application-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationRoutingModule": () => (/* binding */ ApplicationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-box/chat-box.component */ 1737);
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts/contacts.component */ 93657);
/* harmony import */ var _emailapp_email_read_email_read_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emailapp/email-read/email-read.component */ 92005);
/* harmony import */ var _emailapp_emailapp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emailapp/emailapp.component */ 37630);
/* harmony import */ var _file_manager_file_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-manager/file-manager.component */ 35671);
/* harmony import */ var _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fullcalendar/fullcalendar.component */ 8869);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice/invoice.component */ 89387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










const routes = [
    {
        path: '',
        children: [
            {
                path: 'email-app',
                component: _emailapp_emailapp_component__WEBPACK_IMPORTED_MODULE_3__.EmailappComponent,
                data: {
                    title: 'Email App'
                }
            },
            {
                path: 'email-read',
                component: _emailapp_email_read_email_read_component__WEBPACK_IMPORTED_MODULE_2__.EmailReadComponent,
                data: {
                    title: 'Email Read'
                }
            },
            {
                path: 'chat-box',
                component: _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_0__.ChatBoxComponent,
                data: {
                    title: 'Chat Box'
                }
            },
            {
                path: 'file-manager',
                component: _file_manager_file_manager_component__WEBPACK_IMPORTED_MODULE_4__.FileManagerComponent,
                data: {
                    title: 'File Manager'
                }
            },
            {
                path: 'contatcs',
                component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent,
                data: {
                    title: 'Contatcs'
                }
            },
            {
                path: 'invoice',
                component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_6__.InvoiceComponent,
                data: {
                    title: 'Invoice'
                }
            },
            {
                path: 'calendar',
                component: _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_5__.FullcalendarComponent,
                data: {
                    title: 'calendar'
                }
            },
        ]
    }
];
class ApplicationRoutingModule {
}
ApplicationRoutingModule.ɵfac = function ApplicationRoutingModule_Factory(t) { return new (t || ApplicationRoutingModule)(); };
ApplicationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ApplicationRoutingModule });
ApplicationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ApplicationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 25331:
/*!***************************************************!*\
  !*** ./src/app/application/application.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationModule": () => (/* binding */ ApplicationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _application_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-routing.module */ 77364);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-calendar */ 21440);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 58617);
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-box/chat-box.component */ 1737);
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts/contacts.component */ 93657);
/* harmony import */ var _emailapp_emailapp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emailapp/emailapp.component */ 37630);
/* harmony import */ var _emailapp_email_read_email_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emailapp/email-read/email-read.component */ 92005);
/* harmony import */ var _file_manager_file_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-manager/file-manager.component */ 35671);
/* harmony import */ var _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullcalendar/fullcalendar.component */ 8869);
/* harmony import */ var _fullcalendar_date_time_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fullcalendar/date-time-picker.component */ 73005);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoice/invoice.component */ 89387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);

















class ApplicationModule {
}
ApplicationModule.ɵfac = function ApplicationModule_Factory(t) { return new (t || ApplicationModule)(); };
ApplicationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ApplicationModule });
ApplicationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _application_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplicationRoutingModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_12__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__.adapterFactory
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTimepickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ApplicationModule, { declarations: [_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_1__.ChatBoxComponent,
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__.ContactsComponent,
        _emailapp_emailapp_component__WEBPACK_IMPORTED_MODULE_3__.EmailappComponent,
        _emailapp_email_read_email_read_component__WEBPACK_IMPORTED_MODULE_4__.EmailReadComponent,
        _file_manager_file_manager_component__WEBPACK_IMPORTED_MODULE_5__.FileManagerComponent,
        _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__.InvoiceComponent,
        _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_6__.FullcalendarComponent,
        _fullcalendar_date_time_picker_component__WEBPACK_IMPORTED_MODULE_7__.DateTimePickerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _application_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplicationRoutingModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, angular_calendar__WEBPACK_IMPORTED_MODULE_12__.CalendarModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTimepickerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule] }); })();


/***/ }),

/***/ 1737:
/*!************************************************************!*\
  !*** ./src/app/application/chat-box/chat-box.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatBoxComponent": () => (/* binding */ ChatBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);


class ChatBoxComponent {
    constructor() { }
    ngOnInit() {
        // chat toggle
        $(".chat-toggle-btn").on("click", function () {
            $(".chat-wrapper").toggleClass("chat-toggled");
        });
        $(".chat-toggle-btn-mobile").on("click", function () {
            $(".chat-wrapper").removeClass("chat-toggled");
        });
    }
}
ChatBoxComponent.ɵfac = function ChatBoxComponent_Factory(t) { return new (t || ChatBoxComponent)(); };
ChatBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatBoxComponent, selectors: [["app-chat-box"]], decls: 343, vars: 0, consts: [[1, "chat-wrapper"], [1, "chat-sidebar"], [1, "chat-sidebar-header"], [1, "d-flex", "align-items-center"], [1, "chat-user-online"], ["src", "assets/images/avatars/avatar-1.png", "width", "45", "height", "45", "alt", "", 1, "rounded-circle"], [1, "flex-grow-1", "ms-2"], [1, "mb-0"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "cursor-pointer", "font-24", "dropdown-toggle", "dropdown-toggle-nocaret"], [1, "bx", "bx-dots-horizontal-rounded"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "mb-3"], [1, "input-group", "input-group-sm"], [1, "input-group-text", "bg-transparent"], [1, "bx", "bx-search"], ["type", "text", "placeholder", "People, groups, & messages", 1, "form-control"], [1, "bx", "bx-dialpad"], [1, "chat-tab-menu", "mt-3"], [1, "nav", "nav-pills", "nav-justified"], [1, "nav-item"], ["data-bs-toggle", "pill", "href", "#", 1, "nav-link", "active", 3, "click"], [1, "font-24"], [1, "bx", "bx-conversation"], ["data-bs-toggle", "pill", "href", "#", 1, "nav-link", 3, "click"], [1, "bx", "bx-phone"], [1, "bx", "bxs-contact"], [1, "bx", "bx-bell"], [1, "chat-sidebar-content"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-Chats", 1, "tab-pane", "fade", "show", "active"], [1, "p-3"], [1, "meeting-button", "d-flex", "justify-content-between"], ["href", "#", "data-bs-toggle", "dropdown", 1, "btn", "btn-white", "btn-sm", "radius-30", "dropdown-toggle", "dropdown-toggle-nocaret"], [1, "bx", "bx-video", "me-2"], [1, "bx", "bxs-chevron-down", "ms-2"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["href", "#", "data-bs-toggle", "dropdown", "data-display", "static", 1, "btn", "btn-white", "btn-sm", "radius-30", "dropdown-toggle", "dropdown-toggle-nocaret"], [1, "bx", "bxs-edit", "me-2"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown", "mt-3"], ["href", "#", "data-bs-toggle", "dropdown", 1, "text-uppercase", "text-secondary", "dropdown-toggle", "dropdown-toggle-nocaret"], [1, "bx", "bxs-chevron-down"], [1, "chat-list", 3, "perfectScrollbar"], [1, "list-group", "list-group-flush"], ["href", "#", 1, "list-group-item", 3, "click"], [1, "d-flex"], ["src", "assets/images/avatars/avatar-2.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], [1, "mb-0", "chat-title"], [1, "mb-0", "chat-msg"], [1, "chat-time"], ["href", "#", 1, "list-group-item", "active", 3, "click"], ["src", "assets/images/avatars/avatar-3.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-4.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-5.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-6.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-7.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-9.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-10.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-11.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], [1, "chat-header", "d-flex", "align-items-center"], [1, "chat-toggle-btn"], [1, "bx", "bx-menu-alt-left"], [1, "mb-1", "font-weight-bold"], [1, "list-inline", "d-sm-flex", "mb-0", "d-none"], ["href", "#", 1, "list-inline-item", "d-flex", "align-items-center", "text-secondary", 3, "click"], [1, "bx", "bxs-circle", "me-1", "chart-online"], [1, "bx", "bx-images", "me-1"], [1, "bx", "bx-search", "me-1"], [1, "chat-top-header-menu", "ms-auto"], ["href", "#", 3, "click"], [1, "bx", "bx-video"], [1, "bx", "bx-user-plus"], [1, "chat-content", 3, "perfectScrollbar"], [1, "chat-content-leftside"], ["src", "assets/images/avatars/avatar-3.png", "width", "48", "height", "48", "alt", "", 1, "rounded-circle"], [1, "mb-0", "chat-time"], [1, "chat-left-msg"], [1, "chat-content-rightside"], [1, "d-flex", "ms-auto"], [1, "flex-grow-1", "me-2"], [1, "mb-0", "chat-time", "text-end"], [1, "chat-right-msg"], [1, "chat-footer", "d-flex", "align-items-center"], [1, "flex-grow-1", "pe-2"], [1, "input-group"], [1, "input-group-text"], [1, "bx", "bx-smile"], ["type", "text", "placeholder", "Type a message", 1, "form-control"], [1, "chat-footer-menu"], [1, "bx", "bx-file"], [1, "bx", "bx-microphone"], [1, "overlay", "chat-toggle-btn-mobile"]], template: function ChatBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rachel Zane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11)(13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_13_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_16_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Help & Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_18_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enable Split View Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_20_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Keyboard Shortcuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15)(27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20)(33, "ul", 21)(34, "li", 22)(35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_35_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div")(39, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 22)(42, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_42_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div")(46, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Calls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 22)(49, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_49_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div")(53, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 22)(56, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_56_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div")(60, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30)(63, "div", 31)(64, "div", 32)(65, "div", 33)(66, "div", 34)(67, "div", 8)(68, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Meet Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38)(73, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Host a meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Join a meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8)(78, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "New Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42)(83, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "New Group Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "New Moderated Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "New Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "New Private Conversation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43)(92, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Recent Chats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 38)(96, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Recent Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Hidden Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Sort by Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sort by Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Show Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 46)(109, "div", 47)(110, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_110_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 49)(112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 6)(115, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Louis Litt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "You just got LITT up, Mike.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "9:51 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_121_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 49)(123, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 6)(126, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Harvey Specter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Wrong. You take the gun....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "4:32 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_132_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 49)(134, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 6)(137, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Rachel Zane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "I was thinking that we could...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Wed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_143_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 49)(145, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 6)(148, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Donna Paulsen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Mike, I know everything!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Tue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_154_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 49)(156, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 6)(159, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Jessica Pearson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Have you finished the draft...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "9/3/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_165_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 49)(167, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 6)(170, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Harold Gunderson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Thanks Mike! :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "12/3/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_176_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 49)(178, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 6)(181, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Katrina Bennett");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "I've sent you the files for...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "16/3/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_187_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 49)(189, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 6)(192, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Charles Forstman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Mike, this isn't over.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "18/3/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_198_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 49)(200, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 6)(203, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Jonathan Sidwell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "That's bullshit. This deal..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "24/3/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 63)(210, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div")(213, "h4", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Harvey Inspector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 67)(216, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_216_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "small", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Active Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_219_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_221_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_224_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_226_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 72)(230, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_230_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_232_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_234_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 76)(237, "div", 77)(238, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 6)(241, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Harvey, 2:35 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Hi, harvey where are you now a days?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 81)(246, "div", 82)(247, "div", 83)(248, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "you, 2:37 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "I am in USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 77)(253, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 6)(256, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Harvey, 2:48 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "okk, what about admin template?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 81)(261, "div", 49)(262, "div", 83)(263, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "you, 2:49 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "i have already purchased the admin template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 77)(268, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 6)(271, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Harvey, 3:12 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "ohhk, great, which admin template you have purchased?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 81)(276, "div", 49)(277, "div", 83)(278, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "you, 3:14 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "i purchased dashtreme admin template from themeforest. it is very good product for web application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 77)(283, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 6)(286, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Harvey, 3:16 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "who is the author of this template?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 81)(291, "div", 49)(292, "div", 83)(293, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "you, 3:22 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "codervent is the author of this admin template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 77)(298, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 6)(301, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Harvey, 3:16 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "ohh i know about this author. he has good admin products in his portfolio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 81)(306, "div", 49)(307, "div", 83)(308, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "you, 3:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "yes, codervent has multiple admin templates. also he is very supportive.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 77)(313, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 6)(316, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Harvey, 3:33 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "All the best for your target. thanks for giving your time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 81)(321, "div", 49)(322, "div", 83)(323, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "you, 3:35 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "thanks Harvey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 86)(328, "div", 87)(329, "div", 88)(330, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 92)(334, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_334_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_336_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_338_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_a_click_340_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWJveC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 93657:
/*!************************************************************!*\
  !*** ./src/app/application/contacts/contacts.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 204, vars: 0, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-auto"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-lg-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "mb-0", "text-uppercase"], [1, "row", "row-cols-1", "row-cols-lg-2", "row-cols-xl-4"], [1, "col"], [1, "card", "radius-15"], [1, "card-body", "text-center"], [1, "p-4", "border", "radius-15"], ["src", "assets/images/avatars/avatar-1.png", "width", "110", "height", "110", "alt", "", 1, "rounded-circle", "shadow"], [1, "mb-0", "mt-5"], [1, "mb-3"], [1, "list-inline", "contacts-social", "mt-3", "mb-3"], ["href", "#", 1, "list-inline-item", "bg-facebook", "text-white", "border-0", 3, "click"], [1, "bx", "bxl-facebook"], ["href", "#", 1, "list-inline-item", "bg-twitter", "text-white", "border-0", 3, "click"], [1, "bx", "bxl-twitter"], ["href", "#", 1, "list-inline-item", "bg-google", "text-white", "border-0", 3, "click"], [1, "bx", "bxl-google"], ["href", "#", 1, "list-inline-item", "bg-linkedin", "text-white", "border-0", 3, "click"], [1, "bx", "bxl-linkedin"], [1, "d-grid"], ["href", "#", 1, "btn", "btn-outline-primary", "radius-15"], ["src", "assets/images/avatars/avatar-2.png", "width", "110", "height", "110", "alt", "", 1, "rounded-circle", "shadow"], ["src", "assets/images/avatars/avatar-3.png", "width", "110", "height", "110", "alt", "", 1, "rounded-circle", "shadow"], ["src", "assets/images/avatars/avatar-4.png", "width", "110", "height", "110", "alt", "", 1, "rounded-circle", "shadow"], [1, "card", "radius-15", "bg-primary"], [1, "p-4", "radius-15"], ["src", "assets/images/avatars/avatar-9.png", "width", "110", "height", "110", "alt", "", 1, "rounded-circle", "shadow", "p-1", "bg-white"], [1, "mb-0", "mt-5", "text-white"], [1, "mb-3", "text-white"], ["href", "#", 1, "list-inline-item", "border-0", 3, "click"], ["href", "#", 1, "btn", "btn-white", "radius-15"], [1, "card", "radius-15", "bg-danger"], ["src", "assets/images/avatars/avatar-15.png", "width", "110", "height", "110", "alt", "", 1, "rounded-circle", "shadow", "p-1", "bg-white"], [1, "card", "radius-15", "bg-warning"], ["src", "assets/images/avatars/avatar-7.png", "width", "110", "height", "110", "alt", "", 1, "rounded-circle", "shadow", "p-1", "bg-white"], [1, "mb-0", "mt-5", "text-dark"], [1, "mb-3", "text-dark"], [1, "card", "radius-15", "bg-info"], ["src", "assets/images/avatars/avatar-8.png", "width", "110", "height", "110", "alt", "", 1, "rounded-circle", "shadow", "p-1", "bg-white"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_19_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_21_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_26_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Light Contact List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pauline I. Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Webdeveloper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26)(42, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_42_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_44_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_46_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_48_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 35)(51, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Ralph L. Alva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "UI Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26)(63, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_63_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_65_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_67_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_69_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35)(72, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 19)(75, "div", 20)(76, "div", 21)(77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "John B. Roman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Graphic Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26)(84, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_84_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_86_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_88_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_90_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 35)(93, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 19)(96, "div", 20)(97, "div", 21)(98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "David O. Buckley");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Android Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 26)(105, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_105_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_107_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_109_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_111_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 35)(114, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Color Contact List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 18)(120, "div", 19)(121, "div", 40)(122, "div", 21)(123, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Pauline I. Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Webdeveloper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 26)(130, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_130_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_132_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_134_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_136_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 35)(139, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 19)(142, "div", 47)(143, "div", 21)(144, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Pauline I. Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Webdeveloper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 26)(151, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_151_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_153_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_155_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_157_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 35)(160, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 19)(163, "div", 49)(164, "div", 21)(165, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Pauline I. Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Webdeveloper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 26)(172, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_172_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_174_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_176_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_178_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 35)(181, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 19)(184, "div", 53)(185, "div", 21)(186, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Pauline I. Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Webdeveloper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 26)(193, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_193_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_195_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_197_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_199_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 35)(202, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92005:
/*!*************************************************************************!*\
  !*** ./src/app/application/emailapp/email-read/email-read.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailReadComponent": () => (/* binding */ EmailReadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class EmailReadComponent {
    constructor() { }
    ngOnInit() {
        // email toggle
        $(".email-toggle-btn").on("click", function () {
            $(".email-wrapper").toggleClass("email-toggled");
        });
        $(".email-toggle-btn-mobile").on("click", function () {
            $(".email-wrapper").removeClass("email-toggled");
        });
        // compose mail
        $(".compose-mail-btn").on("click", function () {
            $(".compose-mail-popup").show();
        });
        $(".compose-mail-close").on("click", function () {
            $(".compose-mail-popup").hide();
        });
    }
}
EmailReadComponent.ɵfac = function EmailReadComponent_Factory(t) { return new (t || EmailReadComponent)(); };
EmailReadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailReadComponent, selectors: [["app-email-read"]], decls: 215, vars: 0, consts: [[1, "email-wrapper"], [1, "email-sidebar"], [1, "email-sidebar-header", "d-grid"], ["href", "#", 1, "btn", "btn-primary", "compose-mail-btn", 3, "click"], [1, "bx", "bx-plus", "me-2"], [1, "email-sidebar-content"], [1, "email-navigation", 3, "perfectScrollbar"], [1, "list-group", "list-group-flush"], ["routerLink", "/application/email-app", 1, "list-group-item", "active", "d-flex", "align-items-center"], [1, "bx", "bxs-inbox", "me-3", "font-20"], [1, "badge", "bg-primary", "rounded-pill", "ms-auto"], ["href", "#", 1, "list-group-item", "d-flex", "align-items-center", 3, "click"], [1, "bx", "bxs-star", "me-3", "font-20"], [1, "bx", "bxs-alarm-snooze", "me-3", "font-20"], [1, "bx", "bxs-send", "me-3", "font-20"], [1, "bx", "bxs-file-blank", "me-3", "font-20"], [1, "bx", "bxs-bookmark", "me-3", "font-20"], [1, "bx", "bxs-message-rounded-error", "me-3", "font-20"], [1, "bx", "bx-mail-send", "me-3", "font-20"], [1, "bx", "bxs-envelope-open", "me-3", "font-20"], [1, "bx", "bxs-info-circle", "me-3", "font-20"], [1, "bx", "bxs-trash-alt", "me-3", "font-20"], [1, "email-meeting"], [1, "list-group-item"], [1, "bx", "bxs-video", "me-3", "font-20"], [1, "bx", "bxs-group", "me-3", "font-20"], [1, "list-group-item", "email-hangout", "cursor-pointer", "border-top"], [1, "d-flex", "align-items-center"], [1, "chat-user-online"], ["src", "assets/images/avatars/avatar-1.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], [1, "flex-grow-1", "ms-2"], [1, "mb-0"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "font-24", "dropdown-toggle", "dropdown-toggle-nocaret"], [1, "bx", "bx-plus"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "email-header", "d-xl-flex", "align-items-center"], [1, "email-toggle-btn"], [1, "bx", "bx-menu"], [1, "btn", "btn-white"], ["type", "checkbox", 1, "form-check-input"], [1, ""], ["type", "button", 1, "btn", "btn-white", "ms-2"], [1, "bx", "bx-refresh", "me-0"], [1, "bx", "bx-downvote", "me-0"], [1, "d-none", "d-md-flex"], [1, "bx", "bx-file", "me-0"], [1, "bx", "bx-trash", "me-0"], [1, "flex-grow-1", "mx-xl-2", "my-2", "my-xl-0"], [1, "input-group"], [1, "input-group-text", "bg-transparent"], [1, "bx", "bx-search"], ["type", "text", "placeholder", "Search mail", 1, "form-control"], [1, "ms-auto", "d-flex", "align-items-center"], [1, "btn", "btn-sm", "btn-light"], [1, "btn", "btn-white", "px-2", "ms-2"], [1, "bx", "bx-chevron-left", "me-0"], [1, "bx", "bx-chevron-right", "me-0"], [1, "email-content"], [1, "email-read-box", "p-3", 3, "perfectScrollbar"], [1, "mb-0", "font-weight-bold"], ["data-bs-toggle", "dropdown", 1, "dropdown-toggle"], [1, "dropdown-menu"], [1, "mb-0", "chat-time", "ps-5", "ms-auto"], [1, "email-read-content", "px-md-5", "py-5"], [1, "compose-mail-popup"], [1, "card"], [1, "card-header", "bg-dark", "text-white", "py-2", "cursor-pointer"], [1, "compose-mail-title"], [1, "compose-mail-close", "ms-auto"], [1, "card-body"], [1, "email-form"], [1, "mb-3"], ["type", "text", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["placeholder", "Message", "rows", "10", "cols", "10", 1, "form-control"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "ms-2"], ["type", "button", 1, "btn", "border-0", "btn-sm", "btn-white"], [1, "lni", "lni-text-format"], [1, "bx", "bx-link-alt"], [1, "lni", "lni-emoji-tounge"], [1, "lni", "lni-google-drive"], [1, "ms-auto"], [1, "lni", "lni-trash"], [1, "overlay", "email-toggle-btn-mobile"]], template: function EmailReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_3_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "7,513");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_15_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_19_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Snoozed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_27_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Drafts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_33_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_37_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_41_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_45_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "All Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_49_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_53_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22)(58, "div", 7)(59, "div", 23)(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Meet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_62_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Start a meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_66_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Join a meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26)(71, "div", 27)(72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30)(75, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Jessica Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32)(78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35)(81, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_81_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_84_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Help & Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_86_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Enable Split View Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_88_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Keyboard Shortcuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_91_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 38)(94, "div", 27)(95, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 43)(100, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 43)(103, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 47)(106, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43)(109, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 50)(112, "div", 51)(113, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 55)(117, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "1-50 of 8,740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 60)(124, "div", 61)(125, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "It is a long established fact that a reader will be distracted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 30)(131, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Himalaya India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 32)(134, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "to me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 64)(137, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_137_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_140_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Help & Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_142_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Enable Split View Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_144_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Keyboard Shortcuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_147_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Sep 15, 2020, 11:04 PM (19 hours ago)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 66)(152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Where can I get some?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Where does it come from?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 67)(168, "div", 68)(169, "div", 69)(170, "div", 27)(171, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "New Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 72)(176, "div", 73)(177, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "textarea", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 31)(184, "div", 27)(185, "div", 43)(186, "div", 78)(187, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "button", 80)(190, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 64)(193, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_193_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_195_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_197_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailReadComponent_Template_a_click_200_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 82)(203, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 88)(212, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1yZWFkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 37630:
/*!************************************************************!*\
  !*** ./src/app/application/emailapp/emailapp.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailappComponent": () => (/* binding */ EmailappComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class EmailappComponent {
    constructor() { }
    ngOnInit() {
        // email toggle
        $(".email-toggle-btn").on("click", function () {
            $(".email-wrapper").toggleClass("email-toggled");
        });
        $(".email-toggle-btn-mobile").on("click", function () {
            $(".email-wrapper").removeClass("email-toggled");
        });
        // compose mail
        $(".compose-mail-btn").on("click", function () {
            $(".compose-mail-popup").show();
        });
        $(".compose-mail-close").on("click", function () {
            $(".compose-mail-popup").hide();
        });
    }
}
EmailappComponent.ɵfac = function EmailappComponent_Factory(t) { return new (t || EmailappComponent)(); };
EmailappComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailappComponent, selectors: [["app-emailapp"]], decls: 524, vars: 0, consts: [[1, "email-wrapper"], [1, "email-sidebar"], [1, "email-sidebar-header", "d-grid"], ["href", "#", 1, "btn", "btn-primary", "compose-mail-btn", 3, "click"], [1, "bx", "bx-plus", "me-2"], [1, "email-sidebar-content"], [1, "email-navigation", 3, "perfectScrollbar"], [1, "list-group", "list-group-flush"], ["routerLink", "/application/email-app", 1, "list-group-item", "active", "d-flex", "align-items-center"], [1, "bx", "bxs-inbox", "me-3", "font-20"], [1, "badge", "bg-primary", "rounded-pill", "ms-auto"], ["href", "#", 1, "list-group-item", "d-flex", "align-items-center", 3, "click"], [1, "bx", "bxs-star", "me-3", "font-20"], [1, "bx", "bxs-alarm-snooze", "me-3", "font-20"], [1, "bx", "bxs-send", "me-3", "font-20"], [1, "bx", "bxs-file-blank", "me-3", "font-20"], [1, "bx", "bxs-bookmark", "me-3", "font-20"], [1, "bx", "bxs-message-rounded-error", "me-3", "font-20"], [1, "bx", "bx-mail-send", "me-3", "font-20"], [1, "bx", "bxs-envelope-open", "me-3", "font-20"], [1, "bx", "bxs-info-circle", "me-3", "font-20"], [1, "bx", "bxs-trash-alt", "me-3", "font-20"], [1, "email-meeting"], [1, "list-group-item"], [1, "bx", "bxs-video", "me-3", "font-20"], [1, "bx", "bxs-group", "me-3", "font-20"], [1, "list-group-item", "email-hangout", "cursor-pointer", "border-top"], [1, "d-flex", "align-items-center"], [1, "chat-user-online"], ["src", "assets/images/avatars/avatar-1.png", "width", "42", "height", "42", "alt", "", 1, "rounded-circle"], [1, "flex-grow-1", "ms-2"], [1, "mb-0"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "font-24", "dropdown-toggle", "dropdown-toggle-nocaret"], [1, "bx", "bx-plus"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "email-header", "d-xl-flex", "align-items-center"], [1, "email-toggle-btn"], [1, "bx", "bx-menu"], [1, "btn", "btn-white"], ["type", "checkbox", 1, "form-check-input"], [1, ""], ["type", "button", 1, "btn", "btn-white", "ms-2"], [1, "bx", "bx-refresh", "me-0"], [1, "bx", "bx-downvote", "me-0"], [1, "d-none", "d-md-flex"], [1, "bx", "bx-file", "me-0"], [1, "bx", "bx-trash", "me-0"], [1, "flex-grow-1", "mx-xl-2", "my-2", "my-xl-0"], [1, "input-group"], [1, "input-group-text", "bg-transparent"], [1, "bx", "bx-search"], ["type", "text", "placeholder", "Search mail", 1, "form-control"], [1, "ms-auto", "d-flex", "align-items-center"], [1, "btn", "btn-sm", "btn-light"], [1, "btn", "btn-white", "px-2", "ms-2"], [1, "bx", "bx-chevron-left", "me-0"], [1, "bx", "bx-chevron-right", "me-0"], [1, "email-content"], [1, "email-list", 3, "perfectScrollbar"], ["routerLink", "/application/email-read"], [1, "d-md-flex", "align-items-center", "email-message", "px-3", "py-1"], [1, "d-flex", "align-items-center", "email-actions"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "bx", "bx-star", "font-20", "mx-2", "email-star"], [1, "ms-auto"], [1, "mb-0", "email-time"], [1, "d-md-flex", "align-items-center", "email-message", "px-3", "py-1", "bg-body"], [1, "compose-mail-popup"], [1, "card"], [1, "card-header", "bg-dark", "text-white", "py-2", "cursor-pointer"], [1, "compose-mail-title"], [1, "compose-mail-close", "ms-auto"], [1, "card-body"], [1, "email-form"], [1, "mb-3"], ["type", "text", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["placeholder", "Message", "rows", "10", "cols", "10", 1, "form-control"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "dropdown-menu"], [1, "ms-2"], ["type", "button", 1, "btn", "border-0", "btn-sm", "btn-white"], [1, "lni", "lni-text-format"], [1, "bx", "bx-link-alt"], [1, "lni", "lni-emoji-tounge"], [1, "lni", "lni-google-drive"], [1, "lni", "lni-trash"], [1, "overlay", "email-toggle-btn-mobile"]], template: function EmailappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_3_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "7,513");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_15_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_19_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Snoozed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_27_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Drafts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_33_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_37_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_41_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_45_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "All Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_49_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_53_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22)(58, "div", 7)(59, "div", 23)(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Meet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_62_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Start a meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_66_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Join a meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26)(71, "div", 27)(72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30)(75, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Jessica Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32)(78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35)(81, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_81_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_84_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Help & Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_86_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Enable Split View Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_88_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Keyboard Shortcuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_91_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 38)(94, "div", 27)(95, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 43)(100, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 43)(103, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 47)(106, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43)(109, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 50)(112, "div", 51)(113, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 55)(117, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "1-50 of 8,740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 60)(124, "div", 43)(125, "div", 61)(126, "a", 62)(127, "div", 63)(128, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 65)(130, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 31)(132, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Wordpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 43)(135, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "It is a long established fact that a reader will be distracted by the readable...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 67)(138, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "5:56 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 62)(141, "div", 63)(142, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 65)(144, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 31)(146, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Locanto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 43)(149, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "The point of using Lorem Ipsum is that it has a more-or-less normal...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 67)(152, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "5:45 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 62)(155, "div", 69)(156, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 65)(158, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 31)(160, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 43)(163, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "There are many variations of passages of Lorem Ipsum available, majority suffered...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 67)(166, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "4:32 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 62)(169, "div", 63)(170, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "input", 65)(172, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p", 31)(174, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Alex Xender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 43)(177, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 67)(180, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "4:25 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 62)(183, "div", 63)(184, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "input", 65)(186, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 31)(188, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Alisha Mastana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 43)(191, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 67)(194, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "4:18 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 62)(197, "div", 63)(198, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 65)(200, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p", 31)(202, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Synergy Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 43)(205, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "If you are going to use a passage of Lorem Ipsum, you need to be sure there...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 67)(208, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "3:56 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 62)(211, "div", 63)(212, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "input", 65)(214, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 31)(216, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Robina Consultant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 43)(219, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 67)(222, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "3:43 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 62)(225, "div", 69)(226, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "input", 65)(228, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p", 31)(230, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "HCl Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 43)(233, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Bonorum et Malorum\" by Cicero are also reproduced in their exact original form...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 67)(236, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "2:25 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 62)(239, "div", 69)(240, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "input", 65)(242, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p", 31)(244, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Tata India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 43)(247, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "But I must explain to you how all this mistaken idea of denouncing pleasure...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 67)(250, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "2:14 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 62)(253, "div", 69)(254, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "input", 65)(256, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p", 31)(258, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Jessica Jhons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 43)(261, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "At vero eos et accusamus et iusto odio dignissimos ducimus...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 67)(264, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "1:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 62)(267, "div", 63)(268, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "input", 65)(270, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p", 31)(272, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Anaxa Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 43)(275, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 67)(278, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "1:15 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 62)(281, "div", 69)(282, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "input", 65)(284, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p", 31)(286, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Maxwell Linga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 43)(289, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "On the other hand, we denounce with righteous indignation and dislike...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 67)(292, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "12:45 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 62)(295, "div", 63)(296, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "input", 65)(298, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "p", 31)(300, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Cricket India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 43)(303, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 67)(306, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Oct 25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 62)(309, "div", 63)(310, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "input", 65)(312, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p", 31)(314, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Start Sports Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 43)(317, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Excepteur sint occaecat cupidatat non proident, sunt in culpa...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 67)(320, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Oct 22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 62)(323, "div", 69)(324, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "input", 65)(326, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "p", 31)(328, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Diana Dating Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 43)(331, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Nor again is there anyone who loves or pursues or desires to obtain pain...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 67)(334, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Oct 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 62)(337, "div", 69)(338, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "input", 65)(340, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p", 31)(342, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Himalaya India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 43)(345, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 67)(348, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Oct 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 62)(351, "div", 63)(352, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "input", 65)(354, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "p", 31)(356, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "NASA USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 43)(359, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "All the Lorem Ipsum generators on the Internet tend to repeat predefined...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 67)(362, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Sep 28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "a", 62)(365, "div", 63)(366, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "input", 65)(368, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p", 31)(370, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Indeed Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 43)(373, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Content here, content here', making it look like readable English...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 67)(376, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Sep 22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "a", 62)(379, "div", 63)(380, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "input", 65)(382, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p", 31)(384, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Wordfence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 43)(387, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Various versions have evolved over the years, sometimes by accident...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 67)(390, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Sep 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "a", 62)(393, "div", 63)(394, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "input", 65)(396, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "p", 31)(398, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "DocsApp India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 43)(401, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "But I must explain to you how all this mistaken idea of denouncing pleasure...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 67)(404, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Sep 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "a", 62)(407, "div", 69)(408, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "input", 65)(410, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "p", 31)(412, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Alex ReliableSoft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 43)(415, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 67)(418, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Sep 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "a", 62)(421, "div", 69)(422, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "input", 65)(424, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "p", 31)(426, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Ryan Robinson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 43)(429, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Business it will frequently occur that pleasures have to be repudiated...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 67)(432, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Aug 22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "a", 62)(435, "div", 63)(436, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "input", 65)(438, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "p", 31)(440, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "TechGig Job Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 43)(443, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 67)(446, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Aug 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "a", 62)(449, "div", 69)(450, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "input", 65)(452, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "p", 31)(454, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Paytm India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 43)(457, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "All the Lorem Ipsum generators on the Internet tend to repeat predefined...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div", 67)(460, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Jul 27");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "a", 62)(463, "div", 63)(464, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "input", 65)(466, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "p", 31)(468, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Uber America");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "div", 43)(471, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "Chunks as necessary, making this the first true generator on the Internet...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 67)(474, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Jul 24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 70)(477, "div", 71)(478, "div", 72)(479, "div", 27)(480, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "New Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "div", 75)(485, "div", 76)(486, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "textarea", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 31)(493, "div", 27)(494, "div", 43)(495, "div", 81)(496, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "button", 83)(499, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 85)(502, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_502_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_504_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_506_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](508, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailappComponent_Template_a_click_509_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "div", 86)(512, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div", 67)(521, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](522, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbGFwcC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35671:
/*!********************************************************************!*\
  !*** ./src/app/application/file-manager/file-manager.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileManagerComponent": () => (/* binding */ FileManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FileManagerComponent {
    constructor() { }
    ngOnInit() {
    }
}
FileManagerComponent.ɵfac = function FileManagerComponent_Factory(t) { return new (t || FileManagerComponent)(); };
FileManagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileManagerComponent, selectors: [["app-file-manager"]], decls: 386, vars: 0, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-auto"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-lg-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "row"], [1, "col-12", "col-lg-3"], [1, "card"], [1, "card-body"], [1, "d-grid"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], [1, "my-3"], [1, "fm-menu"], [1, "list-group", "list-group-flush"], ["href", "#", 1, "list-group-item", "py-1", 3, "click"], [1, "bx", "bx-folder", "me-2"], [1, "bx", "bx-devices", "me-2"], [1, "bx", "bx-analyse", "me-2"], [1, "bx", "bx-plug", "me-2"], [1, "bx", "bx-trash-alt", "me-2"], [1, "bx", "bx-file", "me-2"], [1, "bx", "bx-image", "me-2"], [1, "bx", "bx-video", "me-2"], [1, "bx", "bx-music", "me-2"], [1, "bx", "bx-beer", "me-2"], [1, "mb-0", "text-primary", "font-weight-bold"], [1, "float-end", "text-secondary"], [1, "mb-0", "mt-2"], [1, "text-secondary"], [1, "float-end", "text-primary"], [1, "progress", "mt-3", "h-7"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "w-25"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", "w-25"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", "w-25"], [1, "mt-3"], [1, "d-flex", "align-items-center"], [1, "fm-file-box", "bg-light-primary", "text-primary"], [1, "bx", "bx-image"], [1, "flex-grow-1", "ms-2"], [1, "mb-0"], [1, "mb-0", "text-secondary"], [1, "text-primary", "mb-0"], [1, "d-flex", "align-items-center", "mt-3"], [1, "fm-file-box", "bg-light-success", "text-success"], [1, "bx", "bxs-file-doc"], [1, "fm-file-box", "bg-light-danger", "text-danger"], [1, "bx", "bx-video"], [1, "fm-file-box", "bg-light-warning", "text-warning"], [1, "fm-file-box", "bg-light-info", "text-info"], [1, "col-12", "col-lg-9"], [1, "fm-search"], [1, "input-group", "input-group-lg"], [1, "input-group-text", "bg-transparent"], [1, "bx", "bx-search"], ["type", "text", "placeholder", "Search the files", 1, "form-control"], [1, "row", "mt-3"], [1, "col-12", "col-lg-4"], [1, "card", "shadow-none", "border", "radius-15"], [1, "fm-icon-box", "radius-15", "bg-primary", "text-white"], [1, "lni", "lni-google-drive"], [1, "ms-auto", "font-24"], [1, "bx", "bx-dots-horizontal-rounded"], [1, "mt-3", "mb-0"], [1, "mb-1", "mt-4"], [1, "float-end"], [1, "progress", "h-7"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", "w-50"], [1, "fm-icon-box", "radius-15", "bg-danger", "text-white"], [1, "lni", "lni-dropbox-original"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", "w-50"], [1, "fm-icon-box", "radius-15", "bg-warning", "text-dark"], [1, "bx", "bxs-door-open"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", "w-50"], [1, "font-30", "text-primary"], [1, "bx", "bxs-folder"], [1, "user-groups", "ms-auto"], ["src", "assets/images/avatars/avatar-1.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-2.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], [1, "user-plus"], [1, "mb-0", "text-primary"], ["src", "assets/images/avatars/avatar-4.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-7.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], ["src", "assets/images/avatars/avatar-8.png", "width", "35", "height", "35", "alt", "", 1, "rounded-circle"], ["href", "#", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "table-responsive", "mt-3"], [1, "table", "table-striped", "table-hover", "table-sm", "mb-0"], [1, "bx", "bx-up-arrow-alt", "ms-2"], [1, "bx", "bxs-file-pdf", "me-2", "font-24", "text-danger"], [1, "font-weight-bold", "text-danger"], [1, "bx", "bx-dots-horizontal-rounded", "font-24"], [1, "bx", "bxs-file", "me-2", "font-24", "text-primary"], [1, "font-weight-bold", "text-primary"], [1, "bx", "bxs-file-doc", "me-2", "font-24", "text-success"], [1, "font-weight-bold", "text-success"]], template: function FileManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "File Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_19_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_21_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_26_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_33_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "+ Add File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "My Drive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24)(38, "div", 25)(39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_39_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "All Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_43_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "My Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_47_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Recents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_51_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_55_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Deleted Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_59_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_63_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_67_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_71_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_75_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Zip Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19)(80, "div", 20)(81, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "45.5 GB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "50 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 39)(86, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Upgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 43)(92, "div", 44)(93, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 47)(96, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 50)(99, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "1,756 files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "15.3 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 54)(106, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 50)(109, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "123 files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "256 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 54)(116, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 50)(119, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Media Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "24 files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "3.4 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 54)(126, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 50)(129, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Other Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "458 files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "3 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 54)(136, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 50)(139, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Unknown Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "57 files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "178 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 61)(146, "div", 19)(147, "div", 20)(148, "div", 62)(149, "div", 51)(150, "div", 63)(151, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 67)(155, "div", 68)(156, "div", 69)(157, "div", 20)(158, "div", 47)(159, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h5", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Google Drive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 75)(166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "45.5 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "50 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 68)(173, "div", 69)(174, "div", 20)(175, "div", 47)(176, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h5", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Dropbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 75)(183, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "1,2 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "3 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 68)(190, "div", 69)(191, "div", 20)(192, "div", 47)(193, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h5", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "OneDrive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 75)(200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "2,5 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "3 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Folders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 67)(209, "div", 68)(210, "div", 69)(211, "div", 20)(212, "div", 47)(213, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 88)(217, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h6", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "15 files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 68)(225, "div", 69)(226, "div", 20)(227, "div", 47)(228, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h6", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "345 files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 68)(237, "div", 69)(238, "div", 20)(239, "div", 47)(240, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 93)(244, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h6", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "143 files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 47)(250, "div")(251, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Recent Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 9)(254, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_Template_a_click_254_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 96)(257, "table", 97)(258, "thead")(259, "tr")(260, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Last Modified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tbody")(269, "tr")(270, "td")(271, "div", 47)(272, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Competitor Analysis Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Only you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Sep 3, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "tr")(283, "td")(284, "div", 47)(285, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "How to Create a Case Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "3 members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Jun 12, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "tr")(296, "td")(297, "div", 47)(298, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Landing Page Structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "10 members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Jul 17, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "tr")(309, "td")(310, "div", 47)(311, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Meeting Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "5 members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Aug 28, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "tr")(322, "td")(323, "div", 47)(324, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Project Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Only you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Aug 17, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "tr")(335, "td")(336, "div", 47)(337, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Review Checklist Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "7 members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Sep 8, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "tr")(348, "td")(349, "div", 47)(350, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "How to Create a Case Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "3 members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Jun 12, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "tr")(361, "td")(362, "div", 47)(363, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Landing Page Structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "10 members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Jul 17, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tr")(374, "td")(375, "div", 47)(376, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Review Checklist Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "7 members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Sep 8, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLW1hbmFnZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 73005:
/*!************************************************************************!*\
  !*** ./src/app/application/fullcalendar/date-time-picker.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR": () => (/* binding */ DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "DateTimePickerComponent": () => (/* binding */ DateTimePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 28920);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 97064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 14190);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 8110);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 50586);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 81385);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 62131);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 77722);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 11625);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 46119);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 12366);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 35494);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);






const DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => DateTimePickerComponent),
    multi: true
};
class DateTimePickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.onChangeCallback = () => { };
    }
    writeValue(date) {
        this.date = date;
        this.dateStruct = {
            day: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date),
            month: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date) + 1,
            year: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(date)
        };
        this.timeStruct = {
            second: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(date),
            minute: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(date),
            hour: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(date)
        };
        this.cdr.detectChanges();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) { }
    updateDate() {
        const newDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.date, this.dateStruct.day), this.dateStruct.month - 1), this.dateStruct.year);
        this.onChangeCallback(newDate);
    }
    updateTime() {
        const newDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(this.date, this.timeStruct.second), this.timeStruct.minute), this.timeStruct.hour);
        this.onChangeCallback(newDate);
    }
}
DateTimePickerComponent.ɵfac = function DateTimePickerComponent_Factory(t) { return new (t || DateTimePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DateTimePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DateTimePickerComponent, selectors: [["mwl-demo-utils-date-time-picker"]], inputs: { placeholder: "placeholder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR])], decls: 9, vars: 4, consts: [[1, "form-inline"], [1, "form-group"], [1, "input-group"], ["readonly", "", "name", "date", "ngbDatepicker", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["datePicker", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "bx", "bx-calendar-alt"], [3, "ngModel", "meridian", "ngModelChange"]], template: function DateTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DateTimePickerComponent_Template_input_ngModelChange_3_listener($event) { return ctx.dateStruct = $event; })("ngModelChange", function DateTimePickerComponent_Template_input_ngModelChange_3_listener() { return ctx.updateDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DateTimePickerComponent_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngb-timepicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DateTimePickerComponent_Template_ngb_timepicker_ngModelChange_8_listener($event) { return ctx.timeStruct = $event; })("ngModelChange", function DateTimePickerComponent_Template_ngb_timepicker_ngModelChange_8_listener() { return ctx.updateTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholder)("ngModel", ctx.dateStruct);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.timeStruct)("meridian", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTimepicker], styles: [".form-group[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLFdBQVc7SUFDYiIsImZpbGUiOiJkYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgIl19 */"] });


/***/ }),

/***/ 8869:
/*!********************************************************************!*\
  !*** ./src/app/application/fullcalendar/fullcalendar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullcalendarComponent": () => (/* binding */ FullcalendarComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 88393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 51618);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 22757);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 53470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 33200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time-picker.component */ 73005);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar */ 21440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);








const _c0 = ["modalContent"];
function FullcalendarComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48)(1, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_ng_template_28_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const close_r5 = restoredCtx.close; return close_r5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 52)(7, "form", 53)(8, "div", 54)(9, "div", 55)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Event Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FullcalendarComponent_ng_template_28_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r8.modalData == null ? null : ctx_r8.modalData.event).title = $event; })("keyup", function FullcalendarComponent_ng_template_28_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 57)(14, "div", 22)(15, "div", 55)(16, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Primary Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FullcalendarComponent_ng_template_28_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r10.modalData == null ? null : ctx_r10.modalData.event.color).primary = $event; })("change", function FullcalendarComponent_ng_template_28_Template_input_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 22)(20, "div", 55)(21, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Secondary Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FullcalendarComponent_ng_template_28_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r12.modalData == null ? null : ctx_r12.modalData.event.color).secondary = $event; })("change", function FullcalendarComponent_ng_template_28_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 57)(25, "div", 22)(26, "div", 61)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Starts At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mwl-demo-utils-date-time-picker", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FullcalendarComponent_ng_template_28_Template_mwl_demo_utils_date_time_picker_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r14.modalData == null ? null : ctx_r14.modalData.event).start = $event; })("ngModelChange", function FullcalendarComponent_ng_template_28_Template_mwl_demo_utils_date_time_picker_ngModelChange_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 22)(31, "div", 61)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Ends At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mwl-demo-utils-date-time-picker", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FullcalendarComponent_ng_template_28_Template_mwl_demo_utils_date_time_picker_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r16.modalData == null ? null : ctx_r16.modalData.event).end = $event; })("ngModelChange", function FullcalendarComponent_ng_template_28_Template_mwl_demo_utils_date_time_picker_ngModelChange_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 64)(36, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_ng_template_28_Template_button_click_36_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const close_r5 = restoredCtx.close; return close_r5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalData == null ? null : ctx_r1.modalData.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.modalData == null ? null : ctx_r1.modalData.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.modalData == null ? null : ctx_r1.modalData.event.color.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.modalData == null ? null : ctx_r1.modalData.event.color.secondary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.modalData == null ? null : ctx_r1.modalData.event.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.modalData == null ? null : ctx_r1.modalData.event.end);
} }
function FullcalendarComponent_mwl_calendar_month_view_73_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-month-view", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dayClicked", function FullcalendarComponent_mwl_calendar_month_view_73_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.dayClicked($event.day); })("eventClicked", function FullcalendarComponent_mwl_calendar_month_view_73_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.handleEvent("Clicked", $event.event); })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_month_view_73_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh)("activeDayIsOpen", ctx_r2.activeDayIsOpen);
} }
function FullcalendarComponent_mwl_calendar_week_view_74_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function FullcalendarComponent_mwl_calendar_week_view_74_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.handleEvent("Clicked", $event.event); })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_week_view_74_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx_r3.viewDate)("events", ctx_r3.events)("refresh", ctx_r3.refresh);
} }
function FullcalendarComponent_mwl_calendar_day_view_75_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-day-view", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function FullcalendarComponent_mwl_calendar_day_view_75_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.handleEvent("Clicked", $event.event); })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_day_view_75_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx_r4.viewDate)("events", ctx_r4.events)("refresh", ctx_r4.refresh);
} }
const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
class FullcalendarComponent {
    constructor(modal) {
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: ({ event }) => {
                    this.handleEvent('Edit this event', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: ({ event }) => {
                    this.events = this.events.filter(iEvent => iEvent !== event);
                    this.handleEvent('This event is deleted!', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.events = [
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()), 1),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), 3),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    dayClicked({ date, events }) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(date, this.viewDate)) {
            if (((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    addEvent() {
        this.newEvent = {
            title: 'New event',
            start: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()),
            end: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            },
            actions: this.actions,
        };
        this.events.push(this.newEvent);
        // this.refresh.next();
        this.handleEvent('Add new event', this.newEvent);
        this.refresh.next();
    }
}
FullcalendarComponent.ɵfac = function FullcalendarComponent_Factory(t) { return new (t || FullcalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal)); };
FullcalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FullcalendarComponent, selectors: [["app-fullcalendar"]], viewQuery: function FullcalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 76, vars: 31, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-auto"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-lg-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], ["modalContent", ""], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "row", "d-flex", "flex-wrap", "justify-content-md-between", "mb-3", "no-gutters"], [1, "col"], [1, "btn-group", "d-none", "d-sm-none", "d-md-none", "d-lg-block"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-danger", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn-group", "d-block", "d-sm-block", "d-md-block", "d-lg-none"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", "btn-sm", "pb-0", "bx", "bx-caret-left", 3, "view", "viewDate", "viewDateChange"], [1, "icon", "icon-arrows-left"], ["mwlCalendarToday", "", 1, "btn", "btn-danger", "btn-sm", "pb-0", "bx", "bx-caret-down", 3, "viewDate", "viewDateChange"], [1, "icon", "icon-arrows-sign-down"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", "btn-sm", "pb-0", "bx", "bx-caret-right", 3, "view", "viewDate", "viewDateChange"], [1, "icon", "icon-arrows-right"], [1, "col", "text-center", "align-self-center"], [1, "text-uppercase", "mb-0"], [1, "col", "text-end"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "btn-icon-icon", 3, "click"], [1, "lni", "lni-menu"], [1, "lni", "lni-list"], [1, "lni", "lni-line-dashed"], [1, "row"], [1, "col-12"], [1, "btn", "btn-primary", "float-right", 3, "click"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "btn", "btn-outline-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["action", "#", 1, "form", "form-horizontal"], [1, "form-body"], [1, "form-group"], ["type", "text", "name", "event-title", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "row", "row-cols-1", "row-cols-md-2"], [1, "m-3"], ["type", "color", "name", "primary-color", 1, "mt-3", 3, "ngModel", "ngModelChange", "change"], ["type", "color", "name", "secondary-color", 1, "mt-3", 3, "ngModel", "ngModelChange", "change"], [1, "form-group", "mt-3"], ["name", "starts-at", "placeholder", "Not set", 3, "ngModel", "ngModelChange"], ["name", "ends-at", "placeholder", "Not set", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"]], template: function FullcalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Calender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_19_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_21_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_26_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, FullcalendarComponent_ng_template_28_Template, 38, 6, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "div", 22)(35, "div", 23)(36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_a_viewDateChange_36_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_a_viewDateChange_38_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_a_viewDateChange_40_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 27)(43, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_a_viewDateChange_43_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_a_viewDateChange_45_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_a_viewDateChange_47_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 34)(50, "h6", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 36)(54, "div", 23)(55, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_55_listener() { return ctx.view = "month"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_57_listener() { return ctx.view = "week"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_59_listener() { return ctx.view = "day"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27)(62, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_62_listener() { return ctx.view = "month"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_64_listener() { return ctx.view = "week"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_a_click_66_listener() { return ctx.view = "day"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 42)(69, "div", 43)(70, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FullcalendarComponent_Template_button_click_70_listener() { return ctx.addEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Add Event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, FullcalendarComponent_mwl_calendar_month_view_73_Template, 1, 4, "mwl-calendar-month-view", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, FullcalendarComponent_mwl_calendar_week_view_74_Template, 1, 3, "mwl-calendar-week-view", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, FullcalendarComponent_mwl_calendar_day_view_75_Template, 1, 3, "mwl-calendar-day-view", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](52, 27, ctx.viewDate, ctx.view + "ViewTitle", "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.view === "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.view === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.view === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.view === "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.view === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.view === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "day");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _date_time_picker_component__WEBPACK_IMPORTED_MODULE_0__.DateTimePickerComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_13__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_13__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_13__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, angular_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarMonthViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarWeekViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarDayViewComponent], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_13__["ɵi"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 89387:
/*!**********************************************************!*\
  !*** ./src/app/application/invoice/invoice.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceComponent": () => (/* binding */ InvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class InvoiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) { return new (t || InvoiceComponent)(); };
InvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvoiceComponent, selectors: [["app-invoice"]], decls: 174, vars: 0, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "ms-auto"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "split-bg-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "visually-hidden"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-lg-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "card"], [1, "card-body"], ["id", "invoice"], [1, "toolbar", "hidden-print"], [1, "text-end"], ["type", "button", 1, "btn", "btn-dark", "m-1"], [1, "fa", "fa-print"], ["type", "button", 1, "btn", "btn-danger"], [1, "fa", "fa-file-pdf-o"], [1, "invoice", "overflow-auto"], [1, "row"], [1, "col"], ["src", "assets/images/logo-icon.png", "width", "80", "alt", ""], [1, "col", "company-details"], [1, "name"], ["target", "_blank", "href", "#", 3, "click"], [1, "row", "contacts"], [1, "col", "invoice-to"], [1, "text-gray-light"], [1, "to"], [1, "address"], [1, "email"], ["href", "mailto:john@example.com"], [1, "col", "invoice-details"], [1, "invoice-id"], [1, "date"], [1, "text-left"], [1, "text-right"], [1, "no"], [1, "unit"], [1, "qty"], [1, "total"], ["colspan", "2"], [1, "thanks"], [1, "notices"], [1, "notice"]], template: function InvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_19_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_21_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_23_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_26_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Export as PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26)(41, "div")(42, "header")(43, "div", 27)(44, "div", 28)(45, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_45_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30)(48, "h2", 31)(49, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_49_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Arboshiki ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "455 Foggy Heights, AZ 85004, US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "(123) 456-789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "company@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "main")(58, "div", 33)(59, "div", 34)(60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "INVOICE TO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "796 Silver Harbour, TX 79273, US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38)(67, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "john@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 40)(70, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "INVOICE 3-2-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Date of Invoice: 01/10/2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Due Date: 30/10/2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "table")(77, "thead")(78, "tr")(79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "DESCRIPTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "HOUR PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "HOURS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tbody")(90, "tr")(91, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 43)(94, "h3")(95, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_95_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Youtube channel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_a_click_97_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Useful videos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " to improve your Javascript skills. Subscribe and stay tuned :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "$0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "$0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr")(107, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td", 43)(110, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Website Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Creating a recognizable design solution based on the company's existing visual identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "$40.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "$1,200.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr")(120, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td", 43)(123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Website Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Developing a Content Management System-based Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "$40.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "$3,200.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr")(133, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 43)(136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Search Engines Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Optimize the site for search engines (SEO)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "$40.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "$800.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tfoot")(146, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "td", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "SUBTOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "$5,200.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "td", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "TAX 25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "$1,300.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "td", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "GRAND TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "$6,500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Thank you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 51)(167, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "NOTICE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "A finance charge of 1.5% will be made on unpaid balances after 30 days.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Invoice was created on a computer and is valid without the signature and seal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 70027:
/*!**********************************************************************!*\
  !*** ./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getDef(f, d) {
    if (typeof f === 'undefined') {
        return typeof d === 'undefined' ? f : d;
    }

    return f;
}
function boolean(func, def) {

    func = getDef(func, def);

    if (typeof func === 'function') {
        return function f() {
            var arguments$1 = arguments;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments$1[_key];
            }

            return !!func.apply(this, args);
        };
    }

    return !!func ? function () {
        return true;
    } : function () {
        return false;
    };
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Returns `true` if provided input is Element.
 * @name isElement
 * @param {*} [input]
 * @returns {boolean}
 */
var isElement$1 = function (input) {
  return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
};

function indexOfElement(elements, element){
    element = resolveElement(element, true);
    if(!isElement$1(element)) { return -1; }
    for(var i=0; i<elements.length; i++){
        if(elements[i] === element){
            return i;
        }
    }
    return -1;
}

function hasElement(elements, element){
    return -1 !== indexOfElement(elements, element);
}

function pushElements(elements, toAdd){

    for(var i=0; i<toAdd.length; i++){
        if(!hasElement(elements, toAdd[i]))
            { elements.push(toAdd[i]); }
    }

    return toAdd;
}

function addElements(elements){
    var arguments$1 = arguments;

    var toAdd = [], len = arguments.length - 1;
    while ( len-- > 0 ) { toAdd[ len ] = arguments$1[ len + 1 ]; }

    toAdd = toAdd.map(resolveElement);
    return pushElements(elements, toAdd);
}

function removeElements(elements){
    var arguments$1 = arguments;

    var toRemove = [], len = arguments.length - 1;
    while ( len-- > 0 ) { toRemove[ len ] = arguments$1[ len + 1 ]; }

    return toRemove.map(resolveElement).reduce(function (last, e){

        var index = indexOfElement(elements, e);

        if(index !== -1)
            { return last.concat(elements.splice(index, 1)); }
        return last;
    }, []);
}

function resolveElement(element, noThrow){
    if(typeof element === 'string'){
        try{
            return document.querySelector(element);
        }catch(e){
            throw e;
        }

    }

    if(!isElement$1(element) && !noThrow){
        throw new TypeError((element + " is not a DOM element."));
    }
    return element;
}

function createPointCB(object, options) {

    // A persistent object (as opposed to returned object) is used to save memory
    // This is good to prevent layout thrashing, or for games, and such

    // NOTE
    // This uses IE fixes which should be OK to remove some day. :)
    // Some speed will be gained by removal of these.

    // pointCB should be saved in a variable on return
    // This allows the usage of element.removeEventListener

    options = options || {};

    var allowUpdate = boolean(options.allowUpdate, true);

    /*if(typeof options.allowUpdate === 'function'){
        allowUpdate = options.allowUpdate;
    }else{
        allowUpdate = function(){return true;};
    }*/

    return function pointCB(event) {

        event = event || window.event; // IE-ism
        object.target = event.target || event.srcElement || event.originalTarget;
        object.element = this;
        object.type = event.type;

        if (!allowUpdate(event)) {
            return;
        }

        // Support touch
        // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644

        if (event.targetTouches) {
            object.x = event.targetTouches[0].clientX;
            object.y = event.targetTouches[0].clientY;
            object.pageX = event.targetTouches[0].pageX;
            object.pageY = event.targetTouches[0].pageY;
            object.screenX = event.targetTouches[0].screenX;
            object.screenY = event.targetTouches[0].screenY;
        } else {

            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            // NOTE Hopefully this can be removed soon.

            if (event.pageX === null && event.clientX !== null) {
                var eventDoc = event.target && event.target.ownerDocument || document;
                var doc = eventDoc.documentElement;
                var body = eventDoc.body;

                object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            } else {
                object.pageX = event.pageX;
                object.pageY = event.pageY;
            }

            // pageX, and pageY change with page scroll
            // so we're not going to use those for x, and y.
            // NOTE Most browsers also alias clientX/Y with x/y
            // so that's something to consider down the road.

            object.x = event.clientX;
            object.y = event.clientY;

            object.screenX = event.screenX;
            object.screenY = event.screenY;
        }

        object.clientX = object.x;
        object.clientY = object.y;
    };

    //NOTE Remember accessibility, Aria roles, and labels.
}

function createWindowRect() {
    var props = {
        top: { value: 0, enumerable: true },
        left: { value: 0, enumerable: true },
        right: { value: window.innerWidth, enumerable: true },
        bottom: { value: window.innerHeight, enumerable: true },
        width: { value: window.innerWidth, enumerable: true },
        height: { value: window.innerHeight, enumerable: true },
        x: { value: 0, enumerable: true },
        y: { value: 0, enumerable: true }
    };

    if (Object.create) {
        return Object.create({}, props);
    } else {
        var rect = {};
        Object.defineProperties(rect, props);
        return rect;
    }
}

function getClientRect(el) {
    if (el === window) {
        return createWindowRect();
    } else {
        try {
            var rect = el.getBoundingClientRect();
            if (rect.x === undefined) {
                rect.x = rect.left;
                rect.y = rect.top;
            }
            return rect;
        } catch (e) {
            throw new TypeError("Can't call getBoundingClientRect on " + el);
        }
    }
}

function pointInside(point, el) {
    var rect = getClientRect(el);
    return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
}

var objectCreate = void 0;
if (typeof Object.create != 'function') {
  objectCreate = function (undefined$1) {
    var Temp = function Temp() {};
    return function (prototype, propertiesObject) {
      if (prototype !== Object(prototype) && prototype !== null) {
        throw TypeError('Argument must be an object, or null');
      }
      Temp.prototype = prototype || {};
      var result = new Temp();
      Temp.prototype = null;
      if (propertiesObject !== undefined$1) {
        Object.defineProperties(result, propertiesObject);
      }

      // to imitate the case of Object.create(null)
      if (prototype === null) {
        result.__proto__ = null;
      }
      return result;
    };
  }();
} else {
  objectCreate = Object.create;
}

var objectCreate$1 = objectCreate;

var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

function createDispatcher(element) {

    var defaultSettings = {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 1,
        relatedTarget: null,
        region: null
    };

    if (element !== undefined) {
        element.addEventListener('mousemove', onMove);
    }

    function onMove(e) {
        for (var i = 0; i < mouseEventProps.length; i++) {
            defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
        }
    }

    var dispatch = function () {
        if (MouseEvent) {
            return function m1(element, initMove, data) {
                var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove));

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        } else if (typeof document.createEvent === 'function') {
            return function m2(element, initMove, data) {
                var settings = createMoveInit(defaultSettings, initMove);
                var evt = document.createEvent('MouseEvents');

                evt.initMouseEvent("mousemove", true, //can bubble
                true, //cancelable
                window, //view
                0, //detail
                settings.screenX, //0, //screenX
                settings.screenY, //0, //screenY
                settings.clientX, //80, //clientX
                settings.clientY, //20, //clientY
                settings.ctrlKey, //false, //ctrlKey
                settings.altKey, //false, //altKey
                settings.shiftKey, //false, //shiftKey
                settings.metaKey, //false, //metaKey
                settings.button, //0, //button
                settings.relatedTarget //null //relatedTarget
                );

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        } else if (typeof document.createEventObject === 'function') {
            return function m3(element, initMove, data) {
                var evt = document.createEventObject();
                var settings = createMoveInit(defaultSettings, initMove);
                for (var name in settings) {
                    evt[name] = settings[name];
                }

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        }
    }();

    function destroy() {
        if (element) { element.removeEventListener('mousemove', onMove, false); }
        defaultSettings = null;
    }

    return {
        destroy: destroy,
        dispatch: dispatch
    };
}

function createMoveInit(defaultSettings, initMove) {
    initMove = initMove || {};
    var settings = objectCreate$1(defaultSettings);
    for (var i = 0; i < mouseEventProps.length; i++) {
        if (initMove[mouseEventProps[i]] !== undefined) { settings[mouseEventProps[i]] = initMove[mouseEventProps[i]]; }
    }

    return settings;
}

function setSpecial(e, data) {
    console.log('data ', data);
    e.data = data || {};
    e.dispatched = 'mousemove';
}

var prefix = [ 'webkit', 'moz', 'ms', 'o' ];

var requestFrame = (function () {

    if (typeof window === "undefined") {
        return function () {};
    }

    for ( var i = 0, limit = prefix.length ; i < limit && ! window.requestAnimationFrame ; ++i ) {
        window.requestAnimationFrame = window[ prefix[ i ] + 'RequestAnimationFrame' ];
    }

    if ( ! window.requestAnimationFrame ) {
        var lastTime = 0;

        window.requestAnimationFrame = function (callback) {
            var now   = new Date().getTime();
            var ttc   = Math.max( 0, 16 - now - lastTime );
            var timer = window.setTimeout( function () { return callback( now + ttc ); }, ttc );

            lastTime = now + ttc;

            return timer;
        };
    }

    return window.requestAnimationFrame.bind( window );
})();

var cancelFrame = (function () {

    if (typeof window === "undefined") {
        return function () {};
    }

    for ( var i = 0, limit = prefix.length ; i < limit && ! window.cancelAnimationFrame ; ++i ) {
        window.cancelAnimationFrame = window[ prefix[ i ] + 'CancelAnimationFrame' ] || window[ prefix[ i ] + 'CancelRequestAnimationFrame' ];
    }

    if ( ! window.cancelAnimationFrame ) {
        window.cancelAnimationFrame = function (timer) {
            window.clearTimeout( timer );
        };
    }

    return window.cancelAnimationFrame.bind( window );
})();

function AutoScroller(elements, options){
    if ( options === void 0 ) options = {};

    var self = this;
    var maxSpeed = 4, scrolling = false;

    if (typeof options.margin !== 'object') {
        var margin = options.margin || -1;

        this.margin = {
            left: margin,
            right: margin,
            top: margin,
            bottom: margin
        };
    } else {
        this.margin = options.margin;
    }

    //this.scrolling = false;
    this.scrollWhenOutside = options.scrollWhenOutside || false;

    var point = {},
        pointCB = createPointCB(point),
        dispatcher = createDispatcher(),
        down = false;

    window.addEventListener('mousemove', pointCB, false);
    window.addEventListener('touchmove', pointCB, false);

    if(!isNaN(options.maxSpeed)){
        maxSpeed = options.maxSpeed;
    }

    if (typeof maxSpeed !== 'object') {
        maxSpeed = {
            left: maxSpeed,
            right: maxSpeed,
            top: maxSpeed,
            bottom: maxSpeed
        };
    }

    this.autoScroll = boolean(options.autoScroll);
    this.syncMove = boolean(options.syncMove, false);

    this.destroy = function(forceCleanAnimation) {
        window.removeEventListener('mousemove', pointCB, false);
        window.removeEventListener('touchmove', pointCB, false);
        window.removeEventListener('mousedown', onDown, false);
        window.removeEventListener('touchstart', onDown, false);
        window.removeEventListener('mouseup', onUp, false);
        window.removeEventListener('touchend', onUp, false);
        window.removeEventListener('pointerup', onUp, false);
        window.removeEventListener('mouseleave', onMouseOut, false);

        window.removeEventListener('mousemove', onMove, false);
        window.removeEventListener('touchmove', onMove, false);

        window.removeEventListener('scroll', setScroll, true);
        elements = [];
        if(forceCleanAnimation){
          cleanAnimation();
        }
    };

    this.add = function(){
        var element = [], len = arguments.length;
        while ( len-- ) element[ len ] = arguments[ len ];

        addElements.apply(void 0, [ elements ].concat( element ));
        return this;
    };

    this.remove = function(){
        var element = [], len = arguments.length;
        while ( len-- ) element[ len ] = arguments[ len ];

        return removeElements.apply(void 0, [ elements ].concat( element ));
    };

    var hasWindow = null, windowAnimationFrame;

    if(Object.prototype.toString.call(elements) !== '[object Array]'){
        elements = [elements];
    }

    (function(temp){
        elements = [];
        temp.forEach(function(element){
            if(element === window){
                hasWindow = window;
            }else {
                self.add(element);
            }
        });
    }(elements));

    Object.defineProperties(this, {
        down: {
            get: function(){ return down; }
        },
        maxSpeed: {
            get: function(){ return maxSpeed; }
        },
        point: {
            get: function(){ return point; }
        },
        scrolling: {
            get: function(){ return scrolling; }
        }
    });

    var current = null, animationFrame;

    window.addEventListener('mousedown', onDown, false);
    window.addEventListener('touchstart', onDown, false);
    window.addEventListener('mouseup', onUp, false);
    window.addEventListener('touchend', onUp, false);

    /*
    IE does not trigger mouseup event when scrolling.
    It is a known issue that Microsoft won't fix.
    https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
    IE supports pointer events instead
    */
    window.addEventListener('pointerup', onUp, false);

    window.addEventListener('mousemove', onMove, false);
    window.addEventListener('touchmove', onMove, false);

    window.addEventListener('mouseleave', onMouseOut, false);

    window.addEventListener('scroll', setScroll, true);

    function setScroll(e){

        for(var i=0; i<elements.length; i++){
            if(elements[i] === e.target){
                scrolling = true;
                break;
            }
        }

        if(scrolling){
            requestFrame(function (){ return scrolling = false; });
        }
    }

    function onDown(){
        down = true;
    }

    function onUp(){
        down = false;
        cleanAnimation();
    }
    function cleanAnimation(){
      cancelFrame(animationFrame);
      cancelFrame(windowAnimationFrame);
    }
    function onMouseOut(){
        down = false;
    }

    function getTarget(target){
        if(!target){
            return null;
        }

        if(current === target){
            return target;
        }

        if(hasElement(elements, target)){
            return target;
        }

        while(target = target.parentNode){
            if(hasElement(elements, target)){
                return target;
            }
        }

        return null;
    }

    function getElementUnderPoint(){
        var underPoint = null;

        for(var i=0; i<elements.length; i++){
            if(inside(point, elements[i])){
                underPoint = elements[i];
            }
        }

        return underPoint;
    }


    function onMove(event){

        if(!self.autoScroll()) { return; }

        if(event['dispatched']){ return; }

        var target = event.target, body = document.body;

        if(current && !inside(point, current)){
            if(!self.scrollWhenOutside){
                current = null;
            }
        }

        if(target && target.parentNode === body){
            //The special condition to improve speed.
            target = getElementUnderPoint();
        }else {
            target = getTarget(target);

            if(!target){
                target = getElementUnderPoint();
            }
        }


        if(target && target !== current){
            current = target;
        }

        if(hasWindow){
            cancelFrame(windowAnimationFrame);
            windowAnimationFrame = requestFrame(scrollWindow);
        }


        if(!current){
            return;
        }

        cancelFrame(animationFrame);
        animationFrame = requestFrame(scrollTick);
    }

    function scrollWindow(){
        autoScroll(hasWindow);

        cancelFrame(windowAnimationFrame);
        windowAnimationFrame = requestFrame(scrollWindow);
    }

    function scrollTick(){

        if(!current){
            return;
        }

        autoScroll(current);

        cancelFrame(animationFrame);
        animationFrame = requestFrame(scrollTick);

    }


    function autoScroll(el){
        var rect = getClientRect(el), scrollx, scrolly;

        if(point.x < rect.left + self.margin.left){
            scrollx = Math.floor(
                Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left
            );
        }else if(point.x > rect.right - self.margin.right){
            scrollx = Math.ceil(
                Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right
            );
        }else {
            scrollx = 0;
        }

        if(point.y < rect.top + self.margin.top){
            scrolly = Math.floor(
                Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top
            );
        }else if(point.y > rect.bottom - self.margin.bottom){
            scrolly = Math.ceil(
                Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom
            );
        }else {
            scrolly = 0;
        }

        if(self.syncMove()){
            /*
            Notes about mousemove event dispatch.
            screen(X/Y) should need to be updated.
            Some other properties might need to be set.
            Keep the syncMove option default false until all inconsistencies are taken care of.
            */
            dispatcher.dispatch(el, {
                pageX: point.pageX + scrollx,
                pageY: point.pageY + scrolly,
                clientX: point.x + scrollx,
                clientY: point.y + scrolly
            });
        }

        setTimeout(function (){

            if(scrolly){
                scrollY(el, scrolly);
            }

            if(scrollx){
                scrollX(el, scrollx);
            }

        });
    }

    function scrollY(el, amount){
        if(el === window){
            window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
        }else {
            el.scrollTop += amount;
        }
    }

    function scrollX(el, amount){
        if(el === window){
            window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
        }else {
            el.scrollLeft += amount;
        }
    }

}

function AutoScrollerFactory(element, options){
    return new AutoScroller(element, options);
}

function inside(point, el, rect){
    if(!rect){
        return pointInside(point, el);
    }else {
        return (point.y > rect.top && point.y < rect.bottom &&
                point.x > rect.left && point.x < rect.right);
    }
}

/*
git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
git push -u origin master
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoScrollerFactory);


/***/ }),

/***/ 21440:
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarA11y": () => (/* binding */ CalendarA11y),
/* harmony export */   "CalendarAngularDateFormatter": () => (/* binding */ CalendarAngularDateFormatter),
/* harmony export */   "CalendarCommonModule": () => (/* binding */ CalendarCommonModule),
/* harmony export */   "CalendarDateFormatter": () => (/* binding */ CalendarDateFormatter),
/* harmony export */   "CalendarDayModule": () => (/* binding */ CalendarDayModule),
/* harmony export */   "CalendarDayViewComponent": () => (/* binding */ CalendarDayViewComponent),
/* harmony export */   "CalendarEventTimesChangedEventType": () => (/* binding */ CalendarEventTimesChangedEventType),
/* harmony export */   "CalendarEventTitleFormatter": () => (/* binding */ CalendarEventTitleFormatter),
/* harmony export */   "CalendarModule": () => (/* binding */ CalendarModule),
/* harmony export */   "CalendarMomentDateFormatter": () => (/* binding */ CalendarMomentDateFormatter),
/* harmony export */   "CalendarMonthModule": () => (/* binding */ CalendarMonthModule),
/* harmony export */   "CalendarMonthViewComponent": () => (/* binding */ CalendarMonthViewComponent),
/* harmony export */   "CalendarNativeDateFormatter": () => (/* binding */ CalendarNativeDateFormatter),
/* harmony export */   "CalendarUtils": () => (/* binding */ CalendarUtils),
/* harmony export */   "CalendarView": () => (/* binding */ CalendarView),
/* harmony export */   "CalendarWeekModule": () => (/* binding */ CalendarWeekModule),
/* harmony export */   "CalendarWeekViewComponent": () => (/* binding */ CalendarWeekViewComponent),
/* harmony export */   "DAYS_OF_WEEK": () => (/* reexport safe */ calendar_utils__WEBPACK_IMPORTED_MODULE_1__.DAYS_OF_WEEK),
/* harmony export */   "DateAdapter": () => (/* binding */ DateAdapter),
/* harmony export */   "MOMENT": () => (/* binding */ MOMENT),
/* harmony export */   "collapseAnimation": () => (/* binding */ collapseAnimation),
/* harmony export */   "getWeekViewPeriod": () => (/* binding */ getWeekViewPeriod),
/* harmony export */   "ɵa": () => (/* binding */ CalendarOpenDayEventsComponent),
/* harmony export */   "ɵb": () => (/* binding */ CalendarEventActionsComponent),
/* harmony export */   "ɵc": () => (/* binding */ CalendarEventTitleComponent),
/* harmony export */   "ɵd": () => (/* binding */ CalendarTooltipWindowComponent),
/* harmony export */   "ɵe": () => (/* binding */ CalendarTooltipDirective),
/* harmony export */   "ɵf": () => (/* binding */ CalendarPreviousViewDirective),
/* harmony export */   "ɵg": () => (/* binding */ CalendarNextViewDirective),
/* harmony export */   "ɵh": () => (/* binding */ CalendarTodayDirective),
/* harmony export */   "ɵi": () => (/* binding */ CalendarDatePipe),
/* harmony export */   "ɵj": () => (/* binding */ CalendarEventTitlePipe),
/* harmony export */   "ɵk": () => (/* binding */ CalendarA11yPipe),
/* harmony export */   "ɵl": () => (/* binding */ ClickDirective),
/* harmony export */   "ɵm": () => (/* binding */ KeydownEnterDirective),
/* harmony export */   "ɵn": () => (/* binding */ CalendarMonthCellComponent),
/* harmony export */   "ɵo": () => (/* binding */ CalendarMonthViewHeaderComponent),
/* harmony export */   "ɵp": () => (/* binding */ CalendarWeekViewHeaderComponent),
/* harmony export */   "ɵq": () => (/* binding */ CalendarWeekViewEventComponent),
/* harmony export */   "ɵr": () => (/* binding */ CalendarWeekViewHourSegmentComponent),
/* harmony export */   "ɵs": () => (/* binding */ CalendarWeekViewCurrentTimeMarkerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 93450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! positioning */ 47381);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 66426);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calendar-utils */ 61916);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-draggable-droppable */ 81802);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-resizable-element */ 86115);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 31631);












const _c0 = function (a0) { return { action: a0 }; };
function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const action_r7 = restoredCtx.$implicit; const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).event; return action_r7.onClick({ event: event_r3, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const action_r7 = restoredCtx.$implicit; const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).event; return action_r7.onClick({ event: event_r3, sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, action_r7), "actionButtonLabel"));
} }
function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const event_r3 = ctx_r13.event;
    const trackByActionId_r4 = ctx_r13.trackByActionId;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
} }
function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
} if (rf & 2) {
    const event_r3 = ctx.event;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", event_r3.actions);
} }
function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { event: a0, trackByActionId: a1 }; };
const _c2 = function () { return {}; };
function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
} if (rf & 2) {
    const event_r3 = ctx.event;
    const view_r4 = ctx.view;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 2, event_r3.title, view_r4, event_r3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c2), "hideEventTitle"));
} }
function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) { }
const _c3 = function (a0, a1) { return { event: a0, view: a1 }; };
function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contents_r3 = ctx.contents;
    const placement_r4 = ctx.placement;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", contents_r3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) { }
const _c4 = function (a0, a1, a2) { return { contents: a0, placement: a1, event: a2 }; };
const _c5 = function (a0) { return { backgroundColor: a0 }; };
function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const day_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.dayClicked.emit({ day: day_r3, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const day_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.dayClicked.emit({ day: day_r3, sourceEvent: $event }); })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.toggleDayHighlight($event.event, true); })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.toggleDayHighlight($event.event, false); })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const day_r3 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom); })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.eventClicked.emit({ event: $event.event, sourceEvent: $event.sourceEvent }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c5, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c2), "monthCellTabIndex"));
} }
function CalendarMonthViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mwl-calendar-open-day-events", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.eventClicked.emit({ event: $event.event, sourceEvent: $event.sourceEvent }); })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowIndex_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
} }
function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const day_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.columnHeaderClicked.emit({ isoDayNumber: day_r7.day, sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r7.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), " ");
} }
function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
} }
function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) { }
const _c6 = function (a0, a1, a2) { return { days: a0, locale: a1, trackByWeekDayHeaderDate: a2 }; };
function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](day_r3.badgeTotal);
} }
const _c7 = function (a0, a1) { return { event: a0, draggedFrom: a1 }; };
const _c8 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c9 = function () { return { delay: 300, delta: 30 }; };
function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const event_r19 = restoredCtx.$implicit; const highlightDay_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).highlightDay; return highlightDay_r7.emit({ event: event_r19 }); })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const event_r19 = restoredCtx.$implicit; const unhighlightDay_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).unhighlightDay; return unhighlightDay_r8.emit({ event: event_r19 }); })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const event_r19 = restoredCtx.$implicit; const eventClicked_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked; return eventClicked_r9.emit({ event: event_r19, sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r19 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
    const tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
    const tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
    const tooltipDelay_r12 = ctx_r27.tooltipDelay;
    const day_r3 = ctx_r27.day;
    const validateDrag_r14 = ctx_r27.validateDrag;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", event_r19.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c5, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c7, event_r19, day_r3))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](27, _c8, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c2), "hideMonthCellEvents"));
} }
function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const day_r3 = ctx_r28.day;
    const trackByEventId_r13 = ctx_r28.trackByEventId;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
} }
const _c10 = function (a0, a1) { return { day: a0, locale: a1 }; };
function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
} if (rf & 2) {
    const day_r3 = ctx.day;
    const locale_r5 = ctx.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c10, day_r3, locale_r5), "monthCell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", day_r3.badgeTotal > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](6, 7, day_r3.date, "monthViewDayNumber", locale_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", day_r3.events.length > 0);
} }
function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) { }
const _c11 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { day: a0, openDay: a1, locale: a2, tooltipPlacement: a3, highlightDay: a4, unhighlightDay: a5, eventClicked: a6, tooltipTemplate: a7, tooltipAppendToBody: a8, tooltipDelay: a9, trackByEventId: a10, validateDrag: a11 }; };
const _c12 = function (a0) { return { event: a0 }; };
const _c13 = function (a0, a1) { return { event: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mwl-calendar-event-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const event_r10 = restoredCtx.$implicit; const eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked; return eventClicked_r4.emit({ event: event_r10, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const event_r10 = restoredCtx.$implicit; const eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked; return eventClicked_r4.emit({ event: event_r10, sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mwl-calendar-event-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const validateDrag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).validateDrag;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", event_r10.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c12, event_r10))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](18, _c8, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c5, event_r10.color == null ? null : event_r10.color.primary));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c13, event_r10, ctx_r9.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
} }
const _c14 = function (a0, a1) { return { date: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const events_r3 = ctx_r17.events;
    const trackByEventId_r6 = ctx_r17.trackByEventId;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@collapse", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
} }
function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
} if (rf & 2) {
    const isOpen_r5 = ctx.isOpen;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isOpen_r5);
} }
function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) { }
const _c15 = function (a0, a1, a2, a3, a4) { return { events: a0, eventClicked: a1, isOpen: a2, trackByEventId: a3, validateDrag: a4 }; };
function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const day_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.eventDropped($event, day_r7.date, true); })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const day_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.dateDragEnter(day_r7.date); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c16 = function () { return { left: true }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c16));
} }
const _c17 = function () { return { right: true }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c17));
} }
const _c18 = function (a0, a1) { return { left: a0, right: a1 }; };
const _c19 = function (a0, a1) { return { event: a0, calendarId: a1 }; };
const _c20 = function (a0) { return { x: a0 }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeStart_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event); })("resizing", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizing_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth); })("resizeEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeEnd_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r21.allDayEventResizeEnded(allDayEvent_r14); })("dragStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragStart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.dragStarted(_r12, _r15); })("dragging", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragging_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r23.allDayEventDragMove(); })("dragEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragEnd_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r25.eventClicked.emit({ event: allDayEvent_r14.event, sourceEvent: $event.sourceEvent }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allDayEvent_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](30, _c18, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](33, _c19, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](36, _c8, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c20, ctx_r13.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](41, _c2))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](42, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
} }
function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_Template, 5, 43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eventRow_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
} }
function CalendarWeekViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.dragEnter("allDay"); })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.dragLeave("allDay"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_4_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_2_div_5_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
} }
function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mwl-calendar-week-view-hour-segment", 28);
} if (rf & 2) {
    const segment_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r32.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("segment", segment_r33)("segmentHeight", ctx_r32.hourSegmentHeight)("locale", ctx_r32.locale)("customTemplate", ctx_r32.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r32.daysInWeek);
} }
function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hour_r30 = ctx.$implicit;
    const odd_r31 = ctx.odd;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-odd", odd_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
} }
function CalendarWeekViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
} }
const _c21 = function () { return { left: true, top: true }; };
function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c21));
} }
function CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template(rf, ctx) { }
function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view-event", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template_mwl_calendar_week_view_event_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r44.eventClicked.emit({ event: timeEvent_r37.event, sourceEvent: $event.sourceEvent }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r42.locale)("weekEvent", timeEvent_r37)("tooltipPlacement", ctx_r42.tooltipPlacement)("tooltipTemplate", ctx_r42.tooltipTemplate)("tooltipAppendToBody", ctx_r42.tooltipAppendToBody)("tooltipDisabled", ctx_r42.dragActive || ctx_r42.timeEventResizes.size > 0)("tooltipDelay", ctx_r42.tooltipDelay)("customTemplate", ctx_r42.eventTemplate)("eventTitleTemplate", ctx_r42.eventTitleTemplate)("eventActionsTemplate", ctx_r42.eventActionsTemplate)("column", column_r34)("daysInWeek", ctx_r42.daysInWeek);
} }
const _c22 = function () { return { right: true, bottom: true }; };
function CalendarWeekViewComponent_div_7_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c22));
} }
const _c23 = function (a0, a1, a2, a3) { return { left: a0, right: a1, top: a2, bottom: a3 }; };
function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx_r49.timeEventResizeStarted(_r2, timeEvent_r37, $event); })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r51.timeEventResizing(timeEvent_r37, $event); })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r52.timeEventResizeEnded(timeEvent_r37); })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx_r53.dragStarted(_r2, _r38, timeEvent_r37); })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r54.dragMove(timeEvent_r37, $event); })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r55.dragEnded(timeEvent_r37, $event, ctx_r55.dayColumnWidth, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template, 0, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template, 1, 12, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_7_div_3_div_6_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeEvent_r37 = ctx.$implicit;
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", timeEvent_r37.top, "px")("height", timeEvent_r37.height, "px")("left", timeEvent_r37.left, "%")("width", timeEvent_r37.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r37.startsBeforeDay)("cal-ends-within-day", !timeEvent_r37.endsAfterDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](29, _c23, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](34, _c19, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](37, _c8, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](40, _c8, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](43, _c2))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](44, _c9))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.beforeStart) && !timeEvent_r37.startsBeforeDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.afterEnd) && !timeEvent_r37.endsAfterDay);
} }
function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61); const segment_r59 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r60.hourSegmentClicked.emit({ date: segment_r59.date, sourceEvent: $event }); })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61); const segment_r59 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r62.eventDropped($event, segment_r59.date, false); })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61); const segment_r59 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r63.dateDragEnter(segment_r59.date); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r59 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r58.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("segment", segment_r59)("segmentHeight", ctx_r58.hourSegmentHeight)("locale", ctx_r58.locale)("customTemplate", ctx_r58.hourSegmentTemplate)("daysInWeek", ctx_r58.daysInWeek)("clickListenerDisabled", ctx_r58.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r58.dragActive || !ctx_r58.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r58.daysInWeek === 1);
} }
function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hour_r56 = ctx.$implicit;
    const odd_r57 = ctx.odd;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-odd", odd_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", hour_r56.segments)("ngForTrackBy", ctx_r36.trackByHourSegment);
} }
function CalendarWeekViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mwl-calendar-week-view-current-time-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_Template, 7, 45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r34 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDate", column_r34.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", column_r34.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", column_r34.hours)("ngForTrackBy", ctx_r3.trackByHour);
} }
function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const day_r10 = restoredCtx.$implicit; const dayHeaderClicked_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().dayHeaderClicked; return dayHeaderClicked_r5.emit({ day: day_r10, sourceEvent: $event }); })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const day_r10 = restoredCtx.$implicit; const eventDropped_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().eventDropped; return eventDropped_r6.emit({ event: $event.dropData.event, newStart: day_r10.date }); })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const day_r10 = restoredCtx.$implicit; const dragEnter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().dragEnter; return dragEnter_r8.emit({ date: day_r10.date }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r10.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 11, day_r10.date, "weekViewColumnHeader", locale_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](7, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
} }
function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
} }
function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) { }
const _c24 = function (a0, a1, a2, a3, a4, a5) { return { days: a0, locale: a1, dayHeaderClicked: a2, eventDropped: a3, dragEnter: a4, trackByWeekDayHeaderDate: a5 }; };
const _c25 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const eventClicked_r5 = restoredCtx.eventClicked; return eventClicked_r5.emit({ sourceEvent: $event }); })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const eventClicked_r5 = restoredCtx.eventClicked; return eventClicked_r5.emit({ sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mwl-calendar-event-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mwl-calendar-event-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekEvent_r3 = ctx.weekEvent;
    const tooltipPlacement_r4 = ctx.tooltipPlacement;
    const tooltipTemplate_r6 = ctx.tooltipTemplate;
    const tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
    const tooltipDisabled_r8 = ctx.tooltipDisabled;
    const tooltipDelay_r9 = ctx.tooltipDelay;
    const daysInWeek_r11 = ctx.daysInWeek;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c25, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](23, _c13, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
} }
function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) { }
const _c26 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { weekEvent: a0, tooltipPlacement: a1, eventClicked: a2, tooltipTemplate: a3, tooltipAppendToBody: a4, tooltipDisabled: a5, tooltipDelay: a6, column: a7, daysInWeek: a8 }; };
function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const segment_r3 = ctx_r9.segment;
    const daysInWeek_r7 = ctx_r9.daysInWeek;
    const locale_r4 = ctx_r9.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), " ");
} }
function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r3 = ctx.segment;
    const segmentHeight_r5 = ctx.segmentHeight;
    const isTimeLabel_r6 = ctx.isTimeLabel;
    const daysInWeek_r7 = ctx.daysInWeek;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", segmentHeight_r5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", segment_r3.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isTimeLabel_r6);
} }
function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) { }
const _c27 = function (a0, a1, a2, a3, a4) { return { segment: a0, locale: a1, segmentHeight: a2, isTimeLabel: a3, daysInWeek: a4 }; };
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const topPx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().topPx;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", topPx_r9, "px");
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
} if (rf & 2) {
    const isVisible_r8 = ctx.isVisible;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isVisible_r8);
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) { }
const _c28 = function (a0, a1, a2, a3, a4, a5, a6) { return { columnDate: a0, dayStartHour: a1, dayStartMinute: a2, dayEndHour: a3, dayEndMinute: a4, isVisible: a5, topPx: a6 }; };





let CalendarEventActionsComponent = class CalendarEventActionsComponent {
    constructor() {
        this.trackByActionId = (index, action) => action.id ? action.id : action;
    }
};
CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) { return new (t || CalendarEventActionsComponent)(); };
CalendarEventActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarEventActionsComponent, selectors: [["mwl-calendar-event-actions"]], inputs: { event: "event", customTemplate: "customTemplate" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]], template: function CalendarEventActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, ClickDirective, KeydownEnterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet]; }, pipes: function () { return [CalendarA11yPipe]; }, encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarEventActionsComponent.prototype, "event", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarEventActionsComponent.prototype, "customTemplate", void 0);

let CalendarEventTitleComponent = class CalendarEventTitleComponent {
};
CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) { return new (t || CalendarEventTitleComponent)(); };
CalendarEventTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarEventTitleComponent, selectors: [["mwl-calendar-event-title"]], inputs: { event: "event", customTemplate: "customTemplate", view: "view" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]], template: function CalendarEventTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c3, ctx.event, ctx.view));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet]; }, pipes: function () { return [CalendarEventTitlePipe, CalendarA11yPipe]; }, encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarEventTitleComponent.prototype, "event", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarEventTitleComponent.prototype, "view", void 0);

let CalendarTooltipWindowComponent = class CalendarTooltipWindowComponent {
};
CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) { return new (t || CalendarTooltipWindowComponent)(); };
CalendarTooltipWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarTooltipWindowComponent, selectors: [["mwl-calendar-tooltip-window"]], inputs: { contents: "contents", placement: "placement", event: "event", customTemplate: "customTemplate" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]], template: function CalendarTooltipWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c4, ctx.contents, ctx.placement, ctx.event));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarTooltipWindowComponent.prototype, "contents", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarTooltipWindowComponent.prototype, "placement", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarTooltipWindowComponent.prototype, "event", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
let CalendarTooltipDirective = class CalendarTooltipDirective {
    constructor(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename
        this.delay = null; // tslint:disable-line no-input-rename
        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    ngOnChanges(changes) {
        if (this.tooltipRef &&
            (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
            if (!this.contents) {
                this.hide();
            }
        }
    }
    ngOnDestroy() {
        this.hide();
    }
    onMouseOver() {
        const delay$ = this.delay === null ? (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)('now') : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(this.delay);
        delay$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.cancelTooltipDelay$)).subscribe(() => {
            this.show();
        });
    }
    onMouseOut() {
        this.hide();
    }
    show() {
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(() => {
                this.positionTooltip();
            });
        }
    }
    hide() {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
        this.cancelTooltipDelay$.next();
    }
    positionTooltip(previousPositions = []) {
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = (0,positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements)(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip([
                    ...previousPositions,
                    this.tooltipRef.instance.placement,
                ]);
            }
        }
    }
};
CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) { return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
CalendarTooltipDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CalendarTooltipDirective, selectors: [["", "mwlCalendarTooltip", ""]], hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseOver(); })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseOut(); });
    } }, inputs: { placement: ["tooltipPlacement", "placement"], delay: ["tooltipDelay", "delay"], contents: ["mwlCalendarTooltip", "contents"], customTemplate: ["tooltipTemplate", "customTemplate"], event: ["tooltipEvent", "event"], appendToBody: ["tooltipAppendToBody", "appendToBody"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
CalendarTooltipDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('mwlCalendarTooltip'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarTooltipDirective.prototype, "contents", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipPlacement'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarTooltipDirective.prototype, "placement", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipTemplate'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarTooltipDirective.prototype, "customTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipEvent'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarTooltipDirective.prototype, "event", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipAppendToBody'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarTooltipDirective.prototype, "appendToBody", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipDelay'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarTooltipDirective.prototype, "delay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('mouseenter'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)
], CalendarTooltipDirective.prototype, "onMouseOver", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('mouseleave'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)
], CalendarTooltipDirective.prototype, "onMouseOut", null);
CalendarTooltipDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(5, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef, Object])
], CalendarTooltipDirective);

class DateAdapter {
}

var CalendarView;
(function (CalendarView) {
    CalendarView["Month"] = "month";
    CalendarView["Week"] = "week";
    CalendarView["Day"] = "day";
})(CalendarView || (CalendarView = {}));

const validateEvents = (events) => {
    const warn = (...args) => console.warn('angular-calendar', ...args);
    return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_1__.validateEvents)(events, warn);
};
function isInside(outer, inner) {
    return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
        Math.floor(inner.left) <= Math.ceil(outer.right) &&
        Math.floor(outer.left) <= Math.ceil(inner.right) &&
        Math.floor(inner.right) <= Math.ceil(outer.right) &&
        Math.floor(outer.top) <= Math.ceil(inner.top) &&
        Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
        Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
        Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
}
function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
const trackByEventId = (index, event) => event.id ? event.id : event;
const trackByWeekDayHeaderDate = (index, day) => day.date.toISOString();
const trackByHourSegment = (index, segment) => segment.date.toISOString();
const trackByHour = (index, hour) => hour.segments[0].date.toISOString();
const trackByWeekAllDayEvent = (index, weekEvent) => (weekEvent.event.id ? weekEvent.event.id : weekEvent.event);
const trackByWeekTimeEvent = (index, weekEvent) => (weekEvent.event.id ? weekEvent.event.id : weekEvent.event);
const MINUTES_IN_HOUR = 60;
function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
    return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
}
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
    const draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    const pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
    return (getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight);
}
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    let daysCounter = 0;
    let daysToAdd = 0;
    const changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    let result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        const day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
function isDraggedWithinPeriod(newStart, newEnd, period) {
    const end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded = [], daysInWeek) {
    let viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn });
    const endOfWeek = dateAdapter.endOfWeek(viewDate, { weekStartsOn });
    while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 &&
        viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
    }
    if (daysInWeek) {
        const viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart, viewEnd };
    }
    else {
        let viewEnd = endOfWeek;
        while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 &&
            viewEnd > viewStart) {
            viewEnd = dateAdapter.subDays(viewEnd, 1);
        }
        return { viewStart, viewEnd };
    }
}
function isWithinThreshold({ x, y }) {
    const DRAG_THRESHOLD = 1;
    return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}

/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
let CalendarPreviousViewDirective = class CalendarPreviousViewDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        const subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths,
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    }
};
CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) { return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter)); };
CalendarPreviousViewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CalendarPreviousViewDirective, selectors: [["", "mwlCalendarPreviousView", ""]], hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { excludeDays: "excludeDays", view: "view", viewDate: "viewDate", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" } });
CalendarPreviousViewDirective.ctorParameters = () => [
    { type: DateAdapter }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarPreviousViewDirective.prototype, "view", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)
], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('click'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)
], CalendarPreviousViewDirective.prototype, "onClick", null);
CalendarPreviousViewDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [DateAdapter])
], CalendarPreviousViewDirective);

/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
let CalendarNextViewDirective = class CalendarNextViewDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        const addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths,
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
        }
    }
};
CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) { return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter)); };
CalendarNextViewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CalendarNextViewDirective, selectors: [["", "mwlCalendarNextView", ""]], hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { excludeDays: "excludeDays", view: "view", viewDate: "viewDate", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" } });
CalendarNextViewDirective.ctorParameters = () => [
    { type: DateAdapter }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarNextViewDirective.prototype, "view", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarNextViewDirective.prototype, "viewDate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarNextViewDirective.prototype, "excludeDays", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)
], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('click'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)
], CalendarNextViewDirective.prototype, "onClick", null);
CalendarNextViewDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [DateAdapter])
], CalendarNextViewDirective);

/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
let CalendarTodayDirective = class CalendarTodayDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    }
};
CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) { return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter)); };
CalendarTodayDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CalendarTodayDirective, selectors: [["", "mwlCalendarToday", ""]], hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { viewDate: "viewDate" }, outputs: { viewDateChange: "viewDateChange" } });
CalendarTodayDirective.ctorParameters = () => [
    { type: DateAdapter }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarTodayDirective.prototype, "viewDate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)
], CalendarTodayDirective.prototype, "viewDateChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('click'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)
], CalendarTodayDirective.prototype, "onClick", null);
CalendarTodayDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [DateAdapter])
], CalendarTodayDirective);

/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
let CalendarAngularDateFormatter = class CalendarAngularDateFormatter {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE', locale);
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'd', locale);
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'LLLL y', locale);
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE', locale);
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale, }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'MMM d', locale);
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek, }) {
        const { viewStart, viewEnd } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'h a', locale);
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'h a', locale);
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE, MMMM d, y', locale);
    }
};
CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) { return new (t || CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DateAdapter)); };
CalendarAngularDateFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalendarAngularDateFormatter, factory: function (t) { return CalendarAngularDateFormatter.ɵfac(t); } });
CalendarAngularDateFormatter.ctorParameters = () => [
    { type: DateAdapter }
];
CalendarAngularDateFormatter = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [DateAdapter])
], CalendarAngularDateFormatter);

/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * @Injectable()
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
let CalendarDateFormatter = class CalendarDateFormatter extends CalendarAngularDateFormatter {
};
CalendarDateFormatter.ɵfac = /*@__PURE__*/ function () { let ɵCalendarDateFormatter_BaseFactory; return function CalendarDateFormatter_Factory(t) { return (ɵCalendarDateFormatter_BaseFactory || (ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CalendarDateFormatter)))(t || CalendarDateFormatter); }; }();
CalendarDateFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalendarDateFormatter, factory: function (t) { return CalendarDateFormatter.ɵfac(t); } });

/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
let CalendarDatePipe = class CalendarDatePipe {
    constructor(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
        if (typeof this.dateFormatter[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter((iMethod) => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.dateFormatter[method]({
            date,
            locale,
            weekStartsOn,
            excludeDays,
            daysInWeek,
        });
    }
};
CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) { return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarDateFormatter, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID, 16)); };
CalendarDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "calendarDate", type: CalendarDatePipe, pure: true });
CalendarDatePipe.ctorParameters = () => [
    { type: CalendarDateFormatter },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID,] }] }
];
CalendarDatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [CalendarDateFormatter, String])
], CalendarDatePipe);

/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * @Injectable()
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
class CalendarEventTitleFormatter {
    /**
     * The month view event title.
     */
    month(event, title) {
        return event.title;
    }
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    monthTooltip(event, title) {
        return event.title;
    }
    /**
     * The week view event title.
     */
    week(event, title) {
        return event.title;
    }
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    weekTooltip(event, title) {
        return event.title;
    }
    /**
     * The day view event title.
     */
    day(event, title) {
        return event.title;
    }
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    dayTooltip(event, title) {
        return event.title;
    }
}

let CalendarEventTitlePipe = class CalendarEventTitlePipe {
    constructor(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    transform(title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    }
};
CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) { return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarEventTitleFormatter, 16)); };
CalendarEventTitlePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "calendarEventTitle", type: CalendarEventTitlePipe, pure: true });
CalendarEventTitlePipe.ctorParameters = () => [
    { type: CalendarEventTitleFormatter }
];
CalendarEventTitlePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [CalendarEventTitleFormatter])
], CalendarEventTitlePipe);

let ClickDirective = class ClickDirective {
    constructor(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // tslint:disable-line
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        if (!this.clickListenerDisabled) {
            this.listen()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$))
                .subscribe((event) => {
                event.stopPropagation();
                this.click.emit(event);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    listen() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable((observer) => {
            return this.renderer.listen(this.elm.nativeElement, 'click', (event) => {
                observer.next(event);
            });
        });
    }
};
ClickDirective.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
ClickDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClickDirective, selectors: [["", "mwlClick", ""]], inputs: { clickListenerDisabled: "clickListenerDisabled" }, outputs: { click: "mwlClick" } });
ClickDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], ClickDirective.prototype, "clickListenerDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)('mwlClick'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], ClickDirective.prototype, "click", void 0);
ClickDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef, Object])
], ClickDirective);

let KeydownEnterDirective = class KeydownEnterDirective {
    constructor(host, ngZone, renderer) {
        this.host = host;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // tslint:disable-line
        this.keydownListener = null;
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            this.keydownListener = this.renderer.listen(this.host.nativeElement, 'keydown', (event) => {
                if (event.keyCode === 13 ||
                    event.which === 13 ||
                    event.key === 'Enter') {
                    event.preventDefault();
                    event.stopPropagation();
                    this.ngZone.run(() => {
                        this.keydown.emit(event);
                    });
                }
            });
        });
    }
    ngOnDestroy() {
        if (this.keydownListener !== null) {
            this.keydownListener();
            this.keydownListener = null;
        }
    }
};
KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) { return new (t || KeydownEnterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
KeydownEnterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: KeydownEnterDirective, selectors: [["", "mwlKeydownEnter", ""]], outputs: { keydown: "mwlKeydownEnter" } });
KeydownEnterDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)('mwlKeydownEnter'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], KeydownEnterDirective.prototype, "keydown", void 0);
KeydownEnterDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2])
], KeydownEnterDirective);

let CalendarUtils = class CalendarUtils {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    getMonthView(args) {
        return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthView)(this.dateAdapter, args);
    }
    getWeekViewHeader(args) {
        return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getWeekViewHeader)(this.dateAdapter, args);
    }
    getWeekView(args) {
        return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getWeekView)(this.dateAdapter, args);
    }
};
CalendarUtils.ɵfac = function CalendarUtils_Factory(t) { return new (t || CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DateAdapter)); };
CalendarUtils.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalendarUtils, factory: function (t) { return CalendarUtils.ɵfac(t); } });
CalendarUtils.ctorParameters = () => [
    { type: DateAdapter }
];
CalendarUtils = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [DateAdapter])
], CalendarUtils);

/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */
let CalendarA11y = class CalendarA11y {
    constructor(i18nPlural) {
        this.i18nPlural = i18nPlural;
    }
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */
    monthCell({ day, locale }) {
        if (day.badgeTotal > 0) {
            return `
        ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(day.date, 'EEEE MMMM d', locale)},
        ${this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events',
            })},
         click to expand
      `;
        }
        else {
            return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(day.date, 'EEEE MMMM d', locale)}`;
        }
    }
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */
    openDayEventsLandmark({ date, locale }) {
        return `
      Beginning of expanded view for ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE MMMM dd', locale)}
    `;
    }
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */
    openDayEventsAlert({ date, locale }) {
        return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE MMMM dd', locale)} expanded`;
    }
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */
    eventDescription({ event, locale }) {
        if (event.allDay === true) {
            return this.allDayEventDescription({ event, locale });
        }
        const aria = `
      ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.start, 'EEEE MMMM dd', locale)},
      ${event.title}, from ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.start, 'hh:mm a', locale)}
    `;
        if (event.end) {
            return aria + ` to ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.end, 'hh:mm a', locale)}`;
        }
        return aria;
    }
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */
    allDayEventDescription({ event, locale }) {
        const aria = `
      ${event.title}, event spans multiple days:
      start time ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.start, 'MMMM dd hh:mm a', locale)}
    `;
        if (event.end) {
            return (aria + `, stop time ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.end, 'MMMM d hh:mm a', locale)}`);
        }
        return aria + `, no stop time`;
    }
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */
    actionButtonLabel({ action }) {
        return action.a11yLabel;
    }
    /**
     * @returns {number} Tab index to be given to month cells
     */
    monthCellTabIndex() {
        return 0;
    }
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */
    hideMonthCellEvents() {
        return true;
    }
    /**
     * @returns true if event titles should be aria-hidden (global)
     */
    hideEventTitle() {
        return true;
    }
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */
    hideWeekHourSegment() {
        return true;
    }
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */
    hideDayHourSegment() {
        return true;
    }
};
CalendarA11y.ɵfac = function CalendarA11y_Factory(t) { return new (t || CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe)); };
CalendarA11y.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalendarA11y, factory: function (t) { return CalendarA11y.ɵfac(t); } });
CalendarA11y.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe }
];
CalendarA11y = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe])
], CalendarA11y);

/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */
let CalendarA11yPipe = class CalendarA11yPipe {
    constructor(calendarA11y, locale) {
        this.calendarA11y = calendarA11y;
        this.locale = locale;
    }
    transform(a11yParams, method) {
        a11yParams.locale = a11yParams.locale || this.locale;
        if (typeof this.calendarA11y[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter((iMethod) => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid a11y method. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.calendarA11y[method](a11yParams);
    }
};
CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) { return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarA11y, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID, 16)); };
CalendarA11yPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "calendarA11y", type: CalendarA11yPipe, pure: true });
CalendarA11yPipe.ctorParameters = () => [
    { type: CalendarA11y },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID,] }] }
];
CalendarA11yPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [CalendarA11y, String])
], CalendarA11yPipe);

const MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
let CalendarMomentDateFormatter = class CalendarMomentDateFormatter {
    /**
     * @hidden
     */
    constructor(moment, dateAdapter) {
        this.moment = moment;
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return this.moment(date).locale(locale).format('dddd');
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return this.moment(date).locale(locale).format('D');
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return this.moment(date).locale(locale).format('MMMM YYYY');
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return this.moment(date).locale(locale).format('dddd');
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale, }) {
        return this.moment(date).locale(locale).format('MMM D');
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek, }) {
        const { viewStart, viewEnd } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => this.moment(dateToFormat)
            .locale(locale)
            .format('MMM D' + (showYear ? ', YYYY' : ''));
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return this.moment(date).locale(locale).format('ha');
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return this.moment(date).locale(locale).format('ha');
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
    }
};
CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) { return new (t || CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DateAdapter)); };
CalendarMomentDateFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalendarMomentDateFormatter, factory: function (t) { return CalendarMomentDateFormatter.ɵfac(t); } });
CalendarMomentDateFormatter.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [MOMENT,] }] },
    { type: DateAdapter }
];
CalendarMomentDateFormatter = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(MOMENT)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, DateAdapter])
], CalendarMomentDateFormatter);

/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
let CalendarNativeDateFormatter = class CalendarNativeDateFormatter {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
        }).format(date);
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale, }) {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
        }).format(date);
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek, }) {
        const { viewStart, viewEnd } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
            year: showYear ? 'numeric' : undefined,
        }).format(dateToFormat);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
        }).format(date);
    }
};
CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) { return new (t || CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DateAdapter)); };
CalendarNativeDateFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalendarNativeDateFormatter, factory: function (t) { return CalendarNativeDateFormatter.ɵfac(t); } });
CalendarNativeDateFormatter.ctorParameters = () => [
    { type: DateAdapter }
];
CalendarNativeDateFormatter = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [DateAdapter])
], CalendarNativeDateFormatter);

var CalendarEventTimesChangedEventType;
(function (CalendarEventTimesChangedEventType) {
    CalendarEventTimesChangedEventType["Drag"] = "drag";
    CalendarEventTimesChangedEventType["Drop"] = "drop";
    CalendarEventTimesChangedEventType["Resize"] = "resize";
})(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));

var CalendarCommonModule_1;
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
let CalendarCommonModule = CalendarCommonModule_1 = class CalendarCommonModule {
    static forRoot(dateAdapter, config = {}) {
        return {
            ngModule: CalendarCommonModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils,
                config.a11y || CalendarA11y,
            ],
        };
    }
};
CalendarCommonModule.ɵfac = function CalendarCommonModule_Factory(t) { return new (t || CalendarCommonModule)(); };
CalendarCommonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CalendarCommonModule });
CalendarCommonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]] });

/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
let CalendarMonthViewComponent = class CalendarMonthViewComponent {
    /**
     * @hidden
     */
    constructor(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */
        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * @hidden
         */
        this.trackByRowOffset = (index, offset) => this.view.days
            .slice(offset, this.view.totalDaysVisibleInWeek)
            .map((day) => day.date.toISOString())
            .join('-');
        /**
         * @hidden
         */
        this.trackByDate = (index, day) => day.date.toISOString();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.refreshAll();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
        const refreshBody = changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.activeDay) {
            this.checkActiveDayIsOpen();
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    /**
     * @hidden
     */
    toggleDayHighlight(event, isHighlighted) {
        this.view.days.forEach((day) => {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    }
    /**
     * @hidden
     */
    eventDropped(droppedOn, event, draggedFrom) {
        if (droppedOn !== draggedFrom) {
            const year = this.dateAdapter.getYear(droppedOn.date);
            const month = this.dateAdapter.getMonth(droppedOn.date);
            const date = this.dateAdapter.getDate(droppedOn.date);
            const newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            let newEnd;
            if (event.end) {
                const secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }
            this.eventTimesChanged.emit({
                event,
                newStart,
                newEnd,
                day: droppedOn,
                type: CalendarEventTimesChangedEventType.Drop,
            });
        }
    }
    refreshHeader() {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays,
        });
    }
    refreshBody() {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays,
        });
    }
    checkActiveDayIsOpen() {
        if (this.activeDayIsOpen === true) {
            const activeDay = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find((day) => this.dateAdapter.isSameDay(day.date, activeDay));
            const index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    }
    refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
        this.checkActiveDayIsOpen();
    }
    emitBeforeViewRender() {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period,
            });
        }
    }
};
CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) { return new (t || CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter)); };
CalendarMonthViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarMonthViewComponent, selectors: [["mwl-calendar-month-view"]], inputs: { events: "events", excludeDays: "excludeDays", activeDayIsOpen: "activeDayIsOpen", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", locale: "locale", viewDate: "viewDate", activeDay: "activeDay", refresh: "refresh", tooltipTemplate: "tooltipTemplate", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", cellTemplate: "cellTemplate", openDayEventsTemplate: "openDayEventsTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", weekendDays: "weekendDays" }, outputs: { beforeViewRender: "beforeViewRender", dayClicked: "dayClicked", eventClicked: "eventClicked", columnHeaderClicked: "columnHeaderClicked", eventTimesChanged: "eventTimesChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 5, consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-cell-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]], template: function CalendarMonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mwl-calendar-month-view-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) { return ctx.columnHeaderClicked.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
    } }, directives: function () { return [CalendarMonthViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, CalendarMonthCellComponent, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ClickDirective, KeydownEnterDirective, CalendarOpenDayEventsComponent]; }, pipes: function () { return [CalendarA11yPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe]; }, encapsulation: 2 });
CalendarMonthViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef },
    { type: CalendarUtils },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID,] }] },
    { type: DateAdapter }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarMonthViewComponent.prototype, "viewDate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarMonthViewComponent.prototype, "events", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarMonthViewComponent.prototype, "activeDay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject)
], CalendarMonthViewComponent.prototype, "refresh", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarMonthViewComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
CalendarMonthViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef,
        CalendarUtils, String, DateAdapter])
], CalendarMonthViewComponent);

let CalendarMonthViewHeaderComponent = class CalendarMonthViewHeaderComponent {
    constructor() {
        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
};
CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) { return new (t || CalendarMonthViewHeaderComponent)(); };
CalendarMonthViewHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarMonthViewHeaderComponent, selectors: [["mwl-calendar-month-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { columnHeaderClicked: "columnHeaderClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]], template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c6, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], pipes: [CalendarDatePipe], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);

let CalendarMonthCellComponent = class CalendarMonthCellComponent {
    constructor() {
        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
};
CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) { return new (t || CalendarMonthCellComponent)(); };
CalendarMonthCellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarMonthCellComponent, selectors: [["mwl-calendar-month-cell"]], hostAttrs: [1, "cal-cell", "cal-day-cell"], hostVars: 18, hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
    } }, inputs: { day: "day", openDay: "openDay", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", customTemplate: "customTemplate", tooltipTemplate: "tooltipTemplate", tooltipDelay: "tooltipDelay" }, outputs: { highlightDay: "highlightDay", unhighlightDay: "unhighlightDay", eventClicked: "eventClicked" }, decls: 3, vars: 15, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]], template: function CalendarMonthCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](2, _c11, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, CalendarTooltipDirective, ClickDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], pipes: [CalendarA11yPipe, CalendarDatePipe, CalendarEventTitlePipe], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthCellComponent.prototype, "day", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthCellComponent.prototype, "openDay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarMonthCellComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)
], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)
], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarMonthCellComponent.prototype, "eventClicked", void 0);

const collapseAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('collapse', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0,
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*',
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('150ms ease-out')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('150ms ease-in')),
]);
let CalendarOpenDayEventsComponent = class CalendarOpenDayEventsComponent {
    constructor() {
        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
};
CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) { return new (t || CalendarOpenDayEventsComponent)(); };
CalendarOpenDayEventsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarOpenDayEventsComponent, selectors: [["mwl-calendar-open-day-events"]], inputs: { isOpen: "isOpen", locale: "locale", events: "events", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", date: "date" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]], template: function CalendarOpenDayEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](2, _c15, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], pipes: [CalendarA11yPipe], encapsulation: 2, data: { animation: [collapseAnimation] } });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarOpenDayEventsComponent.prototype, "events", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarOpenDayEventsComponent.prototype, "date", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);

let CalendarMonthModule = class CalendarMonthModule {
};
CalendarMonthModule.ɵfac = function CalendarMonthModule_Factory(t) { return new (t || CalendarMonthModule)(); };
CalendarMonthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CalendarMonthModule });
CalendarMonthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule] });

class CalendarDragHelper {
    constructor(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    validateDrag({ x, y, snapDraggedEvents, dragAlreadyMoved, transform, }) {
        if (snapDraggedEvents) {
            const newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y,
            });
            return ((isWithinThreshold({ x, y }) || dragAlreadyMoved) &&
                isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold({ x, y }) || dragAlreadyMoved;
        }
    }
}

class CalendarResizeHelper {
    constructor(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    validateResize({ rectangle }) {
        if (this.minWidth &&
            Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    }
}

/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
let CalendarWeekViewComponent = class CalendarWeekViewComponent {
    /**
     * @hidden
     */
    constructor(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must divide equally into 60.
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * @hidden
         */
        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */
        this.timeEventResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0,
        };
        /**
         * @hidden
         */
        this.dragActive = false;
        /**
         * @hidden
         */
        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
        /**
         * @hidden
         */
        this.trackByWeekTimeEvent = trackByWeekTimeEvent;
        /**
         * @hidden
         */
        this.trackByHourColumn = (index, column) => column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        /**
         * @hidden
         */
        this.trackById = (index, row) => row.id;
        this.locale = locale;
    }
    /**
     * @hidden
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.refreshAll();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        const refreshHeader = changes.viewDate ||
            changes.excludeDays ||
            changes.weekendDays ||
            changes.daysInWeek ||
            changes.weekStartsOn;
        const refreshBody = changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments ||
            changes.weekStartsOn ||
            changes.weekendDays ||
            changes.excludeDays ||
            changes.hourSegmentHeight ||
            changes.events ||
            changes.daysInWeek;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    /**
     * @hidden
     */
    timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer);
    }
    /**
     * @hidden
     */
    timeEventResizing(timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        const adjustedEvents = new Map();
        const tempEvents = [...this.events];
        this.timeEventResizes.forEach((lastResizeEvent, event) => {
            const newEventDates = this.getTimeEventResizedDates(event, lastResizeEvent);
            const adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            const eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
        });
        this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
    }
    /**
     * @hidden
     */
    timeEventResizeEnded(timeEvent) {
        this.view = this.getWeekView(this.events);
        const lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        if (lastResizeEvent) {
            this.timeEventResizes.delete(timeEvent.event);
            const newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: CalendarEventTimesChangedEventType.Resize,
            });
        }
    }
    /**
     * @hidden
     */
    allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right',
        });
        this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
    }
    /**
     * @hidden
     */
    allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
        const currentResize = this.allDayEventResizes.get(allDayEvent);
        if (typeof resizeEvent.edges.left !== 'undefined') {
            const diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            const diff = Math.round(+resizeEvent.edges.right / dayWidth);
            allDayEvent.span = currentResize.originalSpan + diff;
        }
    }
    /**
     * @hidden
     */
    allDayEventResizeEnded(allDayEvent) {
        const currentResize = this.allDayEventResizes.get(allDayEvent);
        if (currentResize) {
            const allDayEventResizingBeforeStart = currentResize.edge === 'left';
            let daysDiff;
            if (allDayEventResizingBeforeStart) {
                daysDiff = allDayEvent.offset - currentResize.originalOffset;
            }
            else {
                daysDiff = allDayEvent.span - currentResize.originalSpan;
            }
            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            let newStart = allDayEvent.event.start;
            let newEnd = allDayEvent.event.end || allDayEvent.event.start;
            if (allDayEventResizingBeforeStart) {
                newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            }
            else {
                newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }
            this.eventTimesChanged.emit({
                newStart,
                newEnd,
                event: allDayEvent.event,
                type: CalendarEventTimesChangedEventType.Resize,
            });
            this.allDayEventResizes.delete(allDayEvent);
        }
    }
    /**
     * @hidden
     */
    getDayColumnWidth(eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    }
    /**
     * @hidden
     */
    dateDragEnter(date) {
        this.lastDragEnterDate = date;
    }
    /**
     * @hidden
     */
    eventDropped(dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) &&
            this.lastDragEnterDate.getTime() === date.getTime() &&
            (!this.snapDraggedEvents ||
                dropEvent.dropData.event !== this.lastDraggedEvent)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay,
            });
        }
        this.lastDraggedEvent = null;
    }
    /**
     * @hidden
     */
    dragEnter(type) {
        this.eventDragEnterByType[type]++;
    }
    /**
     * @hidden
     */
    dragLeave(type) {
        this.eventDragEnterByType[type]--;
    }
    /**
     * @hidden
     */
    dragStarted(eventsContainer, event, dayEvent) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        const dragHelper = new CalendarDragHelper(eventsContainer, event);
        this.validateDrag = ({ x, y, transform }) => this.allDayEventResizes.size === 0 &&
            this.timeEventResizes.size === 0 &&
            dragHelper.validateDrag({
                x,
                y,
                snapDraggedEvents: this.snapDraggedEvents,
                dragAlreadyMoved: this.dragAlreadyMoved,
                transform,
            });
        this.dragActive = true;
        this.dragAlreadyMoved = false;
        this.lastDraggedEvent = null;
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0,
        };
        if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach((column) => {
                const linkedEvent = column.events.find((columnEvent) => columnEvent.event === dayEvent.event && columnEvent !== dayEvent);
                // hide any linked events while dragging
                if (linkedEvent) {
                    linkedEvent.width = 0;
                    linkedEvent.height = 0;
                }
            });
        }
        this.cdr.markForCheck();
    }
    /**
     * @hidden
     */
    dragMove(dayEvent, dragEvent) {
        const newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
        const originalEvent = dayEvent.event;
        const adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
        const tempEvents = this.events.map((event) => {
            if (event === originalEvent) {
                return adjustedEvent;
            }
            return event;
        });
        this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
        this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */
    allDayEventDragMove() {
        this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */
    dragEnded(weekEvent, dragEndEvent, dayWidth, useY = false) {
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        this.validateDrag = null;
        const { start, end } = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY);
        if ((this.snapDraggedEvents ||
            this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) &&
            isDraggedWithinPeriod(start, end, this.view.period)) {
            this.lastDraggedEvent = weekEvent.event;
            this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: !useY,
            });
        }
    }
    refreshHeader() {
        this.days = this.utils.getWeekViewHeader(Object.assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }
    refreshBody() {
        this.view = this.getWeekView(this.events);
    }
    refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
    }
    emitBeforeViewRender() {
        if (this.days && this.view) {
            this.beforeViewRender.emit(Object.assign({ header: this.days }, this.view));
        }
    }
    getWeekView(events) {
        return this.utils.getWeekView(Object.assign({ events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute,
            }, dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute,
            }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }
    getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
        const daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
        const minutesMoved = useY
            ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
            : 0;
        const start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
        let end;
        if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
        }
        return { start, end };
    }
    restoreOriginalEvents(tempEvents, adjustedEvents, snapDraggedEvents = true) {
        const previousView = this.view;
        if (snapDraggedEvents) {
            this.view = this.getWeekView(tempEvents);
        }
        const adjustedEventsArray = tempEvents.filter((event) => adjustedEvents.has(event));
        this.view.hourColumns.forEach((column, columnIndex) => {
            previousView.hourColumns[columnIndex].hours.forEach((hour, hourIndex) => {
                hour.segments.forEach((segment, segmentIndex) => {
                    column.hours[hourIndex].segments[segmentIndex].cssClass =
                        segment.cssClass;
                });
            });
            adjustedEventsArray.forEach((adjustedEvent) => {
                const originalEvent = adjustedEvents.get(adjustedEvent);
                const existingColumnEvent = column.events.find((columnEvent) => columnEvent.event ===
                    (snapDraggedEvents ? adjustedEvent : originalEvent));
                if (existingColumnEvent) {
                    // restore the original event so trackBy kicks in and the dom isn't changed
                    existingColumnEvent.event = originalEvent;
                    existingColumnEvent['tempEvent'] = adjustedEvent;
                    if (!snapDraggedEvents) {
                        existingColumnEvent.height = 0;
                        existingColumnEvent.width = 0;
                    }
                }
                else {
                    // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                    const event = {
                        event: originalEvent,
                        left: 0,
                        top: 0,
                        height: 0,
                        width: 0,
                        startsBeforeDay: false,
                        endsAfterDay: false,
                        tempEvent: adjustedEvent,
                    };
                    column.events.push(event);
                }
            });
        });
        adjustedEvents.clear();
    }
    getTimeEventResizedDates(calendarEvent, resizeEvent) {
        const minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
        const newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight),
        };
        const { end } = calendarEvent, eventWithoutEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(calendarEvent, ["end"]);
        const smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight),
        };
        if (typeof resizeEvent.edges.left !== 'undefined') {
            const daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            const newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            const daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            const newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        if (typeof resizeEvent.edges.top !== 'undefined') {
            const minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            const newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            const minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            const newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        return newEventDates;
    }
    resizeStarted(eventsContainer, minWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        const resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);
        this.validateResize = ({ rectangle }) => resizeHelper.validateResize({ rectangle });
        this.cdr.markForCheck();
    }
};
CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) { return new (t || CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter)); };
CalendarWeekViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarWeekViewComponent, selectors: [["mwl-calendar-week-view"]], inputs: { events: "events", excludeDays: "excludeDays", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", precision: "precision", snapDraggedEvents: "snapDraggedEvents", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", locale: "locale", viewDate: "viewDate", refresh: "refresh", tooltipTemplate: "tooltipTemplate", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", weekendDays: "weekendDays", hourSegmentTemplate: "hourSegmentTemplate", eventSnapSize: "eventSnapSize", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", daysInWeek: "daysInWeek", currentTimeMarkerTemplate: "currentTimeMarkerTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventClicked: "eventClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender", hourSegmentClicked: "hourSegmentClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 9, consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mwl-calendar-week-view-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) { return ctx.dayHeaderClicked.emit($event); })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) { return ctx.eventDropped({ dropData: $event }, $event.newStart, true); })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) { return ctx.dateDragEnter($event.date); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener() { return ctx.dragEnter("time"); })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener() { return ctx.dragLeave("time"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_7_Template, 5, 12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
    } }, directives: function () { return [CalendarWeekViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableDirective, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizeHandleDirective, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, ClickDirective]; }, encapsulation: 2 });
CalendarWeekViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef },
    { type: CalendarUtils },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID,] }] },
    { type: DateAdapter }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarWeekViewComponent.prototype, "viewDate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarWeekViewComponent.prototype, "events", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject)
], CalendarWeekViewComponent.prototype, "refresh", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarWeekViewComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarWeekViewComponent.prototype, "precision", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
CalendarWeekViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef,
        CalendarUtils, String, DateAdapter])
], CalendarWeekViewComponent);

let CalendarWeekViewHeaderComponent = class CalendarWeekViewHeaderComponent {
    constructor() {
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
};
CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) { return new (t || CalendarWeekViewHeaderComponent)(); };
CalendarWeekViewHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarWeekViewHeaderComponent, selectors: [["mwl-calendar-week-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventDropped: "eventDropped", dragEnter: "dragEnter" }, decls: 3, vars: 9, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction6"](2, _c24, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, ClickDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], pipes: [CalendarDatePipe], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);

let CalendarWeekViewEventComponent = class CalendarWeekViewEventComponent {
    constructor() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
};
CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) { return new (t || CalendarWeekViewEventComponent)(); };
CalendarWeekViewEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarWeekViewEventComponent, selectors: [["mwl-calendar-week-view-event"]], inputs: { locale: "locale", weekEvent: "weekEvent", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDisabled: "tooltipDisabled", tooltipDelay: "tooltipDelay", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", tooltipTemplate: "tooltipTemplate", column: "column", daysInWeek: "daysInWeek" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 12, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]], template: function CalendarWeekViewEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](2, _c26, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, CalendarEventTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], pipes: [CalendarEventTitlePipe, CalendarA11yPipe], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarWeekViewEventComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewEventComponent.prototype, "column", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);

let CalendarWeekViewHourSegmentComponent = class CalendarWeekViewHourSegmentComponent {
};
CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) { return new (t || CalendarWeekViewHourSegmentComponent)(); };
CalendarWeekViewHourSegmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarWeekViewHourSegmentComponent, selectors: [["mwl-calendar-week-view-hour-segment"]], inputs: { segment: "segment", segmentHeight: "segmentHeight", locale: "locale", isTimeLabel: "isTimeLabel", daysInWeek: "daysInWeek", customTemplate: "customTemplate" }, decls: 3, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]], template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](2, _c27, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], pipes: [CalendarA11yPipe, CalendarDatePipe], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);

let CalendarWeekViewCurrentTimeMarkerComponent = class CalendarWeekViewCurrentTimeMarkerComponent {
    constructor(dateAdapter, zone) {
        this.dateAdapter = dateAdapter;
        this.zone = zone;
        this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(this.columnDate);
        this.marker$ = this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.interval)(60 * 1000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMapTo)(this.columnDate$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)((columnDate) => {
            const startOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
            const endOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
            const hourHeightModifier = (this.hourSegments * this.hourSegmentHeight) / 60;
            const now = new Date();
            return {
                isVisible: this.dateAdapter.isSameDay(columnDate, now) &&
                    now >= startOfDay &&
                    now <= endOfDay,
                top: this.dateAdapter.differenceInMinutes(now, startOfDay) *
                    hourHeightModifier,
            };
        }));
    }
    ngOnChanges(changes) {
        if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
        }
    }
};
CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) { return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarWeekViewCurrentTimeMarkerComponent, selectors: [["mwl-calendar-week-view-current-time-marker"]], inputs: { columnDate: "columnDate", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", customTemplate: "customTemplate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 14, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]], template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction7"](6, _c28, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx.marker$)) == null ? null : tmp_1_0.top));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], encapsulation: 2 });
CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = () => [
    { type: DateAdapter },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
CalendarWeekViewCurrentTimeMarkerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [DateAdapter, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone])
], CalendarWeekViewCurrentTimeMarkerComponent);

let CalendarWeekModule = class CalendarWeekModule {
};
CalendarWeekModule.ɵfac = function CalendarWeekModule_Factory(t) { return new (t || CalendarWeekModule)(); };
CalendarWeekModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CalendarWeekModule });
CalendarWeekModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule,
            angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule,
            CalendarCommonModule,
        ], angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule,
        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule] });

/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
let CalendarDayViewComponent = class CalendarDayViewComponent {
    constructor() {
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must divide equally into 60.
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
};
CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) { return new (t || CalendarDayViewComponent)(); };
CalendarDayViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarDayViewComponent, selectors: [["mwl-calendar-day-view"]], inputs: { events: "events", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", snapDraggedEvents: "snapDraggedEvents", viewDate: "viewDate", refresh: "refresh", locale: "locale", eventSnapSize: "eventSnapSize", tooltipTemplate: "tooltipTemplate", hourSegmentTemplate: "hourSegmentTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", currentTimeMarkerTemplate: "currentTimeMarkerTemplate" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender" }, decls: 1, vars: 23, consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]], template: function CalendarDayViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { return ctx.eventClicked.emit($event); })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) { return ctx.hourSegmentClicked.emit($event); })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { return ctx.eventTimesChanged.emit($event); })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) { return ctx.beforeViewRender.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
    } }, directives: [CalendarWeekViewComponent], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)
], CalendarDayViewComponent.prototype, "viewDate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
], CalendarDayViewComponent.prototype, "events", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarDayViewComponent.prototype, "hourSegments", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject)
], CalendarDayViewComponent.prototype, "refresh", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
], CalendarDayViewComponent.prototype, "locale", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)
], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarDayViewComponent.prototype, "eventClicked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);

let CalendarDayModule = class CalendarDayModule {
};
CalendarDayModule.ɵfac = function CalendarDayModule_Factory(t) { return new (t || CalendarDayModule)(); };
CalendarDayModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CalendarDayModule });
CalendarDayModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, CalendarCommonModule, CalendarWeekModule]] });

var CalendarModule_1;
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
let CalendarModule = CalendarModule_1 = class CalendarModule {
    static forRoot(dateAdapter, config = {}) {
        return {
            ngModule: CalendarModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils,
                config.a11y || CalendarA11y,
            ],
        };
    }
};
CalendarModule.ɵfac = function CalendarModule_Factory(t) { return new (t || CalendarModule)(); };
CalendarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            CalendarCommonModule,
            CalendarMonthModule,
            CalendarWeekModule,
            CalendarDayModule,
        ], CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-event-actions',
                template: `
    <ng-template
      #defaultTemplate
      let-event="event"
      let-trackByActionId="trackByActionId"
    >
      <span *ngIf="event.actions" class="cal-event-actions">
        <a
          class="cal-event-action"
          href="javascript:;"
          *ngFor="let action of event.actions; trackBy: trackByActionId"
          (mwlClick)="action.onClick({ event: event, sourceEvent: $event })"
          (mwlKeydownEnter)="
            action.onClick({ event: event, sourceEvent: $event })
          "
          [ngClass]="action.cssClass"
          [innerHtml]="action.label"
          tabindex="0"
          role="button"
          [attr.aria-label]="
            { action: action } | calendarA11y: 'actionButtonLabel'
          "
        >
        </a>
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        trackByActionId: trackByActionId
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-event-title',
                template: `
    <ng-template #defaultTemplate let-event="event" let-view="view">
      <span
        class="cal-event-title"
        [innerHTML]="event.title | calendarEventTitle: view:event"
        [attr.aria-hidden]="{} | calendarA11y: 'hideEventTitle'"
      >
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        view: view
      }"
    >
    </ng-template>
  `
            }]
    }], null, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTooltipWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-tooltip-window',
                template: `
    <ng-template
      #defaultTemplate
      let-contents="contents"
      let-placement="placement"
      let-event="event"
    >
      <div class="cal-tooltip" [ngClass]="'cal-tooltip-' + placement">
        <div class="cal-tooltip-arrow"></div>
        <div class="cal-tooltip-inner" [innerHtml]="contents"></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        contents: contents,
        placement: placement,
        event: event
      }"
    >
    </ng-template>
  `
            }]
    }], null, { contents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mwlCalendarTooltip]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }]; }, { placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipPlacement']
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipDelay']
        }], onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['mouseenter']
        }], onMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['mouseleave']
        }], contents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['mwlCalendarTooltip']
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipTemplate']
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipEvent']
        }], appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipAppendToBody']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarPreviousViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mwlCalendarPreviousView]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { excludeDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], viewDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], 
    /**
     * @hidden
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['click']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarNextViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mwlCalendarNextView]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { excludeDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], viewDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], 
    /**
     * @hidden
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['click']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTodayDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mwlCalendarToday]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { viewDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], 
    /**
     * @hidden
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['click']
        }], viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarAngularDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
        args: [{
                name: 'calendarDate'
            }]
    }], function () { return [{ type: CalendarDateFormatter }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
        args: [{
                name: 'calendarEventTitle'
            }]
    }], function () { return [{ type: CalendarEventTitleFormatter }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClickDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mwlClick]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }]; }, { clickListenerDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
            args: ['mwlClick']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](KeydownEnterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{ selector: '[mwlKeydownEnter]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }]; }, { keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
            args: ['mwlKeydownEnter']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarA11y, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarA11yPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
        args: [{
                name: 'calendarA11y'
            }]
    }], function () { return [{ type: CalendarA11y }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMomentDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [MOMENT]
            }] }, { type: DateAdapter }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarNativeDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                declarations: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    CalendarA11yPipe,
                    ClickDirective,
                    KeydownEnterDirective,
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
                exports: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    CalendarA11yPipe,
                    ClickDirective,
                    KeydownEnterDirective,
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe],
                entryComponents: [CalendarTooltipWindowComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CalendarCommonModule, { declarations: function () { return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]; }, exports: function () { return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-month-view',
                template: `
    <div class="cal-month-view" role="grid">
      <mwl-calendar-month-view-header
        [days]="columnHeaders"
        [locale]="locale"
        (columnHeaderClicked)="columnHeaderClicked.emit($event)"
        [customTemplate]="headerTemplate"
      >
      </mwl-calendar-month-view-header>
      <div class="cal-days">
        <div
          *ngFor="let rowIndex of view.rowOffsets; trackBy: trackByRowOffset"
        >
          <div class="cal-cell-row">
            <mwl-calendar-month-cell
              *ngFor="
                let day of view.days
                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;
                trackBy: trackByDate
              "
              [ngClass]="day?.cssClass"
              [day]="day"
              [openDay]="openDay"
              [locale]="locale"
              [tooltipPlacement]="tooltipPlacement"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipDelay]="tooltipDelay"
              [customTemplate]="cellTemplate"
              [ngStyle]="{ backgroundColor: day.backgroundColor }"
              (mwlClick)="dayClicked.emit({ day: day, sourceEvent: $event })"
              [clickListenerDisabled]="dayClicked.observers.length === 0"
              (mwlKeydownEnter)="
                dayClicked.emit({ day: day, sourceEvent: $event })
              "
              (highlightDay)="toggleDayHighlight($event.event, true)"
              (unhighlightDay)="toggleDayHighlight($event.event, false)"
              mwlDroppable
              dragOverClass="cal-drag-over"
              (drop)="
                eventDropped(
                  day,
                  $event.dropData.event,
                  $event.dropData.draggedFrom
                )
              "
              (eventClicked)="
                eventClicked.emit({
                  event: $event.event,
                  sourceEvent: $event.sourceEvent
                })
              "
              [attr.tabindex]="{} | calendarA11y: 'monthCellTabIndex'"
            >
            </mwl-calendar-month-cell>
          </div>
          <mwl-calendar-open-day-events
            [locale]="locale"
            [isOpen]="openRowIndex === rowIndex"
            [events]="openDay?.events"
            [date]="openDay?.date"
            [customTemplate]="openDayEventsTemplate"
            [eventTitleTemplate]="eventTitleTemplate"
            [eventActionsTemplate]="eventActionsTemplate"
            (eventClicked)="
              eventClicked.emit({
                event: $event.event,
                sourceEvent: $event.sourceEvent
              })
            "
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="
              eventDropped(
                openDay,
                $event.dropData.event,
                $event.dropData.draggedFrom
              )
            "
          >
          </mwl-calendar-open-day-events>
        </div>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }, { type: CalendarUtils }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
            }] }, { type: DateAdapter }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], excludeDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], activeDayIsOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], beforeViewRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dayClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], columnHeaderClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], eventTimesChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], activeDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], weekStartsOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], cellTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], openDayEventsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], weekendDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthViewHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-month-view-header',
                template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
    >
      <div class="cal-cell-row cal-header" role="row">
        <div
          class="cal-cell"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          (click)="
            columnHeaderClicked.emit({
              isoDayNumber: day.day,
              sourceEvent: $event
            })
          "
          [ngClass]="day.cssClass"
          tabindex="0"
          role="columnheader"
        >
          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { columnHeaderClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], days: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-month-cell',
                template: `
    <ng-template
      #defaultTemplate
      let-day="day"
      let-openDay="openDay"
      let-locale="locale"
      let-tooltipPlacement="tooltipPlacement"
      let-highlightDay="highlightDay"
      let-unhighlightDay="unhighlightDay"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDelay="tooltipDelay"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-cell-top"
        [attr.aria-label]="
          { day: day, locale: locale } | calendarA11y: 'monthCell'
        "
      >
        <span aria-hidden="true">
          <span class="cal-day-badge" *ngIf="day.badgeTotal > 0">{{
            day.badgeTotal
          }}</span>
          <span class="cal-day-number">{{
            day.date | calendarDate: 'monthViewDayNumber':locale
          }}</span>
        </span>
      </div>
      <div class="cal-events" *ngIf="day.events.length > 0">
        <div
          class="cal-event"
          *ngFor="let event of day.events; trackBy: trackByEventId"
          [ngStyle]="{ backgroundColor: event.color?.primary }"
          [ngClass]="event?.cssClass"
          (mouseenter)="highlightDay.emit({ event: event })"
          (mouseleave)="unhighlightDay.emit({ event: event })"
          [mwlCalendarTooltip]="
            event.title | calendarEventTitle: 'monthTooltip':event
          "
          [tooltipPlacement]="tooltipPlacement"
          [tooltipEvent]="event"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipAppendToBody]="tooltipAppendToBody"
          [tooltipDelay]="tooltipDelay"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event, draggedFrom: day }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          [touchStartLongPress]="{ delay: 300, delta: 30 }"
          (mwlClick)="eventClicked.emit({ event: event, sourceEvent: $event })"
          [attr.aria-hidden]="{} | calendarA11y: 'hideMonthCellEvents'"
        ></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        day: day,
        openDay: openDay,
        locale: locale,
        tooltipPlacement: tooltipPlacement,
        highlightDay: highlightDay,
        unhighlightDay: unhighlightDay,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDelay: tooltipDelay,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
                host: {
                    class: 'cal-cell cal-day-cell',
                    '[class.cal-past]': 'day.isPast',
                    '[class.cal-today]': 'day.isToday',
                    '[class.cal-future]': 'day.isFuture',
                    '[class.cal-weekend]': 'day.isWeekend',
                    '[class.cal-in-month]': 'day.inMonth',
                    '[class.cal-out-month]': '!day.inMonth',
                    '[class.cal-has-events]': 'day.events.length > 0',
                    '[class.cal-open]': 'day === openDay',
                    '[class.cal-event-highlight]': '!!day.backgroundColor'
                }
            }]
    }], function () { return []; }, { highlightDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], unhighlightDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], day: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], openDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarOpenDayEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-open-day-events',
                template: `
    <ng-template
      #defaultTemplate
      let-events="events"
      let-eventClicked="eventClicked"
      let-isOpen="isOpen"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-open-day-events"
        [@collapse]
        *ngIf="isOpen"
        role="application"
      >
        <span
          tabindex="-1"
          role="alert"
          [attr.aria-label]="
            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'
          "
        ></span>
        <span
          tabindex="0"
          role="landmark"
          [attr.aria-label]="
            { date: date, locale: locale }
              | calendarA11y: 'openDayEventsLandmark'
          "
        ></span>
        <div
          *ngFor="let event of events; trackBy: trackByEventId"
          [ngClass]="event?.cssClass"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          [touchStartLongPress]="{ delay: 300, delta: 30 }"
        >
          <span
            class="cal-event"
            [ngStyle]="{ backgroundColor: event.color?.primary }"
          >
          </span>
          &ngsp;
          <mwl-calendar-event-title
            [event]="event"
            [customTemplate]="eventTitleTemplate"
            view="month"
            (mwlClick)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            (mwlKeydownEnter)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            tabindex="0"
            [attr.aria-label]="
              { event: event, locale: locale }
                | calendarA11y: 'eventDescription'
            "
          >
          </mwl-calendar-event-title>
          &ngsp;
          <mwl-calendar-event-actions
            [event]="event"
            [customTemplate]="eventActionsTemplate"
          >
          </mwl-calendar-event-actions>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        events: events,
        eventClicked: eventClicked,
        isOpen: isOpen,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
                animations: [collapseAnimation]
            }]
    }], function () { return []; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, CalendarCommonModule],
                declarations: [
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent,
                ],
                exports: [
                    angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule,
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CalendarMonthModule, { declarations: function () { return [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, CalendarCommonModule]; }, exports: function () { return [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-week-view',
                template: `
    <div class="cal-week-view" role="grid">
      <mwl-calendar-week-view-header
        [days]="days"
        [locale]="locale"
        [customTemplate]="headerTemplate"
        (dayHeaderClicked)="dayHeaderClicked.emit($event)"
        (eventDropped)="
          eventDropped({ dropData: $event }, $event.newStart, true)
        "
        (dragEnter)="dateDragEnter($event.date)"
      >
      </mwl-calendar-week-view-header>
      <div
        class="cal-all-day-events"
        #allDayEventsContainer
        *ngIf="view.allDayEventRows.length > 0"
        mwlDroppable
        (dragEnter)="dragEnter('allDay')"
        (dragLeave)="dragLeave('allDay')"
      >
        <div class="cal-day-columns">
          <div
            class="cal-time-label-column"
            [ngTemplateOutlet]="allDayEventsLabelTemplate"
          ></div>
          <div
            class="cal-day-column"
            *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="eventDropped($event, day.date, true)"
            (dragEnter)="dateDragEnter(day.date)"
          ></div>
        </div>
        <div
          *ngFor="let eventRow of view.allDayEventRows; trackBy: trackById"
          #eventRowContainer
          class="cal-events-row"
        >
          <div
            *ngFor="
              let allDayEvent of eventRow.row;
              trackBy: trackByWeekAllDayEvent
            "
            #event
            class="cal-event-container"
            [class.cal-draggable]="
              allDayEvent.event.draggable && allDayEventResizes.size === 0
            "
            [class.cal-starts-within-week]="!allDayEvent.startsBeforeWeek"
            [class.cal-ends-within-week]="!allDayEvent.endsAfterWeek"
            [ngClass]="allDayEvent.event?.cssClass"
            [style.width.%]="(100 / days.length) * allDayEvent.span"
            [style.marginLeft.%]="(100 / days.length) * allDayEvent.offset"
            mwlResizable
            [resizeSnapGrid]="{ left: dayColumnWidth, right: dayColumnWidth }"
            [validateResize]="validateResize"
            (resizeStart)="
              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)
            "
            (resizing)="
              allDayEventResizing(allDayEvent, $event, dayColumnWidth)
            "
            (resizeEnd)="allDayEventResizeEnded(allDayEvent)"
            mwlDraggable
            dragActiveClass="cal-drag-active"
            [dropData]="{ event: allDayEvent.event, calendarId: calendarId }"
            [dragAxis]="{
              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,
              y:
                !snapDraggedEvents &&
                allDayEvent.event.draggable &&
                allDayEventResizes.size === 0
            }"
            [dragSnapGrid]="snapDraggedEvents ? { x: dayColumnWidth } : {}"
            [validateDrag]="validateDrag"
            [touchStartLongPress]="{ delay: 300, delta: 30 }"
            (dragStart)="dragStarted(eventRowContainer, event)"
            (dragging)="allDayEventDragMove()"
            (dragEnd)="dragEnded(allDayEvent, $event, dayColumnWidth)"
          >
            <div
              class="cal-resize-handle cal-resize-handle-before-start"
              *ngIf="
                allDayEvent.event?.resizable?.beforeStart &&
                !allDayEvent.startsBeforeWeek
              "
              mwlResizeHandle
              [resizeEdges]="{ left: true }"
            ></div>
            <mwl-calendar-week-view-event
              [locale]="locale"
              [weekEvent]="allDayEvent"
              [tooltipPlacement]="tooltipPlacement"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipDelay]="tooltipDelay"
              [customTemplate]="eventTemplate"
              [eventTitleTemplate]="eventTitleTemplate"
              [eventActionsTemplate]="eventActionsTemplate"
              [daysInWeek]="daysInWeek"
              (eventClicked)="
                eventClicked.emit({
                  event: allDayEvent.event,
                  sourceEvent: $event.sourceEvent
                })
              "
            >
            </mwl-calendar-week-view-event>
            <div
              class="cal-resize-handle cal-resize-handle-after-end"
              *ngIf="
                allDayEvent.event?.resizable?.afterEnd &&
                !allDayEvent.endsAfterWeek
              "
              mwlResizeHandle
              [resizeEdges]="{ right: true }"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="cal-time-events"
        mwlDroppable
        (dragEnter)="dragEnter('time')"
        (dragLeave)="dragLeave('time')"
      >
        <div
          class="cal-time-label-column"
          *ngIf="view.hourColumns.length > 0 && daysInWeek !== 1"
        >
          <div
            *ngFor="
              let hour of view.hourColumns[0].hours;
              trackBy: trackByHour;
              let odd = odd
            "
            class="cal-hour"
            [class.cal-hour-odd]="odd"
          >
            <mwl-calendar-week-view-hour-segment
              *ngFor="let segment of hour.segments; trackBy: trackByHourSegment"
              [style.height.px]="hourSegmentHeight"
              [segment]="segment"
              [segmentHeight]="hourSegmentHeight"
              [locale]="locale"
              [customTemplate]="hourSegmentTemplate"
              [isTimeLabel]="true"
              [daysInWeek]="daysInWeek"
            >
            </mwl-calendar-week-view-hour-segment>
          </div>
        </div>
        <div
          class="cal-day-columns"
          [class.cal-resize-active]="timeEventResizes.size > 0"
          #dayColumns
        >
          <div
            class="cal-day-column"
            *ngFor="let column of view.hourColumns; trackBy: trackByHourColumn"
          >
            <mwl-calendar-week-view-current-time-marker
              [columnDate]="column.date"
              [dayStartHour]="dayStartHour"
              [dayStartMinute]="dayStartMinute"
              [dayEndHour]="dayEndHour"
              [dayEndMinute]="dayEndMinute"
              [hourSegments]="hourSegments"
              [hourSegmentHeight]="hourSegmentHeight"
              [customTemplate]="currentTimeMarkerTemplate"
            ></mwl-calendar-week-view-current-time-marker>
            <div class="cal-events-container">
              <div
                *ngFor="
                  let timeEvent of column.events;
                  trackBy: trackByWeekTimeEvent
                "
                #event
                class="cal-event-container"
                [class.cal-draggable]="
                  timeEvent.event.draggable && timeEventResizes.size === 0
                "
                [class.cal-starts-within-day]="!timeEvent.startsBeforeDay"
                [class.cal-ends-within-day]="!timeEvent.endsAfterDay"
                [ngClass]="timeEvent.event.cssClass"
                [hidden]="timeEvent.height === 0 && timeEvent.width === 0"
                [style.top.px]="timeEvent.top"
                [style.height.px]="timeEvent.height"
                [style.left.%]="timeEvent.left"
                [style.width.%]="timeEvent.width"
                mwlResizable
                [resizeSnapGrid]="{
                  left: dayColumnWidth,
                  right: dayColumnWidth,
                  top: eventSnapSize || hourSegmentHeight,
                  bottom: eventSnapSize || hourSegmentHeight
                }"
                [validateResize]="validateResize"
                [allowNegativeResizes]="true"
                (resizeStart)="
                  timeEventResizeStarted(dayColumns, timeEvent, $event)
                "
                (resizing)="timeEventResizing(timeEvent, $event)"
                (resizeEnd)="timeEventResizeEnded(timeEvent)"
                mwlDraggable
                dragActiveClass="cal-drag-active"
                [dropData]="{ event: timeEvent.event, calendarId: calendarId }"
                [dragAxis]="{
                  x: timeEvent.event.draggable && timeEventResizes.size === 0,
                  y: timeEvent.event.draggable && timeEventResizes.size === 0
                }"
                [dragSnapGrid]="
                  snapDraggedEvents
                    ? {
                        x: dayColumnWidth,
                        y: eventSnapSize || hourSegmentHeight
                      }
                    : {}
                "
                [touchStartLongPress]="{ delay: 300, delta: 30 }"
                [ghostDragEnabled]="!snapDraggedEvents"
                [ghostElementTemplate]="weekEventTemplate"
                [validateDrag]="validateDrag"
                (dragStart)="dragStarted(dayColumns, event, timeEvent)"
                (dragging)="dragMove(timeEvent, $event)"
                (dragEnd)="dragEnded(timeEvent, $event, dayColumnWidth, true)"
              >
                <div
                  class="cal-resize-handle cal-resize-handle-before-start"
                  *ngIf="
                    timeEvent.event?.resizable?.beforeStart &&
                    !timeEvent.startsBeforeDay
                  "
                  mwlResizeHandle
                  [resizeEdges]="{
                    left: true,
                    top: true
                  }"
                ></div>
                <ng-template
                  [ngTemplateOutlet]="weekEventTemplate"
                ></ng-template>
                <ng-template #weekEventTemplate>
                  <mwl-calendar-week-view-event
                    [locale]="locale"
                    [weekEvent]="timeEvent"
                    [tooltipPlacement]="tooltipPlacement"
                    [tooltipTemplate]="tooltipTemplate"
                    [tooltipAppendToBody]="tooltipAppendToBody"
                    [tooltipDisabled]="dragActive || timeEventResizes.size > 0"
                    [tooltipDelay]="tooltipDelay"
                    [customTemplate]="eventTemplate"
                    [eventTitleTemplate]="eventTitleTemplate"
                    [eventActionsTemplate]="eventActionsTemplate"
                    [column]="column"
                    [daysInWeek]="daysInWeek"
                    (eventClicked)="
                      eventClicked.emit({
                        event: timeEvent.event,
                        sourceEvent: $event.sourceEvent
                      })
                    "
                  >
                  </mwl-calendar-week-view-event>
                </ng-template>
                <div
                  class="cal-resize-handle cal-resize-handle-after-end"
                  *ngIf="
                    timeEvent.event?.resizable?.afterEnd &&
                    !timeEvent.endsAfterDay
                  "
                  mwlResizeHandle
                  [resizeEdges]="{
                    right: true,
                    bottom: true
                  }"
                ></div>
              </div>
            </div>

            <div
              *ngFor="
                let hour of column.hours;
                trackBy: trackByHour;
                let odd = odd
              "
              class="cal-hour"
              [class.cal-hour-odd]="odd"
            >
              <mwl-calendar-week-view-hour-segment
                *ngFor="
                  let segment of hour.segments;
                  trackBy: trackByHourSegment
                "
                [style.height.px]="hourSegmentHeight"
                [segment]="segment"
                [segmentHeight]="hourSegmentHeight"
                [locale]="locale"
                [customTemplate]="hourSegmentTemplate"
                [daysInWeek]="daysInWeek"
                (mwlClick)="
                  hourSegmentClicked.emit({
                    date: segment.date,
                    sourceEvent: $event
                  })
                "
                [clickListenerDisabled]="
                  hourSegmentClicked.observers.length === 0
                "
                mwlDroppable
                [dragOverClass]="
                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null
                "
                dragActiveClass="cal-drag-active"
                (drop)="eventDropped($event, segment.date, false)"
                (dragEnter)="dateDragEnter(segment.date)"
                [isTimeLabel]="daysInWeek === 1"
              >
              </mwl-calendar-week-view-hour-segment>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }, { type: CalendarUtils }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
            }] }, { type: DateAdapter }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], excludeDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], precision: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], snapDraggedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], hourSegments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], hourSegmentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayStartHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayStartMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayEndHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayEndMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayHeaderClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], eventTimesChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], beforeViewRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], hourSegmentClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], weekStartsOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], weekendDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], hourSegmentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventSnapSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], allDayEventsLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], currentTimeMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-week-view-header',
                template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-dayHeaderClicked="dayHeaderClicked"
      let-eventDropped="eventDropped"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
      let-dragEnter="dragEnter"
    >
      <div class="cal-day-headers" role="row">
        <div
          class="cal-header"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          [ngClass]="day.cssClass"
          (mwlClick)="dayHeaderClicked.emit({ day: day, sourceEvent: $event })"
          mwlDroppable
          dragOverClass="cal-drag-over"
          (drop)="
            eventDropped.emit({
              event: $event.dropData.event,
              newStart: day.date
            })
          "
          (dragEnter)="dragEnter.emit({ date: day.date })"
          tabindex="0"
          role="columnheader"
        >
          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b
          ><br />
          <span>{{
            day.date | calendarDate: 'weekViewColumnSubHeader':locale
          }}</span>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        dayHeaderClicked: dayHeaderClicked,
        eventDropped: eventDropped,
        dragEnter: dragEnter,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { dayHeaderClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], eventDropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], days: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-week-view-event',
                template: `
    <ng-template
      #defaultTemplate
      let-weekEvent="weekEvent"
      let-tooltipPlacement="tooltipPlacement"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDisabled="tooltipDisabled"
      let-tooltipDelay="tooltipDelay"
      let-column="column"
      let-daysInWeek="daysInWeek"
    >
      <div
        class="cal-event"
        [ngStyle]="{
          backgroundColor: weekEvent.event.color?.secondary,
          borderColor: weekEvent.event.color?.primary
        }"
        [mwlCalendarTooltip]="
          !tooltipDisabled
            ? (weekEvent.event.title
              | calendarEventTitle
                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')
                : weekEvent.tempEvent || weekEvent.event)
            : ''
        "
        [tooltipPlacement]="tooltipPlacement"
        [tooltipEvent]="weekEvent.tempEvent || weekEvent.event"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipAppendToBody]="tooltipAppendToBody"
        [tooltipDelay]="tooltipDelay"
        (mwlClick)="eventClicked.emit({ sourceEvent: $event })"
        (mwlKeydownEnter)="eventClicked.emit({ sourceEvent: $event })"
        tabindex="0"
        role="application"
        [attr.aria-label]="
          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }
            | calendarA11y: 'eventDescription'
        "
      >
        <mwl-calendar-event-actions
          [event]="weekEvent.tempEvent || weekEvent.event"
          [customTemplate]="eventActionsTemplate"
        >
        </mwl-calendar-event-actions>
        &ngsp;
        <mwl-calendar-event-title
          [event]="weekEvent.tempEvent || weekEvent.event"
          [customTemplate]="eventTitleTemplate"
          [view]="daysInWeek === 1 ? 'day' : 'week'"
        >
        </mwl-calendar-event-title>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        weekEvent: weekEvent,
        tooltipPlacement: tooltipPlacement,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDisabled: tooltipDisabled,
        tooltipDelay: tooltipDelay,
        column: column,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], weekEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewHourSegmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-week-view-hour-segment',
                template: `
    <ng-template
      #defaultTemplate
      let-segment="segment"
      let-locale="locale"
      let-segmentHeight="segmentHeight"
      let-isTimeLabel="isTimeLabel"
      let-daysInWeek="daysInWeek"
    >
      <div
        [attr.aria-hidden]="
          {}
            | calendarA11y
              : (daysInWeek === 1
                  ? 'hideDayHourSegment'
                  : 'hideWeekHourSegment')
        "
        class="cal-hour-segment"
        [style.height.px]="segmentHeight"
        [class.cal-hour-start]="segment.isStart"
        [class.cal-after-hour-start]="!segment.isStart"
        [ngClass]="segment.cssClass"
      >
        <div class="cal-time" *ngIf="isTimeLabel">
          {{
            segment.displayDate
              | calendarDate
                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')
                : locale
          }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale,
        segmentHeight: segmentHeight,
        isTimeLabel: isTimeLabel,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
            }]
    }], null, { segment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], segmentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], isTimeLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewCurrentTimeMarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-week-view-current-time-marker',
                template: `
    <ng-template
      #defaultTemplate
      let-columnDate="columnDate"
      let-dayStartHour="dayStartHour"
      let-dayStartMinute="dayStartMinute"
      let-dayEndHour="dayEndHour"
      let-dayEndMinute="dayEndMinute"
      let-isVisible="isVisible"
      let-topPx="topPx"
    >
      <div
        class="cal-current-time-marker"
        *ngIf="isVisible"
        [style.top.px]="topPx"
      ></div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        columnDate: columnDate,
        dayStartHour: dayStartHour,
        dayStartMinute: dayStartMinute,
        dayEndHour: dayEndHour,
        dayEndMinute: dayEndMinute,
        isVisible: (marker$ | async)?.isVisible,
        topPx: (marker$ | async)?.top
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return [{ type: DateAdapter }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }]; }, { columnDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayStartHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayStartMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayEndHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayEndMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], hourSegments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], hourSegmentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                    angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule,
                    angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule,
                    CalendarCommonModule,
                ],
                declarations: [
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent,
                ],
                exports: [
                    angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule,
                    angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule,
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CalendarWeekModule, { declarations: function () { return [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule,
        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, CalendarCommonModule]; }, exports: function () { return [angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule,
        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDayViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mwl-calendar-day-view',
                template: `
    <mwl-calendar-week-view
      class="cal-day-view"
      [daysInWeek]="1"
      [viewDate]="viewDate"
      [events]="events"
      [hourSegments]="hourSegments"
      [hourSegmentHeight]="hourSegmentHeight"
      [dayStartHour]="dayStartHour"
      [dayStartMinute]="dayStartMinute"
      [dayEndHour]="dayEndHour"
      [dayEndMinute]="dayEndMinute"
      [refresh]="refresh"
      [locale]="locale"
      [eventSnapSize]="eventSnapSize"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipAppendToBody]="tooltipAppendToBody"
      [tooltipDelay]="tooltipDelay"
      [hourSegmentTemplate]="hourSegmentTemplate"
      [eventTemplate]="eventTemplate"
      [eventTitleTemplate]="eventTitleTemplate"
      [eventActionsTemplate]="eventActionsTemplate"
      [snapDraggedEvents]="snapDraggedEvents"
      [allDayEventsLabelTemplate]="allDayEventsLabelTemplate"
      [currentTimeMarkerTemplate]="currentTimeMarkerTemplate"
      (eventClicked)="eventClicked.emit($event)"
      (hourSegmentClicked)="hourSegmentClicked.emit($event)"
      (eventTimesChanged)="eventTimesChanged.emit($event)"
      (beforeViewRender)="beforeViewRender.emit($event)"
    ></mwl-calendar-week-view>
  `
            }]
    }], function () { return []; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], hourSegments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], hourSegmentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayStartHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayStartMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayEndHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dayEndMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], snapDraggedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], hourSegmentClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], eventTimesChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], beforeViewRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventSnapSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], hourSegmentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], allDayEventsLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], currentTimeMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, CalendarCommonModule, CalendarWeekModule],
                declarations: [CalendarDayViewComponent],
                exports: [CalendarDayViewComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CalendarDayModule, { declarations: function () { return [CalendarDayViewComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, CalendarCommonModule, CalendarWeekModule]; }, exports: function () { return [CalendarDayViewComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule,
                ],
                exports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CalendarModule, { imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule], exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule] }); })();

/*
 * Public API Surface of angular-calendar
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 58617:
/*!***************************************************************************!*\
  !*** ./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": () => (/* binding */ adapterFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 93450);
/* harmony import */ var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ 73435);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 78856);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 88053);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 88393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 54531);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 35654);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 32362);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 11625);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 77722);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 62131);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 28920);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 14190);



function adapterFactory() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (0,calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__.adapterFactory)()), { addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
        addMonths: date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
        subDays: date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
        subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_5__["default"],
        subMonths: date_fns__WEBPACK_IMPORTED_MODULE_6__["default"],
        getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_7__["default"],
        setDate: date_fns__WEBPACK_IMPORTED_MODULE_8__["default"],
        setMonth: date_fns__WEBPACK_IMPORTED_MODULE_9__["default"],
        setYear: date_fns__WEBPACK_IMPORTED_MODULE_10__["default"],
        getDate: date_fns__WEBPACK_IMPORTED_MODULE_11__["default"],
        getYear: date_fns__WEBPACK_IMPORTED_MODULE_12__["default"] });
}


/***/ }),

/***/ 81802:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragAndDropModule": () => (/* binding */ DragAndDropModule),
/* harmony export */   "ɵa": () => (/* binding */ DroppableDirective),
/* harmony export */   "ɵb": () => (/* binding */ DraggableDirective),
/* harmony export */   "ɵc": () => (/* binding */ DraggableHelper),
/* harmony export */   "ɵd": () => (/* binding */ DraggableScrollContainerDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mattlewis92/dom-autoscroller */ 70027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 24514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 52160);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 23432);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 89221);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 53298);






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class DraggableHelper {
    constructor() {
        this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
}
DraggableHelper.ɵfac = function DraggableHelper_Factory(t) { return new (t || DraggableHelper)(); };
DraggableHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DraggableHelper, factory: DraggableHelper.ɵfac, providedIn: 'root' });
/** @nocollapse */ DraggableHelper.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.defineInjectable)({ factory: function DraggableHelper_Factory() { return new DraggableHelper(); }, token: DraggableHelper, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
 * ```html
 * <div style="overflow: scroll" mwlDraggableScrollContainer>
 * <div mwlDraggable>Drag me!</div>
 * </div>
 * ```
 */
class DraggableScrollContainerDirective {
    /**
     * @hidden
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Trigger the DragStart after a long touch in scrollable container when true
         * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
         */
        this.activeLongPressDrag = false;
        /**
         * Configuration of a long touch
         * Duration in ms of a long touch before activating DragStart
         * Delta of the
         * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
         */
        this.longPressConfig = { duration: 300, delta: 30 };
    }
}
DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) { return new (t || DraggableScrollContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
DraggableScrollContainerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: DraggableScrollContainerDirective, selectors: [["", "mwlDraggableScrollContainer", ""]], inputs: { activeLongPressDrag: "activeLongPressDrag", longPressConfig: "longPressConfig" } });
/** @nocollapse */
DraggableScrollContainerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
DraggableScrollContainerDirective.propDecorators = {
    activeLongPressDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    longPressConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableScrollContainerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mwlDraggableScrollContainer]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }]; }, { activeLongPressDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], longPressConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} renderer
 * @param {?} element
 * @param {?} classToAdd
 * @return {?}
 */
function addClass(renderer, element, classToAdd) {
    if (classToAdd) {
        classToAdd
            .split(' ')
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => renderer.addClass(element.nativeElement, className)));
    }
}
/**
 * @param {?} renderer
 * @param {?} element
 * @param {?} classToRemove
 * @return {?}
 */
function removeClass(renderer, element, classToRemove) {
    if (classToRemove) {
        classToRemove
            .split(' ')
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => renderer.removeClass(element.nativeElement, className)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DraggableDirective {
    /**
     * @hidden
     * @param {?} element
     * @param {?} renderer
     * @param {?} draggableHelper
     * @param {?} zone
     * @param {?} vcr
     * @param {?} scrollContainer
     * @param {?} document
     */
    constructor(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */
        this.dragAxis = { x: true, y: true };
        /**
         * Snap all drags to an x / y grid
         */
        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */
        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */
        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when hovering over a draggable element
         */
        this.dragCursor = '';
        /*
           * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
           */
        this.autoScroll = {
            margin: 20,
        };
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */
        this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called after the ghost element has been created
         */
        this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when the element is being dragged
         */
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called after the element is dragged
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * @hidden
         */
        this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /**
         * @hidden
         */
        this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /**
         * @hidden
         */
        this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.timeLongPress = { timerBegin: 0, timerEnd: 0 };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkEventListeners();
        /** @type {?} */
        const pointerDragged$ = this.pointerDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((/**
         * @return {?}
         */
        () => this.canDrag())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((/**
         * @param {?} pointerDownEvent
         * @return {?}
         */
        (pointerDownEvent) => {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !this.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
            }
            // hack to prevent text getting selected in safari while dragging
            /** @type {?} */
            const globalDragStyle = this.renderer.createElement('style');
            this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');
            this.renderer.appendChild(globalDragStyle, this.renderer.createText(`
          body * {
           -moz-user-select: none;
           -ms-user-select: none;
           -webkit-user-select: none;
           user-select: none;
          }
        `));
            requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                this.document.head.appendChild(globalDragStyle);
            }));
            /** @type {?} */
            const startScrollPosition = this.getScrollPosition();
            /** @type {?} */
            const scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const scrollContainer = this.scrollContainer
                    ? this.scrollContainer.elementRef.nativeElement
                    : 'window';
                return this.renderer.listen(scrollContainer, 'scroll', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => observer.next(e)));
            })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(startScrollPosition), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
             * @return {?}
             */
            () => this.getScrollPosition())));
            /** @type {?} */
            const currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
            /** @type {?} */
            const cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject();
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.dragPointerDown.next({ x: 0, y: 0 });
            }));
            /** @type {?} */
            const dragComplete$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.pointerUp$, this.pointerDown$, cancelDrag$, this.destroy$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
            /** @type {?} */
            const pointerMove = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([
                this.pointerMove$,
                scrollContainerScroll$,
            ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
             * @param {?} __0
             * @return {?}
             */
            ([pointerMoveEvent, scroll]) => {
                return {
                    currentDrag$,
                    transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY,
                    scrollLeft: scroll.left,
                    scrollTop: scroll.top,
                    target: pointerMoveEvent.event.target,
                };
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                if (this.dragSnapGrid.x) {
                    moveData.transformX =
                        Math.round(moveData.transformX / this.dragSnapGrid.x) *
                            this.dragSnapGrid.x;
                }
                if (this.dragSnapGrid.y) {
                    moveData.transformY =
                        Math.round(moveData.transformY / this.dragSnapGrid.y) *
                            this.dragSnapGrid.y;
                }
                return moveData;
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                if (!this.dragAxis.x) {
                    moveData.transformX = 0;
                }
                if (!this.dragAxis.y) {
                    moveData.transformY = 0;
                }
                return moveData;
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                /** @type {?} */
                const scrollX = moveData.scrollLeft - startScrollPosition.left;
                /** @type {?} */
                const scrollY = moveData.scrollTop - startScrollPosition.top;
                return Object.assign({}, moveData, { x: moveData.transformX + scrollX, y: moveData.transformY + scrollY });
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((/**
             * @param {?} __0
             * @return {?}
             */
            ({ x, y, transformX, transformY }) => !this.validateDrag ||
                this.validateDrag({
                    x,
                    y,
                    transform: { x: transformX, y: transformY },
                }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(dragComplete$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
            /** @type {?} */
            const dragStarted$ = pointerMove.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
            /** @type {?} */
            const dragEnded$ = pointerMove.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeLast)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
            dragStarted$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ clientX, clientY, x, y }) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragStart.next({ cancelDrag$ });
                }));
                this.scroller = (0,_mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_0__["default"])([
                    this.scrollContainer
                        ? this.scrollContainer.elementRef.nativeElement
                        : this.document.defaultView,
                ], Object.assign({}, this.autoScroll, { /**
                     * @return {?}
                     */
                    autoScroll() {
                        return true;
                    } }));
                addClass(this.renderer, this.element, this.dragActiveClass);
                if (this.ghostDragEnabled) {
                    /** @type {?} */
                    const rect = this.element.nativeElement.getBoundingClientRect();
                    /** @type {?} */
                    const clone = (/** @type {?} */ (this.element.nativeElement.cloneNode(true)));
                    if (!this.showOriginalElementWhileDragging) {
                        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'hidden');
                    }
                    if (this.ghostElementAppendTo) {
                        this.ghostElementAppendTo.appendChild(clone);
                    }
                    else {
                        (/** @type {?} */ (this.element.nativeElement.parentNode)).insertBefore(clone, this.element.nativeElement.nextSibling);
                    }
                    this.ghostElement = clone;
                    this.document.body.style.cursor = this.dragCursor;
                    this.setElementStyles(clone, {
                        position: 'fixed',
                        top: `${rect.top}px`,
                        left: `${rect.left}px`,
                        width: `${rect.width}px`,
                        height: `${rect.height}px`,
                        cursor: this.dragCursor,
                        margin: '0',
                        willChange: 'transform',
                        pointerEvents: 'none',
                    });
                    if (this.ghostElementTemplate) {
                        /** @type {?} */
                        const viewRef = this.vcr.createEmbeddedView(this.ghostElementTemplate);
                        clone.innerHTML = '';
                        viewRef.rootNodes
                            .filter((/**
                         * @param {?} node
                         * @return {?}
                         */
                        (node) => node instanceof Node))
                            .forEach((/**
                         * @param {?} node
                         * @return {?}
                         */
                        (node) => {
                            clone.appendChild(node);
                        }));
                        dragEnded$.subscribe((/**
                         * @return {?}
                         */
                        () => {
                            this.vcr.remove(this.vcr.indexOf(viewRef));
                        }));
                    }
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.ghostElementCreated.emit({
                            clientX: clientX - x,
                            clientY: clientY - y,
                            element: clone,
                        });
                    }));
                    dragEnded$.subscribe((/**
                     * @return {?}
                     */
                    () => {
                        (/** @type {?} */ (clone.parentElement)).removeChild(clone);
                        this.ghostElement = null;
                        this.renderer.setStyle(this.element.nativeElement, 'visibility', '');
                    }));
                }
                this.draggableHelper.currentDrag.next(currentDrag$);
            }));
            dragEnded$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((/**
             * @param {?} dragEndData
             * @return {?}
             */
            (dragEndData) => {
                /** @type {?} */
                const dragEndData$ = cancelDrag$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.count)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
                 * @param {?} calledCount
                 * @return {?}
                 */
                (calledCount) => (Object.assign({}, dragEndData, { dragCancelled: calledCount > 0 })))));
                cancelDrag$.complete();
                return dragEndData$;
            })))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ x, y, dragCancelled }) => {
                this.scroller.destroy();
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragEnd.next({ x, y, dragCancelled });
                }));
                removeClass(this.renderer, this.element, this.dragActiveClass);
                currentDrag$.complete();
            }));
            (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(dragComplete$, dragEnded$)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => {
                    this.document.head.removeChild(globalDragStyle);
                }));
            }));
            return pointerMove;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(pointerDragged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
         * @param {?} value
         * @return {?}
         */
        (value) => [, value]))), pointerDragged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)()))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((/**
         * @param {?} __0
         * @return {?}
         */
        ([previous, next]) => {
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
         * @param {?} __0
         * @return {?}
         */
        ([previous, next]) => next)))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ x, y, currentDrag$, clientX, clientY, transformX, transformY, target, }) => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.dragging.next({ x, y });
            }));
            requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                if (this.ghostElement) {
                    /** @type {?} */
                    const transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
                    this.setElementStyles(this.ghostElement, {
                        transform,
                        '-webkit-transform': transform,
                        '-ms-transform': transform,
                        '-moz-transform': transform,
                        '-o-transform': transform,
                    });
                }
            }));
            currentDrag$.next({
                clientX,
                clientY,
                dropData: this.dropData,
                target,
            });
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dragAxis) {
            this.checkEventListeners();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeEventListeners();
        this.pointerDown$.complete();
        this.pointerMove$.complete();
        this.pointerUp$.complete();
        this.destroy$.next();
    }
    /**
     * @private
     * @return {?}
     */
    checkEventListeners() {
        /** @type {?} */
        const canDrag = this.canDrag();
        /** @type {?} */
        const hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.eventListenerSubscriptions.mousedown = this.renderer.listen(this.element.nativeElement, 'mousedown', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onMouseDown(event);
                }));
                this.eventListenerSubscriptions.mouseup = this.renderer.listen('document', 'mouseup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onMouseUp(event);
                }));
                this.eventListenerSubscriptions.touchstart = this.renderer.listen(this.element.nativeElement, 'touchstart', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchStart(event);
                }));
                this.eventListenerSubscriptions.touchend = this.renderer.listen('document', 'touchend', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchEnd(event);
                }));
                this.eventListenerSubscriptions.touchcancel = this.renderer.listen('document', 'touchcancel', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchEnd(event);
                }));
                this.eventListenerSubscriptions.mouseenter = this.renderer.listen(this.element.nativeElement, 'mouseenter', (/**
                 * @return {?}
                 */
                () => {
                    this.onMouseEnter();
                }));
                this.eventListenerSubscriptions.mouseleave = this.renderer.listen(this.element.nativeElement, 'mouseleave', (/**
                 * @return {?}
                 */
                () => {
                    this.onMouseLeave();
                }));
            }));
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        if (event.button === 0) {
            if (!this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} mouseMoveEvent
                 * @return {?}
                 */
                (mouseMoveEvent) => {
                    this.pointerMove$.next({
                        event: mouseMoveEvent,
                        clientX: mouseMoveEvent.clientX,
                        clientY: mouseMoveEvent.clientY,
                    });
                }));
            }
            this.pointerDown$.next({
                event,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        if (event.button === 0) {
            if (this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove();
                delete this.eventListenerSubscriptions.mousemove;
            }
            this.pointerUp$.next({
                event,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onTouchStart(event) {
        /** @type {?} */
        let startScrollPosition;
        /** @type {?} */
        let isDragActivated;
        /** @type {?} */
        let hasContainerScrollbar;
        if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
            this.touchStartLongPress) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
        }
        if (!this.eventListenerSubscriptions.touchmove) {
            /** @type {?} */
            const contextMenuListener = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'contextmenu').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                e.preventDefault();
            }));
            /** @type {?} */
            const touchMoveListener = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'touchmove', {
                passive: false,
            }).subscribe((/**
             * @param {?} touchMoveEvent
             * @return {?}
             */
            (touchMoveEvent) => {
                if (((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
                    this.touchStartLongPress) &&
                    !isDragActivated &&
                    hasContainerScrollbar) {
                    isDragActivated = this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }
                if (((!this.scrollContainer ||
                    !this.scrollContainer.activeLongPressDrag) &&
                    !this.touchStartLongPress) ||
                    !hasContainerScrollbar ||
                    isDragActivated) {
                    touchMoveEvent.preventDefault();
                    this.pointerMove$.next({
                        event: touchMoveEvent,
                        clientX: touchMoveEvent.targetTouches[0].clientX,
                        clientY: touchMoveEvent.targetTouches[0].clientY,
                    });
                }
            }));
            this.eventListenerSubscriptions.touchmove = (/**
             * @return {?}
             */
            () => {
                contextMenuListener.unsubscribe();
                touchMoveListener.unsubscribe();
            });
        }
        this.pointerDown$.next({
            event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY,
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onTouchEnd(event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
            if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
                this.touchStartLongPress) {
                this.enableScroll();
            }
        }
        this.pointerUp$.next({
            event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY,
        });
    }
    /**
     * @private
     * @return {?}
     */
    onMouseEnter() {
        this.setCursor(this.dragCursor);
    }
    /**
     * @private
     * @return {?}
     */
    onMouseLeave() {
        this.setCursor('');
    }
    /**
     * @private
     * @return {?}
     */
    canDrag() {
        return this.dragAxis.x || this.dragAxis.y;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setCursor(value) {
        if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
        }
    }
    /**
     * @private
     * @return {?}
     */
    unsubscribeEventListeners() {
        Object.keys(this.eventListenerSubscriptions).forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            ((/** @type {?} */ (this))).eventListenerSubscriptions[type]();
            delete ((/** @type {?} */ (this))).eventListenerSubscriptions[type];
        }));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    setElementStyles(element, styles) {
        Object.keys(styles).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            this.renderer.setStyle(element, key, styles[key]);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getScrollElement() {
        if (this.scrollContainer) {
            return this.scrollContainer.elementRef.nativeElement;
        }
        else {
            return this.document.body;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getScrollPosition() {
        if (this.scrollContainer) {
            return {
                top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                left: this.scrollContainer.elementRef.nativeElement.scrollLeft,
            };
        }
        else {
            return {
                top: window.pageYOffset || this.document.documentElement.scrollTop,
                left: window.pageXOffset || this.document.documentElement.scrollLeft,
            };
        }
    }
    /**
     * @private
     * @param {?} event
     * @param {?} touchMoveEvent
     * @param {?} startScrollPosition
     * @return {?}
     */
    shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
        /** @type {?} */
        const moveScrollPosition = this.getScrollPosition();
        /** @type {?} */
        const deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left),
        };
        /** @type {?} */
        const deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
        /** @type {?} */
        const deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
        /** @type {?} */
        const deltaTotal = deltaX + deltaY;
        /** @type {?} */
        const longPressConfig = this.touchStartLongPress
            ? this.touchStartLongPress
            : /* istanbul ignore next */
                {
                    delta: this.scrollContainer.longPressConfig.delta,
                    delay: this.scrollContainer.longPressConfig.duration,
                };
        if (deltaTotal > longPressConfig.delta ||
            deltaScroll.top > 0 ||
            deltaScroll.left > 0) {
            this.timeLongPress.timerBegin = Date.now();
        }
        this.timeLongPress.timerEnd = Date.now();
        /** @type {?} */
        const duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;
        if (duration >= longPressConfig.delay) {
            this.disableScroll();
            return true;
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    enableScroll() {
        if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
        }
        this.renderer.setStyle(this.document.body, 'overflow', '');
    }
    /**
     * @private
     * @return {?}
     */
    disableScroll() {
        /* istanbul ignore next */
        if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
        }
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    }
    /**
     * @private
     * @return {?}
     */
    hasScrollbar() {
        /** @type {?} */
        const scrollContainer = this.getScrollElement();
        /** @type {?} */
        const containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
        /** @type {?} */
        const containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
        return containerHasHorizontalScroll || containerHasVerticalScroll;
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT)); };
DraggableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: DraggableDirective, selectors: [["", "mwlDraggable", ""]], inputs: { dragAxis: "dragAxis", dragSnapGrid: "dragSnapGrid", ghostDragEnabled: "ghostDragEnabled", showOriginalElementWhileDragging: "showOriginalElementWhileDragging", dragCursor: "dragCursor", autoScroll: "autoScroll", dropData: "dropData", validateDrag: "validateDrag", dragActiveClass: "dragActiveClass", ghostElementAppendTo: "ghostElementAppendTo", ghostElementTemplate: "ghostElementTemplate", touchStartLongPress: "touchStartLongPress" }, outputs: { dragPointerDown: "dragPointerDown", dragStart: "dragStart", ghostElementCreated: "ghostElementCreated", dragging: "dragging", dragEnd: "dragEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 },
    { type: DraggableHelper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef },
    { type: DraggableScrollContainerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT,] }] }
];
DraggableDirective.propDecorators = {
    dropData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dragAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dragSnapGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ghostDragEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showOriginalElementWhileDragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    validateDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dragCursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dragActiveClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ghostElementAppendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ghostElementTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    touchStartLongPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    autoScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dragPointerDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    ghostElementCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mwlDraggable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }, { type: DraggableHelper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef }, { type: DraggableScrollContainerDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT]
            }] }]; }, { dragAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dragSnapGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], ghostDragEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], showOriginalElementWhileDragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dragCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], autoScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dragPointerDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], ghostElementCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dropData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], validateDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dragActiveClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], ghostElementAppendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], ghostElementTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], touchStartLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} clientX
 * @param {?} clientY
 * @param {?} rect
 * @return {?}
 */
function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return (clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom);
}
class DroppableDirective {
    /**
     * @param {?} element
     * @param {?} draggableHelper
     * @param {?} zone
     * @param {?} renderer
     * @param {?} scrollContainer
     */
    constructor(element, draggableHelper, zone, renderer, scrollContainer) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.renderer = renderer;
        this.scrollContainer = scrollContainer;
        /**
         * Called when a draggable element starts overlapping the element
         */
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when a draggable element stops overlapping the element
         */
        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when a draggable element is moved over the element
         */
        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when a draggable element is dropped on this element
         */
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // tslint:disable-line no-output-named-after-standard-event
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe((/**
         * @param {?} drag$
         * @return {?}
         */
        (drag$) => {
            addClass(this.renderer, this.element, this.dragActiveClass);
            /** @type {?} */
            const droppableElement = {
                updateCache: true,
            };
            /** @type {?} */
            const deregisterScrollListener = this.renderer.listen(this.scrollContainer
                ? this.scrollContainer.elementRef.nativeElement
                : 'window', 'scroll', (/**
             * @return {?}
             */
            () => {
                droppableElement.updateCache = true;
            }));
            /** @type {?} */
            let currentDragDropData;
            /** @type {?} */
            const overlaps$ = drag$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
             * @param {?} __0
             * @return {?}
             */
            ({ clientX, clientY, dropData, target }) => {
                currentDragDropData = dropData;
                if (droppableElement.updateCache) {
                    droppableElement.rect = this.element.nativeElement.getBoundingClientRect();
                    if (this.scrollContainer) {
                        droppableElement.scrollContainerRect = this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                    }
                    droppableElement.updateCache = false;
                }
                /** @type {?} */
                const isWithinElement = isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.rect)));
                /** @type {?} */
                const isDropAllowed = !this.validateDrop ||
                    this.validateDrop({ clientX, clientY, target });
                if (droppableElement.scrollContainerRect) {
                    return (isWithinElement &&
                        isDropAllowed &&
                        isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.scrollContainerRect))));
                }
                else {
                    return isWithinElement && isDropAllowed;
                }
            })));
            /** @type {?} */
            const overlapsChanged$ = overlaps$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)());
            /** @type {?} */
            let dragOverActive;
            overlapsChanged$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            (overlapsNow) => overlapsNow)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                dragOverActive = true;
                addClass(this.renderer, this.element, this.dragOverClass);
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragEnter.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlaps$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            (overlapsNow) => overlapsNow))).subscribe((/**
             * @return {?}
             */
            () => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragOver.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlapsChanged$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((/**
             * @param {?} __0
             * @return {?}
             */
            ([didOverlap, overlapsNow]) => didOverlap && !overlapsNow)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                dragOverActive = false;
                removeClass(this.renderer, this.element, this.dragOverClass);
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragLeave.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            drag$.subscribe({
                complete: (/**
                 * @return {?}
                 */
                () => {
                    deregisterScrollListener();
                    removeClass(this.renderer, this.element, this.dragActiveClass);
                    if (dragOverActive) {
                        removeClass(this.renderer, this.element, this.dragOverClass);
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            this.drop.next({
                                dropData: currentDragDropData,
                            });
                        }));
                    }
                }),
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
        }
    }
}
DroppableDirective.ɵfac = function DroppableDirective_Factory(t) { return new (t || DroppableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8)); };
DroppableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: DroppableDirective, selectors: [["", "mwlDroppable", ""]], inputs: { dragOverClass: "dragOverClass", dragActiveClass: "dragActiveClass", validateDrop: "validateDrop" }, outputs: { dragEnter: "dragEnter", dragLeave: "dragLeave", dragOver: "dragOver", drop: "drop" } });
/** @nocollapse */
DroppableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: DraggableHelper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 },
    { type: DraggableScrollContainerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }] }
];
DroppableDirective.propDecorators = {
    dragOverClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dragActiveClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    validateDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dragEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    dragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    dragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    drop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DroppableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mwlDroppable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: DraggableHelper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }, { type: DraggableScrollContainerDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }] }]; }, { dragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], dragOverClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dragActiveClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], validateDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragAndDropModule {
}
DragAndDropModule.ɵfac = function DragAndDropModule_Factory(t) { return new (t || DragAndDropModule)(); };
DragAndDropModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DragAndDropModule });
DragAndDropModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DragAndDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                declarations: [
                    DraggableDirective,
                    DroppableDirective,
                    DraggableScrollContainerDirective,
                ],
                exports: [
                    DraggableDirective,
                    DroppableDirective,
                    DraggableScrollContainerDirective,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DragAndDropModule, { declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective], exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 86115:
/*!***************************************************************************************************!*\
  !*** ./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizableDirective": () => (/* binding */ ResizableDirective),
/* harmony export */   "ResizableModule": () => (/* binding */ ResizableModule),
/* harmony export */   "ResizeHandleDirective": () => (/* binding */ ResizeHandleDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 24514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71695);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 89221);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 59151);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 * @type {?}
 */

const IS_TOUCH_DEVICE = (() => {
    // In case we're in Node.js environment.
    if (typeof window === 'undefined') {
        return false;
    }
    else {
        return ('ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0);
    }
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */
function isNumberCloseTo(value1, value2, precision = 3) {
    /** @type {?} */
    const diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    /** @type {?} */
    const newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    /** @type {?} */
    let translateX = 0;
    /** @type {?} */
    let translateY = 0;
    /** @type {?} */
    const style = element.nativeElement.style;
    /** @type {?} */
    const transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    /** @type {?} */
    const transform = transformProperties
        .map(property => style[property])
        .find(value => !!value);
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
        translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        /** @type {?} */
        const boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY({ clientY, rect }) {
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX({ clientX, rect }) {
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges({ clientX, clientY, elm, allowedEdges, cursorPrecision }) {
    /** @type {?} */
    const elmPosition = elm.nativeElement.getBoundingClientRect();
    /** @type {?} */
    const edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
/** @type {?} */
const DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'col-resize',
    topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff({ edges, initialRectangle, newRectangle }) {
    /** @type {?} */
    const edgesDiff = {};
    Object.keys(edges).forEach(edge => {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
    });
    return edgesDiff;
}
/** @type {?} */
const RESIZE_ACTIVE_CLASS = 'resize-active';
/** @type {?} */
const RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
/** @type {?} */
const RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
/** @type {?} */
const RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
/** @type {?} */
const RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
/** @type {?} */
const RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
/** @type {?} */
const MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
class ResizableDirective {
    /**
     * @hidden
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elm
     * @param {?} zone
     */
    constructor(platformId, renderer, elm, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */
        this.allowNegativeResizes = false;
        /**
         * The mouse move throttle in milliseconds, default: 50 ms
         */
        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @hidden
         */
        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /**
         * @hidden
         */
        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /**
         * @hidden
         */
        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const mousedown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerDown, this.mousedown);
        /** @type {?} */
        const mousemove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerMove, this.mousemove).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({ event }) => {
            if (currentResize) {
                event.preventDefault();
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
        /** @type {?} */
        const mouseup$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerUp, this.mouseup);
        /** @type {?} */
        let currentResize;
        /** @type {?} */
        const removeGhostElement = () => {
            if (currentResize && currentResize.clonedNode) {
                this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        /** @type {?} */
        const getResizeCursors = () => {
            return Object.assign({}, DEFAULT_RESIZE_CURSORS, this.resizeCursors);
        };
        this.resizeEdges$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this.resizeEdges), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            return (this.resizeEdges &&
                Object.keys(this.resizeEdges).some(edge => !!this.resizeEdges[edge]));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(legacyResizeEdgesEnabled => legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.auditTime)(this.mouseMoveThrottleMS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
            .subscribe(({ clientX, clientY }) => {
            /** @type {?} */
            const resizeEdges = getResizeEdges({
                clientX,
                clientY,
                elm: this.elm,
                allowedEdges: this.resizeEdges,
                cursorPrecision: this.resizeCursorPrecision
            });
            /** @type {?} */
            const resizeCursors = getResizeCursors();
            if (!currentResize) {
                /** @type {?} */
                const cursor = getResizeCursor(resizeEdges, resizeCursors);
                this.renderer.setStyle(this.elm.nativeElement, 'cursor', cursor);
            }
            this.setElementClass(this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            this.setElementClass(this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            this.setElementClass(this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            this.setElementClass(this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        /** @type {?} */
        const mousedrag = mousedown$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(startCoords => {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            /** @type {?} */
            const getSnapGrid = () => {
                /** @type {?} */
                const snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +this.resizeSnapGrid.left;
                    }
                    else if (this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +this.resizeSnapGrid.right;
                    }
                    if (this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +this.resizeSnapGrid.top;
                    }
                    else if (this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return ((/** @type {?} */ ((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(coords => [, coords])), mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.pairwise)())))))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([previousCoords, newCoords]) => {
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(([previousCoords, newCoords]) => {
                if (!previousCoords) {
                    return true;
                }
                /** @type {?} */
                const snapGrid = getSnapGrid();
                /** @type {?} */
                const previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */
                const newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([, newCoords]) => {
                /** @type {?} */
                const snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mouseup$, mousedown$)));
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(() => !!currentResize));
        mousedrag
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(({ clientX, clientY }) => {
            return getNewBoundingRectangle((/** @type {?} */ (currentResize)).startingRect, (/** @type {?} */ (currentResize)).edges, clientX, clientY);
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)((newBoundingRect) => {
            return (this.allowNegativeResizes ||
                !!(newBoundingRect.height &&
                    newBoundingRect.width &&
                    newBoundingRect.height > 0 &&
                    newBoundingRect.width > 0));
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)((newBoundingRect) => {
            return this.validateResize
                ? this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
            .subscribe((newBoundingRect) => {
            if (currentResize && currentResize.clonedNode) {
                this.renderer.setStyle(currentResize.clonedNode, 'height', `${newBoundingRect.height}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'width', `${newBoundingRect.width}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'top', `${newBoundingRect.top}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'left', `${newBoundingRect.left}px`);
            }
            if (this.resizing.observers.length > 0) {
                this.zone.run(() => {
                    this.resizing.emit({
                        edges: getEdgesDiff({
                            edges: (/** @type {?} */ (currentResize)).edges,
                            initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                            newRectangle: newBoundingRect
                        }),
                        rectangle: newBoundingRect
                    });
                });
            }
            (/** @type {?} */ (currentResize)).currentRect = newBoundingRect;
        });
        mousedown$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(({ clientX, clientY, edges }) => {
            return (edges ||
                getResizeEdges({
                    clientX,
                    clientY,
                    elm: this.elm,
                    allowedEdges: this.resizeEdges,
                    cursorPrecision: this.resizeCursorPrecision
                }));
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)((edges) => {
            return Object.keys(edges).length > 0;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
            .subscribe((edges) => {
            if (currentResize) {
                removeGhostElement();
            }
            /** @type {?} */
            const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
            currentResize = {
                edges,
                startingRect,
                currentRect: startingRect
            };
            /** @type {?} */
            const resizeCursors = getResizeCursors();
            /** @type {?} */
            const cursor = getResizeCursor(currentResize.edges, resizeCursors);
            this.renderer.setStyle(document.body, 'cursor', cursor);
            this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);
            if (this.enableGhostResize) {
                currentResize.clonedNode = this.elm.nativeElement.cloneNode(true);
                this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'hidden');
                this.renderer.setStyle(currentResize.clonedNode, 'position', this.ghostElementPositioning);
                this.renderer.setStyle(currentResize.clonedNode, 'left', `${currentResize.startingRect.left}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'top', `${currentResize.startingRect.top}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'height', `${currentResize.startingRect.height}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'width', `${currentResize.startingRect.width}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
                (/** @type {?} */ (currentResize.clonedNode)).scrollTop = (/** @type {?} */ (currentResize.startingRect
                    .scrollTop));
                (/** @type {?} */ (currentResize.clonedNode)).scrollLeft = (/** @type {?} */ (currentResize.startingRect
                    .scrollLeft));
            }
            if (this.resizeStart.observers.length > 0) {
                this.zone.run(() => {
                    this.resizeStart.emit({
                        edges: getEdgesDiff({
                            edges,
                            initialRectangle: startingRect,
                            newRectangle: startingRect
                        }),
                        rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                    });
                });
            }
        });
        mouseup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
            if (currentResize) {
                this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                this.renderer.setStyle(document.body, 'cursor', '');
                this.renderer.setStyle(this.elm.nativeElement, 'cursor', '');
                if (this.resizeEnd.observers.length > 0) {
                    this.zone.run(() => {
                        this.resizeEnd.emit({
                            edges: getEdgesDiff({
                                edges: (/** @type {?} */ (currentResize)).edges,
                                initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                                newRectangle: (/** @type {?} */ (currentResize)).currentRect
                            }),
                            rectangle: (/** @type {?} */ (currentResize)).currentRect
                        });
                    });
                }
                removeGhostElement();
                currentResize = null;
            }
        });
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        // browser check for angular universal, because it doesn't know what document is
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.isPlatformBrowser)(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
        }
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.resizeEdges$.complete();
        this.destroy$.next();
    }
    /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    setElementClass(elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    }
}
ResizableDirective.ɵfac = function ResizableDirective_Factory(t) { return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
ResizableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizableDirective, selectors: [["", "mwlResizable", ""]], inputs: { resizeEdges: "resizeEdges", enableGhostResize: "enableGhostResize", resizeSnapGrid: "resizeSnapGrid", resizeCursors: "resizeCursors", resizeCursorPrecision: "resizeCursorPrecision", ghostElementPositioning: "ghostElementPositioning", allowNegativeResizes: "allowNegativeResizes", mouseMoveThrottleMS: "mouseMoveThrottleMS", validateResize: "validateResize" }, outputs: { resizeStart: "resizeStart", resizing: "resizing", resizeEnd: "resizeEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
ResizableDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
ResizableDirective.propDecorators = {
    validateResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    enableGhostResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resizeSnapGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resizeCursors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resizeCursorPrecision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ghostElementPositioning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    allowNegativeResizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    mouseMoveThrottleMS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resizeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    resizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    resizeEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mwlResizable]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { resizeEdges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], enableGhostResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resizeSnapGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resizeCursors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resizeCursorPrecision: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ghostElementPositioning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], allowNegativeResizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], mouseMoveThrottleMS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resizeStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], resizing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], resizeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], validateResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class PointerEventListeners {
    // tslint:disable-line
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    static getInstance(renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    }
    /**
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(renderer, zone) {
        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseDown;
            /** @type {?} */
            let unsubscribeTouchStart;
            zone.runOutsideAngular(() => {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                if (IS_TOUCH_DEVICE) {
                    unsubscribeTouchStart = renderer.listen('document', 'touchstart', (event) => {
                        observer.next({
                            clientX: event.touches[0].clientX,
                            clientY: event.touches[0].clientY,
                            event
                        });
                    });
                }
            });
            return () => {
                unsubscribeMouseDown();
                if (IS_TOUCH_DEVICE) {
                    (/** @type {?} */ (unsubscribeTouchStart))();
                }
            };
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseMove;
            /** @type {?} */
            let unsubscribeTouchMove;
            zone.runOutsideAngular(() => {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                if (IS_TOUCH_DEVICE) {
                    unsubscribeTouchMove = renderer.listen('document', 'touchmove', (event) => {
                        observer.next({
                            clientX: event.targetTouches[0].clientX,
                            clientY: event.targetTouches[0].clientY,
                            event
                        });
                    });
                }
            });
            return () => {
                unsubscribeMouseMove();
                if (IS_TOUCH_DEVICE) {
                    (/** @type {?} */ (unsubscribeTouchMove))();
                }
            };
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseUp;
            /** @type {?} */
            let unsubscribeTouchEnd;
            /** @type {?} */
            let unsubscribeTouchCancel;
            zone.runOutsideAngular(() => {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                if (IS_TOUCH_DEVICE) {
                    unsubscribeTouchEnd = renderer.listen('document', 'touchend', (event) => {
                        observer.next({
                            clientX: event.changedTouches[0].clientX,
                            clientY: event.changedTouches[0].clientY,
                            event
                        });
                    });
                    unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', (event) => {
                        observer.next({
                            clientX: event.changedTouches[0].clientX,
                            clientY: event.changedTouches[0].clientY,
                            event
                        });
                    });
                }
            });
            return () => {
                unsubscribeMouseUp();
                if (IS_TOUCH_DEVICE) {
                    (/** @type {?} */ (unsubscribeTouchEnd))();
                    (/** @type {?} */ (unsubscribeTouchCancel))();
                }
            };
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 */
class ResizeHandleDirective {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} zone
     * @param {?} resizable
     */
    constructor(renderer, element, zone, resizable) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            this.listenOnTheHost('mousedown').subscribe(event => {
                this.onMousedown(event, event.clientX, event.clientY);
            });
            this.listenOnTheHost('mouseup').subscribe(event => {
                this.onMouseup(event.clientX, event.clientY);
            });
            if (IS_TOUCH_DEVICE) {
                this.listenOnTheHost('touchstart').subscribe(event => {
                    this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
                });
                (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.listenOnTheHost('touchend'), this.listenOnTheHost('touchcancel')).subscribe(event => {
                    this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.unsubscribeEventListeners();
    }
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMousedown(event, clientX, clientY) {
        event.preventDefault();
        if (!this.eventListeners.touchmove) {
            this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', (touchMoveEvent) => {
                this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
            });
        }
        if (!this.eventListeners.mousemove) {
            this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', (mouseMoveEvent) => {
                this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
            });
        }
        this.resizable.mousedown.next({
            clientX,
            clientY,
            edges: this.resizeEdges
        });
    }
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMouseup(clientX, clientY) {
        this.unsubscribeEventListeners();
        this.resizable.mouseup.next({
            clientX,
            clientY,
            edges: this.resizeEdges
        });
    }
    /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMousemove(event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX,
            clientY,
            edges: this.resizeEdges,
            event
        });
    }
    /**
     * @private
     * @return {?}
     */
    unsubscribeEventListeners() {
        Object.keys(this.eventListeners).forEach(type => {
            ((/** @type {?} */ (this))).eventListeners[type]();
            delete this.eventListeners[type];
        });
    }
    /**
     * @private
     * @template T
     * @param {?} eventName
     * @return {?}
     */
    listenOnTheHost(eventName) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.element.nativeElement, eventName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$));
    }
}
ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) { return new (t || ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ResizableDirective)); };
ResizeHandleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizeHandleDirective, selectors: [["", "mwlResizeHandle", ""]], inputs: { resizeEdges: "resizeEdges" } });
/** @nocollapse */
ResizeHandleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: ResizableDirective }
];
ResizeHandleDirective.propDecorators = {
    resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeHandleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mwlResizeHandle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: ResizableDirective }]; }, { resizeEdges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResizableModule {
}
ResizableModule.ɵfac = function ResizableModule_Factory(t) { return new (t || ResizableModule)(); };
ResizableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResizableModule });
ResizableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [ResizableDirective, ResizeHandleDirective],
                exports: [ResizableDirective, ResizeHandleDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResizableModule, { declarations: [ResizableDirective, ResizeHandleDirective], exports: [ResizableDirective, ResizeHandleDirective] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 61916:
/*!*******************************************************!*\
  !*** ./node_modules/calendar-utils/calendar-utils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAYS_OF_WEEK": () => (/* binding */ DAYS_OF_WEEK),
/* harmony export */   "EventValidationErrorMessage": () => (/* binding */ EventValidationErrorMessage),
/* harmony export */   "SECONDS_IN_DAY": () => (/* binding */ SECONDS_IN_DAY),
/* harmony export */   "getAllDayWeekEvents": () => (/* binding */ getAllDayWeekEvents),
/* harmony export */   "getDifferenceInDaysWithExclusions": () => (/* binding */ getDifferenceInDaysWithExclusions),
/* harmony export */   "getEventsInPeriod": () => (/* binding */ getEventsInPeriod),
/* harmony export */   "getMonthView": () => (/* binding */ getMonthView),
/* harmony export */   "getWeekView": () => (/* binding */ getWeekView),
/* harmony export */   "getWeekViewHeader": () => (/* binding */ getWeekViewHeader),
/* harmony export */   "validateEvents": () => (/* binding */ validateEvents)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [
    DAYS_OF_WEEK.SUNDAY,
    DAYS_OF_WEEK.SATURDAY,
];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
function getExcludedSeconds(dateAdapter, _a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, precision = _a.precision;
    if (excluded.length < 1) {
        return 0;
    }
    var addSeconds = dateAdapter.addSeconds, getDay = dateAdapter.getDay, addDays = dateAdapter.addDays;
    var endDate = addSeconds(startDate, seconds - 1);
    var dayStart = getDay(startDate);
    var dayEnd = getDay(endDate);
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = getDay(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds(dateAdapter, {
                dayStart: dayStart,
                dayEnd: dayEnd,
                day: day,
                precision: precision,
                startDate: startDate,
                endDate: endDate,
            });
        }
        current = addDays(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(dateAdapter, _a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    var differenceInSeconds = dateAdapter.differenceInSeconds, endOfDay = dateAdapter.endOfDay, startOfDay = dateAdapter.startOfDay;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return differenceInSeconds(endOfDay(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(dateAdapter, _a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, precision = _a.precision, totalDaysInView = _a.totalDaysInView;
    var max = dateAdapter.max, differenceInSeconds = dateAdapter.differenceInSeconds, addDays = dateAdapter.addDays, endOfDay = dateAdapter.endOfDay, differenceInDays = dateAdapter.differenceInDays;
    var span = SECONDS_IN_DAY;
    var begin = max([event.start, startOfWeekDate]);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = differenceInSeconds(event.end, begin);
                break;
            default:
                span =
                    differenceInDays(addDays(endOfDay(event.end), 1), begin) *
                        SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view
    var secondsInView = totalDaysInView * SECONDS_IN_DAY;
    if (totalLength > secondsInView) {
        span = secondsInView - offsetSeconds;
    }
    span -= getExcludedSeconds(dateAdapter, {
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision,
    });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(dateAdapter, _a) {
    var event = _a.event, startOfWeekDate = _a.startOfWeek, excluded = _a.excluded, precision = _a.precision;
    var differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, differenceInSeconds = dateAdapter.differenceInSeconds;
    if (event.start < startOfWeekDate) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset =
                differenceInDays(startOfDay(event.start), startOfWeekDate) *
                    SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = differenceInSeconds(event.start, startOfWeekDate);
            break;
    }
    offset -= getExcludedSeconds(dateAdapter, {
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision,
    });
    return Math.abs(offset / SECONDS_IN_DAY);
}
function isEventIsPeriod(dateAdapter, _a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var isSameSecond = dateAdapter.isSameSecond;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (isSameSecond(eventStart, periodStart) ||
        isSameSecond(eventStart, periodEnd)) {
        return true;
    }
    if (isSameSecond(eventEnd, periodStart) ||
        isSameSecond(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(dateAdapter, _a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) {
        return isEventIsPeriod(dateAdapter, { event: event, periodStart: periodStart, periodEnd: periodEnd });
    });
}
function getWeekDay(dateAdapter, _a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var startOfDay = dateAdapter.startOfDay, isSameDay = dateAdapter.isSameDay, getDay = dateAdapter.getDay;
    var today = startOfDay(new Date());
    var day = getDay(date);
    return {
        date: date,
        day: day,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(day) > -1,
    };
}
function getWeekViewHeader(dateAdapter, _a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays, _c = _a.viewStart, viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _c, _d = _a.viewEnd, viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
    var addDays = dateAdapter.addDays, getDay = dateAdapter.getDay;
    var days = [];
    var date = viewStart;
    while (date < viewEnd) {
        if (!excluded.some(function (e) { return getDay(date) === e; })) {
            days.push(getWeekDay(dateAdapter, { date: date, weekendDays: weekendDays }));
        }
        date = addDays(date, 1);
    }
    return days;
}
function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
    var date1 = _a.date1, date2 = _a.date2, excluded = _a.excluded;
    var date = date1;
    var diff = 0;
    while (date < date2) {
        if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
            diff++;
        }
        date = dateAdapter.addDays(date, 1);
    }
    return diff;
}
function getAllDayWeekEvents(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e, viewStart = _a.viewStart, viewEnd = _a.viewEnd;
    viewStart = dateAdapter.startOfDay(viewStart);
    viewEnd = dateAdapter.endOfDay(viewEnd);
    var differenceInSeconds = dateAdapter.differenceInSeconds, differenceInDays = dateAdapter.differenceInDays;
    var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
        date1: viewStart,
        date2: viewEnd,
        excluded: excluded,
    });
    var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
    var eventsMapped = events
        .filter(function (event) { return event.allDay; })
        .map(function (event) {
        var offset = getWeekViewEventOffset(dateAdapter, {
            event: event,
            startOfWeek: viewStart,
            excluded: excluded,
            precision: precision,
        });
        var span = getWeekViewEventSpan(dateAdapter, {
            event: event,
            offset: offset,
            startOfWeekDate: viewStart,
            excluded: excluded,
            precision: precision,
            totalDaysInView: totalDaysInView,
        });
        return { event: event, offset: offset, span: span };
    })
        .filter(function (e) { return e.offset < maxRange; })
        .filter(function (e) { return e.span > 0; })
        .map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < viewStart,
        endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd,
    }); })
        .sort(function (itemA, itemB) {
        var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var allDayEventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped
                .slice(index + 1)
                .filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= totalDaysInView &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            var weekEvents = __spreadArrays([event], otherRowEvents);
            var id = weekEvents
                .filter(function (weekEvent) { return weekEvent.event.id; })
                .map(function (weekEvent) { return weekEvent.event.id; })
                .join('-');
            allDayEventRows.push(__assign({ row: weekEvents }, (id ? { id: id } : {})));
        }
    });
    return allDayEventRows;
}
function getWeekViewHourGrid(dateAdapter, _a) {
    var events = _a.events, viewDate = _a.viewDate, hourSegments = _a.hourSegments, hourDuration = _a.hourDuration, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekStartsOn = _a.weekStartsOn, excluded = _a.excluded, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, viewStart = _a.viewStart, viewEnd = _a.viewEnd, minimumEventHeight = _a.minimumEventHeight;
    var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
        viewDate: viewDate,
        hourSegments: hourSegments,
        hourDuration: hourDuration,
        dayStart: dayStart,
        dayEnd: dayEnd,
    });
    var weekDays = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd,
    });
    var setHours = dateAdapter.setHours, setMinutes = dateAdapter.setMinutes, getHours = dateAdapter.getHours, getMinutes = dateAdapter.getMinutes;
    return weekDays.map(function (day) {
        var dayView = getDayView(dateAdapter, {
            events: events,
            viewDate: day.date,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            segmentHeight: segmentHeight,
            eventWidth: 1,
            hourDuration: hourDuration,
            minimumEventHeight: minimumEventHeight,
        });
        var hours = dayViewHourGrid.map(function (hour) {
            var segments = hour.segments.map(function (segment) {
                var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
                return __assign(__assign({}, segment), { date: date });
            });
            return __assign(__assign({}, hour), { segments: segments });
        });
        function getColumnCount(allEvents, prevOverlappingEvents) {
            var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) { return iEvent.left + 1; }));
            var nextOverlappingEvents = allEvents
                .filter(function (iEvent) { return iEvent.left >= columnCount; })
                .filter(function (iEvent) {
                return (getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0);
            });
            if (nextOverlappingEvents.length > 0) {
                return getColumnCount(allEvents, nextOverlappingEvents);
            }
            else {
                return columnCount;
            }
        }
        var mappedEvents = dayView.events.map(function (event) {
            var columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
            var width = 100 / columnCount;
            return __assign(__assign({}, event), { left: event.left * width, width: width });
        });
        return {
            hours: hours,
            date: day.date,
            events: mappedEvents.map(function (event) {
                var overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter(function (otherEvent) { return otherEvent.left > event.left; }), event.top, event.top + event.height);
                if (overLappingEvents.length > 0) {
                    return __assign(__assign({}, event), { width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) { return otherEvent.left; })) - event.left });
                }
                return event;
            }),
        };
    });
}
function getWeekView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e, hourSegments = _a.hourSegments, hourDuration = _a.hourDuration, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, minimumEventHeight = _a.minimumEventHeight, _f = _a.viewStart, viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _f, _g = _a.viewEnd, viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _g;
    if (!events) {
        events = [];
    }
    var startOfDay = dateAdapter.startOfDay, endOfDay = dateAdapter.endOfDay;
    viewStart = startOfDay(viewStart);
    viewEnd = endOfDay(viewEnd);
    var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: viewStart,
        periodEnd: viewEnd,
    });
    var header = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd,
    });
    return {
        allDayEventRows: getAllDayWeekEvents(dateAdapter, {
            events: eventsInPeriod,
            excluded: excluded,
            precision: precision,
            absolutePositionedEvents: absolutePositionedEvents,
            viewStart: viewStart,
            viewEnd: viewEnd,
        }),
        period: {
            events: eventsInPeriod,
            start: header[0].date,
            end: endOfDay(header[header.length - 1].date),
        },
        hourColumns: getWeekViewHourGrid(dateAdapter, {
            events: events,
            viewDate: viewDate,
            hourSegments: hourSegments,
            hourDuration: hourDuration,
            dayStart: dayStart,
            dayEnd: dayEnd,
            weekStartsOn: weekStartsOn,
            excluded: excluded,
            weekendDays: weekendDays,
            segmentHeight: segmentHeight,
            viewStart: viewStart,
            viewEnd: viewEnd,
            minimumEventHeight: minimumEventHeight,
        }),
    };
}
function getMonthView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var startOfWeek = dateAdapter.startOfWeek, endOfWeek = dateAdapter.endOfWeek, differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, addHours = dateAdapter.addHours, endOfDay = dateAdapter.endOfDay, isSameMonth = dateAdapter.isSameMonth, getDay = dateAdapter.getDay, getMonth = dateAdapter.getMonth;
    var start = startOfWeek(viewStart, { weekStartsOn: weekStartsOn });
    var end = endOfWeek(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: start,
        periodEnd: end,
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_2 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                // DST change, so need to add 25 hours
                /* istanbul ignore next */
                date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return getDay(date) === e; })) {
            var day = getWeekDay(dateAdapter, {
                date: date,
                weekendDays: weekendDays,
            });
            var eventsInPeriod = getEventsInPeriod(dateAdapter, {
                events: eventsInMonth,
                periodStart: startOfDay(date),
                periodEnd: endOfDay(date),
            });
            day.inMonth = isSameMonth(date, viewDate);
            day.events = eventsInPeriod;
            day.badgeTotal = eventsInPeriod.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) { return viewStart <= day.date && day.date < viewEnd; });
            if (isRowInMonth) {
                days = __spreadArrays(days, row);
            }
        }
    }
    else {
        days = initialViewDays;
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
            start: days[0].date,
            end: endOfDay(days[days.length - 1].date),
            events: eventsInMonth,
        },
    };
}
function getOverLappingWeekViewEvents(events, top, bottom) {
    return events.filter(function (previousEvent) {
        var previousEventTop = previousEvent.top;
        var previousEventBottom = previousEvent.top + previousEvent.height;
        if (top < previousEventBottom && previousEventBottom < bottom) {
            return true;
        }
        else if (top < previousEventTop && previousEventTop < bottom) {
            return true;
        }
        else if (previousEventTop <= top && bottom <= previousEventBottom) {
            return true;
        }
        return false;
    });
}
function getDayView(dateAdapter, _a) {
    var events = _a.events, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight, hourDuration = _a.hourDuration, minimumEventHeight = _a.minimumEventHeight;
    var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, differenceInMinutes = dateAdapter.differenceInMinutes;
    var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
    var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
    endOfView.setSeconds(59, 999);
    var previousDayEvents = [];
    var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView,
    });
    var dayViewEvents = eventsInPeriod
        .sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    })
        .map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = (hourSegments * segmentHeight) / (hourDuration || MINUTES_IN_HOUR);
        var top = 0;
        if (eventStart > startOfView) {
            // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
            var eventOffset = eventStart.getTimezoneOffset();
            var startOffset = startOfView.getTimezoneOffset();
            var diff = startOffset - eventOffset;
            top += differenceInMinutes(eventStart, startOfView) + diff;
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var timezoneOffset = startDate.getTimezoneOffset() - endDate.getTimezoneOffset();
        var height = differenceInMinutes(endDate, startDate) + timezoneOffset;
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        if (minimumEventHeight && height < minimumEventHeight) {
            height = minimumEventHeight;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay,
        };
        previousDayEvents.push(dayEvent);
        return dayEvent;
    });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: startOfDay(startOfView),
        periodEnd: endOfDay(endOfView),
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
            events: eventsInPeriod,
            start: startOfView,
            end: endOfView,
        },
    };
}
function sanitiseHours(hours) {
    return Math.max(Math.min(23, hours), 0);
}
function sanitiseMinutes(minutes) {
    return Math.max(Math.min(59, minutes), 0);
}
function getDayViewHourGrid(dateAdapter, _a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, hourDuration = _a.hourDuration, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, addMinutes = dateAdapter.addMinutes, addHours = dateAdapter.addHours, addDays = dateAdapter.addDays;
    var hours = [];
    var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
    var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
    var segmentDuration = (hourDuration || MINUTES_IN_HOUR) / hourSegments;
    var startOfViewDay = startOfDay(viewDate);
    var endOfViewDay = endOfDay(viewDate);
    var dateAdjustment = function (d) { return d; };
    // this means that we change from or to DST on this day and that's going to cause problems so we bump the date
    if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
        startOfViewDay = addDays(startOfViewDay, 1);
        startOfView = addDays(startOfView, 1);
        endOfView = addDays(endOfView, 1);
        dateAdjustment = function (d) { return addDays(d, -1); };
    }
    var dayDuration = hourDuration
        ? (HOURS_IN_DAY * 60) / hourDuration
        : MINUTES_IN_HOUR;
    for (var i = 0; i < dayDuration; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = addMinutes(addMinutes(startOfView, i * (hourDuration || MINUTES_IN_HOUR)), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: dateAdjustment(date),
                    displayDate: date,
                    isStart: j === 0,
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
var EventValidationErrorMessage;
(function (EventValidationErrorMessage) {
    EventValidationErrorMessage["NotArray"] = "Events must be an array";
    EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
    EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
    EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
    EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));
function validateEvents(events, log) {
    var isValid = true;
    function isError(msg, event) {
        log(msg, event);
        isValid = false;
    }
    if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
    }
    events.forEach(function (event) {
        if (!event.start) {
            isError(EventValidationErrorMessage.StartPropertyMissing, event);
        }
        else if (!(event.start instanceof Date)) {
            isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }
        if (event.end) {
            if (!(event.end instanceof Date)) {
                isError(EventValidationErrorMessage.EndPropertyNotDate, event);
            }
            if (event.start > event.end) {
                isError(EventValidationErrorMessage.EndsBeforeStart, event);
            }
        }
    });
    return isValid;
}


/***/ }),

/***/ 73435:
/*!*************************************************************************!*\
  !*** ./node_modules/calendar-utils/date-adapters/esm/date-fns/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": () => (/* binding */ adapterFactory)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 22757);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 62317);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 11118);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 8210);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 90371);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 77860);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 33200);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 51618);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 10913);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 80124);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 97064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 53470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 33569);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 57399);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 46119);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 12366);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 26361);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 42375);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 81385);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ 50586);

function adapterFactory() {
    return {
        addDays: date_fns__WEBPACK_IMPORTED_MODULE_0__["default"],
        addHours: date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
        addMinutes: date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
        addSeconds: date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
        differenceInDays: date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
        differenceInMinutes: date_fns__WEBPACK_IMPORTED_MODULE_5__["default"],
        differenceInSeconds: date_fns__WEBPACK_IMPORTED_MODULE_6__["default"],
        endOfDay: date_fns__WEBPACK_IMPORTED_MODULE_7__["default"],
        endOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_8__["default"],
        endOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_9__["default"],
        getDay: date_fns__WEBPACK_IMPORTED_MODULE_10__["default"],
        getMonth: date_fns__WEBPACK_IMPORTED_MODULE_11__["default"],
        isSameDay: date_fns__WEBPACK_IMPORTED_MODULE_12__["default"],
        isSameMonth: date_fns__WEBPACK_IMPORTED_MODULE_13__["default"],
        isSameSecond: date_fns__WEBPACK_IMPORTED_MODULE_14__["default"],
        max: date_fns__WEBPACK_IMPORTED_MODULE_15__["default"],
        setHours: date_fns__WEBPACK_IMPORTED_MODULE_16__["default"],
        setMinutes: date_fns__WEBPACK_IMPORTED_MODULE_17__["default"],
        startOfDay: date_fns__WEBPACK_IMPORTED_MODULE_18__["default"],
        startOfMinute: date_fns__WEBPACK_IMPORTED_MODULE_19__["default"],
        startOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_20__["default"],
        startOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_21__["default"],
        getHours: date_fns__WEBPACK_IMPORTED_MODULE_22__["default"],
        getMinutes: date_fns__WEBPACK_IMPORTED_MODULE_23__["default"],
    };
}


/***/ }),

/***/ 56610:
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
var MILLISECONDS_IN_MINUTE = 60000;

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE;
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */


function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/***/ }),

/***/ 31170:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 67367:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 20312:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ 22757:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addHours)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 79672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/***/ }),

/***/ 79672:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ 62317:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMinutes)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 79672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),

/***/ 88053:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ 11118:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addSeconds/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSeconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 79672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */

function addSeconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * 1000);
}

/***/ }),

/***/ 78856:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 20312);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, days);
}

/***/ }),

/***/ 86323:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 56610);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 69377);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ 8210:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ 86323);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * var result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = compareLocalAsc(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 94913:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

/***/ }),

/***/ 90371:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMinutes)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 94913);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are from 10:01:59 to 10:00:00
 * var result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ 77860:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 94913);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ 33200:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 51618:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 10913:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 28920:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ 80124:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ 70115:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDaysInMonth/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDaysInMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/***/ }),

/***/ 81385:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHours)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),

/***/ 32362:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 49632);
/* harmony import */ var _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ 74688);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */

function getISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 41137:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeekYear/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 49632);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getISOYear` to `getISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */

function getISOWeekYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 50586:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMinutes)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/***/ }),

/***/ 97064:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ 8110:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getSeconds/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSeconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */

function getSeconds(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

/***/ }),

/***/ 14190:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  return year;
}

/***/ }),

/***/ 75845:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 69377);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ 53470:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ 33569:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameSecond/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameSecond)
/* harmony export */ });
/* harmony import */ var _startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfSecond/index.js */ 89676);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */

function isSameSecond(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfSecond = (0,_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfSecond = (0,_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}

/***/ }),

/***/ 57399:
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/max/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ max)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `max` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var maxDate = max(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var maxDate = max(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */

function max(dirtyDatesArray) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);

    if (result === undefined || result < currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),

/***/ 11625:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setDate)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */

function setDate(dirtyDate, dirtyDayOfMonth) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDayOfMonth);
  date.setDate(dayOfMonth);
  return date;
}

/***/ }),

/***/ 46119:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setHours)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyHours);
  date.setHours(hours);
  return date;
}

/***/ }),

/***/ 12366:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setMinutes)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var minutes = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/***/ }),

/***/ 77722:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setMonth)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getDaysInMonth/index.js */ 70115);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */

function setMonth(dirtyDate, dirtyMonth) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0,_getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/***/ }),

/***/ 35494:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setSeconds/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setSeconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */

function setSeconds(dirtyDate, dirtySeconds) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var seconds = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

/***/ }),

/***/ 62131:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setYear)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */

function setYear(dirtyDate, dirtyYear) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date)) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}

/***/ }),

/***/ 69377:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 49632:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeek/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ 68031);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ 74688:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeekYear/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getISOWeekYear/index.js */ 41137);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 49632);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfISOWeekYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ 26361:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMinute/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfMinute)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */

function startOfMinute(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}

/***/ }),

/***/ 42375:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 89676:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfSecond/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfSecond)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */

function startOfSecond(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setMilliseconds(0);
  return date;
}

/***/ }),

/***/ 68031:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 88393:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 20312);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 35654:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/subMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ 88053);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 54531:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/subWeeks/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addWeeks_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addWeeks/index.js */ 78856);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addWeeks_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 18325:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ 47381:
/*!************************************************!*\
  !*** ./node_modules/positioning/dist/entry.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positionElements": () => (/* reexport safe */ _positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements)
/* harmony export */ });
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ 14423);



/***/ }),

/***/ 14423:
/*!******************************************************!*\
  !*** ./node_modules/positioning/dist/positioning.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Positioning": () => (/* binding */ Positioning),
/* harmony export */   "positionElements": () => (/* binding */ positionElements)
/* harmony export */ });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
                top: elPosition.top,
                bottom: elPosition.bottom,
                left: elPosition.left,
                right: elPosition.right,
                height: elPosition.height,
                width: elPosition.width
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /*
      Return false if the element to position is outside the viewport
    */
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var _a = placement.split('-'), _b = _a[0], placementPrimary = _b === void 0 ? 'top' : _b, _c = _a[1], placementSecondary = _c === void 0 ? 'center' : _c;
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var marginTop = parseFloat(targetElStyles.marginTop);
        var marginBottom = parseFloat(targetElStyles.marginBottom);
        var marginLeft = parseFloat(targetElStyles.marginLeft);
        var marginRight = parseFloat(targetElStyles.marginRight);
        var topPosition = 0;
        var leftPosition = 0;
        switch (placementPrimary) {
            case 'top':
                topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                break;
            case 'bottom':
                topPosition = (hostElPosition.top + hostElPosition.height);
                break;
            case 'left':
                leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                break;
            case 'right':
                leftPosition = (hostElPosition.left + hostElPosition.width);
                break;
        }
        switch (placementSecondary) {
            case 'top':
                topPosition = hostElPosition.top;
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                leftPosition = hostElPosition.left;
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                }
                else {
                    topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                }
                break;
        }
        /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
        targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)";
        // Check if the targetElement is inside the viewport
        var targetElBCR = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
            targetElBCR.bottom <= windowHeight;
    };
    return Positioning;
}());

var placementSeparator = /\s+/;
var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
    var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
    var allowedPlacements = [
        'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
        'right-top', 'right-bottom'
    ];
    var classList = targetElement.classList;
    var addClassesToTarget = function (targetPlacement) {
        var _a = targetPlacement.split('-'), primary = _a[0], secondary = _a[1];
        var classes = [];
        if (baseClass) {
            classes.push(baseClass + "-" + primary);
            if (secondary) {
                classes.push(baseClass + "-" + primary + "-" + secondary);
            }
            classes.forEach(function (classname) { classList.add(classname); });
        }
        return classes;
    };
    // Remove old placement classes to avoid issues
    if (baseClass) {
        allowedPlacements.forEach(function (placementToRemove) { classList.remove(baseClass + "-" + placementToRemove); });
    }
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj) !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    // Required for transform:
    var style = targetElement.style;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style['will-change'] = 'transform';
    var testPlacement;
    var isInViewport = false;
    for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
        testPlacement = placementVals_1[_i];
        var addedClasses = addClassesToTarget(testPlacement);
        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
        }
        // Remove the baseClasses for further calculation
        if (baseClass) {
            addedClasses.forEach(function (classname) { classList.remove(classname); });
        }
    }
    if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
    }
    return testPlacement;
}


/***/ }),

/***/ 13491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 12378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 10328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}


/***/ }),

/***/ 23432:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/count.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "count": () => (/* binding */ count)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 60014);

function count(predicate) {
    return (source) => source.lift(new CountOperator(predicate, source));
}
class CountOperator {
    constructor(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    }
}
class CountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, predicate, source) {
        super(destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    }
    _tryPredicate(value) {
        let result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    }
    _complete() {
        this.destination.next(this.count);
        this.destination.complete();
    }
}


/***/ }),

/***/ 89221:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pairwise": () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 60014);

function pairwise() {
    return (source) => source.lift(new PairwiseOperator());
}
class PairwiseOperator {
    call(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    }
}
class PairwiseSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination) {
        super(destination);
        this.hasPrev = false;
    }
    _next(value) {
        let pair;
        if (this.hasPrev) {
            pair = [this.prev, value];
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
        if (pair) {
            this.destination.next(pair);
        }
    }
}


/***/ }),

/***/ 66426:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchMapTo": () => (/* binding */ switchMapTo)
/* harmony export */ });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchMap */ 59095);

function switchMapTo(innerObservable, resultSelector) {
    return resultSelector ? (0,_switchMap__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => innerObservable, resultSelector) : (0,_switchMap__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => innerObservable);
}


/***/ }),

/***/ 93450:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_application_application_module_ts.js.map