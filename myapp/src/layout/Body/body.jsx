import React from 'react'


//style object 
const header = {
    color: 'red',
    backgroundColor: 'pink'
}

export const Body = () => <div>
    <h1 style={header}>Component Based</h1>
    <p>
        Build encapsulated components that manage their own state, then compose them to make complex UIs.

        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
    </p>
    <h1>Declarative</h1>
    <p style={{fontSize:25,fontFamily:"monospace"}} >
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

        Declarative views make your code more predictable and easier to debug.
    </p>
</div >