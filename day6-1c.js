class Movie {
    constructor(title, studio, rating) {
    this.title = title,
    this.studio= studio,
    this.rating=rating
    };
    // second way to find the pg rating movies
    static get(array) {
        let pgArray = [];
        for (let i = 0; i < array.length; i++){

            if (array[i].rating == "PG") {
                pgArray.push(array[i])
            }
            
        }
        return pgArray;
    }
    // second way to find the pg rating movies
    static getPG(array) {

        let result = array.filter((values) => {
            for (let key in values) {
                if (values[key] == 'PG') {
                    return(values,':',values[key])
                }
            } 
        })
        return(result);
    }

}



    const movies = [new Movie("avatar", "20th Century Studio", 'PG-8'),
        new Movie("avatar2", "20th Century Studio", 'PG-9.5'),
        new Movie("Spiderman", "Marvel camics", 'PG'),
        new Movie("Spyderman2", "Marvel camics", "PG")]




console.log(Movie.get(movies));
console.log(Movie.getPG(movies));








