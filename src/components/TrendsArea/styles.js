import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    flex: 1;
    padding: 20px;
    transition: 1s;
    float: left;
    overflow: scroll;
    height: calc(100% - 100px);

    ::-webkit-scrollbar {
        width: 0px;
    }
    @media (max-width: 968px) {
        width: 0;
        display: none;
    }
`;

export const TrendContent = styled.div`
    min-height: 200px;
    border-radius: 20px;
    padding: 15px;
    max-width: 100%;
    background-color: rgb(0,0,0,0.02);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    transition: 1s;
    
    :hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 20px 0 rgba(0, 0, 0, 0.2);
    }
`;

export const Title = styled.h2`
   font-weight: bold;
   color: rgb(0,0,0,0.5);
   margin-top: 0px;
`;

export const TitleTrend = styled.h3`
   font-weight: bold;
   color: rgb(0,0,0,0.5);
   margin-top: 0px;
`;

export const Separator = styled.hr`
   margin: 0px;
   color: rgb(0,0,0,0.5);
`;

export const Footer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const FooterText = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: rgb(0,0,0,0.5);
    margin-bottom:2px;
    
`;

export const SearchInput = styled.input`
    border-radius: 20px;
    border-style: none;
    width: 100%;
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: bold;
    color: rgb(0,0,0,0.5);
    height:36px;
    background-color: rgb(0,0,0,0.02);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.2);
`;