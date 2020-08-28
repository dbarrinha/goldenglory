import React from 'react';
import { Container, TrendContent, Title, Footer, FooterText, SearchInput, TitleTrend, Separator } from './styles';

function TrendsArea() {
  return (
    <Container>
      <Title className="animated fadeInRight">Trend Topics</Title>

      <SearchInput className="animated fadeInRight delay-100ms" placeholder="Buscar no Twitter" />

      <TrendContent className="animated fadeInRight delay-200ms">
        <TitleTrend>O que está acontecendo</TitleTrend>
        <Separator />

      </TrendContent>

      <Footer className="animated fadeInRight delay-300ms">
        <FooterText>Feracode Test</FooterText>
        <FooterText>Danilo Falcão Barrinha</FooterText>
        <FooterText>dbarrinha@hotmail.com</FooterText>
        <FooterText>16/05/2020</FooterText>
      </Footer>
    </Container>
  );
}

export default TrendsArea;