//Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.


let arr = [1, "hello", 2, "world", 3, "JavaScript", 4, "is", 5, "fun"];


let resultArr = arr.filter((element) =>{
    if(typeof element === 'string')
        {
        return true;
    }else{
        return false;
    }}
)

console.log(resultArr);