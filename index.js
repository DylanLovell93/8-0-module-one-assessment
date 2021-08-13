/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require('./movies');
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //declare variable to accumulate to, set to empty array
  const movieTitles = [];
  //create a loop to iterate through movies
  for (currentMovie of movies) {
    //push each movies title to our array
    movieTitles.push(currentMovie.title);
  }
  //after loop, return variable
  return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //declare variable to iterate to, set to first movie's metascore (as a number)
  //if there are movies, proceed as planned, if not, set the highest to be 0.
  let highest = movies.length ? Number(movies[0].metascore) : 0;
  //create a loop to iterate through movies
  for (currentMovie of movies) {
    //check if currentMovie's metascore (as a number) is greater than our highest
    if (Number(currentMovie.metascore) > highest) {
      //if it is, make it our new highest
      highest = Number(currentMovie.metascore);
    }
  }
  //after loop, return highest
  return highest;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  //declare variable to accumulate to, set to 0;
  let average = 0;
  //create loop to iterate through movies
  for (const currentMovie of movies) {
    //add every imdb score (as numbers) to our variable
    average += Number(currentMovie.imdbRating);
  }
  //after loop, divide the total of all the imdb ratings(if we have any)
  if (average) {
    average /= movies.length;
  }
  //return average
  return average;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // object frequency
  //declare object to accumulate to, set to empty object
  let frequency = {};
  //create loop to iterate through movies
  for (const currentMovie of movies) {
    //if we've already logged their rating, +1 to it's value, if not, add it to our object and give it a value of 1
    frequency[currentMovie.rated] = frequency[currentMovie.rated] + 1 || 1;
  }
  //after looping, return object
  return frequency;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  //declare variable to iterate to, set to null
  let target = null;
  //create loop to iterate through movies
  for (const currentMovie of movies) {
    //if the given id matches our currentMovie's imdbID
    if (id === currentMovie.imdbID) {
      //make it our target movie
      target = currentMovie;
    }
  }
  //after loop, return targetmovie
  return target;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  //declare variable to accumulate to, set to empty array
  let filteredMovies = [];
  //create loop to iterate through movies
  for (const currentMovie of movies) {
    //check if the currentMovie's genre matches our given genre, case insensitive
    if (currentMovie.genre.toLowerCase().includes(genre.toLowerCase())) {
      //if it does, push it into our array
      filteredMovies.push(currentMovie);
    }
  }
  //after loop, return array;
  return filteredMovies;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  //declare variable to accumulate to, set to empty array
  const filteredMovies = [];
  //create loop to iterate through movies
  for (const currentMovie of movies) {
    //check if the movies release year is <= given year
    if (Number(currentMovie.released.slice(-4)) <= year) {
      //if it is, push the movie to our array
      filteredMovies.push(currentMovie);
    }
  }
  //after loop, return our array
  return filteredMovies;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  //declare variable for largest box office, set to first movie's amount if we have movies, if not set to null
  let largest = movies[0] || null;
  //create loop to iterate through movies
  for (const currentMovie of movies) {
    //check if currentMovie's box office amount is > our current largest
    if (
      boxOfficeToNum(currentMovie.boxOffice) > boxOfficeToNum(largest.boxOffice)
    )
      //if it is, make it the new largest
      largest = currentMovie;
  }
  //after loop, return the name of our largest box office movie if we have one, else return null
  return largest ? largest.title : largest;
}

//helper function to convert Box Office strings into numbers
function boxOfficeToNum(string) {
  //declare variable to accumulate to, set to empty string
  let newString = '';
  //create loop to iterate through our given string
  for (let i = 0; i < string.length; i++) {
    //create variable for clarity
    let currentChar = string[i];
    //use "isNaN" to check if each character is a number
    if (!isNaN(currentChar)) {
      //if it is, add it to our string
      newString += currentChar;
    }
  }
  //after loop, return newString (as a number)
  return Number(newString);
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
