import { useRouter } from "next/router";

function Product() {
  const router = useRouter();

  return <h1>{router.query.slug}</h1>;
}

export default Product;
