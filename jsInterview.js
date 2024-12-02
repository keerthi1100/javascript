/*
    Guess the output: 
        1> hoisting 
        2> Array comparision 
        3> Type of 
*/

/*
    Here first a is declared and also initialized 
    but inside function aa() there is another same variable a

    in JS first prefrece it will be block scope so its var in nature its a global scope
    it will be taken top to its lexcical scope and initilise with undefined
    after reaching initlizations it will return inilized value

*/

var a = 10;
function aa(){
    function bb(){
        console.log(a);
        
    }
    bb();
    var a = 20;
    bb();
}

aa();

let one = [1,2,3];
let two = [1,2,3];
let three = two;
let four = three;

console.log("three ===:",one === two); // false --> this is because adding desciptoin below
console.log('two ==',one == two); // false --> same
console.log('two ==',three == two); // true
console.log("three ===:",three === two); // true

/*
Javascript arrays are objects and you can't 
simply use the equality operator == to understand 
if the content of those objects is the same. 
The equality operator will only test if two object are actually exactly the same 
instance (e.g. myObjVariable==myObjVariable, works for null and undefined too).
*/

/*
    typeof function --> function
    typeof Array --> obj
    typeof obj --> obj
    typeof string --> string
    typeof number --> number
    typeof bool --> boolean
*/
const fun = () => {}

console.log( typeof(function(){}) );
console.log(typeof(fun));
console.log(typeof([]));
console.log(typeof({}));
console.log(typeof(true));
console.log(typeof(100.000));
console.log(typeof('true'));


console.log('-------------------------------------------------------------------');

const obj = {
    foo: 'Bob',
    fun: function(){
        let another = this;
        console.log('this in function', this);
        console.log('this is for this',this.foo);
        console.log('this is for this',another.foo);

        function bb(){

            /* 
            In the posted example the second function (the one with this.foo) 
            is not invoked using the x.f() form and so this is the window object
            here in this closure this will point to window as its not invoked with context.fun()

            so you can retain this by assinging another coz closer we can access to context of this 

            */
            console.log('this inside bb', this);
            
            console.log('this is for inside nexte fun',this.foo);
            console.log('this is for this inside nested fun',another.foo);
        }  
        
        bb();
    }
}

obj.fun();








