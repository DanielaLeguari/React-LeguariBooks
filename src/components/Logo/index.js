import React from 'react';
import logo from '../../imagens/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 1.875rem;
`
const Imagem = styled.img`
    margin-right: 0.625rem;
    width: 100px;
    height: 100px;  
`

const Logo = () => {
    return (
        <>
            <LogoContainer>
                <Imagem
                    src={logo} alt='logo da loja'>
                </Imagem>
                <p>Leguari<strong>Books</strong></p>
            </LogoContainer>
        </>
    );
}

export default Logo;
