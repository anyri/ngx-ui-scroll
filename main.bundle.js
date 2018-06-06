webpackJsonp(["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__samples_common_component__ = __webpack_require__("./demo/app/samples/common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__samples_adapter_component__ = __webpack_require__("./demo/app/samples/adapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__samples_window_component__ = __webpack_require__("./demo/app/samples/window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__samples_test_component__ = __webpack_require__("./demo/app/samples/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__samples_common_component__["a" /* CommonComponent */] },
    { path: 'adapter', component: __WEBPACK_IMPORTED_MODULE_3__samples_adapter_component__["a" /* AdapterComponent */] },
    { path: 'window', component: __WEBPACK_IMPORTED_MODULE_4__samples_window_component__["a" /* WindowComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_5__samples_test_component__["a" /* TestComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./demo/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hasLayout\">\n  <app-nav></app-nav>\n\n  <div class=\"container mb-5\">\n\n    <h1>Angular UI Scroll Demo</h1>\n\n    <router-outlet></router-outlet>\n\n  </div>\n</div>\n\n<div *ngIf=\"!hasLayout\" class=\"no-layout\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./demo/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.hasLayout = true;
        this.subscriptions = [];
        this.subscriptions.push(router.events.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]; })).subscribe(function (event) {
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./demo/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_api__ = __webpack_require__("./public_api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./demo/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_nav_component__ = __webpack_require__("./demo/app/shared/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_demo_component__ = __webpack_require__("./demo/app/shared/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__samples_common_component__ = __webpack_require__("./demo/app/samples/common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__samples_adapter_component__ = __webpack_require__("./demo/app/samples/adapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__samples_common_basic_component__ = __webpack_require__("./demo/app/samples/common/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__samples_common_buffer_size_component__ = __webpack_require__("./demo/app/samples/common/buffer-size.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__samples_common_padding_component__ = __webpack_require__("./demo/app/samples/common/padding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__samples_common_start_index_component__ = __webpack_require__("./demo/app/samples/common/start-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__samples_common_infinite_component__ = __webpack_require__("./demo/app/samples/common/infinite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__samples_common_horizontal_component__ = __webpack_require__("./demo/app/samples/common/horizontal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__samples_common_different_heights_component__ = __webpack_require__("./demo/app/samples/common/different-heights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__samples_common_window_viewport_component__ = __webpack_require__("./demo/app/samples/common/window-viewport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__samples_adapter_reload_component__ = __webpack_require__("./demo/app/samples/adapter/reload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__samples_adapter_is_loading_component__ = __webpack_require__("./demo/app/samples/adapter/is-loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__samples_window_component__ = __webpack_require__("./demo/app/samples/window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__samples_test_component__ = __webpack_require__("./demo/app/samples/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing_module__ = __webpack_require__("./demo/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // from 'ngx-ui-scroll';


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__samples_common_component__["a" /* CommonComponent */],
                __WEBPACK_IMPORTED_MODULE_9__samples_adapter_component__["a" /* AdapterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__samples_common_basic_component__["a" /* DemoBasicComponent */],
                __WEBPACK_IMPORTED_MODULE_11__samples_common_buffer_size_component__["a" /* DemoBufferSizeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__samples_common_padding_component__["a" /* DemoPaddingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__samples_common_start_index_component__["a" /* DemoStartIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_14__samples_common_infinite_component__["a" /* DemoInfiniteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__samples_common_horizontal_component__["a" /* DemoHorizontalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__samples_common_different_heights_component__["a" /* DemoDifferentHeightsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__samples_common_window_viewport_component__["a" /* DemoWindowViewportComponent */],
                __WEBPACK_IMPORTED_MODULE_18__samples_adapter_reload_component__["a" /* DemoReloadComponent */],
                __WEBPACK_IMPORTED_MODULE_19__samples_adapter_is_loading_component__["a" /* DemoIsLoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__samples_window_component__["a" /* WindowComponent */],
                __WEBPACK_IMPORTED_MODULE_21__samples_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_21__samples_test_component__["b" /* TestInnerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__public_api__["b" /* UiScrollModule */],
                __WEBPACK_IMPORTED_MODULE_22__app_routing_module__["a" /* AppRoutingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/app/samples/adapter.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo-reload></app-demo-reload>\n<app-demo-is-loading></app-demo-is-loading>\n"

/***/ }),

/***/ "./demo/app/samples/adapter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdapterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdapterComponent = /** @class */ (function () {
    function AdapterComponent() {
    }
    AdapterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-samples-adapter',
            template: __webpack_require__("./demo/app/samples/adapter.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AdapterComponent);
    return AdapterComponent;
}());



/***/ }),

/***/ "./demo/app/samples/adapter/is-loading.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\n  [datasource]=\"datasource\"\n  [context]=\"demoContext\"\n  [sources]=\"sources\"\n>\n  <div actions>\n    The uiScroll is {{datasource.adapter.isLoading ? 'loading': 'relaxing'}}.\n  </div>\n  <div description>\n    <p>\n      The <em>uiScroll Adapter</em> has some read-only properties which could be used to get knowledge of the\n      <em>uiScroll</em> state. The first property is <em>Adapter.isLoading</em>. It is a boolean value\n      indicating whether there are any pending load requests. So, <em>datasource.adapter.isLoading = true</em>\n      means that the <em>uiScroll</em> is working right now and the viewport will be updated soon. 125ms delay\n      was added to the <em>Datasource.get</em> implementation in this sample.\n    </p>\n    <p>\n      In these demos the <em>Datasource</em> is being instantiated via operator <em>new</em>. The main purpose is\n      to protect <em>Adapter</em> methods/properties from too early calls. The augmentation of the\n      <em>Datasource</em> object occurs during the <em>uiScroll</em> instantiating, so providing the object\n      initializer into the <em>*uiScroll</em> directive (<em>datasource: IDatasource = &#123; get: ... &#125;</em>)\n      may lead to problems. For example\n    </p>\n    <ul>\n      <li>\n        <em>TypeError: Cannot read property 'reload' of undefined</em> if you would try to call\n        <em>datasource.adapter.reload()</em> method on the App component's constructor;\n      </li>\n      <li>\n        <em>ERROR TypeError: Cannot read property 'isLoading' of undefined</em> if you would try to use\n        <em>&#123;<!---->&#123;datasource.adapter.isLoading&#125;<!---->&#125;</em> in the App component's\n        template.\n      </li>\n    </ul>\n    <p>\n      Of course the problem could be avoided by writing something like <em>datasource.adapter &&\n      datasource.adapter.isLoading</em>, but instantiating the <em>Datasource</em> object via operator <em>new</em>\n      solves the issue by immediately setting up the <em>Adapter mock object</em> on the <em>Datasource's</em>\n      constructor. It defines the adapter property and null-returning stub methods on it. The <em>uiScroll</em>\n      will override this adapter property after it is integrated to the App component.\n    </p>\n  </div>\n</app-demo>\n"

/***/ }),

/***/ "./demo/app/samples/adapter/is-loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoIsLoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_api__ = __webpack_require__("./public_api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
        this.datasource = new __WEBPACK_IMPORTED_MODULE_2__public_api__["a" /* Datasource */]({
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["a" /* datasourceGetCallbackInfinite */])(this.demoContext, 125)
        });
        this.sources = {
            datasource: "datasource = new Datasource ({\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    setTimeout(() => success(data), 125);\n  }\n});",
            template: "The uiScroll is {{datasource.adapter.isLoading ? 'loading': 'relaxing'}}.\n\n<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
        this.reloadIndex = 1;
    }
    DemoIsLoadingComponent.prototype.onInputChanged = function (target) {
        var value = parseInt(target.value, 10);
        if (isNaN(value)) {
            value = 1;
        }
        target.value = value;
        this.reloadIndex = value;
    };
    DemoIsLoadingComponent.prototype.doReload = function () {
        this.demoContext.count = 0;
        this.demoContext.log = '';
        this.datasource.adapter.reload(this.reloadIndex);
    };
    DemoIsLoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-is-loading',
            template: __webpack_require__("./demo/app/samples/adapter/is-loading.component.html")
        })
    ], DemoIsLoadingComponent);
    return DemoIsLoadingComponent;
}());



/***/ }),

/***/ "./demo/app/samples/adapter/reload.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\n  [datasource]=\"datasource\"\n  [context]=\"demoContext\"\n  [sources]=\"sources\"\n>\n  <div actions>\n    <button (click)=\"doReload()\">Reload</button>\n    &nbsp; by index &nbsp;\n    <input [ngModel]=\"reloadIndex\" (change)=\"onInputChanged($event.target)\" size=\"2\">\n  </div>\n\n  <div description>\n    <p>\n      The <em>uiScroll</em> augments the <em>Datasource</em> object passed from the outside during instantiating\n      to provide an API to manipulate and assess the scroller. This API is accessible via special <em>Adapter</em>\n      object. Currently it has only one method that allows you to reload the scroller:\n      <em>Adapter.reload(index)</em>. It resets the items buffer, resets the viewport params and starts\n      fetching items\n    </p>\n    <ul>\n      <li> from <em>index</em> position (if <em>reload</em> is called with parameter)</li>\n      <li> from <em>settings.startIndex</em> position (if <em>startIndex</em> setting is set)</li>\n      <li> from the default position which is 1 (if neither setting nor parameter is present)</li>\n    </ul>\n  </div>\n</app-demo>\n"

/***/ }),

/***/ "./demo/app/samples/adapter/reload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoReloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_api__ = __webpack_require__("./public_api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
        this.datasource = new __WEBPACK_IMPORTED_MODULE_2__public_api__["a" /* Datasource */]({
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["a" /* datasourceGetCallbackInfinite */])(this.demoContext)
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
        target.value = value;
        this.reloadIndex = value;
    };
    DemoReloadComponent.prototype.doReload = function () {
        this.demoContext.count = 0;
        this.demoContext.log = '';
        this.datasource.adapter.reload(this.reloadIndex);
    };
    DemoReloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-reload',
            template: __webpack_require__("./demo/app/samples/adapter/reload.component.html")
        })
    ], DemoReloadComponent);
    return DemoReloadComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo-basic></app-demo-basic>\n<app-demo-buffer-size></app-demo-buffer-size>\n<app-demo-padding></app-demo-padding>\n<app-demo-start-index></app-demo-start-index>\n<app-demo-infinite></app-demo-infinite>\n<app-demo-horizontal></app-demo-horizontal>\n<app-demo-different-heights></app-demo-different-heights>\n<app-demo-window-viewport></app-demo-window-viewport>\n"

/***/ }),

/***/ "./demo/app/samples/common.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonComponent = /** @class */ (function () {
    function CommonComponent() {
    }
    CommonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-samples-common',
            template: __webpack_require__("./demo/app/samples/common.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CommonComponent);
    return CommonComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\n  [datasource]=\"datasource\"\n  [context]=\"demoContext\"\n  [sources]=\"sources\"\n>\n  <div description>\n    <p>\n      As it follows from the documentation, a special <em>Datasource</em> object needs to be passed to the\n      <em>*uiScroll</em> directive. The basic ngx-ui-scroll example includes primitive callback-based\n      <em>Datasource.get</em> method implementation with no additional settings. The use of the <em>*uiScroll</em>\n      directive at the template layer is very similar to the use of <em>*ngFor</em> directive in the simplest case. In\n      addition to <em>Datasource</em>, a special viewport container is specified at the template. It defines the\n      scrollable area via <em>height</em> and <em>overflow</em> css properties.\n    </p>\n    <p>\n      <em>Datasource.get</em> log shows us that there are 4 requests of 5 items on the initial load (before\n      scrolling). So we have 20 DOM elements (4 * 5) initially. The number of DOM elements is not constant during\n      user scrolling, but it fluctuates around the initial value. Why do we get 5 items per each\n      <em>datasource.get</em> call? It is so because of default. We may change it via settings object and\n      <em>bufferSize</em> property.\n    </p>\n  </div>\n</app-demo>\n"

/***/ }),

/***/ "./demo/app/samples/common/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoBasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["a" /* datasourceGetCallbackInfinite */])(this.demoContext)
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const data = [];\n    for (let i = index; i <= index + count - 1; i++) {\n      data.push({ id: i, text: 'item #' + i });\n    }\n    success(data);\n  }\n}",
            template: "<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n    <div class=\"item\">{{item.text}}</div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    DemoBasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-basic',
            template: __webpack_require__("./demo/app/samples/common/basic.component.html")
        })
    ], DemoBasicComponent);
    return DemoBasicComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/buffer-size.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\n  [datasource]=\"datasource\"\n  [context]=\"demoContext\"\n  [sources]=\"sources\"\n>\n  <div description>\n    <p>\n      In addition to <em>get</em> method, <em>settings</em> object can be declared on the <em>Datasource</em>. Here\n      we set <em>bufferSize</em> property which defines number of items requested from the datasource in a single\n      request. Now the initial load consist of 2 requests (from 1 to 15 and from -14 to 0). The bigger the\n      <em>bufferSize</em> is, the less requests are needed to fill out the viewport. The default value of\n      <em>bufferSize</em> property is 5. The minimum value is 1. Another setting which has an impact on the\n      viewport's filling procedure is <em>padding</em>.\n    </p>\n  </div>\n</app-demo>\n"

/***/ }),

/***/ "./demo/app/samples/common/buffer-size.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoBufferSizeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["a" /* datasourceGetCallbackInfinite */])(this.demoContext),
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
    DemoBufferSizeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-buffer-size',
            template: __webpack_require__("./demo/app/samples/common/buffer-size.component.html")
        })
    ], DemoBufferSizeComponent);
    return DemoBufferSizeComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/different-heights.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\n  [datasource]=\"datasource\"\n  [context]=\"demoContext\"\n  [sources]=\"sources\"\n>\n  <div description>\n    <p>\n      Scroller works fine with different item heights. To make this sample more strict and to demonstrate the\n      scrollbar parameters' consistency the limited datasource is being used.\n    </p>\n  </div>\n</app-demo>\n"

/***/ }),

/***/ "./demo/app/samples/common/different-heights.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoDifferentHeightsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["b" /* datasourceGetCallbackLimited */])(this.demoContext, 1, 75)
        };
        this.sources = {
            datasource: "datasource: IDatasource = {\n  get: (index, count, success) => {\n    const MIN = 1, MAX = 75;\n    const data = [];\n    const start = Math.max(MIN, index);\n    const end = Math.min(index + count - 1, MAX);\n    if (start <= end) {\n      for (let i = start; i <= end; i++) {\n        data.push({ id: i, text: 'item #' + i, height: 20 + i });\n      }\n    }\n    success(data);\n  }\n}",
            template: "<div class=\"viewport\">\n  <div *uiScroll=\"let item of datasource\">\n     <div class=\"item\" [style.height]=\"item.height + 'px'\">\n      {{item.text}}\n     </div>\n  </div>\n</div>",
            styles: ".viewport {\n  width: 175px;\n  height: 175px;\n  overflow-y: auto;\n  overflow-anchor: none;\n}\n.item {\n  font-weight: bold;\n  height: 25px;\n}"
        };
    }
    DemoDifferentHeightsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-different-heights',
            template: __webpack_require__("./demo/app/samples/common/different-heights.component.html")
        })
    ], DemoDifferentHeightsComponent);
    return DemoDifferentHeightsComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\n  [datasource]=\"datasource\"\n  [context]=\"demoContext\"\n  [sources]=\"sources\"\n>\n  <div description>\n    <p>\n      Horizontal scrolling could be enabled via <em>horizontal</em> setting. The styles also need to be fixed in\n      accordance with horizontal scrolling. Currently we have some limitations at the template layer but\n      <em>display: inline-block;</em> rule applied to all nested containers makes the horizontal mode work.\n    </p>\n  </div>\n</app-demo>\n"

/***/ }),

/***/ "./demo/app/samples/common/horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoHorizontalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["a" /* datasourceGetCallbackInfinite */])(this.demoContext),
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
    DemoHorizontalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-horizontal',
            template: __webpack_require__("./demo/app/samples/common/horizontal.component.html")
        })
    ], DemoHorizontalComponent);
    return DemoHorizontalComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/infinite.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\n  [datasource]=\"datasource\"\n  [context]=\"demoContext\"\n  [sources]=\"sources\"\n>\n  <div description>\n    <p>\n      The <em>uiScroll</em> might work in the \"infinite\" mode, when items are never removed. This mode can\n      be turned on via <em>infinite</em> property of the <em>settings</em> object. Setting <em>infinite</em> to true,\n      we ask the scroller not to remove items that are getting out of the viewport. That's why the DOM elements\n      counter value is being increased per each edge-scroll event.\n    </p>\n  </div>\n</app-demo>\n"

/***/ }),

/***/ "./demo/app/samples/common/infinite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoInfiniteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["a" /* datasourceGetCallbackInfinite */])(this.demoContext),
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
    DemoInfiniteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-infinite',
            template: __webpack_require__("./demo/app/samples/common/infinite.component.html")
        })
    ], DemoInfiniteComponent);
    return DemoInfiniteComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/padding.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\n  [datasource]=\"datasource\"\n  [context]=\"demoContext\"\n  [sources]=\"sources\"\n>\n  <div description>\n    <p>\n      Here the <em>Datasource.get</em> is taken from previous samples, but the settings object is completed with\n      <em>padding</em> property. <em>Padding</em> is an extra space added to the visible part of the viewport for\n      the purpose of determining when the items should be created/destroyed. The value is relative to the visible\n      size of the viewport. <em>1.4</em> means that the <em>uiScroll</em> would request new items until\n      140% of the viewport size (out of the visible part of the viewport) is filled with rendered items. That's why\n      we have 5 requests on the initial load in this case. There are 3 downward requests:\n    </p>\n    <ol>\n      <li>175px + 1.4 * 175px = 420px (downward space which has to be filled, when viewport's height = 175px )</li>\n      <li>ceil(420px / 25px) = 17 (items that are needed to feel 420px of the downward space, when item's height =\n        25px )\n      </li>\n      <li>ceil(17 / 7) = 3 (datasource.get calls that are needed to request 17 items, when bufferSize = 7)</li>\n    </ol>\n    <p>\n      And 2 upward requests:\n    </p>\n    <ol>\n      <li>1.4 * 175px = 245px (upward space which have to be filled)</li>\n      <li>ceil(245px / 25px) = 10 (items that are needed to feel 245px of the upward space)</li>\n      <li>ceil(10 / 7) = 2 (datasource.get calls that are needed to request 10 items)</li>\n    </ol>\n    <p>\n      The default value of <em>padding</em> property is 0.5. The minimum value is 0.1.\n    </p>\n  </div>\n</app-demo>\n"

/***/ }),

/***/ "./demo/app/samples/common/padding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoPaddingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["a" /* datasourceGetCallbackInfinite */])(this.demoContext),
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
    DemoPaddingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-padding',
            template: __webpack_require__("./demo/app/samples/common/padding.component.html")
        })
    ], DemoPaddingComponent);
    return DemoPaddingComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/start-index.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\r\n  [datasource]=\"datasource\"\r\n  [context]=\"demoContext\"\r\n  [sources]=\"sources\"\r\n>\r\n  <div description>\r\n    <p>\r\n      What if I want to start the <em>uiScroll</em> from some specific position? It is possible via <em>startIndex</em>\r\n      setting which defines what item index the scroller will use to start the load process. The value has to be\r\n      an integer. It has no range limitations, but it must exist within the datasource boundaries in case the\r\n      <em>Datasource</em> is limited. The default value of <em>startIndex</em> setting is 1.\r\n    </p>\r\n  </div>\r\n</app-demo>\r\n"

/***/ }),

/***/ "./demo/app/samples/common/start-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoStartIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__ = __webpack_require__("./demo/app/shared/datasource-get.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
            get: Object(__WEBPACK_IMPORTED_MODULE_1__shared_datasource_get__["a" /* datasourceGetCallbackInfinite */])(this.demoContext),
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
    DemoStartIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-start-index',
            template: __webpack_require__("./demo/app/samples/common/start-index.component.html")
        })
    ], DemoStartIndexComponent);
    return DemoStartIndexComponent;
}());



/***/ }),

/***/ "./demo/app/samples/common/window-viewport.component.html":
/***/ (function(module, exports) {

module.exports = "<app-demo\r\n  [context]=\"demoContext\"\r\n  [sources]=\"sources\"\r\n>\r\n  <div actions>\r\n    Follow <a routerLink=\"/window\">this link</a> to open the Entire Window scrollable demo.\r\n  </div>\r\n\r\n  <div description>\r\n    <p>\r\n      The entire window might work as a Viewport if <em>windowViewport</em> setting is set to true.\r\n    </p>\r\n  </div>\r\n</app-demo>\r\n"

/***/ }),

/***/ "./demo/app/samples/common/window-viewport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoWindowViewportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    DemoWindowViewportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-window-viewport',
            template: __webpack_require__("./demo/app/samples/common/window-viewport.component.html")
        })
    ], DemoWindowViewportComponent);
    return DemoWindowViewportComponent;
}());



/***/ }),

/***/ "./demo/app/samples/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <input [(ngModel)]=\"reloadIndex\">\r\n  <button (click)=\"doReload()\">Reload</button>\r\n  <br><br>\r\n</div>\r\n\r\n<div class=\"viewport\" style=\"height: 600px\">\r\n  <!--<div style=\"height: 100px\">gap</div>-->\r\n  <div *uiScroll=\"let item of datasource\">\r\n    <app-samples-test-inner>{{item.text}}</app-samples-test-inner>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./demo/app/samples/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TestInnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MAX = 500;
var MIN = 1;
var TestInnerComponent = /** @class */ (function () {
    function TestInnerComponent() {
    }
    TestInnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-samples-test-inner',
            template: '<b><ng-content></ng-content></b>'
        }),
        __metadata("design:paramtypes", [])
    ], TestInnerComponent);
    return TestInnerComponent;
}());

var TestComponent = /** @class */ (function () {
    function TestComponent() {
        var _this = this;
        this.reloadIndex = 1;
        this.datasource = {
            get: function (index, count) {
                return _this.fetchData(index, count);
            },
            settings: {
                bufferSize: 20
            },
            devSettings: {
                debug: true
            }
        };
        this.data = [];
        for (var i = 0; i <= MAX - MIN; i++) {
            this.data.push({
                id: i + MIN,
                text: 'item #' + (i + MIN)
            });
        }
    }
    TestComponent.prototype.doReload = function () {
        // this.data.forEach(item => item.text += '+');
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
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            // setTimeout(() => observer.next(data), 500);
            observer.next(data);
        });
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-samples-test',
            template: __webpack_require__("./demo/app/samples/test.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./demo/app/samples/window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>Entire window scrolling demo</h1>\n  <a class=\"navbar-link\" routerLink=\"/\">Home</a>\n</div>\n\n<div *ngIf=\"init\">\n  <div *uiScroll=\"let item of datasource\">\n    <b>{{item.text}}</b>\n  </div>\n</div>\n"

/***/ }),

/***/ "./demo/app/samples/window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
    WindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-samples-window',
            template: __webpack_require__("./demo/app/samples/window.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WindowComponent);
    return WindowComponent;
}());



/***/ }),

/***/ "./demo/app/shared/datasource-get.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export datasourceGetInfinite */
/* unused harmony export datasourceGetLimited */
/* unused harmony export datasourceGetObservableInfinite */
/* unused harmony export datasourceGetPromiseInfinite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datasourceGetCallbackInfinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return datasourceGetCallbackLimited; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");

var delayedCall = function (result, callback, delay) {
    if (isNaN(Number(delay))) {
        callback(result);
    }
    else {
        setTimeout(function () { return callback(result); }, Number(delay));
    }
};
var doLog = function (demoContext, index, count, resolved) {
    return demoContext.log =
        ++demoContext.count + ") got " + resolved + " items [" + index + ", " + (index + count - 1) + "]\n"
            + demoContext.log;
};
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
    return function (index, count) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].create(function (observer) {
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

/***/ "./demo/app/shared/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\r\n\r\n  <h3 id=\"{{context.titleId}}\">\r\n    {{context.title}}\r\n    <a href=\"#/{{context.scope}}#{{context.titleId}}\">#</a>\r\n  </h3>\r\n\r\n  <div class=\"actions\">\r\n    <ng-content select=\"[actions]\"></ng-content>\r\n  </div>\r\n\r\n  <div class=\"work\" *ngIf=\"!context.noWorkView\">\r\n    <div style=\"float: left\">\r\n      <div class=\"viewport {{context.addClass || ''}}\" id=\"{{context.viewportId}}\">\r\n        <div *uiScroll=\"let item of datasource\">\r\n          <div\r\n            class=\"item {{context.addClass || ''}}\"\r\n            [style.height]=\"item.height !== undefined ? item.height + 'px' : null\"\r\n          >{{item.text}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"log elements {{context.addClass || ''}}\">\r\n      DOM elements\r\n      <pre>{{elements(context.viewportId)}}</pre>\r\n    </div>\r\n    <div class=\"log datasource {{context.addClass || ''}}\">\r\n      Datasource.get log\r\n      <pre>{{context.log}}</pre>\r\n    </div>\r\n    <div class=\"clearfix mb-3\"></div>\r\n  </div>\r\n\r\n  <div class=\"sources\">\r\n    <tabset>\r\n      <tab heading=\"Component\">\r\n        <pre class=\"prettyprint\">{{sources.datasource}}</pre>\r\n      </tab>\r\n      <tab heading=\"Template\">\r\n        <pre class=\"prettyprint lang-html\">{{sources.template}}</pre>\r\n      </tab>\r\n      <tab heading=\"CSS\">\r\n        <pre class=\"prettyprint\">{{sources.styles}}</pre>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n\r\n  <div class=\"description\">\r\n    <ng-content select=\"[description]\"></ng-content>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./demo/app/shared/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_api__ = __webpack_require__("./public_api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__public_api__["a" /* Datasource */])
    ], DemoComponent.prototype, "datasource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DemoComponent.prototype, "context", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DemoComponent.prototype, "sources", void 0);
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo',
            template: __webpack_require__("./demo/app/shared/demo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./demo/app/shared/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg  navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a href=\"https://github.com/dhilt/ngx-ui-scroll\" class=\"github-corner\" aria-label=\"View source on Github\">\r\n      <svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\"\r\n           style=\"fill:#fff; color:#343a40; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);\"\r\n           aria-hidden=\"true\">\r\n        <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\r\n        <path\r\n          d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\"\r\n          fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path>\r\n        <path\r\n          d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\"\r\n          fill=\"currentColor\" class=\"octo-body\"></path>\r\n      </svg>\r\n    </a>\r\n    <style>.github-corner:hover .octo-arm {\r\n      animation: octocat-wave 560ms ease-in-out\r\n    }\r\n\r\n    @keyframes octocat-wave {\r\n      0%, 100% {\r\n        transform: rotate(0)\r\n      }\r\n      20%, 60% {\r\n        transform: rotate(-25deg)\r\n      }\r\n      40%, 80% {\r\n        transform: rotate(10deg)\r\n      }\r\n    }\r\n\r\n    @media (max-width: 500px) {\r\n      .github-corner:hover .octo-arm {\r\n        animation: none\r\n      }\r\n\r\n      .github-corner .octo-arm {\r\n        animation: octocat-wave 560ms ease-in-out\r\n      }\r\n    }</style>\r\n    <div class=\"mr-auto ml-2 ml-lg-0\">\r\n    <a class=\"navbar-brand\" href=\"https://github.com/dhilt/ngx-ui-scroll\">ngx-ui-scroll</a>\r\n    <a class=\"navbar-link\" routerLink=\"/\">Common</a>\r\n    <a class=\"navbar-link\" routerLink=\"/adapter\">Adapter</a>\r\n  </div>\r\n    <br>\r\n    <span class=\"copyrights\">\r\n      2018 &copy; <a href=\"https://github.com/dhilt\">dhilt</a>, <a href=\"http://www.hill30.com/\">Hill30 Inc</a>\r\n    </span>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./demo/app/shared/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./demo/app/shared/nav.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./demo/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./demo/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./demo/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./demo/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ui_scroll_module__ = __webpack_require__("./src/ui-scroll.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ui_scroll_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_component_classes_datasource__ = __webpack_require__("./src/component/classes/datasource.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_component_classes_datasource__["a"]; });




/***/ }),

/***/ "./src/component/classes/adapter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var Adapter = /** @class */ (function () {
    function Adapter(callWorkflow) {
        this.isInitialized = true;
        this.callWorkflow = callWorkflow;
    }
    Adapter.prototype.reload = function (reloadIndex) {
        this.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].reload,
            status: 'start',
            payload: reloadIndex
        });
    };
    return Adapter;
}());



/***/ }),

/***/ "./src/component/classes/buffer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Index */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buffer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache__ = __webpack_require__("./src/component/classes/cache.ts");



var Index = /** @class */ (function () {
    function Index() {
        this.forward = null;
        this.backward = null;
    }
    Index.prototype.reset = function () {
        this.backward = null;
        this.forward = null;
    };
    return Index;
}());

var Buffer = /** @class */ (function () {
    function Buffer() {
        this.$items = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.lastIndex = new Index();
        this.cache = new __WEBPACK_IMPORTED_MODULE_2__cache__["a" /* Cache */]();
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
        this.lastIndex[__WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].backward] = this.items[0].$index;
        this.lastIndex[__WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].forward] = this.items[this.items.length - 1].$index;
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
        return direction === (!opposite ? __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].forward : __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].backward) ?
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
        return direction === (!opposite ? __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].forward : __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].backward) ?
            this.getLastVisibleItem() : this.getFirstVisibleItem();
    };
    return Buffer;
}());



/***/ }),

/***/ "./src/component/classes/cache.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ItemCache */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cache; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ClipByDirection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipModel; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datasource; });
var Datasource = /** @class */ (function () {
    function Datasource(datasource) {
        Object.assign(this, datasource);
        // set up mock adapter
        this.adapter = {
            isInitialized: false,
            isLoading: false,
            reload: function () { return null; }
        };
    }
    return Datasource;
}());



/***/ }),

/***/ "./src/component/classes/domRoutines.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routines; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_direction__ = __webpack_require__("./src/component/interfaces/direction.ts");

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
        return parseInt(element.style[this.horizontal ? 'width' : 'height'], 10) || 0;
    };
    Routines.prototype.setSizeStyle = function (element, value) {
        element.style[this.horizontal ? 'width' : 'height'] = value + "px";
    };
    Routines.prototype.getRectEdge = function (params, direction, opposite) {
        var forward = !opposite ? __WEBPACK_IMPORTED_MODULE_0__interfaces_direction__["a" /* Direction */].forward : __WEBPACK_IMPORTED_MODULE_0__interfaces_direction__["a" /* Direction */].backward;
        return params[direction === forward ? (this.horizontal ? 'right' : 'bottom') : (this.horizontal ? 'left' : 'top')];
    };
    Routines.prototype.getEdge = function (element, direction, opposite) {
        var params = this.getParams(element);
        return this.getRectEdge(params, direction, opposite);
    };
    Routines.prototype.getEdge2 = function (element, direction, relativeElement, opposite) {
        // vertical only ?
        return element.offsetTop - (relativeElement ? relativeElement.scrollTop : 0) +
            (direction === (!opposite ? __WEBPACK_IMPORTED_MODULE_0__interfaces_direction__["a" /* Direction */].forward : __WEBPACK_IMPORTED_MODULE_0__interfaces_direction__["a" /* Direction */].backward) ? this.getSize(element) : 0);
    };
    Routines.prototype.hideElement = function (element) {
        element.style.display = 'none';
    };
    return Routines;
}());



/***/ }),

/***/ "./src/component/classes/fetch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FetchByDirection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchModel; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Padding; });
var Padding = /** @class */ (function () {
    function Padding(element, direction, routines, initialSize) {
        this.element = null;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");


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
        if (this.workflow.scroller.adapter.isLoading) {
            if (!this.endSubscription) {
                this.endSubscription = this.workflow.process$.pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* filter */])(function (data) { return data.process === __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["b" /* Process */].end && data.status === 'done'; })).subscribe(function () {
                    _this.endSubscription.unsubscribe();
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
    ScrollHelper.prototype.processScroll = function () {
        if (this.endSubscription) {
            this.endSubscription.unsubscribe();
            this.endSubscription = null;
        }
        if (this.scrollTimer) {
            clearTimeout(this.scrollTimer);
            this.scrollTimer = null;
        }
        this.workflow.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["b" /* Process */].scroll,
            status: 'next'
        });
    };
    return ScrollHelper;
}());



/***/ }),

/***/ "./src/component/classes/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultSettings */
/* unused harmony export minSettings */
/* unused harmony export defaultDevSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__("./src/component/utils/index.ts");

var defaultSettings = {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* assignSettings */])(this, settings, defaultSettings, minSettings);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetch__ = __webpack_require__("./src/component/classes/fetch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip__ = __webpack_require__("./src/component/classes/clip.ts");



var State = /** @class */ (function () {
    function State() {
        this.isInitial = false;
        this.cycleCount = 0;
        this.countDone = 0;
        this.fetch = new __WEBPACK_IMPORTED_MODULE_1__fetch__["a" /* FetchModel */]();
        this.clip = new __WEBPACK_IMPORTED_MODULE_2__clip__["a" /* ClipModel */]();
        this.setPreviousClip(true);
    }
    State.prototype.startCycle = function (options) {
        if (options === void 0) { options = {}; }
        this.pending = true;
        this.cycleCount++;
        this.process = __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].start;
        this.direction = options.direction;
        this.scroll = options.scroll || false;
        this.fetch.reset();
        this.clip.reset();
        this.reload = false;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ViewportPadding */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viewport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__padding__ = __webpack_require__("./src/component/classes/padding.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");


var ViewportPadding = /** @class */ (function () {
    function ViewportPadding(element, routines, settings) {
        this.forward = new __WEBPACK_IMPORTED_MODULE_0__padding__["a" /* Padding */](element, __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].forward, routines, settings.paddingForwardSize);
        this.backward = new __WEBPACK_IMPORTED_MODULE_0__padding__["a" /* Padding */](element, __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].backward, routines, settings.paddingBackwardSize);
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
            this.scrollable = this.element.ownerDocument.scrollingElement;
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
    Viewport.prototype.getLimit = function (direction, opposite) {
        return this.getEdge(direction, opposite) +
            (direction === (!opposite ? __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].forward : __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["a" /* Direction */].backward) ? 1 : -1) * this.getBufferPadding();
    };
    return Viewport;
}());



/***/ }),

/***/ "./src/component/interfaces/adapter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AdapterActionType */
var AdapterActionType;
(function (AdapterActionType) {
    AdapterActionType["reload"] = "reload";
})(AdapterActionType || (AdapterActionType = {}));


/***/ }),

/***/ "./src/component/interfaces/direction.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
var Direction;
(function (Direction) {
    Direction["forward"] = "forward";
    Direction["backward"] = "backward";
})(Direction || (Direction = {}));


/***/ }),

/***/ "./src/component/interfaces/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__("./src/component/interfaces/adapter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__direction__ = __webpack_require__("./src/component/interfaces/direction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process__ = __webpack_require__("./src/component/interfaces/process.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__direction__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__process__["a"]; });
/* unused harmony reexport AdapterActionType */






/***/ }),

/***/ "./src/component/interfaces/process.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Process; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var Clip = /** @class */ (function () {
    function Clip() {
    }
    Clip.run = function (scroller) {
        scroller.state.process = __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].clip;
        Clip.runByDirection(__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward, scroller);
        Clip.runByDirection(__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward, scroller);
        Clip.processBuffer(scroller);
        scroller.cycleSubscriptions.push(scroller.bindData().subscribe(function () {
            Clip.processClip(scroller);
            scroller.callWorkflow({
                process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].clip,
                status: 'next'
            });
        }));
    };
    Clip.runByDirection = function (direction, scroller) {
        if (!scroller.state.clip[direction].shouldClip) {
            return;
        }
        var opposite = direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward ? __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward : __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward;
        scroller.viewport.padding[opposite].size += scroller.state.clip[direction].size;
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
        if (!scroller.state.clip[__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward].shouldClip) {
            scroller.buffer.bof = false;
        }
        if (!scroller.state.clip[__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward].shouldClip) {
            scroller.buffer.eof = false;
        }
    };
    return Clip;
}());
/* harmony default export */ __webpack_exports__["a"] = (Clip);


/***/ }),

/***/ "./src/component/processes/end.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var End = /** @class */ (function () {
    function End() {
    }
    End.run = function (scroller, isFail) {
        scroller.state.endCycle();
        scroller.adapter.isLoading = false;
        scroller.purgeCycleSubscriptions();
        scroller.finalize();
        var next;
        var logData = scroller.settings.instanceIndex + "-" + scroller.state.cycleCount;
        if (isFail) {
            scroller.log("%c---=== Workflow " + logData + " fail", 'color: #006600;');
        }
        else {
            scroller.log("%c---=== Workflow " + logData + " done", 'color: #006600;');
            next = End.getNextRun(scroller);
        }
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].end,
            status: next ? 'next' : 'done',
            payload: next
        });
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
                direction: scroller.state.direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward ? __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward : __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward,
                scroll: false
            };
        }
        else if (scroller.state.isInitial) {
            scroller.state.isInitial = false;
            nextRun = {
                direction: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward,
                scroll: scroller.state.scroll || false
            };
        }
        return nextRun;
    };
    return End;
}());
/* harmony default export */ __webpack_exports__["a"] = (End);


/***/ }),

/***/ "./src/component/processes/fetch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");


var Fetch = /** @class */ (function () {
    function Fetch() {
    }
    Fetch.run = function (scroller) {
        scroller.state.process = __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["b" /* Process */].fetch;
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
            scroller.cycleSubscriptions.push(result.subscribe(function (data) { return Fetch.success(data, scroller); }, function (error) { return Fetch.success(error, scroller); }));
        }
    };
    Fetch.success = function (data, scroller) {
        var direction = scroller.state.direction;
        scroller.log("resolved " + data.length + " " + direction + " items " +
            ("(index = " + scroller.state.fetch[direction].startIndex + ", count = " + scroller.settings.bufferSize + ")"));
        scroller.state.fetch[direction].newItemsData = data;
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["b" /* Process */].fetch,
            status: 'next'
        });
    };
    Fetch.fail = function (error, scroller) {
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_1__interfaces_index__["b" /* Process */].fetch,
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
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].create(function (_observer) {
            observer = _observer;
        });
    };
    return Fetch;
}());
/* harmony default export */ __webpack_exports__["a"] = (Fetch);


/***/ }),

/***/ "./src/component/processes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__("./src/component/processes/init.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reload__ = __webpack_require__("./src/component/processes/reload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start__ = __webpack_require__("./src/component/processes/start.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preFetch__ = __webpack_require__("./src/component/processes/preFetch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fetch__ = __webpack_require__("./src/component/processes/fetch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postFetch__ = __webpack_require__("./src/component/processes/postFetch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__render__ = __webpack_require__("./src/component/processes/render.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postRender__ = __webpack_require__("./src/component/processes/postRender.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preClip__ = __webpack_require__("./src/component/processes/preClip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clip__ = __webpack_require__("./src/component/processes/clip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__end__ = __webpack_require__("./src/component/processes/end.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__init__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__reload__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__start__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__preFetch__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__fetch__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__postFetch__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__render__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__postRender__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__preClip__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__clip__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__end__["a"]; });














/***/ }),

/***/ "./src/component/processes/init.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var Init = /** @class */ (function () {
    function Init() {
    }
    Init.run = function (scroller, cyclesDone, isScroll) {
        var logData = scroller.settings.instanceIndex + "-" + (cyclesDone + 1);
        var logStyles = 'color: #0000aa; border: solid black 1px; border-width: 1px 0 0 1px; margin-left: -2px';
        scroller.log("%c   ~~~ WF Run " + logData + " STARTED ~~~  ", logStyles);
        scroller.state.isInitial = true;
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].init,
            status: 'next',
            payload: {
                direction: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward,
                scroll: !!isScroll
            }
        });
    };
    return Init;
}());
/* harmony default export */ __webpack_exports__["a"] = (Init);


/***/ }),

/***/ "./src/component/processes/postFetch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_item__ = __webpack_require__("./src/component/classes/item.ts");


var PostFetch = /** @class */ (function () {
    function PostFetch() {
    }
    PostFetch.run = function (scroller) {
        scroller.state.process = __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].postFetch;
        PostFetch.setEOF(scroller);
        var hasItems = PostFetch.setItems(scroller);
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].postFetch,
            status: hasItems ? 'next' : 'done'
        });
    };
    PostFetch.setEOF = function (scroller) {
        var direction = scroller.state.direction;
        var fetch = scroller.state.fetch[direction];
        var eof = direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward ? 'eof' : 'bof';
        scroller.buffer[eof] = fetch.newItemsData.length !== scroller.settings.bufferSize;
        if (direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward && scroller.buffer.bof) {
            fetch.startIndex += scroller.settings.bufferSize - fetch.newItemsData.length;
        }
    };
    PostFetch.setItems = function (scroller) {
        var direction = scroller.state.direction;
        var fetch = scroller.state.fetch[direction];
        if (!fetch.newItemsData.length) {
            return false;
        }
        fetch.items = fetch.newItemsData.map(function (item, index) {
            var $index = fetch.startIndex + index;
            var nodeId = String($index);
            return new __WEBPACK_IMPORTED_MODULE_1__classes_item__["a" /* Item */]($index, item, nodeId, scroller.routines);
        });
        if (direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward) {
            scroller.buffer.items = scroller.buffer.items.concat(fetch.items);
        }
        else {
            scroller.buffer.items = fetch.items.concat(scroller.buffer.items);
        }
        return true;
    };
    return PostFetch;
}());
/* harmony default export */ __webpack_exports__["a"] = (PostFetch);


/***/ }),

/***/ "./src/component/processes/postRender.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var PostRender = /** @class */ (function () {
    function PostRender() {
    }
    PostRender.run = function (scroller) {
        scroller.state.process = __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].postRender;
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
        var height = Math.round(Math.abs(items[0].getEdge(__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward) - items[items.length - 1].getEdge(__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward)));
        var syntheticScrollPosition = null;
        if (direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward) {
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
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].postRender,
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
        var paddingForward = scroller.viewport.padding[__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward];
        var _paddingSize = paddingForward.size || 0;
        paddingForward.size = Math.max(_paddingSize - size, 0);
    };
    PostRender.runBackward = function (scroller, size) {
        var viewport = scroller.viewport;
        var _scrollPosition = viewport.scrollPosition;
        var paddingBackward = viewport.padding[__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward];
        var paddingForward = viewport.padding[__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward];
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
/* harmony default export */ __webpack_exports__["a"] = (PostRender);


/***/ }),

/***/ "./src/component/processes/preClip.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var PreClip = /** @class */ (function () {
    function PreClip() {
    }
    PreClip.run = function (scroller) {
        scroller.state.process = __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].preClip;
        var shouldNotClip = scroller.settings.infinite ||
            !scroller.buffer.size ||
            (scroller.settings.clipAfterScrollOnly && !scroller.state.scroll);
        if (!shouldNotClip) {
            var afterFetch = scroller.settings.clipAfterFetchOnly;
            if (!afterFetch || scroller.state.fetch[__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward].shouldFetch) {
                PreClip.shouldClipByDirection(__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward, scroller);
            }
            if (!afterFetch || scroller.state.fetch[__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward].shouldFetch) {
                PreClip.shouldClipByDirection(__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward, scroller);
            }
            shouldNotClip = !scroller.state.clip.shouldClip;
        }
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].preClip,
            status: !shouldNotClip ? 'next' : 'done'
        });
    };
    PreClip.shouldClipByDirection = function (direction, scroller) {
        var items = scroller.buffer.items;
        var forward = direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward;
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
            scroller.state.clip[direction].size = items[end].getEdge(__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward) - items[start].getEdge(__WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward);
            scroller.state.clip[direction].items = itemsToRemove;
        }
    };
    return PreClip;
}());
/* harmony default export */ __webpack_exports__["a"] = (PreClip);


/***/ }),

/***/ "./src/component/processes/preFetch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var PreFetch = /** @class */ (function () {
    function PreFetch() {
    }
    PreFetch.run = function (scroller) {
        scroller.state.process = __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].preFetch;
        var direction = scroller.state.direction;
        var paddingEdge = scroller.viewport.padding[direction].getEdge();
        var limit = scroller.viewport.getLimit(direction);
        scroller.state.fetch[direction].shouldFetch = PreFetch.checkEOF(scroller) ? false :
            (direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward) ? paddingEdge < limit : paddingEdge > limit;
        var shouldFetch = scroller.state.fetch[direction].shouldFetch;
        if (shouldFetch) {
            PreFetch.setStartIndex(scroller);
            PreFetch.processPreviousClip(scroller);
        }
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].preFetch,
            status: shouldFetch ? 'next' : 'done'
        });
    };
    PreFetch.checkEOF = function (scroller) {
        return (scroller.state.direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward && scroller.buffer.eof) ||
            (scroller.state.direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward && scroller.buffer.bof);
    };
    PreFetch.setStartIndex = function (scroller) {
        var direction = scroller.state.direction;
        var forward = direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward;
        var back = -scroller.settings.bufferSize;
        var start;
        if (scroller.buffer.lastIndex[direction] === null) {
            start = scroller.settings.currentStartIndex + (forward ? 0 : back);
        }
        else {
            start = scroller.buffer.lastIndex[direction] + (forward ? 1 : back);
        }
        scroller.state.fetch[direction].startIndex = start;
    };
    PreFetch.processPreviousClip = function (scroller) {
        var previousClip = scroller.state.previousClip;
        if (!previousClip.isSet) {
            return;
        }
        var direction = scroller.state.direction;
        var forward = direction === __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward;
        var opposite = forward ? __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].backward : __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward;
        var clipSize = previousClip[opposite + "Size"];
        if (clipSize && previousClip.direction !== scroller.state.direction) {
            scroller.viewport.padding[direction].size -= clipSize;
            scroller.viewport.padding[opposite].size += clipSize;
            if (!forward) {
                scroller.buffer.lastIndex[opposite] = scroller.buffer.lastIndex[direction] - 1;
            }
            else {
                scroller.buffer.lastIndex[direction] = scroller.buffer.lastIndex[opposite];
            }
        }
        scroller.state.setPreviousClip(true);
    };
    return PreFetch;
}());
/* harmony default export */ __webpack_exports__["a"] = (PreFetch);


/***/ }),

/***/ "./src/component/processes/reload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var Reload = /** @class */ (function () {
    function Reload() {
    }
    Reload.run = function (scroller, reloadIndex) {
        var scrollPosition = scroller.viewport.scrollPosition;
        scroller.buffer.reset(true);
        scroller.viewport.reset();
        scroller.viewport.syntheticScrollPosition = scrollPosition > 0 ? 0 : null;
        scroller.state.direction = null;
        scroller.purgeCycleSubscriptions();
        scroller.purgeScrollDelaySubscription();
        scroller.settings.setCurrentStartIndex(reloadIndex);
        // todo: do we need to emit Process.end before?
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].reload,
            status: 'next'
        });
    };
    return Reload;
}());
/* harmony default export */ __webpack_exports__["a"] = (Reload);


/***/ }),

/***/ "./src/component/processes/render.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var Render = /** @class */ (function () {
    function Render() {
    }
    Render.run = function (scroller) {
        scroller.state.process = __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].render;
        scroller.cycleSubscriptions.push(scroller.bindData().subscribe(function () {
            if (Render.setElements(scroller)) {
                scroller.callWorkflow({
                    process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].render,
                    status: 'next'
                });
            }
            else {
                scroller.callWorkflow({
                    process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].render,
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
/* harmony default export */ __webpack_exports__["a"] = (Render);


/***/ }),

/***/ "./src/component/processes/start.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");

var Start = /** @class */ (function () {
    function Start() {
    }
    Start.run = function (scroller, options) {
        if (options === void 0) { options = {}; }
        if (!options.direction) {
            options.direction = scroller.state.direction || __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["a" /* Direction */].forward;
        }
        scroller.state.startCycle(options);
        scroller.adapter.isLoading = true;
        var logData = scroller.settings.instanceIndex + "-" + scroller.state.cycleCount;
        scroller.log("%c---=== Workflow " + logData + " start", 'color: #006600;', options);
        scroller.callWorkflow({
            process: __WEBPACK_IMPORTED_MODULE_0__interfaces_index__["b" /* Process */].start,
            status: 'next'
        });
    };
    return Start;
}());
/* harmony default export */ __webpack_exports__["a"] = (Start);


/***/ }),

/***/ "./src/component/scroller.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scroller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_settings__ = __webpack_require__("./src/component/classes/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_domRoutines__ = __webpack_require__("./src/component/classes/domRoutines.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_viewport__ = __webpack_require__("./src/component/classes/viewport.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_buffer__ = __webpack_require__("./src/component/classes/buffer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_state__ = __webpack_require__("./src/component/classes/state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_adapter__ = __webpack_require__("./src/component/classes/adapter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_index__ = __webpack_require__("./src/component/utils/index.ts");








var instanceCount = 0;
var Scroller = /** @class */ (function () {
    function Scroller(context, callWorkflow) {
        this.logs = [];
        // this._bindData = () => context.changeDetector.markForCheck();
        this._bindData = function () { return context.changeDetector.detectChanges(); };
        this.datasource = Object(__WEBPACK_IMPORTED_MODULE_7__utils_index__["b" /* checkDatasource */])(context.datasource);
        this.callWorkflow = callWorkflow;
        this.settings = new __WEBPACK_IMPORTED_MODULE_1__classes_settings__["a" /* Settings */](context.datasource.settings, context.datasource.devSettings, ++instanceCount);
        this.routines = new __WEBPACK_IMPORTED_MODULE_2__classes_domRoutines__["a" /* Routines */](this.settings);
        this.viewport = new __WEBPACK_IMPORTED_MODULE_3__classes_viewport__["a" /* Viewport */](context.elementRef, this.settings, this.routines);
        this.buffer = new __WEBPACK_IMPORTED_MODULE_4__classes_buffer__["a" /* Buffer */]();
        this.state = new __WEBPACK_IMPORTED_MODULE_5__classes_state__["a" /* State */]();
        this.adapter = new __WEBPACK_IMPORTED_MODULE_6__classes_adapter__["a" /* Adapter */](this.callWorkflow);
        this.datasource.adapter = this.adapter;
        this.cycleSubscriptions = [];
    }
    Scroller.prototype.bindData = function () {
        this._bindData();
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            setTimeout(function () {
                observer.next();
                observer.complete();
            });
        });
    };
    Scroller.prototype.purgeCycleSubscriptions = function () {
        this.cycleSubscriptions.forEach(function (item) { return item.unsubscribe(); });
        this.cycleSubscriptions = [];
    };
    Scroller.prototype.purgeScrollDelaySubscription = function () {
        if (this.scrollDelaySubscription && !this.scrollDelaySubscription.closed) {
            this.scrollDelaySubscription.unsubscribe();
        }
    };
    Scroller.prototype.dispose = function () {
        this.purgeCycleSubscriptions();
        this.purgeScrollDelaySubscription();
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assignSettings; });
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
var assignSettings = function (target, settings, defaults, minSettings) {
    Object.assign(target, defaults);
    if (typeof settings === 'undefined') {
        return;
    }
    if (typeof settings !== 'object') {
        console.warn('settings is not an object, fallback to the defaults');
        return;
    }
    assignNumeric(target, settings, 'startIndex', defaults);
    assignMinimalNumeric(target, settings, 'bufferSize', defaults, minSettings, true);
    assignMinimalNumeric(target, settings, 'padding', defaults, minSettings);
    assignBoolean(target, settings, 'infinite', defaults);
    assignBoolean(target, settings, 'horizontal', defaults);
    assignBoolean(target, settings, 'windowViewport', defaults);
};


/***/ }),

/***/ "./src/component/utils/checkDatasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkDatasource; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkDatasource__ = __webpack_require__("./src/component/utils/checkDatasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assignSettings__ = __webpack_require__("./src/component/utils/assignSettings.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__checkDatasource__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__assignSettings__["a"]; });





/***/ }),

/***/ "./src/component/workflow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workflow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroller__ = __webpack_require__("./src/component/scroller.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_scrollHelper__ = __webpack_require__("./src/component/classes/scrollHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_index__ = __webpack_require__("./src/component/interfaces/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__processes_index__ = __webpack_require__("./src/component/processes/index.ts");





var Workflow = /** @class */ (function () {
    function Workflow(context) {
        var _this = this;
        this.context = context;
        this.scroller = new __WEBPACK_IMPORTED_MODULE_1__scroller__["a" /* Scroller */](this.context, this.callWorkflow.bind(this));
        this.scrollHelper = new __WEBPACK_IMPORTED_MODULE_2__classes_scrollHelper__["a" /* ScrollHelper */](this);
        this.process$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            process: __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].init,
            status: 'start'
        });
        this.cyclesDone = 0;
        setTimeout(function () { return _this.initListeners(); });
    }
    Workflow.prototype.initListeners = function () {
        var _this = this;
        var scroller = this.scroller;
        this.itemsSubscription = scroller.buffer.$items.subscribe(function (items) { return _this.context.items = items; });
        this.workflowSubscription = this.process$.subscribe(this.process.bind(this));
        this.onScrollUnsubscribe = this.context.renderer.listen(scroller.viewport.scrollEventElement, 'scroll', this.scrollHelper.run.bind(this.scrollHelper));
    };
    Workflow.prototype.dispose = function () {
        this.onScrollUnsubscribe();
        this.itemsSubscription.unsubscribe();
        this.process$.complete();
        this.workflowSubscription.unsubscribe();
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
            __WEBPACK_IMPORTED_MODULE_4__processes_index__["b" /* End */].run(scroller, true);
            return;
        }
        switch (data.process) {
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].init:
                if (data.status === 'start') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["d" /* Init */].run(scroller, this.cyclesDone);
                }
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["k" /* Start */].run(scroller, data.payload);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].reload:
                if (data.status === 'start') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["i" /* Reload */].run(scroller, data.payload);
                }
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["d" /* Init */].run(scroller, this.cyclesDone);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].scroll:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["d" /* Init */].run(scroller, this.cyclesDone, true);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].start:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["h" /* PreFetch */].run(scroller);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].preFetch:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["c" /* Fetch */].run(scroller);
                }
                if (data.status === 'done') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["b" /* End */].run(scroller);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].fetch:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["e" /* PostFetch */].run(scroller);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].postFetch:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["j" /* Render */].run(scroller);
                }
                if (data.status === 'done') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["b" /* End */].run(scroller);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].render:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["f" /* PostRender */].run(scroller);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].postRender:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["g" /* PreClip */].run(scroller);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].preClip:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["a" /* Clip */].run(scroller);
                }
                if (data.status === 'done') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["b" /* End */].run(scroller);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].clip:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["b" /* End */].run(scroller);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_index__["b" /* Process */].end:
                if (data.status === 'next') {
                    __WEBPACK_IMPORTED_MODULE_4__processes_index__["k" /* Start */].run(scroller, data.payload);
                }
                if (data.status === 'done') {
                    this.done();
                }
                break;
        }
    };
    Workflow.prototype.done = function () {
        this.cyclesDone++;
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

/***/ "./src/ui-scroll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiScrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_workflow__ = __webpack_require__("./src/component/workflow.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiScrollComponent = /** @class */ (function () {
    function UiScrollComponent(changeDetector, elementRef, renderer) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    UiScrollComponent.prototype.ngOnInit = function () {
        this.workflow = new __WEBPACK_IMPORTED_MODULE_1__component_workflow__["a" /* Workflow */](this);
    };
    UiScrollComponent.prototype.ngOnDestroy = function () {
        this.workflow.dispose();
    };
    UiScrollComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[ui-scroll]',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "<div data-padding-backward></div><div\n  *ngFor=\"let item of items\"\n  [attr.data-sid]=\"item.nodeId\"\n  [style.position]=\"item.invisible ? 'fixed' : null\"\n  [style.left]=\"item.invisible ? '-99999px' : null\"\n><ng-template\n  [ngTemplateOutlet]=\"template\"\n  [ngTemplateOutletContext]=\"{\n    $implicit: item.data,\n    index: item.$index\n }\"\n></ng-template></div><div data-padding-forward></div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], UiScrollComponent);
    return UiScrollComponent;
}());



/***/ }),

/***/ "./src/ui-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_scroll_component__ = __webpack_require__("./src/ui-scroll.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        var compFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__ui_scroll_component__["a" /* UiScrollComponent */]);
        var componentRef = this.viewContainer.createComponent(compFactory, null, this.viewContainer.injector, [templateView.rootNodes]);
        componentRef.instance.datasource = this.datasource;
        componentRef.instance.template = this.templateRef;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UiScrollDirective.prototype, "uiScrollOf", null);
    UiScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({ selector: '[uiScroll][uiScrollOf]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], UiScrollDirective);
    return UiScrollDirective;
}());



/***/ }),

/***/ "./src/ui-scroll.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiScrollModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_scroll_component__ = __webpack_require__("./src/ui-scroll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_scroll_directive__ = __webpack_require__("./src/ui-scroll.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UiScrollModule = /** @class */ (function () {
    function UiScrollModule() {
    }
    UiScrollModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ui_scroll_component__["a" /* UiScrollComponent */],
                __WEBPACK_IMPORTED_MODULE_3__ui_scroll_directive__["a" /* UiScrollDirective */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__ui_scroll_component__["a" /* UiScrollComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__ui_scroll_directive__["a" /* UiScrollDirective */]],
            providers: []
        })
    ], UiScrollModule);
    return UiScrollModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./demo/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map