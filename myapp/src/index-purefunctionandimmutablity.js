//pure function second rule 

//whether this function is pure function or not?

//this is impure function , because which tries to update the same memory address
// function updateProfile(profile, city) {
//     //update city of the profile
//     profile.city = city
//     return profile;
// }

//this function is pure function: which never mutates the old object
function updateProfile(profile, city) {

    //immutable representation
    // in order to create immutable object we have three ways 
    //way 1 : we have to copy all properties from old object to new object except
    //the properties which are changing
    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // }

    //way 2 :  in the above, we have manually copy all the properties,which is very complex and also not good for big objects 
    //    return Object.assign({}, profile, { city: city })

    //way 3: even we can simplify object immutablity using spread operator(...)
    //return { ...profile, city: city }
    // 
    return { ...profile, city }

}


let profile = { id: 1, name: 'Subramanian', city: 'Chennai' }

//api to test immutablity
Object.freeze(profile)

console.log("Before Update", profile)
const result = updateProfile(profile, 'Coimbatore')

console.log("After Update", result)
/////////////////////////////////////////////////////////////////////////////////////

//Array

function addToCart(cart, item) {
    //return cart.concat(item) //concact returns new Array
    return [...cart, item] //using spread
}

let cart = []
addToCart(cart, { id: 1, name: 'book' })