import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "This is Waves Signer example" });
});

export default router;
