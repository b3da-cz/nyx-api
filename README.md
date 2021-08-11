# nyx-api

Library for basic communication with Nyx.cz API

---

### Install

```
yarn add nyx-api
```

or

```
npm i nyx-api
```

### Browser / React-Native / Cordova / ...

* Nyx doesn't allow cross origin resource sharing, so you need to disable CORS browser check, if you want to test this in actual browser
* follow example [here](./example/index.html)

### Node.js

* install _fetch_ and _FormData_ node polyfills in your project `yarn add node-fetch form-data`
* follow example [here](./example/index.js) (run `node ./example/index.js`)

### Use

get instance of [NyxApi](./dist/NyxApi.d.ts):
```ts
import NyxApi, { Auth, Bookmark, Context } from 'nyx-api'

const nyx = new NyxApi({
  appName: 'test',
})
```
get token and confirmationCode:
```ts
const { confirmationCode, token } = await nyx.createAuthToken('username')
```
... call random endpoint:
```ts
const { discussions } = await nyx.getHistory()
console.log(discussions.map((b: Bookmark) => b.full_name))
```
you can store your token, on next start call:
```ts
const nyx = new NyxApi({
    appName: 'test',
    auth: {
        username: 'foo',
        token: 'bar',
    }
})
```
or set Auth object later:
```ts
const auth: Auth = {
  username: 'foo',
  token: 'bar',
}
nyx.setAuth(auth)
```
subscribe to some events:
```ts
nyx.onContextUpdate.subscribe()
  .then((ctx: Context) => console.log(ctx.user.notifications_unread))

nyx.onError.subscribe().then((msg: string) => console.error(msg))

nyx.onLogout.subscribe().then(() => storage.cleanup())
```
