class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        const count = new Map();

        let left = 0;
        let maxFrequency = 0;
        let maxLength = 0;

        for (let right=0; right<s.length; right++) {
            const char=s[right];

            count.set(char, (count.get(char) || 0)+1); 

            maxFrequency=Math.max(maxFrequency, count.get(char));

            let windowSize=right-left+1;
            while (windowSize-maxFrequency>k){
                count.set(s[left], count.get(s[left])-1);
                left++

                windowSize=right-left+1;
            }
            maxLength=Math.max(maxLength, windowSize)
        }
        return maxLength;
    }
}
