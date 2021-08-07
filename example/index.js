import NyxApi from '../dist/bundle.node.min.js'

const initNyx = async () => {
    try {
        const nyx = new NyxApi({
            appName: 'test'
        })
        const username = 'test'
        const { confirmationCode, token, error, message } = await nyx.createAuthToken(username)
        if (confirmationCode && token) {
            console.log(`confirmation code: ${confirmationCode}.\n\nconfirm in Nyx settings and click ok`)
        } else if (error && message) {
            console.error(`error: ${message}`)
            return
        }
        const res = await nyx.getHistory()
        if (res?.discussions?.length) {
            console.log(res.discussions.map(d => d.full_name))
        }
    } catch (e) {
        if (e.message.includes('fetch is not defined')) {
            console.error('error: you need to install node-fetch and form-data packages in your project')
        } else {
            console.error(e)
        }
    }
}

initNyx()
