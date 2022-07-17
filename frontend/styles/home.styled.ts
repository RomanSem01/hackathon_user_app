import styled from 'styled-components';
import themes from '../constants/themes';
import homeBg from '../public/homeBg.jpg';

export const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: url(${homeBg.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${themes.colors.homeBg};
  background-attachment: fixed;
  font-family: ${themes.font.family.quicksand};
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 65px;
  position: fixed;
  line-height: 65px;
  text-align: center;
  transition: 0.5s;
  z-index: 2;
  &.affix {
    padding: 0;
    background-color: #111;
  }
`;

export const Logo = styled.div`
  float: left;
  width: auto;
  height: auto;
  padding-left: 3rem;
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: ${themes.font.size.oneAndHalf};
  &:hover {
    color: #00e676;
  }
`;

export const MailList = styled.div`
  height: 65px;
  float: right;
`;

export const List = styled.ul`
  width: 100%;
  height: 65px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  width: auto;
  height: 65px;
  padding: 0;
  padding-right: 3rem;
`;

export const ListItemLink = styled.div`
  text-decoration: none;
  color: ${themes.colors.secondary};
  line-height: 65px;
  font-size: ${themes.font.size.oneAndHalf};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 90px;
`;

export const ListContainer = styled.div`
  color: ${themes.colors.secondary};
  width: 90%;
  min-height: 500px;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  margin-bottom: 5rem;
`;

export const TableHead = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
`;

export const TableData = styled.div`
  width: 20%;
  text-align: center;
  font-size: ${themes.font.size.oneAndHalf};

  @media ${themes.media.maxTabletLandScape} {
    width: 15%;
  }
`;

export const TableBody = styled.div`
  width: 100%;
`;

export const TableBodyRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;

  &.collapsed {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const TableBodyData = styled.div`
  width: 20%;
  text-align: center;
  @media ${themes.media.maxTabletLandScape} {
    width: 15%;
  }

  &.collapsed {
    min-width: 12.5%;
    text-align: center;
  }
  &.arrow {
    width: 30px;
    position: absolute;
    right: 1.5rem;
    cursor: pointer;
  }

  &.delete {
    width: 30px;
    position: absolute;
    right: 6.5rem;
    cursor: pointer;
    color: ${themes.colors.deleteBtn};
    font-weight: ${themes.font.weight.bold};
    font-size: ${themes.font.size.vistaco};
  }
`;

export const Icon = styled.div`
  &.checkmark {
    svg {
      color: green;
    }
  }
  &.closemark {
    svg {
      color: red;
    }
  }
`;

export const ArrowContainer = styled.div`
  min-width: 20px;
  transition: transform 0.3s;

  &.open {
    transform: rotate(180deg);
  }
`;
export const DeleteBtnContainer = styled.div`
  /* position */
`;

export const AuthMessage = styled.h1`
  width: 50%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    padding: 10px;
    color: ${themes.colors.authBtn};
    text-decoration: underline;
  }
`;
