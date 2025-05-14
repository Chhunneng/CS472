import { NextFunction, Request, Response } from "express";
import { Product, products } from "../models/product";
import { v4 as uuid4 } from "uuid";

const path = require("path");
const fs = require("fs");

// const productsPath = path.join(__dirname, "data", "products.json");

// const readProducts = () => {
//     const data = fs.readFileSync(productsPath, "utf8");
//     return JSON.parse(data);
// };

export const getProducts = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json(products);
    } catch (error) {
        next(error);
    }
};

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, description, category, price, averageRating } = req.body;
      const newItem: Product = { id: uuid4(),  name, description, category, price, averageRating, dateAdded: new Date()};
      products.push(newItem);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  };