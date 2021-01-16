function solve(n){
    n = Number(n);
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    if(n >=1 && n <= 12){
        console.log(month[n-1]);;
    }else{
        console.log("Error!");
    }
}

solve(2);
solve("13")