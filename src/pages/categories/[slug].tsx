import { useRouter } from "next/router";
import { GetStaticProps } from "next";

interface IProduct {
  id: string;
  title: string;
}
interface CategoryProps {
  products: IProduct[];
}

function Category() {
  const router = useRouter();

  return <h1>{router.query.slug}</h1>;
}

export default Category;

export const getStaticProps: GetStaticProps<CategoryProps> = async (
  context
) => {
  const { slug } = context.params;

  const response = await fetch(
    `http://localhost:3333/products?category_id=${slug}`
  );
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};
