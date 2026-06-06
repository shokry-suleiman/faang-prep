/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    if(image[sr][sc] ==color)
        return image
    let q = [[sr, sc]];
    let src = image[sr][sc];
    image[sr][sc] = color;
    let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    while (q.length) {
        let [qr, qc] = q.shift();
        for (let [dr, dc] of dir) {
            let nr = qr + dr;
            let nc = qc + dc;
            if (nr >= 0 && nr < image.length && nc >= 0 && nc < image[0].length && image[nr][nc] == src) {
                image[nr][nc] = color;
                q.push([nr, nc])
            }
        }
    }
    return image
};