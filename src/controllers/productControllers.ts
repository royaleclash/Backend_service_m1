import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/product";
import { json } from "stream/consumers";

//traemos la tabla o entidad producto de la base de datos
const productRepository = AppDataSource.getMongoRepository(Product);

//obtener todos los productos
export const getALLproducts = async (req: Request, res: Response) => {
    try {
        const products = await productRepository.find();
        res.json(products);

    } catch (error) {
        res.status(500).json({
            message: "error al obtener los productos"
        });


    }

};

//obtener un producto
export const getProductByID = async (req: Request, res: Response) => {
    try {
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });

        if (product) {
            res.json(product);

        } else {
            res.status(404).json({
                message: "producto no encontrado"
            })
        }
    } catch (error) {
        res.status(500).json({


        })

    };
}

//crear un productos
export const createproduct = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }

};

//Actulizar un producto
export const updateproduct = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }

};

//Eliminar un producto existente
export const deleteproduct = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }

};