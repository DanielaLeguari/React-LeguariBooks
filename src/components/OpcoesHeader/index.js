import React from 'react';
import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    min-width: 120px;
    cursor: pointer;
`
const OpcoesHeader = () => {
    return (
        <>
            <Opcoes>
                {textoOpcoes.map((texto) => (
                    <Opcao key={1}><p>{texto}</p></Opcao>
                ))}
            </Opcoes>
        </>
    );
}

export default OpcoesHeader;
