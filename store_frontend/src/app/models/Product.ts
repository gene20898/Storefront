export class Product {
    id: number;
    name: string;
    price: number;
    category: string;
    url: string;
    description: string;
    amount: number;
    constructor(){
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.category ='';
        this.url = '';
        this.description = '';
        this.amount = 1;
    }
}