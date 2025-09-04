import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';

const Emails = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //create formData object
    const formData = new FormData();
    formData.append('email', email);

    const response = await axios.post('/api/emails', formData);
    if (response.data.success) {
      //display backend message
      toast.success(response.data.msg);
      //if successful clear the field
      setEmail('');
      console.log(email);
    } else {
      toast.error('Error subscribing');
    }
  };

  return (
    <div className="px-5 pb-5 md:px-28 md:pb-12">
        <p className="m-auto mt-10 max-w-[740px] text-xs sm:text-base">Subscribe to Kimbotic Coffee Newsletter</p>
        <form
          className="shadow-[7px_7px_0_#ccc] mx-auto flex max-w-[500px] scale-75 justify-between border border-black sm:scale-100"
          onSubmit={onSubmitHandler}
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            placeholder="email subscribe"
            className="pl-4 outline-none"
          ></input>
          <button
            className="border-l-1 border-black px-4 py-2 active:bg-gray-600 active:text-white sm:px-8"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail-plus-icon lucide-mail-plus"
            >
              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="M19 16v6" />
              <path d="M16 19h6" />
            </svg>
          </button>
        </form>
   
    </div>
  );
};

export default Emails;
