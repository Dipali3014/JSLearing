//const num = 11

function isPrimeNum(num) {
    for (let index= 2;index <num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}
const result1 = isPrimeNum(11);
console.log(`"11"  Is Prime Number: ${result1}`);

const result = isPrimeNum(3);
console.log(`"3"  Is Number Prime : ${result}`);

const result2 = isPrimeNum(6);
console.log(`"6"  Is not Prime Number: ${result2}`);

const result3 = isPrimeNum(10);
console.log(`"10"  Is not Prime a Number: ${result3}`);

const result4 = isPrimeNum(43);
console.log(`"43"  Is Prime Number: ${result4}`);

const result5 = isPrimeNum(29);
console.log(`"29"  Is Prime Number : ${result5}`);

const result6 = isPrimeNum(50);
console.log(`"50"  Is Number not a Prime : ${result6}`);