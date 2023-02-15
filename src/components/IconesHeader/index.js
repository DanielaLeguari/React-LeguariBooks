import React from 'react';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`

const IconeContainer = styled.li`
 margin-right: 2.5rem;
    width: 25px;
    list-style: none;
`
const IconesHeader = () => {
    return (
        <>
            <IconesContainer>
                {icones.map((icones) => (
                    <IconeContainer key={1}>
                        <img src={icones} alt='icones' />
                    </IconeContainer>
                ))}
            </IconesContainer>
        </>
    );
}

export default IconesHeader;
