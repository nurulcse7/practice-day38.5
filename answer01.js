/*
01. Some middle console log will be logged after 3.5 seconds
১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,
*/

console.log('first');
setTimeout(()=>{console.log('second')}, 3500);
console.log('third');

// node answer01.js

/*print:
first
third
second // delay 3.5 second
 */