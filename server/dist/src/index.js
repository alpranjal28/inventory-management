"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = require("dotenv");
// route imports
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const expenseRoutes_1 = __importDefault(require("./routes/expenseRoutes"));
// configurations
const dotenv = (0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
// routes
app.use("/dashboard", dashboardRoutes_1.default); // http://localhost:3001/dashboard
app.use("/products", productRoutes_1.default); // http://localhost:3001/products
app.use("/users", userRoutes_1.default); // http://localhost:3001/users
app.use("/expenses", expenseRoutes_1.default); // http://localhost:3001/expenses
// start server
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});
