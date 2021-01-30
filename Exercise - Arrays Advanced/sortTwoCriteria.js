function sort(arr){
    arr.sort(function(a,b){
        a.toUpperCase();
        b.toUpperCase();
        if(a.length == b.length){
            return a.localeCompare(b);
        }else{
            return a.length - b.length;
        }
    })

    console.log(arr.join("\n"));
    
}

sort(["alpha", "beta", "gamma","betat","bet","alfa"])