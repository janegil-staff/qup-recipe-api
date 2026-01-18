import express from "express";
import {
  getFavoriteById,
  createFavorite,
  deleteFavoriteRecipeById,
} from "../controllers/favorite.controller.js";

const router = express.Router();

router.route("/").post(createFavorite);
router.route("/:userId/:recipeId").delete(deleteFavoriteRecipeById);
router.route("/:userId").get(getFavoriteById);


export default router;
