// add function around it?

// function sumNumbers(arrNum){
//     var count = 0
//     arrNum.forEach((num) => {
//         count += num;        
//     })
// return count;
// }
// console.log(sumNumbers([1,2,3,50]))


// function sumNumbers(){
//     var count = 0
//     arrNum = [1,5,6]
//     arrNum.forEach((num) => {
//         count += num;        
//     })
// console.log(count)
// }
// sumNumbers();



// function sumNumbers(arrNum){

//     var count = 0
//     return count;
// }
// console.log(sumNumbers([1,2,3,50]))






// function sumNumbers(num){

//     const arrNum = [1,2,3]
    
//     if (arrNum != null ){
//         var count = 0
//         arrNum.forEach((num) => {
//             count += num         
//         })
//     } else {
//         return count;
//     }
//     console.log(sumNumbers(num))
//     }
    


// for each method time complexity
// i think the time complexity is O(n) or faster?
// no for loop but it still does have to run through each number. o(n)


// if (arrNum != null ){
//     let count = 0;
//     for (i=0; i<arrNum.length; i++){
//         count = count + arrNum[i]
//     }
//     console.log(count)
// }


// time complexity.
// one for loop - > O(n)

// can it be faster? yes i think the foreach method should be faster. let's see.
// they are both o(n)
// can we get rid of the loop? if we don't know the length in advance then there's no way
// to shorten

// 



// function solution(numbers) {
//     var zigZag = []
//     if (numbers != null){
//         for (i=0; i<numbers.length; i++){
//             if (numbers[i] < numbers[i + 1] && numbers[i + 1] > numbers[i + 2]){
//             var zig = true;
//             zigZag.push(1)
//             }
//             else if (numbers[i] > numbers[i + 1] && numbers[i + 1] < numbers[i + 2]){
//                 zig = true;
//                 zigZag.push(1)
//             }
//             else {
//                 zig = false;
//                 zigZag.push(0)
//             }
//         }
//     }
//     zigZag.length = numbers.length - 2
//     return zigZag;
//     }
//     console.log(solution([1, 2, 1, 3, 4]));










// function solution(numbers, left, right) {
//     var result = []
//     if (numbers !=null){
//         for(i=0; i<numbers.length; i++){
//             var x = numbers[i] / (i +1);
//         if (x % 1 == 0 && x >= left && x <= right){
//             console.log(numbers[i] + "," + x)
//             result.push(true)
//         }else { 
//             result.push(false)
//         }
//         }
//     }
//     return result
//     }
// console.log(solution([8, 5, 6 , 16, 5], 1, 3));





// function solution(s, t) {
//     // looking for s to be smaller, whatever is smaller comes first in order
//     // so numbers come before letters in this order
// var arr = [s,t]
// arr.sort();
// // check  every digit in both the strings, 
// // remove (replace) em and then check if s is now smaller
// // if s is smaller, add it to the count (done)
// // print the count (done)


// for(){
//     sIsSmaller = false;

// }
//     if (arr[0] == s){
//         sIsSmaller = true;
//         count ++
//     }


// console.log(sIsSmaller)
// console.log(arr)

// //return count
// }
// solution("ab12c","1zz456");
// //console.log(solution("ab12c","1zz456"))






var someFun = () => {
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let count = 0

// var citrus = fruits.slice(1, 3);
// return citrus;

// var citrus = fruits.filter((fruit) => {return fruit.length > 5})
// return citrus

// fruits.forEach(() => {count++})
// return {count, citrus}


}

console.log(someFun())

