//DOM node creation using plain js 

function createNode() {
    //create node 
    const Heading = document.createElement('h1')
    //set content for heading
    Heading.innerHTML = 'Hello React!'
    //get div node so that i can insert into that 
    const rootElement = document.getElementById('root')
    rootElement.appendChild(Heading)
}
createNode()
