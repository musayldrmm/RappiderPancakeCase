export interface products {
  products:[{
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id:number;
    images:string[];
    price:number;
    rating:number;
    stock: number;
    thumbnail: string;
    title: string;
    soldedproduct:number;
  }]
 total:number;
 limit:number;
 skip:number;
  }
   