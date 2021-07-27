import { Response, Request } from "express"
const fetch = require("node-fetch");
 import { IMoviePreview, IMovieOverview } from "./movie.interface";

export const searchMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { query },
    } = req
    fetch(process.env.API_URL + '/search/shows?q=' + query)
    .then((r: any) => r.json())
    .then((json: any) => {
      const movies: IMoviePreview[] = json.map((data: any) => {
        const body: IMoviePreview = {
      		movie_id: data.show.id,
      		title: data.show.name,
      		image_url: data.show.image?.medium,
      		date: data.show.premiered,
      		genres: data.show.genres,
      		runtime: data.show.runtime,
      		summary: data.show.summary,
      		url: data.show.url,
      	};
        return body
      })
      return movies
    })
    .then((movies: any) => res.status(200).json({ movies }))

  } catch (error) {
    throw error
  }
}


export const getMovie= async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { type, id },
    } = req
    fetch(process.env.API_URL + '/shows/' + id)
    .then((r: any) => r.json())
    .then((data: any) => {
      if(type === 'overview'){
        const body: IMovieOverview = {
          movie_id: data.id,
          title: data.name,
          image_url: data.image?.medium,
        };
        return body
      } else {
      const body: IMoviePreview = {
        movie_id: data.id,
        title: data.name,
        image_url: data.image?.medium,
        date: data.premiered,
        genres: data.genres,
        runtime: data.runtime,
        summary: data.summary,
        url: data.url,
      };
      return body
    }
    })
    .then((movie: any) => res.status(200).json({ movie }))

  } catch (error) {
    throw error
  }
}
