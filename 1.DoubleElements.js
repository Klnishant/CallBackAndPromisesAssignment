function doubleArrayElement(arr,callback){
    const doubleArray=arr.map(callback);
    return doubleArray;
}

function doubleNumber(num){
    return num*2;
}

const originalArray=[1,2,3,4,5];
const doubleArray=doubleArrayElement(originalArray,doubleNumber);

console.log("Double Array:",doubleArray);