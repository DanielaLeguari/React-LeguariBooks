import React from 'react';
import logo from '../../imagens/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
    display: flex;
    font-size: 1.875rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`
const Imagem = styled.img`
    margin-right: 0.625rem;
    width: 100px;
    height: 100px;  
`
const linkStyle = {
    display: 'flex',
    fontSize: '1.875rem',
    color: '#002F52',
    textDecoration: "none"
}

const Logo = () => {
    return (
        <>
            <LogoContainer>
                <Imagem
                    src={logo} alt='logo da loja'>
                </Imagem>
                <Link to={'/'} style={linkStyle}>Leguari<strong>Books</strong></Link>
            </LogoContainer>
        </>
    );
}

export default Logo;
