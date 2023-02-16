import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Pesquisa from '../../components/Pesquisa';
import UltimosLancamentos from '../../components/UltimosLancamentos';

const AppContainer = styled.main`
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

const Home = () => {
    return (
        <>
            <AppContainer>
                <Header />
                <Pesquisa />
            </AppContainer>
            <UltimosLancamentos />
        </>
    );
}

export default Home;
