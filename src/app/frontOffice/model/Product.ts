import { Rating } from "./Rating";

export class Product {
    idProduct!: number;
    nameProduct!: string;
    descriptionProduct!: string;
    priceProduct!: number;
    quantityProduct!: number;
    idCategory!: number;
    image!: File;
    discountProduct!: number;
    marqueProduct!: string;
    referenceProduct!:string;
    ratings!: Rating[]; // ajout de la propriété ratings
  }
  
  