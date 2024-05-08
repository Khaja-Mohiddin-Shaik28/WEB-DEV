function timer(time , work){
    return new Promise( (resolve, reject) =>{
        setTimeout( () => resolve(work()), time );
    } )
}

async function numbers(){

    await timer( 1000, () => console.log(1) )
    await timer( 2000, () => console.log(2) )
    await timer( 3000, () => console.log(3) )
    await timer( 4000, () => console.log(4) )
    return "HELLO"
}

numbers().then( (msg) =>{
  console.log(msg)
} )


// When async has a return it wraps it in a promise

/* 
async function exampleAsyncFunction() {
  return "Hello, this is a non-Promise value!";
}

exampleAsyncFunction().then((result) => {
  console.log(result); // Output: Hello, this is a non-Promise value!
});



async function exampleRejectedAsyncFunction() {
  throw new Error("This is a rejected promise!");
}

exampleRejectedAsyncFunction().catch((error) => {
  console.error(error.message); // Output: This is a rejected promise!
});

*/


/* 
Handle error from await
function timer(time, work) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(work()), time);
    });
}

async function numbers() {
    try {
        await timer(1000, () => console.log(1));
        await timer(2000, () => console.log(2));
        await timer(3000, () => {
            throw new Error('Custom error occurred');
        });
        await timer(4000, () => console.log(4));
        return "HELLO";
    } catch (error) {
        console.error('An error occurred:', error.message);
        // You can handle the error here, such as logging it, showing a message to the user, etc.
    }
}

numbers().then((msg) => {
    console.log(msg); // This will not be executed if an error occurs within the async function
}).catch((error) => {
    console.error('An error occurred outside the async function:', error.message);
});
 */