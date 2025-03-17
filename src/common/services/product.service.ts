import { ProductI } from "../interfaces/product.interface";
import Products from "../data/articles.json";

export async function getProducts(): Promise<ProductI[]> {
  const response = await new Promise<{ ok: boolean; data?: ProductI[] }>(
    (resolve, reject) => {
      setTimeout(() => {
        if (Products) {
          resolve({
            ok: true,
            data: Products,
          });
        }
        reject({
          ok: false,
        });
      }, 1000);
    }
  );
  if (!response.ok || !response.data) {
    throw new Error("Failed to fetch products");
  }
  return response.data;
}

export async function getProduct(id: number): Promise<ProductI> {
  const response = await new Promise<{ ok: boolean; data?: ProductI }>(
    (resolve, reject) => {
      setTimeout(() => {
        const product = Products.find((prod) => prod.id === id);
        if (product) {
          resolve({
            ok: true,
            data: product,
          });
        }
        reject({
          ok: false,
        });
      }, 1000);
    }
  );
  if (!response.ok || !response.data) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  return response.data;
}
