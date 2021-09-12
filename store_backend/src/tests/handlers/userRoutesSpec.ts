import supertest from 'supertest'
import app from '../../server'
const request = supertest(app);

describe('Test user endpoints response', () => {
    it('gets index api endpoint', async () => {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlN0ZXZlMDA3IiwiZmlyc3RuYW1lIjoiU3RldmUiLCJsYXN0bmFtZSI6IkxlZSIsInBhc3N3b3JkX2RpZ2VzdCI6IiQyYiQxMCRtTGZ6cnFWMGxCaEZCc3FpVDVhcVFlSUVSZkxHVDRIZjNkeFo2dnp5SGo2M2YvTUY0N1l1VyJ9LCJpYXQiOjE2MjUzNjc2Mjl9.vqPc1psGddDRMiM0cRAEp572YmZevDirVDpeJKnOp6A'
        const response = await request.get('/users').set('authorization', token);
        expect(response.status).toBe(200);
    });
    it('gets show api endpoint', async () => {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlN0ZXZlMDA3IiwiZmlyc3RuYW1lIjoiU3RldmUiLCJsYXN0bmFtZSI6IkxlZSIsInBhc3N3b3JkX2RpZ2VzdCI6IiQyYiQxMCRtTGZ6cnFWMGxCaEZCc3FpVDVhcVFlSUVSZkxHVDRIZjNkeFo2dnp5SGo2M2YvTUY0N1l1VyJ9LCJpYXQiOjE2MjUzNjc2Mjl9.vqPc1psGddDRMiM0cRAEp572YmZevDirVDpeJKnOp6A'
        const response = await request.get('/users/1').set('authorization', token);
        expect(response.status).toBe(200);
    });
    it('gets create api endpoint', async () => {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlN0ZXZlMDA3IiwiZmlyc3RuYW1lIjoiU3RldmUiLCJsYXN0bmFtZSI6IkxlZSIsInBhc3N3b3JkX2RpZ2VzdCI6IiQyYiQxMCRtTGZ6cnFWMGxCaEZCc3FpVDVhcVFlSUVSZkxHVDRIZjNkeFo2dnp5SGo2M2YvTUY0N1l1VyJ9LCJpYXQiOjE2MjUzNjc2Mjl9.vqPc1psGddDRMiM0cRAEp572YmZevDirVDpeJKnOp6A'
        const response = await request.post('/users').send({
        username: 'Steve007',
        firstName: 'Steve',
        lastName: 'Lee',
        password: 'testuser'
        }).set('authorization', token);
        expect(response.status).toBe(200);
    });
    it('gets authenticate api endpoint', async () => {
        const response = await request.post('/users/authenticate').send({
        username: 'Steve007',
        password: 'testuser'
        });
        expect(response.status).toBe(200);
    });

});