import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      {...(pending && { disabled: true })}
      className={`bg-blue-400 h-10 w-62 p-2 mt-2 rounded text-white font-bold text-center mx-auto ${
        pending ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {pending ? "Adding..." : "Submit"}
    </button>
  );
}
