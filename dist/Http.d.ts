import { Auth, Context, FetchInit, NyxInit, Response as NyxResponse } from './model';
import { Observable } from './Observable';
export declare class Http {
    appName: string;
    protected auth: Auth;
    onContextUpdate: Observable<Context>;
    onError: Observable<string>;
    onLogout: Observable<void>;
    static DELETE: string;
    static GET: string;
    static POST: string;
    static PUT: string;
    constructor(data: NyxInit);
    setAuth(auth: Auth): void;
    getAuth(): Auth;
    protected getHeaders(contentType?: string): HeadersInit;
    protected fetch(data: FetchInit): Promise<Partial<NyxResponse | any>>;
    protected updateContext(ctx: Context): void;
    protected processError(error?: Error | any): NyxResponse;
}
