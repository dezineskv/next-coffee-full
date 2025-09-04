'use client';

import { toast } from 'react-toastify';
import { Button } from '@/ui/button';
import { deleteProduct } from '@/actions/product';
import { useRouter } from 'next/navigation';

export default function ProductDeleteButton({ productId }: { productId: string }) {
  const router = useRouter();
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', productId);

    const result = await deleteProduct(formData);
    if (result.success) {
      toast.success('Product deleted successfully');
      //handle auto delete on page
      router.refresh();
    } else {
      toast.error('Error deleting product');
    }
  };
  return (
    <form onSubmit={handleDelete} className="flex justify-end pr-5">
      <Button className="w-20 rounded border bg-red-400 px-2" type="submit">
        delete
      </Button>
    </form>
  );
}
