import express from "express"
import "dotenv/config"
import { json } from "body-parser"
import appDataSource from "./utils/POSTGRES"
import UserRoute from "./routes/user.route"
const cors = require("cors")

const app = express()

app.use(json())
app.use(cors())
const PORT: any = process.env.PORT || 3000

app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)

    appDataSource
      .initialize()
      .then((res: any) => {
        console.log("Connected to the database ! ")
        app.use("/me", UserRoute)
        //middlewares 
      })
      .catch((e: any) => {
        console.log(e)
      })
  })
  .on("error", () => {
    console.log("There's an error ! ")
  })
