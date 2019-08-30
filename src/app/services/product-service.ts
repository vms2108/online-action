export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string,
    public rating: number,
  ) {}
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {
  }
}

export class ProductService {
  public products: Product[] = [
    {
      id: 0,
      title: 'First Product',
      price: 42.99,
      rating: 4.3,
      description: 'This is a short description n. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 1,
      title: 'Second Product',
      price: 34.79,
      rating: 4.1,
      description: 'This is a short description n. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  ];

  public reviews: Review[] = [
    {
      id: 0,
      productId: 0,
      timestamp: new Date('2019-06-12T02:17:00+00:00'),
      user: 'User 1',
      rating: 5,
      comment: 'Aenean vestibulum velit id placerat posuere. Praesent...'
    },
    {
      id: 1,
      productId: 1,
      timestamp: new Date('2019-07-12T02:17:00+00:00'),
      user: 'User 2',
      rating: 4,
      comment: 'Aenean vestibulum velit id placerat posuere. Praesent...'
    }
  ];

  public getProducts(): Product[] {
    return this.products;
  }

  public getProductById(productId: number): Product {
    return this.products.find(item => item.id === productId);
  }

  public getReviewsForProduct(productId: number): Review[] {
    return this.reviews.filter(r => r.productId === productId).map(r => r);
  }

  public getAllCategories(): string[] {
    return ['Books', 'Electonics', 'Hardware'];
  }
}
