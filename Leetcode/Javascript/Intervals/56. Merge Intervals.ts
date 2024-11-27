function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; ++i) {
        const lastInterval = mergedIntervals[mergedIntervals.length - 1];
        if (lastInterval[1] < intervals[i][0]) {
            mergedIntervals.push(intervals[i]);
        } else {
            lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
        }
    }

    return mergedIntervals;
}