import styled from 'styled-components'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: 'red';
`;

export const BackGroundImagem = styled.div`
    height: 100%;
    resize: vertical;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${require('../../assets/imgs/logo.jpg')});
`;

export const OverlayImagem = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(64,200,244,0.0), rgba(33, 121, 181,0.7));
`;

export const ContainerAuth = styled.div`
    height: 100vh;
`;

export const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
    margin-bottom: 20px;
`;

export const FormLabel = styled.label`
    color: #999999;
    font-size: 0.8rem;
`;

export const InputCustom = styled.input`
    border-color: #dbdbdb;
    width: auto;
    width: 300px;
    min-height: 30px;
    :focus {
        color: #555555;
        border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 0px;
    }
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
`;

export const ButtomCustom = styled.button`
    color: #ffffff;
    background-color: #40c8f4;
    border :0px;
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
    width: 100px;
    min-height: 30px;
    
    :hover {
        background-color: #40c8f470;
    }
`;

export const ButtomLogin = styled.button`
display: flex;
justify-content: space-evenly;
    color: black;
    background-color: #ffffffff;
    border :0px;
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
    width: 100px;
    min-height: 30px;
    box-shadow: 0.3px 0.3px 0.5px grey;
    :hover {
        box-shadow: 1px 1px 3px grey;
    }
`;

export const SpanError = styled.span`
    color: #e78;
    font-size: 12px;
    margin-top: 5px;
`;

