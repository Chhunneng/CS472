import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: Number;
  dateAdded: Date;
  averageRating: Number;
}

export let products: Product[] = [
  {
    id: uuidv4(),
    name: 'Smartphone X',
    description:
      'Latest smartphone with advanced features including a 6.5-inch OLED display, 5G connectivity, triple camera system, and all-day battery life. Perfect for photography enthusiasts and power users.',
    category: 'Electronics',
    price: 999.99,
    dateAdded: '2023-05-10T14:30:00.000Z',
    averageRating: 4.5,
  },
  {
    id: uuidv4(),

    name: 'Laptop Pro',
    description:
      'High-performance laptop for professionals with 16GB RAM, 512GB SSD, dedicated graphics card, and a stunning 4K display. Ideal for designers, developers, and content creators.',
    category: 'Electronics',
    price: 1499.99,
    dateAdded: '2023-05-09T10:15:00.000Z',
    averageRating: 4.8,
  },
  {
    id: uuidv4(),

    name: 'Wireless Headphones',
    description:
      'Premium noise-cancelling headphones with 30-hour battery life, comfortable over-ear design, and crystal-clear sound quality. Perfect for commuters and audiophiles.',
    category: 'Audio',
    price: 299.99,
    dateAdded: '2023-05-08T09:45:00.000Z',
    averageRating: 4.3,
  },
  {
    id: uuidv4(),

    name: 'Smart Watch',
    description:
      'Fitness tracker and smartwatch with heart rate monitoring, sleep tracking, GPS, and water resistance. Syncs with your smartphone for notifications and music control.',
    category: 'Wearables',
    price: 199.99,
    dateAdded: '2023-05-07T16:20:00.000Z',
    averageRating: 4.0,
  },
  {
    id: uuidv4(),

    name: 'Bluetooth Speaker',
    description:
      'Portable wireless speaker with deep bass, 24-hour battery life, and waterproof design. Perfect for outdoor adventures and pool parties.',
    category: 'Audio',
    price: 129.99,
    dateAdded: '2023-05-06T11:30:00.000Z',
    averageRating: 4.2,
  },
  {
    id: uuidv4(),

    name: '4K Smart TV',
    description:
      '55-inch 4K Ultra HD Smart TV with HDR, built-in streaming apps, and voice control. Brings your favorite movies and shows to life with stunning clarity.',
    category: 'Electronics',
    price: 699.99,
    dateAdded: '2023-05-05T13:45:00.000Z',
    averageRating: 4.6,
  },
  {
    id: uuidv4(),

    name: 'Digital Camera',
    description:
      "Professional DSLR camera with 24.2MP sensor, 4K video recording, and interchangeable lenses. Capture life's moments with exceptional detail and clarity.",
    category: 'Photography',
    price: 899.99,
    dateAdded: '2023-05-04T09:15:00.000Z',
    averageRating: 4.7,
  },
  {
    id: uuidv4(),

    name: 'Gaming Console',
    description:
      'Next-generation gaming console with 1TB storage, 4K gaming, ray tracing, and a vast library of games. The ultimate entertainment system for gamers.',
    category: 'Gaming',
    price: 499.99,
    dateAdded: '2023-05-03T15:30:00.000Z',
    averageRating: 4.9,
  },
  {
    id: uuidv4(),

    name: 'Wireless Earbuds',
    description:
      'True wireless earbuds with active noise cancellation, touch controls, and 24-hour battery life with the charging case. Perfect for workouts and daily commutes.',
    category: 'Audio',
    price: 149.99,
    dateAdded: '2023-05-02T10:45:00.000Z',
    averageRating: 4.1,
  },
  {
    id: uuidv4(),

    name: 'Tablet Pro',
    description:
      '10.5-inch tablet with high-resolution display, powerful processor, and all-day battery life. Great for productivity, entertainment, and creative work.',
    category: 'Electronics',
    price: 649.99,
    dateAdded: '2023-05-01T14:00:00.000Z',
    averageRating: 4.4,
  },
  {
    id: uuidv4(),

    name: 'Smart Home Hub',
    description:
      'Central control system for your smart home devices with voice assistant, touchscreen display, and compatibility with major smart home platforms.',
    category: 'Smart Home',
    price: 229.99,
    dateAdded: '2023-04-30T11:15:00.000Z',
    averageRating: 3.9,
  },
  {
    id: uuidv4(),

    name: 'Fitness Tracker',
    description:
      'Slim fitness band with heart rate monitoring, sleep tracking, and 7-day battery life. Water-resistant and perfect for tracking your daily activity.',
    category: 'Wearables',
    price: 79.99,
    dateAdded: '2023-04-29T09:30:00.000Z',
    averageRating: 4.0,
  },
  {
    id: uuidv4(),

    name: 'Mechanical Keyboard',
    description:
      'Premium mechanical keyboard with RGB lighting, programmable keys, and durable construction. Designed for gamers and typing enthusiasts.',
    category: 'Computer Accessories',
    price: 129.99,
    dateAdded: '2023-04-28T16:45:00.000Z',
    averageRating: 4.5,
  },
  {
    id: uuidv4(),

    name: 'Wireless Mouse',
    description:
      'Ergonomic wireless mouse with high-precision tracking, customizable buttons, and long battery life. Comfortable for all-day use.',
    category: 'Computer Accessories',
    price: 59.99,
    dateAdded: '2023-04-27T13:30:00.000Z',
    averageRating: 4.2,
  },
  {
    id: uuidv4(),

    name: 'External SSD',
    description:
      '1TB portable solid-state drive with high-speed data transfer, compact design, and durable construction. Perfect for backups and extra storage.',
    category: 'Computer Accessories',
    price: 159.99,
    dateAdded: '2023-04-26T10:15:00.000Z',
    averageRating: 4.7,
  },
].map((p) => {
  return {
    ...p,
    dateAdded: new Date(p.dateAdded),
  };
});
