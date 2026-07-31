import { Router } from "express";
import { userRegister,userHome,admin, notFound404} from "../controllers/user.controller.js";
const router=Router()

router.route('/').get(userHome)
router.route('/admin').get(admin)
router.route("/register").get(userRegister)
router.all(/.*/,notFound404)

export default router