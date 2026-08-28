var Tweet = function (userId, tweetId, time) {
    this.userId = userId;
    this.tweetId = tweetId;
    this.time = time
}

var Twitter = function () {
    this.timer = 0;
    this.tweets = new Map()
    this.followees = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.tweets.get(userId))
        this.tweets.set(userId, []);
    ++this.timer;
    let newTweet = new Tweet(userId, tweetId, this.timer)
    this.tweets.get(userId).push(newTweet)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let maxHeap = new MaxPriorityQueue((it) => it.time)
    let candidates = [userId, ...(this.followees.get(userId) || [])]
    let res = [];

    for (let candidateId of candidates) {
        let tweetsList = this.tweets.get(candidateId)
        if (!tweetsList || tweetsList.length == 0) continue;
        let index = tweetsList.length - 1
        maxHeap.enqueue({ ...tweetsList[index], candidateId, index })
    }

    while (maxHeap.size() && res.length < 10) {
        let peak = maxHeap.dequeue();
        res.push(peak.tweetId);
        let index = peak.index - 1;
        if (index >= 0) {
            let candidateId = peak.candidateId;
            let nextTweet = this.tweets.get(peak.candidateId)[index];
            maxHeap.enqueue({ ...nextTweet, candidateId, index })
        }

    }


    return res;

};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.followees.get(followerId))
        this.followees.set(followerId, new Set());
    this.followees.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.followees.get(followerId))
        return;
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