{/*

    The async and await is a wrapper for promise making the code execute more synchronously.
It does not have any states. It returns a promise either resolved or rejected.
Error handling is done using .try() and .catch() methods.
Using Async/Await makes it easier to read and understand the flow of the program as compared to promise chains.

Source credit: GeeksforGeeks

Example: 

*/}

const functionwithAsync = async ()=>{
    try{
        const result = await fetch('https://jsonplaceholder.typicode.com/todos');
        const resJson = await result.json();
        console.log(resJson);
    }
    catch(Err){
        console.log(Err)
    }
    console.log('this will be called once it gets its promise coz of async and await nature')
}

functionwithAsync();

const wihtOutUsingAsyncAndAwait = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        return res.json();
    })
    .then((responseJson)=>{
        console.log(responseJson)
    })
    .catch(err=>{
        console.log('error', err);
        
    })
    console.log('will be called before the promise coz this will be added to callstack no matter of promise fullfill or rejct');
    console.log('this will be called again before promise');
}

wihtOutUsingAsyncAndAwait();