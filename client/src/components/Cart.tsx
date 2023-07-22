import Image                     from 'next/image'
import { useState }              from 'react'
import { ToastContainer, toast } from 'react-toastify'

const MyCart = ({ items, email }: any) => {
  let total: number = 0
  const [item, setItem]     = useState(items)
  
  if (item.length > 0) item.map(({price}: any) => total += parseInt(price))

  const notifySuccess: any  = (msg: string) => toast.success(msg)
  const notifyError:   any  = (msg: string) => toast.error(msg)

  const handleClick = async (id: string) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_CART_REMOVE}`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    }).then(res => res.json())

    if (data.status == 200) {
      notifySuccess(data.message)
      const newItems = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_CART_GET}`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: email })
      }).then(res => res.json())
      setItem(newItems)
    }
    else notifyError(data.message)
  }
  
  return (
    <>
      <div className='flex justify-center items-center body p-6'>
        <div className="w-full h-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <ToastContainer />
          <div className="flex items-center justify-between mb-10">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Products saved:</h5>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {
                item.length > 0
                 ?
                item.map(({id, name, description, price, img, }: any) => (
                  <li className="py-3 sm:py-4" key={ id }>
                    <div className="flex items-center space-x-4">
                      <span
                        className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300"
                        onClick={ () => handleClick(id) }
                      >
                        <button type="button" className="inline-flex items-center p-1 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300" data-dismiss-target="#badge-dismiss-red" aria-label="Remove">
                          <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                        </button>
                      </span>
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
                  :
                <span>No items added to your car yet</span>
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