export interface IMoviePreview{
  movie_id: number;
  title: string;
  image_url: string;
  date: string;
  genres: string[];
  runtime: number;
  summary: string;
  url: string;
}

export interface IMovieOverview{
  movie_id: number;
  title: string;
  image_url: string;
}
