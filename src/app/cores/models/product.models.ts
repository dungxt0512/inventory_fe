export interface Product {
  id: number;
  productId: string;
  name: string;
  description: string;
  unit: string;
  costPrice: number;
  salePrice: number;
  categoryId: number;
  categoryName: string;
  stockQuantity: number;
  isActive: boolean;
}

export interface CreateProductRequest {
  productId: string;
  name: string;
  unit: string;
  costPrice: number;
  salePrice: number;
  categoryId: number;
}

export interface UpdateProductRequest {
  name: string;
  unit: string;
  costPrice: number;
  salePrice: number;
  categoryId: number;
  isActive: boolean;
}