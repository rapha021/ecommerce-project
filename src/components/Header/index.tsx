import { Container, LastContainer, SubContainer } from "./styles"
import { RiUserHeartLine } from "react-icons/ri"
import {
  BiSearch,
  BiUser,
  BiHeart,
  BiShoppingBag,
  BiMenu,
} from "react-icons/bi"

const Header = () => {
  return (
    <>
      <SubContainer>
        <div className="wrapper">
          <div className="actions">
            <span>A Empresa</span>
          </div>
          <div className="actions">
            <a href="#">
              <RiUserHeartLine />
              Seja um consultor
            </a>
            <span>Fale Conosco</span>
          </div>
        </div>
      </SubContainer>

      <Container>
        <div className="wrapper">
          <img src="/logo.svg" alt="Logo do Grupo Hinode" />

          <div className="search-bar">
            <input
              type="text"
              placeholder="Busque aqui o produto de seu interesse"
            />
            <span>
              <BiSearch />
            </span>
          </div>

          <div className="action-buttons">
            <BiUser />
            <span>
              <h4>Olá Visitante,</h4>

              <h3>ENTRE OU CADASTRE-SE</h3>
            </span>
          </div>

          <div className="action-buttons">
            <BiHeart />
            <h3>FAVORITOS</h3>
          </div>

          <div className="action-buttons">
            <BiShoppingBag />
            <h3>SACOLA</h3>
          </div>
        </div>
      </Container>

      <LastContainer>
        <div className="wrapper">
          <BiMenu />
          <h2>Todas as categorias</h2>
          <h2>FRAGRÂNCIAS</h2>
          <h2>MAQUIAGEM</h2>
          <h2>CORPO & BANHO</h2>
          <h2>VIDA SAUDÁVEL</h2>
          <h2>ENERGIA E PERFORMANCE</h2>
        </div>
      </LastContainer>
    </>
  )
}

export default Header
