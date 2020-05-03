function freq(arr) {
    // If there isn't more than one item in the array then we can return false
    if (arr.length < 2) {
        return false;
    }

    // Create an empty object to hold the values in the first array
    // Define array to hold duplicates
    let freqCounter = {};
    let occuredMoreThanOnce = [];
   
    // We loop through the values in the array to build our object
    for (let val of arr) {
        // We check if there is already an exsisting key's value inside our objeect
        if (freqCounter[val]) {
            // If we there is already a key with that value we simply add one
            freqCounter[val] += 1;
        } else {
            // Otherwise we set that value equal to 1
            freqCounter[val] = 1;
        }  
    }

    // We loop through the object one more time 
    for (let key in freqCounter) {
        // If any of the keys values are greater than 1 we add the key to our empty array
        if (freqCounter[key] > 1) {
            occuredMoreThanOnce.push(key);
        }
    }
    // We return our new array with the keys that occured more than once in the array
    return occuredMoreThanOnce;

}

console.log(freq([1,2,2,3,4,4,4,4,5,0,0]));



function freq(arr) {
    // If there isn't more than one item in the array then we can return false
    if (arr.length < 2) {
        return false;
    }

    // Create empty array
    let occuredMoreThanOnce = [];

    // Sort through the array from least to greatest
    let sortedArr = arr.sort( (a, b) => {
        return a - b;
    })

    // Loop through sorted array to check for duplicates to the left or to the right
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
            // If we find any values we add that value to the empty array
            occuredMoreThanOnce.push(arr[i]);
        }
    }
    // We llop through one more time and filter duplicate values and return our final array
    let filteredArray = occuredMoreThanOnce.filter( (item, index) => {
        console.log(item, index)
        return occuredMoreThanOnce.indexOf(item) === index;
    })
    return filteredArray;
}

// console.log(freq([1,2,2,3,4,4,2,4,1,0,2]));

