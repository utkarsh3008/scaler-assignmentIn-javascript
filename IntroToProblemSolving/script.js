console.log('<<<<<<<<<<<<<<<<<<<<Intro To Problem Solving>>>>>>>>>>>>>>>>>>')

//Q1 Given a number N, Check whether it is prime or not


function  isPrime(N) {
    if(N === 1) return ' 1 is not a prime number'
    for(let i =2; i*i<=N;i++) {
        if(N%2 === 0) {
            return `${N} is not a Prime number`
        }
    }

    return ` ${N} is a prime number`
}

console.log(isPrime(10));
console.log(isPrime(13));