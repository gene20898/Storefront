import { DashboardQueries } from "../../services/dashboard";

const dashboard = new DashboardQueries;


describe('DashboardQueries Services', () => {
    it('topFiveProduct method should return most popular product', async () => {
        const result = await dashboard.topFiveProduct();
        expect(result).toEqual([
            {
                name: 'knife',
                quantity: '20' 
            }
        ]);
    });
    it('productFromCategory method should return product from povided category', async () => {
        const result = await  dashboard.productFromCategory('tool');
        expect(result).toEqual([{
            id: 1,
            name: 'knife',
            price: 199,
            category: 'tool',
            url:'google.com',
            description: 'demo'
        }]);
    });
    it('currentOrder method should return the active order from user id', async () => {
        const result = await dashboard.currentOrder('1')
        expect(result).toEqual({
            id: 1,
            status: 'active',
            user_id: "1"
        });
    });
    it('currentOrder method should return the complete order from user id', async () => {
        const result = await dashboard.completeOrder('1')
        expect(result.length).toEqual(0);
    });
});