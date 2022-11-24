import CategorySection from "./components/CategorySection"
import MainFooter from "./components/Footer"
import Header from "./components/Header"
import InfoSection from "./components/InfoSection"
import MainSlide from "./components/MainSlide"
import ProductsSection from "./components/ProductsSection"

function App() {
  return (
    <>
      <Header />
      <MainSlide />
      <InfoSection />
      <ProductsSection title="MAIS VENDIDOS" />
      <CategorySection title="ISSO PODE SER DO SEU INTERESSE" />
      <MainFooter />
    </>
  )
}

export default App
