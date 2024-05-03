'цикл: для каждого элемента считаем остаток, проверяем есть ли остаток в ключах мапы через has '
'если есть то возвращаем искомое, получая индекс первого элемента через map.get(остаток)'
'на каждой итерации добавляем в мапу пару ключ + индекс'

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
};