// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie {
    constructor(title, studio, rating) {
    this.title = title,
    this.studio= studio,
    this.rating=rating||"PG"
    };

}
let movie3 = new Movie("avatar", "20th Century Studio", 'PG-8.5');
let movie4 = new Movie("avatar2", "20th Century Studio");
console.log(movie3, movie4)
