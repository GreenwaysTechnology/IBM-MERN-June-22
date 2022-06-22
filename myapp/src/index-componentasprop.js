import React from 'react';
import ReactDOM from 'react-dom'

//Layout

const Layout = props => <div>
    {/* insert children */}
    {props.children}
</div>

const Header = props => <nav>
    <h1>Header</h1>
    {props.children}
</nav>
const MenuBar = () => <nav>
    <a href="#">Services</a>
</nav>

const Body = () => <div>
    <p>This is body</p>
</div>
const App = props => {
    return <div>
        <Layout>
            {/* Component as prop */}
            <Header>
                <MenuBar />
            </Header>
            <hr />
            <Body />
        </Layout>
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))
