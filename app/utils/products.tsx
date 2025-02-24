type Product = {
  id: number;
  name?: string;
  image: string;
};

type CategoryData = {
  products: Product[];
};

type Categories = {
  [key: string]: CategoryData;
};

export type CredentialResponse = {
  credential?: string;
};

export type DecodedCredentialResponse = {
  sub: string;
  email?: string;
  name?: string;
};

export const products : Categories = {
    donuts: {
        products: [
            {id: 1, name:'Glazed Donut', image:"/assets/GlazedDonut.png"},
            {id: 2, name:'Three Milk Donut', image:"/assets/GlazedDonut.png"}
        ]
    },
    pastry: {
        products: [
            {id: 3, name:'Glazed Pastry', image:"/assets/GlazedDonut.png"},
            {id: 4, name:'Three Milk Pastry', image:"/assets/GlazedDonut.png"}
        ]
    },
    cupcake: {
        products: [
            {id: 5, name:'Glazed Cupcake', image:"/assets/GlazedDonut.png"},
            {id: 6, name:'Three Milk Cupcake', image:"/assets/GlazedDonut.png"}
        ]
    },
    cookie: {
        products: [
            {id: 7, name:'Glazed Cookie', image:"/assets/GlazedDonut.png"},
            {id: 8, name:'Three Milk Cookie', image:"/assets/GlazedDonut.png"}
        ]
    },
    brownies: {
        products: [
            {id: 9, name:'Glazed Brownies', image:"/assets/GlazedDonut.png"},
            {id: 10, name:'Three Milk Brownies', image:"/assets/GlazedDonut.png"}
        ]
    },
    cake: {
        products: [
            {id: 11, image:"/assets/c1.png"},
            {id: 12, image:"/assets/c2.jpg"},
            {id: 13, image:"/assets/c3.png"},
            {id: 14, image:"/assets/c4.png"},
            {id: 15, image:"/assets/c5.png"}
        ]
    }
}