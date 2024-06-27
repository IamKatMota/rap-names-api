//this only serves JSON and html not css or js

const express = require('express') //requires express
const app = express() //to easily use express using app variable
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName':'Sheyaa Bin Abraham-Joseph',
        'birthLocation':'London, England',
        },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennet',
        'birthLocation':'Chicago, Illinois',
        },
    'unknown':{
        'age': 0,
        'birthName':'unknown',
        'birthLocation':'unkown',
        }
    
    }





//serve up a file when they go to the main page
// '/' is the main path
//when it hears the network request of '/' it fires the callback function [it's like a click event listener]
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html') //what we will be sending the client after request, usually an html file 
})


//if they make a request to api, respond with some json(a rappers object)
// /:name is to use query parameters for whatever rapper name the user writes
app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLocaleLowerCase()

   
    if(rappers[rapperName]){
        response.json(rapper[rapperName])
    } //if rapperName is a property of rappers, whatever gets passed in see if that exists inside that rappers object and if it does respond with its info in json
    else{
        response.json(rappers['unknown'])
    }

    response.json(rappers)
})
    //set server up to listen on a specific port and once it's running it will console log a message
app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}!`)
})

