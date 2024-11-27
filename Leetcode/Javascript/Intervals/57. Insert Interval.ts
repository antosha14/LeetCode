function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [start, end] = newInterval; 
    const result: number[][] = [];
    let inserted = false;

    for (const [intervalStart, intervalEnd] of intervals) {
        if (end < intervalStart) {
            if (!inserted) {     
                result.push([start, end]);
                inserted = true;
            }
            result.push([intervalStart, intervalEnd]);
        } else if (intervalEnd < start) {
            result.push([intervalStart, intervalEnd]);
        } else {                 
            start = Math.min(start, intervalStart);
            end = Math.max(end, intervalEnd); 
        }
    }

    if (!inserted) {
        result.push([start, end]);
    }
  
    return result;
}