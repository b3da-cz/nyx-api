import { Fn } from './model'

export const generateUuidV4 = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })

export class Observable<T> {
  private readonly id: string
  private observers: Observer[] = []
  constructor(id?: string) {
    this.id = id ?? generateUuidV4()
  }

  getId(): string {
    return this.id
  }

  subscribe(): Observer {
    return new Observer(this)
  }

  registerObserver(o: Observer): void {
    this.observers.push(o)
  }

  unregisterObserver(o: Observer): void {
    this.observers.forEach((ob, i) => {
      if (ob.getId() === o.getId()) {
        o.emit({ type: 'final', data: null })
        this.observers.splice(i, 1)
      }
    })
  }

  unregisterObservers(): void {
    this.finally()
    this.observers = []
  }

  emit(data?: any): void {
    this.observers.forEach(o => o.emit({ type: 'data', data }))
  }

  error(message: string): void {
    this.observers.forEach(o => o.emit({ type: 'error', data: message }))
  }

  finally(): void {
    this.observers.forEach(o => o.emit({ type: 'final', data: null }))
  }
}

export class Observer {
  private readonly id: string
  private observable: Observable<any>
  private onData?: Fn
  private onError?: Fn
  private onFinal?: Fn
  private isSubscribed = true
  constructor(observable: Observable<any>) {
    this.id = generateUuidV4()
    this.observable = observable
    this.observable.registerObserver(this)
  }

  getId(): string {
    return this.id
  }

  unsubscribe(): void {
    this.isSubscribed = false
    this.observable.unregisterObserver(this)
  }

  emit({ type, data }: { type: string; data: any }): void {
    switch (type) {
      case 'data':
        if (!this.onData || (!!this.onData && typeof this.onData !== 'function')) {
          throw Error('no callable in .then() callback!')
        }
        this.onData(data)
        break
      case 'error':
        if (!this.onError || (!!this.onError && typeof this.onError !== 'function')) {
          throw Error(data)
        }
        this.onError(data)
        break
      case 'final':
        this.isSubscribed = false
        if (typeof this.onFinal === 'function') {
          this.onFinal(data)
        }
        break
    }
  }

  then(onData: Fn): Observer {
    if (!onData || (!!onData && typeof onData !== 'function')) {
      throw Error('no callable in .then() callback!')
    }
    this.onData = onData
    return this
  }

  error(onError: Fn): Observer {
    this.onError = onError
    return this
  }

  finally(onFinal: Fn): Observer {
    this.onFinal = onFinal
    return this
  }
}
