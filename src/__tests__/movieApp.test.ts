import { IMovie } from "../ts/models/Movie";
import * as movieApp from "./../ts/movieApp";
import * as movieService from "./../ts/services/movieService";
import { handleSubmit } from "./../ts/movieApp";

jest.mock("./../ts/services/movieService.ts");

describe("testing init function", () => {
  let mockCreateHtml: jest.SpyInstance<void>;
  let mockDisplayNoResult: jest.SpyInstance<void>;
  let mockGetData: jest.SpyInstance<Promise<IMovie[]>>;

  beforeEach(() => {
    mockCreateHtml = jest.spyOn(movieApp, "createHtml");
    mockDisplayNoResult = jest.spyOn(movieApp, "displayNoResult");
    mockGetData = jest.spyOn(movieService, "getData");

    document.body.innerHTML = `<div id="app">
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
  </div>`;
  });

  test("it should call handleSubmit", async () => {
    await handleSubmit();

    expect(mockCreateHtml).toHaveBeenCalled();
    const movieElements = document.getElementsByClassName("movie");

    expect(movieElements).toHaveLength(1);
  });

  test("it should displayNoResult", async () => {
    mockGetData.mockImplementation((): Promise<IMovie[]> => {
      return Promise.resolve([]);
    });

    await handleSubmit();
    expect(mockDisplayNoResult).toHaveBeenCalled();

    const movieElements = document.getElementsByClassName("movie");

    expect(movieElements).toHaveLength(0);
  });
});
