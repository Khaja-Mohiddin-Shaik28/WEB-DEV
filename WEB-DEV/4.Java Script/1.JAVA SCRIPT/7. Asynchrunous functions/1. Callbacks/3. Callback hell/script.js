setTimeout( () => {
    console.log(1)
    setTimeout( () => {
        console.log(2);
        setTimeout( () => {
            console.log(3);
            setTimeout( () => {
                console.log(4);
                setTimeout( () => {
                    console.log(5);
                }, 5000)
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000 )