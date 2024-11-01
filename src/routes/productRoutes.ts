import { Router } from "express";
import {
    getALLproducts,
    getProductByID,
    createproduct,
    updateproduct,
    deleteproduct
} from "../controllers/productControllers";

const router = Router();

router.get("products/", getALLproducts);
router.get("products/:id", getProductByID);
router.post("products/", createproduct);
router.put("products/:id", updateproduct);
router.delete("products/:id", deleteproduct);

export default router;