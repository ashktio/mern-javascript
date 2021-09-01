// 1. Calculating prime numbers

Number.prototype.isPrime = () => {
    for( let i=2; i<this; i++ ) 
        if (this % i === 0) return false;
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2;
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// Output 
// The 1,000,000th prime number is 1000001
// This took 91.27787500619888 milliseconds to run

// 2. Fibonacci 

    //recursive 
const { performance } = require('perf_hooks');
const start = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(rFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

//ouput 
// 6765
// This took 6.074874997138977 milliseconds to run

    // iterative
const { performance } = require('perf_hooks');
const start = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}

console.log(iFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

// output 
//6765
//This took 4.113582998514175 milliseconds to run

// 3. Reverse string 
const { performance } = require('perf_hooks');
const start = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1)
console.log(`This took ${performance.now() - start} milliseconds to run`);

// output
//!seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR ?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
//  This took 4.011666998267174 milliseconds to run


    //recursive 
const { performance } = require('perf_hooks');
const start = performance.now();
function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"));
console.log(`This took ${performance.now() - start} milliseconds to run`);
// output
// !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR ?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
//This took 4.032624997198582 milliseconds to run

    // recursive with conditional (Ternary) operator 
const { performance } = require('perf_hooks');
const start = performance.now();
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"));
console.log(`This took ${performance.now() - start} milliseconds to run`);

// OUtput
// !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR ?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
// This took 3.604374997317791 milliseconds to run


    //iterative 
const { performance } = require('perf_hooks');
const start = performance.now();
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"));
console.log(`This took ${performance.now() - start} milliseconds to run`);

// OUtput
// !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR ?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
//This took 4.286750003695488 milliseconds to run