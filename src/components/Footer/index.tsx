import CustomButton from "../Button"
import { SubFooter, Footer, LastFooter } from "./styles"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"
import { GrFacebookOption } from "react-icons/gr"

const footerActions = [
  {
    title: "GRUPO HINODE",
    links: [
      { url: "#", title: "A Empresa" },
      { url: "#", title: "Catálogo Hinode" },
      { url: "#", title: "Seja um Consultor" },
      { url: "#", title: "Hinode Prime" },
      { url: "#", title: "Frete Inteligente" },
    ],
  },
  {
    title: "MAIS VENDIDOS",
    links: [
      { url: "#", title: "Corps Lígnea Body COntour Gel Modelador" },
      { url: "#", title: "Shake de Vanilla H+ HND" },
      { url: "#", title: "Shake de Morango H+ HND" },
      { url: "#", title: "Luva de Silicone Creme para as Mãos Hands" },
      { url: "#", title: "Empire Gold" },
      { url: "#", title: "Empire VIP" },
    ],
  },
  {
    title: "DÚVIDAS FREQUENTES",
    links: [
      { url: "#", title: "Fale Conosco" },
      { url: "#", title: "Entrega, Trocas e Devoluções" },
      { url: "#", title: "Compra e Venda" },
      { url: "#", title: "Política de Privacidade" },
      { url: "#", title: "Remover Consentimento" },
    ],
  },
]

const MainFooter = () => {
  return (
    <>
      <SubFooter>
        <div className="wrapper">
          <h2>Receba nossas ofertas e novidades</h2>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu email" />
          <CustomButton
            bgColor="#009BAA"
            borderColor="transparent"
            textColor="#fff"
            textHoverColor="#fff"
            title="CADASTRAR"
            transparent={false}
            width="130px"
            height="48px"
          />
        </div>
      </SubFooter>

      <Footer>
        <div className="wrapper">
          {footerActions.map((action, index) => (
            <div className="actions" key={index}>
              <h4>{action.title}</h4>

              {action.links.map((link, index) => (
                <a href={link.url} key={index}>
                  {link.title}
                </a>
              ))}
            </div>
          ))}

          <div className="actions">
            <CustomButton
              bgColor="#009BAA"
              borderColor="transparent"
              textColor="#fff"
              textHoverColor="#fff"
              title="CENTRAL DE ATENDIMENTO"
              transparent={false}
              width="221px"
              height="48px"
            />

            <span>De segunda a sexta das 9h às 21h</span>
            <span>Capitais e regiões metropolitanas 4020-2424</span>
            <span>Demais localidades: 0800-144-6633</span>

            <div className="socials">
              <BsInstagram />
              <AiOutlineYoutube />
              <GrFacebookOption />
            </div>
          </div>
        </div>
      </Footer>

      <LastFooter></LastFooter>
    </>
  )
}

export default MainFooter
