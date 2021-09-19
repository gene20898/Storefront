import express, {Request, Response} from 'express';
import { Order, order_product, OrderStore } from '../models/orders';
import jwtCheck from '../services/auth0'

const store = new OrderStore;

const index = async (_req:Request, res:Response) => {
    console.log("Rnter index")
    const orders = await store.index();
    res.json(orders);
}

const show = async (req:Request, res:Response) => {
    const order = await store.show(req.body.id);
    res.json(order);
}

const create = async (req:Request, res:Response) => {
    console.log(`Enter create:${JSON.stringify(req.body)}`)
    try {
        const order: Order = {
            status: req.body.status,
            user_id: req.body.user_id
        };
        const newOrder = await store.create(order);
        const product_list: {quantity: number, product_id: number}[] = req.body.product_list;

        for(let i = 0; i < product_list.length; i++) {
            const order_product: order_product = {
                order_id: newOrder.id as number,
                product_id: product_list[i].product_id,
                quantity: product_list[i].quantity
            }
            await store.addProduct(order_product);
        }
        res.json(newOrder)
    } catch(err) {
        console.log(err);
        res.status(400)
        res.json(err)
    }
}

const getOrder = async (req:Request, res:Response) => {
    const order: Order[] = await store.userOrder(req.body.user_id);
    let result: {order: Order, product_list: order_product[]}[]=[];
    for(let i = 0; i < order.length; i++){
        const product_list = await store.showProduct(order[i].id as number);
        result[i] = {order:order[i],product_list:product_list};
    }
    res.json(result);
}

const orderRoutes = (app: express.Application) => {
    app.get('/orders', index)
    app.get('/orders/:id', show)
    app.post('/orders', create)
    app.post('/order_history',jwtCheck, getOrder)
}

export default orderRoutes