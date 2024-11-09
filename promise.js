// Promises will take resove and reject callbacks based on excution it will return either 
// its rejected or resloved 
// Example : API calls are going to retun promises  

// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.
 // example for promises

 // promises are async tasks which will be added to webAPI queue to unblock js thread if in case 
//   if its takes more time to execute 

// once promise is done like either it may be funllfilled or rejected then these calls backs are added to microtask queue
// once callstack is empty then this event loop pull these callabcks to callstack

 const result = new  Promise((reslove, reject)=>{
    setTimeout(() => {
        reslove("on promise reslove");
    }, 1000);
 })

 result.then((res)=>{
    console.log('res',res);
    
    return res;


}).catch((err)=>{

})


// promise all its taks list of promises in array of arguments finally returs array of results once all the promise are done with there 
// Response, if one of the promise fails it will fails all the results

// example :

const promiseone = new Promise((reslove, reject)=>{
    reslove('hello from promise one')
})

const promisetow = new Promise((reslove, reject)=>{
    reslove('hello from promise two')
})

Promise.all([promiseone, promisetow]).then((result)=>{
    console.log(result);
}).catch(err=>{
    console.log('error occured while loading', err);
    
})