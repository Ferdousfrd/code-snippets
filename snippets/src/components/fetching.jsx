// fetching using useEffect() hook for side effects
import { useState, useEffect } from "react"

export default function ApiStuff(){
    const [apiData, setApiData] = useState({})
    

    useEffect(() => {                                       // since we using external api, it gives is side effect. 
                                                            // to keep our prgram in sync with our external things we use useEffect()
        fetch("https://swapi.dev/api/people/1")             // gives us a promise.
        .then(response => response.json())
        .then(data => setApiData(data))
    },[]                                                    // [] this is dependecies array, the second peremeter. useEffect(function, [])
                                                            // leaving it empty, [] makes our fetch api func only once at the begining when conponent renders
    )
    

    return <h1>{JSON.stringify(apiData)}</h1>           // gotta make the json obj. data a string for readability
}







// Notes
// using data from outer place, we need to :
    // 1. use fetch to get the data
    // 2. save the data in our state and use it or display it
// fetch gives us a promise

// 'side effects' happen when some code are not working under react. I mean api calls are external things,
// react doesnt have control over. check this and the video after for more details 'https://v2.scrimba.com/learn-react-c0e/~03r'
// we use useEffect() to prevent this side effects breaking our program
// we put all those external functions inside of useEffect to keep them in sync with our program