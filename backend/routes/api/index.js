/**
 * @description Define API Routes
 */

// Root API Router
const apiRouter = require("express").Router();

// Public API Routes
const authApiRouter = require("./auth");

const constantApiRouter = require("./constant");
const experimentApiRouter = require("./experiment");


// Add Public API Routes
apiRouter.use("/auth", authApiRouter);
apiRouter.use("/constant", constantApiRouter);
apiRouter.use("/experiment", experimentApiRouter);

module.exports = apiRouter;
