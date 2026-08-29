var Tweet = function (userId, tweetId, time) {
    this.userId = userId;
    this.tweetId = tweetId;
    this.time = time;
}

var Twitter = function () {
    this.tweets = new Map();
    this.followees = new Map();
    this.timeStamp = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.timeStamp++;
    let newTweet = new Tweet(userId, tweetId, this.timeStamp);
    if (!this.tweets.get(userId))
        this.tweets.set(userId, [])
    this.tweets.get(userId).push(newTweet)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let maxHeap = new MaxPriorityQueue((it) => it.time);
    let usersIds = [userId, ...(this.followees.get(userId) || [])];
    let list = [];

    for (let userId of usersIds) {
        let listOfTweets = this.tweets.get(userId);
        if (!listOfTweets) continue;
        let indx = listOfTweets.length - 1;
        let recentTweet = listOfTweets[indx];
        let it = { ...recentTweet, userId, indx }
        maxHeap.enqueue(it)
    }

    while (maxHeap.size() > 0 && list.length < 10) {
        let peak = maxHeap.dequeue();
        list.push(peak.tweetId);
        let userId = peak.userId;
        let listOfTweets = this.tweets.get(peak.userId);
        let nextIndx = peak.indx - 1;
        if (nextIndx >= 0) {
            let recentTweet = listOfTweets[nextIndx];
            let it = { ...recentTweet, userId, indx: nextIndx }
            maxHeap.enqueue(it)
        }
    }

    return list

};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.followees.get(followerId))
        this.followees.set(followerId, new Set())
    this.followees.get(followerId).add(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.followees.get(followerId))
        return
    this.followees.get(followerId).delete(followeeId)
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */