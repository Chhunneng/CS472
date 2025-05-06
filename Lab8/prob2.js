const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++)
            if (n % i === 0) return reject({ prime: false });
        return n > 1 ? resolve({ prime: true }) : reject({ prime: false });
    });
};

console.log("start");
(async () => {
    try {
        console.log(await isPrime(7));
    } catch (err) {
        console.error(err);
    }
})();
console.log("end");
