import React from 'react';
import Image from "next/image"
import SignInFormClient from '@/modules/auth/components/sign-in-form-client';

const Page = () => {
  return (
    <div className="perspective flex items-center justify-center min-h-screen p-4">
      <div 
        className="bg-blue-50 rounded-2xl shadow-2xl p-8 max-w-md w-full"
        style={{
          perspective: '1000px',
          transform: 'rotateX(2deg) rotateY(-2deg)'
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <Image 
            src={"/login.svg"} 
            alt='Login-Image' 
            height={280} 
            width={280} 
            className='object-cover rounded-xl'
            loading="eager"
          />
          <div className="w-full">
            <SignInFormClient/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;