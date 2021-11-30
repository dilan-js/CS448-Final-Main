/**
 * @description Define Auth API Routes
 */

// Auth API Router
const authApiRouter = require("express").Router();

// Validator Middleware
const AuthApiValidator = require("../../middlewares/validators/AuthApiValidator");

// Controller
const AuthApiController = require("../../controllers/AuthApiController");

authApiRouter.post(
  "/register",
  AuthApiValidator.register,
  AuthApiController.register,
);

module.exports = authApiRouter;
