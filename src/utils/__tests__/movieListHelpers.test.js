import {
  orderMoviesArrayDescending,
  filterMoviesArrayByRating,
  getGenres
} from "../movieListHelpers";

// mock a movie array
const mockMovieArray = [
  {
    id: 1,
    popularity: 100,
    vote_average: 5
  },
  {
    id: 2,
    popularity: 1,
    vote_average: 1
  },
  {
    id: 3,
    popularity: 36,
    vote_average: 4.54
  },
  {
    id: 4,
    popularity: 74,
    vote_average: 8.2
  }
];

describe("MovieList helpers functions", () => {
  it("sorts movies in descending order", () => {
    // lay out expected order
    const expectedOrderArray = [
      {
        id: 1,
        popularity: 100,
        vote_average: 5
      },
      {
        id: 4,
        popularity: 74,
        vote_average: 8.2
      },
      {
        id: 3,
        popularity: 36,
        vote_average: 4.54
      },
      {
        id: 2,
        popularity: 1,
        vote_average: 1
      }
    ];

    const orderedMovieArray = orderMoviesArrayDescending(mockMovieArray);
    expect(orderedMovieArray).toEqual(expectedOrderArray);
  });
  it("filters movies comparing to the passed-in value", () => {
    // lay out expected order
    const expectedFilteredArray = [
      {
        id: 1,
        popularity: 100,
        vote_average: 5
      },
      {
        id: 4,
        popularity: 74,
        vote_average: 8.2
      },
      {
        id: 3,
        popularity: 36,
        vote_average: 4.54
      }
    ];

    const filteredMovieArray = filterMoviesArrayByRating(mockMovieArray, 4.5);
    expect(filteredMovieArray).toEqual(expectedFilteredArray);
  });
  it("returns an array with genre names from the array of genre ids", () => {
    const genreIdsArray = [99, 878, 12];
    const expectedArray = ["Documentary", "Science Fiction", "Adventure"];
    expect(getGenres(genreIdsArray)).toEqual(expectedArray);
  });
});
