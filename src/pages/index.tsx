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
        <OffersCard title="Perfume importado do Zimbabue SDAIUHSDIDASHUIASDDASHUIHUs sdauisadhasdhiusdaihusdaihudsahuihui" subtitle="americanas" price="R$456" imageUrl="https://images.unsplash.com/photo-1644638768530-713bc23ba978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </Offers>
    </Container>
  )
}
