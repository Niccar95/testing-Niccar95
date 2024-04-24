import { displayNoResult } from "../ts/displayNoResult";

describe("Testing displayNoResult", () => {
  test("This should display a message", () => {
    document.body.innerHTML = `<div id="app"><form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>
</div>`;

    const noMessage = document.getElementsByTagName("p");

    const container = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    displayNoResult(container);

    expect(noMessage[0].innerHTML).toBe("Inga sökresultat att visa");
  });
});
