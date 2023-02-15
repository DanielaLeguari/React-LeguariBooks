import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { useState } from 'react';
import { listaLivros } from './dadosPesquisa.js';

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

const Imagem = styled.img`
width: 90px;
height: 120px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
    p {
        width: 200px;
    }
    
    &:hover {
        border: 1px solid white;
    }
`

const Pesquisa = () => {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <>
      <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
        <Input placeholder='Escreva sua próxima leitura'
          onBlur={(evento) => {
            const textoDigitado = evento.target.value.toLowerCase();
            const resultadoPesquisa = listaLivros.filter(livro => livro.titulo.toLowerCase().includes(textoDigitado));
            setLivrosPesquisados(resultadoPesquisa);
          }}
        />
        {livrosPesquisados.map(livro => (
          <Resultado key={livro.id} >
            <p>{livro.titulo}</p>
            <Imagem src={livro.src} alt='imagem do livro' />
          </Resultado>
        ))}
      </PesquisaContainer>
    </>
  );
}

export default Pesquisa;
