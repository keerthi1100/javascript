/*
    Polyfils are creating functions as what we need 
    suppose old browsers like internet explore wont support new js versions 
    In that case we can create own polyifils and use it accross

    Tips: 
        Just remember rules of the function which we need to create 
        ex: map will return new array based on callback
        filter will return new array basaed on conditon in a callback
        reduce will return one element based on type 


*/


const array = [1,2,3,4,5];
Array.prototype.map = null;

// this is for map
Array.prototype.customMap = function (callback){
    let array_ = [];
    for(let i = 0; i<this.length; i++){
        array_ = [...array_, callback(this[i], i)]
    }
    return array_;
};

const res = array.customMap((item, index)=>{
    return item * 2;
    
})


// this is for filter

Array.prototype.myFilter = function(callback)
{
    let arr = [];
    for(let i = 0; i<this.length; i++){
        if(callback(this[i])){
            arr = [...arr, this[i]];
        }
    }
    return arr;
}

const filterRes = array.myFilter((item)=> {
    return item > 2
})

// this is for reduce

Array.prototype.myReduce = function(callback, initialValue){
    let acc = initialValue;
    for (let index = 0; index < this.length; index++) {
        acc = initialValue ? callback(acc, this[index]) : this[index]
    }
    return acc;
}

const resss = array.myReduce((acc, curr)=>{

    sum = curr + 2;
    acc.push(sum);
    return acc;

},[])

console.log(resss);
