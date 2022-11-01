// Question - 1 - 20
/**
 * Create a function to return an array 
 *  after removing given number from the given array
 */ 
/** 
 * Example:
 * input: [1, 2, 3, 4, 5] , 2  
 * output: [1, 3, 4, 5]
 * 
 * input: [21, 32, 12, 43, 45, 65, 12], 12
 * output: [21, 32, 43, 45, 65]
 * 
 * input: [-1, 2, 43, 65] , 11
 * output: [-1, 2, 43, 65]
 */
 function removeNumFromArray(num, numArray) {
    // code
}
​
const arr1_1 = [1, 2, 3, 4, 5];
const numArrayAfterRemoval1_1 = removeNumFromArray(2, arr1_1);
console.log(numArrayAfterRemoval1_1);
    // [1, 3, 4, 5]
    
const arr1_2 = [21, 32, 12, 43, 45, 65, 12];
const numArrayAfterRemoval1_2 = removeNumFromArray(12, arr1_2);
console.log(numArrayAfterRemoval1_2);  
    // [21, 32, 43, 45, 65]
​
const arr1_3 = [-1, 2, 43, 65];
const numArrayAfterRemoval1_3 = removeNumFromArray(11, arr1_3);
console.log(numArrayAfterRemoval1_3);  
    // [-1, 2, 43, 65]
​
​
​function arrayRemove(arr, value) { 
    
    return arr.filter(function(num){ 
        return num != value; 
    });
}
console.log(arrayRemove(arr, 2));
