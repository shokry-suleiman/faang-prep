/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    var rest = fruits.length;
    for (var i = 0; i < fruits.length; i++) {
        for (var j = 0; j < baskets.length; j++) {
            if (fruits[i] <= baskets[j] && baskets[j] != -1) {
                baskets[j] = -1;
                rest = rest - 1;
                break;
            }
        }
    }

    return rest
};