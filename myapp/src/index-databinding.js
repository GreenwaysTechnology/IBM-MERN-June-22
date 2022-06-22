import React from 'react'
import ReactDOM from 'react-dom'


//Component display data- primtive,objects,arrays

//function 
function getDisLikes(){
    return 100
}


const Profile = () => {
    //variables
    let name = 'Subramanian' // string
    let status = true; //boolean 
    let likes = 100; //numbers
    let address = {
        city: 'Coimbatore'
    }
    let friends = [{
        name: 'A1'
    },
    {
        name: 'A2'
    },
    {
        name: 'A3'
    }

    ]


    return <div>
        {/* Data binding */}
        <h2>Name : {name}</h2>
        <h2>Likes : {likes * 2} Dislikes {getDisLikes()}</h2>
        <h2>Status : {status ? "Active" : "InActive"}</h2>
        <h2>City : {address.city}</h2>
        <h2>Friends</h2>
        <ul>
            {
                //javascript loop :
                friends.map((friend) => {
                    return <li>
                        {friend.name}
                    </li>
                })
            }
        </ul>
    </div>

}




const App = () => <div>
    <Profile />
</div>

ReactDOM.render(<App />, document.getElementById('root'))