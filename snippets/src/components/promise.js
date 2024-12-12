/* 
    A promise is an object that manages async operations
    async operations like fecthing data, reading a file. they need time to be completed.
    so we wrap these operations with promise and then the pending time is done, depending on
    pass fail, it resolves or rejects. 

    easy tutorial
    "https://www.youtube.com/watch?v=NOzi4wBHn0o"
*/

function walkDog(){
    return new Promise((resolve, reject)=>{
        const dogWalked = false
        if(dogWalked){
            resolve("GOOD job!")
        }
        else {
            reject("Go walk the dog!")
        }
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        resolve("Clean the dishes")
    })
}

walkDog()
    .then(value => {console.log(value); return cleanKitchen()})         // method chaining then methods
    .then(value=>console.log(value))
    .catch(err => console.log(err))