export interface IProduct {
  name: string
  price: number
  promotionPrice: number
  inPromotion: boolean
  img: string
}

export const products: IProduct[] = [
  {
    name: "Esponja 3D Dazzle",
    price: 36.9,
    promotionPrice: 29.9,
    inPromotion: true,
    img: "/product_images/esponja.png",
  },
  {
    name: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
    price: 89.9,
    promotionPrice: 79.9,
    inPromotion: false,
    img: "/product_images/esponja.png",
  },
  {
    name: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
    price: 39.9,
    promotionPrice: 29.9,
    inPromotion: true,
    img: "/product_images/esponja.png",
  },
  {
    name: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
    price: 46.9,
    promotionPrice: 29.9,
    inPromotion: false,
    img: "/product_images/esponja.png",
  },
]
