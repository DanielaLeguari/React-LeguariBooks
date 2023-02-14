import React from 'react';
import styled from 'styled-components';
import Input from '../Input';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Titulo = styled.h2`
  color: #FFF;
  font-size: 2.25rem;
  text-align: center;
  width: 100%;
`

const Subtitulo = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 40px;
`

const Pesquisa = () => {
  return (
    <>
      <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
        <Input placeholder='Escreva sua próxima leitura'
        onBlur={(evento) => console.log(evento.target.value)}
        />
      </PesquisaContainer>
    </>
  );
}

export default Pesquisa;
