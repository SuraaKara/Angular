import { Product } from "./product";

export interface Category{
    code:string;
    name:string;
    subCategory:string;
    product:Product[];
}