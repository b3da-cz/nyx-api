export class Auth {
  username?: string
  token?: string
  confirmationCode?: string

  constructor(data: any = {}) {
    this.username = data.username || undefined
    this.token = data.token || undefined
    this.confirmationCode = data.confirmationCode || undefined
  }
}
