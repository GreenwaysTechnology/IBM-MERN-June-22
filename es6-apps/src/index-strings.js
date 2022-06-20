//variable declaration - strings
//"",'', ``(es 6 notation)

//es 5 declaration
var firstName = 'Subramanian'
//es 6 declaration : let/const vs var : to be dicussed later
let lastName = 'Murugan'
//string concatation using es 5 style
console.log("Name " + firstName + lastName)
console.log("Name ", firstName, lastName)
//string concatation using es 6 style -  string interpolation using backtick notation 
console.log(`Name  ${firstName} ${lastName}  `)

let resource = 'customers'
let url = `http://www.example.com/api/${resource}`


//use case for back tick and interpolation : multi line 
//multi line strings using es 5 pattern:
let title = 'Google'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)