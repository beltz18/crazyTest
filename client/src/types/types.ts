interface Product {
  id: string,
  name: string,
  price: number,
  quantity: number,
  description: string | null,
  category: string,
  img?: string,
}

interface Login {
  email: string,
  password: string,
}

interface Register {
  id: string,
  name: string,
  email: string,
  password: string,
  access: string,
}

export type { Product, Login, Register, }