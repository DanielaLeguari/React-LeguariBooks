import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const textoOpcoes = [{ label: 'CATEGORIAS', link: '/categorias' },
{ label: 'FAVORITOS', link: '/favoritos' }, { label: 'MINHA ESTANTE', link: '/minhaestante' }];

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    min-width: 120px;
    color: #002F52;
    cursor: pointer;
`
const linkStyle = {
    textDecoration: "none",
    color: '#002F52',
    fontSize: '20px',
    cursor: 'pointer',
    fontWeight: '700',
  }

const OpcoesHeader = () => {
    return (
        <>
            <Opcoes>
                {textoOpcoes.map((item) => (
                    <Opcao key={1}><Link style={linkStyle} to={item.link} >{item.label}</Link></Opcao>
                ))}
            </Opcoes>
        </>
    );
}

export default OpcoesHeader;
