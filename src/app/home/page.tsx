import React from 'react'

const HomeSreen = () => {

  return (
    <main className='px-20 bg-transparent'>
      <section className="bg-white w-full h-full shadow-sm">
        {/* #1 */}
        <div className="border border-purple-600 container p-8">
          <div className="w-full flex flex-wrap">
            <div className="w-1/3 border border-green-600  w-[270px]- h-[270px]">
              
            </div>

            <div className="w-2/3 border border-blue-500 flex justify-center">
              <div>
                <h2 className='mt-10'>Lorem, ipsum.</h2>
                <h1 className="mt-10 text-3xl font-bold">Lorem ipsum dolor.</h1>
                <p className='mt-8'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

          </div>
        </div>
        {/* #2 */}
        <div className="border border-orange-600 h-20">

        </div>
      </section>
    </main>
  )
}

export default HomeSreen;
