(self["webpackChunksynadmin"] = self["webpackChunksynadmin"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ 28526);
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ 12227);
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ 90578);
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ 63650);
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.auth.guard */ 76845);
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ 29345);
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ 28263);
/* harmony import */ var _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/forgot-password/forgot-password.component */ 13866);
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ 88310);
/* harmony import */ var _auth_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/lock-screen/lock-screen.component */ 39339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    {
        path: '',
        component: _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__.SignInComponent,
        pathMatch: 'full',
    },
    {
        path: 'sign-up',
        component: _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__.SignUpComponent,
        data: {
            title: 'Sign Up'
        }
    },
    {
        path: 'forgot-password',
        component: _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordComponent,
        data: {
            title: 'Forgot Password'
        }
    },
    {
        path: 'reset-password',
        component: _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordComponent,
        data: {
            title: 'Reset Password'
        }
    },
    {
        path: 'lock-screen',
        component: _auth_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_9__.LockScreenComponent,
        data: {
            title: 'Lock Screen'
        }
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_0__.FullLayoutComponent, data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__.Full_ROUTES, canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_1__.ContentLayoutComponent, data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_3__.CONTENT_ROUTES, canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: '**', redirectTo: 'auth/sign-in' }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_11__.PreloadAllModules })], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 76845:
/*!***********************************!*\
  !*** ./src/app/app.auth.guard.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_service_portal_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/service/portal-api.service */ 62863);



class AuthGuard {
    constructor(_router, apiService) {
        this._router = _router;
        this.apiService = apiService;
    }
    canActivate(next) {
        let userDetails = this.apiService.getUserInfo();
        if (userDetails !== null) {
            return true;
        }
        this._router.navigate(['/']);
        return false;
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_shared_service_portal_api_service__WEBPACK_IMPORTED_MODULE_0__.PortalAPIService)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AppComponent {
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-formio */ 30766);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 84368);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ 12227);
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ 28526);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.auth.guard */ 76845);
/* harmony import */ var _shared_service_portal_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/service/portal-api.service */ 62863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);




















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ providers: [
        { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
        _app_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard, _shared_service_portal_api_service__WEBPACK_IMPORTED_MODULE_7__.PortalAPIService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            angular_formio__WEBPACK_IMPORTED_MODULE_0__.FormioModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule.forRoot({
                preventDuplicates: true,
                closeButton: true,
                positionClass: 'toast-top-right',
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_16__.AgmCoreModule.forRoot({ apiKey: 'AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4' }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_5__.FullLayoutComponent,
        _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__.ContentLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        angular_formio__WEBPACK_IMPORTED_MODULE_0__.FormioModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule, // ToastrModule added
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _agm_core__WEBPACK_IMPORTED_MODULE_16__.AgmCoreModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule] }); })();


/***/ }),

/***/ 13866:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class ForgotPasswordComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    // On SignIn link click
    onSignIn() {
        this.router.navigate(['/'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
}
ForgotPasswordComponent.??fac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
ForgotPasswordComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 22, vars: 0, consts: [[1, "wrapper"], [1, "authentication-header"], [1, "authentication-forgot", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "forgot-box"], [1, "card-body"], [1, "p-4", "rounded"], [1, "text-center"], ["src", "../../../assets/images/logo-icon.png"], [1, "mt-5", "font-weight-bold"], [1, "text-muted"], [1, "my-4"], [1, "form-label"], ["type", "text", "placeholder", "example@user.com", 1, "form-control", "form-control-lg"], [1, "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"], ["href", "javascript:;", 1, "btn", "btn-white", "btn-lg", 3, "click"], [1, "bx", "bx-arrow-back", "me-1"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Enter your registered email ID to reset the password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13)(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForgotPasswordComponent_Template_a_click_19_listener() { return ctx.onSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Back to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 39339:
/*!***********************************************************!*\
  !*** ./src/app/auth/lock-screen/lock-screen.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockScreenComponent": () => (/* binding */ LockScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LockScreenComponent {
    constructor() { }
    ngOnInit() {
    }
}
LockScreenComponent.??fac = function LockScreenComponent_Factory(t) { return new (t || LockScreenComponent)(); };
LockScreenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LockScreenComponent, selectors: [["app-lock-screen"]], decls: 18, vars: 0, consts: [[1, "bg-lock-screen"], [1, "wrapper"], [1, "authentication-lock-screen", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "shadow-none", "bg-transparent"], [1, "card-body", "p-md-5", "text-center"], [1, "text-white"], [1, ""], ["src", "assets/images/icons/user.png", "width", "120", "alt", "", 1, "mt-5"], [1, "mt-2", "text-white"], [1, "mb-3", "mt-3"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "d-grid"], ["type", "button", 1, "btn", "btn-white"]], template: function LockScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "10:53 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Tuesday, January 14, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrLXNjcmVlbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 88310:
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class ResetPasswordComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    // On Login link click
    onLogin() {
        this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
}
ResetPasswordComponent.??fac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
ResetPasswordComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 32, vars: 0, consts: [[1, "wrapper"], [1, "authentication-header"], [1, "authentication-reset-password", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "col-lg-10", "mx-auto"], [1, "card"], [1, "row", "g-0"], [1, "col-lg-5", "border-end"], [1, "card-body"], [1, "p-5"], [1, "text-start"], ["src", "assets/images/logo-img.png", "width", "180", "alt", ""], [1, "mt-5", "font-weight-bold"], [1, "text-muted"], [1, "mb-3", "mt-5"], [1, "form-label"], ["type", "text", "placeholder", "Enter new password", 1, "form-control"], [1, "mb-3"], ["type", "text", "placeholder", "Confirm password", 1, "form-control"], [1, "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-primary"], ["href", "javascript:;", 1, "btn", "btn-light", 3, "click"], [1, "bx", "bx-arrow-back", "mr-1"], [1, "col-lg-7"], ["src", "assets/images/login-images/forgot-password-frent-img.jpg", "alt", "...", 1, "card-img", "login-img", "h-100"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Genrate New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "We received your reset password request. Please enter your new password!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14)(17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 17)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 19)(25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ResetPasswordComponent_Template_a_click_27_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Back to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 29345:
/*!***************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_service_portal_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/portal.model */ 49308);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_service_portal_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/portal-api.service */ 62863);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);








class SignInComponent {
    constructor(router, route, apiService, toastr, titleService, formBuilder) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.createLoginForm();
        titleService.setTitle(`Login | ${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appName}`);
    }
    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: [''],
        });
    }
    // On Forgotpassword link click
    onForgotpassword() {
        this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
    }
    // On Signup link click
    onSignup() {
        this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.spinner = true;
        if (this.loginForm.value.password && this.loginForm.value.email) {
            let req = {
                password: this.loginForm.value.password,
                email: this.loginForm.value.email,
            };
            this.apiService.post(`user/login`, req).subscribe(res => {
                if (res && res.status === 200) {
                    let userDetails = res.data;
                    userDetails.token = res.token;
                    let cipher = this.apiService.encrypt(userDetails);
                    sessionStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.localStoreKey, cipher);
                    this.spinner = false;
                    this.roleBased(userDetails);
                }
                else if (res && res.status === 400) {
                    this.toastr.error(res.message, '');
                    this.spinner = false;
                }
            });
        }
        else {
            this.toastr.error("Please Enter the Required Fields", "");
            this.spinner = false;
        }
    }
    roleBased(userDetails) {
        if (userDetails.role == src_app_shared_service_portal_model__WEBPACK_IMPORTED_MODULE_0__.RoleEnum.ADMIN)
            this.router.navigateByUrl("/dashboard/analytics");
    }
}
SignInComponent.??fac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_shared_service_portal_api_service__WEBPACK_IMPORTED_MODULE_2__.PortalAPIService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder)); };
SignInComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 47, vars: 1, consts: [[1, "wrapper"], [1, "authentication-header"], [1, "section-authentication-signin", "d-flex", "align-items-center", "justify-content-center", "my-5", "my-lg-0"], [1, "container-fluid"], [1, "row", "row-cols-1", "row-cols-lg-2", "row-cols-xl-3"], [1, "col", "mx-auto"], [1, "mb-4", "text-center"], ["src", "assets/images/logo-img.png", "width", "180", "alt", ""], [1, "card"], [1, "card-body"], [1, "p-4", "rounded"], [1, "text-center"], ["src", "../../../assets/images/logo-icon.png"], [1, "mt-4", "mb-0"], ["href", "JavaScript:;", 3, "click"], [1, "login-separater", "text-center", "mb-4"], [1, "form-body"], [1, "row", "g-3", 3, "formGroup", "ngSubmit"], [1, "col-12"], ["for", "inputEmailAddress", 1, "form-label"], ["type", "email", "id", "inputEmailAddress", "formControlName", "email", "placeholder", "Email Address", 1, "form-control"], ["for", "inputChoosePassword", 1, "form-label"], ["id", "show_hide_password", 1, "input-group"], ["type", "password", "id", "inputChoosePassword", "formControlName", "password", "placeholder", "Enter Password", 1, "form-control", "border-end-0"], ["href", "javascript:;", 1, "input-group-text", "bg-transparent"], [1, "bx", "bx-hide"], [1, "col-md-6"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], [1, "col-md-6", "text-end"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "bx", "bxs-lock-open"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Don't have an account yet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SignInComponent_Template_a_click_15_listener() { return ctx.onSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Sign up here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 15)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "SIGN IN WITH EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 16)(22, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_22_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "div", 18)(24, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "div", 18)(28, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, "Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](31, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 26)(35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](36, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](38, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 30)(40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SignInComponent_Template_a_click_40_listener() { return ctx.onForgotpassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](41, "Forgot Password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "div", 18)(43, "div", 31)(44, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](45, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 28263:
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_service_portal_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/portal.model */ 49308);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_service_portal_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/portal-api.service */ 62863);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);








class SignUpComponent {
    constructor(router, route, apiService, toastr, titleService) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.toastr = toastr;
        this.formDetails = {
            fName: '',
            lName: '',
            password: '',
            email: '',
            phone: '',
            companyName: '',
            role: src_app_shared_service_portal_model__WEBPACK_IMPORTED_MODULE_0__.RoleEnum.Customer,
            zipCode: null,
            country: (new Date()).toString().split('(')[1].split(" ")[0],
            terms: false
        };
        titleService.setTitle(`Signup | ${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appName}`);
    }
    // On Signup link click
    onSignIn() {
        this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.formDetails.terms === false) {
            this.toastr.warning("Please agree to Terms & Conditions");
            return;
        }
        this.apiService.post(`user`, this.formDetails).subscribe(res => {
            if (res && res.status === 201) {
                this.apiService.post(`aws/sendEmail`, { recipient: this.formDetails.email }).subscribe(resEmail => {
                    this.toastr.success('OTP has been sent to your mail for verification.');
                });
            }
            else if (res && res.status === 400) {
                this.toastr.error(res.message, '');
                this.spinner = false;
            }
        });
    }
}
SignUpComponent.??fac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_shared_service_portal_api_service__WEBPACK_IMPORTED_MODULE_2__.PortalAPIService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title)); };
SignUpComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 77, vars: 9, consts: [[1, "wrapper"], [1, "authentication-header"], [1, "d-flex", "align-items-center", "justify-content-center", "my-5", "my-lg-0"], [1, "container"], [1, "row", "row-cols-1", "row-cols-lg-2", "row-cols-xl-2"], [1, "col", "mx-auto"], [1, "my-4", "text-center"], ["src", "assets/images/logo-img.png", "width", "180", "alt", ""], [1, "card"], [1, "card-body"], [1, "p-4", "rounded"], [1, "text-center"], ["src", "../../../assets/images/logo-icon.png"], [1, "mt-3", "mb-0"], ["href", "JavaScript:;", 3, "click"], [1, "login-separater", "text-center", "mb-4"], [1, "form-body"], [1, "row", "g-3", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-sm-6"], ["for", "inputFirstName", 1, "form-label"], [1, "red"], ["type", "email", "name", "inputFirstName", "placeholder", "First Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputLastName", 1, "form-label"], ["type", "email", "name", "inputLastName", "placeholder", "Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12"], ["for", "inputEmailAddress", 1, "form-label"], ["type", "email", "name", "inputEmailAddress", "placeholder", "Email Address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputChoosePassword", 1, "form-label"], ["id", "show_hide_password", 1, "input-group"], ["type", "password", "name", "inputChoosePassword", "required", "", "placeholder", "Enter Password", 1, "form-control", "border-end-0", 3, "ngModel", "ngModelChange"], ["href", "javascript:;", 1, "input-group-text", "bg-transparent"], [1, "bx", "bx-hide"], ["for", "inputRegisteredCompanyName", 1, "form-label"], ["type", "text", "name", "inputRegisteredCompanyName", "placeholder", "Registered Company Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputZip", 1, "form-label"], ["type", "text", "name", "inputZip", "required", "", "placeholder", "Zip Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputCountry", 1, "form-label"], ["type", "text", "name", "inputCountry", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckChecked", "name", "Terms", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "bx", "bx-user"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SignUpComponent_Template_a_click_15_listener() { return ctx.onSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Sign in here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 15)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "SIGN UP WITH EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 16)(22, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_22_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "div", 19)(25, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_29_listener($event) { return ctx.formDetails.fName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 19)(31, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_33_listener($event) { return ctx.formDetails.lName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 25)(35, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](38, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_39_listener($event) { return ctx.formDetails.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 25)(41, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "div", 29)(46, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_46_listener($event) { return ctx.formDetails.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](48, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "div", 25)(50, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51, "Registered Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](53, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_54_listener($event) { return ctx.formDetails.companyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "div", 19)(56, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](57, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](59, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_60_listener($event) { return ctx.formDetails.zipCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "div", 19)(62, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](63, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_64_listener($event) { return ctx.formDetails.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "div", 25)(66, "div", 39)(67, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_67_listener($event) { return ctx.formDetails.terms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](69, "I read and agree to Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "div", 25)(73, "div", 42)(74, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](75, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](76, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()()()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.formDetails.fName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.formDetails.lName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.formDetails.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.formDetails.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.formDetails.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.formDetails.zipCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.formDetails.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.formDetails.terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 12227:
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentLayoutComponent": () => (/* binding */ ContentLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class ContentLayoutComponent {
}
ContentLayoutComponent.??fac = function ContentLayoutComponent_Factory(t) { return new (t || ContentLayoutComponent)(); };
ContentLayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContentLayoutComponent, selectors: [["app-content-layout"]], decls: 1, vars: 0, template: function ContentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 28526:
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": () => (/* binding */ FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 39522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ 14016);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ 54696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);
/* harmony import */ var _shared_color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/color-switcher/color-switcher.component */ 80672);









const _c0 = function (a0) { return { "nav-collapsed": a0 }; };
const _c1 = function (a0) { return { "show": a0 }; };
class FullLayoutComponent {
    constructor(sidebarservice, router) {
        this.sidebarservice = sidebarservice;
        this.router = router;
    }
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }
    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
FullLayoutComponent.??fac = function FullLayoutComponent_Factory(t) { return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
FullLayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: FullLayoutComponent, selectors: [["app-full-layout"]], decls: 10, vars: 6, consts: [[1, "wrapper", 3, "ngClass"], [1, "page-wrapper"], [1, "page-content-wrapper"], [1, "page-content"], [1, "overlay", 3, "ngClass", "click"]], template: function FullLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "app-sidebar")(2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function FullLayoutComponent_Template_div_click_7_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](8, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](9, "app-color-switcher");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](2, _c0, ctx.getSideBarState()));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](4, _c1, ctx.getSideBarState()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _shared_color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_4__.ColorSwitcherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 80672:
/*!*******************************************************************!*\
  !*** ./src/app/shared/color-switcher/color-switcher.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorSwitcherComponent": () => (/* binding */ ColorSwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ColorSwitcherComponent {
    constructor() { }
    ngOnInit() {
        $(".switcher-btn").on("click", function () {
            $(".switcher-wrapper").toggleClass("switcher-toggled");
        }), $(".close-switcher").on("click", function () {
            $(".switcher-wrapper").removeClass("switcher-toggled");
        }), $("#lightmode").on("click", function () {
            $("html").attr("class", "light-theme");
        }), $("#darkmode").on("click", function () {
            $("html").attr("class", "dark-theme");
        }), $("#semidark").on("click", function () {
            $("html").attr("class", "semi-dark");
        }), $("#minimaltheme").on("click", function () {
            $("html").attr("class", "minimal-theme");
        }), $("#headercolor1").on("click", function () {
            $("html").addClass("color-header headercolor1"), $("html").removeClass("headercolor2 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8");
        }), $("#headercolor2").on("click", function () {
            $("html").addClass("color-header headercolor2"), $("html").removeClass("headercolor1 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8");
        }), $("#headercolor3").on("click", function () {
            $("html").addClass("color-header headercolor3"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8");
        }), $("#headercolor4").on("click", function () {
            $("html").addClass("color-header headercolor4"), $("html").removeClass("headercolor1 headercolor2 headercolor3 headercolor5 headercolor6 headercolor7 headercolor8");
        }), $("#headercolor5").on("click", function () {
            $("html").addClass("color-header headercolor5"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor3 headercolor6 headercolor7 headercolor8");
        }), $("#headercolor6").on("click", function () {
            $("html").addClass("color-header headercolor6"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor3 headercolor7 headercolor8");
        }), $("#headercolor7").on("click", function () {
            $("html").addClass("color-header headercolor7"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor3 headercolor8");
        }), $("#headercolor8").on("click", function () {
            $("html").addClass("color-header headercolor8"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor3");
        });
        // sidebar colors 
        $('#sidebarcolor1').click(theme1);
        $('#sidebarcolor2').click(theme2);
        $('#sidebarcolor3').click(theme3);
        $('#sidebarcolor4').click(theme4);
        $('#sidebarcolor5').click(theme5);
        $('#sidebarcolor6').click(theme6);
        $('#sidebarcolor7').click(theme7);
        $('#sidebarcolor8').click(theme8);
        function theme1() {
            $('html').attr('class', 'color-sidebar sidebarcolor1');
        }
        function theme2() {
            $('html').attr('class', 'color-sidebar sidebarcolor2');
        }
        function theme3() {
            $('html').attr('class', 'color-sidebar sidebarcolor3');
        }
        function theme4() {
            $('html').attr('class', 'color-sidebar sidebarcolor4');
        }
        function theme5() {
            $('html').attr('class', 'color-sidebar sidebarcolor5');
        }
        function theme6() {
            $('html').attr('class', 'color-sidebar sidebarcolor6');
        }
        function theme7() {
            $('html').attr('class', 'color-sidebar sidebarcolor7');
        }
        function theme8() {
            $('html').attr('class', 'color-sidebar sidebarcolor8');
        }
    }
}
ColorSwitcherComponent.??fac = function ColorSwitcherComponent_Factory(t) { return new (t || ColorSwitcherComponent)(); };
ColorSwitcherComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ColorSwitcherComponent, selectors: [["app-color-switcher"]], decls: 74, vars: 0, consts: [[1, "switcher-wrapper"], [1, "switcher-btn"], [1, "bx", "bx-cog", "bx-spin"], [1, "switcher-body"], [1, "d-flex", "align-items-center"], [1, "mb-0", "text-uppercase"], ["type", "button", "aria-label", "Close", 1, "btn-close", "ms-auto", "close-switcher"], [1, "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "lightmode", "checked", "", 1, "form-check-input"], ["for", "lightmode", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "darkmode", 1, "form-check-input"], ["for", "darkmode", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "semidark", 1, "form-check-input"], ["for", "semidark", 1, "form-check-label"], ["type", "radio", "id", "minimaltheme", "name", "flexRadioDefault", 1, "form-check-input"], ["for", "minimaltheme", 1, "form-check-label"], [1, "header-colors-indigators"], [1, "row", "row-cols-auto", "g-3"], [1, "col"], ["id", "headercolor1", 1, "indigator", "headercolor1"], ["id", "headercolor2", 1, "indigator", "headercolor2"], ["id", "headercolor3", 1, "indigator", "headercolor3"], ["id", "headercolor4", 1, "indigator", "headercolor4"], ["id", "headercolor5", 1, "indigator", "headercolor5"], ["id", "headercolor6", 1, "indigator", "headercolor6"], ["id", "headercolor7", 1, "indigator", "headercolor7"], ["id", "headercolor8", 1, "indigator", "headercolor8"], ["id", "sidebarcolor1", 1, "indigator", "sidebarcolor1"], ["id", "sidebarcolor2", 1, "indigator", "sidebarcolor2"], ["id", "sidebarcolor3", 1, "indigator", "sidebarcolor3"], ["id", "sidebarcolor4", 1, "indigator", "sidebarcolor4"], ["id", "sidebarcolor5", 1, "indigator", "sidebarcolor5"], ["id", "sidebarcolor6", 1, "indigator", "sidebarcolor6"], ["id", "sidebarcolor7", 1, "indigator", "sidebarcolor7"], ["id", "sidebarcolor8", 1, "indigator", "sidebarcolor8"]], template: function ColorSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Theme Customizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Theme Styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Semi Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Minimal Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Header Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18)(35, "div", 19)(36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Sidebar Backgrounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 18)(57, "div", 19)(58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    ngOnInit() {
        /* Back To Top */
        $(document).ready(function () {
            $(window).on("scroll", function () {
                if ($(this).scrollTop() > 300) {
                    $('.back-to-top').fadeIn();
                }
                else {
                    $('.back-to-top').fadeOut();
                }
            });
            $('.back-to-top').on("click", function () {
                $("html, body").animate({ scrollTop: 0 }, 600);
                return false;
            });
        });
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [["href", "#", 1, "back-to-top", 3, "click"], [1, "bx", "bxs-up-arrow-alt"], [1, "page-footer"], [1, "mb-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FooterComponent_Template_a_click_0_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "footer", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Copyright \u00A9 2021. All right reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 54696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_portal_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/portal-api.service */ 62863);
/* harmony import */ var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.service */ 39522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);








const _c0 = function (a0) { return { "bg-dark shadow-none border-light-2 border-bottom": a0 }; };
const _c1 = function (a0) { return { "text-white": a0 }; };
const _c2 = function (a0) { return { "border-light-2": a0 }; };
class NavbarComponent {
    constructor(apiService, sidebarservice, location, router) {
        this.apiService = apiService;
        this.sidebarservice = sidebarservice;
        this.router = router;
        let user = this.apiService.getUserInfo();
        if (user) {
            this.userDetails = user;
        }
        router.events.subscribe((val) => {
            if (location.path() == '/dashboard/analytics') {
                $('html').removeAttr('class');
                this.analytics = true;
            }
            else {
                this.analytics = false;
                if (location.path() == '/dashboard/e-commerce') {
                    $('html').removeAttr('class');
                    $('html').addClass('color-sidebar sidebarcolor3 color-header headercolor1');
                }
                else {
                    if (location.path() == '/dashboard/alternate') {
                        $('html').removeAttr('class');
                        $('html').addClass('color-sidebar sidebarcolor3');
                    }
                    else {
                        if (location.path() == '/dashboard/hospitality') {
                            $('html').removeAttr('class');
                            $('html').addClass('color-sidebar sidebarcolor3 color-header headercolor5');
                        }
                    }
                }
            }
        });
    }
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }
    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }
    ngOnInit() {
        /* Search Bar */
        $(document).ready(function () {
            $(".mobile-search-icon").on("click", function () {
                $(".search-bar").addClass("full-search-bar");
            }),
                $(".search-close").on("click", function () {
                    $(".search-bar").removeClass("full-search-bar");
                });
        });
    }
    logout() {
        sessionStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.localStoreKey);
        sessionStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.localStoreLoginKey);
        this.router.navigateByUrl("/");
        window.location.reload();
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_portal_api_service__WEBPACK_IMPORTED_MODULE_1__.PortalAPIService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
NavbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 349, vars: 42, consts: [[1, "topbar", "d-flex", "align-items-center", 3, "ngClass"], [1, "navbar", "navbar-expand"], [1, "mobile-toggle-menu"], [1, "bx", "bx-menu", 3, "ngClass", "click"], [1, "top-menu-left", "d-none", "d-lg-block"], [1, "nav"], [1, "nav-item"], ["routerLink", "/application/email-app", 1, "nav-link", 3, "ngClass"], [1, "bx", "bx-envelope"], ["routerLink", "/application/chat-box", 1, "nav-link", 3, "ngClass"], [1, "bx", "bx-message"], ["routerLink", "/application/calendar", 1, "nav-link", 3, "ngClass"], [1, "bx", "bx-calendar"], ["routerLink", "/ecommerce/products", 1, "nav-link", 3, "ngClass"], [1, "bx", "bx", "bx-cart"], [1, "search-bar", "flex-grow-1"], [1, "position-relative", "search-bar-box"], ["type", "text", "placeholder", "Type to search...", 1, "form-control", "search-control"], [1, "position-absolute", "top-50", "search-show", "translate-middle-y"], [1, "bx", "bx-search"], [1, "position-absolute", "top-50", "search-close", "translate-middle-y"], [1, "bx", "bx-x"], [1, "top-menu", "ms-auto"], [1, "navbar-nav", "align-items-center"], [1, "nav-item", "mobile-search-icon"], ["href", "javascript:;", 1, "nav-link", 3, "ngClass"], [1, "nav-item", "dropdown", "dropdown-large"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "dropdown-toggle-nocaret", 3, "ngClass"], [1, "bx", "bx-category"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "row", "row-cols-3", "g-3", "p-3"], [1, "col", "text-center"], [1, "app-box", "mx-auto", "bg-gradient-cosmic", "text-white"], [1, "bx", "bx-group"], [1, "app-title"], [1, "app-box", "mx-auto", "bg-gradient-burning", "text-white"], [1, "bx", "bx-atom"], [1, "app-box", "mx-auto", "bg-gradient-lush", "text-white"], [1, "bx", "bx-shield"], [1, "app-box", "mx-auto", "bg-gradient-kyoto", "text-dark"], [1, "bx", "bx-notification"], [1, "app-box", "mx-auto", "bg-gradient-blues", "text-dark"], [1, "bx", "bx-file"], [1, "app-box", "mx-auto", "bg-gradient-moonlit", "text-white"], [1, "bx", "bx-filter-alt"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "dropdown-toggle-nocaret", "position-relative", 3, "ngClass"], [1, "alert-count"], [1, "bx", "bx-bell"], ["href", "javascript:;"], [1, "msg-header"], [1, "msg-header-title"], [1, "msg-header-clear", "ms-auto"], [1, "header-notifications-list", 3, "perfectScrollbar"], ["href", "javascript:;", 1, "dropdown-item"], [1, "d-flex", "align-items-center"], [1, "notify", "bg-light-primary", "text-primary"], [1, "flex-grow-1"], [1, "msg-name"], [1, "msg-time", "float-end"], [1, "msg-info"], [1, "notify", "bg-light-danger", "text-danger"], [1, "bx", "bx-cart-alt"], [1, "notify", "bg-light-success", "text-success"], [1, "notify", "bg-light-warning", "text-warning"], [1, "bx", "bx-send"], [1, "notify", "bg-light-info", "text-info"], [1, "bx", "bx-home-circle"], [1, "bx", "bx-message-detail"], [1, "bx", "bx-check-square"], [1, "bx", "bx-user-pin"], [1, "bx", "bx-door-open"], [1, "text-center", "msg-footer"], [1, "bx", "bx-comment"], [1, "header-message-list", 3, "perfectScrollbar"], [1, "user-online"], ["src", "assets/images/avatars/avatar-1.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-2.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-3.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-4.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-5.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-6.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-7.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-8.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-9.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-10.png", "alt", "user avatar", 1, "msg-avatar"], ["src", "assets/images/avatars/avatar-11.png", "alt", "user avatar", 1, "msg-avatar"], [1, "user-box", "dropdown", 3, "ngClass"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "d-flex", "align-items-center", "nav-link", "dropdown-toggle", "dropdown-toggle-nocaret", 3, "ngClass"], [1, "bx", "bx-user-circle", "bx-md"], [1, "user-info", "ps-3"], [1, "user-name", "mb-0", 3, "ngClass"], [1, "designattion", "mb-0"], ["routerLink", "/user-profile", 1, "dropdown-item"], [1, "bx", "bx-user"], ["routerLink", "/ecommerce/orders", 1, "dropdown-item"], [1, "bx", "bx-cog"], ["routerLink", "/dashboard/analytics", 1, "dropdown-item"], [1, "dropdown-divider", "mb-0"], [1, "dropdown-item", 3, "click"], [1, "bx", "bx-log-out-circle"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "header")(1, "div", 0)(2, "nav", 1)(3, "div", 2)(4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function NavbarComponent_Template_i_click_4_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "li", 6)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "li", 6)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "li", 6)(17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "div", 15)(20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 22)(27, "ul", 23)(28, "li", 24)(29, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](30, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "li", 26)(32, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 29)(35, "div", 30)(36, "div", 31)(37, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](38, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div", 31)(42, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](43, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 31)(47, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](48, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "div", 31)(52, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](53, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](55, "Feeds");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "div", 31)(57, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](58, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](60, "Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "div", 31)(62, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](63, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "li", 26)(67, "a", 45)(68, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](69, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](70, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "div", 29)(72, "a", 48)(73, "div", 49)(74, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](75, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "Marks all as read");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "div", 52)(79, "a", 53)(80, "div", 54)(81, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](82, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "div", 56)(84, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](85, "New Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](87, "14 Sec ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](89, "5 new user registered");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](90, "a", 53)(91, "div", 54)(92, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](93, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](94, "div", 56)(95, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](96, "New Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](98, "2 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](99, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](100, "You have recived new orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](101, "a", 53)(102, "div", 54)(103, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](104, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](105, "div", 56)(106, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](107, "24 PDF File");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](108, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](109, "19 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](110, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](111, "The pdf files generated");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](112, "a", 53)(113, "div", 54)(114, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](115, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](116, "div", 56)(117, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](118, "Time Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](119, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](120, "28 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](122, "5.1 min avarage time response");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](123, "a", 53)(124, "div", 54)(125, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](126, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](127, "div", 56)(128, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](129, "New Product Approved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](130, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](131, "2 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](132, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](133, "Your new product has approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](134, "a", 53)(135, "div", 54)(136, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](137, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](138, "div", 56)(139, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](140, "New Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](141, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](142, "4 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](143, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](144, "New customer comments recived");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](145, "a", 53)(146, "div", 54)(147, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](148, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](149, "div", 56)(150, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](151, "Your item is shipped ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](152, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](153, "5 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](154, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](155, "Successfully shipped your item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](156, "a", 53)(157, "div", 54)(158, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](159, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](160, "div", 56)(161, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](162, "New 24 authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](163, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](164, "1 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](165, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](166, "24 new authors joined last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](167, "a", 53)(168, "div", 54)(169, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](170, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](171, "div", 56)(172, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](173, "Defense Alerts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](174, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](175, "2 weeks ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](176, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](177, "45% less alerts last 4 weeks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](178, "a", 48)(179, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](180, "View All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](181, "li", 26)(182, "a", 45)(183, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](184, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](185, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](186, "div", 29)(187, "a", 48)(188, "div", 49)(189, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](190, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](191, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](192, "Marks all as read");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](193, "div", 73)(194, "a", 53)(195, "div", 54)(196, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](197, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](198, "div", 56)(199, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](200, "Daisy Anderson ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](201, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](202, "5 sec ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](203, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](204, "The standard chunk of lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](205, "a", 53)(206, "div", 54)(207, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](208, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](209, "div", 56)(210, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](211, "Althea Cabardo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](212, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](213, "14 sec ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](214, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](215, "Many desktop publishing packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](216, "a", 53)(217, "div", 54)(218, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](219, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](220, "div", 56)(221, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](222, "Oscar Garner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](223, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](224, "8 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](225, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](226, "Various versions have evolved over");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](227, "a", 53)(228, "div", 54)(229, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](230, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](231, "div", 56)(232, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](233, "Katherine Pechon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](234, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](235, "15 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](236, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](237, "Making this the first true generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](238, "a", 53)(239, "div", 54)(240, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](241, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](242, "div", 56)(243, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](244, "Amelia Doe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](245, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](246, "22 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](247, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](248, "Duis aute irure dolor in reprehenderit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](249, "a", 53)(250, "div", 54)(251, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](252, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](253, "div", 56)(254, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](255, "Cristina Jhons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](256, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](257, "2 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](258, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](259, "The passage is attributed to an unknown");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](260, "a", 53)(261, "div", 54)(262, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](263, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](264, "div", 56)(265, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](266, "James Caviness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](267, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](268, "4 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](269, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](270, "The point of using Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](271, "a", 53)(272, "div", 54)(273, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](274, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](275, "div", 56)(276, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](277, "Peter Costanzo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](278, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](279, "6 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](280, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](281, "It was popularised in the 1960s");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](282, "a", 53)(283, "div", 54)(284, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](285, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](286, "div", 56)(287, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](288, "David Buckley ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](289, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](290, "2 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](291, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](292, "Various versions have evolved over");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](293, "a", 53)(294, "div", 54)(295, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](296, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](297, "div", 56)(298, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](299, "Thomas Wheeler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](300, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](301, "2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](302, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](303, "If you are going to use a passage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](304, "a", 53)(305, "div", 54)(306, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](307, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](308, "div", 56)(309, "h6", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](310, "Johnny Seitz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](311, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](312, "5 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](313, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](314, "All the Lorem Ipsum generators");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](315, "a", 48)(316, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](317, "View All Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](318, "div", 86)(319, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](320, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](321, "div", 89)(322, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](323);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](324, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](325);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](326, "ul", 29)(327, "li")(328, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](329, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](330, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](331, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](332, "li")(333, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](334, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](335, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](336, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](337, "li")(338, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](339, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](340, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](341, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](342, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](343, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](344, "li")(345, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function NavbarComponent_Template_a_click_345_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](346, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](347, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](348, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](16, _c0, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](18, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](20, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](22, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](24, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](26, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](28, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](30, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](32, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](34, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](36, _c2, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](38, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](40, _c1, ctx.analytics));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", ctx.userDetails == null ? null : ctx.userDetails.fName, " ", ctx.userDetails == null ? null : ctx.userDetails.lName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.role);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 63650:
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTENT_ROUTES": () => (/* binding */ CONTENT_ROUTES)
/* harmony export */ });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
const CONTENT_ROUTES = [
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../error/error.module */ 26419)).then(m => m.ErrorModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../auth/auth.module */ 71674)).then(m => m.AuthModule)
    }
];


/***/ }),

/***/ 90578:
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Full_ROUTES": () => (/* binding */ Full_ROUTES)
/* harmony export */ });
//Route for content layout with sidebar, navbar and footer.
const Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_highcharts-angular___ivy_ngcc___fesm2015_highcharts-angular_js"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../dashboard/dashboard.module */ 34814)).then(m => m.DashboardModule)
    },
    {
        path: 'application',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_application_application_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../application/application.module */ 25331)).then(m => m.ApplicationModule)
    },
    {
        path: 'widgets',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_widgets_widgets_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../widgets/widgets.module */ 50546)).then(m => m.WidgetsModule)
    },
    {
        path: 'ecommerce',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ecommerce_ecommerce_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../ecommerce/ecommerce.module */ 67137)).then(m => m.EcommerceModule)
    },
    {
        path: 'components',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_components_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/components.module */ 45642)).then(m => m.ComponentsModule)
    },
    {
        path: 'ng-components',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ng-components_ng-components_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../ng-components/ng-components.module */ 33508)).then(m => m.NgComponentsModule)
    },
    {
        path: 'content',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_content_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../content/content.module */ 5390)).then(m => m.ContentModule)
    },
    {
        path: 'icons',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../icons/icons.module */ 74115)).then(m => m.IconsModule)
    },
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../form/form.module */ 9659)).then(m => m.FormModule)
    },
    {
        path: 'table',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_table_table_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../table/table.module */ 91304)).then(m => m.TableModule)
    },
    {
        path: 'user-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user-profile_user-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../user-profile/user-profile.module */ 77582)).then(m => m.UserProfileModule)
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../faq/faq.module */ 5083)).then(m => m.FaqModule)
    },
    {
        path: 'pricing',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pricing_pricing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pricing/pricing.module */ 27719)).then(m => m.PricingModule)
    },
    {
        path: 'earnings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_earnings_earnings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../earnings/earnings.module */ 36359)).then(m => m.EarningsModule)
    },
    {
        path: 'downloads',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_downloads_downloads_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../downloads/downloads.module */ 83596)).then(m => m.DownloadsModule)
    },
    {
        path: 'timeline',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../timeline/timeline.module */ 6159)).then(m => m.TimelineModule)
    },
    {
        path: 'charts',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_highcharts-angular___ivy_ngcc___fesm2015_highcharts-angular_js"), __webpack_require__.e("src_app_charts_chart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../charts/chart.module */ 24804)).then(m => m.ChartModule)
    },
    {
        path: 'maps',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../maps/maps.module */ 83842)).then(m => m.MapsModule)
    }
];


/***/ }),

/***/ 62863:
/*!******************************************************!*\
  !*** ./src/app/shared/service/portal-api.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalAPIService": () => (/* binding */ PortalAPIService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class PortalAPIService {
    constructor(http) {
        this.http = http;
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
    }
    getHeaders(headers = null) {
        let user = this.getUserInfo();
        if (user !== null)
            this.token = user.token;
        var headerCollection = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Authorization': 'Bearer ' + this.token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        if (headers) {
            headers.forEach(header => {
                headerCollection.append(header.key, header.value);
            });
        }
        return headerCollection;
    }
    getQueryParams(queryParams = null) {
        var search = new URLSearchParams();
        if (queryParams) {
            queryParams.forEach(item => {
                search.set(item.key, item.value);
            });
        }
        return search;
    }
    get(url) {
        return this.http.get(this.baseUrl + url, { headers: this.getHeaders() });
    }
    post(url, data, type) {
        return this.http.post(this.baseUrl + url, JSON.stringify(data), { headers: this.getHeaders() });
    }
    put(url, data) {
        var putData = JSON.stringify(data);
        return this.http.put(this.baseUrl + url, putData, { headers: this.getHeaders() });
    }
    delete(url) {
        return this.http.delete(this.baseUrl + url, { headers: this.getHeaders() });
    }
    getUserInfo() {
        let user = this.decrypt(sessionStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.localStoreKey));
        return user;
    }
    getMonthYear(date) {
        var d = new Date(date);
        return `${this.monthNames[d.getMonth()]} ${d.getFullYear()}`;
    }
    getPreviousMonthYear(date) {
        var d = new Date(date);
        d.setMonth(d.getMonth() - 1);
        return `${this.monthNames[d.getMonth()]} ${d.getFullYear()}`;
    }
    getCurrentMonthYear() {
        let list = this.monthNames.map(x => (x + ' ' + new Date().getFullYear()));
        return list;
    }
    exportAsExcelFile(json, excelFileName, SheetName = 'data') {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.json_to_sheet(json);
        const sheets = {};
        sheets[SheetName] = worksheet;
        const workbook = { Sheets: sheets, SheetNames: [SheetName.toString()] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_4__.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, excelFileName + '_' + new Date().getTime() + EXCEL_EXTENSION);
        return true;
    }
    getListById(list, id) {
        return list === null || list === void 0 ? void 0 : list.find(item => (item === null || item === void 0 ? void 0 : item._id) == id);
    }
    dateDiff(date1, date2) {
        let diffValue = 0;
        if (date1 && date2) {
            var d1 = new Date(date1);
            var d2 = new Date(date2);
            var diff = d2.getTime() - d1.getTime();
            diffValue = diff / (1000 * 60 * 60 * 24);
        }
        return diffValue;
    }
    formatDate(date) {
        if (date == undefined || date == null || date == '') {
            return null;
        }
        else {
            try {
                let orderDate;
                let cDate = date.trim();
                orderDate = cDate.replace(/-/g, '/');
                orderDate = orderDate.split("/").reverse().join("-");
                return new Date(orderDate).toISOString();
            }
            catch (e) {
                console.log(e, date);
                return null;
            }
        }
    }
    formatISODate(date) {
        if (date !== null) {
            return new Date(date).toLocaleDateString('en-GB', {
                month: '2-digit', day: '2-digit', year: 'numeric'
            });
        }
    }
    filterUnique(array, keyProps) {
        const kvArray = array.map(entry => {
            const key = keyProps.map(k => entry[k]).join('|');
            return [key, entry];
        });
        const map = new Map(kvArray);
        return Array.from(map.values());
    }
    /* method is used to encrypt and decrypt the text  */
    encrypt(data) {
        let cipher = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(JSON.stringify(data), _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.secretKey).toString();
        return cipher;
    }
    decrypt(ciphertext) {
        let decryptedData = null;
        if (ciphertext != undefined) {
            let bytes = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.decrypt(ciphertext, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.secretKey);
            decryptedData = JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__.enc.Utf8));
        }
        return decryptedData;
    }
}
PortalAPIService.??fac = function PortalAPIService_Factory(t) { return new (t || PortalAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PortalAPIService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjectable"]({ token: PortalAPIService, factory: PortalAPIService.??fac, providedIn: 'root' });


/***/ }),

/***/ 49308:
/*!************************************************!*\
  !*** ./src/app/shared/service/portal.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleEnum": () => (/* binding */ RoleEnum)
/* harmony export */ });
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["ADMIN"] = "ADMIN";
    RoleEnum["Customer"] = "Customer";
    RoleEnum["Vendor"] = "Vendor";
    RoleEnum["SalesTeam"] = "Sales Team";
    RoleEnum["VDEmployee"] = "VD Employee";
})(RoleEnum || (RoleEnum = {}));


/***/ }),

/***/ 84368:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 45227);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 54696);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 14016);
/* harmony import */ var _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-switcher/color-switcher.component */ 80672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent,
        _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_3__.ColorSwitcherComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent,
        _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_3__.ColorSwitcherComponent,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule] }); })();


/***/ }),

/***/ 50758:
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
//Sidebar menu Routes and data
const ROUTES = [
    {
        path: '', title: 'Dashboard', icon: 'bx bx-home-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/analytics', title: 'Analytics', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/sales', title: 'Sales', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/e-commerce', title: 'eCommerce', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/alternate', title: 'Alternate', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/hospitality', title: 'Hospitality', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Application', icon: 'bx bx-category', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/application/email-app', title: 'Email', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/chat-box', title: 'Chat Box', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/file-manager', title: 'File Manager', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/contatcs', title: 'Contatcs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/invoice', title: 'Invoice', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/application/calendar', title: 'Calendar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/widgets', title: 'Widgets', icon: 'bx bx-cookie', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'eCommerce', icon: 'bx bx-cart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/ecommerce/products', title: 'Products', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/products-details', title: 'Products Details', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/add-new-products', title: 'Add New Products', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ecommerce/orders', title: 'Orders', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Components', icon: 'bx bx-bookmark-heart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/components/alerts', title: 'Alerts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/badge', title: 'Badge', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/buttons', title: 'Buttons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/cards', title: 'Cards', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/carousel', title: 'Carousel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/acordians', title: 'Accordion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/list-groups', title: 'List Groups', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/media-objects', title: 'Media Objects', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/modals', title: 'Modals', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/navs', title: 'Navs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/navbar', title: 'Navbar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/pagination', title: 'Pagination', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/progress-bar', title: 'Progress Bars', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/spinners', title: 'Spinners', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/avtars-chips', title: 'Avatrs & Chips', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'ng-Components', icon: 'bx bx-layer icon-color-6', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/ng-components/accordion', title: 'Accordion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/alert', title: 'Alert', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/buttons', title: 'Buttons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/carousel', title: 'Carousel', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/collapse', title: 'Collapse', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/datepicker', title: 'Datepicker', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/dropdown', title: 'Dropdown', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/modal', title: 'Modal', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/nav', title: 'Nav', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/pagination', title: 'Pagination', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/popovers', title: 'Popovers', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/progress-bar', title: 'Progressbar', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/table', title: 'Table', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/timepicker', title: 'Timepicker', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/toast', title: 'Toast', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ng-components/tooltip', title: 'Tooltip', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Content', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/content/grid-system', title: 'Grid System', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/content/typography', title: 'Typography', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/content/text-utilities', title: 'Text Utilities', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Icons', icon: 'bx bx-donate-blood', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/icons/line-icons', title: 'Line Icons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/icons/boxicons', title: 'Boxicons', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Form', icon: 'bx bx-message-square-edit', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/form/form-elements', title: 'Form Elements', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/input-groups', title: 'Input Groups', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-layouts', title: 'Forms Layouts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-validation', title: 'Form Validation', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/form-wizard', title: 'Form Wizard', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/text-editor', title: 'Text Editor', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/file-upload', title: 'File Upload', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/form/select2', title: 'Select2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/table/table', title: 'Table', icon: 'bx bx-grid-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Authentication', icon: 'bx bx-lock', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/auth/sign-in', title: 'Sign In', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/sign-up', title: 'Sign Up', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/signin-with-header-footer', title: 'SignIn With Header Footer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/signup-with-header-footer', title: 'SignUp With Header Footer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/forgot-password', title: 'Forgot Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/reset-password', title: 'Reset Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/lock-screen', title: 'Lock Screen', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
    },
    { path: '/user-profile', title: 'User Profile', icon: 'bx bx-user-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/timeline', title: 'Timeline', icon: 'bx bx-video-recording', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Errors', icon: 'bx bx-error', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/error/error-404', title: '404 Error', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/error/error-500', title: '500 Error', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/error/coming-soon', title: 'Coming Soon', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
    },
    { path: '/faq', title: 'FAQ', icon: 'bx bx-help-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/pricing', title: 'Pricing', icon: 'bx bx-diamond', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/earnings', title: 'Earnings', icon: 'bx bx-dollar-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/downloads', title: 'Downloads', icon: 'bx bx-download', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Charts', icon: 'bx bx-line-chart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/charts/apex-chart', title: 'Apex Charts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/chartjs', title: 'ChartJs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/highcharts', title: 'Highcharts', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Maps', icon: 'bx bx-map-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/maps/google-maps', title: 'Google Maps', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/maps/fullscreen', title: 'Fullscreen Map', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: 'javascript:;', title: 'Menu Levels', icon: 'bx bx-menu', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Level 1', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Level 1', icon: 'bx bx-right-arrow-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: 'javascript:;', title: 'level 2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: 'javascript:;', title: 'level 2', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ] },
        ]
    },
    { path: 'https://codervent.com/synadmin-angular/demo/vertical/docs/', title: 'Documentation', icon: 'bx bx-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://themeforest.net/user/codewrrap/portfolio', title: 'Support', icon: 'bx bx-support', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }
];


/***/ }),

/***/ 14016:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-routes.config */ 50758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.service */ 39522);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);








const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_8_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, menuItem_r1.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuItem_r1.badge);
} }
function SidebarComponent_li_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_8_a_1_span_4_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", menuItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](5, _c0, menuItem_r1.path) : null)("ngClass", menuItem_r1.class === "" ? "" : "cursor-pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](7, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", menuItem_r1.badge != "");
} }
function SidebarComponent_li_8_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, menuItem_r1.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuItem_r1.badge);
} }
function SidebarComponent_li_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_8_ng_template_2_span_4_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](4, _c0, menuItem_r1.path), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](6, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", menuItem_r1.badge != "");
} }
function SidebarComponent_li_8_ul_4_li_1_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, menuSubItem_r13.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuSubItem_r13.badge);
} }
function SidebarComponent_li_8_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_8_ul_4_li_1_a_1_span_4_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", menuSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](5, _c0, menuSubItem_r13.path))("ngClass", menuItem_r1.class === "" ? "" : "cursor-pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](7, _c0, menuSubItem_r13.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuSubItem_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", menuSubItem_r13.badge != "");
} }
function SidebarComponent_li_8_ul_4_li_1_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, menuSubItem_r13.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuSubItem_r13.badge);
} }
function SidebarComponent_li_8_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_8_ul_4_li_1_ng_template_2_span_4_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](4, _c0, menuSubItem_r13.path), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](6, _c0, menuSubItem_r13.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuSubItem_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", menuSubItem_r13.badge != "");
} }
function SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, menuSubsubItem_r26.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuSubsubItem_r26.badge);
} }
function SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_a_1_span_4_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](4, _c0, menuSubsubItem_r26.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](6, _c0, menuSubsubItem_r26.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuSubsubItem_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", menuSubsubItem_r26.badge != "");
} }
function SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, menuSubsubItem_r26.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuSubsubItem_r26.badge);
} }
function SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_ng_template_2_span_4_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](4, _c0, menuSubsubItem_r26.path), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](6, _c0, menuSubsubItem_r26.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](menuSubsubItem_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", menuSubsubItem_r26.badge != "");
} }
const _c1 = function () { return { exact: true }; };
function SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_a_1_Template, 5, 8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 5, 8, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubsubItem_r26 = ctx.$implicit;
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](4, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](5, _c0, menuSubsubItem_r26.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !menuSubsubItem_r26.isExternalLink)("ngIfElse", _r28);
} }
function SidebarComponent_li_8_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_8_ul_4_li_1_ul_4_li_1_Template, 4, 7, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", menuSubItem_r13.submenu);
} }
function SidebarComponent_li_8_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_8_ul_4_li_1_a_1_Template, 5, 9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SidebarComponent_li_8_ul_4_li_1_ng_template_2_Template, 5, 8, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_8_ul_4_li_1_ul_4_Template, 2, 1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuSubItem_r13 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLinkActive", menuSubItem_r13.submenu.length > 0 ? "" : "active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](5, _c0, menuSubItem_r13.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !menuSubItem_r13.isExternalLink)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", menuSubItem_r13.submenu.length > 0);
} }
function SidebarComponent_li_8_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_8_ul_4_li_1_Template, 5, 7, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", menuItem_r1.submenu);
} }
function SidebarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_8_a_1_Template, 5, 9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SidebarComponent_li_8_ng_template_2_Template, 5, 8, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_8_ul_4_Template, 2, 1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](6, _c0, menuItem_r1.class))("routerLinkActive", menuItem_r1.submenu.length != 0 ? "" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !menuItem_r1.isExternalLink)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", menuItem_r1.submenu.length > 0);
} }
class SidebarComponent {
    constructor(sidebarservice, router) {
        this.sidebarservice = sidebarservice;
        this.router = router;
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd && jquery__WEBPACK_IMPORTED_MODULE_1__(window).width() < 1025 && (document.readyState == 'complete' || false)) {
                this.toggleSidebar();
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationError) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
        if (jquery__WEBPACK_IMPORTED_MODULE_1__(".wrapper").hasClass("nav-collapsed")) {
            // unpin sidebar when hovered
            jquery__WEBPACK_IMPORTED_MODULE_1__(".wrapper").removeClass("nav-collapsed");
            jquery__WEBPACK_IMPORTED_MODULE_1__(".sidebar-wrapper").unbind("hover");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".wrapper").addClass("nav-collapsed");
            jquery__WEBPACK_IMPORTED_MODULE_1__(".sidebar-wrapper").hover(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".wrapper").addClass("sidebar-hovered");
            }, function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".wrapper").removeClass("sidebar-hovered");
            });
        }
    }
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }
    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }
    ngOnInit() {
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(menuItem => menuItem);
        jquery__WEBPACK_IMPORTED_MODULE_1__.getScript('./assets/js/app-sidebar.js');
    }
}
SidebarComponent.??fac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 9, vars: 1, consts: [[1, "sidebar", "sidebar-wrapper"], [1, "sidebar-header"], ["src", "assets/images/logo-icon.png", "alt", "logo icon", 1, "logo-icon"], [1, "toggle-icon", "ms-auto"], [1, "bx", "bx-first-page", 3, "click"], [1, "sidebar-content", 3, "perfectScrollbar"], [1, "navigation"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [3, "routerLink", "ngClass", 4, "ngIf", "ngIfElse"], ["externalLinkBlock", ""], ["class", "menu-content", 4, "ngIf"], [3, "routerLink", "ngClass"], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "menu-content"], [3, "routerLinkActive", "ngClass", 4, "ngFor", "ngForOf"], [3, "routerLinkActive", "ngClass"], ["externalSubLinkBlock", ""], [1, "sub-menu-title"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions", "ngClass"], [3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], [3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3)(5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SidebarComponent_Template_i_click_5_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 5)(7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, SidebarComponent_li_8_Template, 5, 9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.menuItems);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 39522:
/*!***************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarService": () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SidebarService {
    constructor() {
        this.toggled = false;
    }
    toggle() {
        this.toggled = !this.toggled;
    }
    getSidebarState() {
        return this.toggled;
    }
    setSidebarState(state) {
        this.toggled = state;
    }
}
SidebarService.??fac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: SidebarService, factory: SidebarService.??fac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    appName: 'PACTAP',
    production: false,
    baseUrl: 'http://localhost:3000/api/',
    imageUrl: 'http://localhost:3000/upload_docs/',
    Authorization: '',
    secretKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    localStoreKey: 'PC-PACTAP',
    localStoreLoginKey: 'PC-PACTAP-Last-Login'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map