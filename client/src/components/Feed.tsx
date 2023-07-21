import Image       from 'next/image'
import Link        from 'next/link'

const MyFeed = ({ font, products }: any) => {
  return (
    <>
      <div className={font.className+" grid md:grid-cols-3 sm:grid-cols-2 gap-5 mx-5 my-32"}>
        { products.map(({ id, img, name, price }: any) =>
          (
            <div className='flex justify-center items-center' key={ id }>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <Link href="#" className='flex justify-center items-center'>
                    <Image
                      className="p-8 rounded-t-lg"
                      src={ img }
                      alt="product image"
                      width="350"
                      height="350"
                    />
                  </Link>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        { name }
                      </h5>
                    </a>
                    <div className="flex items-center justify-between my-8">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">${ price }</span>
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