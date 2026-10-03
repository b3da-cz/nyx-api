"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NyxApi = void 0;
const Http_1 = require("./Http");
const model_1 = require("./model");
class NyxApi extends Http_1.Http {
    constructor(data) {
        super(data);
    }
    /**
     * @throws Error
     */
    createAuthToken(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.fetch({
                endpoint: `create_token/${username}`,
                method: Http_1.Http.POST,
                headers: {
                    'User-Agent': this.appName,
                },
            });
            if ((res === null || res === void 0 ? void 0 : res.token) && res.confirmation_code) {
                this.auth = new model_1.Auth({
                    username: username,
                    token: res.token,
                    confirmationCode: res.confirmation_code,
                });
                return this.auth;
            }
            else {
                throw new Error((res === null || res === void 0 ? void 0 : res.error) || 'Error requesting token');
            }
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteAuthToken();
            this.onLogout.emit();
        });
    }
    deleteAuthToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `delete_token/${this.auth.token}`,
                method: Http_1.Http.POST,
            });
        });
    }
    getBookmarks(includingSeen = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `bookmarks${includingSeen ? '/all' : ''}`,
                method: Http_1.Http.GET,
            });
        });
    }
    getHistory(showRead = true, showBooked) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `bookmarks/history?more_results=true&show_read=${showRead}${showBooked !== undefined ? `&show_booked=${showBooked}` : ''}`,
                method: Http_1.Http.GET,
            });
        });
    }
    getContext() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `status`,
                method: Http_1.Http.GET,
            });
        });
    }
    getLastPosts(minRating = 0, isRatedByFriends, isRatedByMe) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `last${minRating > 0 ? `/min_rating/${minRating}` : ''}${isRatedByFriends ? '/rated_by_friends' : ''}${isRatedByMe ? '/rated_by_me' : ''}`,
                method: Http_1.Http.GET,
            });
        });
    }
    getLastDiscussions() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `last/discussions`,
                method: Http_1.Http.GET,
            });
        });
    }
    search(phrase, isUnified = false, isUsername = false, limit = 20) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isUsername && (phrase === null || phrase === void 0 ? void 0 : phrase.length) < 2) {
                return { exact: [] };
            }
            return this.fetch({
                endpoint: `search${isUnified ? '/unified' : isUsername ? '/username/' : ''}${isUsername ? phrase : `?search=${phrase}&limit=${limit}`}`,
                method: Http_1.Http.GET,
            });
        });
    }
    getDiscussion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${id}`,
                method: Http_1.Http.GET,
            });
        });
    }
    getDiscussionBoard(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${id}/content/home`,
                method: Http_1.Http.GET,
            });
        });
    }
    getDiscussionStats(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${id}/stats`,
                method: Http_1.Http.GET,
            });
        });
    }
    getMail(queryString = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `mail${queryString}`,
                method: Http_1.Http.GET,
            });
        });
    }
    getReminders(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `${type}/reminders`,
                method: Http_1.Http.GET,
            });
        });
    }
    getWaitingFiles(discussionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `${!discussionId ? 'mail' : `discussion/${discussionId}`}/waiting_files`,
                method: Http_1.Http.GET,
            });
        });
    }
    getNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `notifications`,
                method: Http_1.Http.GET,
            });
        });
    }
    getRating(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${post.discussion_id}/rating/${post.id}`,
                method: Http_1.Http.GET,
            });
        });
    }
    ratePost(post, rating) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${post.discussion_id}/rating/${post.id}/${rating}`,
                method: Http_1.Http.POST,
            });
        });
    }
    setReminder(discussionId, postId, isReminder) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `${discussionId > 0 ? `discussion/${discussionId}` : 'mail'}/reminder/${postId}/${isReminder}`,
                method: Http_1.Http.POST,
            });
        });
    }
    reportPost(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `report/${postId}`,
                method: Http_1.Http.POST,
            });
        });
    }
    sendPrivateMessage(recipient, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { recipient, message };
            return this.fetch({
                endpoint: `mail/send`,
                method: Http_1.Http.POST,
                headers: this.getHeaders('application/x-www-form-urlencoded'),
                body: Object.keys(data)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    .join('&'),
            });
        });
    }
    sendTypingNotification(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `mail/typing_notification/${recipient}`,
                method: Http_1.Http.POST,
                headers: this.getHeaders('application/x-www-form-urlencoded'),
            });
        });
    }
    bookmarkDiscussion(discussionId, isBooked, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${discussionId}/bookmark?new_state=${isBooked}${categoryId && categoryId > 0 ? `&category=${categoryId}` : ''}`,
                method: Http_1.Http.POST,
            });
        });
    }
    rollDice(discussionId, postId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${discussionId}/dice/${postId}/roll`,
                method: Http_1.Http.POST,
            });
        });
    }
    rollDiceInHeader(discussionId, contentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${discussionId}/content/dice/${contentId}/roll`,
                method: Http_1.Http.POST,
            });
        });
    }
    voteInPoll(discussionId, postId, answers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${discussionId}/poll/${postId}/vote/${answers.toString()}`,
                method: Http_1.Http.POST,
            });
        });
    }
    voteInHeaderPoll(discussionId, contentId, answers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${discussionId}/content/poll/${contentId}/vote/${answers.toString()}`,
                method: Http_1.Http.POST,
            });
        });
    }
    postToDiscussion(discussionId, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { content: text };
            return this.fetch({
                endpoint: `discussion/${discussionId}/send/text`,
                method: Http_1.Http.POST,
                headers: this.getHeaders('application/x-www-form-urlencoded'),
                body: Object.keys(data)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    .join('&'),
            });
        });
    }
    deletePost(discussionId, postId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/${discussionId}/delete/${postId}`,
                method: Http_1.Http.DELETE,
            });
        });
    }
    uploadFile(file, discussionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('file_type', discussionId ? 'discussion_attachment' : 'mail_attachment'); // free_file | discussion_attachment | mail_attachment
            formData.append('id_specific', `${discussionId || 0}`);
            return this.fetch({
                endpoint: `file/upload`,
                method: Http_1.Http.PUT,
                headers: {
                    Authorization: `Bearer ${this.auth.token}`,
                },
                body: formData,
            });
        });
    }
    deleteFile(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `file/delete/${fileId}`,
                method: Http_1.Http.DELETE,
            });
        });
    }
    subscribeForFCM(fcmToken, appIdentifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `register_for_notifications/${this.auth.token}/${appIdentifier}/${fcmToken}`,
                method: Http_1.Http.POST,
            });
        });
    }
    unregisterFromFCM(fcmToken, appIdentifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `deregister_notifications/${this.auth.token}/${appIdentifier}/${fcmToken}`,
                method: Http_1.Http.POST,
            });
        });
    }
    getNotepad() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `notepad`,
                method: Http_1.Http.GET,
            });
        });
    }
    getNotepadEntry(entryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `notepad/${entryId}`,
                method: Http_1.Http.GET,
            });
        });
    }
    removeBookmarksFromHistory(discussionIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `bookmarks/history/remove_from_history`,
                method: Http_1.Http.POST,
                headers: this.getHeaders('application/x-www-form-urlencoded'),
                body: discussionIds.map(id => `discussion_ids[]=${encodeURIComponent(id)}`).join('&'),
            });
        });
    }
    markBookmarksHistoryAsRead(discussionIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `bookmarks/history/mark_as_read`,
                method: Http_1.Http.POST,
                headers: this.getHeaders('application/x-www-form-urlencoded'),
                body: discussionIds.map(id => `discussion_ids[]=${encodeURIComponent(id)}`).join('&'),
            });
        });
    }
    addDiscussionRights(discussionId, username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/rights/add?discussion_id=${discussionId}&username=${encodeURIComponent(username)}`,
                method: Http_1.Http.POST,
            });
        });
    }
    deleteDiscussionRights(discussionId, username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/rights?discussion_id=${discussionId}&username=${encodeURIComponent(username)}`,
                method: Http_1.Http.DELETE,
            });
        });
    }
    setDiscussionRight(discussionId, right, set, username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `discussion/rights?discussion_id=${discussionId}&right=${right}&set=${set}${username ? `&username=${encodeURIComponent(username)}` : ''}`,
                method: Http_1.Http.POST,
            });
        });
    }
    saveDiscussionContent(discussionId, contentId, content, format = 'html') {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { content, format };
            return this.fetch({
                endpoint: `discussion/${discussionId}/content/${contentId}/save`,
                method: Http_1.Http.POST,
                headers: this.getHeaders('application/x-www-form-urlencoded'),
                body: Object.keys(data)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    .join('&'),
            });
        });
    }
    setFileEmbed(fileId, isEmbed) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `file/embed/${fileId}/${isEmbed}`,
                method: Http_1.Http.POST,
            });
        });
    }
    searchV2(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParts = [];
            if (params.user)
                queryParts.push(`user=${encodeURIComponent(params.user)}`);
            if (params.text)
                queryParts.push(`text=${encodeURIComponent(params.text)}`);
            if (params.order)
                queryParts.push(`order=${encodeURIComponent(params.order)}`);
            if (params.fromId)
                queryParts.push(`from_id=${params.fromId}`);
            const qs = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
            return this.fetch({
                endpoint: `search-v2${qs}`,
                method: Http_1.Http.GET,
            });
        });
    }
    getEvents(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParts = [];
            if ((params === null || params === void 0 ? void 0 : params.area) !== undefined)
                queryParts.push(`area=${params.area}`);
            if ((params === null || params === void 0 ? void 0 : params.category) !== undefined)
                queryParts.push(`category=${params.category}`);
            if ((params === null || params === void 0 ? void 0 : params.month) !== undefined)
                queryParts.push(`month=${params.month}`);
            if ((params === null || params === void 0 ? void 0 : params.year) !== undefined)
                queryParts.push(`year=${params.year}`);
            const qs = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
            return this.fetch({
                endpoint: `events${qs}`,
                method: Http_1.Http.GET,
            });
        });
    }
    setEventAttendance(discussionId, attendance) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fetch({
                endpoint: `event/${discussionId}/attendance/${attendance}`,
                method: Http_1.Http.POST,
            });
        });
    }
}
exports.NyxApi = NyxApi;
