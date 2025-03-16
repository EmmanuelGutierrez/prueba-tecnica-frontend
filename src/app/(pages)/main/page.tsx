import { Banner } from "@/app/components/banner/banner";
import { Search } from "@/app/components/search/Search";
import { CardsContainer } from "@/app/container/cards-container/CardsContainer";

export default function Page() {
  return (
    <div>
      <Banner />
      <Search />
      <CardsContainer />
    </div>
  );
}
