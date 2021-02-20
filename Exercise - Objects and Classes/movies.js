function movies(data){
    class Movie{
        constructor(name, director, date){
            this.name = name;
        }
    }

    let movieList = []

    for (const line of data) {
        if( line.includes("addMovie")){
            const movieName = line.split("addMovie ")[1];
            let movie = new Movie(movieName);
            movieList.push(movie);
        }else if(line.includes("directedBy")){
            const [movieName, director] = line.split(" directedBy ");
            movieList.forEach(movie =>{
                if(movie.name == movieName){
                    movie.director = director
                }
            })            
        }else if(line.includes("onDate")){
            const [movieName, date] = line.split(" onDate ");
            movieList.forEach(movie =>{
                if(movie.name == movieName){
                    movie.date = date
                }
            })     
        }
    }

    movieList.forEach(movie =>{
        if(typeof movie.director != "undefined" && typeof movie.date != "undefined"){
            console.log(JSON.stringify(movie));            
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'addMovie Inception',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])