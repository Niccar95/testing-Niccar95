import { IMovie } from "../../models/Movie";

const movies: IMovie[] = [
  {
    Title: "blah",
    imdbID: "bsdsds",
    Type: "dddd",
    Poster: "fdjf",
    Year: "1990",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(movies);
  });
};
