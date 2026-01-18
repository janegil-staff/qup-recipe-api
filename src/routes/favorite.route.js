import express from "express";
import {
  getFavoriteById,
  createFavorite,
  deleteFavoriteRecipeById,
} from "../controllers/favorite.controller.js";

const router = express.Router();

router.route("/").post(createFavorite);
router.route("/:userId").get(getFavoriteById);
router.route("/:userId/:recipeId").delete(deleteFavoriteRecipeById);

export default router;
