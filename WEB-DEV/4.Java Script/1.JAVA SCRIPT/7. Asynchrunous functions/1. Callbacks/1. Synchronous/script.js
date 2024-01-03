// A function passed as an argument to another function is called callbacks

function myDisplayer(value){
    console.log(value);
}

function add(a, b, print){
    let sum = a + b;
    print(sum);
}

add(6, 6, myDisplayer);