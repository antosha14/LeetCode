function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1]);
    let lastIntervalEnd = intervals[0][1];
    let intervalsToRemove = 0;

    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        // Работает с сортировкой по последнему с идеей в том что второй всегда заканчивается позже и его мы и ремуваем
        if (lastIntervalEnd > currentInterval[0]) {
            intervalsToRemove++;
        } else {
            lastIntervalEnd = currentInterval[1];
        }
    }

    return intervalsToRemove;
}
