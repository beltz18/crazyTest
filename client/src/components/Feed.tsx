import React from 'react'
import Link  from 'next/link'

const MyFeed = ({ font }: any) => {
  const imgProducts = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
  ]

  return (
    <>
      <div className={font.className+" grid md:grid-cols-3 sm:grid-cols-2 gap-5 mx-5 my-32"}>
        { imgProducts.map((img: any) =>
          (
            <div className='flex justify-center items-center' key={ img }>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <Link href="#">
                    <img
                      className="p-8 rounded-t-lg"
                      src={ img }
                      alt="product image"
                    />
                  </Link>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                      </h5>
                    </a>
                    <div className="flex items-center justify-between my-8">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default MyFeed