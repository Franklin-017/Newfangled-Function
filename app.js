const foods = ['pizza', 'burger', 'fingerChips', 'donuts','springRoll'];

const modifiedFoodSlice = foods.slice(1, -1);
console.log(modifiedFoodSlice);

foods.splice(1, 0, 'noodles', 'icecream');
const modifiedFoodSplice = [...foods];
console.log(modifiedFoodSplice)

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];


const isEven = (num) => num % 2 === 0;

const evenNumber = (arr) => {
  return arr.filter((num) => isEven);
}

console.log(evenNumber(numberArray));

const isPrime = (n) => {
  if (n===1) { return false; }
  else if(n === 2){ return true; }
  else{
    for(let x = 2; x <= n/2; x++){
        if(n % x === 0){
          return false;
        }
    }
    return true;
  };
}

const primeNumber = numberArray.filter(num => isPrime(num));
console.log(primeNumber)

const nonPrimeNumber = numberArray.filter(num => !isPrime(num));
console.log(nonPrimeNumber)

const findSquareOfNumber = () => numberArray.map(num => num**2);

console.log(findSquareOfNumber(numberArray));

const value = [2,3,5,10]
const multiply = (previousTotal, currentNumber) => previousTotal * currentNumber; 
console.log(value.reduce(multiply));