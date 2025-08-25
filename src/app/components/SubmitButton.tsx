import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {/* <AlertDialog>
      <AlertDialogTrigger asChild> */}
      <button
        type="submit"
        {...(pending && { disabled: true })}
        className={`mx-auto mt-2 h-10 w-62 rounded bg-blue-400 p-2 text-center font-bold text-white ${
          pending ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {pending ? 'Adding...' : 'Submit'}
      </button>
    </>
  );
}
