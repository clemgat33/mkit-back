import { Response, Request } from "express"
 import { IReview } from "./review.interface";
import Review from "./review.model";

const getReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const reviews: IReview[] = await Review.find()
    res.status(200).json({ reviews })
  } catch (error) {
    throw error
  }
}

const getReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req
    const getReview: IReview | null = await Review.findOne(
    { _id: id }
  )
    res.status(200).json({
      review: getReview
    })
  } catch (error) {
    throw error
  }
}

const addReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IReview, "movie_id" | "author_user_id" | "author_username" | "rate" | "comment">

    const review: IReview = new Review({
      movie_id: body.movie_id,
      author_user_id: body.author_user_id,
      author_username: body.author_username,
      rate: body.rate,
      comment: body.comment
    })

    const newReview: IReview = await review.save()
    const allReviews: IReview[] = await Review.find()

    res
      .status(200)
      .json({
        message: "Review added",
        newReview: newReview,
        reviews: allReviews
      })
  } catch (error) {
    throw error
  }
}


const updateReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateReview: IReview | null = await Review.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allReviews: IReview[] = await Review.find()
    res.status(200).json({
      message: "Review updated",
      updateReview: updateReview,
      reviews: allReviews,
    })
  } catch (error) {
    throw error
  }
}

const deleteReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedReview: IReview | null = await Review.findByIdAndRemove(
      req.params.id
    )
    const allReviews: IReview[] = await Review.find()
    res.status(200).json({
      message: "Review deleted",
      deletedReview: deletedReview,
      reviews: allReviews,
    })
  } catch (error) {
    throw error
  }
}

export { getReviews, getReview, addReview, updateReview, deleteReview }
