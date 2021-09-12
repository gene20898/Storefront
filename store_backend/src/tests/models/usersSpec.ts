import { User, UserStore } from "../../models/user";
import bcrypt from 'bcrypt';

const store = new UserStore;

describe('User Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
      });
    
      it('should have a create method', () => {
        expect(store.create).toBeDefined();
      });

      it('should have a delete method', () => {
        expect(store.delete).toBeDefined();
      });

      it('should have a authenticate method', () => {
        expect(store.delete).toBeDefined();
      });

      it('create method should add a user', async () => {
        const result = await store.create({
          username: 'Peter01',
          firstName: 'Peter',
          lastName: 'Smith',
          password_digest: 'testpass'
        });
        expect(result.id).toEqual(2);
      });
    
      it('index method should return a list of users', async () => {
        const result = await store.index();        
        expect(result.length).toEqual(2);
      });
    
      it('show method should return the correct user', async () => {
        const result = await store.show("1");
        expect(result.id).toEqual(1);
      });

      it('should return a proper hashed password',async () => {
        const result = await store.show("2");
        expect(bcrypt.compareSync('testpass'+process.env.PEPPER,result.password_digest)).toBeTruthy();
      } )

      it('authenticate method should return the correct user', async () => {
        const result = await store.authenticate('Peter01', 'testpass') as User;
        expect(result.id).toEqual(2);
      });
});