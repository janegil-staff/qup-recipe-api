import express from "express";
import favoriteRoutes from "./favorite.route.js";

const router = express.Router();

router.use("/favorites", favoriteRoutes);

export default router;