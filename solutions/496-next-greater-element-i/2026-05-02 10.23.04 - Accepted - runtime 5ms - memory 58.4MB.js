/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let s = [];
    let map = {};

    for (let i = 0; i < nums2.length; i++) {
        while (s.length > 0 && nums2[i] > nums2[s[s.length - 1]]) {
            let popped = s.pop();
            map[nums2[popped]] = nums2[i]
        }
        s.push(i)
    }
    s = []
    for (let i = 0; i < nums1.length; i++) {
        if (map[nums1[i]] !== undefined)
            s.push(map[nums1[i]])
        else
            s.push(-1)
    }
    return s
};