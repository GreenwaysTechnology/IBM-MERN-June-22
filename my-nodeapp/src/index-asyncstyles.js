//callback chaining
const getUser = () => {
    console.log('get User is called')
    return new Promise((resolve, reject) => {
        let user = { id: 1, name: 'admin' }
        // user = null
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, { err: 'User not found' });
        }
    })
}
const login = user => {
    console.log('login User is called')

    return new Promise((resolve, reject) => {
        let status = 'login success'
        let errorMessage = 'login failed'

        if (user.name === 'admin') {
            setTimeout(resolve, 1000, status);
        } else {
            setTimeout(reject, 1000, errorMessage);
        }
    })

}
const showDashboard = status => {
    console.log('showDashboard User is called')
    return new Promise((resolve, reject) => {
        let adminpage = 'Admin Page'
        let guestpage = 'Guest Page'

        if (status === 'login success') {
            setTimeout(resolve, 1000, adminpage);
        } else {
            setTimeout(reject, 1000, guestpage);
        }
    })

}

//callback chaining
// getUser((user) => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//         showDashboard(status, adminPage => {
//             console.log(adminPage)
//         }, error => {
//             console.log(error)
//         })
//     }, err => {
//         console.log(err)
//     })
// }, (err) => {
//     console.log(err)
// })

//promise 
// getUser()
//     .then(user => {
//         console.log(user)
//         return login(user)
//     })
//     .then(status => {
//         console.log(status)
//         return showDashboard(status)
//     })
//     .then(page => {
//         console.log(page)
//     })
//     .catch(err => {
//         console.log(err)

//         console.log(err)
//     })

async function main() {
    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showDashboard(status)
    }
    catch (err) {
        console.log(err)
    }
}
main()