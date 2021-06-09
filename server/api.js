import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Waves Demo" });
});

export default router;
