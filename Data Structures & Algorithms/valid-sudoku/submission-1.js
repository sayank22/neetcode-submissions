class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {};
        const cols = {};
        const boxes = {};

        for (let r=0; r<9; r++) {
            for (let c=0; c<9; c++) {
                const value = board[r][c];
                
                if (value === ".") continue;

                const boxKey = `${Math.floor(r/3)}-${Math.floor(c/3)}`;

                if (!rows[r]) rows[r] = new Set();
                if (!cols[c]) cols[c] = new Set();
                if (!boxes[boxKey]) boxes[boxKey] = new Set();
                
                if (rows[r].has(value) || cols[c].has(value) || boxes[boxKey].has(value)) {
                    return false;
                }

                rows[r].add(value);
                cols[c].add(value);
                boxes[boxKey].add(value)
        }
        }
        return true;
    }
}