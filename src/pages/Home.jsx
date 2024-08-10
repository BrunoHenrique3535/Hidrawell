import Header from "../components/Header";
import { HomeContainer } from "../styles/Home.styles";
import { Global } from "../styles/global";
import { Link } from "react-router-dom"


export default function Home() {
    return (
      <HomeContainer>
        <Global/>
        <Header/>
        <h1>HIDRAWELL</h1>
        <p>Apresentamos a garrafa inteligente HidraWell,uma solução inovadora para ajudar as pessoas a manterem-se hidratadas de forma eficaz, eficiente para quem busca melhorar sua hidratação diária, saúde e perforamance diaria.</p>
        <Link to="/sobre" id="mais">Saiba Mais</Link>
      </HomeContainer>
    )
}