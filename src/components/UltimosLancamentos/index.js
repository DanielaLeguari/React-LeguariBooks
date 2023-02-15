import { listaLivros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/ilha.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const Imagem = styled.img`
  width: 155px;
  height: 195px;
  margin-right: 1rem;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo
        cor='#EB9B00'
        tamanhoFonte='36px'
        alinhamento='center'>
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {listaLivros.map(livro => (
          <Imagem key={livro.id} src={livro.src} alt='' />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda 
      titulo="Talvez você se interesse por"
      subtitulo="A ilha Perdida"
      descricao="Série Vagalume"
      imagem={imagemLivro}
      />
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos
