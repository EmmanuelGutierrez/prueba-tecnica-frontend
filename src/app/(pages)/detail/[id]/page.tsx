import Image from "next/image";
import "./styles.css";
import StarRating from "@/app/components/star-rating/StarRating";
import Link from "next/link";

interface PagePropsI {
  params: Promise<{ id: string }>;
}

const data = {
  id: 5,
  titulo: "Reloj Inteligente",
  descripcion: "Reloj inteligente con monitor de frecuencia cardíaca y GPS.",
  precio: 249.99,
  imagen:
    "https://cdn-xiaomi.waugi.com.ar/1235-thickbox_default/smart-watch-redmi-watch-2-lite-xiaomi-reloj-inteligente-negro.jpg",
  fav: true,
  rating: 4.5,
  categoria: "Accesorios",
};

export default async function Page({ params }: PagePropsI) {
  const { id } = await params;
  console.log(id);

  return (
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
            <button className="detail-button">Comprar</button>
          </div>
        </div>
      </div>
      <div className="detail-info2">
        <div>
          <h1>{data.titulo}</h1>
          <div className="detail-rating">
            <StarRating rating={data.rating} />
            <p>{data.rating}</p>
          </div>
        </div>
        <p className="show">Calificacion {data.rating} de 5.177 opiniones</p>
        <p>${data.precio}</p>
        <div className="show">
          <Link href={"#"} className="show">
            Ver los medios de pago
          </Link>
          <p>Llega gratis hoy!!!</p>
        </div>
        <div className="show">
          <Link href={"#"} className="show">
            Mas formas de entrega
          </Link>
          <p className="show">Devolucion gratis</p>
        </div>
        <p className="show">Tenes mas de 30 dias desde que lo recibis.</p>
        <Link href={"#"} className="show">
          Conocer mas
        </Link>
        <div className="detail-button-container show">
          <button className="detail-button">Comprar</button>
        </div>
      </div>
    </div>
  );
}
