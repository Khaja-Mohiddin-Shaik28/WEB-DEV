let promise = new Promise( function ( resolve, reject ){
    if( true ) resolve(1);
    else reject( 0 );
} )

promise.then(
    function( msg ){
        console.log( msg );
    }
)
.catch( function( msg ){
    console.log(msg);
} )
.finally( function(){
    console.log( "Completed" );
} ) 


// here second function is for catching error
// let promise = new Promise(function (resolve, reject){
//     if(true) resolve(1);
//     else reject(0);
// } )

// promise.then(
//     function(msg){
//         console.log(msg);
//     },
//     function(msg){
//         console.log(msg);
//     }
// )