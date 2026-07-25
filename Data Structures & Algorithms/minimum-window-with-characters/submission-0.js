class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if (t.length > s.length) return "";

        const countT = new Map();
        const window = new Map();

        for (const char of t) {
            countT.set(char, (countT.get(char) || 0) +1);
        }

        let have = 0;
        const need = countT.size;

        let res = [-1, -1];
        let resLen = Infinity;

        let left = 0;

        for (let right = 0; right<s.length; right++) {
            const char = s[right];
            window.set(char, (window.get(char) || 0) +1);

            if (countT.has(char) && window.get(char) === countT.get(char)) {
                have++;
            }
            while (have === need) {
                if ((right - left + 1)<resLen) {
                    res = [left, right];
                    resLen = right - left +1;
                }
                const leftChar = s[left];
                window.set(leftChar, window.get(leftChar) -1);

                if (countT.has(leftChar) && window.get(leftChar)<countT.get(leftChar)) {
                    have --;
                }
                left++
            }
        }
            return resLen === Infinity ? "" : s.slice(res[0], res[1] +1);
        }
}
