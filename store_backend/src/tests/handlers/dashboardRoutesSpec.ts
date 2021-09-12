import supertest from 'supertest'
import app from '../../server'

const request = supertest(app);

describe('Test dashboard endpoints response', () => {
    it('gets top-five-products api endpoint', async () => {
        const response = await request.get('/dashboard/top-five-products');
        expect(response.status).toBe(200);
    });
    it('gets productFromCategory api endpoint', async () => {
        const response = await request.get('/dashboard/products/tool');
        expect(response.status).toBe(200);
    });
    it('gets current order api endpoint', async () => {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlN0ZXZlMDA3IiwiZmlyc3RuYW1lIjoiU3RldmUiLCJsYXN0bmFtZSI6IkxlZSIsInBhc3N3b3JkX2RpZ2VzdCI6IiQyYiQxMCRtTGZ6cnFWMGxCaEZCc3FpVDVhcVFlSUVSZkxHVDRIZjNkeFo2dnp5SGo2M2YvTUY0N1l1VyJ9LCJpYXQiOjE2MjUzNjc2Mjl9.vqPc1psGddDRMiM0cRAEp572YmZevDirVDpeJKnOp6A'
        const response = await request.get('/dashboard/orders/current/1').set('Authorization', token);
        expect(response.status).toBe(200);
    });
    it('gets complete order api endpoint', async () => {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlN0ZXZlMDA3IiwiZmlyc3RuYW1lIjoiU3RldmUiLCJsYXN0bmFtZSI6IkxlZSIsInBhc3N3b3JkX2RpZ2VzdCI6IiQyYiQxMCRtTGZ6cnFWMGxCaEZCc3FpVDVhcVFlSUVSZkxHVDRIZjNkeFo2dnp5SGo2M2YvTUY0N1l1VyJ9LCJpYXQiOjE2MjUzNjc2Mjl9.vqPc1psGddDRMiM0cRAEp572YmZevDirVDpeJKnOp6A'
        const response = await request.get('/dashboard/orders/complete/1').set('Authorization', token);
        expect(response.status).toBe(200);
    });    
});


