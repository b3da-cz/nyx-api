"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const model_1 = require("./model");
const Observable_1 = require("./Observable");
class Http {
    constructor(data) {
        var _a;
        this.onContextUpdate = new Observable_1.Observable('onContextUpdate');
        this.onError = new Observable_1.Observable('onError');
        this.onLogout = new Observable_1.Observable('onLogout');
        this.appName = data.appName;
        this.auth = (_a = data.auth) !== null && _a !== void 0 ? _a : new model_1.Auth();
    }
    setAuth(auth) {
        this.auth = auth;
    }
    getAuth() {
        return this.auth;
    }
    getHeaders(contentType = 'application/json') {
        return {
            Accept: contentType,
            'Content-Type': contentType,
            Authorization: `Bearer ${this.auth.token}`,
            'User-Agent': this.appName,
        };
    }
    fetch(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`https://nyx.cz/api/${data.endpoint}`, {
                    method: data.method,
                    headers: data.headers || this.getHeaders(),
                    body: data.body,
                })
                    .then(resp => resp.json())
                    .catch(e => this.processError(e));
                if (res.error) {
                    return this.processError(res);
                }
                if (res === null || res === void 0 ? void 0 : res.context) {
                    this.updateContext(res.context);
                }
                return res;
            }
            catch (e) {
                return this.processError(e);
            }
        });
    }
    updateContext(ctx) {
        this.onContextUpdate.emit(ctx);
    }
    processError(error) {
        const msg = (error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : error.error) || 'Chyba spojení';
        this.onError.emit(msg);
        return { bookmarks: [], discussions: [], posts: [], error: msg, code: error === null || error === void 0 ? void 0 : error.code }; // todo proper default return
    }
}
exports.Http = Http;
Http.DELETE = 'DELETE';
Http.GET = 'GET';
Http.POST = 'POST';
Http.PUT = 'PUT';
