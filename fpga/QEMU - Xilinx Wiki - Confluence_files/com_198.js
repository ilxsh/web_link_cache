WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:mediaviewer-companion', location = '/mediaviewer/dist/index.js' */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ADCClient = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var ConnectionLifecycleError = (function () {
    function ConnectionLifecycleError(message) {
        this.message = message;
    }
    return ConnectionLifecycleError;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConnectionLifecycleError;

},{}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
var Emitter = require("events");
var Transaction_1 = require("./Transaction");
var ConnectionLifecycleError_1 = require("./ConnectionLifecycleError");
var FetchCodeError_1 = require("./FetchCodeError");
var ConstructibleClient = (function (_super) {
    __extends(ConstructibleClient, _super);
    function ConstructibleClient(wsPath, PORTS, asapFetcher, codeFetcher, parentClient) {
        var _this = _super.call(this) || this;
        _this.wsPath = wsPath;
        _this.PORTS = PORTS;
        _this.asapFetcher = asapFetcher;
        _this.codeFetcher = codeFetcher;
        _this.parentClient = parentClient;
        _this.requestID = 1;
        return _this;
    }
    ConstructibleClient.prototype.authenticateWs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.asapFetcher()];
                    case 1:
                        token = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var requestType;
                                var payload;
                                if (typeof token === 'string') {
                                    payload = {
                                        provider: 'jwt',
                                        payload: token,
                                    };
                                }
                                else {
                                    payload = token;
                                }
                                _this.send('authentication', payload, {}, function (response) { return __awaiter(_this, void 0, void 0, function () {
                                    var code, _a, _b, err_1, err_2;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                if (response.payload === 'ACCEPTED') {
                                                    return [2 /*return*/, resolve()];
                                                }
                                                if (!(response.type === 'BARRIER_RESPONSE' && response.payload === 'HAS_BARRIER')) return [3 /*break*/, 10];
                                                _c.label = 1;
                                            case 1:
                                                _c.trys.push([1, 9, , 10]);
                                                this.ws.close();
                                                delete this.ws;
                                                code = null;
                                                _c.label = 2;
                                            case 2:
                                                _c.trys.push([2, 4, , 5]);
                                                _a = parseInt;
                                                return [4 /*yield*/, this.codeFetcher()];
                                            case 3:
                                                code = _a.apply(void 0, [_c.sent(), 36]);
                                                return [3 /*break*/, 5];
                                            case 4:
                                                err_1 = _c.sent();
                                                return [3 /*break*/, 5];
                                            case 5:
                                                if (!code) return [3 /*break*/, 7];
                                                return [4 /*yield*/, this.connectToPort(code)];
                                            case 6:
                                                _c.sent();
                                                return [2 /*return*/, resolve()];
                                            case 7: return [2 /*return*/, reject(new FetchCodeError_1.default('Failed to get code from user'))];
                                            case 8: return [3 /*break*/, 10];
                                            case 9:
                                                err_2 = _c.sent();
                                                return [2 /*return*/, reject(err_2)];
                                            case 10:
                                                reject();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConstructibleClient.prototype.connectToPort = function (port) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var controller = _this._lastConnect;
            _this.ws = new WebSocket(_this.wsPath + ":" + port);
            var opened = false;
            _this.ws.onopen = function () { return __awaiter(_this, void 0, void 0, function () {
                var err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            opened = true;
                            this.parentClient.emit('authenticating');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.authenticateWs()];
                        case 2:
                            _a.sent();
                            this.parentClient.emit('authenticated');
                            resolve();
                            return [3 /*break*/, 4];
                        case 3:
                            err_3 = _a.sent();
                            if (err_3 instanceof FetchCodeError_1.default) {
                                controller.stop = true;
                            }
                            reject(err_3);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            _this.ws.onmessage = function (event) {
                var message = JSON.parse(event.data);
                if (!message.requestID) {
                    if (message.transactionID) {
                        _this.emit("transaction-" + message.transactionID, message);
                    }
                    return;
                }
                _this.emit("response-" + message.requestID, message);
            };
            _this.ws.onerror = function (event) {
                if (!opened) {
                    return reject();
                }
                _this.emit('error', event);
            };
            _this.ws.onclose = function (event) {
                if (!opened) {
                    return reject();
                }
                _this.parentClient.emit('close', event);
            };
        });
    };
    ConstructibleClient.prototype.connect = function (portsOverride) {
        return __awaiter(this, void 0, void 0, function () {
            var connected, resolver, rejecter, currentConnector, controller, _i, _a, port, err_4, err;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        connected = false;
                        if (!this._lastConnect) return [3 /*break*/, 3];
                        if (!(this._lastConnect.ports === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._lastConnect.awaiter];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        this._lastConnect.stop = true;
                        _b.label = 3;
                    case 3:
                        currentConnector = new Promise(function (resolve, reject) {
                            resolver = resolve;
                            rejecter = reject;
                        });
                        controller = { stop: false, awaiter: currentConnector, ports: 0 };
                        this._lastConnect = controller;
                        _i = 0, _a = portsOverride || this.PORTS;
                        _b.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 10];
                        port = _a[_i];
                        if (controller.stop) {
                            throw new ConnectionLifecycleError_1.default('Instructed to stop by connection lifecycle');
                        }
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.connectToPort(port)];
                    case 6:
                        _b.sent();
                        connected = true;
                        if (controller.stop) {
                            this.ws.close();
                            connected = false;
                        }
                        return [3 /*break*/, 10];
                    case 7:
                        err_4 = _b.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        controller.ports++;
                        _b.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 4];
                    case 10:
                        this.emit('connect-attempt-done');
                        this.parentClient.emit('connect-attempt-done');
                        delete this._lastConnect;
                        if (!connected) {
                            err = new Error('Failed to connect on any of the ADC ports');
                            rejecter(err);
                            throw err;
                        }
                        resolver();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConstructibleClient.prototype.disconnect = function () {
        if (this.ws) {
            this.ws.close();
        }
    };
    ConstructibleClient.prototype.isConnected = function () {
        return this.ws.readyState === this.ws.OPEN;
    };
    ConstructibleClient.prototype.startTransaction = function (type, resumeTransactionID) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transaction = new Transaction_1.default(this, type || 'null', resumeTransactionID);
                        return [4 /*yield*/, new Promise(function (resolve) { return transaction.on('ready', function () { return resolve(); }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, transaction];
                }
            });
        });
    };
    ConstructibleClient.prototype.send = function (type, payload, topLevelProps, cb) {
        if (typeof topLevelProps === 'function') {
            cb = topLevelProps;
            topLevelProps = {};
        }
        if (typeof cb !== 'function') {
            cb = function () { return null; };
        }
        if (!this.isConnected()) {
            throw new Error('Failed to send message, not connected');
        }
        this.ws.send(JSON.stringify(Object.assign({}, topLevelProps, {
            type: type,
            payload: payload,
            requestID: this.requestID,
        })));
        if (cb) {
            this.onResponse(this.requestID, cb);
        }
        this.requestID++;
    };
    ConstructibleClient.prototype.onResponse = function (requestID, cb) {
        this.on("response-" + requestID, cb);
    };
    return ConstructibleClient;
}(Emitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConstructibleClient;

},{"./ConnectionLifecycleError":1,"./FetchCodeError":3,"./Transaction":4,"events":8}],3:[function(require,module,exports){
"use strict";
var FetchCodeError = (function () {
    function FetchCodeError(message) {
        this.message = message;
    }
    return FetchCodeError;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FetchCodeError;

},{}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require("events");
var Transaction = (function (_super) {
    __extends(Transaction, _super);
    function Transaction(client, type, transactionID) {
        var _this = _super.call(this) || this;
        _this.client = client;
        _this.type = type;
        if (transactionID) {
            _this.id = transactionID;
        }
        _this.initialize();
        return _this;
    }
    Transaction.prototype.initialize = function () {
        var _this = this;
        this.client.send((this.getID() ? 'resume' : 'new') + "-transaction", { transactionType: this.type, transactionID: this.getID() }, function (_a) {
            var payload = _a.payload;
            _this.id = payload;
            _this.client.on("transaction-" + _this.getID(), function (message) {
                if (message.type === 'event') {
                    if (message.responseID) {
                        _this.emit(message.eventName, message.payload, function (response) {
                            _this.sendResponse(message.eventName, response, message.responseID, function () { return null; });
                        });
                    }
                    else {
                        _this.emit(message.eventName, message.payload);
                    }
                }
            });
            _this.emit('ready');
        });
    };
    Transaction.prototype.getID = function () {
        return this.id;
    };
    Transaction.prototype.send = function (type, payload, cb) {
        this.client.send(type, payload, { transactionID: this.getID() }, cb);
    };
    Transaction.prototype.sendResponse = function (type, payload, responseID, cb) {
        this.client.send(type, payload, { transactionID: this.getID(), responseID: responseID }, cb);
    };
    return Transaction;
}(events_1.EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transaction;

},{"events":8}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require("events");
var LIST_APPS = 'list-apps';
var LAUNCH_FILE_IN_APP = 'launch-file-in-app';
var CANCEL_FILE_LAUNCH = 'cancel-launch-file-in-app';
var LaunchedFile = (function (_super) {
    __extends(LaunchedFile, _super);
    function LaunchedFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LaunchedFile;
}(events_1.EventEmitter));
exports.cancelFileLaunch = function (transaction, file) {
    if (file.fileID) {
        transaction.send(CANCEL_FILE_LAUNCH, {
            fileID: file.fileID,
        });
    }
    else {
        file.on('file-download-start', function () { return exports.cancelFileLaunch(transaction, file); });
    }
};
exports.getAppsList = function (transaction, mimeType, extension) {
    return new Promise(function (resolve) {
        transaction.send(LIST_APPS, {
            mimeType: mimeType,
            extension: extension,
        }, function (response) {
            resolve(response.payload);
        });
    });
};
exports.launchFileInApp = function (transaction, remoteURL, fileName, applicationID, submitChangesURL) {
    var file = new LaunchedFile();
    transaction.send(LAUNCH_FILE_IN_APP, {
        fileURL: remoteURL,
        applicationID: applicationID,
        fileName: fileName,
        submitChangesURL: submitChangesURL,
    }, function (response) {
        file.emit('new-version', response.payload);
    });
    transaction.on('file-download-start', function (fileID) {
        file.fileID = fileID;
        file.emit('file-download-start');
    });
    transaction.on('file-download-progress', function (progress) { return file.emit('file-download-progress', progress); });
    transaction.on('file-downloaded', function () { return file.emit('file-downloaded'); });
    transaction.on('file-upload-start', function () { return file.emit('file-upload-start'); });
    transaction.on('file-upload-progress', function (progress) { return file.emit('file-upload-progress', progress); });
    transaction.on('file-uploaded', function (newFileInfo) { return file.emit('file-uploaded', newFileInfo); });
    transaction.on('file-deleted', function () { return file.emit('file-deleted'); });
    return file;
};

},{"events":8}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
var Emitter = require("events");
var ConnectionLifecycleError_1 = require("./ConnectionLifecycleError");
var ConstructibleClient_1 = require("./ConstructibleClient");
var LOCALSTORAGE_TECHNIQUE_KEY = '__companion_client_technique__';
var DIRECT_TECHNIQUE = 'direct';
var SSL_TECHNIQUE = 'ssl';
var SSL_PATH = 'wss://atlassian-domain-for-localhost-connections-only.com';
var SSL_PORTS = [
    22274,
    22300,
    22304,
    31417,
    31456
];
var DIRECT_PATH = 'ws://127.0.0.1';
var DIRECT_PORTS = [
    31459
];
var ADCClient = (function (_super) {
    __extends(ADCClient, _super);
    function ADCClient(asapFetcher, codeFetcher) {
        var _this = _super.call(this) || this;
        _this.activeClient = null;
        _this.sslClient = new ConstructibleClient_1.default(SSL_PATH, SSL_PORTS, asapFetcher, codeFetcher, _this);
        _this.directClient = new ConstructibleClient_1.default(DIRECT_PATH, DIRECT_PORTS, asapFetcher, codeFetcher, _this);
        return _this;
    }
    ADCClient.prototype.connect = function (portsOverride) {
        return __awaiter(this, void 0, void 0, function () {
            var lastSuccessfulTechnique, firstClient, secondClient, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isConnected()) {
                            return [2 /*return*/];
                        }
                        lastSuccessfulTechnique = localStorage.getItem(LOCALSTORAGE_TECHNIQUE_KEY) || SSL_TECHNIQUE;
                        firstClient = lastSuccessfulTechnique === SSL_TECHNIQUE ? this.sslClient : this.directClient;
                        secondClient = lastSuccessfulTechnique === SSL_TECHNIQUE ? this.directClient : this.sslClient;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, firstClient.connect(portsOverride)];
                    case 2:
                        _a.sent();
                        this.activeClient = firstClient;
                        localStorage.setItem(LOCALSTORAGE_TECHNIQUE_KEY, lastSuccessfulTechnique);
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        return [4 /*yield*/, secondClient.connect(portsOverride)];
                    case 4:
                        _a.sent();
                        this.activeClient = secondClient;
                        localStorage.setItem(LOCALSTORAGE_TECHNIQUE_KEY, lastSuccessfulTechnique === SSL_TECHNIQUE ? DIRECT_TECHNIQUE : SSL_TECHNIQUE);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ADCClient.prototype.disconnect = function () {
        if (this.isConnected()) {
            this.activeClient.disconnect();
        }
    };
    ADCClient.prototype.isConnected = function () {
        return this.activeClient && this.activeClient.isConnected();
    };
    ADCClient.prototype.startTransaction = function (type, resumeTransactionID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.isConnected()) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, this.activeClient.startTransaction(type, resumeTransactionID)];
            });
        });
    };
    ADCClient.prototype.send = function (type, payload, topLevelProps, cb) {
        if (!this.isConnected()) {
            return;
        }
        return this.activeClient.send(type, payload, topLevelProps, cb);
    };
    return ADCClient;
}(Emitter));
ADCClient.TRANSACTION_TYPES = {
    FILE: 'file',
    NULL: 'null',
};
ADCClient.ConnectionLifecycleError = ConnectionLifecycleError_1.default;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ADCClient;

},{"./ConnectionLifecycleError":1,"./ConstructibleClient":2,"events":8}],7:[function(require,module,exports){
"use strict";
var client_1 = require("./client");
exports.ADCClient = client_1.default;
var apps_1 = require("./apps");
exports.cancelFileLaunch = apps_1.cancelFileLaunch;
exports.getAppsList = apps_1.getAppsList;
exports.launchFileInApp = apps_1.launchFileInApp;

},{"./apps":5,"./client":6}],8:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}]},{},[7])(7)
});
}catch(e){WRMCB(e)};