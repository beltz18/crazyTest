import Image from 'next/image'

const MyCart = ({ email }: any) => {
  return (
    <>
      <div className='flex justify-center items-center body p-6'>
        <div className="w-full h-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-10">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Products saved:</h5>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {/* <Image
                      className="rounded-full"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                      alt="Neil image"
                      width="30"
                      height="30"
                    /> */}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus dolore iste corrupti vero consectetur praesentium
                      nihil earum ipsam! Repellendus, amet hic ab a id deleniti
                      incidunt ad sint voluptate voluptas?
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $120
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {/* <Image
                      className="rounded-full"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                      alt="Neil image"
                      width="30"
                      height="30"
                    /> */}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus dolore iste corrupti vero consectetur praesentium
                      nihil earum ipsam! Repellendus, amet hic ab a id deleniti
                      incidunt ad sint voluptate voluptas?
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
            </ul>
            <br /><hr />
            <div className="text-base flex justify-between my-5 font-semibold text-gray-900 dark:text-white">
              <span>Total</span>
              <span>$320</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCart