import { ProductI } from "@/common/interfaces/product.interface";
import { createStore } from "zustand";

export type ProductState = {
  productCart: {
    product: ProductI;
    total: number;
  }[];
  products: ProductI[];
  filteredProducts: ProductI[];
};

export type ProductActions = {
  addProduct: (product: ProductI) => void;
  removeProduct: (productId: number) => void;
  deleteProduct: (productId: number) => void;
  setProducts: (products: ProductI[]) => void;
  setFilteredProducts: (search: string) => void;
};

export type ProductStore = ProductActions & ProductState;

export const defaultInitState: ProductState = {
  productCart: [],
  products: [],
  filteredProducts: [],
};

export const createProductStore = (
  initState: ProductState = defaultInitState
) => {
  return createStore<ProductStore>()((set) => ({
    ...initState,
    addProduct(product) {
      return set((state) => {
        let exist = false;

        const newProductCart = state.productCart.map((prod) => {
          if (prod.product.id === product.id) {
            prod.total++;
            exist = true;
          }
          return prod;
        });
        if (exist) {
          return {
            productCart: newProductCart,
          };
        }
        return {
          productCart: [...state.productCart, { product, total: 1 }],
        };
      });
    },
    setProducts(products) {
      return set(() => {
        return {
          products,
          filteredProducts: products,
        };
      });
    },
    removeProduct(productId) {
      return set((state) => {
        const index = state.productCart.findIndex(
          (prod) => prod.product.id === productId
        );
        if (index !== -1) {
          state.productCart[index].total--;
          if (state.productCart[index].total < 1) {
            const newProductCart = state.productCart.filter(prod=> prod.product.id!==productId);
            return {
              productCart: newProductCart,
            };
          }
          return {
            productCart: state.productCart,
          };
        }
        return {};
      });
    },
    deleteProduct(productId) {
      return set((state) => {
        const index = state.productCart.findIndex(
          (prod) => prod.product.id === productId
        );
        if (index !== -1) {
           const newProductCart = state.productCart.filter(
             (prod) => prod.product.id !== productId
           );
          return {
            productCart: newProductCart,
          };
        }
        return {};
      });
    },
    setFilteredProducts(search) {
      return set((state) => ({
        filteredProducts: state.products.filter((prod) =>
          prod.titulo.toLowerCase().includes(search.toLowerCase())
        ),
      }));
    },
  }));
};
