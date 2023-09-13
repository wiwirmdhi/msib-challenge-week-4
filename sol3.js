// Reduce --> cari total mengunakan sum

const numbers = [2, 4, 7, 8, 10, 15];
const total = numbers.reduce ((acc, curr) => 
    acc + curr);

console.log(total)