/*
    __proto__ --> is nothing but its an refrence that pointing to Object Prototype
    In Javascript everyting is an object 
    when ever you create new constructor function it will have its own proto which will point to Object prototype
    Example:

    In the below example we have this showconsole new funciton 
    that will be added to proto of first function obj 
    we can resue same function by another object by making setPrototypeOf(toObject, fromObj)
    so we can use proto type of that object 
    This will only create refrence to that prototype

*/

function protoExample (){
    this.x = 10;
    this.y = 20;

    console.log(this);
    
}

function protoExample_ (){
    console.log(this);
}

protoExample.prototype.showConsole = function (){
    console.log('new fun');   
}
let p = new protoExample();
let q = new protoExample_();
Object.setPrototypeOf(q,p);


q.showConsole();



