import { Fn } from './model';
export declare const generateUuidV4: () => string;
export declare class Observable<T> {
    private readonly id;
    private observers;
    constructor(id?: string);
    getId(): string;
    subscribe(): Observer;
    registerObserver(o: Observer): void;
    unregisterObserver(o: Observer): void;
    unregisterObservers(): void;
    emit(data?: any): void;
    error(message: string): void;
    finally(): void;
}
export declare class Observer {
    private readonly id;
    private observable;
    private onData?;
    private onError?;
    private onFinal?;
    private isSubscribed;
    constructor(observable: Observable<any>);
    getId(): string;
    unsubscribe(): void;
    emit({ type, data }: {
        type: string;
        data: any;
    }): void;
    then(onData: Fn): Observer;
    error(onError: Fn): Observer;
    finally(onFinal: Fn): Observer;
}
