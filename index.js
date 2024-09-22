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
function countVowels(str){
    const vowels = 'aeiouAEIOU';
    let count = 0;
   
    for (let char of str){
        if (vowels.includes(char)) {
            count++;    
        }
        
    }
    return count;

}
const exampleString = "Hello, word!";
console.log(countVowe(exampleString));
