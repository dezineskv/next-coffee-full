import SingleProduct from "../../../components/SingleProduct";

const ProductsId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <SingleProduct id={id} />;
};

export default ProductsId;
