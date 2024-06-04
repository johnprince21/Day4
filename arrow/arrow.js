// a) Print odd number in an array: 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddnum = (arr) => {
    let result = [];
    for (let v of arr) {
        v % 2 !== 0 ? result.push(v) : false;
    };
    return result;
}
console.log(`Odd number array is: [${oddnum(arr)}]`);


// b)Convert all the strings to title caps in a string array
let arr1 = ["sam", "saran", "kausi", "sherif"]
const titlecap = (arr) => {
    let res = [];
    for (let v of arr) {
        res.push(v[0].toUpperCase() + v.slice(1, v.length))
    }
    return res;
}
console.log(titlecap(arr1));

// c) Sum of all numbers in an array:
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum_arr = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(`Sum of all number in an array is: ${sum_arr(arr2)}`);


// d) Return all prime numbers in an array:
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let prime_number = (array) => {
    let result = [];
    for (let v of array) {
        let flag = true;
        if (v > 1) {
            for (let i = 2; i < v; i++) {
                if (v % 2 === 0) {
                    flag = false;
                    break;
                }
            }
        } (flag) ? result.push(v) : false;
    } return result;
}
let resultvbl = prime_number(arr3);
console.log(`Prime numbers in an array : [${resultvbl}]`);


// e) Return all palindromes in an array:
let arr4 = ["civic", "madam", "noon", 123321, 121, 1234];
let palindrome = (array) => {
    let res1 = [];
    for (let v of array) {
        v = String(v);
        let l = v.length;
        let tem = "";
        for (i = l - 1; i >= 0; i--) {
            tem += v[i]
            // console.log(tem);
        } v === tem ? res1.push(v) : false;
    }
    return res1;
};
let z = palindrome(arr4);
console.log(`Palindrome array is ; [${z}]`);
