"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = exports.Observable = exports.generateUuidV4 = void 0;
const generateUuidV4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
});
exports.generateUuidV4 = generateUuidV4;
class Observable {
    constructor(id) {
        this.observers = [];
        this.id = id !== null && id !== void 0 ? id : exports.generateUuidV4();
    }
    getId() {
        return this.id;
    }
    subscribe() {
        return new Observer(this);
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    unregisterObserver(o) {
        this.observers.forEach((ob, i) => {
            if (ob.getId() === o.getId()) {
                o.emit({ type: 'final', data: null });
                this.observers.splice(i, 1);
            }
        });
    }
    unregisterObservers() {
        this.finally();
        this.observers = [];
    }
    emit(data) {
        this.observers.forEach(o => o.emit({ type: 'data', data }));
    }
    error(message) {
        this.observers.forEach(o => o.emit({ type: 'error', data: message }));
    }
    finally() {
        this.observers.forEach(o => o.emit({ type: 'final', data: null }));
    }
}
exports.Observable = Observable;
class Observer {
    constructor(observable) {
        this.isSubscribed = true;
        this.id = exports.generateUuidV4();
        this.observable = observable;
        this.observable.registerObserver(this);
    }
    getId() {
        return this.id;
    }
    unsubscribe() {
        this.isSubscribed = false;
        this.observable.unregisterObserver(this);
    }
    emit({ type, data }) {
        switch (type) {
            case 'data':
                if (!this.onData || (!!this.onData && typeof this.onData !== 'function')) {
                    throw Error('no callable in .then() callback!');
                }
                this.onData(data);
                break;
            case 'error':
                if (!this.onError || (!!this.onError && typeof this.onError !== 'function')) {
                    throw Error(data);
                }
                this.onError(data);
                break;
            case 'final':
                this.isSubscribed = false;
                if (typeof this.onFinal === 'function') {
                    this.onFinal(data);
                }
                break;
        }
    }
    then(onData) {
        if (!onData || (!!onData && typeof onData !== 'function')) {
            throw Error('no callable in .then() callback!');
        }
        this.onData = onData;
        return this;
    }
    error(onError) {
        this.onError = onError;
        return this;
    }
    finally(onFinal) {
        this.onFinal = onFinal;
        return this;
    }
}
exports.Observer = Observer;
