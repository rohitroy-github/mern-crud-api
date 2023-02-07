// initializingExpress
const express = require("express");

const dotenv = require("dotenv").config();

// importingErrorHandler
const {errorHandler} = require("./middleware/errorMiddleware");

// declarePort
const port = process.env.PORT || 5000;

// declaringExpressApp
const app = express();

// expressMiddlewaresForDataReadability
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/goals", require("./routes/goalRoutes"));

// overwritingDefaultExpressErrorHandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server up & running at http://localhost:${port}/`);
});
