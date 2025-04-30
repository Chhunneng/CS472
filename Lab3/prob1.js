"use strict";

function computeSumOfSquares(arr) {
    return arr.reduce((total, item) => total + item * item, 0);
}

console.log(computeSumOfSquares([1, 2, 3]));

let printOddNumbersOnly = function (arr) {
    arr.filter((n) => n & 1).forEach((n) => console.log(n));
};

printOddNumbersOnly([1, 2, 3, 4, 5, 6]);

let printFibo = (n, a, b) => {
    let ans = [];
    while (n-- > 0) {
        ans.push(a);
        b = b + a;
        a = b - a;
    }
    console.log(ans.join(", "));
};

printFibo(10, 0, 1);
