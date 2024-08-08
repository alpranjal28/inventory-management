import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "@/app/(components)/Header";

type ProductFormData = {
	productId: string;
  name: string;
  price: number;
  stockQuantity: number;
  rating?: number;
};
type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};
const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {

  const [formData, setFormData] = useState({
    productId: uuidv4(),
    name: "",
    price: 0,
    rating: 0,
    stockQuantity: 0,
  });

  if (!isOpen) {
    return null;
  }

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
		console.log("formData", formData);
		
    onCreate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        
				<form action="" onSubmit={handleSubmit} className="mt-5">
          {/* PRODUCT NAME INPUT */}
          <label htmlFor="productName" className={labelCssStyles}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="productName"
            placeholder="Name"
            value={formData.name}
            className={inputCssStyles}
            onChange={handleChange}
            required
          />
          {/* PRICE INPUT */}
          <label htmlFor="productPrice" className={labelCssStyles}>
            Price
          </label>
          <input
            type="number"
            name="price"
            id="productPrice"
            placeholder="Price"
            value={formData.price}
            className={inputCssStyles}
            onChange={handleChange}
            required
          />

          {/* STOCK QUANTITY */}
          <label htmlFor="stockQuantity" className={labelCssStyles}>
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            id="stockQuantity"
            placeholder="Stock Quantity"
            value={formData.stockQuantity}
            className={inputCssStyles}
            onChange={handleChange}
            required
          />

          {/* RATING */}
          <label htmlFor="rating" className={labelCssStyles}>
            Rating
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            placeholder="Rating"
            value={formData.rating}
            className={inputCssStyles}
            onChange={handleChange}
						min={0}
            max={5}
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Create
          </button>
          <button
            onClick={onClose}
            type="button"
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
