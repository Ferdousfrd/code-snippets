// Practicing abour callback func and promises in JS

/*
    callback func :
        callback is a function that is passed as an argument to another function. Example : function viewDoc(callback)
        we use callback functions to handle async operations. It means when we have a function that needs to work in background 
        to get a reuslt but that shouldnt stop our program. And when its done, send the result. Such as Reading a file, interacting with db.
        So, it works like, normal function(viewDoc) do it or run it, once its done, run the callback func




//we want to show HEllo first and goodbye later, not the other way around

// lets say we have a function that prints hello. We have a setTimout method to delay the hello print by half sec
function hello(){
    setTimeout(()=>(
        console.log("Hello!")
    ), 500)
    
}

// we have another function that says Goodbye
function goodBye(){
    console.log("Good Bye!!")
}

hello()
goodBye()

// console logging goodbyt first then hello because of the  setTimeout delay. 
// to prevent this we can use callback func. we send goodbye func to hello func as an arg. 
As a result, only when hello is done no matter how much delay it has, the goodbye func will work

*/


function hello(callback){               // passing a func as an arg
    setTimeout(()=>{
        console.log("Hello!")
        callback()                      // caling the arg func or running the arg func after the main func work
    }, 500)   
}


function goodBye(){
    console.log("Good Bye!!")
}


// setting the goodBye func as the arg. BE SURE to not use goodBye() in the arg. 
//() at the end of goodBye will make it run rightaway
hello(goodBye)                          
                                        
// Another example: I have to create a func that takes 3 param, callback, x, y.(func, num, num). this func will sum the nums and store it in result var.
// the callback func will display or console.log the result.

function sum(callback, x, y){
    const result = x + y
    callback(result)
}

function displayResult(result){
    console.log(result)
}

sum(displayResult, 3, 5)


// Callback Hell = Situation in JavaScript where callbacks 
//                           are nested within other callbacks to the
//                           degree where the code is difficult to read.
//                           Old pattern to handle asynchronous functions.
//                           Use Promises + async/await to avoid Callback Hell

function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1500);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>console.log("all done"))
        })
    })
})
