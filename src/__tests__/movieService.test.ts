import axios from "axios";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieService";

jest.mock("axios");

describe("testing movieService API call", () => {
  test("This should call the API on search", async () => {
    const mockMovieData: IMovie[] = [
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

    (axios.get as jest.Mock).mockResolvedValue({
      data: { Search: mockMovieData },
    });

    const searchText: string = "harry";

    const movie = await getData(searchText);

    expect(movie).toEqual(mockMovieData);
    expect(axios.get).toHaveBeenCalledWith(
      "http://omdbapi.com/?apikey=b7ceda85&s=" + searchText
    );
  });
});
