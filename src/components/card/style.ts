import styled from "@emotion/styled"

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 135px;
    border-radius: 20px;
    background-color: #FDF5F0;
    padding: 10px 12px;
    gap: 12px;
    :hover {
        background-color: #FFDCC6;
        cursor: pointer;
    }
`

export const ImageBox = styled.div `
min-width: 116px;
    width: 30%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
`

export const CardTextBox = styled.div `
    width: 70%;
`
export const CardTitle = styled.p `
    font-size: 0.875rem;
    line-height: 150%;
    font-weight: 500;
    color: #0C0C0A;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /*:hover {
        -webkit-line-clamp: unset;
    } */
`

export const CardLinkText = styled.p `
    font-size: 0.825rem;
    line-height: 150%;
    font-weight: 400;
    color: #E99563;
`
export const CardPrice = styled.div `
    font-size: 1.25rem;
    line-height: 150%;
    font-weight: 600;
    color: #E99563;
    margin-top: 8px;
`

export const CardLink = styled.a`
    all: unset;
    width: 100%;
`