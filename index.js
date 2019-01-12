// 1

let stringArr = ['my', 'name', 'is', 'Trinity'];
let numsArr = [10, 20, 30];
let usersArr = [{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}];
let reverseArr = ['abc', '123'];



function mainFunction(arr, callback) {
    return "new Value: " + callback(arr);
}

function userString(arr) {
        let newAr = '';
          for (let i = 0; i < arr.length; i++ ) {
              newAr +=arr[i].name + " is " +arr[i].age + ", " ;
          }
       return newAr;    
}


  function handerToUpperCase(arr) {
        let newAr = '';
          for (let i = 0; i < arr.length; i++ ) {
              newAr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
          }
       return newAr;
  }

 function multiply (arr) {
     let num = arr.map(function(item) {
         return item = item * 10;
     });
     return num;
 }

function reverse(arr) {
      let newAr = '';
          for (let i = 0; i < arr.length; i++ ) {
              let letters = arr[i].split('');
              newAr += letters.reverse().join("") + ', ';
          }
       return newAr;
} 

  console.log(mainFunction(stringArr, handerToUpperCase));
    console.log(mainFunction(numsArr, multiply));
console.log(mainFunction(reverseArr, reverse));
console.log(mainFunction(usersArr, userString));


// 2. 

function every(arr, fn) {
   if (!Array.isArray(arr)) return false;
  let positiveArr = arr.filter(function(number) {
    return number > 5;
  });
  return (positiveArr.length==arr.length)?true:false;
}

let nums = [1, 7, 8, 10, 5, 14, 4];

let numberss = every(nums);
console.log(numberss);



// //3 

let numbers = [1,2,3,5,8,9,10];

let newArrNums = [];

function odd(number) {
 if (number % 2 === 0) return false;
 if (number % 2 != 0) return true;
 }
  
  
function numArray(num, odd) {
   
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].odd = odd(numbers[i]);
        newArrNums[i] = [{"digit":numbers[i],"odd":odd(numbers[i])}];
        
    }
    return newArrNums;
}
let res = numArray(numbers, odd);
console.log(res);


//4 
let arr = [12, 4, 50, 1, 0, 18, 40];

function equalZero(number) {
  return number !== 0;
}
 console.log(arr.every(equalZero));
 
 
 //5 

 let arr2 = ['yes', 'hello', 'no', 'easycode', 'what'];
 
 function arrLength(word) {
     return word.length > 3;
 }
 console.log(arr2.some(arrLength));
 
 //6 
let arrObj =  [
 {char:"a",index:12},
 {char:"w",index:8},
 {char:"Y",index:10},
 {char:"p",index:3},
 {char:"p",index:2},
 {char:"N",index:6},
 {char:" ",index:5},
 {char:"y",index:4},
 {char:"r",index:13},
 {char:"H",index:0},
{char:"e",index:11},
{char:"a",index:1},
{char:" ",index:9},
{char:"!",index:14},
{char:"e",index:7}];
   
   
  let sortedByIndex = arrObj.sort(function (a, b) {
   return a.index - b.index;
  });

let result = sortedByIndex.reduce(function(phrase, word, index) {
 return phrase+word.char;
    }, '');

console.log(result); // 



//7 


let arr3 = [  [14, 45],  [1],  ['a', 'c', 'd'] ];

  arr3.sort(function (prev, next) {
  if (prev.length > next.length) return 1;
  if (prev.length < next.length) return -1;
});

console.log(arr3);

//8 

let compArray = [
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
];

let sortedByIndex2 = compArray.sort(function (a, b) {
   return a.info.cores - b.info.cores;
  });
  console.log(sortedByIndex2);
  
  
