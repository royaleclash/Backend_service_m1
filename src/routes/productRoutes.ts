import { Router } from "express";
import {
    getALLproducts,
    getProductByID,
    createproduct,
    updateproduct,
    deleteproduct
} from "../controllers/productControllers";

const productRoutes = Router();

/** 
 * @swagger
 * /api/products:
 * get:
 *  summary: Obtener todos los Productos
 * responses:
 * 200:
 * description: Lista de Productos
*/
productRoutes.get("productRoutes/", getALLproducts);
productRoutes.get("productRoutes/:id", getProductByID);
productRoutes.post("productRoutes/", createproduct);
productRoutes.put("productRoutes/:id", updateproduct);
productRoutes.delete("productRoutes/:id", deleteproduct);

export default productRoutes;