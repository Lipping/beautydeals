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
    cardLink: string;
}
    
export default function OffersCard (props:IOffersCardProps) {
    return (
        <CardLink href={props.cardLink} target={'_blank'}>
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