import express from "express";
import userControllers from "../controllers/userController.js";

const UserRoutes = () => {
  const router = express.Router();
  const Controller = userControllers();

  router.post(
    "/register",
    Controller.saveUser
  );
  return router;
};

export default UserRoutes;