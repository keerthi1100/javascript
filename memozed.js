

/*
Memoised function is use to return cached values if in case of same input is given over over again
Momised funciton check for value in a cached variable and return that variable if in case we have 
Insted of calling the function 

This will be optimize the function calling performance 
This is usefull for expensive calculation 
*/

let cachedValue = {};

const memoizedFunction = (callback, value)=>{
    if(cachedValue[value]) return cachedValue[value];
    console.log('in else');
    cachedValue[value] = callback(value);
    return cachedValue[value];
}

const funClback = (value)=>{
    return value * 10;
}

console.log('value is:',memoizedFunction(funClback, 10))
console.log('value is:',memoizedFunction(funClback, 10))
console.log('value is:',memoizedFunction(funClback, 40))
