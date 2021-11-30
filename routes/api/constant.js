/**
 * @description Define Auth API Routes
 */

// Auth API Router
const constantApiRouter = require("express").Router();

// Validator Middleware
const ConstantApiValidator = require("../../middlewares/validators/ConstantApiValidator");

// Controller
const ConstantApiController = require("../../controllers/ConstantApiController");

constantApiRouter.post(
  "/answer",
  ConstantApiValidator.submit,
  ConstantApiController.submit,
);


module.exports = constantApiRouter;
