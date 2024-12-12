// clousers
// clousers remember the outer function scope even after creation time

function human(name){
    function sayHi(){
        console.log(`Hi! I am ${name}`)
    }
    function feeling(){
        console.log(`${name} is feeling Fine!`)
    }

    return {
        sayHi,          // dont call the function here with (), it will run the function imediately. we refrence it.
        feeling
    }
}
const human1 = human("Robi") // clousers remebers the outer scope states
human1.sayHi()          




// // create a factory func
//  function robot(id, name){
// // retruns an obj. It is called factory func cuz it is like afactory to build instances
//     return{
//         id,
//         name
//     }
//  }

//  const roboCop = robot(5, "copRoro")
//  console.log(roboCop)