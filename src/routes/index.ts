import { Router } from "express"
import { getUsers, getUser, addUser, updateUser, deleteUser } from "../user/user.controller"
import { searchMovies, getMovie } from "../movie/movie.controller"
import { getReviews, getReview, addReview, updateReview, deleteReview } from "../review/review.controller"

const router: Router = Router()

router.get("/api/users", getUsers)
router.get("/api/user/:id", getUser)
router.post("/api/add-user", addUser)
router.put("/api/edit-user/:id", updateUser)
router.delete("/api/delete-user/:id", deleteUser)

router.get('/api/search-movies/:query', searchMovies)
router.get('/api/get-movie/:type/:id', getMovie)

router.get("/api/reviews/", getReviews)
router.get("/api/review/:id", getReview)
router.post("/api/add-review", addReview)
router.put("/api/edit-review/:id", updateReview)
router.delete("/api/delete-review/:id", deleteReview)

export default router
