//Example-1
for (let i = 1; i <= 10; i++) {
    console.log(i);

}
//Example-2
function isEvenOrOdd(number) {
    if (typeof number !== 'number'){
       return 'please provide a valid number';
    }
   
    return number % 2 === 0 ? 'Even':'Odd';
}
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));
console.log(isEvenOrOdd('a'));

//Example-3
// function countVowels(str){
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
   
//     for (let char of str){
//         if (vowels.includes(char)) {
//             count++;    
//         }
        
//     }
//     return count;

// }
// const exampleString = "Hello, word!";
// console.log(CountVowe(exampleString));

//EXample-4
// function isPalindrome(str){
//     if(typeof str !== 'string' || str.length === 0){
//         return false;
//     }

       

//     const cleanStr = str.replace(/[^a-z0-9]/gi, '').tolowerCase();
//     return cleanStr === cleanStr.split('').revers().join('');
// }
// console.log(isPalindrome("A man, a plan , acanal: panama"));
// console.log(isPalindrome("Hello"));

//EXample-5
function findMax(arr) {
    if(arr.lenght === 0){
        return undefined;
    }
   let max = arr[0];
   for(let i = 1; i < arr.lenght; i++){
    if (arr[i] > max){
        max = arr[i];
    }
   }
   return max;

}
const numbers = [3, 5, 7, 2, 8];
const maxNumber =findMax(numbers);
console.log(maxNumber);


