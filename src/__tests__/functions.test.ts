import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("This function should sort movies", () => {
  test("This should sort by descending order", () => {
    const desc: boolean = true;

    const movies: IMovie[] = [
      {
        Title: "first movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "second movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "1990",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("first movie");
  });

  test("This should sort by asc order", () => {
    const desc: boolean = false;

    const movies: IMovie[] = [
      {
        Title: "first movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "second movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "1990",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("second movie");
  });

  test("empty list", () => {
    const movies: IMovie[] = [];
    movieSort(movies);

    expect(movies.length).toBe(0);
  });

  test("checking length of list", () => {
    const movies: IMovie[] = [
      {
        Title: "first movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "second movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "1990",
      },
    ];

    movieSort(movies);

    expect(movies.length).toBe(2);
  });

  test("should handle empty movie list", () => {
    const movies: IMovie[] = [];
    movieSort(movies);

    expect(movies.length).toBe(0);
  });
});
