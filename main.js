(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/app/app-routing.module.ts":
/*!****************************************!*\
  !*** ./demo/app/app-routing.module.ts ***!
  \****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _samples_common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samples/common.component */ "./demo/app/samples/common.component.ts");
/* harmony import */ var _samples_adapter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./samples/adapter.component */ "./demo/app/samples/adapter.component.ts");
/* harmony import */ var _samples_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./samples/window.component */ "./demo/app/samples/window.component.ts");
/* harmony import */ var _samples_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./samples/test.component */ "./demo/app/samples/test.component.ts");





var routes = [
    { path: '', component: _samples_common_component__WEBPACK_IMPORTED_MODULE_1__["CommonComponent"] },
    { path: 'adapter', component: _samples_adapter_component__WEBPACK_IMPORTED_MODULE_2__["AdapterComponent"] },
    { path: 'window', component: _samples_window_component__WEBPACK_IMPORTED_MODULE_3__["WindowComponent"] },
    { path: 'test', component: _samples_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./demo/app/app.component.ngfactory.js":
/*!*********************************************!*\
  !*** ./demo/app/app.component.ngfactory.js ***!
  \*********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/nav.component.ngfactory */ "./demo/app/shared/nav.component.ngfactory.js");
/* harmony import */ var _shared_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/nav.component */ "./demo/app/shared/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./demo/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppComponent = [];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "app-nav", [], null, null, null, _shared_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NavComponent_0"], _shared_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _shared_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 4, "div", [["class", "container mb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Angular UI Scroll Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 7, 0); }, null); }
function View_AppComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "no-layout"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AppComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasLayout; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.hasLayout; _ck(_v, 3, 0, currVal_1); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4374528, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/app.component.ts":
/*!***********************************!*\
  !*** ./demo/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.hasLayout = true;
        this.subscriptions = [];
        this.subscriptions.push(router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; })).subscribe(function (event) {
            event = event;
            _this.hasLayout = !(event.url === '/window' || event.url === '/test');
        }));
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.subscriptions.push(this.route.fragment.subscribe(function (hash) {
            if (hash) {
                setTimeout(function () {
                    var cmp = document.getElementById(hash);
                    if (cmp) {
                        cmp.scrollIntoView();
                    }
                });
            }
            else {
                window.scrollTo(0, 0);
            }
        }));
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    return AppComponent;
}());



/***/ }),

/***/ "./demo/app/app.module.ngfactory.js":
/*!******************************************!*\
  !*** ./demo/app/app.module.ngfactory.js ***!
  \******************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./demo/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./demo/app/app.component.ts");
/* harmony import */ var _src_ui_scroll_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/ui-scroll.component.ngfactory */ "./src/ui-scroll.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _samples_common_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./samples/common.component.ngfactory */ "./demo/app/samples/common.component.ngfactory.js");
/* harmony import */ var _samples_adapter_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./samples/adapter.component.ngfactory */ "./demo/app/samples/adapter.component.ngfactory.js");
/* harmony import */ var _samples_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./samples/window.component.ngfactory */ "./demo/app/samples/window.component.ngfactory.js");
/* harmony import */ var _samples_test_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./samples/test.component.ngfactory */ "./demo/app/samples/test.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component.ngfactory */ "./demo/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_tabs_tabset_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tabs/tabset.config */ "./node_modules/ngx-bootstrap/tabs/tabset.config.js");
/* harmony import */ var ngx_bootstrap_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tabs/tabs.module */ "./node_modules/ngx-bootstrap/tabs/tabs.module.js");
/* harmony import */ var _src_ui_scroll_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/ui-scroll.module */ "./src/ui-scroll.module.ts");
/* harmony import */ var _samples_common_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./samples/common.component */ "./demo/app/samples/common.component.ts");
/* harmony import */ var _samples_adapter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./samples/adapter.component */ "./demo/app/samples/adapter.component.ts");
/* harmony import */ var _samples_window_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./samples/window.component */ "./demo/app/samples/window.component.ts");
/* harmony import */ var _samples_test_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./samples/test.component */ "./demo/app/samples/test.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./demo/app/app-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_src_ui_scroll_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["UiScrollComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵEmptyOutletComponentNgFactory"], _samples_common_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CommonComponentNgFactory"], _samples_adapter_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AdapterComponentNgFactory"], _samples_window_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["WindowComponentNgFactory"], _samples_test_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TestComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_l"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_k"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_e"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Meta"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_13__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_13__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_13__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_13__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_i"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_tabs_tabset_config__WEBPACK_IMPORTED_MODULE_14__["TabsetConfig"], ngx_bootstrap_tabs_tabset_config__WEBPACK_IMPORTED_MODULE_14__["TabsetConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_g"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_g"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_h"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_h"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_15__["TabsModule"], ngx_bootstrap_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_15__["TabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _src_ui_scroll_module__WEBPACK_IMPORTED_MODULE_16__["UiScrollModule"], _src_ui_scroll_module__WEBPACK_IMPORTED_MODULE_16__["UiScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_d"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_13__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_CONFIGURATION"], { useHash: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTES"], function () { return [[{ path: "", component: _samples_common_component__WEBPACK_IMPORTED_MODULE_17__["CommonComponent"] }, { path: "adapter", component: _samples_adapter_component__WEBPACK_IMPORTED_MODULE_18__["AdapterComponent"] }, { path: "window", component: _samples_window_component__WEBPACK_IMPORTED_MODULE_19__["WindowComponent"] }, { path: "test", component: _samples_test_component__WEBPACK_IMPORTED_MODULE_20__["TestComponent"] }, { path: "**", redirectTo: "", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_e"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, [])]); });



/***/ }),

/***/ "./demo/app/app.module.ts":
/*!********************************!*\
  !*** ./demo/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./demo/app/samples/adapter.component.ngfactory.js":
/*!*********************************************************!*\
  !*** ./demo/app/samples/adapter.component.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_AdapterComponent, View_AdapterComponent_0, View_AdapterComponent_Host_0, AdapterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdapterComponent", function() { return RenderType_AdapterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdapterComponent_0", function() { return View_AdapterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdapterComponent_Host_0", function() { return View_AdapterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterComponentNgFactory", function() { return AdapterComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adapter_reload_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapter/reload.component.ngfactory */ "./demo/app/samples/adapter/reload.component.ngfactory.js");
/* harmony import */ var _adapter_reload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter/reload.component */ "./demo/app/samples/adapter/reload.component.ts");
/* harmony import */ var _adapter_is_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter/is-loading.component.ngfactory */ "./demo/app/samples/adapter/is-loading.component.ngfactory.js");
/* harmony import */ var _adapter_is_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adapter/is-loading.component */ "./demo/app/samples/adapter/is-loading.component.ts");
/* harmony import */ var _adapter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adapter.component */ "./demo/app/samples/adapter.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AdapterComponent = [];
var RenderType_AdapterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdapterComponent, data: {} });

function View_AdapterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-reload", [], null, null, null, _adapter_reload_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoReloadComponent_0"], _adapter_reload_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoReloadComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _adapter_reload_component__WEBPACK_IMPORTED_MODULE_2__["DemoReloadComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "app-demo-is-loading", [], null, null, null, _adapter_is_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoIsLoadingComponent_0"], _adapter_is_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoIsLoadingComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _adapter_is_loading_component__WEBPACK_IMPORTED_MODULE_4__["DemoIsLoadingComponent"], [], null, null)], null, null); }
function View_AdapterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-samples-adapter", [], null, null, null, View_AdapterComponent_0, RenderType_AdapterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _adapter_component__WEBPACK_IMPORTED_MODULE_5__["AdapterComponent"], [], null, null)], null, null); }
var AdapterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-samples-adapter", _adapter_component__WEBPACK_IMPORTED_MODULE_5__["AdapterComponent"], View_AdapterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/adapter.component.ts":
/*!***********************************************!*\
  !*** ./demo/app/samples/adapter.component.ts ***!
  \***********************************************/
/*! exports provided: AdapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterComponent", function() { return AdapterComponent; });
var AdapterComponent = /** @class */ (function () {
    function AdapterComponent() {
    }
    return AdapterComponent;
}());



/***/ }),

/***/ "./demo/app/samples/adapter/is-loading.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./demo/app/samples/adapter/is-loading.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_DemoIsLoadingComponent, View_DemoIsLoadingComponent_0, View_DemoIsLoadingComponent_Host_0, DemoIsLoadingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoIsLoadingComponent", function() { return RenderType_DemoIsLoadingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoIsLoadingComponent_0", function() { return View_DemoIsLoadingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoIsLoadingComponent_Host_0", function() { return View_DemoIsLoadingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoIsLoadingComponentNgFactory", function() { return DemoIsLoadingComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _is_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-loading.component */ "./demo/app/samples/adapter/is-loading.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoIsLoadingComponent = [];
var RenderType_DemoIsLoadingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoIsLoadingComponent, data: {} });

function View_DemoIsLoadingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 84, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "div", [["actions", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" The uiScroll is ", ". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 1, 80, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 19, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll Adapter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" has some read-only properties which could be used to get knowledge of the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" state. The first property is "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Adapter.isLoading"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". It is a boolean value indicating whether there are any pending load requests. So, "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["datasource.adapter.isLoading = true"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" means that the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" is working right now and the viewport will be updated soon. 125ms delay was added to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource.get"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" implementation in this sample. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 22, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" In these demos the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" is being instantiated via operator "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["new"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". The main purpose is to protect "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Adapter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" methods/properties from too early calls. The augmentation of the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" object occurs during the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" instantiating, so providing the object initializer into the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["*uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" directive ("])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["datasource: IDatasource = { get: ... }"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [") may lead to problems. For example "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 16, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["TypeError: Cannot read property 'reload' of undefined"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" if you would try to call "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["datasource.adapter.reload()"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" method on the App component's constructor; "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 8, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ERROR TypeError: Cannot read property 'isLoading' of undefined"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" if you would try to use "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 3, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["{"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["{datasource.adapter.isLoading}"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["}"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" in the App component's template. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 19, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Of course the problem could be avoided by writing something like "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["datasource.adapter && datasource.adapter.isLoading"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [", but instantiating the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" object via operator "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["new"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" solves the issue by immediately setting up the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Adapter mock object"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" on the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource's"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" constructor. It defines the adapter property and null-returning stub methods on it. The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" will override this adapter property after it is integrated to the App component. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = (_co.datasource.adapter.isLoading ? "loading" : "relaxing"); _ck(_v, 3, 0, currVal_3); }); }
function View_DemoIsLoadingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-is-loading", [], null, null, null, View_DemoIsLoadingComponent_0, RenderType_DemoIsLoadingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _is_loading_component__WEBPACK_IMPORTED_MODULE_3__["DemoIsLoadingComponent"], [], null, null)], null, null); }
var DemoIsLoadingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-is-loading", _is_loading_component__WEBPACK_IMPORTED_MODULE_3__["DemoIsLoadingComponent"], View_DemoIsLoadingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/adapter/is-loading.component.ts":
/*!**********************************************************!*\
  !*** ./demo/app/samples/adapter/is-loading.component.ts ***!
  \**********************************************************/
/*! exports provided: DemoIsLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoIsLoadingComponent", function() { return DemoIsLoadingComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public_api */ "./public_api.ts");

 // from 'ngx-ui-scroll';
var DemoIsLoadingComponent = /** @class */ (function () {
    function DemoIsLoadingComponent() {
        this.demoContext = {
            scope: 'adapter',
            title: "Is loading?",
            titleId: "is-loading",
            viewportId: "is-loading-viewport",
            count: 0,
            log: ''
        };
        this.datasource = new _public_api__WEBPACK_IMPORTED_MODULE_1__["Datasource"]({
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackInfinite"])(this.demoContext, 125)
        });
        this.sources = {
            datasource: "datasource = new Datasource ({\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    setTimeout(() => success(data), 125);\n  }\n});",
            template: "The uiScroll is {{datasource.adapter.isLoading ? 'loading': 'relaxing'}}.\n\n<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    return DemoIsLoadingComponent;
}());



/***/ }),

/***/ "./demo/app/samples/adapter/reload.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./demo/app/samples/adapter/reload.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_DemoReloadComponent, View_DemoReloadComponent_0, View_DemoReloadComponent_Host_0, DemoReloadComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoReloadComponent", function() { return RenderType_DemoReloadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoReloadComponent_0", function() { return View_DemoReloadComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoReloadComponent_Host_0", function() { return View_DemoReloadComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoReloadComponentNgFactory", function() { return DemoReloadComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reload.component */ "./demo/app/samples/adapter/reload.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_DemoReloadComponent = [];
var RenderType_DemoReloadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoReloadComponent, data: {} });

function View_DemoReloadComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 45, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 9, "div", [["actions", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.doReload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Reload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u00A0 by index \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 5, "input", [["size", "2"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_co.onInputChanged($event.target) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, 1, 33, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 13, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" augments the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" object passed from the outside during instantiating to provide an API to manipulate and assess the scroller. This API is accessible via special "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Adapter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" object. Currently it has only one method that allows you to reload the scroller: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Adapter.reload(index)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". It resets the items buffer, resets the viewport params and starts fetching items "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 18, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" from "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["index"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" position (if "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["reload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" is called with parameter)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" from "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["settings.startIndex"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" position (if "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["startIndex"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" setting is set)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" from the default position which is 1 (if neither setting nor parameter is present)"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_10 = _co.reloadIndex; _ck(_v, 9, 0, currVal_10); }, function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).ngClassPending; _ck(_v, 6, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_DemoReloadComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-reload", [], null, null, null, View_DemoReloadComponent_0, RenderType_DemoReloadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _reload_component__WEBPACK_IMPORTED_MODULE_4__["DemoReloadComponent"], [], null, null)], null, null); }
var DemoReloadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-reload", _reload_component__WEBPACK_IMPORTED_MODULE_4__["DemoReloadComponent"], View_DemoReloadComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/adapter/reload.component.ts":
/*!******************************************************!*\
  !*** ./demo/app/samples/adapter/reload.component.ts ***!
  \******************************************************/
/*! exports provided: DemoReloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoReloadComponent", function() { return DemoReloadComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public_api */ "./public_api.ts");

 // from 'ngx-ui-scroll';
var DemoReloadComponent = /** @class */ (function () {
    function DemoReloadComponent() {
        this.demoContext = {
            scope: 'adapter',
            title: "Reload",
            titleId: "reload",
            viewportId: "reload-viewport",
            count: 0,
            log: ''
        };
        this.datasource = new _public_api__WEBPACK_IMPORTED_MODULE_1__["Datasource"]({
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackInfinite"])(this.demoContext)
        });
        this.sources = {
            datasource: "datasource = new Datasource ({\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  }\n});\n\nreloadIndex: number = 1;\n\ndoReload() {\n  this.datasource.adapter.reload(this.reloadIndex);\n}",
            template: "<button (click)=\"doReload()\">Reload</button>\n<input [(ngModel)]=\"reloadIndex\">\n\n<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
        this.reloadIndex = 1;
    }
    DemoReloadComponent.prototype.onInputChanged = function (target) {
        var value = parseInt(target.value, 10);
        if (isNaN(value)) {
            value = 1;
        }
        target.value = value.toString();
        this.reloadIndex = value;
    };
    DemoReloadComponent.prototype.doReload = function () {
        this.demoContext.count = 0;
        this.demoContext.log = '';
        this.datasource.adapter.reload(this.reloadIndex);
    };
    return DemoReloadComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./demo/app/samples/common.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_CommonComponent, View_CommonComponent_0, View_CommonComponent_Host_0, CommonComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CommonComponent", function() { return RenderType_CommonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CommonComponent_0", function() { return View_CommonComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CommonComponent_Host_0", function() { return View_CommonComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentNgFactory", function() { return CommonComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_basic_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/basic.component.ngfactory */ "./demo/app/samples/common/basic.component.ngfactory.js");
/* harmony import */ var _common_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/basic.component */ "./demo/app/samples/common/basic.component.ts");
/* harmony import */ var _common_buffer_size_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/buffer-size.component.ngfactory */ "./demo/app/samples/common/buffer-size.component.ngfactory.js");
/* harmony import */ var _common_buffer_size_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/buffer-size.component */ "./demo/app/samples/common/buffer-size.component.ts");
/* harmony import */ var _common_padding_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/padding.component.ngfactory */ "./demo/app/samples/common/padding.component.ngfactory.js");
/* harmony import */ var _common_padding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/padding.component */ "./demo/app/samples/common/padding.component.ts");
/* harmony import */ var _common_start_index_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/start-index.component.ngfactory */ "./demo/app/samples/common/start-index.component.ngfactory.js");
/* harmony import */ var _common_start_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/start-index.component */ "./demo/app/samples/common/start-index.component.ts");
/* harmony import */ var _common_infinite_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/infinite.component.ngfactory */ "./demo/app/samples/common/infinite.component.ngfactory.js");
/* harmony import */ var _common_infinite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/infinite.component */ "./demo/app/samples/common/infinite.component.ts");
/* harmony import */ var _common_horizontal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/horizontal.component.ngfactory */ "./demo/app/samples/common/horizontal.component.ngfactory.js");
/* harmony import */ var _common_horizontal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/horizontal.component */ "./demo/app/samples/common/horizontal.component.ts");
/* harmony import */ var _common_different_heights_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/different-heights.component.ngfactory */ "./demo/app/samples/common/different-heights.component.ngfactory.js");
/* harmony import */ var _common_different_heights_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/different-heights.component */ "./demo/app/samples/common/different-heights.component.ts");
/* harmony import */ var _common_window_viewport_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/window-viewport.component.ngfactory */ "./demo/app/samples/common/window-viewport.component.ngfactory.js");
/* harmony import */ var _common_window_viewport_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/window-viewport.component */ "./demo/app/samples/common/window-viewport.component.ts");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common.component */ "./demo/app/samples/common.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_CommonComponent = [];
var RenderType_CommonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CommonComponent, data: {} });

function View_CommonComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-basic", [], null, null, null, _common_basic_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoBasicComponent_0"], _common_basic_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoBasicComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _common_basic_component__WEBPACK_IMPORTED_MODULE_2__["DemoBasicComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "app-demo-buffer-size", [], null, null, null, _common_buffer_size_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoBufferSizeComponent_0"], _common_buffer_size_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoBufferSizeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _common_buffer_size_component__WEBPACK_IMPORTED_MODULE_4__["DemoBufferSizeComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "app-demo-padding", [], null, null, null, _common_padding_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_DemoPaddingComponent_0"], _common_padding_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_DemoPaddingComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _common_padding_component__WEBPACK_IMPORTED_MODULE_6__["DemoPaddingComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "app-demo-start-index", [], null, null, null, _common_start_index_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_DemoStartIndexComponent_0"], _common_start_index_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_DemoStartIndexComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _common_start_index_component__WEBPACK_IMPORTED_MODULE_8__["DemoStartIndexComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "app-demo-infinite", [], null, null, null, _common_infinite_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DemoInfiniteComponent_0"], _common_infinite_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DemoInfiniteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 49152, null, 0, _common_infinite_component__WEBPACK_IMPORTED_MODULE_10__["DemoInfiniteComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "app-demo-horizontal", [], null, null, null, _common_horizontal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DemoHorizontalComponent_0"], _common_horizontal_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DemoHorizontalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 49152, null, 0, _common_horizontal_component__WEBPACK_IMPORTED_MODULE_12__["DemoHorizontalComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "app-demo-different-heights", [], null, null, null, _common_different_heights_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_DemoDifferentHeightsComponent_0"], _common_different_heights_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_DemoDifferentHeightsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 49152, null, 0, _common_different_heights_component__WEBPACK_IMPORTED_MODULE_14__["DemoDifferentHeightsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "app-demo-window-viewport", [], null, null, null, _common_window_viewport_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DemoWindowViewportComponent_0"], _common_window_viewport_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DemoWindowViewportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 49152, null, 0, _common_window_viewport_component__WEBPACK_IMPORTED_MODULE_16__["DemoWindowViewportComponent"], [], null, null)], null, null); }
function View_CommonComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-samples-common", [], null, null, null, View_CommonComponent_0, RenderType_CommonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _common_component__WEBPACK_IMPORTED_MODULE_17__["CommonComponent"], [], null, null)], null, null); }
var CommonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-samples-common", _common_component__WEBPACK_IMPORTED_MODULE_17__["CommonComponent"], View_CommonComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common.component.ts":
/*!**********************************************!*\
  !*** ./demo/app/samples/common.component.ts ***!
  \**********************************************/
/*! exports provided: CommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return CommonComponent; });
var CommonComponent = /** @class */ (function () {
    function CommonComponent() {
    }
    return CommonComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/basic.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./demo/app/samples/common/basic.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_DemoBasicComponent, View_DemoBasicComponent_0, View_DemoBasicComponent_Host_0, DemoBasicComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoBasicComponent", function() { return RenderType_DemoBasicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoBasicComponent_0", function() { return View_DemoBasicComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoBasicComponent_Host_0", function() { return View_DemoBasicComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBasicComponentNgFactory", function() { return DemoBasicComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic.component */ "./demo/app/samples/common/basic.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoBasicComponent = [];
var RenderType_DemoBasicComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoBasicComponent, data: {} });

function View_DemoBasicComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 38, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 1, 36, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 25, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" As it follows from the documentation, a special "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" object needs to be passed to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["*uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" directive. The basic ngx-ui-scroll example includes primitive callback-based "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource.get"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" method implementation with no additional settings. The use of the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["*uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" directive at the template layer is very similar to the use of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["*ngFor"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" directive in the simplest case. In addition to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [", a special viewport container is specified at the template. It defines the scrollable area via "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["height"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" and "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["overflow"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" css properties. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 9, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource.get"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" log shows us that there are 4 requests of 5 items on the initial load (before scrolling). So we have 20 DOM elements (4 * 5) initially. The number of DOM elements is not constant during user scrolling, but it fluctuates around the initial value. Why do we get 5 items per each "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["datasource.get"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" call? It is so because of default. We may change it via settings object and "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["bufferSize"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" property. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_DemoBasicComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-basic", [], null, null, null, View_DemoBasicComponent_0, RenderType_DemoBasicComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _basic_component__WEBPACK_IMPORTED_MODULE_3__["DemoBasicComponent"], [], null, null)], null, null); }
var DemoBasicComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-basic", _basic_component__WEBPACK_IMPORTED_MODULE_3__["DemoBasicComponent"], View_DemoBasicComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common/basic.component.ts":
/*!****************************************************!*\
  !*** ./demo/app/samples/common/basic.component.ts ***!
  \****************************************************/
/*! exports provided: DemoBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBasicComponent", function() { return DemoBasicComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");

var DemoBasicComponent = /** @class */ (function () {
    function DemoBasicComponent() {
        this.demoContext = {
            title: "Unlimited bidirectional scrolling",
            titleId: "unlimited-bidirectional-scrolling",
            viewportId: "basic-viewport",
            count: 0,
            log: ''
        };
        this.datasource = {
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackInfinite"])(this.demoContext)
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  }\n}",
            template: "<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    return DemoBasicComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/buffer-size.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./demo/app/samples/common/buffer-size.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_DemoBufferSizeComponent, View_DemoBufferSizeComponent_0, View_DemoBufferSizeComponent_Host_0, DemoBufferSizeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoBufferSizeComponent", function() { return RenderType_DemoBufferSizeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoBufferSizeComponent_0", function() { return View_DemoBufferSizeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoBufferSizeComponent_Host_0", function() { return View_DemoBufferSizeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBufferSizeComponentNgFactory", function() { return DemoBufferSizeComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _buffer_size_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffer-size.component */ "./demo/app/samples/common/buffer-size.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoBufferSizeComponent = [];
var RenderType_DemoBufferSizeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoBufferSizeComponent, data: {} });

function View_DemoBufferSizeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 25, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 1, 23, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 22, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" In addition to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["get"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" method, "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" object can be declared on the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". Here we set "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["bufferSize"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" property which defines number of items requested from the datasource in a single request. Now the initial load consist of 2 requests (from 1 to 15 and from -14 to 0). The bigger the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["bufferSize"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" is, the less requests are needed to fill out the viewport. The default value of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["bufferSize"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" property is 5. The minimum value is 1. Another setting which has an impact on the viewport's filling procedure is "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["padding"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_DemoBufferSizeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-buffer-size", [], null, null, null, View_DemoBufferSizeComponent_0, RenderType_DemoBufferSizeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _buffer_size_component__WEBPACK_IMPORTED_MODULE_3__["DemoBufferSizeComponent"], [], null, null)], null, null); }
var DemoBufferSizeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-buffer-size", _buffer_size_component__WEBPACK_IMPORTED_MODULE_3__["DemoBufferSizeComponent"], View_DemoBufferSizeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common/buffer-size.component.ts":
/*!**********************************************************!*\
  !*** ./demo/app/samples/common/buffer-size.component.ts ***!
  \**********************************************************/
/*! exports provided: DemoBufferSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBufferSizeComponent", function() { return DemoBufferSizeComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");

var DemoBufferSizeComponent = /** @class */ (function () {
    function DemoBufferSizeComponent() {
        this.demoContext = {
            title: "bufferSize setting",
            titleId: "buffer-size-setting",
            viewportId: "buffer-size-viewport",
            count: 0,
            log: ''
        };
        this.datasource = {
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackInfinite"])(this.demoContext),
            settings: {
                bufferSize: 15
            }
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  },\n  settings: {\n    bufferSize: 15\n  }\n}",
            template: "<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    return DemoBufferSizeComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/different-heights.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./demo/app/samples/common/different-heights.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_DemoDifferentHeightsComponent, View_DemoDifferentHeightsComponent_0, View_DemoDifferentHeightsComponent_Host_0, DemoDifferentHeightsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoDifferentHeightsComponent", function() { return RenderType_DemoDifferentHeightsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoDifferentHeightsComponent_0", function() { return View_DemoDifferentHeightsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoDifferentHeightsComponent_Host_0", function() { return View_DemoDifferentHeightsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDifferentHeightsComponentNgFactory", function() { return DemoDifferentHeightsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _different_heights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./different-heights.component */ "./demo/app/samples/common/different-heights.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoDifferentHeightsComponent = [];
var RenderType_DemoDifferentHeightsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoDifferentHeightsComponent, data: {} });

function View_DemoDifferentHeightsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 1, 2, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Scroller works fine with different item heights. To make this sample more strict and to demonstrate the scrollbar parameters' consistency the limited datasource is being used. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_DemoDifferentHeightsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-different-heights", [], null, null, null, View_DemoDifferentHeightsComponent_0, RenderType_DemoDifferentHeightsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _different_heights_component__WEBPACK_IMPORTED_MODULE_3__["DemoDifferentHeightsComponent"], [], null, null)], null, null); }
var DemoDifferentHeightsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-different-heights", _different_heights_component__WEBPACK_IMPORTED_MODULE_3__["DemoDifferentHeightsComponent"], View_DemoDifferentHeightsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common/different-heights.component.ts":
/*!****************************************************************!*\
  !*** ./demo/app/samples/common/different-heights.component.ts ***!
  \****************************************************************/
/*! exports provided: DemoDifferentHeightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDifferentHeightsComponent", function() { return DemoDifferentHeightsComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");

var DemoDifferentHeightsComponent = /** @class */ (function () {
    function DemoDifferentHeightsComponent() {
        this.demoContext = {
            title: "Different item heights",
            titleId: "different-item-heights",
            viewportId: "different-heights-viewport",
            count: 0,
            log: ''
        };
        this.datasource = {
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackLimited"])(this.demoContext, 1, 75)
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const MIN = 1, MAX = 75;\n    const data = [];\n    const start = Math.max(MIN, index);\n    const end = Math.min(index + count - 1, MAX);\n    if (start <= end) {\n      for (let i = start; i <= end; i++) {\n        data.push({ id: i, text: 'item #' + i, height: 20 + i });\n      }\n    }\n    success(data);\n  }\n}",
            template: "<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n     <div class=\"item\" [style.height]=\"item.height + 'px'\">\n      {{item.text}}\n     </div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    return DemoDifferentHeightsComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/horizontal.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./demo/app/samples/common/horizontal.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_DemoHorizontalComponent, View_DemoHorizontalComponent_0, View_DemoHorizontalComponent_Host_0, DemoHorizontalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoHorizontalComponent", function() { return RenderType_DemoHorizontalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoHorizontalComponent_0", function() { return View_DemoHorizontalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoHorizontalComponent_Host_0", function() { return View_DemoHorizontalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoHorizontalComponentNgFactory", function() { return DemoHorizontalComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal.component */ "./demo/app/samples/common/horizontal.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoHorizontalComponent = [];
var RenderType_DemoHorizontalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoHorizontalComponent, data: {} });

function View_DemoHorizontalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 1, 8, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Horizontal scrolling could be enabled via "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["horizontal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" setting. The styles also need to be fixed in accordance with horizontal scrolling. Currently we have some limitations at the template layer but "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["display: inline-block;"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" rule applied to all nested containers makes the horizontal mode work. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_DemoHorizontalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-horizontal", [], null, null, null, View_DemoHorizontalComponent_0, RenderType_DemoHorizontalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _horizontal_component__WEBPACK_IMPORTED_MODULE_3__["DemoHorizontalComponent"], [], null, null)], null, null); }
var DemoHorizontalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-horizontal", _horizontal_component__WEBPACK_IMPORTED_MODULE_3__["DemoHorizontalComponent"], View_DemoHorizontalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common/horizontal.component.ts":
/*!*********************************************************!*\
  !*** ./demo/app/samples/common/horizontal.component.ts ***!
  \*********************************************************/
/*! exports provided: DemoHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoHorizontalComponent", function() { return DemoHorizontalComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");

var DemoHorizontalComponent = /** @class */ (function () {
    function DemoHorizontalComponent() {
        this.demoContext = {
            title: "Horizontal mode",
            titleId: "horizontal-mode",
            viewportId: "horizontal-viewport",
            addClass: "horizontal",
            count: 0,
            log: ''
        };
        this.datasource = {
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackInfinite"])(this.demoContext),
            settings: {
                horizontal: true
            }
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  },\n  settings: {\n    horizontal: true\n  }\n}",
            template: "<div class=\"viewport horizontal\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item horizontal\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport.horizontal {\n  width: 175px;\n  height: 100px;\n  overflow-anchor: none;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.viewport.horizontal div {\n  display: inline-block;\n}\n.item.horizontal {\n  border: 1px solid #aaa;\n  height: 100px;\n  padding: 0 5px;\n  font-weight: bolder;\n}"
        };
    }
    return DemoHorizontalComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/infinite.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./demo/app/samples/common/infinite.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_DemoInfiniteComponent, View_DemoInfiniteComponent_0, View_DemoInfiniteComponent_Host_0, DemoInfiniteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoInfiniteComponent", function() { return RenderType_DemoInfiniteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoInfiniteComponent_0", function() { return View_DemoInfiniteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoInfiniteComponent_Host_0", function() { return View_DemoInfiniteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoInfiniteComponentNgFactory", function() { return DemoInfiniteComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _infinite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infinite.component */ "./demo/app/samples/common/infinite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoInfiniteComponent = [];
var RenderType_DemoInfiniteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoInfiniteComponent, data: {} });

function View_DemoInfiniteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 1, 14, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 13, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" might work in the \"infinite\" mode, when items are never removed. This mode can be turned on via "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["infinite"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" property of the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" object. Setting "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["infinite"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" to true, we ask the scroller not to remove items that are getting out of the viewport. That's why the DOM elements counter value is being increased per each edge-scroll event. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_DemoInfiniteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-infinite", [], null, null, null, View_DemoInfiniteComponent_0, RenderType_DemoInfiniteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _infinite_component__WEBPACK_IMPORTED_MODULE_3__["DemoInfiniteComponent"], [], null, null)], null, null); }
var DemoInfiniteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-infinite", _infinite_component__WEBPACK_IMPORTED_MODULE_3__["DemoInfiniteComponent"], View_DemoInfiniteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common/infinite.component.ts":
/*!*******************************************************!*\
  !*** ./demo/app/samples/common/infinite.component.ts ***!
  \*******************************************************/
/*! exports provided: DemoInfiniteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoInfiniteComponent", function() { return DemoInfiniteComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");

var DemoInfiniteComponent = /** @class */ (function () {
    function DemoInfiniteComponent() {
        this.demoContext = {
            title: "Infinite mode",
            titleId: "infinite-mode",
            viewportId: "infinite-viewport",
            count: 0,
            log: ''
        };
        this.datasource = {
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackInfinite"])(this.demoContext),
            settings: {
                infinite: true
            }
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  },\n  settings: {\n    infinite: true\n  }\n}",
            template: "<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    return DemoInfiniteComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/padding.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./demo/app/samples/common/padding.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_DemoPaddingComponent, View_DemoPaddingComponent_0, View_DemoPaddingComponent_Host_0, DemoPaddingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoPaddingComponent", function() { return RenderType_DemoPaddingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoPaddingComponent_0", function() { return View_DemoPaddingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoPaddingComponent_Host_0", function() { return View_DemoPaddingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPaddingComponentNgFactory", function() { return DemoPaddingComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _padding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./padding.component */ "./demo/app/samples/common/padding.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoPaddingComponent = [];
var RenderType_DemoPaddingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoPaddingComponent, data: {} });

function View_DemoPaddingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 40, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 1, 38, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 16, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Here the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource.get"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" is taken from previous samples, but the settings object is completed with "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["padding"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" property. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Padding"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" is an extra space added to the visible part of the viewport for the purpose of determining when the items should be created/destroyed. The value is relative to the visible size of the viewport. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["1.4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" means that the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" would request new items until 140% of the viewport size (out of the visible part of the viewport) is filled with rendered items. That's why we have 5 requests on the initial load in this case. There are 3 downward requests: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 6, "ol", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["175px + 1.4 * 175px = 420px (downward space which has to be filled, when viewport's height = 175px )"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ceil(420px / 25px) = 17 (items that are needed to feel 420px of the downward space, when item's height = 25px ) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ceil(17 / 7) = 3 (datasource.get calls that are needed to request 17 items, when bufferSize = 7)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" And 2 upward requests: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 6, "ol", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["1.4 * 175px = 245px (upward space which have to be filled)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ceil(245px / 25px) = 10 (items that are needed to feel 245px of the upward space)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ceil(10 / 7) = 2 (datasource.get calls that are needed to request 10 items)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The default value of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["padding"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" property is 0.5. The minimum value is 0.1. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_DemoPaddingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-padding", [], null, null, null, View_DemoPaddingComponent_0, RenderType_DemoPaddingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _padding_component__WEBPACK_IMPORTED_MODULE_3__["DemoPaddingComponent"], [], null, null)], null, null); }
var DemoPaddingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-padding", _padding_component__WEBPACK_IMPORTED_MODULE_3__["DemoPaddingComponent"], View_DemoPaddingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common/padding.component.ts":
/*!******************************************************!*\
  !*** ./demo/app/samples/common/padding.component.ts ***!
  \******************************************************/
/*! exports provided: DemoPaddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPaddingComponent", function() { return DemoPaddingComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");

var DemoPaddingComponent = /** @class */ (function () {
    function DemoPaddingComponent() {
        this.demoContext = {
            title: "padding setting",
            titleId: "padding-setting",
            viewportId: "padding-viewport",
            count: 0,
            log: ''
        };
        this.datasource = {
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackInfinite"])(this.demoContext),
            settings: {
                bufferSize: 7,
                padding: 1.5
            }
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  },\n  settings: {\n    bufferSize: 7,\n    padding: 1.4\n  }\n}",
            template: "<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    return DemoPaddingComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/start-index.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./demo/app/samples/common/start-index.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_DemoStartIndexComponent, View_DemoStartIndexComponent_0, View_DemoStartIndexComponent_Host_0, DemoStartIndexComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoStartIndexComponent", function() { return RenderType_DemoStartIndexComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoStartIndexComponent_0", function() { return View_DemoStartIndexComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoStartIndexComponent_Host_0", function() { return View_DemoStartIndexComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoStartIndexComponentNgFactory", function() { return DemoStartIndexComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _start_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-index.component */ "./demo/app/samples/common/start-index.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoStartIndexComponent = [];
var RenderType_DemoStartIndexComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoStartIndexComponent, data: {} });

function View_DemoStartIndexComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { datasource: [0, "datasource"], context: [1, "context"], sources: [2, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 1, 14, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 13, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" What if I want to start the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["uiScroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" from some specific position? It is possible via "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["startIndex"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" setting which defines what item index the scroller will use to start the load process. The value has to be an integer. It has no range limitations, but it must exist within the datasource boundaries in case the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datasource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" is limited. The default value of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["startIndex"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" setting is 1. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; var currVal_1 = _co.demoContext; var currVal_2 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_DemoStartIndexComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-start-index", [], null, null, null, View_DemoStartIndexComponent_0, RenderType_DemoStartIndexComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _start_index_component__WEBPACK_IMPORTED_MODULE_3__["DemoStartIndexComponent"], [], null, null)], null, null); }
var DemoStartIndexComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-start-index", _start_index_component__WEBPACK_IMPORTED_MODULE_3__["DemoStartIndexComponent"], View_DemoStartIndexComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common/start-index.component.ts":
/*!**********************************************************!*\
  !*** ./demo/app/samples/common/start-index.component.ts ***!
  \**********************************************************/
/*! exports provided: DemoStartIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoStartIndexComponent", function() { return DemoStartIndexComponent; });
/* harmony import */ var _shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/datasource-get */ "./demo/app/shared/datasource-get.ts");

var DemoStartIndexComponent = /** @class */ (function () {
    function DemoStartIndexComponent() {
        this.demoContext = {
            title: "startIndex setting",
            titleId: "start-index-setting",
            viewportId: "start-index-viewport",
            count: 0,
            log: ''
        };
        this.datasource = {
            get: Object(_shared_datasource_get__WEBPACK_IMPORTED_MODULE_0__["datasourceGetCallbackInfinite"])(this.demoContext),
            settings: {
                startIndex: 137
            }
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  },\n  settings: {\n    startIndex: 137\n  }\n}",
            template: "<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    return DemoStartIndexComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/window-viewport.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./demo/app/samples/common/window-viewport.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_DemoWindowViewportComponent, View_DemoWindowViewportComponent_0, View_DemoWindowViewportComponent_Host_0, DemoWindowViewportComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoWindowViewportComponent", function() { return RenderType_DemoWindowViewportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoWindowViewportComponent_0", function() { return View_DemoWindowViewportComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoWindowViewportComponent_Host_0", function() { return View_DemoWindowViewportComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoWindowViewportComponentNgFactory", function() { return DemoWindowViewportComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/demo.component.ngfactory */ "./demo/app/shared/demo.component.ngfactory.js");
/* harmony import */ var _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/demo.component */ "./demo/app/shared/demo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _window_viewport_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./window-viewport.component */ "./demo/app/samples/common/window-viewport.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_DemoWindowViewportComponent = [];
var RenderType_DemoWindowViewportComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoWindowViewportComponent, data: {} });

function View_DemoWindowViewportComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "app-demo", [], null, null, null, _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DemoComponent_0"], _shared_demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DemoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_demo_component__WEBPACK_IMPORTED_MODULE_2__["DemoComponent"], [], { context: [0, "context"], sources: [1, "sources"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 5, "div", [["actions", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Follow "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "a", [["routerLink", "/window"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["this link"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" to open the Entire Window scrollable demo. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 1, 5, "div", [["description", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The entire window might work as a Viewport if "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["windowViewport"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" setting is set to true. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.demoContext; var currVal_1 = _co.sources; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = "/window"; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).href; _ck(_v, 4, 0, currVal_2, currVal_3); }); }
function View_DemoWindowViewportComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo-window-viewport", [], null, null, null, View_DemoWindowViewportComponent_0, RenderType_DemoWindowViewportComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _window_viewport_component__WEBPACK_IMPORTED_MODULE_5__["DemoWindowViewportComponent"], [], null, null)], null, null); }
var DemoWindowViewportComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo-window-viewport", _window_viewport_component__WEBPACK_IMPORTED_MODULE_5__["DemoWindowViewportComponent"], View_DemoWindowViewportComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/common/window-viewport.component.ts":
/*!**************************************************************!*\
  !*** ./demo/app/samples/common/window-viewport.component.ts ***!
  \**************************************************************/
/*! exports provided: DemoWindowViewportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoWindowViewportComponent", function() { return DemoWindowViewportComponent; });
var DemoWindowViewportComponent = /** @class */ (function () {
    function DemoWindowViewportComponent() {
        this.demoContext = {
            title: "Entire window scrollable",
            titleId: "window-viewport-setting",
            viewportId: "window-viewport-viewport",
            noWorkView: true,
            count: 0,
            log: ''
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  },\n  settings: {\n    windowViewport: true\n  }\n}",
            template: "<div *uiScroll=\"let item of datasource\">\n  <div class=\"item\">{{item.text}}</div>\n</div>",
            styles: ".item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    return DemoWindowViewportComponent;
}());



/***/ }),

/***/ "./demo/app/samples/test.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./demo/app/samples/test.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_TestInnerComponent, View_TestInnerComponent_0, View_TestInnerComponent_Host_0, TestInnerComponentNgFactory, RenderType_TestComponent, View_TestComponent_0, View_TestComponent_Host_0, TestComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TestInnerComponent", function() { return RenderType_TestInnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TestInnerComponent_0", function() { return View_TestInnerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TestInnerComponent_Host_0", function() { return View_TestInnerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestInnerComponentNgFactory", function() { return TestInnerComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TestComponent", function() { return RenderType_TestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TestComponent_0", function() { return View_TestComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TestComponent_Host_0", function() { return View_TestComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentNgFactory", function() { return TestComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.component */ "./demo/app/samples/test.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_ui_scroll_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/ui-scroll.directive */ "./src/ui-scroll.directive.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_TestInnerComponent = [];
var RenderType_TestInnerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TestInnerComponent, data: {} });

function View_TestInnerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_TestInnerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-samples-test-inner", [], null, null, null, View_TestInnerComponent_0, RenderType_TestInnerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _test_component__WEBPACK_IMPORTED_MODULE_1__["TestInnerComponent"], [], null, null)], null, null); }
var TestInnerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-samples-test-inner", _test_component__WEBPACK_IMPORTED_MODULE_1__["TestInnerComponent"], View_TestInnerComponent_Host_0, {}, {}, ["*"]);

var styles_TestComponent = [];
var RenderType_TestComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TestComponent, data: {} });

function View_TestComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "app-samples-test-inner", [], null, null, null, View_TestInnerComponent_0, RenderType_TestInnerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _test_component__WEBPACK_IMPORTED_MODULE_1__["TestInnerComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, 0, [" ", " ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.text; var currVal_1 = (((_v.context.$implicit.id % 10) === 0) ? "**********" : ""); _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_TestComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 28, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "input", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.reloadIndex = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.doReload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Reload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](11, null, ["ngx-ui-scroll version: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, ["isLoading: ", " (", ") "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](18, null, ["first visible: ", " (", ") "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](22, null, ["last visible: ", " (", ") "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, null, ["total: ", ", visible: ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "div", [["class", "viewport"], ["style", "height: 600px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TestComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 81920, null, 0, _src_ui_scroll_directive__WEBPACK_IMPORTED_MODULE_4__["UiScrollDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], { uiScrollOf: [0, "uiScrollOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.reloadIndex; _ck(_v, 4, 0, currVal_7); var currVal_17 = _co.datasource; _ck(_v, 31, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _co.datasource.adapter.version; _ck(_v, 11, 0, currVal_8); var currVal_9 = _co.datasource.adapter.isLoading; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 14, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).transform(_co.datasource.adapter.isLoading$)); _ck(_v, 14, 0, currVal_9, currVal_10); var currVal_11 = _co.datasource.adapter.firstVisible.$index; var tmp_12_0 = null; var currVal_12 = (((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 18, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).transform(_co.datasource.adapter.firstVisible$))) == null) ? null : tmp_12_0.$index); _ck(_v, 18, 0, currVal_11, currVal_12); var currVal_13 = _co.datasource.adapter.lastVisible.$index; var tmp_14_0 = null; var currVal_14 = (((tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 22, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).transform(_co.datasource.adapter.lastVisible$))) == null) ? null : tmp_14_0.$index); _ck(_v, 22, 0, currVal_13, currVal_14); var currVal_15 = _co.datasource.adapter.itemsCount; var currVal_16 = _co.getVisibleItemsCount(); _ck(_v, 26, 0, currVal_15, currVal_16); }); }
function View_TestComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-samples-test", [], null, null, null, View_TestComponent_0, RenderType_TestComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _test_component__WEBPACK_IMPORTED_MODULE_1__["TestComponent"], [], null, null)], null, null); }
var TestComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-samples-test", _test_component__WEBPACK_IMPORTED_MODULE_1__["TestComponent"], View_TestComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/test.component.ts":
/*!********************************************!*\
  !*** ./demo/app/samples/test.component.ts ***!
  \********************************************/
/*! exports provided: TestInnerComponent, TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestInnerComponent", function() { return TestInnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public_api */ "./public_api.ts");

 // from 'ngx-ui-scroll';
var MAX = 500;
var MIN = -1000;
var TestInnerComponent = /** @class */ (function () {
    function TestInnerComponent() {
    }
    return TestInnerComponent;
}());

var TestComponent = /** @class */ (function () {
    function TestComponent() {
        var _this = this;
        this.reloadIndex = 1;
        this.datasource = new _public_api__WEBPACK_IMPORTED_MODULE_1__["Datasource"]({
            get: function (index, count) {
                return _this.fetchData(index, count);
            },
            settings: {
                bufferSize: 20
            },
            devSettings: {
                debug: true
            }
        });
        this.data = [];
        for (var i = 0; i <= MAX - MIN; i++) {
            this.data.push({
                id: i + MIN,
                text: 'item #' + (i + MIN)
            });
        }
        this.datasource.adapter.firstVisible$
            .subscribe(function (value) {
            console.log('..............................first visible item:', value);
        });
    }
    TestComponent.prototype.getVisibleItemsCount = function () {
        var adapter = this.datasource.adapter;
        var last = (adapter.lastVisible && adapter.lastVisible.$index) || NaN;
        var first = (adapter.firstVisible && adapter.firstVisible.$index) || NaN;
        return (Number.isNaN(last) || Number.isNaN(first)) ? 0 : last - first + 1;
    };
    TestComponent.prototype.doReload = function () {
        this.datasource.adapter.reload(this.reloadIndex);
    };
    TestComponent.prototype.fetchData = function (index, count) {
        var data = [];
        var start = Math.max(MIN, index);
        var end = Math.min(MAX, index + count - 1);
        if (start <= end) {
            for (var i = start; i <= end; i++) {
                data.push(this.data[i - MIN]);
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            // setTimeout(() => observer.next(data), 500);
            observer.next(data);
        });
    };
    return TestComponent;
}());



/***/ }),

/***/ "./demo/app/samples/window.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./demo/app/samples/window.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_WindowComponent, View_WindowComponent_0, View_WindowComponent_Host_0, WindowComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WindowComponent", function() { return RenderType_WindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WindowComponent_0", function() { return View_WindowComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WindowComponent_Host_0", function() { return View_WindowComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowComponentNgFactory", function() { return WindowComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_ui_scroll_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/ui-scroll.directive */ "./src/ui-scroll.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window.component */ "./demo/app/samples/window.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_WindowComponent = [];
var RenderType_WindowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_WindowComponent, data: {} });

function View_WindowComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.text; _ck(_v, 2, 0, currVal_0); }); }
function View_WindowComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_WindowComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 81920, null, 0, _src_ui_scroll_directive__WEBPACK_IMPORTED_MODULE_1__["UiScrollDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], { uiScrollOf: [0, "uiScrollOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.datasource; _ck(_v, 2, 0, currVal_0); }, null); }
function View_WindowComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Entire window scrolling demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "a", [["class", "navbar-link"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_WindowComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/"; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.init; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_WindowComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-samples-window", [], null, null, null, View_WindowComponent_0, RenderType_WindowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _window_component__WEBPACK_IMPORTED_MODULE_4__["WindowComponent"], [], null, null)], null, null); }
var WindowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-samples-window", _window_component__WEBPACK_IMPORTED_MODULE_4__["WindowComponent"], View_WindowComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/samples/window.component.ts":
/*!**********************************************!*\
  !*** ./demo/app/samples/window.component.ts ***!
  \**********************************************/
/*! exports provided: WindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowComponent", function() { return WindowComponent; });
var WindowComponent = /** @class */ (function () {
    function WindowComponent() {
        var _this = this;
        this.datasource = {
            get: function (index, count, success) {
                var start = Math.max(index, 1);
                var end = start + count;
                var data = [];
                if (start < end) {
                    for (var i = start; i <= index + count - 1; i++) {
                        data.push({ id: i, text: 'item #' + i });
                    }
                }
                success(data);
            },
            settings: {
                bufferSize: 10,
                padding: 0.01,
                startIndex: 1,
                windowViewport: true
            }
        };
        setTimeout(function () { return _this.init = true; });
    }
    return WindowComponent;
}());



/***/ }),

/***/ "./demo/app/shared/datasource-get.ts":
/*!*******************************************!*\
  !*** ./demo/app/shared/datasource-get.ts ***!
  \*******************************************/
/*! exports provided: datasourceGetInfinite, datasourceGetLimited, datasourceGetObservableInfinite, datasourceGetPromiseInfinite, datasourceGetCallbackInfinite, datasourceGetCallbackLimited, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasourceGetInfinite", function() { return datasourceGetInfinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasourceGetLimited", function() { return datasourceGetLimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasourceGetObservableInfinite", function() { return datasourceGetObservableInfinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasourceGetPromiseInfinite", function() { return datasourceGetPromiseInfinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasourceGetCallbackInfinite", function() { return datasourceGetCallbackInfinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasourceGetCallbackLimited", function() { return datasourceGetCallbackLimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var delayedCall = function (result, callback, delay) {
    if (isNaN(Number(delay))) {
        callback(result);
    }
    else {
        setTimeout(function () { return callback(result); }, Number(delay));
    }
};
var ɵ0 = delayedCall;
var doLog = function (demoContext, index, count, resolved) {
    return demoContext.log =
        ++demoContext.count + ") got " + resolved + " items [" + index + ", " + (index + count - 1) + "]\n"
            + demoContext.log;
};
var ɵ1 = doLog;
var datasourceGetInfinite = function (demoContext, index, count) {
    var data = [];
    for (var i = index; i <= index + count - 1; i++) {
        data.push({ id: i, text: 'item #' + i });
    }
    doLog(demoContext, index, count, data.length);
    return data;
};
var datasourceGetLimited = function (demoContext, min, max, index, count) {
    min = isNaN(Number(min)) ? Number.NEGATIVE_INFINITY : Number(min);
    max = isNaN(Number(max)) ? Number.POSITIVE_INFINITY : Number(max);
    var data = [];
    var start = Math.max(min, index);
    var end = Math.min(index + count - 1, max);
    if (start <= end) {
        for (var i = start; i <= end; i++) {
            data.push({ id: i, text: 'item #' + i, height: 20 + i });
        }
    }
    doLog(demoContext, index, count, data.length);
    return data;
};
var datasourceGetObservableInfinite = function (demoContext) {
    return function (index, count) { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        return observer.next(datasourceGetInfinite(demoContext, index, count));
    }); };
};
var datasourceGetPromiseInfinite = function (demoContext) {
    return function (index, count) { return new Promise(function (success) {
        return success(datasourceGetInfinite(demoContext, index, count));
    }); };
};
var datasourceGetCallbackInfinite = function (demoContext, delay) {
    return function (index, count, success) {
        return delayedCall(datasourceGetInfinite(demoContext, index, count), success, delay);
    };
};
var datasourceGetCallbackLimited = function (demoContext, min, max, delay) {
    return function (index, count, success) {
        return delayedCall(datasourceGetLimited(demoContext, min, max, index, count), success, delay);
    };
};



/***/ }),

/***/ "./demo/app/shared/demo.component.ngfactory.js":
/*!*****************************************************!*\
  !*** ./demo/app/shared/demo.component.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: RenderType_DemoComponent, View_DemoComponent_0, View_DemoComponent_Host_0, DemoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoComponent", function() { return RenderType_DemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoComponent_0", function() { return View_DemoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoComponent_Host_0", function() { return View_DemoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponentNgFactory", function() { return DemoComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_ui_scroll_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/ui-scroll.directive */ "./src/ui-scroll.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_ngx_bootstrap_tabs_tabset_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap/tabs/tabset.component.ngfactory */ "./node_modules/ngx-bootstrap/tabs/tabset.component.ngfactory.js");
/* harmony import */ var ngx_bootstrap_tabs_tabset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs/tabset.component */ "./node_modules/ngx-bootstrap/tabs/tabset.component.js");
/* harmony import */ var ngx_bootstrap_tabs_tabset_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs/tabset.config */ "./node_modules/ngx-bootstrap/tabs/tabset.config.js");
/* harmony import */ var ngx_bootstrap_tabs_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs/tab.directive */ "./node_modules/ngx-bootstrap/tabs/tab.directive.js");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/shared/demo.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_DemoComponent = [];
var RenderType_DemoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoComponent, data: {} });

function View_DemoComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [], [[8, "className", 0], [4, "height", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "item ", (_co.context.addClass || ""), ""); var currVal_1 = ((_v.context.$implicit.height !== undefined) ? (_v.context.$implicit.height + "px") : null); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.text; _ck(_v, 2, 0, currVal_2); }); }
function View_DemoComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "div", [["class", "work"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["style", "float: left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "div", [], [[8, "className", 0], [8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DemoComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 81920, null, 0, _src_ui_scroll_directive__WEBPACK_IMPORTED_MODULE_1__["UiScrollDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], { uiScrollOf: [0, "uiScrollOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 3, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" DOM elements "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 3, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Datasource.get log "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "div", [["class", "clearfix mb-3"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.datasource; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "viewport ", (_co.context.addClass || ""), ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.context.viewportId, ""); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "log elements ", (_co.context.addClass || ""), ""); _ck(_v, 5, 0, currVal_3); var currVal_4 = _co.elements(_co.context.viewportId); _ck(_v, 8, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "log datasource ", (_co.context.addClass || ""), ""); _ck(_v, 9, 0, currVal_5); var currVal_6 = _co.context.log; _ck(_v, 12, 0, currVal_6); }); }
function View_DemoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 25, "div", [["class", "demo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "h3", [], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "actions"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DemoComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 14, "div", [["class", "sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 13, "tabset", [], [[2, "tab-container", null]], null, null, _node_modules_ngx_bootstrap_tabs_tabset_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TabsetComponent_0"], _node_modules_ngx_bootstrap_tabs_tabset_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 180224, null, 0, ngx_bootstrap_tabs_tabset_component__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], [ngx_bootstrap_tabs_tabset_config__WEBPACK_IMPORTED_MODULE_5__["TabsetConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, 0, 3, "tab", [["heading", "Component"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 212992, null, 0, ngx_bootstrap_tabs_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], [ngx_bootstrap_tabs_tabset_component__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "pre", [["class", "prettyprint"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, 0, 3, "tab", [["heading", "Template"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 212992, null, 0, ngx_bootstrap_tabs_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], [ngx_bootstrap_tabs_tabset_component__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "pre", [["class", "prettyprint lang-html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, 0, 3, "tab", [["heading", "CSS"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 212992, null, 0, ngx_bootstrap_tabs_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], [ngx_bootstrap_tabs_tabset_component__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "pre", [["class", "prettyprint"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](23, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], function (_ck, _v) { var _co = _v.component; var currVal_3 = !_co.context.noWorkView; _ck(_v, 8, 0, currVal_3); var currVal_8 = "Component"; _ck(_v, 13, 0, currVal_8); var currVal_13 = "Template"; _ck(_v, 17, 0, currVal_13); var currVal_18 = "CSS"; _ck(_v, 21, 0, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.context.titleId, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.context.title; _ck(_v, 2, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](2, "#/", _co.context.scope, "#", _co.context.titleId, ""); _ck(_v, 3, 0, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).clazz; _ck(_v, 10, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).id; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).active; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).addClass; _ck(_v, 12, 0, currVal_5, currVal_6, currVal_7); var currVal_9 = _co.sources.datasource; _ck(_v, 15, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).id; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).active; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).addClass; _ck(_v, 16, 0, currVal_10, currVal_11, currVal_12); var currVal_14 = _co.sources.template; _ck(_v, 19, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).id; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).active; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).addClass; _ck(_v, 20, 0, currVal_15, currVal_16, currVal_17); var currVal_19 = _co.sources.styles; _ck(_v, 23, 0, currVal_19); }); }
function View_DemoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-demo", [], null, null, null, View_DemoComponent_0, RenderType_DemoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"], [], null, null)], null, null); }
var DemoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-demo", _demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"], View_DemoComponent_Host_0, { datasource: "datasource", context: "context", sources: "sources" }, {}, ["[actions]", "[description]"]);



/***/ }),

/***/ "./demo/app/shared/demo.component.ts":
/*!*******************************************!*\
  !*** ./demo/app/shared/demo.component.ts ***!
  \*******************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public_api */ "./public_api.ts");
 // from 'ngx-ui-scroll';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.elements = function (token) {
        var element = document.getElementById(token);
        if (!element) {
            return '';
        }
        var count = element.children[0].childElementCount || 0;
        return (count - 2).toString(10);
    };
    return DemoComponent;
}());



/***/ }),

/***/ "./demo/app/shared/nav.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./demo/app/shared/nav.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_NavComponent, View_NavComponent_0, View_NavComponent_Host_0, NavComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NavComponent", function() { return RenderType_NavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavComponent_0", function() { return View_NavComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavComponent_Host_0", function() { return View_NavComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponentNgFactory", function() { return NavComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.component */ "./demo/app/shared/nav.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_NavComponent = [".github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n      animation: octocat-wave 560ms ease-in-out\n    }\n\n    @keyframes octocat-wave {\n      0%, 100% {\n        transform: rotate(0)\n      }\n      20%, 60% {\n        transform: rotate(-25deg)\n      }\n      40%, 80% {\n        transform: rotate(10deg)\n      }\n    }\n\n    @media (max-width: 500px) {\n      .github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n        animation: none\n      }\n\n      .github-corner[_ngcontent-%COMP%]   .octo-arm[_ngcontent-%COMP%] {\n        animation: octocat-wave 560ms ease-in-out\n      }\n    }"];
var RenderType_NavComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_NavComponent, data: {} });

function View_NavComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 23, "nav", [["class", "navbar navbar-expand-lg  navbar-dark bg-dark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 22, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "a", [["aria-label", "View source on Github"], ["class", "github-corner"], ["href", "https://github.com/dhilt/ngx-ui-scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, ":svg:svg", [["aria-hidden", "true"], ["height", "80"], ["style", "fill:#fff; color:#343a40; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);"], ["viewBox", "0 0 250 250"], ["width", "80"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, ":svg:path", [["d", "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, ":svg:path", [["class", "octo-arm"], ["d", "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"], ["fill", "currentColor"], ["style", "transform-origin: 130px 106px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, ":svg:path", [["class", "octo-body"], ["d", "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"], ["fill", "currentColor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 8, "div", [["class", "mr-auto ml-2 ml-lg-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "a", [["class", "navbar-brand"], ["href", "https://github.com/dhilt/ngx-ui-scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ngx-ui-scroll"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "a", [["class", "navbar-link"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Common"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "a", [["class", "navbar-link"], ["routerLink", "/adapter"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Adapter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 6, "span", [["class", "copyrights"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 2018 \u00A9 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "a", [["href", "https://github.com/dhilt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["dhilt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [", "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "a", [["href", "http://www.hill30.com/"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Hill30 Inc"]))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 11, 0, currVal_2); var currVal_5 = "/adapter"; _ck(_v, 14, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).href; _ck(_v, 10, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).href; _ck(_v, 13, 0, currVal_3, currVal_4); }); }
function View_NavComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-nav", [], null, null, null, View_NavComponent_0, RenderType_NavComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], [], null, null)], null, null); }
var NavComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-nav", _nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], View_NavComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./demo/app/shared/nav.component.ts":
/*!******************************************!*\
  !*** ./demo/app/shared/nav.component.ts ***!
  \******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    return NavComponent;
}());



/***/ }),

/***/ "./demo/environments/environment.ts":
/*!******************************************!*\
  !*** ./demo/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./demo/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./demo/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./public_api.ts":
/*!***********************!*\
  !*** ./public_api.ts ***!
  \***********************/
/*! exports provided: UiScrollModule, Datasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ui_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ui-scroll.module */ "./src/ui-scroll.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiScrollModule", function() { return _src_ui_scroll_module__WEBPACK_IMPORTED_MODULE_0__["UiScrollModule"]; });

/* harmony import */ var _src_component_classes_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/classes/datasource */ "./src/component/classes/datasource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return _src_component_classes_datasource__WEBPACK_IMPORTED_MODULE_1__["Datasource"]; });





/***/ }),

/***/ "./src/component/classes/adapter.ts":
/*!******************************************!*\
  !*** ./src/component/classes/adapter.ts ***!
  \******************************************/
/*! exports provided: generateMockAdapter, Adapter, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockAdapter", function() { return generateMockAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");



var getIsInitialized = function (adapter) {
    return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        var intervalId = setInterval(function () {
            if (adapter && adapter.init) {
                clearInterval(intervalId);
                observer.next(true);
                observer.complete();
            }
        }, 25);
    });
};
var ɵ0 = getIsInitialized;
var getInitializedSubject = function (adapter, method) {
    return adapter.init ? method() :
        adapter.init$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () {
            return method();
        }));
};
var ɵ1 = getInitializedSubject;
var generateMockAdapter = function () { return ({
    version: null,
    init: false,
    init$: Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false),
    isLoading: false,
    isLoading$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false),
    firstVisible: {},
    firstVisible$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({}),
    lastVisible: {},
    lastVisible$: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({}),
    itemsCount: 0,
    reload: function () { return null; }
}); };
var Adapter = /** @class */ (function () {
    function Adapter() {
        this.isInitialized = false;
    }
    Object.defineProperty(Adapter.prototype, "init", {
        get: function () {
            return this.isInitialized;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "init$", {
        get: function () {
            return getIsInitialized(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "version", {
        get: function () {
            return this.isInitialized ? this.getVersion() : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "isLoading", {
        get: function () {
            return this.isInitialized ? this.getIsLoading() : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "isLoading$", {
        get: function () {
            var _this = this;
            return getInitializedSubject(this, function () { return _this.getIsLoading$(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "firstVisible", {
        get: function () {
            return this.isInitialized ? this.getFirstVisible() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "firstVisible$", {
        get: function () {
            var _this = this;
            return getInitializedSubject(this, function () { return _this.getFirstVisible$(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "lastVisible", {
        get: function () {
            return this.isInitialized ? this.getLastVisible() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "lastVisible$", {
        get: function () {
            var _this = this;
            return getInitializedSubject(this, function () { return _this.getLastVisible$(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "itemsCount", {
        get: function () {
            return this.getItemsCount();
        },
        enumerable: true,
        configurable: true
    });
    Adapter.prototype.initialize = function (scroller) {
        if (!this.isInitialized) {
            this.isInitialized = true;
            this.callWorkflow = scroller.callWorkflow;
            this.getVersion = function () { return scroller.version; };
            this.getIsLoading = function () { return scroller.state.pendingSource.getValue(); };
            this.getIsLoading$ = function () { return scroller.state.pendingSource; };
            this.getFirstVisible = function () { return scroller.state.firstVisibleSource.getValue(); };
            this.getFirstVisible$ = function () { return scroller.state.firstVisibleSource; };
            this.getLastVisible = function () { return scroller.state.lastVisibleSource.getValue(); };
            this.getLastVisible$ = function () { return scroller.state.lastVisibleSource; };
            this.getItemsCount = function () {
                return scroller.buffer.items.reduce(function (acc, item) { return acc + (item.invisible ? 0 : 1); }, 0);
            };
        }
    };
    Adapter.prototype.reload = function (reloadIndex) {
        this.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_2__["Process"].reload,
            status: 'start',
            payload: reloadIndex
        });
    };
    return Adapter;
}());




/***/ }),

/***/ "./src/component/classes/buffer.ts":
/*!*****************************************!*\
  !*** ./src/component/classes/buffer.ts ***!
  \*****************************************/
/*! exports provided: Index, Buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return Buffer; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache */ "./src/component/classes/cache.ts");



var Index = /** @class */ (function () {
    function Index() {
        this.reset();
    }
    Index.prototype.reset = function () {
        this.backward = null;
        this.forward = null;
    };
    return Index;
}());

var Buffer = /** @class */ (function () {
    function Buffer() {
        this.$items = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.lastIndex = new Index();
        this.cache = new _cache__WEBPACK_IMPORTED_MODULE_2__["Cache"]();
        this.reset();
    }
    Buffer.prototype.reset = function (reload) {
        var _this = this;
        if (reload) {
            this.items.forEach(function (item) {
                if (item.element) {
                    _this.cache.add(item);
                    item.hide();
                }
            });
        }
        this.items = [];
        this.bof = false;
        this.eof = false;
        this.lastIndex.reset();
    };
    Object.defineProperty(Buffer.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            if (items.length) {
                this.setLastIndices();
            }
            this.$items.next(items);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Buffer.prototype, "size", {
        get: function () {
            return this._items.length;
        },
        enumerable: true,
        configurable: true
    });
    Buffer.prototype.setLastIndices = function () {
        this.lastIndex[_interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].backward] = this.items[0].$index;
        this.lastIndex[_interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].forward] = this.items[this.items.length - 1].$index;
    };
    Buffer.prototype.getFirstVisibleItemIndex = function () {
        var length = this.items.length;
        for (var i = 0; i < length; i++) {
            if (!this.items[i].invisible) {
                return i;
            }
        }
        return -1;
    };
    Buffer.prototype.getLastVisibleItemIndex = function () {
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (!this.items[i].invisible) {
                return i;
            }
        }
        return -1;
    };
    Buffer.prototype.getEdgeVisibleItemIndex = function (direction, opposite) {
        return direction === (!opposite ? _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].forward : _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].backward) ?
            this.getLastVisibleItemIndex() : this.getFirstVisibleItemIndex();
    };
    Buffer.prototype.getFirstVisibleItem = function () {
        var index = this.getFirstVisibleItemIndex();
        if (index >= 0) {
            return this.items[index];
        }
    };
    Buffer.prototype.getLastVisibleItem = function () {
        var index = this.getLastVisibleItemIndex();
        if (index >= 0) {
            return this.items[index];
        }
    };
    Buffer.prototype.getEdgeVisibleItem = function (direction, opposite) {
        return direction === (!opposite ? _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].forward : _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].backward) ?
            this.getLastVisibleItem() : this.getFirstVisibleItem();
    };
    return Buffer;
}());



/***/ }),

/***/ "./src/component/classes/cache.ts":
/*!****************************************!*\
  !*** ./src/component/classes/cache.ts ***!
  \****************************************/
/*! exports provided: ItemCache, Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCache", function() { return ItemCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
var ItemCache = /** @class */ (function () {
    function ItemCache(item) {
        this.$index = item.$index;
        this.nodeId = item.nodeId;
        this.data = item.data;
        this.params = item.getParams();
    }
    return ItemCache;
}());

var Cache = /** @class */ (function () {
    function Cache() {
        this.items = [];
    }
    Cache.prototype.add = function (item) {
        var found = this.items.find(function (i) { return i.$index === item.$index; });
        if (found) {
            found.data = item.data;
            found.params = item.getParams();
        }
        else {
            // todo: do we need the list to be sorted? maybe an object?
            this.items.push(new ItemCache(item));
        }
    };
    Cache.prototype.get = function (index) {
        return this.items.find(function (i) { return i.$index === index; });
    };
    return Cache;
}());



/***/ }),

/***/ "./src/component/classes/clip.ts":
/*!***************************************!*\
  !*** ./src/component/classes/clip.ts ***!
  \***************************************/
/*! exports provided: ClipByDirection, ClipModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipByDirection", function() { return ClipByDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipModel", function() { return ClipModel; });
var ClipByDirection = /** @class */ (function () {
    function ClipByDirection() {
        this.reset();
    }
    ClipByDirection.prototype.reset = function () {
        this.shouldClip = false;
        this.size = null;
        this.items = null;
    };
    return ClipByDirection;
}());

var ClipModel = /** @class */ (function () {
    function ClipModel() {
        this.forward = new ClipByDirection();
        this.backward = new ClipByDirection();
        this.reset();
    }
    ClipModel.prototype.reset = function () {
        this.backward.reset();
        this.forward.reset();
    };
    Object.defineProperty(ClipModel.prototype, "shouldClip", {
        get: function () {
            return this.forward.shouldClip || this.backward.shouldClip;
        },
        enumerable: true,
        configurable: true
    });
    return ClipModel;
}());



/***/ }),

/***/ "./src/component/classes/datasource.ts":
/*!*********************************************!*\
  !*** ./src/component/classes/datasource.ts ***!
  \*********************************************/
/*! exports provided: Datasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return Datasource; });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./src/component/classes/adapter.ts");

var Datasource = /** @class */ (function () {
    function Datasource(datasource, hasNoAdapter) {
        this.constructed = true;
        Object.assign(this, datasource);
        if (hasNoAdapter) {
            this.adapter = Object(_adapter__WEBPACK_IMPORTED_MODULE_0__["generateMockAdapter"])();
        }
        else {
            this.adapter = new _adapter__WEBPACK_IMPORTED_MODULE_0__["Adapter"]();
        }
    }
    return Datasource;
}());



/***/ }),

/***/ "./src/component/classes/domRoutines.ts":
/*!**********************************************!*\
  !*** ./src/component/classes/domRoutines.ts ***!
  \**********************************************/
/*! exports provided: Routines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routines", function() { return Routines; });
/* harmony import */ var _interfaces_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/direction */ "./src/component/interfaces/direction.ts");

var Routines = /** @class */ (function () {
    function Routines(settings) {
        this.horizontal = settings.horizontal;
    }
    Routines.prototype.getScrollPosition = function (element) {
        return element[this.horizontal ? 'scrollLeft' : 'scrollTop'];
    };
    Routines.prototype.setScrollPosition = function (element, value) {
        element[this.horizontal ? 'scrollLeft' : 'scrollTop'] = value;
    };
    Routines.prototype.getParams = function (element) {
        if (element.tagName.toLowerCase() === 'body') {
            element = element.parentElement;
            return {
                'height': element.clientHeight,
                'width': element.clientWidth,
                'top': element.clientTop,
                'bottom': element.clientTop + element.clientHeight,
                'left': element.clientLeft,
                'right': element.clientLeft + element.clientWidth
            };
        }
        return element.getBoundingClientRect();
    };
    Routines.prototype.getSize = function (element) {
        return this.getParams(element)[this.horizontal ? 'width' : 'height'];
    };
    Routines.prototype.getSizeStyle = function (element) {
        var size = element.style[this.horizontal ? 'width' : 'height'];
        return parseInt(size, 10) || 0;
    };
    Routines.prototype.setSizeStyle = function (element, value) {
        element.style[this.horizontal ? 'width' : 'height'] = value + "px";
    };
    Routines.prototype.getRectEdge = function (params, direction, opposite) {
        var forward = !opposite ? _interfaces_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward : _interfaces_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward;
        return params[direction === forward ? (this.horizontal ? 'right' : 'bottom') : (this.horizontal ? 'left' : 'top')];
    };
    Routines.prototype.getEdge = function (element, direction, opposite) {
        var params = this.getParams(element);
        return this.getRectEdge(params, direction, opposite);
    };
    Routines.prototype.getEdge2 = function (element, direction, relativeElement, opposite) {
        // vertical only ?
        return element.offsetTop - (relativeElement ? relativeElement.scrollTop : 0) +
            (direction === (!opposite ? _interfaces_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward : _interfaces_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward) ? this.getSize(element) : 0);
    };
    Routines.prototype.hideElement = function (element) {
        element.style.display = 'none';
    };
    return Routines;
}());



/***/ }),

/***/ "./src/component/classes/fetch.ts":
/*!****************************************!*\
  !*** ./src/component/classes/fetch.ts ***!
  \****************************************/
/*! exports provided: FetchByDirection, FetchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchByDirection", function() { return FetchByDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchModel", function() { return FetchModel; });
var FetchByDirection = /** @class */ (function () {
    function FetchByDirection() {
        this.count = 0;
        this.reset();
    }
    FetchByDirection.prototype.reset = function () {
        var count = this.count;
        this.shouldFetch = false;
        this.startIndex = null;
        this._newItemsData = null;
        this.items = null;
        this.count = count;
    };
    Object.defineProperty(FetchByDirection.prototype, "newItemsData", {
        get: function () {
            return this._newItemsData;
        },
        set: function (items) {
            this._newItemsData = items;
            this.count++;
        },
        enumerable: true,
        configurable: true
    });
    return FetchByDirection;
}());

var FetchModel = /** @class */ (function () {
    function FetchModel() {
        this.forward = new FetchByDirection();
        this.backward = new FetchByDirection();
    }
    FetchModel.prototype.reset = function () {
        this.forward.reset();
        this.backward.reset();
    };
    Object.defineProperty(FetchModel.prototype, "count", {
        get: function () {
            return this.backward.count + this.forward.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FetchModel.prototype, "items", {
        get: function () {
            return (this.backward.items ? this.backward.items : []).concat(this.forward.items ? this.forward.items : []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FetchModel.prototype, "shouldFetch", {
        get: function () {
            return this.forward.shouldFetch || this.backward.shouldFetch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FetchModel.prototype, "hasNewItems", {
        get: function () {
            return !!((this.forward.newItemsData && this.forward.newItemsData.length) ||
                (this.backward.newItemsData && this.backward.newItemsData.length));
        },
        enumerable: true,
        configurable: true
    });
    return FetchModel;
}());



/***/ }),

/***/ "./src/component/classes/item.ts":
/*!***************************************!*\
  !*** ./src/component/classes/item.ts ***!
  \***************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item($index, data, nodeId, routines) {
        this.$index = $index;
        this.data = data;
        this.nodeId = nodeId;
        this.routines = routines;
        this.invisible = true;
    }
    Item.prototype.getParams = function () {
        return this.routines.getParams(this.element);
    };
    Item.prototype.getEdge = function (direction) {
        return this.routines.getEdge(this.element, direction, false);
    };
    Item.prototype.hide = function () {
        this.routines.hideElement(this.element);
    };
    return Item;
}());



/***/ }),

/***/ "./src/component/classes/padding.ts":
/*!******************************************!*\
  !*** ./src/component/classes/padding.ts ***!
  \******************************************/
/*! exports provided: Padding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Padding", function() { return Padding; });
var Padding = /** @class */ (function () {
    function Padding(element, direction, routines, initialSize) {
        this.element = element.querySelector("[data-padding-" + direction + "]");
        this.direction = direction;
        this.routines = routines;
        if (initialSize) {
            this.routines.setSizeStyle(this.element, initialSize);
        }
    }
    Padding.prototype.reset = function () {
        this.size = 0;
    };
    Object.defineProperty(Padding.prototype, "size", {
        get: function () {
            return this.routines.getSizeStyle(this.element);
        },
        set: function (value) {
            this.routines.setSizeStyle(this.element, Math.round(value));
        },
        enumerable: true,
        configurable: true
    });
    Padding.prototype.getEdge = function (opposite) {
        if (opposite === void 0) { opposite = true; }
        return this.routines.getEdge(this.element, this.direction, opposite);
    };
    return Padding;
}());



/***/ }),

/***/ "./src/component/classes/scrollHelper.ts":
/*!***********************************************!*\
  !*** ./src/component/classes/scrollHelper.ts ***!
  \***********************************************/
/*! exports provided: ScrollHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollHelper", function() { return ScrollHelper; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");


var ScrollHelper = /** @class */ (function () {
    function ScrollHelper(workflow) {
        this.workflow = workflow;
        this.lastScrollTime = 0;
        this.scrollTimer = null;
        this.endSubscription = null;
    }
    ScrollHelper.prototype.run = function () {
        var _this = this;
        var viewport = this.workflow.scroller.viewport;
        if (viewport.syntheticScrollPosition === viewport.scrollPosition) {
            var ssp_1 = viewport.scrollPosition;
            setTimeout(function () {
                if (ssp_1 === viewport.scrollPosition) {
                    viewport.syntheticScrollPosition = null;
                }
            });
            return;
        }
        if (this.workflow.scroller.state.pending) {
            if (!this.endSubscription) {
                this.endSubscription = this.workflow.process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (data) { return data.process === _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Process"].end && data.status === 'done'; })).subscribe(function () {
                    if (_this.endSubscription) {
                        _this.endSubscription.unsubscribe();
                    }
                    _this.endSubscription = null;
                    _this.run();
                });
            }
            return;
        }
        this.throttledScroll();
    };
    ScrollHelper.prototype.throttledScroll = function () {
        var _this = this;
        var scroller = this.workflow.scroller;
        var diff = this.lastScrollTime + scroller.settings.throttle - Date.now();
        if (this.scrollTimer) {
            clearTimeout(this.scrollTimer);
            this.scrollTimer = null;
        }
        if (diff < 0) {
            this.lastScrollTime = Date.now();
            this.lastScrollPosition = scroller.viewport.scrollPosition;
            this.processScroll();
        }
        else {
            this.scrollTimer = setTimeout(function () {
                _this.run();
                _this.scrollTimer = null;
            }, diff);
        }
    };
    ScrollHelper.prototype.purgeProcesses = function () {
        if (this.endSubscription) {
            this.endSubscription.unsubscribe();
            this.endSubscription = null;
        }
        if (this.scrollTimer) {
            clearTimeout(this.scrollTimer);
            this.scrollTimer = null;
        }
    };
    ScrollHelper.prototype.processScroll = function () {
        this.purgeProcesses();
        this.workflow.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Process"].scroll,
            status: 'next'
        });
    };
    return ScrollHelper;
}());



/***/ }),

/***/ "./src/component/classes/settings.ts":
/*!*******************************************!*\
  !*** ./src/component/classes/settings.ts ***!
  \*******************************************/
/*! exports provided: defaultSettings, minSettings, defaultDevSettings, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minSettings", function() { return minSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDevSettings", function() { return defaultDevSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./src/component/utils/index.ts");

var defaultSettings = {
    adapter: false,
    startIndex: 1,
    bufferSize: 5,
    padding: 0.5,
    infinite: false,
    horizontal: false,
    windowViewport: false
};
var minSettings = {
    bufferSize: 1,
    padding: 0.01
};
var defaultDevSettings = {
    debug: false,
    immediateLog: true,
    clipAfterFetchOnly: true,
    clipAfterScrollOnly: true,
    paddingForwardSize: 0,
    paddingBackwardSize: 0,
    throttle: 40
};
var Settings = /** @class */ (function () {
    function Settings(settings, devSettings, instanceIndex) {
        Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["assignSettings"])(this, settings || {}, defaultSettings || {}, minSettings);
        Object.assign(this, defaultDevSettings, devSettings);
        this.currentStartIndex = this.startIndex;
        this.instanceIndex = instanceIndex;
    }
    Settings.prototype.setCurrentStartIndex = function (startIndex) {
        startIndex = Number(startIndex);
        this.currentStartIndex = !isNaN(startIndex) ? startIndex : this.startIndex;
    };
    return Settings;
}());



/***/ }),

/***/ "./src/component/classes/state.ts":
/*!****************************************!*\
  !*** ./src/component/classes/state.ts ***!
  \****************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch */ "./src/component/classes/fetch.ts");
/* harmony import */ var _clip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clip */ "./src/component/classes/clip.ts");




var State = /** @class */ (function () {
    function State() {
        this.isInitial = false;
        this.wfCycleCount = 1;
        this.cycleCount = 0;
        this.countDone = 0;
        this.fetch = new _fetch__WEBPACK_IMPORTED_MODULE_2__["FetchModel"]();
        this.clip = new _clip__WEBPACK_IMPORTED_MODULE_3__["ClipModel"]();
        this.setPreviousClip(true);
        this.pendingSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.firstVisibleSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.lastVisibleSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
    }
    Object.defineProperty(State.prototype, "pending", {
        get: function () {
            return this.pendingSource.getValue();
        },
        set: function (value) {
            if (this.pending !== value) {
                this.pendingSource.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, "firstVisibleItem", {
        get: function () {
            return this.firstVisibleSource.getValue();
        },
        set: function (item) {
            if (this.firstVisibleItem.$index !== item.$index) {
                this.firstVisibleSource.next(item);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, "lastVisibleItem", {
        get: function () {
            return this.lastVisibleSource.getValue();
        },
        set: function (item) {
            if (this.lastVisibleItem.$index !== item.$index) {
                this.lastVisibleSource.next(item);
            }
        },
        enumerable: true,
        configurable: true
    });
    State.prototype.startCycle = function (options) {
        if (options === void 0) { options = {}; }
        this.pending = true;
        this.cycleCount++;
        this.process = _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Process"].start;
        this.direction = options.direction || _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].forward;
        this.scroll = options.scroll || false;
        this.fetch.reset();
        this.clip.reset();
    };
    State.prototype.endCycle = function () {
        this.pending = false;
        this.countDone++;
    };
    State.prototype.setPreviousClip = function (reset) {
        this.previousClip = {
            isSet: !reset,
            backwardSize: this.clip.backward.size,
            forwardSize: this.clip.forward.size,
            backwardItems: this.clip.backward.items,
            forwardItems: this.clip.forward.items,
            direction: this.direction
        };
    };
    State.prototype.getStartIndex = function () {
        return this.fetch[this.direction].startIndex;
    };
    return State;
}());



/***/ }),

/***/ "./src/component/classes/viewport.ts":
/*!*******************************************!*\
  !*** ./src/component/classes/viewport.ts ***!
  \*******************************************/
/*! exports provided: ViewportPadding, Viewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPadding", function() { return ViewportPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./padding */ "./src/component/classes/padding.ts");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");


var ViewportPadding = /** @class */ (function () {
    function ViewportPadding(element, routines, settings) {
        this.forward = new _padding__WEBPACK_IMPORTED_MODULE_0__["Padding"](element, _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].forward, routines, settings.paddingForwardSize);
        this.backward = new _padding__WEBPACK_IMPORTED_MODULE_0__["Padding"](element, _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].backward, routines, settings.paddingBackwardSize);
    }
    ViewportPadding.prototype.reset = function () {
        this.forward.reset();
        this.backward.reset();
    };
    return ViewportPadding;
}());

var Viewport = /** @class */ (function () {
    function Viewport(elementRef, settings, routines) {
        this.settings = settings;
        this.routines = routines;
        this.element = elementRef.nativeElement;
        this.padding = new ViewportPadding(this.element, this.routines, settings);
        this.syntheticScrollPosition = null;
        if (settings.windowViewport) {
            this.host = this.element.ownerDocument.body;
            this.scrollable = this.element.ownerDocument.documentElement;
        }
        else {
            this.host = this.element.parentElement;
            this.scrollable = this.element.parentElement;
        }
    }
    Viewport.prototype.reset = function () {
        this.scrollPosition = 0;
        this.syntheticScrollPosition = null;
        this.padding.reset();
    };
    Object.defineProperty(Viewport.prototype, "scrollEventElement", {
        get: function () {
            return this.settings.windowViewport ? this.element.ownerDocument : this.host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "children", {
        get: function () {
            return this.element.children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "scrollPosition", {
        get: function () {
            return this.routines.getScrollPosition(this.scrollable);
        },
        set: function (value) {
            this.routines.setScrollPosition(this.scrollable, value);
            this.syntheticScrollPosition = this.scrollPosition;
        },
        enumerable: true,
        configurable: true
    });
    Viewport.prototype.getSize = function () {
        return this.routines.getSize(this.host);
    };
    Viewport.prototype.getBufferPadding = function () {
        return this.getSize() * this.settings.padding;
    };
    Viewport.prototype.getEdge = function (direction, opposite) {
        return this.routines.getEdge(this.host, direction, opposite);
    };
    Viewport.prototype.getElementEdge = function (element, direction, opposite) {
        return this.routines.getEdge(element, direction, opposite);
    };
    Viewport.prototype.getLimit = function (direction, opposite) {
        return this.getEdge(direction, opposite) +
            (direction === (!opposite ? _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].forward : _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].backward) ? 1 : -1) * this.getBufferPadding();
    };
    Viewport.prototype.isElementVisible = function (element) {
        var elementEdge = this.routines.getEdge(element, _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].forward);
        var viewportEdge = this.getEdge(_interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].backward);
        return elementEdge > viewportEdge;
    };
    return Viewport;
}());



/***/ }),

/***/ "./src/component/interfaces/direction.ts":
/*!***********************************************!*\
  !*** ./src/component/interfaces/direction.ts ***!
  \***********************************************/
/*! exports provided: Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
var Direction;
(function (Direction) {
    Direction["forward"] = "forward";
    Direction["backward"] = "backward";
})(Direction || (Direction = {}));


/***/ }),

/***/ "./src/component/interfaces/index.ts":
/*!*******************************************!*\
  !*** ./src/component/interfaces/index.ts ***!
  \*******************************************/
/*! exports provided: Direction, Process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction */ "./src/component/interfaces/direction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return _direction__WEBPACK_IMPORTED_MODULE_0__["Direction"]; });

/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process */ "./src/component/interfaces/process.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return _process__WEBPACK_IMPORTED_MODULE_1__["Process"]; });






/***/ }),

/***/ "./src/component/interfaces/process.ts":
/*!*********************************************!*\
  !*** ./src/component/interfaces/process.ts ***!
  \*********************************************/
/*! exports provided: Process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
var Process;
(function (Process) {
    Process["init"] = "init";
    Process["scroll"] = "scroll";
    Process["reload"] = "reload";
    Process["start"] = "start";
    Process["preFetch"] = "preFetch";
    Process["fetch"] = "fetch";
    Process["postFetch"] = "postFetch";
    Process["render"] = "render";
    Process["postRender"] = "postRender";
    Process["preClip"] = "preClip";
    Process["clip"] = "clip";
    Process["end"] = "end";
})(Process || (Process = {}));


/***/ }),

/***/ "./src/component/processes/clip.ts":
/*!*****************************************!*\
  !*** ./src/component/processes/clip.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var Clip = /** @class */ (function () {
    function Clip() {
    }
    Clip.run = function (scroller) {
        scroller.state.process = _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].clip;
        Clip.runByDirection(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward, scroller);
        Clip.runByDirection(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward, scroller);
        Clip.processBuffer(scroller);
        scroller.cycleSubscriptions.push(scroller.bindData().subscribe(function () {
            Clip.processClip(scroller);
            scroller.callWorkflow({
                process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].clip,
                status: 'next'
            });
        }));
    };
    Clip.runByDirection = function (direction, scroller) {
        if (!scroller.state.clip[direction].shouldClip) {
            return;
        }
        var opposite = direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward ? _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward : _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward;
        scroller.viewport.padding[opposite].size += scroller.state.clip[direction].size || 0;
    };
    Clip.processBuffer = function (scroller) {
        var clipped = [];
        scroller.buffer.items = scroller.buffer.items.filter(function (item) {
            if (item.toRemove) {
                scroller.buffer.cache.add(item);
                item.hide();
                clipped.push(item.$index);
                return false;
            }
            return true;
        });
        scroller.log("clipped " + clipped.length + " items", clipped);
        if (!scroller.buffer.size) {
            scroller.state.setPreviousClip();
        }
    };
    Clip.processClip = function (scroller) {
        if (!scroller.state.clip[_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward].shouldClip) {
            scroller.buffer.bof = false;
        }
        if (!scroller.state.clip[_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward].shouldClip) {
            scroller.buffer.eof = false;
        }
    };
    return Clip;
}());
/* harmony default export */ __webpack_exports__["default"] = (Clip);


/***/ }),

/***/ "./src/component/processes/end.ts":
/*!****************************************!*\
  !*** ./src/component/processes/end.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var End = /** @class */ (function () {
    function End() {
    }
    End.run = function (scroller, isFail) {
        scroller.state.endCycle();
        if (scroller.datasource.adapter.init) {
            End.calculateParams(scroller);
        }
        scroller.purgeCycleSubscriptions();
        scroller.finalize();
        var next = null;
        var logData = scroller.settings.instanceIndex + "-" + scroller.state.wfCycleCount + "-" + scroller.state.cycleCount;
        if (isFail) {
            scroller.log("%c---=== Workflow " + logData + " fail", 'color: #006600;');
        }
        else {
            scroller.log("%c---=== Workflow " + logData + " done", 'color: #006600;');
            next = End.getNextRun(scroller);
        }
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].end,
            status: next ? 'next' : 'done',
            payload: next
        });
    };
    End.calculateParams = function (scroller) {
        var items = scroller.buffer.items;
        var length = items.length;
        var viewportBackwardEdge = scroller.viewport.getEdge(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward);
        var viewportForwardEdge = scroller.viewport.getEdge(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward);
        var index = null;
        for (var i = 0; i < length; i++) {
            var edge = scroller.viewport.getElementEdge(items[i].element, _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward, true);
            if (edge > viewportBackwardEdge) {
                index = i;
                break;
            }
        }
        scroller.state.firstVisibleItem = index !== null ? {
            $index: items[index].$index,
            data: items[index].data,
            element: items[index].element
        } : {};
        index = null;
        for (var i = length - 1; i >= 0; i--) {
            var edge = scroller.viewport.getElementEdge(items[i].element, _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward, true);
            if (edge < viewportForwardEdge) {
                index = i;
                break;
            }
        }
        scroller.state.lastVisibleItem = index !== null ? {
            $index: items[index].$index,
            data: items[index].data,
            element: items[index].element
        } : {};
    };
    End.getNextRun = function (scroller) {
        var nextRun = null;
        if (scroller.state.fetch.hasNewItems || scroller.state.clip.shouldClip) {
            nextRun = {
                direction: scroller.state.direction,
                scroll: scroller.state.scroll
            };
        }
        else if (!scroller.buffer.size && scroller.state.fetch.shouldFetch && !scroller.state.fetch.hasNewItems) {
            nextRun = {
                direction: scroller.state.direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward ? _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward : _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward,
                scroll: false
            };
        }
        else if (scroller.state.isInitial) {
            scroller.state.isInitial = false;
            nextRun = {
                direction: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward,
                scroll: scroller.state.scroll || false
            };
        }
        return nextRun;
    };
    return End;
}());
/* harmony default export */ __webpack_exports__["default"] = (End);


/***/ }),

/***/ "./src/component/processes/fetch.ts":
/*!******************************************!*\
  !*** ./src/component/processes/fetch.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");


var Fetch = /** @class */ (function () {
    function Fetch() {
    }
    Fetch.run = function (scroller) {
        scroller.state.process = _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Process"].fetch;
        var result = Fetch.get(scroller);
        if (typeof result.subscribe !== 'function') {
            if (!result.isError) {
                Fetch.success(result.data, scroller);
            }
            else {
                Fetch.fail(result.error, scroller);
            }
        }
        else {
            scroller.cycleSubscriptions.push(result.subscribe(function (data) { return Fetch.success(data, scroller); }, function (error) { return Fetch.fail(error, scroller); }));
        }
    };
    Fetch.success = function (data, scroller) {
        var direction = scroller.state.direction;
        scroller.log("resolved " + data.length + " " + direction + " items " +
            ("(index = " + scroller.state.fetch[direction].startIndex + ", count = " + scroller.settings.bufferSize + ")"));
        scroller.state.fetch[direction].newItemsData = data;
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Process"].fetch,
            status: 'next'
        });
    };
    Fetch.fail = function (error, scroller) {
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_1__["Process"].fetch,
            status: 'error',
            payload: error
        });
    };
    Fetch.get = function (scroller) {
        var _get = scroller.datasource.get;
        var immediateData, immediateError;
        var observer;
        var success = function (data) {
            if (!observer) {
                immediateData = data || null;
                return;
            }
            observer.next(data);
            observer.complete();
        };
        var reject = function (error) {
            if (!observer) {
                immediateError = error || null;
                return;
            }
            observer.error(error);
        };
        var result = _get(scroller.state.getStartIndex(), scroller.settings.bufferSize, success, reject);
        if (result && typeof result.then === 'function') {
            result.then(success, reject);
        }
        else if (result && typeof result.subscribe === 'function') {
            return result; // do not wrap observable
        }
        if (immediateData !== undefined || immediateError !== undefined) {
            return {
                data: immediateData,
                error: immediateError,
                isError: immediateError !== undefined
            };
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (_observer) {
            observer = _observer;
        });
    };
    return Fetch;
}());
/* harmony default export */ __webpack_exports__["default"] = (Fetch);


/***/ }),

/***/ "./src/component/processes/index.ts":
/*!******************************************!*\
  !*** ./src/component/processes/index.ts ***!
  \******************************************/
/*! exports provided: Init, Reload, Start, PreFetch, Fetch, PostFetch, Render, PostRender, PreClip, Clip, End */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/component/processes/init.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Init", function() { return _init__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _reload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reload */ "./src/component/processes/reload.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reload", function() { return _reload__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start */ "./src/component/processes/start.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Start", function() { return _start__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _preFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preFetch */ "./src/component/processes/preFetch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreFetch", function() { return _preFetch__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch */ "./src/component/processes/fetch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fetch", function() { return _fetch__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _postFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postFetch */ "./src/component/processes/postFetch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostFetch", function() { return _postFetch__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render */ "./src/component/processes/render.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return _render__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _postRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postRender */ "./src/component/processes/postRender.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostRender", function() { return _postRender__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preClip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preClip */ "./src/component/processes/preClip.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreClip", function() { return _preClip__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _clip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clip */ "./src/component/processes/clip.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clip", function() { return _clip__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _end__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./end */ "./src/component/processes/end.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "End", function() { return _end__WEBPACK_IMPORTED_MODULE_10__["default"]; });















/***/ }),

/***/ "./src/component/processes/init.ts":
/*!*****************************************!*\
  !*** ./src/component/processes/init.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var Init = /** @class */ (function () {
    function Init() {
    }
    Init.run = function (scroller, isScroll) {
        var logData = scroller.settings.instanceIndex + "-" + scroller.state.wfCycleCount;
        var logStyles = 'color: #0000aa; border: solid black 1px; border-width: 1px 0 0 1px; margin-left: -2px';
        scroller.log("%c   ~~~ WF Run " + logData + " STARTED ~~~  ", logStyles);
        scroller.state.isInitial = true;
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].init,
            status: 'next',
            payload: {
                direction: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward,
                scroll: !!isScroll
            }
        });
    };
    return Init;
}());
/* harmony default export */ __webpack_exports__["default"] = (Init);


/***/ }),

/***/ "./src/component/processes/postFetch.ts":
/*!**********************************************!*\
  !*** ./src/component/processes/postFetch.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/item */ "./src/component/classes/item.ts");


var PostFetch = /** @class */ (function () {
    function PostFetch() {
    }
    PostFetch.run = function (scroller) {
        scroller.state.process = _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].postFetch;
        PostFetch.setEOF(scroller);
        var hasItems = PostFetch.setItems(scroller);
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].postFetch,
            status: hasItems ? 'next' : 'done'
        });
    };
    PostFetch.setEOF = function (scroller) {
        var direction = scroller.state.direction;
        var fetch = scroller.state.fetch[direction];
        var eof = direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward ? 'eof' : 'bof';
        var items = fetch.newItemsData;
        scroller.buffer[eof] = items.length !== scroller.settings.bufferSize;
        if (direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward && scroller.buffer.bof) {
            fetch.startIndex = fetch.startIndex + scroller.settings.bufferSize - items.length;
        }
    };
    PostFetch.setItems = function (scroller) {
        var direction = scroller.state.direction;
        var fetch = scroller.state.fetch[direction];
        var items = fetch.newItemsData;
        if (!items.length) {
            return false;
        }
        fetch.items = items.map(function (item, index) {
            var $index = fetch.startIndex + index;
            var nodeId = String($index);
            return new _classes_item__WEBPACK_IMPORTED_MODULE_1__["Item"]($index, item, nodeId, scroller.routines);
        });
        if (direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward) {
            scroller.buffer.items = scroller.buffer.items.concat(fetch.items);
        }
        else {
            scroller.buffer.items = fetch.items.concat(scroller.buffer.items);
        }
        return true;
    };
    return PostFetch;
}());
/* harmony default export */ __webpack_exports__["default"] = (PostFetch);


/***/ }),

/***/ "./src/component/processes/postRender.ts":
/*!***********************************************!*\
  !*** ./src/component/processes/postRender.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var PostRender = /** @class */ (function () {
    function PostRender() {
    }
    PostRender.run = function (scroller) {
        scroller.state.process = _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].postRender;
        var viewport = scroller.viewport;
        var direction = scroller.state.direction;
        var items = scroller.state.fetch[direction].items;
        var position = viewport.scrollPosition;
        PostRender.processFetchedItems(items);
        // pre-adjustment, scroll position only
        if (position !== viewport.scrollPosition) {
            viewport.scrollPosition = position;
        }
        // paddings and scroll position adjustments
        var height = Math.round(Math.abs(items[0].getEdge(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward) - items[items.length - 1].getEdge(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward)));
        var syntheticScrollPosition = null;
        if (direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward) {
            PostRender.runForward(scroller, height);
        }
        else {
            syntheticScrollPosition = PostRender.runBackward(scroller, height);
        }
        // post-adjustment, scroll position only
        if (position !== viewport.scrollPosition) {
            if (syntheticScrollPosition !== null) {
                viewport.scrollPosition += viewport.scrollPosition - syntheticScrollPosition;
            }
            else {
                viewport.scrollPosition = position;
            }
        }
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].postRender,
            status: 'next'
        });
    };
    PostRender.processFetchedItems = function (items) {
        for (var i = items.length - 1; i >= 0; i--) {
            var element = items[i].element;
            element.style.left = '';
            element.style.position = '';
            items[i].invisible = false;
        }
    };
    PostRender.runForward = function (scroller, size) {
        var paddingForward = scroller.viewport.padding[_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward];
        var _paddingSize = paddingForward.size || 0;
        paddingForward.size = Math.max(_paddingSize - size, 0);
    };
    PostRender.runBackward = function (scroller, size) {
        var viewport = scroller.viewport;
        var _scrollPosition = viewport.scrollPosition;
        var paddingBackward = viewport.padding[_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward];
        var paddingForward = viewport.padding[_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward];
        // need to make "size" pixels in backward direction
        // 1) via paddingTop
        var _paddingSize = paddingBackward.size || 0;
        var paddingSize = Math.max(_paddingSize - size, 0);
        paddingBackward.size = paddingSize;
        var paddingDiff = size - (_paddingSize - paddingSize);
        // 2) via scrollTop
        if (paddingDiff > 0) {
            size = paddingDiff;
            viewport.scrollPosition += size;
            var diff = size - viewport.scrollPosition - _scrollPosition;
            if (diff > 0) {
                paddingSize = paddingForward.size || 0;
                paddingForward.size = paddingSize + diff;
                viewport.scrollPosition += diff;
            }
            return viewport.scrollPosition;
        }
        return null;
    };
    return PostRender;
}());
/* harmony default export */ __webpack_exports__["default"] = (PostRender);


/***/ }),

/***/ "./src/component/processes/preClip.ts":
/*!********************************************!*\
  !*** ./src/component/processes/preClip.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var PreClip = /** @class */ (function () {
    function PreClip() {
    }
    PreClip.run = function (scroller) {
        scroller.state.process = _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].preClip;
        var shouldNotClip = scroller.settings.infinite ||
            !scroller.buffer.size ||
            (scroller.settings.clipAfterScrollOnly && !scroller.state.scroll);
        if (!shouldNotClip) {
            var afterFetch = scroller.settings.clipAfterFetchOnly;
            if (!afterFetch || scroller.state.fetch[_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward].shouldFetch) {
                PreClip.shouldClipByDirection(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward, scroller);
            }
            if (!afterFetch || scroller.state.fetch[_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward].shouldFetch) {
                PreClip.shouldClipByDirection(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward, scroller);
            }
            shouldNotClip = !scroller.state.clip.shouldClip;
        }
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].preClip,
            status: !shouldNotClip ? 'next' : 'done'
        });
    };
    PreClip.shouldClipByDirection = function (direction, scroller) {
        var items = scroller.buffer.items;
        var forward = direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward;
        var viewport = scroller.viewport;
        var viewportLimit = viewport.getLimit(direction, true);
        var firstIndex = scroller.buffer.getFirstVisibleItemIndex();
        var lastIndex = scroller.buffer.getLastVisibleItemIndex();
        var firstItemEdge = items[firstIndex].getEdge(direction);
        var lastItemEdge = items[lastIndex].getEdge(direction);
        var i, itemEdge, start = -1, end = -1;
        var getItemEdge = function (index) {
            return index === firstIndex ? firstItemEdge : (index === lastIndex ? lastItemEdge :
                items[index].getEdge(direction));
        };
        if ((forward && lastItemEdge <= viewportLimit) || (!forward && firstItemEdge >= viewportLimit)) {
            // all items should be clipped
            start = firstIndex;
            end = lastIndex;
        }
        else {
            if (forward) {
                start = firstIndex;
            }
            else {
                end = lastIndex;
            }
            for (forward ? (i = 0) : (i = lastIndex); forward ? (i <= lastIndex) : (i >= 0); forward ? i++ : i--) {
                itemEdge = getItemEdge(i);
                if (forward && itemEdge <= viewportLimit) {
                    end = i;
                }
                else if (!forward && itemEdge >= viewportLimit) {
                    start = i;
                }
                else {
                    break;
                }
            }
        }
        if (start >= 0 && end >= 0) {
            var itemsToRemove = 0;
            for (i = start; i <= end; i++) {
                items[i].toRemove = true;
                itemsToRemove++;
            }
            scroller.state.clip[direction].shouldClip = true;
            scroller.state.clip[direction].size = items[end].getEdge(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward) - items[start].getEdge(_interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward);
            scroller.state.clip[direction].items = itemsToRemove;
        }
    };
    return PreClip;
}());
/* harmony default export */ __webpack_exports__["default"] = (PreClip);


/***/ }),

/***/ "./src/component/processes/preFetch.ts":
/*!*********************************************!*\
  !*** ./src/component/processes/preFetch.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var PreFetch = /** @class */ (function () {
    function PreFetch() {
    }
    PreFetch.run = function (scroller) {
        scroller.state.process = _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].preFetch;
        var direction = scroller.state.direction;
        var paddingEdge = scroller.viewport.padding[direction].getEdge();
        var limit = scroller.viewport.getLimit(direction);
        scroller.state.fetch[direction].shouldFetch = PreFetch.checkEOF(scroller) ? false :
            (direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward) ? paddingEdge < limit : paddingEdge > limit;
        var shouldFetch = scroller.state.fetch[direction].shouldFetch;
        if (shouldFetch) {
            PreFetch.setStartIndex(scroller);
            PreFetch.processPreviousClip(scroller);
        }
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].preFetch,
            status: shouldFetch ? 'next' : 'done'
        });
    };
    PreFetch.checkEOF = function (scroller) {
        return (scroller.state.direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward && scroller.buffer.eof) ||
            (scroller.state.direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward && scroller.buffer.bof);
    };
    PreFetch.setStartIndex = function (scroller) {
        var direction = scroller.state.direction;
        var forward = direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward;
        var back = -scroller.settings.bufferSize;
        var lastIndex = scroller.buffer.lastIndex[direction];
        var start;
        if (lastIndex === null) {
            start = scroller.settings.currentStartIndex + (forward ? 0 : back);
        }
        else {
            start = lastIndex + (forward ? 1 : back);
        }
        scroller.state.fetch[direction].startIndex = start;
    };
    PreFetch.processPreviousClip = function (scroller) {
        var previousClip = scroller.state.previousClip;
        if (!previousClip.isSet) {
            return;
        }
        var direction = scroller.state.direction;
        var forward = direction === _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward;
        var opposite = forward ? _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].backward : _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward;
        var clipSize = previousClip[opposite + "Size"];
        if (clipSize && previousClip.direction !== scroller.state.direction) {
            scroller.viewport.padding[direction].size -= clipSize;
            scroller.viewport.padding[opposite].size += clipSize;
            if (!forward) {
                scroller.buffer.lastIndex[opposite] = (scroller.buffer.lastIndex[direction] || 0) - 1;
            }
            else {
                scroller.buffer.lastIndex[direction] = scroller.buffer.lastIndex[opposite];
            }
        }
        scroller.state.setPreviousClip(true);
    };
    return PreFetch;
}());
/* harmony default export */ __webpack_exports__["default"] = (PreFetch);


/***/ }),

/***/ "./src/component/processes/reload.ts":
/*!*******************************************!*\
  !*** ./src/component/processes/reload.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var Reload = /** @class */ (function () {
    function Reload() {
    }
    Reload.run = function (scroller, reloadIndex) {
        var scrollPosition = scroller.viewport.scrollPosition;
        scroller.buffer.reset(true);
        scroller.viewport.reset();
        scroller.viewport.syntheticScrollPosition = scrollPosition > 0 ? 0 : null;
        scroller.purgeCycleSubscriptions();
        scroller.settings.setCurrentStartIndex(reloadIndex);
        // todo: do we need to emit Process.end before?
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].reload,
            status: 'next'
        });
    };
    return Reload;
}());
/* harmony default export */ __webpack_exports__["default"] = (Reload);


/***/ }),

/***/ "./src/component/processes/render.ts":
/*!*******************************************!*\
  !*** ./src/component/processes/render.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var Render = /** @class */ (function () {
    function Render() {
    }
    Render.run = function (scroller) {
        scroller.state.process = _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].render;
        scroller.cycleSubscriptions.push(scroller.bindData().subscribe(function () {
            if (Render.setElements(scroller)) {
                scroller.callWorkflow({
                    process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].render,
                    status: 'next'
                });
            }
            else {
                scroller.callWorkflow({
                    process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].render,
                    status: 'error',
                    payload: 'Can not associate item with element'
                });
            }
        }));
    };
    Render.setElements = function (scroller) {
        var items = scroller.state.fetch.items;
        for (var j = items.length - 1; j >= 0; j--) {
            var nodes = scroller.viewport.children;
            for (var i = nodes.length - 1; i >= 0; i--) {
                if (nodes[i].getAttribute('data-sid') === items[j].nodeId) {
                    items[j].element = nodes[i];
                }
            }
            if (!items[j].element) {
                return false;
            }
        }
        return true;
    };
    return Render;
}());
/* harmony default export */ __webpack_exports__["default"] = (Render);


/***/ }),

/***/ "./src/component/processes/start.ts":
/*!******************************************!*\
  !*** ./src/component/processes/start.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/index */ "./src/component/interfaces/index.ts");

var Start = /** @class */ (function () {
    function Start() {
    }
    Start.run = function (scroller, options) {
        if (options === void 0) { options = {}; }
        if (!options.direction) {
            options.direction = scroller.state.direction || _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].forward;
        }
        scroller.state.startCycle(options);
        var logData = scroller.settings.instanceIndex + "-" + scroller.state.wfCycleCount + "-" + scroller.state.cycleCount;
        scroller.log("%c---=== Workflow " + logData + " start", 'color: #006600;', options);
        scroller.callWorkflow({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_0__["Process"].start,
            status: 'next'
        });
    };
    return Start;
}());
/* harmony default export */ __webpack_exports__["default"] = (Start);


/***/ }),

/***/ "./src/component/scroller.ts":
/*!***********************************!*\
  !*** ./src/component/scroller.ts ***!
  \***********************************/
/*! exports provided: Scroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroller", function() { return Scroller; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index */ "./src/component/utils/index.ts");
/* harmony import */ var _classes_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/datasource */ "./src/component/classes/datasource.ts");
/* harmony import */ var _classes_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/settings */ "./src/component/classes/settings.ts");
/* harmony import */ var _classes_domRoutines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/domRoutines */ "./src/component/classes/domRoutines.ts");
/* harmony import */ var _classes_viewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/viewport */ "./src/component/classes/viewport.ts");
/* harmony import */ var _classes_buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/buffer */ "./src/component/classes/buffer.ts");
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/state */ "./src/component/classes/state.ts");








var instanceCount = 0;
var Scroller = /** @class */ (function () {
    function Scroller(context, callWorkflow) {
        this.logs = [];
        var datasource = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["checkDatasource"])(context.datasource);
        this.datasource = datasource;
        this.version = context.version;
        // this._bindData = () => context.changeDetector.markForCheck();
        this._bindData = function () { return context.changeDetector.detectChanges(); };
        this.callWorkflow = callWorkflow;
        this.cycleSubscriptions = [];
        this.settings = new _classes_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"](datasource.settings, datasource.devSettings, ++instanceCount);
        this.routines = new _classes_domRoutines__WEBPACK_IMPORTED_MODULE_4__["Routines"](this.settings);
        this.viewport = new _classes_viewport__WEBPACK_IMPORTED_MODULE_5__["Viewport"](context.elementRef, this.settings, this.routines);
        this.buffer = new _classes_buffer__WEBPACK_IMPORTED_MODULE_6__["Buffer"]();
        this.state = new _classes_state__WEBPACK_IMPORTED_MODULE_7__["State"]();
        if (!datasource.constructed) {
            this.datasource = new _classes_datasource__WEBPACK_IMPORTED_MODULE_2__["Datasource"](datasource, !this.settings.adapter);
            if (this.settings.adapter) {
                this.datasource.adapter.initialize(this);
            }
        }
        else {
            this.datasource.adapter.initialize(this);
        }
    }
    Scroller.prototype.bindData = function () {
        this._bindData();
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(true);
                observer.complete();
            });
        });
    };
    Scroller.prototype.purgeCycleSubscriptions = function () {
        this.cycleSubscriptions.forEach(function (item) { return item.unsubscribe(); });
        this.cycleSubscriptions = [];
    };
    Scroller.prototype.dispose = function () {
        this.purgeCycleSubscriptions();
    };
    Scroller.prototype.finalize = function () {
    };
    Scroller.prototype.stat = function (str) {
        if (this.settings.debug) {
            this.log((str ? str + ' — ' : '') +
                'top: ' + this.viewport.scrollPosition + ', ' +
                'bwd_p: ' + this.viewport.padding.backward.size + ', ' +
                'fwd_p: ' + this.viewport.padding.forward.size + ', ' +
                'items: ' + this.buffer.size);
        }
    };
    Scroller.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.settings.debug) {
            if (this.settings.immediateLog) {
                console.log.apply(this, args);
            }
            else {
                this.logs.push(args);
            }
        }
    };
    Scroller.prototype.logForce = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.settings.debug) {
            if (!this.settings.immediateLog && this.logs.length) {
                this.logs.forEach(function (logArgs) { return console.log.apply(_this, logArgs); });
                this.logs = [];
            }
            if (args.length) {
                console.log.apply(this, args);
            }
        }
    };
    return Scroller;
}());



/***/ }),

/***/ "./src/component/utils/assignSettings.ts":
/*!***********************************************!*\
  !*** ./src/component/utils/assignSettings.ts ***!
  \***********************************************/
/*! exports provided: assignSettings, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignSettings", function() { return assignSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
var assignBoolean = function (target, source, token, defaults) {
    var param = source[token];
    if (typeof param === 'undefined') {
        return;
    }
    if (typeof param !== 'boolean') {
        console.warn(token + ' setting parse error, set it to ' + defaults[token] + ' (default)');
        return;
    }
    target[token] = param;
    return true;
};
var ɵ0 = assignBoolean;
var assignNumeric = function (target, source, token, defaults, integer) {
    if (integer === void 0) { integer = false; }
    var param = source[token];
    if (typeof param === 'undefined') {
        return;
    }
    if (typeof param !== 'number') {
        console.warn(token + ' setting parse error, set it to ' + defaults[token] + ' (default)');
        return;
    }
    if (integer && parseInt(param.toString(), 10) !== param) {
        console.warn(token + ' setting parse error, set it to ' + defaults[token] + ' (default)');
        return;
    }
    target[token] = param;
    return true;
};
var ɵ1 = assignNumeric;
var assignMinimalNumeric = function (target, source, token, defaults, minSettings, integer) {
    if (integer === void 0) { integer = false; }
    if (assignNumeric(target, source, token, defaults, integer) !== true) {
        return;
    }
    if (target[token] < minSettings[token]) {
        console.warn(token + ' setting is less than minimum, set it to ' + minSettings[token]);
        target[token] = minSettings[token];
        return;
    }
    return true;
};
var ɵ2 = assignMinimalNumeric;
var assignSettings = function (target, settings, defaults, minSettings) {
    Object.assign(target, defaults);
    if (typeof settings === 'undefined') {
        return;
    }
    if (typeof settings !== 'object') {
        console.warn('settings is not an object, fallback to the defaults');
        return;
    }
    assignBoolean(target, settings, 'adapter', defaults);
    assignNumeric(target, settings, 'startIndex', defaults);
    assignMinimalNumeric(target, settings, 'bufferSize', defaults, minSettings, true);
    assignMinimalNumeric(target, settings, 'padding', defaults, minSettings);
    assignBoolean(target, settings, 'infinite', defaults);
    assignBoolean(target, settings, 'horizontal', defaults);
    assignBoolean(target, settings, 'windowViewport', defaults);
};



/***/ }),

/***/ "./src/component/utils/checkDatasource.ts":
/*!************************************************!*\
  !*** ./src/component/utils/checkDatasource.ts ***!
  \************************************************/
/*! exports provided: checkDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDatasource", function() { return checkDatasource; });
var checkDatasource = function (datasource) {
    if (!datasource) {
        throw new Error('No datasource provided');
    }
    if (!('get' in datasource)) {
        throw new Error('Datasource get method is not implemented');
    }
    if (typeof datasource.get !== 'function') {
        throw new Error('Datasource get is not a function');
    }
    if (datasource.get.length < 2) {
        throw new Error('Datasource get method invalid signature');
    }
    return datasource;
};


/***/ }),

/***/ "./src/component/utils/index.ts":
/*!**************************************!*\
  !*** ./src/component/utils/index.ts ***!
  \**************************************/
/*! exports provided: checkDatasource, assignSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkDatasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkDatasource */ "./src/component/utils/checkDatasource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkDatasource", function() { return _checkDatasource__WEBPACK_IMPORTED_MODULE_0__["checkDatasource"]; });

/* harmony import */ var _assignSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignSettings */ "./src/component/utils/assignSettings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignSettings", function() { return _assignSettings__WEBPACK_IMPORTED_MODULE_1__["assignSettings"]; });






/***/ }),

/***/ "./src/component/workflow.ts":
/*!***********************************!*\
  !*** ./src/component/workflow.ts ***!
  \***********************************/
/*! exports provided: Workflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workflow", function() { return Workflow; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroller */ "./src/component/scroller.ts");
/* harmony import */ var _classes_scrollHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/scrollHelper */ "./src/component/classes/scrollHelper.ts");
/* harmony import */ var _interfaces_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces/index */ "./src/component/interfaces/index.ts");
/* harmony import */ var _processes_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processes/index */ "./src/component/processes/index.ts");





var Workflow = /** @class */ (function () {
    function Workflow(context) {
        var _this = this;
        this.context = context;
        this.scroller = new _scroller__WEBPACK_IMPORTED_MODULE_1__["Scroller"](this.context, this.callWorkflow.bind(this));
        this.scrollHelper = new _classes_scrollHelper__WEBPACK_IMPORTED_MODULE_2__["ScrollHelper"](this);
        this.process$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
            process: _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].init,
            status: 'start'
        });
        this.cyclesDone = 0;
        setTimeout(function () { return _this.initListeners(); });
        this.scroller.log("The uiScroll Workflow has been initialized (" + this.context.version + ")");
    }
    Workflow.prototype.initListeners = function () {
        var _this = this;
        var scroller = this.scroller;
        this.itemsSubscription = scroller.buffer.$items.subscribe(function (items) { return _this.context.items = items; });
        this.workflowSubscription = this.process$.subscribe(this.process.bind(this));
        this.onScrollUnsubscribe = this.context.renderer.listen(scroller.viewport.scrollEventElement, 'scroll', this.scrollHelper.run.bind(this.scrollHelper));
    };
    Workflow.prototype.dispose = function () {
        this.scrollHelper.purgeProcesses();
        this.onScrollUnsubscribe();
        this.process$.complete();
        this.workflowSubscription.unsubscribe();
        this.itemsSubscription.unsubscribe();
        this.scroller.dispose();
    };
    Workflow.prototype.callWorkflow = function (processSubject) {
        this.process$.next(processSubject);
    };
    Workflow.prototype.process = function (data) {
        var scroller = this.scroller;
        var pl = typeof data.payload === 'string' ? " (" + data.payload + ")" : '';
        scroller.log("process " + data.process + ", " + (data.status + pl));
        if (data.status === 'error') {
            _processes_index__WEBPACK_IMPORTED_MODULE_4__["End"].run(scroller, true);
            return;
        }
        switch (data.process) {
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].init:
                if (data.status === 'start') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Init"].run(scroller);
                }
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Start"].run(scroller, data.payload);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].reload:
                if (data.status === 'start') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Reload"].run(scroller, data.payload);
                }
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Init"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].scroll:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Init"].run(scroller, true);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].start:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["PreFetch"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].preFetch:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Fetch"].run(scroller);
                }
                if (data.status === 'done') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["End"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].fetch:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["PostFetch"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].postFetch:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Render"].run(scroller);
                }
                if (data.status === 'done') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["End"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].render:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["PostRender"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].postRender:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["PreClip"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].preClip:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Clip"].run(scroller);
                }
                if (data.status === 'done') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["End"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].clip:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["End"].run(scroller);
                }
                break;
            case _interfaces_index__WEBPACK_IMPORTED_MODULE_3__["Process"].end:
                if (data.status === 'next') {
                    _processes_index__WEBPACK_IMPORTED_MODULE_4__["Start"].run(scroller, data.payload);
                }
                if (data.status === 'done') {
                    this.done();
                }
                break;
        }
    };
    Workflow.prototype.done = function () {
        this.cyclesDone++;
        this.scroller.state.wfCycleCount = this.cyclesDone + 1;
        var logData = this.scroller.settings.instanceIndex + "-" + this.cyclesDone;
        var logStyles = 'color: #0000aa; border: solid #555 1px; border-width: 0 0 1px 1px; margin-left: -2px';
        this.scroller.log("%c   ~~~ WF Run " + logData + " FINALIZED ~~~  ", logStyles);
        this.finalize();
    };
    Workflow.prototype.finalize = function () {
    };
    return Workflow;
}());



/***/ }),

/***/ "./src/ui-scroll.component.ngfactory.js":
/*!**********************************************!*\
  !*** ./src/ui-scroll.component.ngfactory.js ***!
  \**********************************************/
/*! exports provided: RenderType_UiScrollComponent, View_UiScrollComponent_0, View_UiScrollComponent_Host_0, UiScrollComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UiScrollComponent", function() { return RenderType_UiScrollComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UiScrollComponent_0", function() { return View_UiScrollComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UiScrollComponent_Host_0", function() { return View_UiScrollComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiScrollComponentNgFactory", function() { return UiScrollComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ui_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-scroll.component */ "./src/ui-scroll.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_UiScrollComponent = [];
var RenderType_UiScrollComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_UiScrollComponent, data: {} });

function View_UiScrollComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_UiScrollComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], [[1, "data-sid", 0], [4, "position", null], [4, "left", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_UiScrollComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { $implicit: 0, index: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_3 = _ck(_v, 3, 0, _v.context.$implicit.data, _v.context.$implicit.$index); var currVal_4 = _co.template; _ck(_v, 2, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.nodeId; var currVal_1 = (_v.context.$implicit.invisible ? "fixed" : null); var currVal_2 = (_v.context.$implicit.invisible ? "-99999px" : null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_UiScrollComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["data-padding-backward", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_UiScrollComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["data-padding-forward", ""]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.items; _ck(_v, 2, 0, currVal_0); }, null); }
function View_UiScrollComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["ui-scroll", ""]], null, null, null, View_UiScrollComponent_0, RenderType_UiScrollComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _ui_scroll_component__WEBPACK_IMPORTED_MODULE_2__["UiScrollComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UiScrollComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[ui-scroll]", _ui_scroll_component__WEBPACK_IMPORTED_MODULE_2__["UiScrollComponent"], View_UiScrollComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/ui-scroll.component.ts":
/*!************************************!*\
  !*** ./src/ui-scroll.component.ts ***!
  \************************************/
/*! exports provided: UiScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiScrollComponent", function() { return UiScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_workflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/workflow */ "./src/component/workflow.ts");


var UiScrollComponent = /** @class */ (function () {
    function UiScrollComponent(changeDetector, elementRef, renderer) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    UiScrollComponent.prototype.ngOnInit = function () {
        this.workflow = new _component_workflow__WEBPACK_IMPORTED_MODULE_1__["Workflow"](this);
    };
    UiScrollComponent.prototype.ngOnDestroy = function () {
        this.workflow.dispose();
    };
    return UiScrollComponent;
}());



/***/ }),

/***/ "./src/ui-scroll.directive.ts":
/*!************************************!*\
  !*** ./src/ui-scroll.directive.ts ***!
  \************************************/
/*! exports provided: UiScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiScrollDirective", function() { return UiScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_scroll_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-scroll.version */ "./src/ui-scroll.version.ts");
/* harmony import */ var _ui_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-scroll.component */ "./src/ui-scroll.component.ts");



var UiScrollDirective = /** @class */ (function () {
    function UiScrollDirective(templateRef, viewContainer, resolver) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.resolver = resolver;
    }
    Object.defineProperty(UiScrollDirective.prototype, "uiScrollOf", {
        set: function (datasource) {
            this.datasource = datasource;
        },
        enumerable: true,
        configurable: true
    });
    UiScrollDirective.prototype.ngOnInit = function () {
        var templateView = this.templateRef.createEmbeddedView({});
        var compFactory = this.resolver.resolveComponentFactory(_ui_scroll_component__WEBPACK_IMPORTED_MODULE_2__["UiScrollComponent"]);
        var componentRef = this.viewContainer.createComponent(compFactory, undefined, this.viewContainer.injector, [templateView.rootNodes]);
        componentRef.instance.datasource = this.datasource;
        componentRef.instance.template = this.templateRef;
        componentRef.instance.version = _ui_scroll_version__WEBPACK_IMPORTED_MODULE_1__["default"];
    };
    return UiScrollDirective;
}());



/***/ }),

/***/ "./src/ui-scroll.module.ts":
/*!*********************************!*\
  !*** ./src/ui-scroll.module.ts ***!
  \*********************************/
/*! exports provided: UiScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiScrollModule", function() { return UiScrollModule; });
var UiScrollModule = /** @class */ (function () {
    function UiScrollModule() {
    }
    return UiScrollModule;
}());



/***/ }),

/***/ "./src/ui-scroll.version.ts":
/*!**********************************!*\
  !*** ./src/ui-scroll.version.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('0.0.7');


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dhilt/Dev/ngx-ui-scroll/demo/main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map