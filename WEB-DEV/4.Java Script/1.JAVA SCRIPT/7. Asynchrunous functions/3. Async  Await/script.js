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

}

numbers()

// When async has a return it wraps it in a promise