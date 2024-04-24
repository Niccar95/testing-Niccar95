import { createHtml } from "../ts/createHtml";
import { IMovie } from "../ts/models/Movie";

describe("testing createHtml function", () => {
  document.body.innerHTML = `<div id="app"><form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
  </div>`;

  test("this should test element creation", () => {
    const container = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    const movie = document.getElementsByClassName("movie");

    const movies: IMovie[] = [
      {
        Title: "Harry Potter",
        Year: "2001",
        imdbID: "tt0241527",
        Type: "movie",
        Poster: "N/A",
      },

      {
        Title: "Harry Potter 2",
        Year: "2002",
        imdbID: "tt0295297",
        Type: "movie",
        Poster: "N/A",
      },
    ];

    createHtml(movies, container);

    expect(movie).toHaveLength(2);
  });
});
