var Tweet = function (userId, tweetId, next) {
    this.userId = userId;
    this.tweetId = tweetId;
    this.next = null
}

var Twitter = function () {
    this.list = new Tweet(0, 0, null)
    this.map = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    let head = this.list;
    while (head.next)
        head = head.next;
    head.next = new Tweet(userId, tweetId, null)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let head = this.list.next;
    let res = []
    while (head) {
        if (head.userId == userId || this.map.get(userId)?.has(head.userId))
            res.push(head.tweetId)
        head=head.next
    }

    return res.slice(-10).reverse()
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.map.get(followerId))
        this.map.set(followerId, new Set());
    this.map.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.map.get(followerId))
        return;
    this.map.get(followerId).delete(followeeId)
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */