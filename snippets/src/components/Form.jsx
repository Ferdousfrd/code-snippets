import { useState } from "react"

export default function Form(){

    const[formData, setformData] = useState({
        firstName : "",
        lastname : "",
        email : "",
        comment : "", 
        isFriendly : true,
        employment : "",
        favColor : ""
    })

    console.log(formData)

    function handleChange(event){                               // this event object comes with thie fucntion by default

        const {name, value, type, checked} = event.target       // destructuring event.target to get the obj properties

        setformData(prevName => {
            return {
                ...prevName,                                    // to get the othere items in the obejct that are unchanged
                [name] : type === 'checkbox'? checked : value,  // checking if it is a checkbox or normal input
                                                                // event.target.name gives us the html element name we just used. event.target.value gives use the value of that dom element
            }    
        })                                      
    
    }

    return (
        <form>
            <input 
                type="text"
                placeholder="First Name"
                name="firstName"                // this name should be same as our state name. it allows use to use event.target.name
                onChange={handleChange}         // onChange works for every key stroke changing
                value={formData.firstName}
            />

            <input 
                type="text"
                placeholder="Last Name"
                name="lastname"
                onChange={handleChange}         // onChange works for every key stroke changing
                value={formData.lastname}
            />

            <input 
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}    
                value={formData.email}          // this "value" we should use for "controlled components" or "derived state". If we dont use it, 
                                                // then we have two different state. One from our useState with onChange, another 
                                                // is the html element state. details 'https://v2.scrimba.com/learn-react-c0e/~03h'
            />


            <textarea
                placeholder="Comment"           // textarea in React is selfclosed element. Its same like input except
                name="comment"                  // it doesnt have 'type' property
                value={formData.comment}
                onChange={handleChange}
            />

            <label>Are you Friendly?                    
                <input                                   // use label tag around to put a label
                    type="checkbox"
                    checked={formData.isFriendly}        // checkboxes get 'checked' property instead of 'value'
                    name="isFriendly"
                    onChange={handleChange}
                />
            </label>

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"                    // this id will be used when we use a label for it. htmlfor uses this id
                    name="employment"
                    onChange={handleChange}
                    value="unemployed"                
                    checked={formData.employment==="unemployed"}        // for controlled component, keep the state same
                                                                        // check this for details https://v2.scrimba.com/learn-react-c0e/~03k
                />                                              
                <label htmlFor="unemployed">Unemployed</label>  
                <br /> 
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    onChange={handleChange}
                    value="part-time"
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    onChange={handleChange}
                    value="full-time"
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            

        </form>
    )
}