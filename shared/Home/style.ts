import styled from "@emotion/styled"
                                         
export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height:100vh;
    padding: 0 16px;
`
export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    margin-top: 16px;
`

export const Title = styled.p`
    font-size: 1.125rem;
    line-height: 150%;
    font-weight: 600;
    color: #0C0C0A;
    margin-top: 8px;
    margin-bottom: 0;
`
export const Subtitle = styled.p`
    font-size: 0.75rem;
    line-height: 150%;
    font-weight: 500;
    color: #797C84;
    margin: 0;
`

export const Offers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 500px;
    gap: 12px;
    height: 100%;
    margin: 32px 0;
`

export const OffersTitle = styled.div`
    font-size: 1rem;
    line-height: 150%;
    font-weight: 600;
    color: #0C0C0A;
    margin-bottom: 4px;
`
