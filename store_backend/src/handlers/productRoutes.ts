import express, {Request, Response} from 'express';
import { Product, ProductStore } from '../models/products';
import verifyAuthToken from '../services/authentication';

const store = new ProductStore;

const index = async (_req:Request, res:Response) => {
    const products = await store.index();
    res.json(products);
}

const show = async (req:Request, res:Response) => {
    const product = await store.show(req.body.id);
    res.json(product);
}

const create = async (req:Request, res:Response) => {
    try {
        const product: Product = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            url: req.body.url,
            description: req.body.description
        };
                
        const newProduct = await store.create(product)
        res.json(newProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const productRoutes = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products', verifyAuthToken, create)
}

export default productRoutes