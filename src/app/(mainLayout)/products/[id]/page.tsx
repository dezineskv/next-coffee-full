import SingleProduct from "../../../components/SingleProduct";

const ProductId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <SingleProduct id={id} />;
};

export default ProductId;
