import Client from "../database";

export type Order = {
    id?: number,
    status: string,
    user_id: number
};

export type order_product = {
    id?: number,
    order_id: number,
    product_id: number,
    quantity: number,
}

export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            const conn = await Client.connect()
            const sql = 'SELECT * FROM orders'

            const result = await conn.query(sql);
            conn.release();

            return result.rows;
        } catch (error) {
            throw new error(`Could not get orders. Error: ${error}`);
        }
    }

    async show(id: string): Promise<Order> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM orders WHERE id=($1)';

            const result = await conn.query(sql,[id]);
            conn.release();

            return result.rows[0];
        } catch (error) {
            throw new error(`Could not find orders ${id}. Error: ${error}`);
        }
    }

    async create(o: Order): Promise<Order> {
        try {
            const conn = await Client.connect()
            const sql = 'INSERT INTO orders(status, user_id) VALUES($1, $2) RETURNING *';
            
            const result = await conn.query(sql,[o.status, o.user_id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new error(`Could not add new order. Error: ${error}`);
        }
    }

    async delete(id: string): Promise<Order> {
        try {
            const conn = await Client.connect()
            const sql = 'DELETE FROM orders WHERE id=($1)';
            
            const result = await conn.query(sql,[id]);
            conn.release();
            
            return result.rows[0];
        } catch (error) {
            console.log(error);
            
            throw new error(`Could not delete order ${id}. Error: ${error}`);
        }
    }

    
    
    async addProduct(op: order_product): Promise<order_product> {
        try {
            const conn = await Client.connect()
            const sql = 'INSERT INTO order_product(order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *';
            
            const result = await conn.query(sql,[op.order_id, op.product_id, op.quantity]);
            conn.release();
            
            return result.rows[0];
        } catch (error) {
            throw new error(`Could not add product ${op.product_id} to order ${op.order_id}. Error: ${error}`);
        }
    }
}