import express from "express";
import CodeRouter from "./code.route";

const router = express.Router();

router.use("/codes", CodeRouter);
router.use("/", (req, res) => {
    res.send("Hello World!");
});

export default router;
