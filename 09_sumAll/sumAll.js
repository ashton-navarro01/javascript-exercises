const sumAll = function(lo, hi) {
    if(lo < 0 || hi < 0) return "ERROR";
    if (!Number.isInteger(lo) || !Number.isInteger(hi)) return "ERROR";
    if(lo > hi) [lo, hi] = [hi, lo]

    res = 0;
    for(let i = lo; i <= hi; i++){
        res += i
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
