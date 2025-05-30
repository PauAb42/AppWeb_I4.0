import { Response, Router, Request } from "express";
import { createUser, getAllUsers, getTime, getUserName, login, updateTime } from "../controllers/auth.controller";

const router = Router();

router.post("/login-user", (req: Request, res: Response) => {
    login(req, res);
});

router.get('/getTime/:userId', (req: Request, res:Response) => { //despues de los puntos es un parámetro, es un varlor que yo le voy a enviar por medio de la ruta
    getTime(req, res)
});

router.put("/updateTime", (req: Request, res: Response) => {
    updateTime(req, res);
});

router.get("/users", (req: Request, res: Response) => {
    getAllUsers(req, res);
});

router.get("/user/:username", (req: Request, res: Response) => {
    getUserName(req, res);
});

router.post("/user", (req: Request, res: Response) => {
    createUser(req, res);
});

export default router;