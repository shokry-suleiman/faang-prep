/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {

        let h = height[left] < height[right] ? height[left] : height[right];
        let w = right - left;
        if (w * h > maxArea)
            maxArea = w * h

        if (height[left] < height[right]) {
            left++;
        } else {
            right--
        }
    }

    return maxArea
};