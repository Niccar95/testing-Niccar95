import { getData } from "../ts/services/movieService";
import * as movieApp from "./../ts/movieApp";

jest.mock("./../ts/services/movieService.ts");

describe("testing init function", () => {
  let mockCreateHtml: jest.SpyInstance<void>;

  beforeEach(() => {
    mockCreateHtml = jest.spyOn(movieApp, "createHtml");

    document.body.innerHTML = `<div id="app">
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
  </div>`;
  });

  test("it should call handleSubmit", async () => {
    let searchText = "blah";

    movieApp.handleSubmit();
    await getData(searchText);
    expect(mockCreateHtml).toHaveBeenCalled();
    const movieElements = document.getElementsByClassName("movie");

    expect(movieElements).toHaveLength(1);
  });
});
