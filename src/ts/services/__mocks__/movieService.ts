import { IMovie } from "../../models/Movie";

const movies: IMovie[] = [
  {
    Title: "Movie 1",
    imdbID: "bsdsds",
    Type: "dddd",
    Poster: "fdjf",
    Year: "1990",
  },

  {
    Title: "Movie 2",
    imdbID: "bsdsds",
    Type: "dddd",
    Poster: "fdjf",
    Year: "2001",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(movies);
  });
};
