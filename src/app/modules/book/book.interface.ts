export interface IBook {
    title: string;
    author:string[];
    genre:string;
    publicationYear:string;
    publisher:{
        name:string;
        location:string;
    };
    reviews:{
        user:string;
        comment:string;
    }[];
    ratings:number;
    price:number;
}