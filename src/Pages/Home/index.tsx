import CategorySection from "../../components/CategorySection"
import MainFooter from "../../components/Footer"
import Header from "../../components/Header"
import InfoSection from "../../components/InfoSection"
import Slider from "../../components/Slider"
import ProductBannerSection from "../../components/ProductBannerSection"
import ProductsSection from "../../components/ProductsSection"

const Home = () => {
  return (
    <>
      <Header />
      <Slider
        bgImg="/slide_images/girl-slide.svg"
        textColor="#fff"
        buttonTitle="COMPRAR"
        buttonBgColor="#fff"
        buttonBorderColor="#fff"
        buttonTextColor="#fff"
        buttonTextHoverColor="#000"
        buttonTransparent={true}
        buttonWidth="171px"
        buttonHeight="50px"
        title="Base Líquida DAZZLE"
        position="right"
        arrow={true}
      />
      <InfoSection />
      <ProductsSection title="MAIS VENDIDOS" />
      <CategorySection title="ISSO PODE SER DO SEU INTERESSE" />
      <ProductBannerSection />
      <ProductsSection title="OS MAIS DESEJADOS" />
      <ProductsSection title="VIDA SAUDÁVEL" />
      <Slider
        bgImg="/slide_images/girl_bath.png"
        textColor="#fff"
        buttonTitle="CONHEÇA NOSSOS PRODUTOS"
        buttonBgColor="#fff"
        buttonBorderColor="#fff"
        buttonTextColor="#fff"
        buttonTextHoverColor="#000"
        buttonTransparent={true}
        buttonWidth="249px"
        buttonHeight="50px"
        title="Corpo e Banho"
        desc="Confira nossa linha de produtos para o corpo. Hidratantes, loções e desodorantes para os cuidados com seu corpo."
        position="left"
        arrow={false}
      />
      <ProductsSection title="CORPO E BANHO" />
      <ProductsSection />
      <Slider
        bgImg="/slide_images/perfume-slide.png"
        textColor="#000"
        buttonTitle="CONHEÇA NOSSOS PRODUTOS"
        buttonBgColor="#000"
        buttonBorderColor="#000"
        buttonTextColor="#000"
        buttonTextHoverColor="#fff"
        buttonTransparent={true}
        buttonWidth="249px"
        buttonHeight="50px"
        title="Linha EMPIRE"
        desc="Escolha a sua fragrância masculina favorita e desperte as melhores sensações."
        position="right"
        arrow={false}
      />
      <ProductsSection title="FRAGRÂNCIAS" />
      <ProductsSection />
      <ProductsSection title="ACABARAM DE CHEGAR" bgColor="#F8F8F8" />

      <MainFooter />
    </>
  )
}

export default Home
