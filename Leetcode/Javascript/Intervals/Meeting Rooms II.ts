// Вариант ниже или 
// 2 массива с началами и концами, 2 поинтера в них
// Если поинтер в начале больше концаа то сдвигаем поинтер конца и наоборот, сохраняем максимум

import { max } from "lodash";

function minMeetingRooms(intervals: number[][]): number {
    const maximumTimePoint: number = 1000010;
    const countChange: number[] = new Array(maximumTimePoint).fill(0);

    intervals.forEach(interval => {
        countChange[interval[0]]++; 
        countChange[interval[1]]--;
    });

    for (let i = 0; i < maximumTimePoint - 1; ++i) {
        countChange[i + 1] += countChange[i];
    }

    return max(countChange);
}