import { ProductStoreProvider } from "./ProductStoreProvider";

export const ZustandProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ProductStoreProvider>{children}</ProductStoreProvider>;
};
