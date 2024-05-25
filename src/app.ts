import express, { Application, Request, Response } from "express"
import cors from 'cors'
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";

const app: Application = express()

//parsers
app.use(express.json());
app.use(cors());

//application routes for products
app.use('/api/products', ProductRoutes);
//application routes for orders
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <h1>Welcome to PH_L2_B3_M2A_Express_TS_Server API! 😃</h1>
  <p>Thank you for visiting this API.💫 This is the entry point for our service. ✨</p>
`)
})

export default app;