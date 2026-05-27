/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l=0;
    let r=x;
    while(l<=r){
        let m = Math.floor((l+r)/2)

        let res = m *m;
        if(res>x){
            r = m-1
        }else if(res<x){
            l = m+1
        }else{
            return m
        }
        
    }
    return r
};