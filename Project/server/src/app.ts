import express, { Request, Response } from 'express';
import productRoutes from './routes/productRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());

// Routes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
app.use('/api/products', productRoutes);
app.get('/', (req: Request, res: Response) => {
    res.send('OK')
});

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;

