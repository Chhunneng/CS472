# Product Review & Rating Platform

A modern web application for browsing products, posting reviews, and rating products.

## Features

- Browse products with pagination
- Filter products by category
- Search products by name
- View product details
- Add, edit, and delete reviews
- Rate products from 1-5 stars
- Responsive design with Tailwind CSS
- Type-safe with TypeScript
- State management with React Query
- Client-side routing with React Router

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Query
- React Router v6
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
  ├── api/          # API client and endpoints
  ├── components/   # Reusable UI components
  ├── context/      # React Context providers
  ├── pages/        # Page components
  ├── types/        # TypeScript type definitions
  ├── App.tsx       # Main application component
  └── main.tsx      # Application entry point
```

## API Endpoints

### Products
- GET /products - Fetch all products (paginated)
- GET /products/search - Search products by name
- GET /products/:id - Get product details

### Reviews
- GET /products/:id/reviews - Get product reviews
- POST /products/:id/reviews - Add a review
- PUT /products/:id/reviews/:id - Update a review
- DELETE /products/:id/reviews/:id - Delete a review

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
