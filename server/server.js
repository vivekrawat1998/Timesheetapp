const express = require("express");
const cors = require("cors");
const app = express()
const connectDb = require("../server/database/database")
const timesheetRoutes = require("../server/routes/TimrsheetRoutes");
const employRoutes = require("../server/routes/Employeroutes")
app.use(express.json());

const PORT = 8080;
app.use(cors());
connectDb()

app.use("/api/v1", timesheetRoutes)
app.use("/api/v1", employRoutes)


app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})