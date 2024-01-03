function timer (time, work){
    return new Promise( function(resolve, reject){
        setTimeout( () => resolve( work() ), time);
    } )
}

timer(1000, () => console.log(1) )
.then( () => timer( 2000, () => console.log(2) ) )
.then( () => timer( 3000, () => console.log(3) ) )
.then( () => timer( 4000, () => console.log(4) ) )







// let promise = new Promise( function(resolve, reject){
//     setTimeout( () => resolve(1), 1000 );
// } );

// promise.then( (result) => {
//     console.log(result);
//     return new Promise( function(resolve, reject ){
//         setTimeout( () => resolve(2), 2000 );
//     } )
// } )
// .then( (result) => {
//     console.log(result);
//     return new Promise( function(resolve, reject ){
//         setTimeout( () => resolve(3), 3000 );
//     } )
// })

// .then( (result) => {
//     console.log(result);
//     return "done";
// })
// .then( (result) =>{
//     console.log(result);
// } )
// .finally( () => console.log("Completed") )