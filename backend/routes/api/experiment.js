/**
 * @description Define Auth API Routes
 */

// Auth API Router
const experimentApiRouter = require("express").Router();

// Validator Middleware
const ExperimentApiValidator = require("../../middlewares/validators/ExperimentApiValidator");

// Controller
const ExperimentApiController = require("../../controllers/ExperimentApiController");

experimentApiRouter.post(
  "/answer",
  ExperimentApiValidator.submit,
  ExperimentApiController.submit
);

module.exports = experimentApiRouter;
