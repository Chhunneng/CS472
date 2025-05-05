class Exercise3 {
    #movies = new Map();

    // Adds a new genre if it does not exist
    add_genre(genre) {
        if (!this.#movies.has(genre)) {
            this.#movies.set(genre, []);
            return true;
        }
        return false;
    }

    // Adds a movie to a specific genre if movie ID does not already exist in that genre
    add_movie_in_genre(genre, new_movie) {
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        const exists = movies.some((movie) => movie.id === new_movie.id);
        if (!exists) {
            movies.push(new_movie);
            return true;
        }
        return false;
    }

    // Updates a movie's title by genre and movie ID
    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        const movie = movies.find((movie) => movie.id === movie_id);
        if (movie) {
            movie.title = new_title;
            return true;
        }
        return false;
    }

    // Deletes a movie by genre and movie ID
    delete_movie_by_genre_and_movie_id(genre, movie_id) {
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        const index = movies.findIndex((movie) => movie.id === movie_id);
        if (index !== -1) {
            movies.splice(index, 1);
            return true;
        }
        return false;
    }

    // Gets the title of a movie by genre and movie ID
    get_movie_title_by_id(genre, movie_id) {
        if (!this.#movies.has(genre)) return "";

        const movies = this.#movies.get(genre);
        const movie = movies.find((movie) => movie.id === movie_id);
        return movie ? movie.title : "";
    }
}

// Dummy test data
const ex3 = new Exercise3();

console.log(ex3.add_genre("thriller")); // true
console.log(ex3.add_genre("thriller")); // false

console.log(
    ex3.add_movie_in_genre("thriller", { id: "1", title: "The American" })
); // true
console.log(ex3.add_movie_in_genre("thriller", { id: "2", title: "Arcadian" })); // true
console.log(
    ex3.add_movie_in_genre("thriller", { id: "1", title: "Duplicated ID" })
); // false

console.log(ex3.get_movie_title_by_id("thriller", "1")); // "The American"

console.log(
    ex3.update_movie_title_by_genre_and_movie_id(
        "thriller",
        "2",
        "Arcadian Updated"
    )
); // true
console.log(ex3.get_movie_title_by_id("thriller", "2")); // "Arcadian Updated"

console.log(ex3.delete_movie_by_genre_and_movie_id("thriller", "1")); // true
console.log(ex3.get_movie_title_by_id("thriller", "1")); // ""
