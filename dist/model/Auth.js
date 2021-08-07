"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    constructor(data = {}) {
        this.username = data.username || undefined;
        this.token = data.token || undefined;
        this.confirmationCode = data.confirmationCode || undefined;
    }
}
exports.Auth = Auth;
