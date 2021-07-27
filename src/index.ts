import express, { Express } from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv";
import cors from "cors"
import helmet from "helmet";
import userRoutes from "./routes"

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

/*
EXPRESS
*/
const app: Express = express()


app.use(helmet());
app.use(cors())
app.use(express.json());
app.use(userRoutes)


/*
MONGODB & MONGOOSE
*/
const uri: string = process.env.MONGODB_URI || '';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })
