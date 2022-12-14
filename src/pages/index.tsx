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
import Head from "next/head"

export default function Home () {
  return (
   <>
      <Head>
        <title>Desconto Beleza</title>
        <link rel="apple-touch-icon" sizes="180x180" href="../assets/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../assets/favicon-16x16.png"/>
      </Head>
   
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
        <OffersCard title="Paleta de Contorno, Collection, Océane, Océane, Opacas: Brown Sugar/Sand/Cinnamon/Heat/Cintilantes: Burnout/Toffee" subtitle="amazon.com.br" price="R$52,74" imageUrl="https://m.media-amazon.com/images/I/81w1UIyPv8L._AC_SL1500_.jpg" cardLink="https://amzn.to/3Od2okU" />
        <OffersCard title="Máscara Capilar Siàge Reconstrói Os Fios 250g (Nova Versão)" subtitle="amazon.com.br" price="R$42,67" imageUrl="https://m.media-amazon.com/images/I/61m+swfC2EL._AC_SL1500_.jpg" cardLink="https://amzn.to/3UXzMOG" />
        <OffersCard title="Joop! Wow! Eau de Toilette 60ml" subtitle="amazon.com.br" price="R$162,00" imageUrl="https://m.media-amazon.com/images/I/61vIwIIzTCL._AC_SL1500_.jpg" cardLink="https://amzn.to/3AeXm1i" />
        <OffersCard title="CK EVERYONE EAU DE PARFUM 100ML" subtitle="amazon.com.br" price="R$230,00" imageUrl="https://m.media-amazon.com/images/I/71HMO8JS73L._AC_SL1500_.jpg" cardLink="https://amzn.to/3TUGnZn" />
      </Offers>
    </Container>
    </>
  )
}
