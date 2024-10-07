function merge(intervals) {
    
    intervals.sort((a,b) => a[0] - b[0])
    
    let resArray = [intervals[0]];

    for(let [low, high] of intervals) {
        const highPrev = resArray[resArray.length-1][1]
        if(low <= highPrev){
             resArray[resArray.length-1][1] = Math.max(high, highPrev);
        }
        else {
            resArray.push([low, high]);
        }
    }
      
    return resArray;
};

let intervals = [[2,6],[1,3],[15,18],[8,10]];
console.log(merge(intervals))