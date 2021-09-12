import Client from "../database";
import { Order } from "../models/orders";
import { Product } from "../models/products";

export class DashboardQueries {
    async topFiveProduct(): Promise<{name: string, quantity: string}[]> {
        try {
            const conn = await Client.connect()
            const sql = `SELECT name, quantity FROM products INNER JOIN 
            (SELECT product_id, sum(quantity) AS quantity FROM order_product GROUP BY product_id) AS p2 
            ON id = p2.product_id ORDER BY quantity DESC LIMIT 5`;
 
            const result = await conn.query(sql);
            conn.release();

            return result.rows;
        } catch (error) {
            throw new error(`Could not get five most popular products. Error: ${error}`);
        }
    };

    async productFromCategory (category: string): Promise<Product[]> {
        try {
            const conn = await Client.connect()
            const sql = 'SELECT * from products WHERE category=($1)';
 
            const result = await conn.query(sql, [category]);
            conn.release();

            return result.rows;
        } catch (error) {
            throw new error(`Could not find products from the given category. Error: ${error}`);
        }
    }

    async currentOrder(user_id: string): Promise<Order> {
        try {
            const conn = await Client.connect()
            const sql = `SELECT * from orders WHERE user_id=($1) AND status='active'`;
 
            const result = await conn.query(sql, [user_id]);
            conn.release();

            return result.rows[0];
        } catch (error) {
            throw new error(`Could not find current order Error: ${error}`);
        }
    }

    async completeOrder(user_id: string): Promise<Order[]> {
        try {
            const conn = await Client.connect()
            const sql = `SELECT * from orders WHERE user_id=($1) AND status='complete'`;
 
            const result = await conn.query(sql, [user_id]);
            conn.release();

            return result.rows;
        } catch (error) {
            throw new error(`Could not find complete orders Error: ${error}`);
        }
    }
    
}