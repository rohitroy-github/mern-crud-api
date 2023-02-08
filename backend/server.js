// initializingExpress
const express = require("express");

const colors = require("colors");

const dotenv = require("dotenv").config();

// importingErrorHandler
const {errorHandler} = require("./middleware/errorMiddleware");

// importingDBConnectionFile
const connectDB = require("./config/db");

// callingDBConnectionnFunctionToMakeDBConnection
connectDB();

// declarePort
const port = process.env.PORT || 5000;

// declaringExpressApp
const app = express();

// expressMiddlewaresForDataReadability
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// overwritingDefaultExpressErrorHandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`> Server up & running at http://localhost:${port}/`);
});
