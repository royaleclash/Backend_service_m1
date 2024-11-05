import { Router } from "express";
import {
    getALLproducts,
    getProductByID,
    createproduct,
    updateproduct,
    deleteproduct
} from "../controllers/productControllers";

const productRoutes = Router();

productRoutes.get("productRoutes/", getALLproducts);
productRoutes.get("productRoutes/:id", getProductByID);
productRoutes.post("productRoutes/", createproduct);
productRoutes.put("productRoutes/:id", updateproduct);
productRoutes.delete("productRoutes/:id", deleteproduct);

export default productRoutes;