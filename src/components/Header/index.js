import Logo from "../Logo";
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-image: linear-gradient(90deg, #f6f6f6 35%, #326589 165%);
    display: flex;
    list-style: none;
`

const Menu = styled.div`
    display: flex;
    width: 100%;
     justify-content: flex-end;
`

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Logo />
                <Menu>
                    <OpcoesHeader />
                    <IconesHeader />
                </Menu>
            </HeaderContainer>
        </>
    );
}

export default Header;
