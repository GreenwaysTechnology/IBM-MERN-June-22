import React from 'react'
import ReactDOM from 'react-dom'


const Link = () => <ul>
    <li><a href="letscreate">Let's Create</a></li>
    <li><a href="products">Products and Solutions</a></li>
    <li><a href="consulting">Consulting & Services</a></li>
    <li><a href="support">Learn & Support</a></li>
</ul>

const Search= ()=><input placeholder="Search Items"/>

//menu bar 
const MenuBar = () => <nav>
     <Link/>
     <Search/>
</nav>


//Header
const Header = () => <div>
    <h1>Header</h1>
    <MenuBar />
</div>

//footer
const Footer = () => <div>
    <h1>footer</h1>
</div>

const Body = () => <div>
    <h1>Component Based</h1>
    <p>
        Build encapsulated components that manage their own state, then compose them to make complex UIs.

        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
    </p>
    <h1>Declarative</h1>
    <p>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

        Declarative views make your code more predictable and easier to debug.
    </p>
</div>

const Page = () => <div>
    <Header />
    <Body />
    <Footer />
</div>


ReactDOM.render(<Page />, document.getElementById('root'))