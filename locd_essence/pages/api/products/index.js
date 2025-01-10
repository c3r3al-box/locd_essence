import nc from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import { newProduct } from '@/backend/controllers/productsControllers';

// Create the handler
const handler = nc();

// Use the database connection middleware
handler.use(dbConnect);

// Define the POST request handler
handler.post(newProduct);
handler.get(getProducts)

export default handler;
