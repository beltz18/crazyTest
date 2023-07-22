import { useState }              from 'react'
import Link                      from 'next/link'
import Image                     from 'next/image'
import { ToastContainer, toast } from 'react-toastify'

const MyFeed = ({ font, products, email }: any) => {
  const [product, setProduct]   = useState(products)
  const [name, setName]         = useState("")
  const [price, setPrice]       = useState(0)
  const [category, setCategory] = useState("")

  const notifySuccess: any  = (msg: string) => toast.success(msg)
  const notifyError:   any  = (msg: string) => toast.error(msg)

  const handleName     = (e: any) => { setName(e.target.value)      }
  const handleCategory = (e: any) => { setCategory(e.target.value)  }
  const handlePrice    = (e: any) => { setPrice(e.target.value | 0) }

  const addToCart = async (id: any) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_CART_ADD}`, {
      method : "POST",
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, user: email })
    }).then(res => res.json())
    if (data.status == 201) notifySuccess(data.message)
    else notifyError(data.message)
  }

  const body: any = { filter: { name, price, category } }

  const fetcher = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PRODUCT_FIL}`, {
      method : "POST",
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(res => res.json())
    setProduct(data)
  }

  return (
    <>
      <ToastContainer />
      <h1 className={font.className+' mx-10 lg:mx-60 mt-32'}>Filter</h1>
      <div className={font.className+" grid md:grid-cols-2 mx-10 lg:mx-60 my-5"}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            onKeyUp={ handleName }
          />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name of the product</label>
        </div>
        <div className="relative z-0 w-full group">
          <div className="grid md:grid-cols-3">
            <div className="relative z-0 w-full group">
              <input
                type="number"
                min="0"
                name="price"
                id="price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onKeyUp={ handlePrice }  
              />
              <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Max price</label>
            </div>
            <div className="relative z-0 w-full group">
              <select name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={ handleCategory }>
                <option value="">All</option>
                <option>Technology</option>
                <option>Entertainment</option>
                <option>Video Games</option>
                <option>Other</option>
              </select>
            </div>
            <div className="relative z-0 w-full mx-0 lg:mx-5 group">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ fetcher }>
                Buscar
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={font.className+" grid md:grid-cols-3 sm:grid-cols-2 gap-5 mx-5 my-32"}>
        { product.map(({ id, img, name, price }: any) =>
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
                      <Link
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => addToCart(id) }
                      >
                        Add to cart
                      </Link>
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