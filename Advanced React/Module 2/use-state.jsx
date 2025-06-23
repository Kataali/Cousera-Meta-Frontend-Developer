// When you need to hold state in an object and update it, initially, you might try something like this:

import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting({ greet: "Hello, World-Wide Web" }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 

/* 
While this works, it's not the recommended way of working with state objects in React, 
this is because the state object usually has more than a single property, 
and it is costly to update the entire object just for the sake of updating only a small part of it.

The correct way to update the state object in React when using useState
The suggested approach for updating the state object in React when using useState 
is to copy the state object and then update the copy.

This usually involves using the spread operator (...).
*/

import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting}; 
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 

/*
Updating the state object using arrow functions
Now, let’s use a more complex object to update state.
*/
import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  }
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
/*
The reason this works is because it uses the previous state, which is named prevState, 
and this is the previous value of the greeting variable. 
In other words, it makes a copy of the prevState object, 
and updates only the place property on the copied object. 
It then returns a brand-new object: 
*/