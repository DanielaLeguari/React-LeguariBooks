import './App.css';
import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.main`
      width: 100vw;
      height: 100vh;
      background: rgb(240,205,220);
      background: radial-gradient(circle, rgba(240,205,220,0.8465511204481793) 0%, rgba(241,240,229,1) 100%);
`

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
