import React from 'react';
import DetailsPage from './_components/DetailsPage';

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <>
      <DetailsPage id={id} />
    </>
  );
};

export default page;
