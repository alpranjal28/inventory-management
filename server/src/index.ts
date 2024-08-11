import express from "express";
import BodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

// route imports
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

// configurations
const dotenv = config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/dashboard", dashboardRoutes); // http://localhost:3001/dashboard
app.use("/products", productRoutes); // http://localhost:3001/products
app.use("/users", userRoutes); // http://localhost:3001/users
app.use("/expenses", expenseRoutes); // http://localhost:3001/expenses

// start server
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
