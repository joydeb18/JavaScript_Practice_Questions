let obj= {
    name : "joy",
    age: 22,
    city: "gmp",
}


let getObject = (object) => {
    return Object.keys(object).length;
}

console.log(getObject(obj));
