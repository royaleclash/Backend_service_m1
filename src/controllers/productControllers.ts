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
            message: "error al obtener el producto"


        })

    };
}

//crear un productos (POST)
export const createproduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body;
        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;
        await productRepository.save(product);
        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({
            message: "error al crear un producto"


        })





    }

};

//Actulizar un producto
export const updateproduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body;
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        })

        //validamos que product tenga informacion

        if (product) {
            product.name = name ?? product.name;
            product.description = description ?? product.description
            product.price = price ?? product.price;
            await productRepository.save(product)
            res.json(product);

        } else {
            res.status(404).json({
                message: "no se encontro el producto."
            })

        }


    } catch (error) {

        res.status(500).json({
            message: "error al actualizar un producto"


        })


    }

};

//Eliminar un producto existente
export const deleteproduct = async (req: Request, res: Response) => {
    try {
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        })

        //validamos que product tenga informacion

        if (product) {

            await productRepository.remove(product)
            res.json({
                message: "Producto eliminado."
            })

        } else {
            res.status(404).json({
                message: "no se encontro el producto."
            })

        }


    } catch (error) {

        res.status(500).json({
            message: "error al eliminar un producto"


        })


    }

};