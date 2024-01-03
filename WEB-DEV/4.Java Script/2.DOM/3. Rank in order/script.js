elem = document.body;
ids = [first, second, third, fourth];
size = ids.length;
i = 0;
let timerId = setInterval(
        () =>{
            ids[i].after(ids[i+1]);
            i = i + 1;
            if(i == size - 1){
                clearInterval(timerId);
            }
    },
    1000
);

