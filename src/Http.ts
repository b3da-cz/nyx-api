import { Auth, Context, FetchInit, NyxInit, Response as NyxResponse } from './model'
import { Observable } from './Observable'

export class Http {
  appName: string
  protected auth: Auth
  onContextUpdate: Observable<Context> = new Observable('onContextUpdate')
  onError: Observable<string> = new Observable('onError')
  onLogout: Observable<void> = new Observable('onLogout')
  static DELETE = 'DELETE'
  static GET = 'GET'
  static POST = 'POST'
  static PUT = 'PUT'

  constructor(data: NyxInit) {
    this.appName = data.appName
    this.auth = data.auth ?? new Auth()
  }

  setAuth(auth: Auth): void {
    this.auth = auth
  }

  getAuth(): Auth {
    return this.auth
  }

  protected getHeaders(contentType = 'application/json'): HeadersInit {
    return {
      Accept: contentType,
      'Content-Type': contentType,
      Authorization: `Bearer ${this.auth.token}`,
      'User-Agent': this.appName,
    }
  }

  protected async fetch(data: FetchInit): Promise<Partial<NyxResponse | any>> {
    try {
      const res = await fetch(`https://nyx.cz/api/${data.endpoint}`, {
        method: data.method,
        headers: data.headers || this.getHeaders(),
        body: data.body,
      })
        .then(resp => resp.json())
        .catch(e => this.processError(e))
      if (res.error) {
        return this.processError(res)
      }
      if (res?.context) {
        this.updateContext(res.context)
      }
      return res
    } catch (e) {
      return this.processError(e)
    }
  }

  protected updateContext(ctx: Context): void {
    this.onContextUpdate.emit(ctx)
  }

  protected processError(error?: Error | any): NyxResponse {
    const msg = error?.message || error?.error || 'Chyba spojení'
    this.onError.emit(msg)
    return { bookmarks: [], discussions: [], posts: [], error: msg, code: error?.code } // todo proper default return
  }
}
