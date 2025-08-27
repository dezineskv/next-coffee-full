import React from 'react';
import DetailsPage from './_components/DetailsPage';

const page = async ({ id }: { id: string }) => {
// const page = async ({ params }: { params: { id: string } }) => {
  // const { id } = await params;
  const { id } = await id;
  return (
    <>
      <DetailsPage id={id} />
    </>
  );
};

export default page;
