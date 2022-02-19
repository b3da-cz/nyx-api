import { Http } from './Http'
import {
  Auth,
  BookmarksResponse,
  Context,
  DiscussionResponse,
  DiscussionStatsResponse,
  HistoryResponse,
  LastDiscussionsResponse,
  LastPostsResponse,
  MailResponse,
  NotificationsResponse,
  NyxInit,
  OnPostUpdatedResponse,
  Post,
  RatingsResponse,
  RemindersResponse,
  Response as NyxResponse,
  SearchResponse,
  UploadFileResponse,
  WaitingFilesResponse,
} from './model'

export class NyxApi extends Http {
  constructor(data: NyxInit) {
    super(data)
  }

  /**
   * @throws Error
   */
  async createAuthToken(username: string): Promise<Auth> {
    const res = await this.fetch({
      endpoint: `create_token/${username}`,
      method: Http.POST,
      headers: {
        'User-Agent': this.appName,
      },
    })
    if (res?.token && res.confirmation_code) {
      this.auth = new Auth({
        username: username,
        token: res.token,
        confirmationCode: res.confirmation_code,
      })
      return this.auth
    } else {
      throw new Error(res?.error || 'Error requesting token')
    }
  }

  async logout(): Promise<void> {
    await this.deleteAuthToken()
    this.onLogout.emit()
  }

  async deleteAuthToken(): Promise<Partial<NyxResponse>> {
    return this.fetch({
      endpoint: `delete_token/${this.auth.token}`,
      method: Http.POST,
    })
  }

  async getBookmarks(includingSeen = true): Promise<Partial<BookmarksResponse>> {
    return this.fetch({
      endpoint: `bookmarks${includingSeen ? '/all' : ''}`,
      method: Http.GET,
    })
  }

  async getHistory(showRead = true, showBooked?: boolean): Promise<Partial<HistoryResponse>> {
    return this.fetch({
      endpoint: `bookmarks/history?more_results=true&show_read=${showRead}${
        showBooked !== undefined ? `&show_booked=${showBooked}` : ''
      }`,
      method: Http.GET,
    })
  }

  async getContext(): Promise<Partial<Context>> {
    return this.fetch({
      endpoint: `status`,
      method: Http.GET,
    })
  }

  async getLastPosts(
    minRating = 0,
    isRatedByFriends?: boolean,
    isRatedByMe?: boolean,
  ): Promise<Partial<LastPostsResponse>> {
    return this.fetch({
      endpoint: `last${minRating > 0 ? `/min_rating/${minRating}` : ''}${isRatedByFriends ? '/rated_by_friends' : ''}${
        isRatedByMe ? '/rated_by_me' : ''
      }`,
      method: Http.GET,
    })
  }

  async getLastDiscussions(): Promise<Partial<LastDiscussionsResponse>> {
    return this.fetch({
      endpoint: `last/discussions`,
      method: Http.GET,
    })
  }

  async search(phrase: string, isUnified = false, isUsername = false, limit = 20): Promise<Partial<SearchResponse>> {
    if (isUsername && phrase?.length < 2) {
      return { exact: [] }
    }
    return this.fetch({
      endpoint: `search${isUnified ? '/unified' : isUsername ? '/username/' : ''}${
        isUsername ? phrase : `?search=${phrase}&limit=${limit}`
      }`,
      method: Http.GET,
    })
  }

  async getDiscussion(id: string | number): Promise<Partial<DiscussionResponse>> {
    return this.fetch({
      endpoint: `discussion/${id}`,
      method: Http.GET,
    })
  }

  async getDiscussionBoard(id: string | number): Promise<Partial<DiscussionResponse>> {
    return this.fetch({
      endpoint: `discussion/${id}/content/home`,
      method: Http.GET,
    })
  }

  async getDiscussionStats(id: string | number): Promise<Partial<DiscussionStatsResponse>> {
    return this.fetch({
      endpoint: `discussion/${id}/stats`,
      method: Http.GET,
    })
  }

  async getMail(queryString = ''): Promise<Partial<MailResponse>> {
    return this.fetch({
      endpoint: `mail${queryString}`,
      method: Http.GET,
    })
  }

  async getReminders(type: 'bookmarks' | 'mail'): Promise<Partial<RemindersResponse>> {
    return this.fetch({
      endpoint: `${type}/reminders`,
      method: Http.GET,
    })
  }

  async getWaitingFiles(discussionId: string | number): Promise<Partial<WaitingFilesResponse>> {
    return this.fetch({
      endpoint: `${!discussionId ? 'mail' : `discussion/${discussionId}`}/waiting_files`,
      method: Http.GET,
    })
  }

  async getNotifications(): Promise<Partial<NotificationsResponse>> {
    return this.fetch({
      endpoint: `notifications`,
      method: Http.GET,
    })
  }

  async getRating(post: Post): Promise<Partial<RatingsResponse>> {
    return this.fetch({
      endpoint: `discussion/${post.discussion_id}/rating/${post.id}`,
      method: Http.GET,
    })
  }

  async ratePost(
    post: Post,
    rating: 'positive' | 'negative' | 'negative_visible' | 'remove',
  ): Promise<Partial<OnPostUpdatedResponse>> {
    return this.fetch({
      endpoint: `discussion/${post.discussion_id}/rating/${post.id}/${rating}`,
      method: Http.POST,
    })
  }

  async setReminder(
    discussionId: string | number,
    postId: string | number,
    isReminder: boolean,
  ): Promise<Partial<OnPostUpdatedResponse>> {
    return this.fetch({
      endpoint: `${discussionId > 0 ? `discussion/${discussionId}` : 'mail'}/reminder/${postId}/${isReminder}`,
      method: Http.POST,
    })
  }

  async reportPost(postId: string | number): Promise<Partial<NyxResponse>> {
    return this.fetch({
      endpoint: `report/${postId}`,
      method: Http.POST,
    })
  }

  async sendPrivateMessage(recipient: string, message: string): Promise<Partial<NyxResponse>> {
    const data: any = { recipient, message }
    return this.fetch({
      endpoint: `mail/send`,
      method: Http.POST,
      headers: this.getHeaders('application/x-www-form-urlencoded'),
      body: Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&'),
    })
  }

  async sendTypingNotification(recipient: string): Promise<Partial<NyxResponse>> {
    return this.fetch({
      endpoint: `mail/typing_notification/${recipient}`,
      method: Http.POST,
      headers: this.getHeaders('application/x-www-form-urlencoded'),
    })
  }

  async bookmarkDiscussion(
    discussionId: string | number,
    isBooked: boolean,
    categoryId?: number,
  ): Promise<Partial<NyxResponse>> {
    return this.fetch({
      endpoint: `discussion/${discussionId}/bookmark?new_state=${isBooked}${
        categoryId && categoryId > 0 ? `&category=${categoryId}` : ''
      }`,
      method: Http.POST,
    })
  }

  async rollDice(discussionId: string | number, postId: string | number): Promise<Partial<OnPostUpdatedResponse>> {
    return this.fetch({
      endpoint: `discussion/${discussionId}/dice/${postId}/roll`,
      method: Http.POST,
    })
  }

  async rollDiceInHeader(
    discussionId: string | number,
    contentId: string | number,
  ): Promise<Partial<OnPostUpdatedResponse>> {
    return this.fetch({
      endpoint: `discussion/${discussionId}/content/dice/${contentId}/roll`,
      method: Http.POST,
    })
  }

  async voteInPoll(
    discussionId: string | number,
    postId: string | number,
    answers: string[],
  ): Promise<Partial<OnPostUpdatedResponse>> {
    return this.fetch({
      endpoint: `discussion/${discussionId}/poll/${postId}/vote/${answers.toString()}`,
      method: Http.POST,
    })
  }

  async voteInHeaderPoll(
    discussionId: string | number,
    contentId: string | number,
    answers: string[],
  ): Promise<Partial<OnPostUpdatedResponse>> {
    return this.fetch({
      endpoint: `discussion/${discussionId}/content/poll/${contentId}/vote/${answers.toString()}`,
      method: Http.POST,
    })
  }

  async postToDiscussion(discussionId: string | number, text: string): Promise<Partial<NyxResponse>> {
    const data: any = { content: text }
    return this.fetch({
      endpoint: `discussion/${discussionId}/send/text`,
      method: Http.POST,
      headers: this.getHeaders('application/x-www-form-urlencoded'),
      body: Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&'),
    })
  }

  async deletePost(discussionId: string | number, postId: string | number): Promise<Partial<NyxResponse>> {
    return this.fetch({
      endpoint: `discussion/${discussionId}/delete/${postId}`,
      method: Http.DELETE,
    })
  }

  async uploadFile(file: File | any, discussionId?: string | number): Promise<Partial<UploadFileResponse>> {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('file_type', discussionId ? 'discussion_attachment' : 'mail_attachment') // free_file | discussion_attachment | mail_attachment
    formData.append('id_specific', `${discussionId || 0}`)
    return this.fetch({
      endpoint: `file/upload`,
      method: Http.PUT,
      headers: {
        Authorization: `Bearer ${this.auth.token}`,
      },
      body: formData,
    })
  }

  async deleteFile(fileId: string | number): Promise<Partial<NyxResponse>> {
    return this.fetch({
      endpoint: `file/delete/${fileId}`,
      method: Http.DELETE,
    })
  }

  async subscribeForFCM(fcmToken: string, appIdentifier: string): Promise<Partial<NyxResponse>> {
    return this.fetch({
      endpoint: `register_for_notifications/${this.auth.token}/${appIdentifier}/${fcmToken}`,
      method: Http.POST,
    })
  }

  async unregisterFromFCM(fcmToken: string, appIdentifier: string): Promise<Partial<NyxResponse>> {
    return this.fetch({
      endpoint: `deregister_notifications/${this.auth.token}/${appIdentifier}/${fcmToken}`,
      method: Http.POST,
    })
  }
}
