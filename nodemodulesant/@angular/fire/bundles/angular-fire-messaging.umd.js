(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('firebase/app'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/messaging', ['exports', '@angular/core', 'firebase/app', 'rxjs', 'rxjs/operators', '@angular/fire', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.messaging = {}), global.ng.core, global.firebase, global.rxjs, global.rxjs.operators, global.angular.fire, global.ng.common));
}(this, (function (exports, i0, firebase, rxjs, operators, i1, common) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var proxyPolyfillCompat = {
        deleteToken: null,
        getToken: null,
        onMessage: null,
        onBackgroundMessage: null,
        onTokenRefresh: null,
        requestPermission: null,
        setBackgroundMessageHandler: null,
        useServiceWorker: null,
        usePublicVapidKey: null,
    };

    var VAPID_KEY = new i0.InjectionToken('angularfire2.messaging.vapid-key');
    var SERVICE_WORKER = new i0.InjectionToken('angularfire2.messaging.service-worker-registeration');
    // SEMVER(7): drop
    var firebaseLTv8 = parseInt(firebase__default['default'].SDK_VERSION, 10) < 8;
    var AngularFireMessaging = /** @class */ (function () {
        function AngularFireMessaging(options, nameOrConfig, 
        // tslint:disable-next-line:ban-types
        platformId, zone, vapidKey, _serviceWorker) {
            var _this = this;
            var schedulers = new i1.ɵAngularFireSchedulers(zone);
            var serviceWorker = _serviceWorker;
            var messaging = rxjs.of(undefined).pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(function () { return common.isPlatformServer(platformId) ? rxjs.EMPTY : rxjs.of(undefined); }), operators.map(function () { return i1.ɵfirebaseAppFactory(options, zone, nameOrConfig); }), operators.switchMap(function (app) { return i1.ɵfetchInstance(app.name + ".messaging", 'AngularFireMessaging', app, function () { return __awaiter(_this, void 0, void 0, function () {
                var messaging, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            messaging = app.messaging();
                            if (!firebaseLTv8) return [3 /*break*/, 2];
                            if (vapidKey) {
                                messaging.usePublicVapidKey(vapidKey);
                            }
                            if (!serviceWorker) return [3 /*break*/, 2];
                            _b = (_a = messaging).useServiceWorker;
                            return [4 /*yield*/, serviceWorker];
                        case 1:
                            _b.apply(_a, [_c.sent()]);
                            _c.label = 2;
                        case 2: return [2 /*return*/, messaging];
                    }
                });
            }); }, [vapidKey, serviceWorker]); }), operators.shareReplay({ bufferSize: 1, refCount: false }));
            this.requestPermission = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), 
            // tslint:disable-next-line
            operators.switchMap(function (messaging) { return firebase__default['default'].messaging.isSupported() ? messaging.requestPermission() : rxjs.throwError('Not supported.'); }));
            this.getToken = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(function (messaging) { return __awaiter(_this, void 0, void 0, function () {
                var serviceWorkerRegistration, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(firebase__default['default'].messaging.isSupported() && Notification.permission === 'granted')) return [3 /*break*/, 8];
                            if (!firebaseLTv8) return [3 /*break*/, 2];
                            return [4 /*yield*/, messaging.getToken()];
                        case 1: return [2 /*return*/, _b.sent()];
                        case 2:
                            if (!serviceWorker) return [3 /*break*/, 4];
                            return [4 /*yield*/, serviceWorker];
                        case 3:
                            _a = _b.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            _a = null;
                            _b.label = 5;
                        case 5:
                            serviceWorkerRegistration = _a;
                            return [4 /*yield*/, messaging.getToken({ vapidKey: vapidKey, serviceWorkerRegistration: serviceWorkerRegistration })];
                        case 6: return [2 /*return*/, _b.sent()];
                        case 7: return [3 /*break*/, 9];
                        case 8: return [2 /*return*/, null];
                        case 9: return [2 /*return*/];
                    }
                });
            }); }));
            var notificationPermission$ = new rxjs.Observable(function (emitter) {
                navigator.permissions.query({ name: 'notifications' }).then(function (notificationPerm) {
                    notificationPerm.onchange = function () { return emitter.next(); };
                });
            });
            var tokenChange$ = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMapTo(notificationPermission$), operators.switchMapTo(this.getToken));
            this.tokenChanges = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(function () { return firebase__default['default'].messaging.isSupported() ? rxjs.concat(_this.getToken, tokenChange$) : rxjs.EMPTY; }));
            this.messages = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(function (messaging) { return firebase__default['default'].messaging.isSupported() ? new rxjs.Observable(function (emitter) { return messaging.onMessage(function (next) { return emitter.next(next); }, function (err) { return emitter.error(err); }, function () { return emitter.complete(); }); }) : rxjs.EMPTY; }));
            this.requestToken = rxjs.of(undefined).pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(function () { return _this.requestPermission; }), operators.catchError(function () { return rxjs.of(null); }), operators.mergeMap(function () { return _this.tokenChanges; }));
            // SEMVER(7): drop token
            this.deleteToken = function (token) { return messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(function (messaging) { return messaging.deleteToken(token || undefined); }), operators.defaultIfEmpty(false)); };
            return i1.ɵlazySDKProxy(this, messaging, zone);
        }
        return AngularFireMessaging;
    }());
    /** @nocollapse */ AngularFireMessaging.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function AngularFireMessaging_Factory() { return new AngularFireMessaging(i0__namespace.ɵɵinject(i1__namespace.FIREBASE_OPTIONS), i0__namespace.ɵɵinject(i1__namespace.FIREBASE_APP_NAME, 8), i0__namespace.ɵɵinject(i0__namespace.PLATFORM_ID), i0__namespace.ɵɵinject(i0__namespace.NgZone), i0__namespace.ɵɵinject(VAPID_KEY, 8), i0__namespace.ɵɵinject(SERVICE_WORKER, 8)); }, token: AngularFireMessaging, providedIn: "any" });
    AngularFireMessaging.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireMessaging.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: i0.NgZone },
        { type: String, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [VAPID_KEY,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [SERVICE_WORKER,] }] }
    ]; };
    i1.ɵapplyMixins(AngularFireMessaging, [proxyPolyfillCompat]);

    var AngularFireMessagingModule = /** @class */ (function () {
        function AngularFireMessagingModule() {
        }
        return AngularFireMessagingModule;
    }());
    AngularFireMessagingModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFireMessaging]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AngularFireMessaging = AngularFireMessaging;
    exports.AngularFireMessagingModule = AngularFireMessagingModule;
    exports.SERVICE_WORKER = SERVICE_WORKER;
    exports.VAPID_KEY = VAPID_KEY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-messaging.umd.js.map
