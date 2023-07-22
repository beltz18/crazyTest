import Image from 'next/image'

const MyCart = ({ items }: any) => {
  let total = 0
  items.map(({price}: any) => total += parseInt(price))
  
  return (
    <>
      <div className='flex justify-center items-center body p-6'>
        <div className="w-full h-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-10">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Products saved:</h5>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {
                items.map(({id, name, description, price, img, }: any) => (
                  <li className="py-3 sm:py-4" key={ id }>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          className="rounded-full"
                          src={ img }
                          alt={ name }
                          width="30"
                          height="30"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          { name }
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          { description }
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${ price }
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
            <br /><hr />
            <div className="text-base flex justify-between my-5 font-semibold text-gray-900 dark:text-white">
              <span>Total</span>
              <span>${ total }</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCart