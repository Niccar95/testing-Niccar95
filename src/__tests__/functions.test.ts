import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("This function should sort movies", () => {
  test("This should sort by desc order starting with movie A at the top", () => {
    const desc: boolean = true;

    const movies: IMovie[] = [
      {
        Title: "A",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "B",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "1990",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("A");
  });

  test("This should sort by desc order starting with movie B at the top", () => {
    const desc: boolean = true;

    const movies: IMovie[] = [
      {
        Title: "B",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "A",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "1990",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("A");
  });

  test("This should sort by asc order starting with movie A at the top", () => {
    const desc: boolean = false;

    const movies: IMovie[] = [
      {
        Title: "A",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "B",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "1990",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("B");
  });

  test("This should sort by asc order starting with movie B at the top", () => {
    const desc: boolean = false;

    const movies: IMovie[] = [
      {
        Title: "B",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "A",
        imdbID: "drfr",
        Type: "ffr",
        Poster: "dff",
        Year: "1990",
      },
    ];

    movieSort(movies, desc);

    expect(movies[0].Title).toBe("B");
  });

  test("This should check length of list", () => {
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

  test("This should not sort in desc order if titles are the same", () => {
    const movies: IMovie[] = [
      {
        Title: "A",
        imdbID: "drfr",
        Type: "1",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "A",
        imdbID: "drfr",
        Type: "2",
        Poster: "dff",
        Year: "1990",
      },
    ];
    const desc = true;
    movieSort(movies, desc);

    expect(movies[0].Title).toBe("A");
    expect(movies[1].Title).toBe("A");

    expect(movies[0].Type).toBe("1");
    expect(movies[1].Type).toBe("2");
  });

  test("This should not sort in asc order if titles are the same", () => {
    const movies: IMovie[] = [
      {
        Title: "B",
        imdbID: "drfr",
        Type: "1",
        Poster: "dff",
        Year: "2000",
      },

      {
        Title: "B",
        imdbID: "drfr",
        Type: "2",
        Poster: "dff",
        Year: "1990",
      },
    ];
    const desc = false;
    movieSort(movies, desc);

    expect(movies[0].Title).toBe("B");
    expect(movies[1].Title).toBe("B");

    expect(movies[0].Type).toBe("1");
    expect(movies[1].Type).toBe("2");
  });
});
