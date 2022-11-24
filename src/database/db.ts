export interface IProduct {
  name: string
  price: number
  promotionPrice: number
  inPromotion: boolean
  img: string
}

export interface ICategory {
  title: string
  imgUrl: string
  hoverImg: string
}

export const products: Array<IProduct[]> = [
  [
    {
      name: "Esponja 3D Dazzle",
      price: 36.9,
      promotionPrice: 29.9,
      inPromotion: true,
      img: "/product_images/produto (1).svg",
    },
    {
      name: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g",
      price: 89.9,
      promotionPrice: 79.9,
      inPromotion: false,
      img: "/product_images/produto (2).svg",
    },
    {
      name: "Grace La Rose Sublime Deo Colônia Pocket 15ml",
      price: 39.9,
      promotionPrice: 29.9,
      inPromotion: true,
      img: "/product_images/produto (3).svg",
    },
    {
      name: "Pó Compacto HD Cover Claro 2 Dazzle - 12g",
      price: 46.9,
      promotionPrice: 29.9,
      inPromotion: false,
      img: "/product_images/produto (4).svg",
    },
  ],
  [
    {
      name: "Esponja 3D Dazzle 2",
      price: 36.9,
      promotionPrice: 29.9,
      inPromotion: true,
      img: "/product_images/produto (5).svg",
    },
    {
      name: "Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g 2",
      price: 89.9,
      promotionPrice: 79.9,
      inPromotion: false,
      img: "/product_images/produto (6).svg",
    },
    {
      name: "Grace La Rose Sublime Deo Colônia Pocket 15ml 2",
      price: 39.9,
      promotionPrice: 29.9,
      inPromotion: true,
      img: "/product_images/produto (7).svg",
    },
    {
      name: "Pó Compacto HD Cover Claro 2 Dazzle - 12g 2",
      price: 46.9,
      promotionPrice: 29.9,
      inPromotion: false,
      img: "/product_images/produto (8).svg",
    },
  ],
  [
    {
      name: "Esponja 3D Dazzle 3",
      price: 36.9,
      promotionPrice: 29.9,
      inPromotion: true,
      img: "/product_images/produto (9).svg",
    },
    {
      name: "Base Líquida Hyaluronic Hydra Dazzle Escuro 3 - 500g 3",
      price: 89.9,
      promotionPrice: 79.9,
      inPromotion: false,
      img: "/product_images/produto (10).svg",
    },
    {
      name: "Grace La Rose Sublime Deo Colônia Pocket 15ml 3",
      price: 39.9,
      promotionPrice: 29.9,
      inPromotion: true,
      img: "/product_images/produto (11).svg",
    },
    {
      name: "Pó Compacto HD Cover Claro 2 Dazzle - 12g 3",
      price: 46.9,
      promotionPrice: 29.9,
      inPromotion: false,
      img: "/product_images/produto (12).svg",
    },
  ],
  [
    {
      name: "Esponja 3D Dazzle 3",
      price: 36.9,
      promotionPrice: 29.9,
      inPromotion: true,
      img: "/product_images/produto (13).svg",
    },
    {
      name: "Base Líquida Hyaluronic Hydra Dazzle Escuro 3 - 500g 3",
      price: 89.9,
      promotionPrice: 79.9,
      inPromotion: false,
      img: "/product_images/produto (14).svg",
    },
    {
      name: "Grace La Rose Sublime Deo Colônia Pocket 15ml 3",
      price: 39.9,
      promotionPrice: 29.9,
      inPromotion: true,
      img: "/product_images/produto (15).svg",
    },
    {
      name: "Pó Compacto HD Cover Claro 2 Dazzle - 12g 3",
      price: 46.9,
      promotionPrice: 29.9,
      inPromotion: false,
      img: "/product_images/produto.svg",
    },
  ],
]

export const categories: ICategory[] = [
  {
    title: "MAQUIAGENS",
    imgUrl: "/category_images/maquiagem.png",
    hoverImg: "/category_images/maquiagem_hover.png",
  },
  {
    title: "FRAGRÂNCIAS",
    imgUrl: "/category_images/fragrancias.png",
    hoverImg: "/category_images/fragrancias_hover.png",
  },
  {
    title: "ENERGIA & PERFORMACE",
    imgUrl: "/category_images/energia.png",
    hoverImg: "/category_images/energia_hover.png",
  },
  {
    title: "CORPO & BANHO",
    imgUrl: "/category_images/corpo.png",
    hoverImg: "/category_images/corpo_hover.png",
  },
]
