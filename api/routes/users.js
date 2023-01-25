import express from "express";
import { getUser , updateUser, getAllUser} from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser);
router.put("/", updateUser);
router.get("/findAll", getAllUser);


export default router