import SingleProduct from "../../../components/SingleProduct";

const ProductId = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;

  return <SingleProduct id={id} />;
};

export default ProductId;
