import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("This function should sort movies", () => {
  test("This should sort first movie at the top", () => {
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

  test("This should sort second movie at the top", () => {
    const desc: boolean = true;

    const movies: IMovie[] = [
      {
        Title: "second movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "first movie",
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

  test("This should sort by asc order", () => {
    const desc: boolean = false;

    const movies: IMovie[] = [
      {
        Title: "second movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "first movie",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "1990",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("second movie");
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

  test("This should not sort if title is the same", () => {
    const movies: IMovie[] = [
      {
        Title: "movie",
        imdbID: "drfr",
        Type: "1",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "movie",
        imdbID: "drfr",
        Type: "2",
        Poster: "dff",
        Year: "1990",
      },
    ];
    const desc = true;
    movieSort(movies, desc);

    expect(movies[0].Title).toBe("movie");
    expect(movies[1].Title).toBe("movie");

    expect(movies[0].Type).toBe("1");
    expect(movies[1].Type).toBe("2");
  });

  test("This should not sort if title is the same", () => {
    const movies: IMovie[] = [
      {
        Title: "movie",
        imdbID: "drfr",
        Type: "1",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "movie",
        imdbID: "drfr",
        Type: "2",
        Poster: "dff",
        Year: "1990",
      },
    ];
    const desc = false;
    movieSort(movies, desc);

    expect(movies[0].Title).toBe("movie");
    expect(movies[1].Title).toBe("movie");

    expect(movies[0].Type).toBe("1");
    expect(movies[1].Type).toBe("2");
  });
});
