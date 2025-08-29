"use client";
import React from 'react';

const HomeSreen = () => {

  return (
    <main className="w-full md:px-20 bg-transparent">
      <section className="bg-white w-full h-full shadow-sm">
        {/* #1 */}
        <div className="container p-8">
          <div className="w-full">
            {/* Title descrption */}
            <div className="w-full flex justify-center">
              <div className='text-center'>
                <h1 className="mt-10 text-3xl font-bold">Lorem ipsum dolor.</h1>
                <p className="mt-8">Lorem ipsum dolor sit amet consectetur.</p>
                <h2 className="mt-10">DEVHOPE</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeSreen;
