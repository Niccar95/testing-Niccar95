import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("This function should sort movies", () => {
  test("This should sort by descending order", () => {
    const desc: boolean = true;

    const movies: IMovie[] = [
      {
        Title: "first",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "fff",
      },

      {
        Title: "second",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "fff",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("first");
  });

  test("This should sort by asc order", () => {
    const desc: boolean = false;

    const movies: IMovie[] = [
      {
        Title: "first",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "fff",
      },

      {
        Title: "second",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "fff",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("second");
  });

  test("empty list", () => {
    const movies: IMovie[] = [];
    movieSort(movies);

    expect(movies.length).toBe(0);
  });

  test("checking length of list", () => {
    const movies: IMovie[] = [
      {
        Title: "first",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "fff",
      },

      {
        Title: "second",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "fff",
      },
    ];

    movieSort(movies);

    expect(movies.length).toBe(2);
  });
});
