/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var arr = [];

    let i = 0;
    let j = 0;
    if (nums1.length && nums2.length) {
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                arr.push(nums1[i]);
                i++;
            } else {
                arr.push(nums2[j]);
                j++;
            }
        }
    }

    console.log(i,j)
    while (i < nums1.length) {
        arr.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        arr.push(nums2[j]);
        j++;
    }

    var median;
    if(arr.length % 2 == 0)
        median = (arr[(arr.length/2)-1]  + arr[(arr.length/2)]) / 2; 
    else 
        median = arr[(arr.length -1)/2]
    
    return median;
};
