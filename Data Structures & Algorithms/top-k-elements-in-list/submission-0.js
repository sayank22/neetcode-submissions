class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};

        for (const num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }

        const buckets = Array.from({length: nums.length + 1 }, () => []);

        for (const num in counts) {
            const frequency = counts[num];
            buckets[frequency].push(Number(num))
        }

        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
