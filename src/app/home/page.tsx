"use client";
import React from 'react';
import Image from 'next/image';
import CardDivider from '@/components/ui/CardDivider';

const HomeSreen = () => {

  return (
    <main className='px-20 bg-transparent'>
      <section className="bg-white w-full h-full shadow-sm">
        {/* #1 */}
        <div className="container p-8">
          <div className="w-full flex flex-wrap">
            {/* Photo */}
            <div className="w-1/3   w-[270px]- h-[270px] p-1 flex justify-center items-center">
              <div className="border rounded-full w-64 h-64">
                <Image className='border-8 border-white rounded-full w-auto h-auto' width={200} height={200} src="/images/profile.jpeg" alt="profile" />
               </div>
            </div>
            {/* descrption */}
            <div className="w-2/3 flex justify-center">
              <div>
                <h2 className='mt-10'>Lorem, ipsum.</h2>
                <h1 className="mt-10 text-3xl font-bold">Lorem ipsum dolor.</h1>
                <p className='mt-8'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

          </div>
        </div>
        {/* #2 */}
        <div className=" h-auto border-y p-2">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 py-2">
            <CardDivider imageSrc="/icons/js.png" title='Javascript' subtitle='Frontend' description='' linkUrl='#' linkText='Visit source' />
            <CardDivider imageSrc="/icons/react.png" title='React' subtitle='Frontend' description='' linkUrl='#' linkText='Visit source' />
            <CardDivider imageSrc="/icons/nextjs.png" title='Nextjs' subtitle='Frontend' description='' linkUrl='#' linkText='Visit source' />
            <CardDivider imageSrc="/icons/tailwindcss.png" title='Tailwindcss' subtitle='Frontend' description='' linkUrl='#' linkText='Visit source' />
            <CardDivider imageSrc="/icons/wordpress.png" title='Wordpress' subtitle='CMS' description='' linkUrl='#' linkText='Visit source' />
            <CardDivider imageSrc="/icons/nodejs.png" title='Nodejs' subtitle='Backend' description='' linkUrl='#' linkText='Visit source' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeSreen;
