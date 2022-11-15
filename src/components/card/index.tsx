import Image from "next/image";
import { title } from "process";
import { Url } from "url";
import { 
    Container,
    ImageBox,
    CardTextBox,
    CardTitle,
    CardLinkText,
    CardPrice,    
    CardLink} from "./style";

interface IOffersCardProps {
    title: string;
    subtitle: string;
    price: string;
    imageUrl: string;
}
    
export default function OffersCard (props:IOffersCardProps) {
    return (
        <CardLink href="https://www.amazon.com.br/Mochila-para-Notebook-Lenovo-Preta/dp/B075Y72PHZ?linkCode=sl1&tag=benchpromosreal-20&linkId=0cb20aa837d1e622aea8e99b02d6b4dd&language=pt_BR&ref_=as_li_ss_tl&th=1" target={'_blank'}>
        <Container>
            <ImageBox>
                <img src={props.imageUrl} width='200' />
            </ImageBox>
            <CardTextBox>
                <CardTitle>{props.title}</CardTitle>
                <CardLinkText>{props.subtitle}</CardLinkText>
                <CardPrice>{props.price}</CardPrice>
            </CardTextBox>
        </Container>
        </CardLink>
    )
}