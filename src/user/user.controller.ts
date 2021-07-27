import { Response, Request } from "express"
 import { IUser } from "./user.interface";
import User from "./user.model";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find()
    res.status(200).json({ users })
  } catch (error) {
    throw error
  }
}

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req
    const getUser: IUser | null = await User.findOne(
    { _id: id }
  )
    res.status(200).json({
      user: getUser
    })
  } catch (error) {
    throw error
  }
}

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IUser, "username" | "favorites">

    const user: IUser = new User({
      username: body.username,
      favorites: body.favorites
    })

    const newUser: IUser = await user.save()
    const allUsers: IUser[] = await User.find()

    res
      .status(200)
      .json({
        message: "User added",
        newUser: newUser,
        users: allUsers
      })
  } catch (error) {
    throw error
  }
}


const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateUser: IUser | null = await User.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allUsers: IUser[] = await User.find()
    res.status(200).json({
      message: "User updated",
      updateUser: updateUser,
      users: allUsers,
    })
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedUser: IUser | null = await User.findByIdAndRemove(
      req.params.id
    )
    const allUsers: IUser[] = await User.find()
    res.status(200).json({
      message: "User deleted",
      deletedUser: deletedUser,
      users: allUsers,
    })
  } catch (error) {
    throw error
  }
}

export { getUsers, getUser, addUser, updateUser, deleteUser }
