import Image from "next/image"
import 
{ Container,
  TitleBox,
  Title,
  Subtitle,
  Offers,
  OffersTitle,
 } from "../../shared/Home/style"
import OffersCard from "../components/card"

export default function Home () {
  return (
    <Container>
      <TitleBox>
        <Image src={'/assets/logoIcon2.png'} alt='logo icon' width={'24'} height={'24'} />
        <Title>Desconto Beleza</Title>
        <Subtitle>Encontre a promoção certa para você</Subtitle>
      </TitleBox>
      <Offers>
        <OffersTitle>Ofertas</OffersTitle>
        <OffersCard title="Base BB Cream L'Oréal Paris 5 em 1 Cor Morena FPS 20, 30ml" subtitle="amazon.com.br" price="R$19,90" imageUrl="https://m.media-amazon.com/images/I/61D6iOSAI+L._AC_SL1500_.jpg" cardLink="https://amzn.to/3Ai6hiK" />
        <OffersCard title="Meguiars Shampoo Suave Gel, 473 ml" subtitle="amazon.com.br" price="R$94,40" imageUrl="https://m.media-amazon.com/images/I/51LEuKKLoKL._AC_SL1000_.jpg" cardLink="https://amzn.to/3TAg8XH" />
        <OffersCard title="Kit Antimarcas Garnier Uniform&Matte Vitamina C - Limpeza Facial + Água Micelar + Protetor Hidratante" subtitle="amazon.com.br" price="R$81,99" imageUrl="https://m.media-amazon.com/images/I/71Ni6VYl8XL._AC_SL1500_.jpg" cardLink="https://amzn.to/3TK4JES" />
      </Offers>
    </Container>
  )
}
