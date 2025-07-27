import SingleInv from "../../../components/SingleInv";

const ProductId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <SingleInv id={id} />;
};

export default ProductId;
