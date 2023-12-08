const promiseOne = new Promise(function (resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

// 2nd promise


new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})




// 3rd promise


const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
     resolve({username: 'chai', email: 'chai@example.com'})
   },1000) 
})

promiseThree.then(function(user){
    console.log(user);
})



// 4th promise

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
     let error = true
     if(!error){
        resolve({username: 'parth' , password:'123'})
     } else{
        reject('ERROR : Something went Wrong')
     }
    },1000)
})

 promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( ()=>{
    console.log('the promise is either resolved or rejected');
});



// 5th promise


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true
     if(!error){
        resolve({username: 'javascript' , password:'123'})
     } else{
        reject('ERROR : js went Wrong')
     }
    },1000)

});
































