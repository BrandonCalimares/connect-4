export const getOffsetY = (cells, colIndex) => {
    const row = cells[colIndex].findLastIndex((cell) => cell == null);
    return row < 0 ? 0 : row * 72;
};

export const verifyWin = (cells, turn, col, row) => {
    // Check horizontal
    let i = col;
    let count = 0;
    while (i < 7 && cells[i][row] == turn) {
        count++;
        i++;
    }
    i = col - 1;
    while (i >= 0 && cells[i][row] == turn) {
        count++;
        i--;
    }
    if (count >= 4) return true;

    // Check vertical
    i = row;
    count = 0;
    while (i < 6 && cells[col][i] == turn) {
        count++;
        i++;
    }
    i = row - 1;
    while (i >= 0 && cells[col][i] == turn) {
        count++;
        i--;
    }
    if (count >= 4) return true;

    // Check diagonal
    i = row;
    let j = col;
    count = 0;
    while (i < 6 && j < 7 && cells[j][i] == turn) {
        count++;
        i++;
        j++;
    }
    i = row - 1;
    j = col - 1;
    while (i >= 0 && j >= 0 && cells[j][i] == turn) {
        count++;
        i--;
        j--;
    }
    if (count >= 4) return true;

    // Check second diagonal
    i = row;
    j = col;
    count = 0;
    while (i < 6 && j >= 0 && cells[j][i] == turn) {
        count++;
        i++;
        j--;
    }
    i = row - 1;
    j = col + 1;
    while (i >= 0 && j < 7 && cells[j][i] == turn) {
        count++;
        i--;
        j++;
    }
    if (count >= 4) return true;
    return false;
};