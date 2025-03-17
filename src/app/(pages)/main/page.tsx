import { Banner } from "@/app/components/banner/banner";
import { Search } from "@/app/components/search/Search";
import { CardsContainer } from "@/app/container/cards-container/CardsContainer";
import { getProducts } from "@/common/services/product.service";

export default async function Page() {
  const products = await getProducts();
  return (
    <div>
      <Banner />
      <Search />
      <CardsContainer  products={products} />
    </div>
  );
}
