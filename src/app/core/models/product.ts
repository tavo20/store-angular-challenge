import Category from './category';

export default  interface Product {
    categoty: Category;
    description: string;
    id: string;
    image: string[];
    price: number;
    // taxes: number;
    title: string;
}