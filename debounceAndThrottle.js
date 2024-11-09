
// debounce is to make function on some delay its like pausing the execution 
        // usecase of debounce
//         1> for search input to stop unnecessery API calls
// // function will be executed on given on certain time period
//         // usecase of throttle 
//         1> for scroll events or window resize


// example to create debounce

const debounce = (callback, delay = 500)=>{
    let delayTime;
    return (...args)=>{
        clearTimeout(delayTime);
        delayTime = setTimeout(() => {
            callback(...args);
        }, delay);

    }
}

const callFunWithDebounce = debounce(()=>{
    console.log('hello after debouce')
}, 500)

const throttle = (callback, delay = 500)=>{
    let lapsTime = 0;
    return (...args)=>{
        const now = new Date().getTime();
        if(now - lapsTime >= delay){
            callback(...args);
            lapsTime = now;
        }
    }
}

const callFunWithThrottle = throttle(()=>{
console.log('from throttle');
},1000)