import Image from "next/image";
import "./styles.css";
import { getProduct } from "@/common/services/product.service";
import { redirect } from "next/navigation";
import DetailInfo from "@/app/components/detail-info/DetailInfo";
import BuyButton from "@/app/components/buy-button/BuyButton";

interface PagePropsI {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PagePropsI) {
  const { id } = await params;
  if (isNaN(Number(id))) {
    redirect("/main");
  }
  const data = await getProduct(Number(id));

  return (
    <>
      <div className="detail-container">
        <div className="detail-info">
          <div className="detail-info-image">
            <Image
              src={data.imagen}
              alt="alt-detail-img"
              height={500}
              width={500}
            />
          </div>
          <div>
            <h2>Descripcion</h2>
            <p>{data.descripcion}</p>
            <div className="detail-button-container show-responsive">
              <BuyButton product={data} />
            </div>
          </div>
        </div>
        <DetailInfo product={data} />
      </div>
    </>
  );
}
