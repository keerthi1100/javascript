
const firstPromise = ()=>{   
    return new Promise((reslove, reject)=>{
        console.log('calling first');
        reslove('hello from first promise 1')
    })  
}

const secondPromise = ()=>{
        return new Promise((reslove, reject)=>{
            console.log('calling second');
            reslove('hello from second promise 2')
        })
}


Promise.all([secondPromise(), firstPromise()]).then((x) => {
    console.log(x)
  });

console.log('hello')